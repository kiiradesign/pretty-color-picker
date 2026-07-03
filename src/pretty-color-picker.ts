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
} from './color/conversions'
import { loadHistory, saveToHistory } from './utils/history'
import { bindPointerDrag } from './utils/pointer'
import {
  DEFAULT_COLOR,
  type ColorChangeDetail,
  type ColorFormat,
  type OklchColor,
} from './types'

const FORMATS: ColorFormat[] = ['hex', 'rgb', 'hsl', 'oklch']
const FORMAT_LABELS: Record<ColorFormat, string> = {
  hex: 'Hex',
  rgb: 'RGB',
  hsl: 'HSL',
  oklch: 'OKLCH',
}

export class PrettyColorPicker extends HTMLElement {
  static get observedAttributes(): string[] {
    return ['value']
  }

  #shadow: ShadowRoot
  #color: OklchColor = { ...DEFAULT_COLOR }
  #format: ColorFormat = 'hsl'
  #history: OklchColor[] = loadHistory()
  #cleanups: Array<() => void> = []
  #planeSwitchTimer: ReturnType<typeof setTimeout> | null = null

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
  #swatchSolid!: HTMLElement
  #swatchAlphaColor!: HTMLElement
  #alphaInput!: HTMLInputElement
  #historyContainer!: HTMLElement

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
    if (this.#planeSwitchTimer) clearTimeout(this.#planeSwitchTimer)
  }

  attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
    if (!this.isConnected || name !== 'value' || value == null) return
    const parsed = oklchFromCss(value)
    if (parsed) {
      this.#color = parsed
      this.#refreshAll(false)
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

  #applyValueAttribute(): void {
    const attr = this.getAttribute('value')
    if (attr) {
      const parsed = oklchFromCss(attr)
      if (parsed) this.#color = parsed
    }
  }

