/**
 * Pre-release regression checks. Run: npm run check
 */
import {
  colorFromOklchScrub,
  colorFromPlanePosition,
  colorWithHue,
  hsvHueFromColor,
  isHueLocked,
  normalizeOklch,
  oklchFromCss,
  parseFormatFields,
  rgbAtHueSlider,
} from '../src/color/conversions.ts'
import { handleColorForRgb } from '../src/utils/contrast.ts'

let failed = 0

function assert(cond: boolean, msg: string): void {
  if (!cond) {
    console.error('FAIL:', msg)
    failed++
  }
}

// Plane hue must not drift when chroma hits zero
const planeHue = 200
let color = normalizeOklch({ l: 0.7, c: 0.2, h: 303, alpha: 1 })
for (const c of [0.1, 0.01, 0.002, 0.001, 0]) {
  color = colorFromOklchScrub(color, 'c', c, planeHue)
  if (isHueLocked(color)) {
    assert(Math.abs(color.h - planeHue) < 0.5, `chroma scrub h drift at c=${c}`)
  }
}
color = colorFromPlanePosition(0, 0.5, planeHue, 1)
assert(Math.abs(color.h - planeHue) < 0.5, 'plane edge h drift')

// Hue slider handle contrast must match the CSS rainbow
const yellow = rgbAtHueSlider(0.17)
assert(handleColorForRgb(yellow.r, yellow.g, yellow.b) === '#171717', 'yellow → dark handle')
const red = rgbAtHueSlider(0)
assert(handleColorForRgb(red.r, red.g, red.b) === '#ededed', 'red → light handle')

// Color parsing round-trips
for (const input of ['#6366f1', '#ff0000', 'oklch(70% 0.15 180)', 'hsl(200, 80%, 50%)']) {
  assert(oklchFromCss(input) != null, `parse failed: ${input}`)
}

// OKLCH c=0 preserves hue when coming from chromatic
const chromatic = normalizeOklch({ l: 0.6, c: 0.2, h: 45, alpha: 1 })
const gray = parseFormatFields('oklch', { l: '60', c: '0', h: '999' }, chromatic)
assert(gray != null && gray.c === 0, 'oklch c=0 parse')
if (gray) assert(Math.abs(gray.h - 45) < 0.5, 'hue preserved when c→0')

// Achromatic hue scrub via colorWithHue
const ach = normalizeOklch({ l: 0.5, c: 0, h: 120, alpha: 1 })
assert(Math.abs(colorWithHue(ach, 240).h - 240) < 0.5, 'colorWithHue on gray')

// Chromatic HSV hue in range
const blue = normalizeOklch({ l: 0.5, c: 0.2, h: 250, alpha: 1 })
const hsvH = hsvHueFromColor(blue)
assert(hsvH >= 0 && hsvH <= 360, 'hsv hue in range')

if (failed > 0) {
  console.error(`\n${failed} check(s) failed`)
  process.exit(1)
}

console.log('All release checks passed.')
