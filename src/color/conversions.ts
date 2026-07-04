import { clampChroma, converter, formatHex, oklch, parse, type Oklch, type Rgb } from 'culori'
import type { ColorFormat, FormatField, OklchColor } from '../types'

const toRgb = converter('rgb')
const toHsv = converter('hsv')
const toHsl = converter('hsl')

const HUE_SLIDER_L = 0.7
const maxChromaCache = new Map<string, number>()

/** Below this OKLCH chroma, hue is undefined — plane hue must be preserved separately. */
export const ACHROMATIC_CHROMA = 0.002

/** Below this HSV saturation, the plane's horizontal axis is achromatic. */
export const ACHROMATIC_SATURATION = 0.004

export function isAchromatic(color: Pick<OklchColor, 'c'>): boolean {
  return color.c <= ACHROMATIC_CHROMA
}

export function hsvSaturationFromOklch(color: OklchColor): number {
  const hsv = toHsv({ mode: 'oklch', ...color, alpha: 1 })
  return Math.max(0, hsv?.s ?? 0)
}

/** Hue is meaningless for display or plane rendering — lock to `#activePlaneHue`. */
export function isHueLocked(color: OklchColor): boolean {
  if (isAchromatic(color)) return true
  return hsvSaturationFromOklch(color) < ACHROMATIC_SATURATION
}

export function lockHueTo(color: OklchColor, hue: number): OklchColor {
  if (!isHueLocked(color)) return color
  return { ...color, h: clampHue(hue) }
}

