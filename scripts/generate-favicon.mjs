/**
 * HSV sunburst favicon — sharp wedges, full saturation, no white center.
 * Matches the picker's hue slider (HSV s=1 v=1) so yellow→green stays vivid.
 * Run: node scripts/generate-favicon.mjs
 */
import { writeFileSync } from 'node:fs'
import { converter, formatHex } from 'culori'

const toRgb = converter('rgb')

const size = 32
const cx = size / 2
const cy = size / 2
const r = size / 2
const wedges = 18

function hueHex(h) {
  return formatHex(toRgb({ mode: 'hsv', h, s: 1, v: 1, alpha: 1 })) ?? '#000000'
}

function wedgePath(a1, a2) {
  const x1 = cx + r * Math.cos(a1)
  const y1 = cy + r * Math.sin(a1)
  const x2 = cx + r * Math.cos(a2)
  const y2 = cy + r * Math.sin(a2)
  return (
    `M ${cx} ${cy} L ${x1.toFixed(3)} ${y1.toFixed(3)} ` +
    `A ${r} ${r} 0 0 1 ${x2.toFixed(3)} ${y2.toFixed(3)} Z`
  )
}

const paths = []
for (let i = 0; i < wedges; i++) {
  // Start at 12 o'clock, clockwise — red at top
  const a1 = -Math.PI / 2 + (i / wedges) * Math.PI * 2
  const a2 = -Math.PI / 2 + ((i + 1) / wedges) * Math.PI * 2
  const h = ((i + 0.5) / wedges) * 360
  paths.push(`    <path d="${wedgePath(a1, a2)}" fill="${hueHex(h)}"/>`)
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
  <g stroke="none">
${paths.join('\n')}
  </g>
</svg>
`

writeFileSync(new URL('../demo/favicon.svg', import.meta.url), svg)
console.log(`favicon.svg — ${wedges} HSV wedges, ${svg.length} bytes`)