  #render(): void {
    this.#shadow.innerHTML = `
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap" />
      <style>${styles}</style>
      <div class="pcp" part="container">
        <header class="pcp-header">
          <h2 class="pcp-title">Color Picker</h2>
          <button type="button" class="pcp-close" aria-label="Close">×</button>
        </header>
        <div class="pcp-plane-wrap">
          <canvas class="pcp-plane" width="320" height="240" aria-label="Color plane"></canvas>
          <div class="pcp-cursor" aria-hidden="true"></div>
        </div>
        <div class="pcp-slider-wrapper">
          <div class="pcp-slider pcp-hue-row" aria-label="Hue">
            <div class="pcp-slider-track">
              <div class="pcp-slider-hue"></div>
            </div>
            <div class="pcp-slider-handle"></div>
          </div>
        </div>
        <div class="pcp-slider-wrapper">
          <div class="pcp-slider pcp-alpha-row" aria-label="Opacity">
            <div class="pcp-slider-track">
              <div class="pcp-slider-checker"></div>
              <div class="pcp-slider-alpha"></div>
            </div>
            <div class="pcp-slider-handle"></div>
          </div>
        </div>
        <div class="pcp-tabs" role="tablist">
          <div class="pcp-tabs-pill"></div>
          ${FORMATS.map((f) => `<button type="button" class="pcp-tab" role="tab" data-format="${f}">${FORMAT_LABELS[f]}</button>`).join('')}
        </div>
        <div class="pcp-inputs">
          <div class="pcp-swatch" aria-hidden="true">
            <div class="pcp-swatch-solid"></div>
            <div class="pcp-swatch-alpha">
              <div class="pcp-swatch-checker"></div>
              <div class="pcp-swatch-alpha-color"></div>
            </div>
          </div>
          <div class="pcp-fields"></div>
          <div class="pcp-field pcp-alpha-field">
            <span class="pcp-field-label">A</span>
            <input class="pcp-field-input pcp-alpha-input" type="text" inputmode="numeric" value="80%" aria-label="Opacity" />
          </div>
        </div>
        <p class="pcp-history-label">Last Used</p>
        <div class="pcp-history"></div>
      </div>
    `

    this.#planeCanvas = this.#shadow.querySelector('.pcp-plane')!
    this.#planeWrap = this.#shadow.querySelector('.pcp-plane-wrap')!
    this.#planeCursor = this.#shadow.querySelector('.pcp-cursor')!
    this.#hueRow = this.#shadow.querySelector('.pcp-hue-row')!
    this.#hueHandle = this.#hueRow.querySelector('.pcp-slider-handle')!
    this.#alphaRow = this.#shadow.querySelector('.pcp-alpha-row')!
    this.#alphaFill = this.#shadow.querySelector('.pcp-slider-alpha')!
    this.#alphaHandle = this.#alphaRow.querySelector('.pcp-slider-handle')!
    this.#tabsPill = this.#shadow.querySelector('.pcp-tabs-pill')!
    this.#fieldsContainer = this.#shadow.querySelector('.pcp-fields')!
    this.#swatchSolid = this.#shadow.querySelector('.pcp-swatch-solid')!
    this.#swatchAlphaColor = this.#shadow.querySelector('.pcp-swatch-alpha-color')!
    this.#alphaInput = this.#shadow.querySelector('.pcp-alpha-input')!
    this.#historyContainer = this.#shadow.querySelector('.pcp-history')!
  }

  #bind(): void {
    const closeBtn = this.#shadow.querySelector('.pcp-close')!
    closeBtn.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }))
    })

    this.#cleanups.push(
      bindPointerDrag(
        this.#planeWrap,
        (x, y) => this.#onPlaneMove(x, y),
        () => this.#commitHistory(),
      ),
    )

    this.#cleanups.push(
      bindPointerDrag(
        this.#hueRow,
        (x) => this.#onHueMove(x),
        () => this.#commitHistory(),
      ),
    )

    this.#cleanups.push(
      bindPointerDrag(
        this.#alphaRow,
        (x) => this.#onAlphaMove(x),
        () => this.#commitHistory(),
      ),
    )

    this.#shadow.querySelectorAll('.pcp-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        const format = (tab as HTMLElement).dataset.format as ColorFormat
        if (format && format !== this.#format) {
          this.#format = format
          this.#refreshPlane(true)
          this.#refreshTabs()
          this.#refreshFields()
          this.#refreshCursor()
        }
      })
    })

    this.#alphaInput.addEventListener('change', () => this.#onAlphaInput())
    this.#alphaInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.#onAlphaInput()
    })
  }

  #onPlaneMove(x: number, y: number): void {
    this.#planeCursor.dataset.dragging = 'true'
    const hue = this.#readHueFromSlider()
    this.#setColor(colorFromPlanePosition(x, y, hue, this.#color.alpha), false)
    this.#updateCursor(x, y)
  }

  #onHueMove(x: number): void {
    this.#hueRow.dataset.active = 'true'
    this.#hueHandle.dataset.dragging = 'true'
    const hue = x * 360
    this.#setColor(colorWithHue(this.#color, hue), false)
    this.#hueHandle.style.left = `${x * 100}%`
    this.#refreshPlane(false)
    this.#refreshCursor()
  }

  #onAlphaMove(x: number): void {
    this.#alphaRow.dataset.active = 'true'
    this.#alphaHandle.dataset.dragging = 'true'
    this.#setColor(normalizeOklch({ ...this.#color, alpha: x }), false)
    this.#alphaHandle.style.left = `${x * 100}%`
  }

  #readHueFromSlider(): number {
    const left = this.#hueHandle.style.left
    if (left.endsWith('%')) return (parseFloat(left) / 100) * 360
    return colorHueAngle(this.#color)
  }

  #onAlphaInput(): void {
    const raw = this.#alphaInput.value.replace(/%/g, '').trim()
    const n = Number(raw)
    if (Number.isNaN(n)) {
      this.#refreshAlphaField()
      return
    }
    this.#setColor(normalizeOklch({ ...this.#color, alpha: n / 100 }))
    this.#commitHistory()
  }

  #onFieldInput(key: string, value: string): void {
    const fields: Record<string, string> = {}
    formatFieldsFor(this.#color, this.#format).forEach((f) => {
      fields[f.key] = f.key === key ? value : f.value
    })
    const parsed = parseFormatFields(this.#format, fields, this.#color)
    if (parsed) {
      this.#setColor(parsed)
      this.#commitHistory()
    }
  }

  #setColor(color: OklchColor, emit = true): void {
    this.#color = normalizeOklch(color)
    this.#refreshVisuals(emit)
  }

  #refreshAll(emit = true): void {
    this.#refreshPlane(false)
    this.#refreshTabs()
    this.#refreshVisuals(emit)
    this.#refreshHistory()
  }

  #refreshVisuals(emit: boolean): void {
    this.#refreshFields()
    this.#refreshSwatch()
    this.#refreshSliders()
    this.#refreshCursor()
    if (emit) this.#emitChange()
  }

  #refreshPlane(switching: boolean): void {
    if (switching) {
      this.#planeCanvas.dataset.switching = 'true'
      if (this.#planeSwitchTimer) clearTimeout(this.#planeSwitchTimer)
      this.#planeSwitchTimer = setTimeout(() => {
        delete this.#planeCanvas.dataset.switching
      }, 200)
    }

    const hue = this.#readHueFromSlider()
    renderPickerPlane(this.#planeCanvas, hue)
  }

  #refreshCursor(): void {
    const { x, y } = planePositionFromColor(this.#color)
    this.#updateCursor(x, y)
    delete this.#planeCursor.dataset.dragging
  }

  #updateCursor(x: number, y: number): void {
    this.#planeCursor.style.left = `${x * 100}%`
    this.#planeCursor.style.top = `${y * 100}%`
  }

  #refreshSliders(): void {
    const hue = colorHueAngle(this.#color)
    this.#hueHandle.style.left = `${(hue / 360) * 100}%`
    delete this.#hueHandle.dataset.dragging
    delete this.#hueRow.dataset.active

    this.#alphaHandle.style.left = `${this.#color.alpha * 100}%`
    delete this.#alphaHandle.dataset.dragging
    delete this.#alphaRow.dataset.active

    this.#refreshAlphaSlider()
  }

