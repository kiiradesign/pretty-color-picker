import '../src/pretty-color-picker'
import type { PickerTheme } from '../src/types'

const picker = document.querySelector('pretty-color-picker')!
const buttons = document.querySelectorAll<HTMLButtonElement>('[data-theme-option]')

function setTheme(theme: PickerTheme): void {
  picker.setAttribute('theme', theme)
  document.body.dataset.theme = theme === 'system' ? systemTheme() : theme
  buttons.forEach((btn) => {
    btn.dataset.active = String(btn.dataset.themeOption === theme)
  })
}

function systemTheme(): 'dark' | 'light' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    setTheme(btn.dataset.themeOption as PickerTheme)
  })
})

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (picker.getAttribute('theme') === 'system') {
    document.body.dataset.theme = systemTheme()
  }
})
