# Pretty Color Picker

A perceptually accurate color picker for the modern web. Colors live in **OKLCH** (`picker.color`); Hex, RGB, HSL, and OKLCH are there for editing and display. The plane is **saturation × value** at the current hue.

Native **Web Component**. Works in any framework or plain HTML.

**[Live demo](https://colors.kiira.in)** · **[npm](https://www.npmjs.com/package/pretty-color-picker)**

![Pretty Color Picker demo](./docs/pcp.gif)

The design and interactions are inspired by [DialKit](https://joshpuckett.me/dialkit). I'm considering contributing this component upstream.

## Features

Saturation × value color plane with hue and alpha sliders, format tabs (Hex / RGB / HSL / OKLCH), Last Used history, field label scrubbing, **popover** mode (anchored to a trigger), draggable panel header, customizable panel title, light / dark / system themes, Shadow DOM.

## Install

Published on npm as `[pretty-color-picker](https://www.npmjs.com/package/pretty-color-picker)` (v0.1.3).

```bash
npm install pretty-color-picker
```



## Usage

```ts
import 'pretty-color-picker'
```

```html
<pretty-color-picker value="#6366f1" theme="system" header-action="close"></pretty-color-picker>

<!-- Custom panel title -->
<pretty-color-picker value="#6366f1" label="Brand color"></pretty-color-picker>

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


| Attribute       | Values                      | Description                                                                      |
| --------------- | --------------------------- | -------------------------------------------------------------------------------- |
| `value`         | CSS color                   | Initial color                                                                    |
| `label`         | string                      | Panel header title (default: `Pretty Color Picker`; `label=""` hides it)         |
| `theme`         | `light` | `dark` | `system` | Chrome theme                                                                     |
| `header-action` | `close` | `theme` | `none`  | Close button, theme toggle, or no header button                                  |
| `mode`          | `inline` | `popover`        | `popover` = floating panel anchored to `anchor`                                  |
| `anchor`        | CSS selector                | Trigger for popover mode (e.g. `#color-btn`)                                     |
| `open`          | present when visible        | Popover visibility (also `show()` / `hide()`)                                    |
| `movable`       | present to enable           | Draggable header (enabled by default in popover mode)                            |
| `history`       | `false` to hide             | Last Used swatch grid (on by default; hidden until the first color is committed) |


**Events:** `change` (`detail.color`, `detail.css`, `detail.hex`) fires while dragging sliders or scrubbing labels; field inputs commit on Enter/blur. Not fired on mount. `close` when the panel closes (`header-action="close"` or popover dismiss). `themechange` when the user clicks the built-in theme toggle (`header-action="theme"`).

**API:** `picker.value`, `picker.color` (OKLCH), `picker.label`, `picker.theme`, `picker.headerAction`, `picker.mode`, `picker.anchor`, `picker.open`, `picker.show()`, `picker.hide()`, `picker.toggle()`, `picker.movable`, `picker.history`.

TypeScript types exported from `pretty-color-picker`.

## License

MIT. See [LICENSE](LICENSE). Icons from [Phosphor](https://phosphoricons.com) (MIT).