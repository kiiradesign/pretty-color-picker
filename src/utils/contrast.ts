const HANDLE_LIGHT = '#ededed'
const HANDLE_DARK = '#171717'
const LUMINANCE_THRESHOLD = 0.52

export type Rgb255 = { r: number; g: number; b: number }

export function relativeLuminance255(r: number, g: number, b: number): number {
  const linear = [r, g, b].map((channel) => {
    const s = channel / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * linear[0]! + 0.7152 * linear[1]! + 0.0722 * linear[2]!
}

export function handleColorForRgb(r: number, g: number, b: number): string {
  return relativeLuminance255(r, g, b) > LUMINANCE_THRESHOLD ? HANDLE_DARK : HANDLE_LIGHT
}

export function parseHexColor(input: string): Rgb255 | null {
  const hex = input.replace('#', '').trim()
  if (!hex) return null

  if (hex.length === 3) {
    return {
      r: Number.parseInt(hex[0]! + hex[0], 16),
      g: Number.parseInt(hex[1]! + hex[1], 16),
      b: Number.parseInt(hex[2]! + hex[2], 16),
    }
  }

  if (hex.length === 6) {
    return {
      r: Number.parseInt(hex.slice(0, 2), 16),
      g: Number.parseInt(hex.slice(2, 4), 16),
      b: Number.parseInt(hex.slice(4, 6), 16),
    }
  }

  return null
}

export function compositeOverChecker(
  fg: Rgb255,
  alpha: number,
  checkerBase: Rgb255,
  checkerTone: Rgb255,
): Rgb255 {
  const a = Math.max(0, Math.min(1, alpha))
  const bg: Rgb255 = {
    r: Math.round((checkerBase.r + checkerTone.r) / 2),
    g: Math.round((checkerBase.g + checkerTone.g) / 2),
    b: Math.round((checkerBase.b + checkerTone.b) / 2),
  }

  return {
    r: Math.round(a * fg.r + (1 - a) * bg.r),
    g: Math.round(a * fg.g + (1 - a) * bg.g),
    b: Math.round(a * fg.b + (1 - a) * bg.b),
  }
}