export function normalizeOklch(color: Partial<OklchColor>): OklchColor {
  const l = clamp01(color.l ?? 0)
  const c = Math.max(0, color.c ?? 0)
  const h = clampHue(color.h ?? 0)
  const alpha = clamp01(color.alpha ?? 1)

  const clamped = clampChroma({ mode: 'oklch', l, c, h, alpha }, 'rgb') as Oklch

  const achromatic = isAchromatic({ c })

  return {
    l: clamped.l ?? l,
    c: achromatic ? 0 : (clamped.c ?? 0),
    h: achromatic ? clampHue(h) : h,
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

/** Max-chroma OKLCH sample for the hue slider at position t ∈ [0, 1]. */
export function rgbAtHueSlider(t: number): { r: number; g: number; b: number } {
  const hue = clampHue(Math.max(0, Math.min(1, t)) * 360)
  const c = maxChromaFor(HUE_SLIDER_L, hue)
  return oklchToRgb(normalizeOklch({ l: HUE_SLIDER_L, c, h: hue, alpha: 1 }))
}

export function oklchToAlphaGradient(color: OklchColor): string {
  const { r, g, b } = oklchToRgb(color)
  return `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0), rgb(${r}, ${g}, ${b}))`
}

/** HSV hue for chromatic colors only — do not use to derive plane hue when hue-locked. */
export function hsvHueFromColor(color: OklchColor): number {
  if (isHueLocked(color)) return clampHue(color.h)
  const hsv = toHsv({ mode: 'oklch', ...color, alpha: 1 })
  return clampHue(hsv?.h ?? color.h)
}

export function colorWithHue(color: OklchColor, hue: number): OklchColor {
  const clampedHue = clampHue(hue)
  const hsv = toHsv({ mode: 'oklch', ...color, alpha: 1 })
  const rgb = toRgb({
    mode: 'hsv',
    h: clampedHue,
    s: hsv?.s ?? 0,
    v: hsv?.v ?? 1,
    alpha: 1,
  })
  const parsed = oklch(
    rgb ?? { mode: 'hsv', h: clampedHue, s: hsv?.s ?? 0, v: hsv?.v ?? 1 },
  )
  if (parsed?.l != null) {
    const c = parsed.c ?? 0
    return lockHueTo(
      normalizeOklch({
        l: parsed.l,
        c,
        h: parsed.h ?? clampedHue,
        alpha: color.alpha,
      }),
      clampedHue,
    )
  }

  return normalizeOklch({ ...color, h: clampedHue })
}

export function formatFieldsFor(color: OklchColor, format: ColorFormat): FormatField[] {
  switch (format) {
    case 'hex':
      return [{ key: 'hex', label: 'HEX CODE', value: oklchToHex(color).replace('#', '').toUpperCase() }]
    case 'rgb': {
      const rgb = toRgb({ mode: 'oklch', ...color }) as Rgb
      return [
        { key: 'r', label: 'R', value: String(Math.round((rgb.r ?? 0) * 255)), min: 0, max: 255 },
        { key: 'g', label: 'G', value: String(Math.round((rgb.g ?? 0) * 255)), min: 0, max: 255 },
        { key: 'b', label: 'B', value: String(Math.round((rgb.b ?? 0) * 255)), min: 0, max: 255 },
      ]
    }
    case 'hsl': {
      const hsl = toHsl({ mode: 'oklch', ...color })
      return [
        { key: 'h', label: 'H', value: String(Math.round(hsl?.h ?? 0)), min: 0, max: 360 },
        {
          key: 's',
          label: 'S',
          value: String(Math.round((hsl?.s ?? 0) * 100)),
          min: 0,
          max: 100,
          suffix: '%',
        },
        {
          key: 'l',
          label: 'L',
          value: String(Math.round((hsl?.l ?? 0) * 100)),
          min: 0,
          max: 100,
          suffix: '%',
        },
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

export function colorFromHslScrub(
  color: OklchColor,
  key: 'h' | 's' | 'l',
  value: number,
): OklchColor {
  const alpha = color.alpha
  const fields = formatFieldsFor(color, 'hsl')
  const h = key === 'h' ? clampHue(value) : Number(fields.find((f) => f.key === 'h')?.value ?? 0)
  let s = key === 's' ? value : Number(fields.find((f) => f.key === 's')?.value ?? 0)
  const l = key === 'l' ? value : Number(fields.find((f) => f.key === 'l')?.value ?? 0)

  if (key === 'h' && s < 1) s = 1

  const parsed = oklchFromCss(`hsl(${h}, ${clamp100(s)}%, ${clamp100(l)}%)`)
  if (parsed) return { ...parsed, alpha }
  return color
}

export function colorFromOklchScrub(
  color: OklchColor,
  key: 'l' | 'c' | 'h',
  value: number,
  planeHue?: number,
): OklchColor {
  switch (key) {
    case 'l': {
      const next = normalizeOklch({ ...color, l: value / 100 })
      return planeHue != null ? lockHueTo(next, planeHue) : next
    }
    case 'c': {
      const c = Math.max(0, value)
      const h =
        c <= ACHROMATIC_CHROMA || isHueLocked(color)
          ? planeHue != null
            ? clampHue(planeHue)
            : clampHue(color.h)
          : color.h
      const next = normalizeOklch({ ...color, c, h })
      return planeHue != null ? lockHueTo(next, planeHue) : next
    }
    case 'h':
      return colorWithHue(color, value)
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
      const h = parseNumberField(fields.h)
      const s = parseNumberField(fields.s)
      const l = parseNumberField(fields.l)
      if ([h, s, l].some((v) => Number.isNaN(v))) return null
      const parsed = oklchFromCss(`hsl(${h}, ${clamp100(s)}%, ${clamp100(l)}%)`)
      return parsed ? withAlpha(parsed, current.alpha) : null
    }
    case 'oklch': {
      const l = Number(fields.l)
      let c = Number(fields.c)
      let h = Number(fields.h)
      if ([l, c, h].some((v) => Number.isNaN(v))) return null
      if (c <= 0) {
        c = 0
        if (!isAchromatic(current)) h = current.h
      }
      return normalizeOklch({ l: l / 100, c, h, alpha: current.alpha })
    }
  }
}

export function maxChromaFor(l: number, h: number): number {
  const key = `${l.toFixed(3)}:${clampHue(h).toFixed(1)}`
  const cached = maxChromaCache.get(key)
  if (cached != null) return cached

  let max = 0
  for (let c = 0; c <= 0.45; c += 0.005) {
    const rgb = toRgb({ mode: 'oklch', l, c, h: clampHue(h), alpha: 1 })
    if (!rgb) break
    const { r = 0, g = 0, b = 0 } = rgb
    if (r < 0 || r > 1 || g < 0 || g > 1 || b < 0 || b > 1) break
    max = c
  }

  const result = Math.max(max, 0.001)
  maxChromaCache.set(key, result)
  return result
}

export function planePositionFromColor(color: OklchColor): { x: number; y: number } {
  const hsv = toHsv({ mode: 'oklch', ...color, alpha: 1 })
  return {
    x: clamp01(hsv?.s ?? 0),
    y: clamp01(1 - (hsv?.v ?? 0)),
  }
}

export function colorFromPlanePosition(
  x: number,
  y: number,
  hue: number,
  alpha: number,
): OklchColor {
  const cx = clamp01(x)
  const cy = clamp01(y)
  const clampedHue = clampHue(hue)

  const parsed = oklch(
    toRgb({ mode: 'hsv', h: clampedHue, s: cx, v: 1 - cy, alpha: 1 }) ?? {
      mode: 'hsv',
      h: clampedHue,
      s: cx,
      v: 1 - cy,
    },
  )

  if (parsed?.l != null) {
    const c = parsed.c ?? 0
    const hueLocked = cx < ACHROMATIC_SATURATION || isAchromatic({ c })
    return normalizeOklch({
      l: parsed.l,
      c,
      h: hueLocked ? clampedHue : (parsed.h ?? clampedHue),
      alpha,
    })
  }

  return normalizeOklch({ l: 0.5, c: 0, h: clampedHue, alpha })
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

function parseNumberField(value: string): number {
  return Number(value.replace(/%/g, '').trim())
}

export function clampHue(h: number): number {
  return Math.min(360, Math.max(0, h))
}
