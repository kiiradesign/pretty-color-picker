# Pretty Color Picker

A perceptually accurate color picker for the modern web. OKLCH is the internal source of truth; Hex, RGB, HSL, and OKLCH are display formats.

Native **Web Component** — works in any framework or plain HTML.

**[Try the live demo →](https://colors.kiira.in)**

## Features

OKLCH color plane, hue and alpha sliders, format tabs (Hex / RGB / HSL / OKLCH), Last Used history, light / dark / system themes, Shadow DOM.

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
```

| Attribute | Values | Description |
|-----------|--------|-------------|
| `value` | CSS color | Initial color |
| `theme` | `light` \| `dark` \| `system` | Chrome theme |
| `header-action` | `close` \| `theme` | Close button or theme toggle |

**Events:** `change` (`detail.color`, `detail.css`, `detail.hex`) — on commit, not live typing. `close` when `header-action="close"`. `themechange` when `header-action="theme"`.

**API:** `picker.value`, `picker.color` (OKLCH), `picker.theme`, `picker.headerAction`.

TypeScript types exported from `pretty-color-picker`.

## License

MIT — see [LICENSE](LICENSE). Icons from [Phosphor](https://phosphoricons.com) (MIT).
