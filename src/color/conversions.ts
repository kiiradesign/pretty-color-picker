import { clampChroma, converter, formatHex, formatHsl, oklch, parse, type Oklch, type Rgb } from 'culori'
import type { ColorFormat, FormatField, OklchColor } from '../types'

const toRgb = converter('rgb')
const toHsv = converter('hsv')

export function normalizeOklch(color: Partial<OklchColor>): OklchColor {
  const l = clamp01(color.l ?? 0)
  const c = Math.max(0, color.c ?? 0)
  const h = normalizeHue(color.h ?? 0)
  const alpha = clamp01(color.alpha ?? 1)

  const clamped = clampChroma({ mode: 'oklch', l, c, h, alpha }, 'rgb') as Oklch

  return {
    l: clamped.l ?? l,
    c: clamped.c ?? 0,
    h: clamped.h ?? h,
    alpha: clamped.alpha ?? alpha,
  }
}

export function oklchFromCss(input: string): OklchColor | null {
  const parsed = parse(input.trim())
  if (!parsed) return null
  const converted = oklch(parsed)
  if (converted?.l == null) return null
  return normalizeOklch({
    l: converted.l,
    c: converted.c ?? 0,
    h: converted.h ?? 0,
    alpha: converted.alpha ?? 1,
  })
}

export function oklchToCss(color: OklchColor): string {
  const { l, c, h, alpha } = color
  if (alpha >= 1) {
    return `oklch(${(l * 100).toFixed(1)}% ${c.toFixed(4)} ${h.toFixed(1)})`
  }
  return `oklch(${(l * 100).toFixed(1)}% ${c.toFixed(4)} ${h.toFixed(1)} / ${Math.round(alpha * 100)}%)`
}

export function oklchToHex(color: OklchColor): string {
  return formatHex(toRgb({ mode: 'oklch', ...color })) ?? '#000000'
}

export function oklchToRgbString(color: OklchColor): string {
  const { r, g, b } = oklchToRgb(color)
  if (color.alpha < 1) return `rgba(${r}, ${g}, ${b}, ${color.alpha.toFixed(2)})`
  return `rgb(${r}, ${g}, ${b})`
}

export function oklchToRgb(color: OklchColor): { r: number; g: number; b: number } {
  const rgb = toRgb({ mode: 'oklch', ...color, alpha: 1 }) as Rgb | undefined
  if (!rgb) return { r: 0, g: 0, b: 0 }
  return {
    r: Math.round((rgb.r ?? 0) * 255),
    g: Math.round((rgb.g ?? 0) * 255),
    b: Math.round((rgb.b ?? 0) * 255),
  }
}

export function oklchToAlphaGradient(color: OklchColor): string {
  const { r, g, b } = oklchToRgb(color)
  return `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0), rgb(${r}, ${g}, ${b}))`
}

/** HSV hue — matches the classic saturation/value plane and hue slider. */
export function colorHueAngle(color: OklchColor): number {
  const hsv = toHsv({ mode: 'oklch', ...color, alpha: 1 })
  return hsv?.h ?? color.h
}

export function colorWithHue(color: OklchColor, hue: number): OklchColor {
  const hsv = toHsv({ mode: 'oklch', ...color, alpha: 1 })
  const parsed = oklch(toRgb({ mode: 'hsv', h: hue, s: hsv?.s ?? 0, v: hsv?.v ?? 1, alpha: 1 }) ?? { mode: 'hsv', h: hue, s: hsv?.s ?? 0, v: hsv?.v ?? 1 })
  if (parsed?.l == null) return normalizeOklch({ ...color, h: hue })
  return normalizeOklch({
    l: parsed.l,
    c: parsed.c ?? 0,
    h: parsed.h ?? hue,
    alpha: color.alpha,
  })
}