  #refreshAlphaSlider(): void {
    this.#alphaFill.style.background = oklchToAlphaGradient(this.#color)
  }

  #refreshSwatch(): void {
    const { r, g, b } = oklchToRgb(this.#color)
    this.#swatchSolid.style.background = `rgb(${r}, ${g}, ${b})`
    this.#swatchAlphaColor.style.background = `rgba(${r}, ${g}, ${b}, ${this.#color.alpha})`
  }

  #refreshAlphaField(): void {
    this.#alphaInput.value = `${Math.round(this.#color.alpha * 100)}%`
  }

  #refreshFields(): void {
    const fields = formatFieldsFor(this.#color, this.#format)
    this.#fieldsContainer.innerHTML = fields
      .map(
        (f) => `
        <div class="pcp-field">
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
      el.addEventListener('change', () => this.#onFieldInput(key, el.value))
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.#onFieldInput(key, el.value)
      })
    })

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
    this.#historyContainer.innerHTML = this.#history
      .map((c, i) => {
        const { r, g, b } = oklchToRgb(c)
        const solid = `rgb(${r}, ${g}, ${b})`
        const alpha = `rgba(${r}, ${g}, ${b}, ${c.alpha})`
        return `
          <button type="button" class="pcp-history-swatch" data-index="${i}" aria-label="Color ${oklchToHex(c)}">
            <span
              class="pcp-history-swatch-fill"
              style="--swatch-solid:${solid};--swatch-alpha:${alpha}"
            ></span>
          </button>
        `
      })
      .join('')

    this.#historyContainer.querySelectorAll('.pcp-history-swatch').forEach((btn) => {
      btn.addEventListener('click', () => {
        const index = Number((btn as HTMLElement).dataset.index)
        const item = this.#history[index]
        if (item) this.#setColor({ ...item })
      })
    })
  }

  #commitHistory(): void {
    delete this.#planeCursor.dataset.dragging
    delete this.#hueHandle.dataset.dragging
    delete this.#alphaHandle.dataset.dragging
    delete this.#hueRow.dataset.active
    delete this.#alphaRow.dataset.active
    this.#history = saveToHistory(this.#color, this.#history)
    this.#refreshHistory()
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
