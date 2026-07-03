import '../src/pretty-color-picker'
import { oklchToRgbString } from '../src/color/conversions'
import type { ColorChangeDetail, ThemeChangeDetail } from '../src/types'
import type { PrettyColorPicker } from '../src/pretty-color-picker'

const DEMO_COLOR_DARK = '#FFF4ED'
const DEMO_COLOR_LIGHT = '#0C1615'

const picker = document.querySelector('pretty-color-picker') as PrettyColorPicker

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

function applyDemoDefaults(): void {
  const color = defaultDemoColor(resolvedPickerTheme())
  picker.value = color
  applyPageBackground(color)
}

picker.addEventListener('change', (event) => {
  const detail = (event as CustomEvent<ColorChangeDetail>).detail
  applyPageBackground(oklchToRgbString(detail.color))
})

picker.addEventListener('themechange', () => {
  applyDemoDefaults()
})

applyDemoDefaults()