export function formatFieldsFor(color: OklchColor, format: ColorFormat): FormatField[] {
  switch (format) {
    case 'hex':
      return [{ key: 'hex', label: 'Hex Code', value: oklchToHex(color).replace('#', '').toUpperCase() }]
    case 'rgb': {
      const rgb = toRgb({ mode: 'oklch', ...color }) as Rgb
      return [
        { key: 'r', label: 'R', value: String(Math.round((rgb.r ?? 0) * 255)), min: 0, max: 255 },
        { key: 'g', label: 'G', value: String(Math.round((rgb.g ?? 0) * 255)), min: 0, max: 255 },
        { key: 'b', label: 'B', value: String(Math.round((rgb.b ?? 0) * 255)), min: 0, max: 255 },
      ]
    }
    case 'hsl': {
      const hslStr = formatHsl(toRgb({ mode: 'oklch', ...color }))
      const match = hslStr?.match(/hsl\(([\d.]+),\s*([\d.]+)%,\s*([\d.]+)%\)/)
      return [
        { key: 'h', label: 'H', value: String(Math.round(Number(match?.[1] ?? 0))), min: 0, max: 360 },
        { key: 's', label: 'S', value: String(Math.round(Number(match?.[2] ?? 0))), min: 0, max: 100, suffix: '%' },
        { key: 'l', label: 'L', value: String(Math.round(Number(match?.[3] ?? 0))), min: 0, max: 100, suffix: '%' },
      ]
    }
    case 'oklch':
      return [
        { key: 'l', label: 'L', value: String(Math.round(color.l * 100)), min: 0, max: 100, suffix: '%' },
        { key: 'c', label: 'C', value: color.c.toFixed(3), min: 0, max: 0.4, step: 0.001 },
        { key: 'h', label: 'H', value: String(Math.round(color.h)), min: 0, max: 360 },
      ]
  }
}

export function parseFormatFields(
  format: ColorFormat,
  fields: Record<string, string>,
  current: OklchColor,
): OklchColor | null {
  switch (format) {
    case 'hex': {
      const raw = (fields.hex ?? '').trim().replace(/^#/, '')
      if (!/^[0-9a-fA-F]{3,8}$/.test(raw)) return null
      const parsed = oklchFromCss(`#${raw}`)
      return parsed ? withAlpha(parsed, current.alpha) : null
    }
    case 'rgb': {
      const r = Number(fields.r)
      const g = Number(fields.g)
      const b = Number(fields.b)
      if ([r, g, b].some((v) => Number.isNaN(v))) return null
      const parsed = oklchFromCss(`rgb(${clamp255(r)}, ${clamp255(g)}, ${clamp255(b)})`)
      return parsed ? withAlpha(parsed, current.alpha) : null
    }
    case 'hsl': {
      const h = Number(fields.h)
      const s = Number(fields.s)
      const l = Number(fields.l)
      if ([h, s, l].some((v) => Number.isNaN(v))) return null
      const parsed = oklchFromCss(`hsl(${h}, ${clamp100(s)}%, ${clamp100(l)}%)`)
      return parsed ? withAlpha(parsed, current.alpha) : null
    }
    case 'oklch': {
      const l = Number(fields.l)
      const c = Number(fields.c)
      const h = Number(fields.h)
      if ([l, c, h].some((v) => Number.isNaN(v))) return null
      return normalizeOklch({ l: l / 100, c, h, alpha: current.alpha })
    }
  }
}

export function maxChromaFor(l: number, h: number): number {
  let max = 0
  for (let c = 0; c <= 0.45; c += 0.005) {
    const rgb = toRgb({ mode: 'oklch', l, c, h, alpha: 1 })
    if (!rgb) break
    const { r = 0, g = 0, b = 0 } = rgb
    if (r < 0 || r > 1 || g < 0 || g > 1 || b < 0 || b > 1) break
    max = c
  }
  return Math.max(max, 0.001)
}

function withAlpha(color: OklchColor, alpha: number): OklchColor {
  return { ...color, alpha: clamp01(alpha) }
}

function clamp01(v: number): number {
  return Math.min(1, Math.max(0, v))
}

function clamp255(v: number): number {
  return Math.min(255, Math.max(0, Math.round(v)))
}

function clamp100(v: number): number {
  return Math.min(100, Math.max(0, v))
}

function normalizeHue(h: number): number {
  const mod = h % 360
  return mod < 0 ? mod + 360 : mod
}

export function planePositionFromColor(color: OklchColor): { x: number; y: number } {
  const hsv = toHsv({ mode: 'oklch', ...color, alpha: 1 })
  return { x: hsv?.s ?? 0, y: 1 - (hsv?.v ?? 0) }
}

export function colorFromPlanePosition(
  x: number,
  y: number,
  hue: number,
  alpha: number,
): OklchColor {
  const cx = clamp01(x)
  const cy = clamp01(y)

  const parsed = oklch(
    toRgb({ mode: 'hsv', h: hue, s: cx, v: 1 - cy, alpha: 1 }) ?? {
      mode: 'hsv',
      h: hue,
      s: cx,
      v: 1 - cy,
    },
  )

  if (parsed?.l != null) {
    return normalizeOklch({
      l: parsed.l,
      c: parsed.c ?? 0,
      h: parsed.h ?? hue,
      alpha,
    })
  }

  return normalizeOklch({ l: 0.5, c: 0, h: hue, alpha })
}
