import '../src/pretty-color-picker'
import { oklchToRgbString } from '../src/color/conversions'
import type { ColorChangeDetail } from '../src/types'

const picker = document.querySelector('pretty-color-picker')!

function applyPageBackground(detail: ColorChangeDetail): void {
  document.body.style.background = oklchToRgbString(detail.color)
}

picker.addEventListener('change', (event) => {
  applyPageBackground((event as CustomEvent<ColorChangeDetail>).detail)
})

applyPageBackground({ color: picker.color, css: picker.value, hex: '' })
