# Pretty Color Picker

A perceptually accurate color picker for the modern web. Colors are stored internally as **OKLCH** (`picker.color`); Hex, RGB, HSL, and OKLCH are edit/display formats. The 2D plane is a classic **saturation × value** slice at the current hue (the layout every color picker uses), not an OKLCH chroma × lightness plane.

Native **Web Component**. Works in any framework or plain HTML.

Try the live demo here: [https://colors.kiira.in](https://colors.kiira.in)

The design and interactions are inspired by [DialKit](https://joshpuckett.me/dialkit). I'm considering contributing this component upstream.

## Features

Saturation × value color plane with hue and alpha sliders, format tabs (Hex / RGB / HSL / OKLCH), Last Used history, label scrubbing, draggable panel (`movable`), light / dark / system themes, Shadow DOM.

## Install

```bash
npm install pretty-color-picker
```

## Usage

```ts
import 'pretty-color-picker'
```

```html
<pretty-color-picker value="#6366f1" theme="system" header-action="close"></pretty-color-picker>

<!-- Floating, draggable panel -->
<pretty-color-picker value="#6366f1" movable></pretty-color-picker>

<!-- Without Last Used history -->
<pretty-color-picker value="#6366f1" history="false"></pretty-color-picker>
```


| Attribute       | Values                      | Description                                      |
| --------------- | --------------------------- | ------------------------------------------------ |
| `value`         | CSS color                   | Initial color                                    |
| `theme`         | `light` \| `dark` \| `system` | Chrome theme                                     |
| `header-action` | `close` \| `theme`          | Close button or theme toggle                     |
| `movable`       | present to enable           | Draggable floating panel                         |
| `history`       | `false` to hide             | Last Used swatch grid (on by default; hidden until the first color is committed) |


**Events:** `change` (`detail.color`, `detail.css`, `detail.hex`) fires while dragging sliders or scrubbing labels; field inputs commit on Enter/blur. Not fired on mount. `close` when `header-action="close"`. `themechange` when `header-action="theme"`.

**API:** `picker.value`, `picker.color` (OKLCH), `picker.theme`, `picker.headerAction`, `picker.movable`, `picker.history`.

TypeScript types exported from `pretty-color-picker`.

## License

MIT. See [LICENSE](LICENSE). Icons from [Phosphor](https://phosphoricons.com) (MIT).