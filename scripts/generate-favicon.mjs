/**
 * OKLCH color-wheel favicon — perceptually smooth center falloff, edge max chroma.
 * Run: node scripts/generate-favicon.mjs
 */
import { writeFileSync } from 'node:fs'
import { deflateSync } from 'node:zlib'
import { clampChroma, converter } from 'culori'

const toRgb = converter('rgb')

const size = 64
const cx = size / 2
const cy = size / 2
const maxR = size / 2 - 0.5

function smoothstep(t) {
  const x = Math.max(0, Math.min(1, t))
  return x * x * (3 - 2 * x)
}

function maxChroma(l, h) {
  return clampChroma({ mode: 'oklch', l, c: 1, h, alpha: 1 }, 'rgb').c ?? 0
}

function sampleOklch(dist) {
  const t = dist / maxR
  const ease = smoothstep(t)
  const L = 0.995 - ease * 0.26
  const chromaT = Math.pow(ease, 1.85)
  return { l: L, chromaT }
}

function pngChunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const typeBuf = Buffer.from(type)
  const crc = crc32(Buffer.concat([typeBuf, data]))
  const crcBuf = Buffer.alloc(4)
  crcBuf.writeUInt32BE(crc >>> 0)
  return Buffer.concat([len, typeBuf, data, crcBuf])
}

const crcTable = (() => {
  const table = new Uint32Array(256)
  for (let i = 0; i < 256; i++) {
    let c = i
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    table[i] = c
  }
  return table
})()

function crc32(buf) {
  let c = 0xffffffff
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

function encodePng(rgba, width, height) {
  const stride = width * 4
  const raw = Buffer.alloc((stride + 1) * height)
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride)
  }
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(width, 0)
  ihdr.writeUInt32BE(height, 4)
  ihdr[8] = 8
  ihdr[9] = 6
  ihdr[10] = 0
  ihdr[11] = 0
  ihdr[12] = 0
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', deflateSync(raw, { level: 9 })),
    pngChunk('IEND', Buffer.alloc(0)),
  ])
}

const rgba = Buffer.alloc(size * size * 4)

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    const i = (y * size + x) * 4
    const dx = x + 0.5 - cx
    const dy = y + 0.5 - cy
    const dist = Math.hypot(dx, dy)

    if (dist > maxR + 1) {
      rgba[i + 3] = 0
      continue
    }

    const edgeAlpha = Math.min(1, Math.max(0, maxR + 0.75 - dist))
    const angle = Math.atan2(dy, dx)
    const h = ((angle * 180) / Math.PI + 360) % 360
    const { l, chromaT } = sampleOklch(Math.min(dist, maxR))
    const color = clampChroma(
      { mode: 'oklch', l, c: chromaT * maxChroma(l, h), h, alpha: 1 },
      'rgb',
    )
    const rgb = toRgb(color)
    rgba[i] = Math.round((rgb?.r ?? 0) * 255)
    rgba[i + 1] = Math.round((rgb?.g ?? 0) * 255)
    rgba[i + 2] = Math.round((rgb?.b ?? 0) * 255)
    rgba[i + 3] = Math.round(edgeAlpha * 255)
  }
}

const png = encodePng(rgba, size, size)
const b64 = png.toString('base64')

const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
  <image width="32" height="32" href="data:image/png;base64,${b64}"/>
</svg>
`

writeFileSync(new URL('../demo/favicon.svg', import.meta.url), svg)
console.log(`favicon.svg — ${svg.length} bytes (png ${png.length} bytes)`)
