import '../src/pretty-color-picker'
import { oklchToRgb, oklchToRgbString } from '../src/color/conversions'
import type { ColorChangeDetail, OklchColor } from '../src/types'
import type { PrettyColorPicker } from '../src/pretty-color-picker'
import { parseHexColor, relativeLuminance255 } from '../src/utils/contrast'

const DEMO_COLOR_DARK = '#FFF4ED'
const DEMO_COLOR_LIGHT = '#0C1615'
const DEMO_MOBILE_QUERY = '(max-width: 640px)'
const CHROME_LUMINANCE_THRESHOLD = 0.52

const picker = document.querySelector('#demo-picker') as PrettyColorPicker
const demoChrome = document.querySelector('.demo-chrome') as HTMLElement | null
const demoHint = document.querySelector('.demo-hint') as HTMLElement | null

function resolvedPickerTheme(): 'dark' | 'light' {
  if (picker.theme === 'light') return 'light'
  if (picker.theme === 'dark') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function defaultDemoColor(theme: 'dark' | 'light'): string {
  return theme === 'dark' ? DEMO_COLOR_DARK : DEMO_COLOR_LIGHT
}

function applyPageBackground(color: string): void {
  document.body.style.background = color
}

function rgbFromCssColor(color: string): { r: number; g: number; b: number } | null {
  const rgbMatch = color.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i)
  if (rgbMatch) {
    return {
      r: Number(rgbMatch[1]),
      g: Number(rgbMatch[2]),
      b: Number(rgbMatch[3]),
    }
  }
  return parseHexColor(color)
}

function updateDemoChromeContrast(rgb: { r: number; g: number; b: number }): void {
  if (!demoChrome) return
  const onLightBg = relativeLuminance255(rgb.r, rgb.g, rgb.b) > CHROME_LUMINANCE_THRESHOLD
  demoChrome.style.setProperty('--chrome-rgb', onLightBg ? '0, 0, 0' : '255, 255, 255')
}

function updateDemoChromeHint(): void {
  if (!demoHint) return
  const theme = resolvedPickerTheme()
  demoHint.innerHTML =
    theme === 'dark'
      ? 'Press <kbd>L</kbd> for light mode'
      : 'Press <kbd>D</kbd> for dark mode'
}

function updateDemoChromeFromColor(color: OklchColor | string): void {
  const rgb =
    typeof color === 'string' ? rgbFromCssColor(color) : oklchToRgb(color)
  if (rgb) updateDemoChromeContrast(rgb)
  updateDemoChromeHint()
}

function applyStartupDefaults(): void {
  const color = defaultDemoColor(resolvedPickerTheme())
  picker.value = color
  applyPageBackground(color)
  updateDemoChromeFromColor(color)
}

function onThemeSwitch(): void {
  updateDemoChromeFromColor(picker.color)
}

function syncResponsiveChrome(): void {
  const mobile = window.matchMedia(DEMO_MOBILE_QUERY).matches
  picker.headerAction = mobile ? 'theme' : 'none'
}

let pendingBackground: string | null = null
let pendingChromeColor: OklchColor | null = null
let backgroundFrame: number | null = null

function schedulePageBackground(color: OklchColor): void {
  pendingBackground = oklchToRgbString(color)
  pendingChromeColor = color
  if (backgroundFrame != null) return
  backgroundFrame = requestAnimationFrame(() => {
    backgroundFrame = null
    if (pendingBackground != null) {
      applyPageBackground(pendingBackground)
      pendingBackground = null
    }
    if (pendingChromeColor != null) {
      updateDemoChromeFromColor(pendingChromeColor)
      pendingChromeColor = null
    }
  })
}

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  return (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target.isContentEditable
  )
}

function setDemoTheme(theme: 'light' | 'dark'): void {
  picker.theme = theme
  onThemeSwitch()
}

picker.addEventListener('change', (event) => {
  const detail = (event as CustomEvent<ColorChangeDetail>).detail
  schedulePageBackground(detail.color)
})

picker.addEventListener('themechange', () => {
  onThemeSwitch()
})

document.addEventListener('keydown', (event) => {
  if (window.matchMedia(DEMO_MOBILE_QUERY).matches) return
  if (event.metaKey || event.ctrlKey || event.altKey) return
  if (isTypingTarget(event.target)) return

  if (event.key === 'l' || event.key === 'L') {
    event.preventDefault()
    setDemoTheme('light')
  } else if (event.key === 'd' || event.key === 'D') {
    event.preventDefault()
    setDemoTheme('dark')
  }
})

window.matchMedia(DEMO_MOBILE_QUERY).addEventListener('change', syncResponsiveChrome)

syncResponsiveChrome()
applyStartupDefaults()
