import '../src/pretty-color-picker'

const picker = document.querySelector('pretty-color-picker')!
const output = document.getElementById('output')!

function update(event: Event) {
  const detail = (event as CustomEvent<{ css: string }>).detail
  output.textContent = detail.css
}

picker.addEventListener('change', update)
output.textContent = picker.getAttribute('value') ?? '—'
