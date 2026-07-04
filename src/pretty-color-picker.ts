import { MOON_ICON, SUN_ICON } from './icons'
import styles from './styles/color-picker.css?inline'
import { renderPickerPlane } from './color/canvas'
import {
  colorFromPlanePosition,
  colorHueAngle,
  colorWithHue,
  formatFieldsFor,
  normalizeOklch,
  oklchFromCss,
  oklchToAlphaGradient,
  oklchToCss,
  oklchToHex,
  oklchToRgb,
  parseFormatFields,
  planePositionFromColor,
  rgbAtHueSlider,
} from './color/conversions'
import { colorsEqual, loadHistory, saveToHistory } from './utils/history'
import {
  compositeOverChecker,
  handleColorForRgb,
  parseHexColor,
  type Rgb255,
} from './utils/contrast'
import { bindHorizontalScrub, bindPointerDrag } from './utils/pointer'
import { bindPanelDrag, centerPanel } from './utils/panel-drag'
import {
  DEFAULT_COLOR,
  type ColorChangeDetail,
  type ColorFormat,
  type OklchColor,
  type PickerHeaderAction,
  type PickerTheme,
  type ThemeChangeDetail,
  type FormatField,
} from './types'

type RefreshOptions = {
  refreshFields?: boolean
}

const FORMATS: ColorFormat[] = ['hex', 'rgb', 'hsl', 'oklch']
const FORMAT_LABELS: Record<ColorFormat, string> = {
  hex: 'HEX',
  rgb: 'RGB',
  hsl: 'HSL',
  oklch: 'OKLCH',
}

export class PrettyColorPicker extends HTMLElement {
  static get observedAttributes(): string[] {
    return ['value', 'theme', 'header-action', 'movable', 'history']
  }

  #shadow: ShadowRoot
  #color: OklchColor = { ...DEFAULT_COLOR }
  #format: ColorFormat = 'hsl'
  #history: OklchColor[] = loadHistory()
  #editStartColor: OklchColor | null = null
  #cleanups: Array<() => void> = []

  #planeCanvas!: HTMLCanvasElement
  #planeWrap!: HTMLElement
  #planeCursor!: HTMLElement
  #hueRow!: HTMLElement
  #hueHandle!: HTMLElement
  #alphaRow!: HTMLElement
  #alphaFill!: HTMLElement
  #alphaHandle!: HTMLElement
  #tabsPill!: HTMLElement
  #fieldsContainer!: HTMLElement
  #swatchFill!: HTMLElement
  #alphaInput!: HTMLInputElement
  #historyContainer!: HTMLElement
  #historySection!: HTMLElement
  #themeToggleBtn: HTMLButtonElement | null = null
  #movableCleanup: (() => void) | null = null

  constructor() {
    super()
    this.#shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback(): void {
    this.#render()
    this.#bind()
    this.#applyValueAttribute()
    this.#refreshAll()
  }

  disconnectedCallback(): void {
    this.#cleanups.forEach((fn) => fn())
    this.#cleanups = []
  }

  attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
    if (!this.isConnected) return
    if (name === 'value' && value != null) {
      const parsed = oklchFromCss(value)
      if (parsed) {
        this.#color = parsed
        this.#refreshAll(false)
      }
      return
    }
    if (name === 'theme') {
      this.#updateThemeToggleButton()
    }
    if (name === 'movable') {
      this.#syncMovable()
    }
    if (name === 'history') {
      this.#syncHistorySection()
    }
  }

  get value(): string {
    return oklchToCss(this.#color)
  }

  set value(v: string) {
    const parsed = oklchFromCss(v)
    if (parsed) {
      this.#color = parsed
      this.#refreshAll()
    }
  }

  get color(): OklchColor {
    return { ...this.#color }
  }

  set color(c: OklchColor) {
    this.#color = normalizeOklch(c)
    this.#refreshAll()
  }

  get theme(): PickerTheme {
    const value = this.getAttribute('theme')
    if (value === 'light' || value === 'system') return value
    return 'dark'
  }

  set theme(value: PickerTheme) {
    this.setAttribute('theme', value)
  }

  get headerAction(): PickerHeaderAction {
    return this.getAttribute('header-action') === 'theme' ? 'theme' : 'close'
  }

  set headerAction(value: PickerHeaderAction) {
    this.setAttribute('header-action', value)
  }

  get movable(): boolean {
    return this.hasAttribute('movable')
  }

  set movable(value: boolean) {
    if (value) this.setAttribute('movable', '')
    else this.removeAttribute('movable')
  }

  /** Last Used swatch grid — on by default; set `history="false"` to hide. */
  get history(): boolean {
    const value = this.getAttribute('history')
    if (value === null) return true
    return value !== 'false' && value !== '0'
  }

  set history(value: boolean) {
    if (value) this.removeAttribute('history')
    else this.setAttribute('history', 'false')
  }

  #applyValueAttribute(): void {
    const attr = this.getAttribute('value')
    if (attr) {
      const parsed = oklchFromCss(attr)
      if (parsed) this.#color = parsed
    }
  }

  #render(): void {
    const headerButton =
      this.headerAction === 'theme'
        ? `<button type="button" class="pcp-header-btn pcp-theme-toggle" aria-label="Switch to light mode">${SUN_ICON}</button>`
        : `<button type="button" class="pcp-header-btn pcp-close" aria-label="Close">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M4.25 4.25L11.75 11.75M11.75 4.25L4.25 11.75"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>`

    this.#shadow.innerHTML = `
      <style>${styles}</style>
      <div class="pcp" part="container">
        <header class="pcp-header">
          <h2 class="pcp-title">Pretty Color Picker</h2>
          ${headerButton}
        </header>
        <div class="pcp-plane-wrap pcp-clip">
          <canvas class="pcp-plane" width="240" height="180" aria-label="Color plane"></canvas>
          <div class="pcp-cursor" aria-hidden="true"></div>
        </div>
        <div class="pcp-slider-wrapper">
          <div class="pcp-slider pcp-clip pcp-hue-row" aria-label="Hue">
            <div class="pcp-slider-fill pcp-slider-fill-hue"></div>
            <div class="pcp-slider-handle"></div>
          </div>
        </div>
        <div class="pcp-slider-wrapper">
          <div class="pcp-slider pcp-clip pcp-alpha-row" aria-label="Opacity">
            <div class="pcp-slider-fill pcp-slider-fill-alpha"></div>
            <div class="pcp-slider-handle"></div>
          </div>
        </div>
        <div class="pcp-tabs" role="tablist">
          <div class="pcp-tabs-pill"></div>
          ${FORMATS.map((f) => `<button type="button" class="pcp-tab" role="tab" data-format="${f}">${FORMAT_LABELS[f]}</button>`).join('')}
        </div>
        <div class="pcp-inputs">
          <div class="pcp-swatch pcp-clip" aria-hidden="true">
            <span class="pcp-swatch-fill"></span>
          </div>
          <div class="pcp-fields"></div>
          <div class="pcp-field pcp-alpha-field">
            <span class="pcp-field-label">A</span>
            <input class="pcp-field-input pcp-alpha-input" type="text" inputmode="numeric" value="80%" aria-label="Opacity" />
          </div>
        </div>
        <div class="pcp-history-section">
          <p class="pcp-history-label">Last Used</p>
          <div class="pcp-history"></div>
        </div>
      </div>
    `

    this.#planeCanvas = this.#shadow.querySelector('.pcp-plane')!
    this.#planeWrap = this.#shadow.querySelector('.pcp-plane-wrap')!
    this.#planeCursor = this.#shadow.querySelector('.pcp-cursor')!
    this.#hueRow = this.#shadow.querySelector('.pcp-hue-row')!
    this.#hueHandle = this.#hueRow.querySelector('.pcp-slider-handle')!
    this.#alphaRow = this.#shadow.querySelector('.pcp-alpha-row')!
    this.#alphaFill = this.#shadow.querySelector('.pcp-slider-fill-alpha')!
    this.#alphaHandle = this.#alphaRow.querySelector('.pcp-slider-handle')!
    this.#tabsPill = this.#shadow.querySelector('.pcp-tabs-pill')!
    this.#fieldsContainer = this.#shadow.querySelector('.pcp-fields')!
    this.#swatchFill = this.#shadow.querySelector('.pcp-swatch-fill')!
    this.#alphaInput = this.#shadow.querySelector('.pcp-alpha-input')!
    this.#historySection = this.#shadow.querySelector('.pcp-history-section')!
    this.#historyContainer = this.#shadow.querySelector('.pcp-history')!
    this.#themeToggleBtn = this.#shadow.querySelector('.pcp-theme-toggle')
    this.#updateThemeToggleButton()
  }

  #bind(): void {
    const closeBtn = this.#shadow.querySelector('.pcp-close')
    closeBtn?.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }))
    })

    this.#themeToggleBtn?.addEventListener('click', () => this.#toggleTheme())

    this.#cleanups.push(
      bindPointerDrag(
        this.#planeWrap,
        (x, y) => this.#onPlaneMove(x, y),
        () => this.#commitHistory(),
        () => this.#captureEditStart(),
      ),
    )

    this.#cleanups.push(
      bindPointerDrag(
        this.#hueRow,
        (x) => this.#onHueMove(x),
        () => this.#commitHistory(),
        () => this.#captureEditStart(),
      ),
    )

    this.#cleanups.push(
      bindPointerDrag(
        this.#alphaRow,
        (x) => this.#onAlphaMove(x),
        () => this.#commitHistory(),
        () => this.#captureEditStart(),
      ),
    )

    this.#cleanups.push(this.#bindSliderHover(this.#hueRow))
    this.#cleanups.push(this.#bindSliderHover(this.#alphaRow))

    this.#shadow.querySelectorAll('.pcp-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        const format = (tab as HTMLElement).dataset.format as ColorFormat
        if (format && format !== this.#format) {
          this.#format = format
          this.#refreshPlane()
          this.#refreshTabs()
          this.#refreshFields()
          this.#refreshCursor()
        }
      })
    })

    this.#alphaInput.addEventListener('focus', () => this.#captureEditStart())
    this.#alphaInput.addEventListener('change', () => this.#onAlphaInput())
    this.#alphaInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.#onAlphaInput()
    })

    this.#cleanups.push(this.#bindAlphaLabelScrub())

    this.#syncMovable()
    this.#syncHistorySection()
  }

  #syncHistorySection(): void {
    if (!this.history) {
      this.#historySection.hidden = true
      this.#historyContainer.innerHTML = ''
      return
    }
    this.#refreshHistory()
  }

  #syncMovable(): void {
    if (this.#movableCleanup) {
      const idx = this.#cleanups.indexOf(this.#movableCleanup)
      if (idx >= 0) this.#cleanups.splice(idx, 1)
      this.#movableCleanup()
      this.#movableCleanup = null
    }

    if (!this.movable) {
      this.style.position = ''
      this.style.left = ''
      this.style.top = ''
      this.style.zIndex = ''
      this.removeAttribute('data-positioned')
      return
    }

    if (!this.hasAttribute('data-positioned')) {
      requestAnimationFrame(() => {
        centerPanel(this)
        this.setAttribute('data-positioned', '')
      })
    }

    const header = this.#shadow.querySelector('.pcp-header')
    if (!header) return

    this.#movableCleanup = bindPanelDrag(header as HTMLElement, this)
    this.#cleanups.push(this.#movableCleanup)
  }

  #captureEditStart(): void {
    this.#editStartColor = { ...this.#color }
  }

  #resolvedTheme(): 'dark' | 'light' {
    if (this.theme === 'light') return 'light'
    if (this.theme === 'dark') return 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  #toggleTheme(): void {
    const next: 'dark' | 'light' = this.#resolvedTheme() === 'light' ? 'dark' : 'light'
    this.theme = next
    this.#updateThemeToggleButton()
    const detail: ThemeChangeDetail = { theme: next }
    this.dispatchEvent(
      new CustomEvent<ThemeChangeDetail>('themechange', {
        detail,
        bubbles: true,
        composed: true,
      }),
    )
  }

  #updateThemeToggleButton(): void {
    if (!this.#themeToggleBtn) return
    const isLight = this.#resolvedTheme() === 'light'
    this.#themeToggleBtn.innerHTML = isLight ? MOON_ICON : SUN_ICON
    this.#themeToggleBtn.setAttribute(
      'aria-label',
      isLight ? 'Switch to dark mode' : 'Switch to light mode',
    )
  }

  #bindSliderHover(slider: HTMLElement): () => void {
    const onEnter = () => {
      slider.dataset.active = 'true'
    }
    const onLeave = () => {
      const handle = slider.querySelector('.pcp-slider-handle')
      if (!handle?.hasAttribute('data-dragging')) delete slider.dataset.active
    }
    slider.addEventListener('pointerenter', onEnter)
    slider.addEventListener('pointerleave', onLeave)
    return () => {
      slider.removeEventListener('pointerenter', onEnter)
      slider.removeEventListener('pointerleave', onLeave)
    }
  }

  #setSliderHandlePosition(handle: HTMLElement, t: number): void {
    const pct = Math.max(0, Math.min(1, t)) * 100
    handle.style.left = `max(1px, calc(${pct}% - 1.5px))`
  }

  #getCheckerColors(): { base: Rgb255; tone: Rgb255 } {
    const style = getComputedStyle(this)
    const base =
      parseHexColor(style.getPropertyValue('--pcp-checker-base').trim()) ?? { r: 255, g: 255, b: 255 }
    const tone =
      parseHexColor(style.getPropertyValue('--pcp-checker-tone').trim()) ?? { r: 204, g: 204, b: 204 }
    return { base, tone }
  }

  #parseHandleT(handle: HTMLElement, fallback: number): number {
    const match = handle.style.left.match(/calc\(([\d.]+)%/)
    return match ? parseFloat(match[1]!) / 100 : fallback
  }

  #sampleSliderBackground(t: number, kind: 'hue' | 'alpha'): Rgb255 {
    if (kind === 'hue') return rgbAtHueSlider(t)
    const { base, tone } = this.#getCheckerColors()
    return compositeOverChecker(oklchToRgb(this.#color), t, base, tone)
  }

  #updateSliderHandleColor(handle: HTMLElement, t: number, kind: 'hue' | 'alpha'): void {
    const sample = this.#sampleSliderBackground(t, kind)
    handle.style.background = handleColorForRgb(sample.r, sample.g, sample.b)
  }

  #updateSliderHandle(handle: HTMLElement, t: number, kind: 'hue' | 'alpha'): void {
    this.#setSliderHandlePosition(handle, t)
    this.#updateSliderHandleColor(handle, t, kind)
  }

  #onPlaneMove(x: number, y: number): void {
    this.#planeCursor.dataset.dragging = 'true'
    const hue = this.#planeHue()
    this.#setColor(colorFromPlanePosition(x, y, hue, this.#color.alpha), true)
    this.#updateCursor(x, y)
  }

  #onHueMove(x: number): void {
    this.#hueRow.dataset.active = 'true'
    this.#hueHandle.dataset.dragging = 'true'
    this.#updateSliderHandle(this.#hueHandle, x, 'hue')
    const hue = x * 360
    this.#setColor(colorWithHue(this.#color, hue), true)
  }

  #onAlphaMove(x: number): void {
    this.#alphaRow.dataset.active = 'true'
    this.#alphaHandle.dataset.dragging = 'true'
    this.#setColor(normalizeOklch({ ...this.#color, alpha: x }), true)
    this.#updateSliderHandle(this.#alphaHandle, x, 'alpha')
  }

  #readHueFromSlider(): number {
    const left = this.#hueHandle.style.left
    const match = left.match(/calc\(([\d.]+)%/)
    if (match) return (parseFloat(match[1]) / 100) * 360
    return colorHueAngle(this.#color)
  }

  #onAlphaInput(): void {
    const raw = this.#alphaInput.value.replace(/%/g, '').trim()
    const n = Number(raw)
    if (Number.isNaN(n)) {
      this.#refreshAlphaField()
      return
    }
    this.#setColor(normalizeOklch({ ...this.#color, alpha: n / 100 }), true)
    this.#commitHistory()
  }

  #onFieldInput(key: string, value: string): void {
    this.#applyFieldValues({ [key]: value }, true)
  }

  #applyFieldValues(overrides: Record<string, string>, commit = true): void {
    const fields: Record<string, string> = {}
    formatFieldsFor(this.#color, this.#format).forEach((f) => {
      fields[f.key] = overrides[f.key] ?? f.value
    })
    const parsed = parseFormatFields(this.#format, fields, this.#color)
    if (parsed) {
      this.#setColor(parsed, true)
      if (commit) this.#commitHistory()
    }
  }

  #scrubStepFor(def: FormatField, fine: boolean): number {
    const min = def.min ?? 0
    const max = def.max ?? 100
    const range = max - min
    const base = def.step != null && def.step < 1 ? range / 120 : (def.step ?? 1)
    return fine ? base * 0.1 : base
  }

  #formatScrubbedValue(def: FormatField, value: number): string {
    if (def.step != null && def.step < 1) return value.toFixed(3)
    return String(Math.round(value))
  }

  #scrubField(key: string, def: FormatField, deltaX: number, fine: boolean): void {
    const current = formatFieldsFor(this.#color, this.#format).find((f) => f.key === key)
    if (!current) return

    const min = def.min ?? 0
    const max = def.max ?? 100
    const step = this.#scrubStepFor(def, fine)
    let next = Number(current.value) + deltaX * step

    if (def.step != null && def.step < 1) {
      next = Math.round(next / def.step) * def.step
      next = Math.min(max, Math.max(min, next))
    } else {
      next = Math.min(max, Math.max(min, Math.round(next)))
    }

    const formatted = this.#formatScrubbedValue(def, next)
    const fields: Record<string, string> = {}
    formatFieldsFor(this.#color, this.#format).forEach((f) => {
      fields[f.key] = f.key === key ? formatted : f.value
    })

    const parsed = parseFormatFields(this.#format, fields, this.#color)
    if (!parsed) return

    this.#setColor(parsed, true, { refreshFields: false })

    const input = this.#fieldsContainer.querySelector(
      `.pcp-field-input[data-key="${key}"]`,
    ) as HTMLInputElement | null
    if (input) input.value = formatted
  }

  #scrubAlpha(deltaX: number, fine: boolean): void {
    const step = fine ? 0.05 : 0.5
    let nextPct = this.#color.alpha * 100 + deltaX * step
    nextPct = Math.min(100, Math.max(0, fine ? nextPct : Math.round(nextPct)))
    const alpha = nextPct / 100

    this.#setColor(normalizeOklch({ ...this.#color, alpha }), true, { refreshFields: false })
    this.#alphaInput.value = `${Math.round(nextPct)}%`
  }

  #bindAlphaLabelScrub(): () => void {
    const labelEl = this.#shadow.querySelector('.pcp-alpha-field .pcp-field-label') as HTMLElement | null
    if (!labelEl) return () => {}

    return bindHorizontalScrub(labelEl, {
      onStart: () => {
        this.#captureEditStart()
        labelEl.setAttribute('data-scrubbing', 'true')
        document.body.style.cursor = 'ew-resize'
      },
      onDelta: (deltaX, event) => this.#scrubAlpha(deltaX, event.shiftKey),
      onEnd: () => {
        labelEl.removeAttribute('data-scrubbing')
        document.body.style.cursor = ''
        this.#commitHistory()
        this.#refreshAlphaField()
      },
    })
  }

  #bindFieldLabelScrubs(defs: FormatField[]): void {
    if (this.#format === 'hex') return

    this.#fieldsContainer.querySelectorAll('.pcp-field-label').forEach((labelEl) => {
      const fieldEl = labelEl.closest('.pcp-field')
      if (!fieldEl) return

      const key = [...fieldEl.classList]
        .find((c) => c.startsWith('pcp-field-') && c !== 'pcp-field')
        ?.slice('pcp-field-'.length)
      if (!key) return

      const def = defs.find((f) => f.key === key)
      if (!def || def.min == null || def.max == null) return

      bindHorizontalScrub(labelEl as HTMLElement, {
        onStart: () => {
          this.#captureEditStart()
          labelEl.setAttribute('data-scrubbing', 'true')
          document.body.style.cursor = 'ew-resize'
        },
        onDelta: (deltaX, event) => this.#scrubField(key, def, deltaX, event.shiftKey),
        onEnd: () => {
          labelEl.removeAttribute('data-scrubbing')
          document.body.style.cursor = ''
          this.#commitHistory()
          this.#refreshFields()
        },
      })
    })
  }

  #setColor(color: OklchColor, emit = true, options?: RefreshOptions): void {
    this.#color = normalizeOklch(color)
    this.#refreshVisuals(emit, options)
  }

  #refreshAll(emit = true): void {
    this.#refreshPlane()
    this.#refreshTabs()
    this.#refreshVisuals(emit)
    this.#refreshHistory()
  }

  #refreshVisuals(emit: boolean, options?: RefreshOptions): void {
    if (options?.refreshFields !== false) {
      this.#refreshFields()
    }
    this.#refreshSwatch()
    this.#refreshSliders()
    this.#refreshCursor()
    this.#refreshPlane()
    if (emit) this.#emitChange()
  }

  #planeHue(): number {
    if (this.#hueHandle.hasAttribute('data-dragging')) {
      return this.#readHueFromSlider()
    }
    return colorHueAngle(this.#color)
  }

  #refreshPlane(): void {
    renderPickerPlane(this.#planeCanvas, this.#planeHue())
  }

  #refreshCursor(): void {
    const { x, y } = planePositionFromColor(this.#color)
    this.#updateCursor(x, y)
  }

  #updateCursor(x: number, y: number): void {
    this.#planeCursor.style.left = `${x * 100}%`
    this.#planeCursor.style.top = `${y * 100}%`
  }

  #refreshSliders(): void {
    const hue = colorHueAngle(this.#color)
    const hueT = this.#hueHandle.hasAttribute('data-dragging')
      ? this.#parseHandleT(this.#hueHandle, hue / 360)
      : hue / 360

    if (this.#hueHandle.hasAttribute('data-dragging')) {
      this.#updateSliderHandleColor(this.#hueHandle, hueT, 'hue')
    } else {
      this.#updateSliderHandle(this.#hueHandle, hueT, 'hue')
    }

    const alphaT = this.#alphaHandle.hasAttribute('data-dragging')
      ? this.#parseHandleT(this.#alphaHandle, this.#color.alpha)
      : this.#color.alpha

    if (this.#alphaHandle.hasAttribute('data-dragging')) {
      this.#updateSliderHandleColor(this.#alphaHandle, alphaT, 'alpha')
    } else {
      this.#updateSliderHandle(this.#alphaHandle, alphaT, 'alpha')
    }

    this.#refreshAlphaSlider()
  }

  #refreshAlphaSlider(): void {
    this.#alphaFill.style.setProperty('--pcp-alpha-gradient', oklchToAlphaGradient(this.#color))
  }

  #setSwatchFill(el: HTMLElement, color: OklchColor): void {
    const { r, g, b } = oklchToRgb(color)
    el.style.setProperty('--swatch-solid', `rgb(${r}, ${g}, ${b})`)
    el.style.setProperty('--swatch-alpha', `rgba(${r}, ${g}, ${b}, ${color.alpha})`)
  }

  #refreshSwatch(): void {
    this.#setSwatchFill(this.#swatchFill, this.#color)
  }

  #refreshAlphaField(): void {
    this.#alphaInput.value = `${Math.round(this.#color.alpha * 100)}%`
  }

  #refreshFields(): void {
    const fields = formatFieldsFor(this.#color, this.#format)
    this.#fieldsContainer.dataset.format = this.#format
    this.#fieldsContainer.innerHTML = fields
      .map(
        (f) => `
        <div class="pcp-field pcp-field-${f.key}">
          <span class="pcp-field-label">${f.label}</span>
          <input
            class="pcp-field-input"
            type="text"
            data-key="${f.key}"
            value="${f.value}"
            aria-label="${f.label}"
          />
        </div>
      `,
      )
      .join('')

    this.#fieldsContainer.querySelectorAll('.pcp-field-input').forEach((input) => {
      const el = input as HTMLInputElement
      const key = el.dataset.key!
      el.addEventListener('focus', () => this.#captureEditStart())
      el.addEventListener('change', () => this.#onFieldInput(key, el.value))
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.#onFieldInput(key, el.value)
      })
    })

    this.#bindFieldLabelScrubs(fields)

    this.#refreshAlphaField()
  }

  #refreshTabs(): void {
    const tabs = this.#shadow.querySelectorAll('.pcp-tab')
    let activeTab: Element | null = null
    tabs.forEach((tab) => {
      const isActive = (tab as HTMLElement).dataset.format === this.#format
      tab.setAttribute('data-active', String(isActive))
      tab.setAttribute('aria-selected', String(isActive))
      if (isActive) activeTab = tab
    })

    if (activeTab) {
      const el = activeTab as HTMLElement
      const left = el.offsetLeft
      const width = el.offsetWidth
      this.#tabsPill.style.left = `${left}px`
      this.#tabsPill.style.width = `${width}px`
    }
  }

  #refreshHistory(): void {
    if (!this.history) return

    this.#historySection.hidden = this.#history.length === 0

    this.#historyContainer.innerHTML = this.#history
      .map((c, i) => {
        return `
          <button type="button" class="pcp-history-swatch pcp-clip" data-index="${i}" aria-label="Color ${oklchToHex(c)}">
            <span class="pcp-swatch-fill" data-history-fill="${i}"></span>
          </button>
        `
      })
      .join('')

    this.#historyContainer.querySelectorAll('[data-history-fill]').forEach((el) => {
      const index = Number((el as HTMLElement).dataset.historyFill)
      const item = this.#history[index]
      if (item) this.#setSwatchFill(el as HTMLElement, item)
    })

    this.#historyContainer.querySelectorAll('.pcp-history-swatch').forEach((btn) => {
      btn.addEventListener('click', () => {
        const index = Number((btn as HTMLElement).dataset.index)
        const item = this.#history[index]
        if (item) this.#setColor({ ...item }, true, { refreshFields: true })
      })
    })
  }

  #commitHistory(): void {
    delete this.#planeCursor.dataset.dragging
    delete this.#hueHandle.dataset.dragging
    delete this.#alphaHandle.dataset.dragging
    delete this.#hueRow.dataset.active
    delete this.#alphaRow.dataset.active
    const previous = this.#editStartColor
    this.#editStartColor = null
    if (this.history && previous && !colorsEqual(previous, this.#color)) {
      this.#history = saveToHistory(previous, this.#history)
      this.#refreshHistory()
    }
  }

  #emitChange(): void {
    const detail: ColorChangeDetail = {
      color: { ...this.#color },
      css: oklchToCss(this.#color),
      hex: oklchToHex(this.#color),
    }
    this.dispatchEvent(
      new CustomEvent<ColorChangeDetail>('change', {
        detail,
        bubbles: true,
        composed: true,
      }),
    )
  }
}

if (!customElements.get('pretty-color-picker')) {
  customElements.define('pretty-color-picker', PrettyColorPicker)
}
