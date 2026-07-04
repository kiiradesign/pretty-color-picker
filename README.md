# Pretty Color Picker

A perceptually accurate color picker for the modern web. Colors are stored internally as **OKLCH** (`picker.color`); Hex, RGB, HSL, and OKLCH are edit/display formats. The 2D plane is a classic **saturation × value** slice at the current hue (the layout every color picker uses), not an OKLCH chroma × lightness plane.

Native **Web Component**. Works in any framework or plain HTML.

**[Live demo](https://colors.kiira.in)** · **[GitHub](https://github.com/kiiradesign/pretty-color-picker)**

The design and interactions are inspired by [DialKit](https://joshpuckett.me/dialkit). I'm considering contributing this component upstream.

## Features

Saturation × value color plane with hue and alpha sliders, format tabs (Hex / RGB / HSL / OKLCH), Last Used history, label scrubbing, **popover** mode (anchored to a trigger), draggable panel header, light / dark / system themes, Shadow DOM.

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

<!-- Popover anchored to a trigger (click outside or Escape to close) -->
<button type="button" id="color-btn">Pick color</button>
<pretty-color-picker
  value="#6366f1"
  mode="popover"
  anchor="#color-btn"
  header-action="close"
></pretty-color-picker>

<!-- Centered floating panel (demo-style) -->
<pretty-color-picker value="#6366f1" movable header-action="close"></pretty-color-picker>

<!-- Without Last Used history -->
<pretty-color-picker value="#6366f1" history="false"></pretty-color-picker>
```


| Attribute       | Values                      | Description                                      |
| --------------- | --------------------------- | ------------------------------------------------ |
| `value`         | CSS color                   | Initial color                                    |
| `theme`         | `light` \| `dark` \| `system` | Chrome theme                                     |
| `header-action` | `close` \| `theme` \| `none` | Close button, theme toggle, or no header button |
| `mode`          | `inline` \| `popover`       | `popover` = floating panel anchored to `anchor` |
| `anchor`        | CSS selector                | Trigger for popover mode (e.g. `#color-btn`)     |
| `open`          | present when visible        | Popover visibility (also `show()` / `hide()`)    |
| `movable`       | present to enable           | Draggable header (enabled by default in popover mode) |
| `history`       | `false` to hide             | Last Used swatch grid (on by default; hidden until the first color is committed) |


**Events:** `change` (`detail.color`, `detail.css`, `detail.hex`) fires while dragging sliders or scrubbing labels; field inputs commit on Enter/blur. Not fired on mount. `close` when the panel closes (`header-action="close"` or popover dismiss). `themechange` when the user clicks the built-in theme toggle (`header-action="theme"`).

**API:** `picker.value`, `picker.color` (OKLCH), `picker.theme`, `picker.headerAction`, `picker.mode`, `picker.anchor`, `picker.open`, `picker.show()`, `picker.hide()`, `picker.toggle()`, `picker.movable`, `picker.history`.

TypeScript types exported from `pretty-color-picker`.

## License

MIT. See [LICENSE](LICENSE). Icons from [Phosphor](https://phosphoricons.com) (MIT).