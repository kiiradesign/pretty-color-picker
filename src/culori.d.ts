declare module 'culori' {
  export interface Color {
    mode?: string
    l?: number
    c?: number
    h?: number
    r?: number
    g?: number
    b?: number
    s?: number
    v?: number
    alpha?: number
  }

  export type Oklch = Color
  export type Rgb = Color

  export function parse(color: string): Color | undefined
  export function oklch(color: Color): Color | undefined
  export function clampChroma(color: Color, mode: string): Color
  export function converter(mode: string): (color: Color) => Color | undefined
  export function formatHex(color: Color | undefined): string | undefined
  export function formatHsl(color: Color | undefined): string | undefined
  export function formatRgb(color: Color | undefined): string | undefined
}
