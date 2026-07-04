import { converter } from 'culori'

const toRgb = converter('rgb')

/** Saturation × value plane at a fixed hue — classic picker layout. */
export function renderPickerPlane(canvas: HTMLCanvasElement, hue: number): void {
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  if (!ctx) return

  const { width, height } = canvas
  const imageData = ctx.createImageData(width, height)
  const data = imageData.data

  for (let y = 0; y < height; y++) {
    const value = 1 - y / (height - 1 || 1)

    for (let x = 0; x < width; x++) {
      const saturation = x / (width - 1 || 1)
      const color = toRgb({ mode: 'hsv', h: hue, s: saturation, v: value, alpha: 1 })
      const i = (y * width + x) * 4

      if (!color) {
        data[i] = data[i + 1] = data[i + 2] = 0
        data[i + 3] = 255
        continue
      }

      data[i] = Math.round(clamp((color.r ?? 0) * 255))
      data[i + 1] = Math.round(clamp((color.g ?? 0) * 255))
      data[i + 2] = Math.round(clamp((color.b ?? 0) * 255))
      data[i + 3] = 255
    }
  }

  ctx.putImageData(imageData, 0, 0)
}

function clamp(v: number): number {
  return Math.min(255, Math.max(0, v))
}
