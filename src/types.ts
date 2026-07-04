/** Internal color representation — always OKLCH (L, C, H, alpha). */
export interface OklchColor {
  l: number
  c: number
  h: number
  alpha: number
}

export type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'oklch'

export type PickerTheme = 'dark' | 'light' | 'system'

export type PickerHeaderAction = 'close' | 'theme' | 'none'

export interface FormatField {
  key: string
  label: string
  value: string
  min?: number
  max?: number
  step?: number
  /** Label-scrub sensitivity (value units per pixel). */
  scrubStep?: number
  suffix?: string
}

export interface ColorChangeDetail {
  color: OklchColor
  css: string
  hex: string
}

export interface ThemeChangeDetail {
  theme: 'dark' | 'light'
}

export const DEFAULT_COLOR: OklchColor = {
  l: 0.62,
  c: 0.24,
  h: 303,
  alpha: 0.8,
}

export const HISTORY_KEY = 'pretty-color-picker-history'
export const HISTORY_COLUMNS = 8
export const HISTORY_LIMIT = 16

export const DEFAULT_PICKER_LABEL = 'Pretty Color Picker'
