var nr = (e) => {
  throw TypeError(e);
};
var Dt = (e, n, t) => n.has(e) || nr("Cannot " + t);
var l = (e, n, t) => (Dt(e, n, "read from private field"), t ? t.call(e) : n.get(e)), w = (e, n, t) => n.has(e) ? nr("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(e) : n.set(e, t), m = (e, n, t, r) => (Dt(e, n, "write to private field"), r ? r.call(e, t) : n.set(e, t), t), d = (e, n, t) => (Dt(e, n, "access private method"), t);
const rr = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z" opacity="0.2"/><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/></svg>', Ki = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z" opacity="0.2"/><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"/></svg>', Qi = '@import"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap";:host{--pcp-width: 260px;--pcp-radius-sm: 4px;--pcp-radius: 6px;--pcp-radius-lg: 9px;--pcp-panel-padding: 9px;--pcp-section-gap: 6px;--pcp-history-cols: 8;--pcp-history-swatch-size: calc( (var(--pcp-width) - 2 * var(--pcp-panel-padding) - 7 * var(--pcp-history-gap)) / var(--pcp-history-cols) );--pcp-control-height: var(--pcp-history-swatch-size);--pcp-slider-height: 36px;--pcp-slider-handle-width: 3px;--pcp-slider-handle-height: 20px;--pcp-tabs-radius: 8px;--pcp-tabs-pill-radius: 6px;--pcp-tab-font-size: 11px;--pcp-tab-padding-y: 6px;--pcp-tab-padding-x: 8px;--pcp-field-value-size: 11px;--pcp-field-value-line: 15px;--pcp-field-input-height: 28px;--pcp-input-panel-height: var(--pcp-field-input-height);--pcp-input-row-padding-y: 4px;--pcp-input-row-padding-x: 7px;--pcp-alpha-col-width: 4ch;--pcp-value-col-width: minmax(0, 1fr);--pcp-swatch-code-gap: 8px;--pcp-history-gap: 6px;--pcp-checker-size: 6px;--pcp-loupe-size: 13px;--pcp-field-input-radius: var(--pcp-radius-sm);--pcp-icon-button-size: 26px;--pcp-icon-button-radius: var(--pcp-radius-sm);--pcp-ease-out: cubic-bezier(.175, .885, .32, 1.1);--pcp-font: "Geist", system-ui, -apple-system, "SF Pro Display", sans-serif;--pcp-mono: "Geist Mono", ui-monospace, monospace;display:inline-block;font-family:var(--pcp-font);-webkit-font-smoothing:antialiased;color:var(--pcp-text-primary)}:host([mode="popover"]),:host([movable]){position:fixed;z-index:1000;margin:0}:host([mode="popover"]:not([open])){display:none}:host([mode="popover"]) .pcp-header,:host([movable]) .pcp-header{cursor:grab;touch-action:none}:host([mode="popover"]) .pcp-header[data-dragging=true],:host([movable]) .pcp-header[data-dragging=true]{cursor:grabbing}:host([mode="popover"]) .pcp-header .pcp-tabs,:host([movable]) .pcp-header .pcp-tabs,:host([mode="popover"]) .pcp-header .pcp-tab,:host([movable]) .pcp-header .pcp-tab,:host([mode="popover"]) .pcp-header .pcp-header-btn,:host([movable]) .pcp-header .pcp-header-btn{cursor:pointer;touch-action:manipulation}:host,:host([theme="dark"]){color-scheme:dark;--pcp-bg: #212121;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: rgba(255, 255, 255, .05);--pcp-surface-hover: rgba(255, 255, 255, .1);--pcp-surface-active: rgba(255, 255, 255, .11);--pcp-tab-pill: rgba(255, 255, 255, .11);--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-root: #ffffff;--pcp-text-section: rgba(255, 255, 255, .7);--pcp-text-primary: rgba(255, 255, 255, .95);--pcp-text-label: rgba(255, 255, 255, .7);--pcp-text-muted: #a0a0a0;--pcp-text-secondary: rgba(255, 255, 255, .6);--pcp-text-tertiary: rgba(255, 255, 255, .4);--pcp-text-focus: #ffffff;--pcp-slider-handle: rgba(255, 255, 255, .95);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: 0 8px 32px rgba(0, 0, 0, .5)}:host([theme="light"]){color-scheme:light;--pcp-bg: #fafafa;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: rgba(0, 0, 0, .04);--pcp-surface-hover: rgba(0, 0, 0, .08);--pcp-surface-active: rgba(0, 0, 0, .1);--pcp-tab-pill: rgba(0, 0, 0, .1);--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-root: #000000;--pcp-text-section: rgba(0, 0, 0, .65);--pcp-text-primary: rgba(0, 0, 0, .9);--pcp-text-label: rgba(0, 0, 0, .6);--pcp-text-muted: #4d4d4d;--pcp-text-secondary: rgba(0, 0, 0, .55);--pcp-text-tertiary: rgba(0, 0, 0, .35);--pcp-text-focus: #000000;--pcp-slider-handle: rgba(0, 0, 0, .9);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 4px 20px rgba(0, 0, 0, .08)}@media(prefers-color-scheme:dark){:host([theme="system"]){color-scheme:dark;--pcp-bg: #212121;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: rgba(255, 255, 255, .05);--pcp-surface-hover: rgba(255, 255, 255, .1);--pcp-surface-active: rgba(255, 255, 255, .11);--pcp-tab-pill: rgba(255, 255, 255, .11);--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-root: #ffffff;--pcp-text-section: rgba(255, 255, 255, .7);--pcp-text-primary: rgba(255, 255, 255, .95);--pcp-text-label: rgba(255, 255, 255, .7);--pcp-text-muted: #a0a0a0;--pcp-text-secondary: rgba(255, 255, 255, .6);--pcp-text-tertiary: rgba(255, 255, 255, .4);--pcp-text-focus: #ffffff;--pcp-slider-handle: rgba(255, 255, 255, .95);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: 0 8px 32px rgba(0, 0, 0, .5)}}@media(prefers-color-scheme:light){:host([theme="system"]){color-scheme:light;--pcp-bg: #fafafa;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: rgba(0, 0, 0, .04);--pcp-surface-hover: rgba(0, 0, 0, .08);--pcp-surface-active: rgba(0, 0, 0, .1);--pcp-tab-pill: rgba(0, 0, 0, .1);--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-root: #000000;--pcp-text-section: rgba(0, 0, 0, .65);--pcp-text-primary: rgba(0, 0, 0, .9);--pcp-text-label: rgba(0, 0, 0, .6);--pcp-text-muted: #4d4d4d;--pcp-text-secondary: rgba(0, 0, 0, .55);--pcp-text-tertiary: rgba(0, 0, 0, .35);--pcp-text-focus: #000000;--pcp-slider-handle: rgba(0, 0, 0, .9);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 4px 20px rgba(0, 0, 0, .08)}}*,*:before,*:after{box-sizing:border-box}.pcp-clip{overflow:hidden;border-radius:var(--pcp-clip-radius, var(--pcp-radius-sm))}.pcp-swatch-fill{display:block;box-sizing:border-box;width:calc(100% + 2px);height:calc(100% + 2px);margin:-1px;border-radius:inherit;background-color:var(--pcp-checker-base);background-image:linear-gradient(to right,var(--swatch-solid, #000) 50%,transparent 50%),linear-gradient(to right,transparent 50%,var(--swatch-alpha, rgba(0, 0, 0, .5)) 50%),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,100% 100%,var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size);background-position:0 0,0 0,0 0,0 calc(var(--pcp-checker-size) / 2),calc(var(--pcp-checker-size) / 2) calc(var(--pcp-checker-size) / -2),calc(var(--pcp-checker-size) / -2) 0}@supports (background: -webkit-named-image(i)){.pcp-clip,.pcp-swatch-fill{clip-path:inset(0 round var(--pcp-clip-radius, var(--pcp-radius-sm)))}}.pcp{display:flex;flex-direction:column;gap:var(--pcp-section-gap);width:var(--pcp-width);background:var(--pcp-bg);border:1px solid var(--pcp-border);border-radius:var(--pcp-radius-lg);box-shadow:var(--pcp-elevation);padding:var(--pcp-panel-padding);-webkit-user-select:none;user-select:none}.pcp-header{display:flex;align-items:center;justify-content:space-between;gap:6px;padding-bottom:6px;margin-bottom:0;min-height:var(--pcp-icon-button-size);border-bottom:1px solid var(--pcp-divider)}.pcp-header .pcp-tabs{flex:1;min-width:0}.pcp-header-btn{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--pcp-icon-button-size);height:var(--pcp-icon-button-size);padding:0;border:none;border-radius:var(--pcp-icon-button-radius);background:transparent;color:var(--pcp-text-focus);cursor:pointer;transition:background .15s var(--pcp-ease-out),color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-header-btn svg{width:13px;height:13px;flex-shrink:0}@media(hover:hover)and (pointer:fine){.pcp-header-btn:hover{background:var(--pcp-surface-hover);color:var(--pcp-text-primary)}}.pcp-header-btn:active{background:var(--pcp-surface-active);transform:scale(.97)}.pcp-header-btn:focus{outline:none}.pcp-header-btn:focus-visible{box-shadow:0 0 0 2px var(--pcp-bg),0 0 0 4px var(--pcp-focus-ring)}.pcp-plane-wrap{position:relative;width:100%;aspect-ratio:4 / 3;margin-bottom:0;cursor:crosshair;touch-action:none;overflow:visible}.pcp-plane-surface{position:absolute;top:0;right:0;bottom:0;left:0;--pcp-clip-radius: var(--pcp-radius-sm)}.pcp-plane{display:block;width:100%;height:100%}.pcp-cursor{position:absolute;z-index:2;width:var(--pcp-loupe-size);height:var(--pcp-loupe-size);margin:calc(var(--pcp-loupe-size) / -2) 0 0 calc(var(--pcp-loupe-size) / -2);border:2px solid var(--pcp-cursor-ring);border-radius:50%;box-shadow:0 0 0 1px var(--pcp-cursor-outline),inset 0 0 0 1px #0000001f;pointer-events:none}.pcp-cursor[data-dragging=true]{transition:none}.pcp-slider-wrapper{position:relative;height:var(--pcp-slider-height);margin-bottom:0;overflow:visible}.pcp-slider{position:absolute;top:0;right:0;bottom:0;left:0;cursor:pointer;-webkit-user-select:none;user-select:none;background:transparent;touch-action:none;overflow:visible}.pcp-slider-track{position:absolute;top:0;right:0;bottom:0;left:0;--pcp-clip-radius: var(--pcp-radius);pointer-events:none}.pcp-slider-fill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none}.pcp-slider-fill-hue{background:linear-gradient(to right,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.pcp-slider-fill-alpha{--pcp-alpha-gradient: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));background-color:var(--pcp-checker-base);background-image:var(--pcp-alpha-gradient),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size);background-position:0 0,0 0,0 calc(var(--pcp-checker-size) / 2),calc(var(--pcp-checker-size) / 2) calc(var(--pcp-checker-size) / -2),calc(var(--pcp-checker-size) / -2) 0}.pcp-slider-handle{position:absolute;top:50%;left:0;z-index:2;width:var(--pcp-slider-handle-width);height:var(--pcp-slider-handle-height);border:none;outline:none;border-radius:999px;background-color:var(--pcp-slider-handle);pointer-events:none;transform:translateY(-50%);opacity:1;box-shadow:none;filter:none;transition:background-color .12s ease}.pcp-slider-handle[data-dragging=true]{opacity:1}.pcp-tabs{position:relative;display:flex;align-items:stretch;box-sizing:border-box;padding:2px;margin-bottom:0;background:transparent;border-radius:var(--pcp-tabs-radius)}.pcp-tabs-pill{position:absolute;top:2px;bottom:2px;left:0;width:0;background:var(--pcp-surface-active);border-radius:var(--pcp-tabs-pill-radius);z-index:0;pointer-events:none;transition:left .2s var(--pcp-ease-out),width .2s var(--pcp-ease-out)}.pcp-tab{position:relative;z-index:1;flex:1;display:flex;align-items:center;justify-content:center;padding:var(--pcp-tab-padding-y) var(--pcp-tab-padding-x);font-family:inherit;font-size:var(--pcp-tab-font-size);font-weight:500;line-height:1;letter-spacing:normal;text-transform:none;text-align:center;background:transparent;border:none;color:var(--pcp-text-label);cursor:pointer;transition:color .15s var(--pcp-ease-out)}.pcp-tab[data-active=true]{color:var(--pcp-text-primary)}.pcp-tab:active{transform:scale(.97)}@media(min-width:641px){:host{--pcp-tab-padding-y: 9px}}.pcp-inputs{display:grid;width:100%;min-width:0;box-sizing:border-box;overflow:hidden;grid-template-columns:var(--pcp-input-panel-height) var(--pcp-swatch-code-gap) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-alpha-col-width);column-gap:3px;align-items:center;margin-bottom:0;padding:var(--pcp-input-row-padding-y) var(--pcp-input-row-padding-x);background:var(--pcp-surface);border-radius:var(--pcp-radius-sm)}.pcp-swatch{grid-column:1;flex-shrink:0;width:var(--pcp-input-panel-height);height:var(--pcp-input-panel-height);--pcp-clip-radius: var(--pcp-radius-sm);position:relative}.pcp-fields{grid-column:3 / 6;display:grid;min-width:0;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:3px}.pcp-fields[data-format=hex] .pcp-field-hex{grid-column:1 / -1;justify-self:center;width:fit-content;align-items:center}.pcp-fields[data-format=hex] .pcp-field-input{width:8ch;min-width:8ch;padding:0 4px}.pcp-fields[data-format=rgb] .pcp-field-r{grid-column:1}.pcp-fields[data-format=rgb] .pcp-field-g{grid-column:2}.pcp-fields[data-format=rgb] .pcp-field-b{grid-column:3}.pcp-fields[data-format=hsl] .pcp-field-h{grid-column:1}.pcp-fields[data-format=hsl] .pcp-field-s{grid-column:2}.pcp-fields[data-format=hsl] .pcp-field-l{grid-column:3}.pcp-fields[data-format=oklch] .pcp-field-l{grid-column:1}.pcp-fields[data-format=oklch] .pcp-field-c{grid-column:2}.pcp-fields[data-format=oklch] .pcp-field-h{grid-column:3}.pcp-alpha-field{grid-column:6;box-sizing:border-box;width:var(--pcp-alpha-col-width);min-width:var(--pcp-alpha-col-width);max-width:var(--pcp-alpha-col-width);align-items:center}.pcp-alpha-field .pcp-field-input{width:100%;min-width:0;padding:0;box-sizing:border-box}.pcp-field{min-width:0;display:flex;flex-direction:column;align-items:stretch;justify-content:center}.pcp-fields[data-format=oklch] .pcp-field-c .pcp-field-input{letter-spacing:-.02em;padding:0 1px}.pcp-fields:not([data-format=hex]) .pcp-field-input,.pcp-alpha-field .pcp-field-input{cursor:ew-resize;touch-action:none}.pcp-field-input[data-scrubbing=true]{color:var(--pcp-text-focus);cursor:ew-resize}.pcp-field-input{width:100%;min-width:0;min-height:var(--pcp-field-input-height);height:var(--pcp-field-input-height);padding:0 2px;font-family:var(--pcp-mono);font-size:var(--pcp-field-value-size);font-weight:500;line-height:var(--pcp-field-input-height);font-variant-numeric:tabular-nums;text-align:center;color:var(--pcp-text-secondary);background:transparent;border:none;border-radius:var(--pcp-field-input-radius);outline:none;box-shadow:none;transition:color .15s var(--pcp-ease-out),background .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-field-input:hover{background:var(--pcp-surface-hover)}}.pcp-field-input:focus{color:var(--pcp-text-focus);background:transparent;border-radius:var(--pcp-field-input-radius);box-shadow:none;outline:none;cursor:text}.pcp-field-input:active{background:var(--pcp-surface-active)}.pcp-history-section[hidden]{display:none}.pcp-history{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:var(--pcp-history-gap);width:100%}.pcp-history-swatch{-moz-appearance:none;appearance:none;-webkit-appearance:none;display:block;width:100%;aspect-ratio:1;height:auto;flex-shrink:0;padding:0;border:none;background:none;--pcp-clip-radius: 4px;cursor:pointer;transition:opacity .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-history-swatch:hover{opacity:.85}}.pcp-history-swatch:active{opacity:.7}@media(prefers-reduced-motion:reduce){.pcp-header-btn,.pcp-tab,.pcp-tabs-pill,.pcp-cursor,.pcp-slider-handle,.pcp-history-swatch{transition:none}.pcp-tab:active,.pcp-header-btn:active{transform:none}}', Fr = (e, n) => {
  if (typeof e == "number") {
    if (n === 3)
      return {
        mode: "rgb",
        r: (e >> 8 & 15 | e >> 4 & 240) / 255,
        g: (e >> 4 & 15 | e & 240) / 255,
        b: (e & 15 | e << 4 & 240) / 255
      };
    if (n === 4)
      return {
        mode: "rgb",
        r: (e >> 12 & 15 | e >> 8 & 240) / 255,
        g: (e >> 8 & 15 | e >> 4 & 240) / 255,
        b: (e >> 4 & 15 | e & 240) / 255,
        alpha: (e & 15 | e << 4 & 240) / 255
      };
    if (n === 6)
      return {
        mode: "rgb",
        r: (e >> 16 & 255) / 255,
        g: (e >> 8 & 255) / 255,
        b: (e & 255) / 255
      };
    if (n === 8)
      return {
        mode: "rgb",
        r: (e >> 24 & 255) / 255,
        g: (e >> 16 & 255) / 255,
        b: (e >> 8 & 255) / 255,
        alpha: (e & 255) / 255
      };
  }
}, ea = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  // Added in CSS Colors Level 4:
  // https://drafts.csswg.org/css-color/#changes-from-3
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, ta = (e) => Fr(ea[e.toLowerCase()], 6), na = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, ra = (e) => {
  let n;
  return (n = e.match(na)) ? Fr(parseInt(n[1], 16), n[1].length) : void 0;
}, de = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", Be = `${de}%`, Dn = `(?:${de}%|${de})`, ia = `(?:${de}(deg|grad|rad|turn)|${de})`, Le = "\\s*,\\s*", aa = new RegExp(
  `^rgba?\\(\\s*${de}${Le}${de}${Le}${de}\\s*(?:,\\s*${Dn}\\s*)?\\)$`
), sa = new RegExp(
  `^rgba?\\(\\s*${Be}${Le}${Be}${Le}${Be}\\s*(?:,\\s*${Dn}\\s*)?\\)$`
), oa = (e) => {
  let n = { mode: "rgb" }, t;
  if (t = e.match(aa))
    t[1] !== void 0 && (n.r = t[1] / 255), t[2] !== void 0 && (n.g = t[2] / 255), t[3] !== void 0 && (n.b = t[3] / 255);
  else if (t = e.match(sa))
    t[1] !== void 0 && (n.r = t[1] / 100), t[2] !== void 0 && (n.g = t[2] / 100), t[3] !== void 0 && (n.b = t[3] / 100);
  else
    return;
  return t[4] !== void 0 ? n.alpha = Math.max(0, Math.min(1, t[4] / 100)) : t[5] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[5]))), n;
}, pt = (e, n) => e === void 0 ? void 0 : typeof e != "object" ? jr(e) : e.mode !== void 0 ? e : n ? { ...e, mode: n } : void 0, X = (e = "rgb") => (n) => (n = pt(n, e)) !== void 0 ? (
  // if the color's mode corresponds to our target mode
  n.mode === e ? (
    // then just return the color
    n
  ) : (
    // otherwise check to see if we have a dedicated
    // converter for the target mode
    Y[n.mode][e] ? (
      // and return its result...
      Y[n.mode][e](n)
    ) : (
      // ...otherwise pass through RGB as an intermediary step.
      // if the target mode is RGB...
      e === "rgb" ? (
        // just return the RGB
        Y[n.mode].rgb(n)
      ) : (
        // otherwise convert color.mode -> RGB -> target_mode
        Y.rgb[e](Y[n.mode].rgb(n))
      )
    )
  )
) : void 0, Y = {}, Xr = {}, ht = [], Dr = {}, la = (e) => e, k = (e) => (Y[e.mode] = {
  ...Y[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((n) => {
  Y[n] || (Y[n] = {}), Y[n][e.mode] = e.fromMode[n];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((n) => {
  if (e.ranges[n] === void 0 && (e.ranges[n] = [0, 1]), !e.interpolate[n])
    throw new Error(`Missing interpolator for: ${n}`);
  typeof e.interpolate[n] == "function" && (e.interpolate[n] = {
    use: e.interpolate[n]
  }), e.interpolate[n].fixup || (e.interpolate[n].fixup = la);
}), Xr[e.mode] = e, (e.parse || []).forEach((n) => {
  ca(n, e.mode);
}), X(e.mode)), Mt = (e) => Xr[e], ca = (e, n) => {
  if (typeof e == "string") {
    if (!n)
      throw new Error("'mode' required when 'parser' is a string");
    Dr[e] = n;
  } else typeof e == "function" && ht.indexOf(e) < 0 && ht.push(e);
}, mn = /[^\x00-\x7F]|[a-zA-Z_]/, da = /[^\x00-\x7F]|[-\w]/, h = {
  Function: "function",
  Ident: "ident",
  Number: "number",
  Percentage: "percentage",
  ParenClose: ")",
  None: "none",
  Hue: "hue",
  Alpha: "alpha"
};
let v = 0;
function tt(e) {
  let n = e[v], t = e[v + 1];
  return n === "-" || n === "+" ? /\d/.test(t) || t === "." && /\d/.test(e[v + 2]) : n === "." ? /\d/.test(t) : /\d/.test(n);
}
function vn(e) {
  if (v >= e.length)
    return !1;
  let n = e[v];
  if (mn.test(n))
    return !0;
  if (n === "-") {
    if (e.length - v < 2)
      return !1;
    let t = e[v + 1];
    return !!(t === "-" || mn.test(t));
  }
  return !1;
}
const pa = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function Xe(e) {
  let n = "";
  if ((e[v] === "-" || e[v] === "+") && (n += e[v++]), n += nt(e), e[v] === "." && /\d/.test(e[v + 1]) && (n += e[v++] + nt(e)), (e[v] === "e" || e[v] === "E") && ((e[v + 1] === "-" || e[v + 1] === "+") && /\d/.test(e[v + 2]) ? n += e[v++] + e[v++] + nt(e) : /\d/.test(e[v + 1]) && (n += e[v++] + nt(e))), vn(e)) {
    let t = ut(e);
    return t === "deg" || t === "rad" || t === "turn" || t === "grad" ? { type: h.Hue, value: n * pa[t] } : void 0;
  }
  return e[v] === "%" ? (v++, { type: h.Percentage, value: +n }) : { type: h.Number, value: +n };
}
function nt(e) {
  let n = "";
  for (; /\d/.test(e[v]); )
    n += e[v++];
  return n;
}
function ut(e) {
  let n = "";
  for (; v < e.length && da.test(e[v]); )
    n += e[v++];
  return n;
}
function ha(e) {
  let n = ut(e);
  return e[v] === "(" ? (v++, { type: h.Function, value: n }) : n === "none" ? { type: h.None, value: void 0 } : { type: h.Ident, value: n };
}
function ua(e = "") {
  let n = e.trim(), t = [], r;
  for (v = 0; v < n.length; ) {
    if (r = n[v++], r === `
` || r === "	" || r === " ") {
      for (; v < n.length && (n[v] === `
` || n[v] === "	" || n[v] === " "); )
        v++;
      continue;
    }
    if (r === ",")
      return;
    if (r === ")") {
      t.push({ type: h.ParenClose });
      continue;
    }
    if (r === "+") {
      if (v--, tt(n)) {
        t.push(Xe(n));
        continue;
      }
      return;
    }
    if (r === "-") {
      if (v--, tt(n)) {
        t.push(Xe(n));
        continue;
      }
      if (vn(n)) {
        t.push({ type: h.Ident, value: ut(n) });
        continue;
      }
      return;
    }
    if (r === ".") {
      if (v--, tt(n)) {
        t.push(Xe(n));
        continue;
      }
      return;
    }
    if (r === "/") {
      for (; v < n.length && (n[v] === `
` || n[v] === "	" || n[v] === " "); )
        v++;
      let i;
      if (tt(n) && (i = Xe(n), i.type !== h.Hue)) {
        t.push({ type: h.Alpha, value: i });
        continue;
      }
      if (vn(n) && ut(n) === "none") {
        t.push({
          type: h.Alpha,
          value: { type: h.None, value: void 0 }
        });
        continue;
      }
      return;
    }
    if (/\d/.test(r)) {
      v--, t.push(Xe(n));
      continue;
    }
    if (mn.test(r)) {
      v--, t.push(ha(n));
      continue;
    }
    return;
  }
  return t;
}
function fa(e) {
  e._i = 0;
  let n = e[e._i++];
  if (!n || n.type !== h.Function || n.value !== "color" || (n = e[e._i++], n.type !== h.Ident))
    return;
  const t = Dr[n.value];
  if (!t)
    return;
  const r = { mode: t }, i = Or(e, !1);
  if (!i)
    return;
  const a = Mt(t).channels;
  for (let s = 0, c, p; s < a.length; s++)
    c = i[s], p = a[s], c.type !== h.None && (r[p] = c.type === h.Number ? c.value : c.value / 100, p === "alpha" && (r[p] = Math.max(0, Math.min(1, r[p]))));
  return r;
}
function Or(e, n) {
  const t = [];
  let r;
  for (; e._i < e.length; ) {
    if (r = e[e._i++], r.type === h.None || r.type === h.Number || r.type === h.Alpha || r.type === h.Percentage || n && r.type === h.Hue) {
      t.push(r);
      continue;
    }
    if (r.type === h.ParenClose) {
      if (e._i < e.length)
        return;
      continue;
    }
    return;
  }
  if (!(t.length < 3 || t.length > 4)) {
    if (t.length === 4) {
      if (t[3].type !== h.Alpha)
        return;
      t[3] = t[3].value;
    }
    return t.length === 3 && t.push({ type: h.None, value: void 0 }), t.every((i) => i.type !== h.Alpha) ? t : void 0;
  }
}
function ba(e, n) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== h.Function)
    return;
  let r = Or(e, n);
  if (r)
    return r.unshift(t.value), r;
}
const jr = (e) => {
  if (typeof e != "string")
    return;
  const n = ua(e), t = n ? ba(n, !0) : void 0;
  let r, i = 0, a = ht.length;
  for (; i < a; )
    if ((r = ht[i++](e, t)) !== void 0)
      return r;
  return n ? fa(n) : void 0;
};
function ga(e, n) {
  if (!n || n[0] !== "rgb" && n[0] !== "rgba")
    return;
  const t = { mode: "rgb" }, [, r, i, a, s] = n;
  if (!(r.type === h.Hue || i.type === h.Hue || a.type === h.Hue))
    return r.type !== h.None && (t.r = r.type === h.Number ? r.value / 255 : r.value / 100), i.type !== h.None && (t.g = i.type === h.Number ? i.value / 255 : i.value / 100), a.type !== h.None && (t.b = a.type === h.Number ? a.value / 255 : a.value / 100), s.type !== h.None && (t.alpha = Math.min(
      1,
      Math.max(
        0,
        s.type === h.Number ? s.value : s.value / 100
      )
    )), t;
}
const ma = (e) => e === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0, va = (e, n, t) => e + t * (n - e), xa = (e) => {
  let n = [];
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t], i = e[t + 1];
    r === void 0 && i === void 0 ? n.push(void 0) : r !== void 0 && i !== void 0 ? n.push([r, i]) : n.push(r !== void 0 ? [r, r] : [i, i]);
  }
  return n;
}, ya = (e) => (n) => {
  let t = xa(n);
  return (r) => {
    let i = r * t.length, a = r >= 1 ? t.length - 1 : Math.max(Math.floor(i), 0), s = t[a];
    return s === void 0 ? void 0 : e(s[0], s[1], i - a);
  };
}, u = ya(va), T = (e) => {
  let n = !1, t = e.map((r) => r !== void 0 ? (n = !0, r) : 1);
  return n ? t : e;
}, Se = {
  mode: "rgb",
  channels: ["r", "g", "b", "alpha"],
  parse: [
    ga,
    ra,
    oa,
    ta,
    ma,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: u,
    g: u,
    b: u,
    alpha: { use: u, fixup: T }
  },
  gamut: !0,
  white: { r: 1, g: 1, b: 1 },
  black: { r: 0, g: 0, b: 0 }
}, Ot = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), ir = (e) => {
  let n = Ot(e.r), t = Ot(e.g), r = Ot(e.b), i = {
    mode: "xyz65",
    x: 0.5766690429101305 * n + 0.1855582379065463 * t + 0.1882286462349947 * r,
    y: 0.297344975250536 * n + 0.6273635662554661 * t + 0.0752914584939979 * r,
    z: 0.0270313613864123 * n + 0.0706888525358272 * t + 0.9913375368376386 * r
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, jt = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), ar = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "a98",
    r: jt(
      e * 2.0415879038107465 - n * 0.5650069742788597 - 0.3447313507783297 * t
    ),
    g: jt(
      e * -0.9692436362808798 + n * 1.8759675015077206 + 0.0415550574071756 * t
    ),
    b: jt(
      e * 0.0134442806320312 - n * 0.1183623922310184 + 1.0151749943912058 * t
    )
  };
  return r !== void 0 && (i.alpha = r), i;
}, Zt = (e = 0) => {
  const n = Math.abs(e);
  return n <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((n + 0.055) / 1.055, 2.4);
}, Ce = ({ r: e, g: n, b: t, alpha: r }) => {
  let i = {
    mode: "lrgb",
    r: Zt(e),
    g: Zt(n),
    b: Zt(t)
  };
  return r !== void 0 && (i.alpha = r), i;
}, ve = (e) => {
  let { r: n, g: t, b: r, alpha: i } = Ce(e), a = {
    mode: "xyz65",
    x: 0.4123907992659593 * n + 0.357584339383878 * t + 0.1804807884018343 * r,
    y: 0.2126390058715102 * n + 0.715168678767756 * t + 0.0721923153607337 * r,
    z: 0.0193308187155918 * n + 0.119194779794626 * t + 0.9505321522496607 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, Yt = (e = 0) => {
  const n = Math.abs(e);
  return n > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(n, 1 / 2.4) - 0.055) : e * 12.92;
}, Te = ({ r: e, g: n, b: t, alpha: r }, i = "rgb") => {
  let a = {
    mode: i,
    r: Yt(e),
    g: Yt(n),
    b: Yt(t)
  };
  return r !== void 0 && (a.alpha = r), a;
}, xe = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Te({
    r: e * 3.2409699419045226 - n * 1.537383177570094 - 0.4986107602930034 * t,
    g: e * -0.9692436362808796 + n * 1.8759675015077204 + 0.0415550574071756 * t,
    b: e * 0.0556300796969936 - n * 0.2039769588889765 + 1.0569715142428784 * t
  });
  return r !== void 0 && (i.alpha = r), i;
}, Ma = {
  ...Se,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => ar(ve(e)),
    xyz65: ar
  },
  toMode: {
    rgb: (e) => xe(ir(e)),
    xyz65: ir
  }
}, H = (e) => (e = e % 360) < 0 ? e + 360 : e, wa = (e, n) => e.map((t, r, i) => {
  if (t === void 0)
    return t;
  let a = H(t);
  return r === 0 || e[r - 1] === void 0 ? a : n(a - H(i[r - 1]));
}).reduce((t, r) => !t.length || r === void 0 || t[t.length - 1] === void 0 ? (t.push(r), t) : (t.push(r + t[t.length - 1]), t), []), re = (e) => wa(e, (n) => Math.abs(n) <= 180 ? n : n - 360 * Math.sign(n)), P = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0], ka = Math.PI / 180, $a = 180 / Math.PI;
let sr = P[3] * P[4], or = P[1] * P[4], lr = P[1] * P[2] - P[0] * P[3];
const za = ({ r: e, g: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (lr * t + e * sr - n * or) / (lr + sr - or), a = t - i, s = (P[4] * (n - i) - P[2] * a) / P[3], c = {
    mode: "cubehelix",
    l: i,
    s: i === 0 || i === 1 ? void 0 : Math.sqrt(a * a + s * s) / (P[4] * i * (1 - i))
  };
  return c.s && (c.h = Math.atan2(s, a) * $a - 120), r !== void 0 && (c.alpha = r), c;
}, Aa = ({ h: e, s: n, l: t, alpha: r }) => {
  let i = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * ka, t === void 0 && (t = 0);
  let a = n === void 0 ? 0 : n * t * (1 - t), s = Math.cos(e), c = Math.sin(e);
  return i.r = t + a * (P[0] * s + P[1] * c), i.g = t + a * (P[2] * s + P[3] * c), i.b = t + a * (P[4] * s + P[5] * c), r !== void 0 && (i.alpha = r), i;
}, wt = (e, n) => {
  if (e.h === void 0 || n.h === void 0 || !e.s || !n.s)
    return 0;
  let t = H(e.h), r = H(n.h), i = Math.sin((r - t + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * n.s) * i;
}, _a = (e, n) => {
  if (e.h === void 0 || n.h === void 0)
    return 0;
  let t = H(e.h), r = H(n.h);
  return Math.abs(r - t) > 180 ? t - (r - 360 * Math.sign(r - t)) : r - t;
}, kt = (e, n) => {
  if (e.h === void 0 || n.h === void 0 || !e.c || !n.c)
    return 0;
  let t = H(e.h), r = H(n.h), i = Math.sin((r - t + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * n.c) * i;
}, ie = (e) => {
  let n = e.reduce(
    (r, i) => {
      if (i !== void 0) {
        let a = i * Math.PI / 180;
        r.sin += Math.sin(a), r.cos += Math.cos(a);
      }
      return r;
    },
    { sin: 0, cos: 0 }
  ), t = Math.atan2(n.sin, n.cos) * 180 / Math.PI;
  return t < 0 ? 360 + t : t;
}, La = {
  mode: "cubehelix",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--cubehelix"],
  serialize: "--cubehelix",
  ranges: {
    h: [0, 360],
    s: [0, 4.614],
    l: [0, 1]
  },
  fromMode: {
    rgb: za
  },
  toMode: {
    rgb: Aa
  },
  interpolate: {
    h: {
      use: u,
      fixup: re
    },
    s: u,
    l: u,
    alpha: {
      use: u,
      fixup: T
    }
  },
  difference: {
    h: wt
  },
  average: {
    h: ie
  }
}, pe = ({ l: e, a: n, b: t, alpha: r }, i = "lch") => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let a = Math.sqrt(n * n + t * t), s = { mode: i, l: e, c: a };
  return a && (s.h = H(Math.atan2(t, n) * 180 / Math.PI)), r !== void 0 && (s.alpha = r), s;
}, he = ({ l: e, c: n, h: t, alpha: r }, i = "lab") => {
  t === void 0 && (t = 0);
  let a = {
    mode: i,
    l: e,
    a: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    b: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return r !== void 0 && (a.alpha = r), a;
}, Zr = Math.pow(29, 3) / Math.pow(3, 3), Yr = Math.pow(6, 3) / Math.pow(29, 3), S = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: (1 - 0.3457 - 0.3585) / 0.3585
}, ke = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: (1 - 0.3127 - 0.329) / 0.329
};
let Bt = (e) => Math.pow(e, 3) > Yr ? Math.pow(e, 3) : (116 * e - 16) / Zr;
const Br = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (e + 16) / 116, a = n / 500 + i, s = i - t / 200, c = {
    mode: "xyz65",
    x: Bt(a) * ke.X,
    y: Bt(i) * ke.Y,
    z: Bt(s) * ke.Z
  };
  return r !== void 0 && (c.alpha = r), c;
}, $t = (e) => xe(Br(e)), Vt = (e) => e > Yr ? Math.cbrt(e) : (Zr * e + 16) / 116, Vr = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Vt(e / ke.X), a = Vt(n / ke.Y), s = Vt(t / ke.Z), c = {
    mode: "lab65",
    l: 116 * a - 16,
    a: 500 * (i - a),
    b: 200 * (a - s)
  };
  return r !== void 0 && (c.alpha = r), c;
}, zt = (e) => {
  let n = Vr(ve(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, ft = 1, Gr = 1, Ve = 26 / 180 * Math.PI, bt = Math.cos(Ve), gt = Math.sin(Ve), Wr = 100 / Math.log(139 / 100), xn = ({ l: e, c: n, h: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "lab65",
    l: (Math.exp(e * ft / Wr) - 1) / 39e-4
  }, a = (Math.exp(0.0435 * n * Gr * ft) - 1) / 0.075, s = a * Math.cos(t / 180 * Math.PI - Ve), c = a * Math.sin(t / 180 * Math.PI - Ve);
  return i.a = s * bt - c / 0.83 * gt, i.b = s * gt + c / 0.83 * bt, r !== void 0 && (i.alpha = r), i;
}, yn = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = n * bt + t * gt, a = 0.83 * (t * bt - n * gt), s = Math.sqrt(i * i + a * a), c = {
    mode: "dlch",
    l: Wr / ft * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * s) / (0.0435 * Gr * ft)
  };
  return c.c && (c.h = H((Math.atan2(a, i) + Ve) / Math.PI * 180)), r !== void 0 && (c.alpha = r), c;
}, cr = (e) => xn(pe(e, "dlch")), dr = (e) => he(yn(e), "dlab"), Sa = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: cr,
    rgb: (e) => $t(cr(e))
  },
  fromMode: {
    lab65: dr,
    rgb: (e) => dr(zt(e))
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-40.09, 45.501],
    b: [-40.469, 44.344]
  },
  interpolate: {
    l: u,
    a: u,
    b: u,
    alpha: {
      use: u,
      fixup: T
    }
  }
}, Ca = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: xn,
    dlab: (e) => he(e, "dlab"),
    rgb: (e) => $t(xn(e))
  },
  fromMode: {
    lab65: yn,
    dlab: (e) => pe(e, "dlch"),
    rgb: (e) => yn(zt(e))
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 51.484],
    h: [0, 360]
  },
  interpolate: {
    l: u,
    c: u,
    h: {
      use: u,
      fixup: re
    },
    alpha: {
      use: u,
      fixup: T
    }
  },
  difference: {
    h: kt
  },
  average: {
    h: ie
  }
};
function Ta({ h: e, s: n, i: t, alpha: r }) {
  e = H(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.abs(e / 60 % 2 - 1), a;
  switch (Math.floor(e / 60)) {
    case 0:
      a = {
        r: t * (1 + n * (3 / (2 - i) - 1)),
        g: t * (1 + n * (3 * (1 - i) / (2 - i) - 1)),
        b: t * (1 - n)
      };
      break;
    case 1:
      a = {
        r: t * (1 + n * (3 * (1 - i) / (2 - i) - 1)),
        g: t * (1 + n * (3 / (2 - i) - 1)),
        b: t * (1 - n)
      };
      break;
    case 2:
      a = {
        r: t * (1 - n),
        g: t * (1 + n * (3 / (2 - i) - 1)),
        b: t * (1 + n * (3 * (1 - i) / (2 - i) - 1))
      };
      break;
    case 3:
      a = {
        r: t * (1 - n),
        g: t * (1 + n * (3 * (1 - i) / (2 - i) - 1)),
        b: t * (1 + n * (3 / (2 - i) - 1))
      };
      break;
    case 4:
      a = {
        r: t * (1 + n * (3 * (1 - i) / (2 - i) - 1)),
        g: t * (1 - n),
        b: t * (1 + n * (3 / (2 - i) - 1))
      };
      break;
    case 5:
      a = {
        r: t * (1 + n * (3 / (2 - i) - 1)),
        g: t * (1 - n),
        b: t * (1 + n * (3 * (1 - i) / (2 - i) - 1))
      };
      break;
    default:
      a = { r: t * (1 - n), g: t * (1 - n), b: t * (1 - n) };
  }
  return a.mode = "rgb", r !== void 0 && (a.alpha = r), a;
}
function Pa({ r: e, g: n, b: t, alpha: r }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.max(e, n, t), a = Math.min(e, n, t), s = {
    mode: "hsi",
    s: e + n + t === 0 ? 0 : 1 - 3 * a / (e + n + t),
    i: (e + n + t) / 3
  };
  return i - a !== 0 && (s.h = (i === e ? (n - t) / (i - a) + (n < t) * 6 : i === n ? (t - e) / (i - a) + 2 : (e - n) / (i - a) + 4) * 60), r !== void 0 && (s.alpha = r), s;
}
const Ea = {
  mode: "hsi",
  toMode: {
    rgb: Ta
  },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: {
    rgb: Pa
  },
  channels: ["h", "s", "i", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: u, fixup: re },
    s: u,
    i: u,
    alpha: { use: u, fixup: T }
  },
  difference: {
    h: wt
  },
  average: {
    h: ie
  }
};
function Ha({ h: e, s: n, l: t, alpha: r }) {
  e = H(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = t + n * (t < 0.5 ? t : 1 - t), a = i - (i - t) * 2 * Math.abs(e / 60 % 2 - 1), s;
  switch (Math.floor(e / 60)) {
    case 0:
      s = { r: i, g: a, b: 2 * t - i };
      break;
    case 1:
      s = { r: a, g: i, b: 2 * t - i };
      break;
    case 2:
      s = { r: 2 * t - i, g: i, b: a };
      break;
    case 3:
      s = { r: 2 * t - i, g: a, b: i };
      break;
    case 4:
      s = { r: a, g: 2 * t - i, b: i };
      break;
    case 5:
      s = { r: i, g: 2 * t - i, b: a };
      break;
    default:
      s = { r: 2 * t - i, g: 2 * t - i, b: 2 * t - i };
  }
  return s.mode = "rgb", r !== void 0 && (s.alpha = r), s;
}
function Na({ r: e, g: n, b: t, alpha: r }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.max(e, n, t), a = Math.min(e, n, t), s = {
    mode: "hsl",
    s: i === a ? 0 : (i - a) / (1 - Math.abs(i + a - 1)),
    l: 0.5 * (i + a)
  };
  return i - a !== 0 && (s.h = (i === e ? (n - t) / (i - a) + (n < t) * 6 : i === n ? (t - e) / (i - a) + 2 : (e - n) / (i - a) + 4) * 60), r !== void 0 && (s.alpha = r), s;
}
const Ia = (e, n) => {
  switch (n) {
    case "deg":
      return +e;
    case "rad":
      return e / Math.PI * 180;
    case "grad":
      return e / 10 * 9;
    case "turn":
      return e * 360;
  }
}, qa = new RegExp(
  `^hsla?\\(\\s*${ia}${Le}${Be}${Le}${Be}\\s*(?:,\\s*${Dn}\\s*)?\\)$`
), Ra = (e) => {
  let n = e.match(qa);
  if (!n) return;
  let t = { mode: "hsl" };
  return n[3] !== void 0 ? t.h = +n[3] : n[1] !== void 0 && n[2] !== void 0 && (t.h = Ia(n[1], n[2])), n[4] !== void 0 && (t.s = Math.min(Math.max(0, n[4] / 100), 1)), n[5] !== void 0 && (t.l = Math.min(Math.max(0, n[5] / 100), 1)), n[6] !== void 0 ? t.alpha = Math.max(0, Math.min(1, n[6] / 100)) : n[7] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[7]))), t;
};
function Fa(e, n) {
  if (!n || n[0] !== "hsl" && n[0] !== "hsla")
    return;
  const t = { mode: "hsl" }, [, r, i, a, s] = n;
  if (r.type !== h.None) {
    if (r.type === h.Percentage)
      return;
    t.h = r.value;
  }
  if (i.type !== h.None) {
    if (i.type === h.Hue)
      return;
    t.s = i.value / 100;
  }
  if (a.type !== h.None) {
    if (a.type === h.Hue)
      return;
    t.l = a.value / 100;
  }
  return s.type !== h.None && (t.alpha = Math.min(
    1,
    Math.max(
      0,
      s.type === h.Number ? s.value : s.value / 100
    )
  )), t;
}
const Jr = {
  mode: "hsl",
  toMode: {
    rgb: Ha
  },
  fromMode: {
    rgb: Na
  },
  channels: ["h", "s", "l", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Fa, Ra],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: u, fixup: re },
    s: u,
    l: u,
    alpha: { use: u, fixup: T }
  },
  difference: {
    h: wt
  },
  average: {
    h: ie
  }
};
function Ur({ h: e, s: n, v: t, alpha: r }) {
  e = H(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.abs(e / 60 % 2 - 1), a;
  switch (Math.floor(e / 60)) {
    case 0:
      a = { r: t, g: t * (1 - n * i), b: t * (1 - n) };
      break;
    case 1:
      a = { r: t * (1 - n * i), g: t, b: t * (1 - n) };
      break;
    case 2:
      a = { r: t * (1 - n), g: t, b: t * (1 - n * i) };
      break;
    case 3:
      a = { r: t * (1 - n), g: t * (1 - n * i), b: t };
      break;
    case 4:
      a = { r: t * (1 - n * i), g: t * (1 - n), b: t };
      break;
    case 5:
      a = { r: t, g: t * (1 - n), b: t * (1 - n * i) };
      break;
    default:
      a = { r: t * (1 - n), g: t * (1 - n), b: t * (1 - n) };
  }
  return a.mode = "rgb", r !== void 0 && (a.alpha = r), a;
}
function Kr({ r: e, g: n, b: t, alpha: r }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.max(e, n, t), a = Math.min(e, n, t), s = {
    mode: "hsv",
    s: i === 0 ? 0 : 1 - a / i,
    v: i
  };
  return i - a !== 0 && (s.h = (i === e ? (n - t) / (i - a) + (n < t) * 6 : i === n ? (t - e) / (i - a) + 2 : (e - n) / (i - a) + 4) * 60), r !== void 0 && (s.alpha = r), s;
}
const Qr = {
  mode: "hsv",
  toMode: {
    rgb: Ur
  },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: {
    rgb: Kr
  },
  channels: ["h", "s", "v", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: u, fixup: re },
    s: u,
    v: u,
    alpha: { use: u, fixup: T }
  },
  difference: {
    h: wt
  },
  average: {
    h: ie
  }
};
function Xa({ h: e, w: n, b: t, alpha: r }) {
  if (n === void 0 && (n = 0), t === void 0 && (t = 0), n + t > 1) {
    let i = n + t;
    n /= i, t /= i;
  }
  return Ur({
    h: e,
    s: t === 1 ? 1 : 1 - n / (1 - t),
    v: 1 - t,
    alpha: r
  });
}
function Da(e) {
  let n = Kr(e);
  if (n === void 0) return;
  let t = n.s !== void 0 ? n.s : 0, r = n.v !== void 0 ? n.v : 0, i = {
    mode: "hwb",
    w: (1 - t) * r,
    b: 1 - r
  };
  return n.h !== void 0 && (i.h = n.h), n.alpha !== void 0 && (i.alpha = n.alpha), i;
}
function Oa(e, n) {
  if (!n || n[0] !== "hwb")
    return;
  const t = { mode: "hwb" }, [, r, i, a, s] = n;
  if (r.type !== h.None) {
    if (r.type === h.Percentage)
      return;
    t.h = r.value;
  }
  if (i.type !== h.None) {
    if (i.type === h.Hue)
      return;
    t.w = i.value / 100;
  }
  if (a.type !== h.None) {
    if (a.type === h.Hue)
      return;
    t.b = a.value / 100;
  }
  return s.type !== h.None && (t.alpha = Math.min(
    1,
    Math.max(
      0,
      s.type === h.Number ? s.value : s.value / 100
    )
  )), t;
}
const ja = {
  mode: "hwb",
  toMode: {
    rgb: Xa
  },
  fromMode: {
    rgb: Da
  },
  channels: ["h", "w", "b", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Oa],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: u, fixup: re },
    w: u,
    b: u,
    alpha: { use: u, fixup: T }
  },
  difference: {
    h: _a
  },
  average: {
    h: ie
  }
}, ei = 203, At = 0.1593017578125, ti = 78.84375, _t = 0.8359375, Lt = 18.8515625, St = 18.6875;
function Gt(e) {
  if (e < 0) return 0;
  const n = Math.pow(e, 1 / ti);
  return 1e4 * Math.pow(Math.max(0, n - _t) / (Lt - St * n), 1 / At);
}
function Wt(e) {
  if (e < 0) return 0;
  const n = Math.pow(e / 1e4, At);
  return Math.pow((_t + Lt * n) / (1 + St * n), ti);
}
const Jt = (e) => Math.max(e / ei, 0), pr = ({ i: e, t: n, p: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = Gt(
    e + 0.008609037037932761 * n + 0.11102962500302593 * t
  ), a = Gt(
    e - 0.00860903703793275 * n - 0.11102962500302599 * t
  ), s = Gt(
    e + 0.5600313357106791 * n - 0.32062717498731885 * t
  ), c = {
    mode: "xyz65",
    x: Jt(
      2.070152218389422 * i - 1.3263473389671556 * a + 0.2066510476294051 * s
    ),
    y: Jt(
      0.3647385209748074 * i + 0.680566024947227 * a - 0.0453045459220346 * s
    ),
    z: Jt(
      -0.049747207535812 * i - 0.0492609666966138 * a + 1.1880659249923042 * s
    )
  };
  return r !== void 0 && (c.alpha = r), c;
}, Ut = (e = 0) => Math.max(e * ei, 0), hr = ({ x: e, y: n, z: t, alpha: r }) => {
  const i = Ut(e), a = Ut(n), s = Ut(t), c = Wt(
    0.3592832590121217 * i + 0.6976051147779502 * a - 0.0358915932320289 * s
  ), p = Wt(
    -0.1920808463704995 * i + 1.1004767970374323 * a + 0.0753748658519118 * s
  ), b = Wt(
    0.0070797844607477 * i + 0.0748396662186366 * a + 0.8433265453898765 * s
  ), f = 0.5 * c + 0.5 * p, x = 1.61376953125 * c - 3.323486328125 * p + 1.709716796875 * b, g = 4.378173828125 * c - 4.24560546875 * p - 0.132568359375 * b, M = { mode: "itp", i: f, t: x, p: g };
  return r !== void 0 && (M.alpha = r), M;
}, Za = {
  mode: "itp",
  channels: ["i", "t", "p", "alpha"],
  parse: ["--ictcp"],
  serialize: "--ictcp",
  toMode: {
    xyz65: pr,
    rgb: (e) => xe(pr(e))
  },
  fromMode: {
    xyz65: hr,
    rgb: (e) => hr(ve(e))
  },
  ranges: {
    i: [0, 0.581],
    t: [-0.369, 0.272],
    p: [-0.164, 0.331]
  },
  interpolate: {
    i: u,
    t: u,
    p: u,
    alpha: { use: u, fixup: T }
  }
}, Ya = 134.03437499999998, Ba = 16295499532821565e-27, Kt = (e) => {
  if (e < 0) return 0;
  let n = Math.pow(e / 1e4, At);
  return Math.pow((_t + Lt * n) / (1 + St * n), Ya);
}, Qt = (e = 0) => Math.max(e * 203, 0), ni = ({ x: e, y: n, z: t, alpha: r }) => {
  e = Qt(e), n = Qt(n), t = Qt(t);
  let i = 1.15 * e - 0.15 * t, a = 0.66 * n + 0.34 * e, s = Kt(0.41478972 * i + 0.579999 * a + 0.014648 * t), c = Kt(-0.20151 * i + 1.120649 * a + 0.0531008 * t), p = Kt(-0.0166008 * i + 0.2648 * a + 0.6684799 * t), b = (s + c) / 2, f = {
    mode: "jab",
    j: 0.44 * b / (1 - 0.56 * b) - Ba,
    a: 3.524 * s - 4.066708 * c + 0.542708 * p,
    b: 0.199076 * s + 1.096799 * c - 1.295875 * p
  };
  return r !== void 0 && (f.alpha = r), f;
}, Va = 134.03437499999998, ur = 16295499532821565e-27, en = (e) => {
  if (e < 0) return 0;
  let n = Math.pow(e, 1 / Va);
  return 1e4 * Math.pow((_t - n) / (St * n - Lt), 1 / At);
}, tn = (e) => e / 203, ri = ({ j: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (e + ur) / (0.44 + 0.56 * (e + ur)), a = en(i + 0.13860504 * n + 0.058047316 * t), s = en(i - 0.13860504 * n - 0.058047316 * t), c = en(i - 0.096019242 * n - 0.8118919 * t), p = {
    mode: "xyz65",
    x: tn(
      1.661373024652174 * a - 0.914523081304348 * s + 0.23136208173913045 * c
    ),
    y: tn(
      -0.3250758611844533 * a + 1.571847026732543 * s - 0.21825383453227928 * c
    ),
    z: tn(-0.090982811 * a - 0.31272829 * s + 1.5227666 * c)
  };
  return r !== void 0 && (p.alpha = r), p;
}, ii = (e) => {
  let n = ni(ve(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, ai = (e) => xe(ri(e)), Ga = {
  mode: "jab",
  channels: ["j", "a", "b", "alpha"],
  parse: ["--jzazbz"],
  serialize: "--jzazbz",
  fromMode: {
    rgb: ii,
    xyz65: ni
  },
  toMode: {
    rgb: ai,
    xyz65: ri
  },
  ranges: {
    j: [0, 0.222],
    a: [-0.109, 0.129],
    b: [-0.185, 0.134]
  },
  interpolate: {
    j: u,
    a: u,
    b: u,
    alpha: { use: u, fixup: T }
  }
}, fr = ({ j: e, a: n, b: t, alpha: r }) => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.sqrt(n * n + t * t), a = {
    mode: "jch",
    j: e,
    c: i
  };
  return i && (a.h = H(Math.atan2(t, n) * 180 / Math.PI)), r !== void 0 && (a.alpha = r), a;
}, br = ({ j: e, c: n, h: t, alpha: r }) => {
  t === void 0 && (t = 0);
  let i = {
    mode: "jab",
    j: e,
    a: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    b: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return r !== void 0 && (i.alpha = r), i;
}, Wa = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: br,
    rgb: (e) => ai(br(e))
  },
  fromMode: {
    rgb: (e) => fr(ii(e)),
    jab: fr
  },
  channels: ["j", "c", "h", "alpha"],
  ranges: {
    j: [0, 0.221],
    c: [0, 0.19],
    h: [0, 360]
  },
  interpolate: {
    h: { use: u, fixup: re },
    c: u,
    j: u,
    alpha: { use: u, fixup: T }
  },
  difference: {
    h: kt
  },
  average: {
    h: ie
  }
}, Ct = Math.pow(29, 3) / Math.pow(3, 3), On = Math.pow(6, 3) / Math.pow(29, 3);
let nn = (e) => Math.pow(e, 3) > On ? Math.pow(e, 3) : (116 * e - 16) / Ct;
const jn = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (e + 16) / 116, a = n / 500 + i, s = i - t / 200, c = {
    mode: "xyz50",
    x: nn(a) * S.X,
    y: nn(i) * S.Y,
    z: nn(s) * S.Z
  };
  return r !== void 0 && (c.alpha = r), c;
}, Ke = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Te({
    r: e * 3.1341359569958707 - n * 1.6173863321612538 - 0.4906619460083532 * t,
    g: e * -0.978795502912089 + n * 1.916254567259524 + 0.03344273116131949 * t,
    b: e * 0.07195537988411677 - n * 0.2289768264158322 + 1.405386058324125 * t
  });
  return r !== void 0 && (i.alpha = r), i;
}, si = (e) => Ke(jn(e)), Qe = (e) => {
  let { r: n, g: t, b: r, alpha: i } = Ce(e), a = {
    mode: "xyz50",
    x: 0.436065742824811 * n + 0.3851514688337912 * t + 0.14307845442264197 * r,
    y: 0.22249319175623702 * n + 0.7168870538238823 * t + 0.06061979053616537 * r,
    z: 0.013923904500943465 * n + 0.09708128566574634 * t + 0.7140993584005155 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, rn = (e) => e > On ? Math.cbrt(e) : (Ct * e + 16) / 116, Zn = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = rn(e / S.X), a = rn(n / S.Y), s = rn(t / S.Z), c = {
    mode: "lab",
    l: 116 * a - 16,
    a: 500 * (i - a),
    b: 200 * (a - s)
  };
  return r !== void 0 && (c.alpha = r), c;
}, oi = (e) => {
  let n = Zn(Qe(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
};
function Ja(e, n) {
  if (!n || n[0] !== "lab")
    return;
  const t = { mode: "lab" }, [, r, i, a, s] = n;
  if (!(r.type === h.Hue || i.type === h.Hue || a.type === h.Hue))
    return r.type !== h.None && (t.l = Math.min(Math.max(0, r.value), 100)), i.type !== h.None && (t.a = i.type === h.Number ? i.value : i.value * 125 / 100), a.type !== h.None && (t.b = a.type === h.Number ? a.value : a.value * 125 / 100), s.type !== h.None && (t.alpha = Math.min(
      1,
      Math.max(
        0,
        s.type === h.Number ? s.value : s.value / 100
      )
    )), t;
}
const Yn = {
  mode: "lab",
  toMode: {
    xyz50: jn,
    rgb: si
  },
  fromMode: {
    xyz50: Zn,
    rgb: oi
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  },
  parse: [Ja],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: u,
    a: u,
    b: u,
    alpha: { use: u, fixup: T }
  }
}, Ua = {
  ...Yn,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: Br,
    rgb: $t
  },
  fromMode: {
    xyz65: Vr,
    rgb: zt
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function Ka(e, n) {
  if (!n || n[0] !== "lch")
    return;
  const t = { mode: "lch" }, [, r, i, a, s] = n;
  if (r.type !== h.None) {
    if (r.type === h.Hue)
      return;
    t.l = Math.min(Math.max(0, r.value), 100);
  }
  if (i.type !== h.None && (t.c = Math.max(
    0,
    i.type === h.Number ? i.value : i.value * 150 / 100
  )), a.type !== h.None) {
    if (a.type === h.Percentage)
      return;
    t.h = a.value;
  }
  return s.type !== h.None && (t.alpha = Math.min(
    1,
    Math.max(
      0,
      s.type === h.Number ? s.value : s.value / 100
    )
  )), t;
}
const Bn = {
  mode: "lch",
  toMode: {
    lab: he,
    rgb: (e) => si(he(e))
  },
  fromMode: {
    rgb: (e) => pe(oi(e)),
    lab: pe
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  },
  parse: [Ka],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: u, fixup: re },
    c: u,
    l: u,
    alpha: { use: u, fixup: T }
  },
  difference: {
    h: kt
  },
  average: {
    h: ie
  }
}, Qa = {
  ...Bn,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => he(e, "lab65"),
    rgb: (e) => $t(he(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => pe(zt(e), "lch65"),
    lab65: (e) => pe(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, li = ({ l: e, u: n, v: t, alpha: r }) => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.sqrt(n * n + t * t), a = {
    mode: "lchuv",
    l: e,
    c: i
  };
  return i && (a.h = H(Math.atan2(t, n) * 180 / Math.PI)), r !== void 0 && (a.alpha = r), a;
}, ci = ({ l: e, c: n, h: t, alpha: r }) => {
  t === void 0 && (t = 0);
  let i = {
    mode: "luv",
    l: e,
    u: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    v: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return r !== void 0 && (i.alpha = r), i;
}, di = (e, n, t) => 4 * e / (e + 15 * n + 3 * t), pi = (e, n, t) => 9 * n / (e + 15 * n + 3 * t), es = di(S.X, S.Y, S.Z), ts = pi(S.X, S.Y, S.Z), ns = (e) => e <= On ? Ct * e : 116 * Math.cbrt(e) - 16, Mn = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = ns(n / S.Y), a = di(e, n, t), s = pi(e, n, t);
  !isFinite(a) || !isFinite(s) ? i = a = s = 0 : (a = 13 * i * (a - es), s = 13 * i * (s - ts));
  let c = {
    mode: "luv",
    l: i,
    u: a,
    v: s
  };
  return r !== void 0 && (c.alpha = r), c;
}, rs = (e, n, t) => 4 * e / (e + 15 * n + 3 * t), is = (e, n, t) => 9 * n / (e + 15 * n + 3 * t), as = rs(S.X, S.Y, S.Z), ss = is(S.X, S.Y, S.Z), wn = ({ l: e, u: n, v: t, alpha: r }) => {
  if (e === void 0 && (e = 0), e === 0)
    return { mode: "xyz50", x: 0, y: 0, z: 0 };
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = n / (13 * e) + as, a = t / (13 * e) + ss, s = S.Y * (e <= 8 ? e / Ct : Math.pow((e + 16) / 116, 3)), c = s * (9 * i) / (4 * a), p = s * (12 - 3 * i - 20 * a) / (4 * a), b = { mode: "xyz50", x: c, y: s, z: p };
  return r !== void 0 && (b.alpha = r), b;
}, os = (e) => li(Mn(Qe(e))), ls = (e) => Ke(wn(ci(e))), cs = {
  mode: "lchuv",
  toMode: {
    luv: ci,
    rgb: ls
  },
  fromMode: {
    rgb: os,
    luv: li
  },
  channels: ["l", "c", "h", "alpha"],
  parse: ["--lchuv"],
  serialize: "--lchuv",
  ranges: {
    l: [0, 100],
    c: [0, 176.956],
    h: [0, 360]
  },
  interpolate: {
    h: { use: u, fixup: re },
    c: u,
    l: u,
    alpha: { use: u, fixup: T }
  },
  difference: {
    h: kt
  },
  average: {
    h: ie
  }
}, ds = {
  ...Se,
  mode: "lrgb",
  toMode: {
    rgb: Te
  },
  fromMode: {
    rgb: Ce
  },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, ps = {
  mode: "luv",
  toMode: {
    xyz50: wn,
    rgb: (e) => Ke(wn(e))
  },
  fromMode: {
    xyz50: Mn,
    rgb: (e) => Mn(Qe(e))
  },
  channels: ["l", "u", "v", "alpha"],
  parse: ["--luv"],
  serialize: "--luv",
  ranges: {
    l: [0, 100],
    u: [-84.936, 175.042],
    v: [-125.882, 87.243]
  },
  interpolate: {
    l: u,
    u,
    v: u,
    alpha: { use: u, fixup: T }
  }
}, hi = ({ r: e, g: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.cbrt(
    0.412221469470763 * e + 0.5363325372617348 * n + 0.0514459932675022 * t
  ), a = Math.cbrt(
    0.2119034958178252 * e + 0.6806995506452344 * n + 0.1073969535369406 * t
  ), s = Math.cbrt(
    0.0883024591900564 * e + 0.2817188391361215 * n + 0.6299787016738222 * t
  ), c = {
    mode: "oklab",
    l: 0.210454268309314 * i + 0.7936177747023054 * a - 0.0040720430116193 * s,
    a: 1.9779985324311684 * i - 2.42859224204858 * a + 0.450593709617411 * s,
    b: 0.0259040424655478 * i + 0.7827717124575296 * a - 0.8086757549230774 * s
  };
  return r !== void 0 && (c.alpha = r), c;
}, Tt = (e) => {
  let n = hi(Ce(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, et = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.pow(e + 0.3963377773761749 * n + 0.2158037573099136 * t, 3), a = Math.pow(e - 0.1055613458156586 * n - 0.0638541728258133 * t, 3), s = Math.pow(e - 0.0894841775298119 * n - 1.2914855480194092 * t, 3), c = {
    mode: "lrgb",
    r: 4.076741636075957 * i - 3.3077115392580616 * a + 0.2309699031821044 * s,
    g: -1.2684379732850317 * i + 2.6097573492876887 * a - 0.3413193760026573 * s,
    b: -0.0041960761386756 * i - 0.7034186179359362 * a + 1.7076146940746117 * s
  };
  return r !== void 0 && (c.alpha = r), c;
}, Pt = (e) => Te(et(e));
function kn(e) {
  const r = 1.170873786407767;
  return 0.5 * (r * e - 0.206 + Math.sqrt((r * e - 0.206) * (r * e - 0.206) + 4 * 0.03 * r * e));
}
function mt(e) {
  return (e * e + 0.206 * e) / (1.170873786407767 * (e + 0.03));
}
function hs(e, n) {
  let t, r, i, a, s, c, p, b;
  -1.88170328 * e - 0.80936493 * n > 1 ? (t = 1.19086277, r = 1.76576728, i = 0.59662641, a = 0.75515197, s = 0.56771245, c = 4.0767416621, p = -3.3077115913, b = 0.2309699292) : 1.81444104 * e - 1.19445276 * n > 1 ? (t = 0.73956515, r = -0.45954404, i = 0.08285427, a = 0.1254107, s = 0.14503204, c = -1.2684380046, p = 2.6097574011, b = -0.3413193965) : (t = 1.35733652, r = -915799e-8, i = -1.1513021, a = -0.50559606, s = 692167e-8, c = -0.0041960863, p = -0.7034186147, b = 1.707614701);
  let f = t + r * e + i * n + a * e * e + s * e * n, x = 0.3963377774 * e + 0.2158037573 * n, g = -0.1055613458 * e - 0.0638541728 * n, M = -0.0894841775 * e - 1.291485548 * n;
  {
    let A = 1 + f * x, z = 1 + f * g, _ = 1 + f * M, C = A * A * A, L = z * z * z, ae = _ * _ * _, Ee = 3 * x * A * A, He = 3 * g * z * z, Ne = 3 * M * _ * _, Ie = 6 * x * x * A, qe = 6 * g * g * z, Re = 6 * M * M * _, ye = c * C + p * L + b * ae, ue = c * Ee + p * He + b * Ne, Fe = c * Ie + p * qe + b * Re;
    f = f - ye * ue / (ue * ue - 0.5 * ye * Fe);
  }
  return f;
}
function Vn(e, n) {
  let t = hs(e, n), r = et({ l: 1, a: t * e, b: t * n }), i = Math.cbrt(1 / Math.max(r.r, r.g, r.b)), a = i * t;
  return [i, a];
}
function us(e, n, t, r, i, a = null) {
  a || (a = Vn(e, n));
  let s;
  if ((t - i) * a[1] - (a[0] - i) * r <= 0)
    s = a[1] * i / (r * a[0] + a[1] * (i - t));
  else {
    s = a[1] * (i - 1) / (r * (a[0] - 1) + a[1] * (i - t));
    {
      let c = t - i, p = r, b = 0.3963377774 * e + 0.2158037573 * n, f = -0.1055613458 * e - 0.0638541728 * n, x = -0.0894841775 * e - 1.291485548 * n, g = c + p * b, M = c + p * f, A = c + p * x;
      {
        let z = i * (1 - s) + s * t, _ = s * r, C = z + _ * b, L = z + _ * f, ae = z + _ * x, Ee = C * C * C, He = L * L * L, Ne = ae * ae * ae, Ie = 3 * g * C * C, qe = 3 * M * L * L, Re = 3 * A * ae * ae, ye = 6 * g * g * C, ue = 6 * M * M * L, Fe = 6 * A * A * ae, Jn = 4.0767416621 * Ee - 3.3077115913 * He + 0.2309699292 * Ne - 1, Nt = 4.0767416621 * Ie - 3.3077115913 * qe + 0.2309699292 * Re, Wi = 4.0767416621 * ye - 3.3077115913 * ue + 0.2309699292 * Fe, Un = Nt / (Nt * Nt - 0.5 * Jn * Wi), It = -Jn * Un, Kn = -1.2684380046 * Ee + 2.6097574011 * He - 0.3413193965 * Ne - 1, qt = -1.2684380046 * Ie + 2.6097574011 * qe - 0.3413193965 * Re, Ji = -1.2684380046 * ye + 2.6097574011 * ue - 0.3413193965 * Fe, Qn = qt / (qt * qt - 0.5 * Kn * Ji), Rt = -Kn * Qn, er = -0.0041960863 * Ee - 0.7034186147 * He + 1.707614701 * Ne - 1, Ft = -0.0041960863 * Ie - 0.7034186147 * qe + 1.707614701 * Re, Ui = -0.0041960863 * ye - 0.7034186147 * ue + 1.707614701 * Fe, tr = Ft / (Ft * Ft - 0.5 * er * Ui), Xt = -er * tr;
        It = Un >= 0 ? It : 1e6, Rt = Qn >= 0 ? Rt : 1e6, Xt = tr >= 0 ? Xt : 1e6, s += Math.min(It, Math.min(Rt, Xt));
      }
    }
  }
  return s;
}
function Gn(e, n, t = null) {
  t || (t = Vn(e, n));
  let r = t[0], i = t[1];
  return [i / r, i / (1 - r)];
}
function ui(e, n, t) {
  let r = Vn(n, t), i = us(n, t, e, 1, e, r), a = Gn(n, t, r), s = 0.11516993 + 1 / (7.4477897 + 4.1590124 * t + n * (-2.19557347 + 1.75198401 * t + n * (-2.13704948 - 10.02301043 * t + n * (-4.24894561 + 5.38770819 * t + 4.69891013 * n)))), c = 0.11239642 + 1 / (1.6132032 - 0.68124379 * t + n * (0.40370612 + 0.90148123 * t + n * (-0.27087943 + 0.6122399 * t + n * (299215e-8 - 0.45399568 * t - 0.14661872 * n)))), p = i / Math.min(e * a[0], (1 - e) * a[1]), b = e * s, f = (1 - e) * c, x = 0.9 * p * Math.sqrt(
    Math.sqrt(
      1 / (1 / (b * b * b * b) + 1 / (f * f * f * f))
    )
  );
  return b = e * 0.4, f = (1 - e) * 0.8, [Math.sqrt(1 / (1 / (b * b) + 1 / (f * f))), x, i];
}
function gr(e) {
  const n = e.l !== void 0 ? e.l : 0, t = e.a !== void 0 ? e.a : 0, r = e.b !== void 0 ? e.b : 0, i = { mode: "okhsl", l: kn(n) };
  e.alpha !== void 0 && (i.alpha = e.alpha);
  let a = Math.sqrt(t * t + r * r);
  if (!a)
    return i.s = 0, i;
  let [s, c, p] = ui(n, t / a, r / a), b;
  if (a < c) {
    let f = 0, x = 0.8 * s, g = 1 - x / c;
    b = (a - f) / (x + g * (a - f)) * 0.8;
  } else {
    let f = c, x = 0.2 * c * c * 1.25 * 1.25 / s, g = 1 - x / (p - c);
    b = 0.8 + 0.2 * ((a - f) / (x + g * (a - f)));
  }
  return b && (i.s = b, i.h = H(Math.atan2(r, t) * 180 / Math.PI)), i;
}
function mr(e) {
  let n = e.h !== void 0 ? e.h : 0, t = e.s !== void 0 ? e.s : 0, r = e.l !== void 0 ? e.l : 0;
  const i = { mode: "oklab", l: mt(r) };
  if (e.alpha !== void 0 && (i.alpha = e.alpha), !t || r === 1)
    return i.a = i.b = 0, i;
  let a = Math.cos(n / 180 * Math.PI), s = Math.sin(n / 180 * Math.PI), [c, p, b] = ui(i.l, a, s), f, x, g, M;
  t < 0.8 ? (f = 1.25 * t, x = 0, g = 0.8 * c, M = 1 - g / p) : (f = 5 * (t - 0.8), x = p, g = 0.2 * p * p * 1.25 * 1.25 / c, M = 1 - g / (b - p));
  let A = x + f * g / (1 - M * f);
  return i.a = A * a, i.b = A * s, i;
}
const fs = {
  ...Jr,
  mode: "okhsl",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--okhsl"],
  serialize: "--okhsl",
  fromMode: {
    oklab: gr,
    rgb: (e) => gr(Tt(e))
  },
  toMode: {
    oklab: mr,
    rgb: (e) => Pt(mr(e))
  }
};
function vr(e) {
  let n = e.l !== void 0 ? e.l : 0, t = e.a !== void 0 ? e.a : 0, r = e.b !== void 0 ? e.b : 0, i = Math.sqrt(t * t + r * r), a = i ? t / i : 1, s = i ? r / i : 1, [c, p] = Gn(a, s), b = 0.5, f = 1 - b / c, x = p / (i + n * p), g = x * n, M = x * i, A = mt(g), z = M * A / g, _ = et({ l: A, a: a * z, b: s * z }), C = Math.cbrt(
    1 / Math.max(_.r, _.g, _.b, 0)
  );
  n = n / C, i = i / C * kn(n) / n, n = kn(n);
  const L = {
    mode: "okhsv",
    s: i ? (b + p) * M / (p * b + p * f * M) : 0,
    v: n ? n / g : 0
  };
  return L.s && (L.h = H(Math.atan2(r, t) * 180 / Math.PI)), e.alpha !== void 0 && (L.alpha = e.alpha), L;
}
function xr(e) {
  const n = { mode: "oklab" };
  e.alpha !== void 0 && (n.alpha = e.alpha);
  const t = e.h !== void 0 ? e.h : 0, r = e.s !== void 0 ? e.s : 0, i = e.v !== void 0 ? e.v : 0, a = Math.cos(t / 180 * Math.PI), s = Math.sin(t / 180 * Math.PI), [c, p] = Gn(a, s), b = 0.5, f = 1 - b / c, x = 1 - r * b / (b + p - p * f * r), g = r * p * b / (b + p - p * f * r), M = mt(x), A = g * M / x, z = et({
    l: M,
    a: a * A,
    b: s * A
  }), _ = Math.cbrt(
    1 / Math.max(z.r, z.g, z.b, 0)
  ), C = mt(i * x), L = g * C / x;
  return n.l = C * _, n.a = L * a * _, n.b = L * s * _, n;
}
const bs = {
  ...Qr,
  mode: "okhsv",
  channels: ["h", "s", "v", "alpha"],
  parse: ["--okhsv"],
  serialize: "--okhsv",
  fromMode: {
    oklab: vr,
    rgb: (e) => vr(Tt(e))
  },
  toMode: {
    oklab: xr,
    rgb: (e) => Pt(xr(e))
  }
};
function gs(e, n) {
  if (!n || n[0] !== "oklab")
    return;
  const t = { mode: "oklab" }, [, r, i, a, s] = n;
  if (!(r.type === h.Hue || i.type === h.Hue || a.type === h.Hue))
    return r.type !== h.None && (t.l = Math.min(
      Math.max(0, r.type === h.Number ? r.value : r.value / 100),
      1
    )), i.type !== h.None && (t.a = i.type === h.Number ? i.value : i.value * 0.4 / 100), a.type !== h.None && (t.b = a.type === h.Number ? a.value : a.value * 0.4 / 100), s.type !== h.None && (t.alpha = Math.min(
      1,
      Math.max(
        0,
        s.type === h.Number ? s.value : s.value / 100
      )
    )), t;
}
const ms = {
  ...Yn,
  mode: "oklab",
  toMode: {
    lrgb: et,
    rgb: Pt
  },
  fromMode: {
    lrgb: hi,
    rgb: Tt
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [gs],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function vs(e, n) {
  if (!n || n[0] !== "oklch")
    return;
  const t = { mode: "oklch" }, [, r, i, a, s] = n;
  if (r.type !== h.None) {
    if (r.type === h.Hue)
      return;
    t.l = Math.min(
      Math.max(0, r.type === h.Number ? r.value : r.value / 100),
      1
    );
  }
  if (i.type !== h.None && (t.c = Math.max(
    0,
    i.type === h.Number ? i.value : i.value * 0.4 / 100
  )), a.type !== h.None) {
    if (a.type === h.Percentage)
      return;
    t.h = a.value;
  }
  return s.type !== h.None && (t.alpha = Math.min(
    1,
    Math.max(
      0,
      s.type === h.Number ? s.value : s.value / 100
    )
  )), t;
}
const xs = {
  ...Bn,
  mode: "oklch",
  toMode: {
    oklab: (e) => he(e, "oklab"),
    rgb: (e) => Pt(he(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => pe(Tt(e), "oklch"),
    oklab: (e) => pe(e, "oklch")
  },
  parse: [vs],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, yr = (e) => {
  let { r: n, g: t, b: r, alpha: i } = Ce(e), a = {
    mode: "xyz65",
    x: 0.486570948648216 * n + 0.265667693169093 * t + 0.1982172852343625 * r,
    y: 0.2289745640697487 * n + 0.6917385218365062 * t + 0.079286914093745 * r,
    z: 0 * n + 0.0451133818589026 * t + 1.043944368900976 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, Mr = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Te(
    {
      r: e * 2.4934969119414263 - n * 0.9313836179191242 - 0.402710784450717 * t,
      g: e * -0.8294889695615749 + n * 1.7626640603183465 + 0.0236246858419436 * t,
      b: e * 0.0358458302437845 - n * 0.0761723892680418 + 0.9568845240076871 * t
    },
    "p3"
  );
  return r !== void 0 && (i.alpha = r), i;
}, ys = {
  ...Se,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => Mr(ve(e)),
    xyz65: Mr
  },
  toMode: {
    rgb: (e) => xe(yr(e)),
    xyz65: yr
  }
}, an = (e) => {
  let n = Math.abs(e);
  return n >= 1 / 512 ? Math.sign(e) * Math.pow(n, 1 / 1.8) : 16 * e;
}, wr = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "prophoto",
    r: an(
      e * 1.3457868816471585 - n * 0.2555720873797946 - 0.0511018649755453 * t
    ),
    g: an(
      e * -0.5446307051249019 + n * 1.5082477428451466 + 0.0205274474364214 * t
    ),
    b: an(e * 0 + n * 0 + 1.2119675456389452 * t)
  };
  return r !== void 0 && (i.alpha = r), i;
}, sn = (e = 0) => {
  let n = Math.abs(e);
  return n >= 16 / 512 ? Math.sign(e) * Math.pow(n, 1.8) : e / 16;
}, kr = (e) => {
  let n = sn(e.r), t = sn(e.g), r = sn(e.b), i = {
    mode: "xyz50",
    x: 0.7977666449006423 * n + 0.1351812974005331 * t + 0.0313477341283922 * r,
    y: 0.2880748288194013 * n + 0.7118352342418731 * t + 899369387256e-16 * r,
    z: 0 * n + 0 * t + 0.8251046025104602 * r
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Ms = {
  ...Se,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: wr,
    rgb: (e) => wr(Qe(e))
  },
  toMode: {
    xyz50: kr,
    rgb: (e) => Ke(kr(e))
  }
}, $r = 1.09929682680944, ws = 0.018053968510807, on = (e) => {
  const n = Math.abs(e);
  return n > ws ? (Math.sign(e) || 1) * ($r * Math.pow(n, 0.45) - ($r - 1)) : 4.5 * e;
}, zr = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "rec2020",
    r: on(
      e * 1.7166511879712683 - n * 0.3556707837763925 - 0.2533662813736599 * t
    ),
    g: on(
      e * -0.6666843518324893 + n * 1.6164812366349395 + 0.0157685458139111 * t
    ),
    b: on(
      e * 0.0176398574453108 - n * 0.0427706132578085 + 0.9421031212354739 * t
    )
  };
  return r !== void 0 && (i.alpha = r), i;
}, Ar = 1.09929682680944, ks = 0.018053968510807, ln = (e = 0) => {
  let n = Math.abs(e);
  return n < ks * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((n + Ar - 1) / Ar, 1 / 0.45);
}, _r = (e) => {
  let n = ln(e.r), t = ln(e.g), r = ln(e.b), i = {
    mode: "xyz65",
    x: 0.6369580483012911 * n + 0.1446169035862083 * t + 0.1688809751641721 * r,
    y: 0.262700212011267 * n + 0.6779980715188708 * t + 0.059301716469862 * r,
    z: 0 * n + 0.0280726930490874 * t + 1.0609850577107909 * r
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, $s = {
  ...Se,
  mode: "rec2020",
  fromMode: {
    xyz65: zr,
    rgb: (e) => zr(ve(e))
  },
  toMode: {
    xyz65: _r,
    rgb: (e) => xe(_r(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, be = 0.0037930732552754493, fi = Math.cbrt(be), cn = (e) => Math.cbrt(e) - fi, zs = (e) => {
  const { r: n, g: t, b: r, alpha: i } = Ce(e), a = cn(0.3 * n + 0.622 * t + 0.078 * r + be), s = cn(0.23 * n + 0.692 * t + 0.078 * r + be), c = cn(
    0.2434226892454782 * n + 0.2047674442449682 * t + 0.5518098665095535 * r + be
  ), p = {
    mode: "xyb",
    x: (a - s) / 2,
    y: (a + s) / 2,
    /* Apply default chroma from luma (subtract Y from B) */
    b: c - (a + s) / 2
  };
  return i !== void 0 && (p.alpha = i), p;
}, dn = (e) => Math.pow(e + fi, 3), As = ({ x: e, y: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = dn(e + n) - be, a = dn(n - e) - be, s = dn(t + n) - be, c = Te({
    r: 11.031566904639861 * i - 9.866943908131562 * a - 0.16462299650829934 * s,
    g: -3.2541473810744237 * i + 4.418770377582723 * a - 0.16462299650829934 * s,
    b: -3.6588512867136815 * i + 2.7129230459360922 * a + 1.9459282407775895 * s
  });
  return r !== void 0 && (c.alpha = r), c;
}, _s = {
  mode: "xyb",
  channels: ["x", "y", "b", "alpha"],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: {
    rgb: As
  },
  fromMode: {
    rgb: zs
  },
  ranges: {
    x: [-0.0154, 0.0281],
    y: [0, 0.8453],
    b: [-0.2778, 0.388]
  },
  interpolate: {
    x: u,
    y: u,
    b: u,
    alpha: { use: u, fixup: T }
  }
}, Ls = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: Ke,
    lab: Zn
  },
  fromMode: {
    rgb: Qe,
    lab: jn
  },
  channels: ["x", "y", "z", "alpha"],
  ranges: {
    x: [0, 0.964],
    y: [0, 0.999],
    z: [0, 0.825]
  },
  interpolate: {
    x: u,
    y: u,
    z: u,
    alpha: { use: u, fixup: T }
  }
}, Ss = (e) => {
  let { x: n, y: t, z: r, alpha: i } = e;
  n === void 0 && (n = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = {
    mode: "xyz50",
    x: 1.0479298208405488 * n + 0.0229467933410191 * t - 0.0501922295431356 * r,
    y: 0.0296278156881593 * n + 0.990434484573249 * t - 0.0170738250293851 * r,
    z: -0.0092430581525912 * n + 0.0150551448965779 * t + 0.7518742899580008 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, Cs = (e) => {
  let { x: n, y: t, z: r, alpha: i } = e;
  n === void 0 && (n = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = {
    mode: "xyz65",
    x: 0.9554734527042182 * n - 0.0230985368742614 * t + 0.0632593086610217 * r,
    y: -0.0283697069632081 * n + 1.0099954580058226 * t + 0.021041398966943 * r,
    z: 0.0123140016883199 * n - 0.0205076964334779 * t + 1.3303659366080753 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, Ts = {
  mode: "xyz65",
  toMode: {
    rgb: xe,
    xyz50: Ss
  },
  fromMode: {
    rgb: ve,
    xyz50: Cs
  },
  ranges: {
    x: [0, 0.95],
    y: [0, 1],
    z: [0, 1.088]
  },
  channels: ["x", "y", "z", "alpha"],
  parse: ["xyz", "xyz-d65"],
  serialize: "xyz-d65",
  interpolate: {
    x: u,
    y: u,
    z: u,
    alpha: { use: u, fixup: T }
  }
}, Ps = ({ r: e, g: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * n + 0.11448223 * t,
    i: 0.59597799 * e - 0.2741761 * n - 0.32180189 * t,
    q: 0.21147017 * e - 0.52261711 * n + 0.31114694 * t
  };
  return r !== void 0 && (i.alpha = r), i;
}, Es = ({ y: e, i: n, q: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = {
    mode: "rgb",
    r: e + 0.95608445 * n + 0.6208885 * t,
    g: e - 0.27137664 * n - 0.6486059 * t,
    b: e - 1.10561724 * n + 1.70250126 * t
  };
  return r !== void 0 && (i.alpha = r), i;
}, Hs = {
  mode: "yiq",
  toMode: {
    rgb: Es
  },
  fromMode: {
    rgb: Ps
  },
  channels: ["y", "i", "q", "alpha"],
  parse: ["--yiq"],
  serialize: "--yiq",
  ranges: {
    i: [-0.595, 0.595],
    q: [-0.522, 0.522]
  },
  interpolate: {
    y: u,
    i: u,
    q: u,
    alpha: { use: u, fixup: T }
  }
}, Ns = (e) => Math.max(0, Math.min(1, e || 0)), pn = (e) => Math.round(Ns(e) * 255), Is = X("rgb"), qs = (e) => {
  if (e === void 0)
    return;
  let n = pn(e.r), t = pn(e.g), r = pn(e.b);
  return "#" + (1 << 24 | n << 16 | t << 8 | r).toString(16).slice(1);
}, Rs = (e) => qs(Is(e)), bi = X("rgb"), gi = (e) => {
  const n = {
    mode: e.mode,
    r: Math.max(0, Math.min(e.r !== void 0 ? e.r : 0, 1)),
    g: Math.max(0, Math.min(e.g !== void 0 ? e.g : 0, 1)),
    b: Math.max(0, Math.min(e.b !== void 0 ? e.b : 0, 1))
  };
  return e.alpha !== void 0 && (n.alpha = e.alpha), n;
}, Fs = (e) => gi(bi(e)), mi = (e) => e !== void 0 && (e.r === void 0 || e.r >= 0 && e.r <= 1) && (e.g === void 0 || e.g >= 0 && e.g <= 1) && (e.b === void 0 || e.b >= 0 && e.b <= 1);
function Xs(e) {
  return mi(bi(e));
}
function vi(e = "rgb") {
  const { gamut: n } = Mt(e);
  if (!n)
    return (r) => !0;
  const t = X(typeof n == "string" ? n : e);
  return (r) => mi(t(r));
}
function Ds(e = "rgb") {
  const { gamut: n } = Mt(e);
  if (!n)
    return (a) => pt(a);
  const t = typeof n == "string" ? n : e, r = X(t), i = vi(t);
  return (a) => {
    const s = pt(a);
    if (!s)
      return;
    const c = r(s);
    if (i(c))
      return s;
    const p = gi(c);
    return s.mode === p.mode ? p : X(s.mode)(p);
  };
}
function Os(e, n = "lch", t = "rgb") {
  e = pt(e);
  let r = t === "rgb" ? Xs : vi(t), i = t === "rgb" ? Fs : Ds(t);
  if (e === void 0 || r(e)) return e;
  let a = X(e.mode);
  e = X(n)(e);
  let s = { ...e, c: 0 };
  if (!r(s))
    return a(i(s));
  let c = 0, p = e.c !== void 0 ? e.c : 0, b = Mt(n).ranges.c, f = (b[1] - b[0]) / Math.pow(2, 13), x = s.c;
  for (; p - c > f; )
    s.c = c + (p - c) * 0.5, r(s) ? (x = s.c, c = s.c) : p = s.c;
  return a(
    r(s) ? s : { ...s, c: x }
  );
}
k(Ma);
k(La);
k(Sa);
k(Ca);
k(Ea);
k(Jr);
k(Qr);
k(ja);
k(Za);
k(Ga);
k(Wa);
k(Yn);
k(Ua);
k(Bn);
k(Qa);
k(cs);
k(ds);
k(ps);
k(fs);
k(bs);
k(ms);
const Wn = k(xs);
k(ys);
k(Ms);
k($s);
k(Se);
k(_s);
k(Ls);
k(Ts);
k(Hs);
const js = X("rgb");
function Lr(e, n) {
  const t = e.getContext("2d", { willReadFrequently: !0 });
  if (!t) return;
  const { width: r, height: i } = e, a = t.createImageData(r, i), s = a.data;
  for (let c = 0; c < i; c++) {
    const p = 1 - c / (i - 1 || 1);
    for (let b = 0; b < r; b++) {
      const f = b / (r - 1 || 1), x = js({ mode: "hsv", h: n, s: f, v: p, alpha: 1 }), g = (c * r + b) * 4;
      if (!x) {
        s[g] = s[g + 1] = s[g + 2] = 0, s[g + 3] = 255;
        continue;
      }
      s[g] = Math.round(hn((x.r ?? 0) * 255)), s[g + 1] = Math.round(hn((x.g ?? 0) * 255)), s[g + 2] = Math.round(hn((x.b ?? 0) * 255)), s[g + 3] = 255;
    }
  }
  t.putImageData(a, 0, 0);
}
function hn(e) {
  return Math.min(255, Math.max(0, e));
}
const Pe = X("rgb"), Et = X("hsv"), Zs = X("hsl"), xi = 2e-3, yi = 4e-3;
function Ht(e) {
  return e.c <= xi;
}
function Ys(e) {
  const n = Et({ mode: "oklch", ...e, alpha: 1 });
  return Math.max(0, (n == null ? void 0 : n.s) ?? 0);
}
function se(e) {
  return Ht(e) ? !0 : Ys(e) < yi;
}
function vt(e, n) {
  return se(e) ? { ...e, h: D(n) } : e;
}
function q(e) {
  const n = me(e.l ?? 0), t = Math.max(0, e.c ?? 0), r = D(e.h ?? 0), i = me(e.alpha ?? 1), a = Os({ mode: "oklch", l: n, c: t, h: r, alpha: i }, "rgb"), s = Ht({ c: t });
  return {
    l: a.l ?? n,
    c: s ? 0 : a.c ?? 0,
    h: s ? D(r) : r,
    alpha: a.alpha ?? i
  };
}
function ge(e) {
  const n = jr(e.trim());
  if (!n) return null;
  const t = Wn(n);
  return (t == null ? void 0 : t.l) == null ? null : q({
    l: t.l,
    c: t.c ?? 0,
    h: t.h ?? 0,
    alpha: t.alpha ?? 1
  });
}
function Sr(e) {
  const { l: n, c: t, h: r, alpha: i } = e;
  return i >= 1 ? `oklch(${(n * 100).toFixed(1)}% ${t.toFixed(4)} ${r.toFixed(1)})` : `oklch(${(n * 100).toFixed(1)}% ${t.toFixed(4)} ${r.toFixed(1)} / ${Math.round(i * 100)}%)`;
}
function Ge(e) {
  return Rs(Pe({ mode: "oklch", ...e })) ?? "#000000";
}
function go(e) {
  const { r: n, g: t, b: r } = xt(e);
  return e.alpha < 1 ? `rgba(${n}, ${t}, ${r}, ${e.alpha.toFixed(2)})` : `rgb(${n}, ${t}, ${r})`;
}
function xt(e) {
  const n = Pe({ mode: "oklch", ...e, alpha: 1 });
  return n ? {
    r: Math.round((n.r ?? 0) * 255),
    g: Math.round((n.g ?? 0) * 255),
    b: Math.round((n.b ?? 0) * 255)
  } : { r: 0, g: 0, b: 0 };
}
function Bs(e) {
  const n = D(Math.max(0, Math.min(1, e)) * 360), t = Pe({ mode: "hsv", h: n, s: 1, v: 1, alpha: 1 });
  return t ? {
    r: Math.round((t.r ?? 0) * 255),
    g: Math.round((t.g ?? 0) * 255),
    b: Math.round((t.b ?? 0) * 255)
  } : { r: 255, g: 0, b: 0 };
}
function Vs(e) {
  const { r: n, g: t, b: r } = xt(e);
  return `linear-gradient(to right, rgba(${n}, ${t}, ${r}, 0), rgb(${n}, ${t}, ${r}))`;
}
function Gs(e) {
  if (se(e)) return D(e.h);
  const n = Et({ mode: "oklch", ...e, alpha: 1 });
  return D((n == null ? void 0 : n.h) ?? e.h);
}
function Mi(e, n) {
  const t = D(n), r = Et({ mode: "oklch", ...e, alpha: 1 }), i = Pe({
    mode: "hsv",
    h: t,
    s: (r == null ? void 0 : r.s) ?? 0,
    v: (r == null ? void 0 : r.v) ?? 1,
    alpha: 1
  }), a = Wn(
    i ?? { mode: "hsv", h: t, s: (r == null ? void 0 : r.s) ?? 0, v: (r == null ? void 0 : r.v) ?? 1 }
  );
  if ((a == null ? void 0 : a.l) != null) {
    const s = a.c ?? 0;
    return vt(
      q({
        l: a.l,
        c: s,
        h: a.h ?? t,
        alpha: e.alpha
      }),
      t
    );
  }
  return q({ ...e, h: t });
}
function it(e, n) {
  switch (n) {
    case "hex":
      return [{ key: "hex", label: "HEX CODE", value: Ge(e).replace("#", "").toUpperCase() }];
    case "rgb": {
      const t = Pe({ mode: "oklch", ...e });
      return [
        { key: "r", label: "R", value: String(Math.round((t.r ?? 0) * 255)), min: 0, max: 255 },
        { key: "g", label: "G", value: String(Math.round((t.g ?? 0) * 255)), min: 0, max: 255 },
        { key: "b", label: "B", value: String(Math.round((t.b ?? 0) * 255)), min: 0, max: 255 }
      ];
    }
    case "hsl": {
      const t = Zs({ mode: "oklch", ...e });
      return [
        { key: "h", label: "H", value: String(Math.round((t == null ? void 0 : t.h) ?? 0)), min: 0, max: 360 },
        {
          key: "s",
          label: "S",
          value: String(Math.round(((t == null ? void 0 : t.s) ?? 0) * 100)),
          min: 0,
          max: 100,
          suffix: "%"
        },
        {
          key: "l",
          label: "L",
          value: String(Math.round(((t == null ? void 0 : t.l) ?? 0) * 100)),
          min: 0,
          max: 100,
          suffix: "%"
        }
      ];
    }
    case "oklch":
      return [
        { key: "l", label: "L", value: String(Math.round(e.l * 100)), min: 0, max: 100, suffix: "%" },
        { key: "c", label: "C", value: e.c.toFixed(3), min: 0, max: 0.4, step: 1e-3 },
        { key: "h", label: "H", value: String(Math.round(e.h)), min: 0, max: 360 }
      ];
  }
}
function Ws(e, n, t) {
  var b, f, x;
  const r = e.alpha, i = it(e, "hsl"), a = n === "h" ? D(t) : Number(((b = i.find((g) => g.key === "h")) == null ? void 0 : b.value) ?? 0);
  let s = n === "s" ? t : Number(((f = i.find((g) => g.key === "s")) == null ? void 0 : f.value) ?? 0);
  const c = n === "l" ? t : Number(((x = i.find((g) => g.key === "l")) == null ? void 0 : x.value) ?? 0);
  n === "h" && s < 1 && (s = 1);
  const p = ge(`hsl(${a}, ${yt(s)}%, ${yt(c)}%)`);
  return p ? { ...p, alpha: r } : e;
}
function Js(e, n, t, r) {
  switch (n) {
    case "l": {
      const i = q({ ...e, l: t / 100 });
      return r != null ? vt(i, r) : i;
    }
    case "c": {
      const i = Math.max(0, t), a = i <= xi || se(e) ? r != null ? D(r) : D(e.h) : e.h, s = q({ ...e, c: i, h: a });
      return r != null ? vt(s, r) : s;
    }
    case "h":
      return Mi(e, t);
  }
}
function Cr(e, n, t) {
  switch (e) {
    case "hex": {
      const r = (n.hex ?? "").trim().replace(/^#/, "");
      if (!/^[0-9a-fA-F]{3,8}$/.test(r)) return null;
      const i = ge(`#${r}`);
      return i ? un(i, t.alpha) : null;
    }
    case "rgb": {
      const r = Number(n.r), i = Number(n.g), a = Number(n.b);
      if ([r, i, a].some((c) => Number.isNaN(c))) return null;
      const s = ge(`rgb(${fn(r)}, ${fn(i)}, ${fn(a)})`);
      return s ? un(s, t.alpha) : null;
    }
    case "hsl": {
      const r = bn(n.h), i = bn(n.s), a = bn(n.l);
      if ([r, i, a].some((c) => Number.isNaN(c))) return null;
      const s = ge(`hsl(${r}, ${yt(i)}%, ${yt(a)}%)`);
      return s ? un(s, t.alpha) : null;
    }
    case "oklch": {
      const r = Number(n.l);
      let i = Number(n.c), a = Number(n.h);
      return [r, i, a].some((s) => Number.isNaN(s)) ? null : (i <= 0 && (i = 0, Ht(t) || (a = t.h)), q({ l: r / 100, c: i, h: a, alpha: t.alpha }));
    }
  }
}
function Us(e) {
  const n = Et({ mode: "oklch", ...e, alpha: 1 });
  return {
    x: me((n == null ? void 0 : n.s) ?? 0),
    y: me(1 - ((n == null ? void 0 : n.v) ?? 0))
  };
}
function Ks(e, n, t, r) {
  const i = me(e), a = me(n), s = D(t), c = Wn(
    Pe({ mode: "hsv", h: s, s: i, v: 1 - a, alpha: 1 }) ?? {
      mode: "hsv",
      h: s,
      s: i,
      v: 1 - a
    }
  );
  if ((c == null ? void 0 : c.l) != null) {
    const p = c.c ?? 0, b = i < yi || Ht({ c: p });
    return q({
      l: c.l,
      c: p,
      h: b ? s : c.h ?? s,
      alpha: r
    });
  }
  return q({ l: 0.5, c: 0, h: s, alpha: r });
}
function un(e, n) {
  return { ...e, alpha: me(n) };
}
function me(e) {
  return Math.min(1, Math.max(0, e));
}
function fn(e) {
  return Math.min(255, Math.max(0, Math.round(e)));
}
function yt(e) {
  return Math.min(100, Math.max(0, e));
}
function bn(e) {
  return Number(e.replace(/%/g, "").trim());
}
function D(e) {
  return Math.min(360, Math.max(0, e));
}
const Tr = {
  l: 0.62,
  c: 0.24,
  h: 303,
  alpha: 0.8
}, wi = "pretty-color-picker-history", ki = 16, Pr = "Pretty Color Picker";
function $i(e, n) {
  return Ge(e) === Ge(n) && e.alpha === n.alpha;
}
function Qs() {
  try {
    const e = localStorage.getItem(wi);
    if (!e) return [];
    const n = JSON.parse(e);
    return Array.isArray(n) ? n.slice(0, ki) : [];
  } catch {
    return [];
  }
}
function eo(e, n) {
  const t = n.filter((i) => !$i(i, e)), r = [e, ...t].slice(0, ki);
  try {
    localStorage.setItem(wi, JSON.stringify(r));
  } catch {
  }
  return r;
}
const to = "#ededed", no = "#171717", ro = 0.52;
function io(e, n, t) {
  const r = [e, n, t].map((i) => {
    const a = i / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2];
}
function ao(e, n, t) {
  return io(e, n, t) > ro ? no : to;
}
function so(e, n, t) {
  return {
    backgroundColor: ao(e, n, t),
    boxShadow: "none"
  };
}
function Er(e) {
  const n = e.replace("#", "").trim();
  return n ? n.length === 3 ? {
    r: Number.parseInt(n[0] + n[0], 16),
    g: Number.parseInt(n[1] + n[1], 16),
    b: Number.parseInt(n[2] + n[2], 16)
  } : n.length === 6 ? {
    r: Number.parseInt(n.slice(0, 2), 16),
    g: Number.parseInt(n.slice(2, 4), 16),
    b: Number.parseInt(n.slice(4, 6), 16)
  } : null : null;
}
function oo(e, n, t, r) {
  const i = Math.max(0, Math.min(1, n)), a = {
    r: Math.round((t.r + r.r) / 2),
    g: Math.round((t.g + r.g) / 2),
    b: Math.round((t.b + r.b) / 2)
  };
  return {
    r: Math.round(i * e.r + (1 - i) * a.r),
    g: Math.round(i * e.g + (1 - i) * a.g),
    b: Math.round(i * e.b + (1 - i) * a.b)
  };
}
function Hr(e, n) {
  const t = n.getBoundingClientRect(), r = Ir((e.clientX - t.left) / t.width), i = Ir((e.clientY - t.top) / t.height);
  return { x: r, y: i };
}
function Nr(e, n, t = 3) {
  let r = !1, i = !1, a = 0, s = 0;
  const c = (f) => {
    var g;
    if (!r) return;
    if (!i) {
      if (Math.abs(f.clientX - a) < t) return;
      i = !0, e.blur(), e.setAttribute("data-scrubbing", "true"), document.body.style.cursor = "ew-resize", (g = n.onStart) == null || g.call(n, f), s = f.clientX;
      return;
    }
    const x = f.clientX - s;
    s = f.clientX, x !== 0 && n.onDelta(x, f);
  }, p = (f) => {
    var g;
    if (!r) return;
    const x = i;
    if (r = !1, i = !1, f.pointerId != null)
      try {
        e.releasePointerCapture(f.pointerId);
      } catch {
      }
    window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), x && (e.removeAttribute("data-scrubbing"), document.body.style.cursor = "", (g = n.onEnd) == null || g.call(n, f));
  }, b = (f) => {
    f.button === 0 && (r = !0, i = !1, a = f.clientX, s = f.clientX, e.setPointerCapture(f.pointerId), window.addEventListener("pointermove", c), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p));
  };
  return e.addEventListener("pointerdown", b), () => {
    e.removeEventListener("pointerdown", b), window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), e.removeAttribute("data-scrubbing");
  };
}
function gn(e, n, t, r) {
  let i = !1;
  const a = (p) => {
    if (!i) return;
    const { x: b, y: f } = Hr(p, e);
    n(b, f);
  }, s = (p) => {
    if (i) {
      if (i = !1, (p == null ? void 0 : p.pointerId) != null)
        try {
          e.releasePointerCapture(p.pointerId);
        } catch {
        }
      window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", s), t == null || t();
    }
  }, c = (p) => {
    if (p.button !== 0) return;
    i = !0, e.setPointerCapture(p.pointerId), r == null || r();
    const { x: b, y: f } = Hr(p, e);
    n(b, f), window.addEventListener("pointermove", a), window.addEventListener("pointerup", s), window.addEventListener("pointercancel", s);
  };
  return e.addEventListener("pointerdown", c), () => {
    e.removeEventListener("pointerdown", c), window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", s);
  };
}
function Ir(e) {
  return Math.min(1, Math.max(0, e));
}
const rt = 48;
function lo(e, n) {
  const t = (r) => {
    if (r.button !== 0 || r.target.closest(".pcp-header-btn, .pcp-tabs")) return;
    r.preventDefault();
    const a = n.getBoundingClientRect(), s = r.clientX - a.left, c = r.clientY - a.top;
    e.dataset.dragging = "true", e.setPointerCapture(r.pointerId);
    const p = (f) => {
      zi(n, f.clientX - s, f.clientY - c);
    }, b = (f) => {
      e.removeAttribute("data-dragging");
      try {
        e.releasePointerCapture(f.pointerId);
      } catch {
      }
      window.removeEventListener("pointermove", p), window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b);
    };
    window.addEventListener("pointermove", p), window.addEventListener("pointerup", b), window.addEventListener("pointercancel", b);
  };
  return e.addEventListener("pointerdown", t), () => {
    e.removeEventListener("pointerdown", t), e.removeAttribute("data-dragging");
  };
}
function qr(e) {
  const n = e.offsetWidth, t = e.offsetHeight;
  zi(
    e,
    (window.innerWidth - n) / 2,
    (window.innerHeight - t) / 2
  );
}
function zi(e, n, t) {
  const r = e.offsetWidth, i = e.offsetHeight, a = window.innerWidth - rt, s = window.innerHeight - rt, c = rt - r, p = rt - i;
  e.style.left = `${Math.min(a, Math.max(c, n))}px`, e.style.top = `${Math.min(s, Math.max(p, t))}px`;
}
const Rr = 8, Me = 8;
function co(e, n = document) {
  const t = e.trim();
  if (!t) return null;
  if (t.startsWith("#"))
    return n.getElementById(t.slice(1));
  try {
    return n.querySelector(t);
  } catch {
    return n.getElementById(t);
  }
}
function po(e, n) {
  const t = n.getBoundingClientRect(), r = e.offsetWidth, i = e.offsetHeight, a = window.innerWidth, s = window.innerHeight;
  let c = t.bottom + Rr, p = t.left;
  p + r > a - Me && (p = t.right - r), p = Math.min(a - Me - r, Math.max(Me, p)), c + i > s - Me && (c = t.top - i - Rr), c = Math.min(s - Me - i, Math.max(Me, c)), e.style.left = `${p}px`, e.style.top = `${c}px`;
}
const ho = ["hex", "rgb", "hsl", "oklch"], uo = {
  hex: "HEX",
  rgb: "RGB",
  hsl: "HSL",
  oklch: "OKLCH"
};
var $, y, N, W, $e, E, ze, We, R, J, I, U, Je, F, Ae, K, Ue, O, oe, _e, Q, j, ee, te, le, ce, ne, Z, o, Ai, _i, Li, $n, zn, De, An, _n, Ln, Sn, Oe, B, Cn, Si, je, Tn, Ci, Pn, Ti, Pi, Ei, Hi, at, Ze, Ni, Ii, qi, Ri, st, En, Hn, Fi, Xi, Di, Oi, ji, Zi, Yi, V, Ye, Nn, In, fe, we, ot, qn, Rn, Bi, Fn, Vi, lt, ct, Xn, dt, G, Gi;
class fo extends HTMLElement {
  constructor() {
    super();
    w(this, o);
    w(this, $);
    w(this, y, { ...Tr });
    w(this, N, "hsl");
    w(this, W, Qs());
    w(this, $e, null);
    w(this, E, []);
    w(this, ze);
    w(this, We);
    w(this, R);
    w(this, J);
    w(this, I);
    w(this, U);
    w(this, Je);
    w(this, F);
    w(this, Ae);
    w(this, K);
    w(this, Ue);
    w(this, O);
    w(this, oe);
    w(this, _e);
    w(this, Q, null);
    w(this, j, null);
    w(this, ee, null);
    w(this, te, null);
    w(this, le, null);
    w(this, ce, null);
    w(this, ne, null);
    w(this, Z, Tr.h);
    m(this, $, this.attachShadow({ mode: "open" }));
  }
  static get observedAttributes() {
    return ["value", "theme", "label", "header-action", "movable", "mode", "anchor", "open", "history"];
  }
  connectedCallback() {
    d(this, o, _i).call(this), d(this, o, Li).call(this), d(this, o, Ai).call(this), d(this, o, Ye).call(this, !1), d(this, o, _n).call(this), d(this, o, Oe).call(this), this.popoverMode && this.open && requestAnimationFrame(() => d(this, o, De).call(this));
  }
  disconnectedCallback() {
    var t;
    l(this, ne) != null && (cancelAnimationFrame(l(this, ne)), m(this, ne, null)), (t = l(this, j)) == null || t.call(this), m(this, j, null), d(this, o, An).call(this), l(this, E).forEach((r) => r()), m(this, E, []);
  }
  attributeChangedCallback(t, r, i) {
    if (this.isConnected) {
      if (t === "value" && i != null) {
        const a = ge(i);
        a && (m(this, y, a), d(this, o, Ye).call(this, !1));
        return;
      }
      t === "theme" && d(this, o, je).call(this), t === "movable" && d(this, o, Oe).call(this), (t === "mode" || t === "anchor") && (d(this, o, _n).call(this), d(this, o, Oe).call(this)), t === "open" && this.popoverMode && i != null && requestAnimationFrame(() => {
        d(this, o, De).call(this), d(this, o, we).call(this);
      }), t === "history" && d(this, o, Ln).call(this), t === "header-action" && d(this, o, Ci).call(this), t === "label" && d(this, o, Sn).call(this);
    }
  }
  get value() {
    return Sr(l(this, y));
  }
  set value(t) {
    const r = ge(t);
    r && (m(this, y, r), d(this, o, Ye).call(this));
  }
  get color() {
    return { ...l(this, y) };
  }
  set color(t) {
    m(this, y, q(t)), d(this, o, Ye).call(this);
  }
  get theme() {
    const t = this.getAttribute("theme");
    return t === "light" || t === "system" ? t : "dark";
  }
  set theme(t) {
    this.setAttribute("theme", t);
  }
  get headerAction() {
    const t = this.getAttribute("header-action");
    return t === "theme" ? "theme" : t === "none" ? "none" : "close";
  }
  set headerAction(t) {
    this.setAttribute("header-action", t);
  }
  /** Accessible name for the picker. Default `Pretty Color Picker`. Set `label=""` to clear. */
  get label() {
    const t = this.getAttribute("label");
    return t === null ? Pr : t;
  }
  set label(t) {
    t === Pr ? this.removeAttribute("label") : this.setAttribute("label", t);
  }
  get movable() {
    return this.hasAttribute("movable");
  }
  set movable(t) {
    t ? this.setAttribute("movable", "") : this.removeAttribute("movable");
  }
  /** `inline` (default) or `popover` for a floating panel anchored to `anchor`. */
  get mode() {
    return this.getAttribute("mode") === "popover" ? "popover" : "inline";
  }
  set mode(t) {
    t === "popover" ? this.setAttribute("mode", "popover") : this.removeAttribute("mode");
  }
  get popoverMode() {
    return this.mode === "popover";
  }
  /** CSS selector or element id for the popover trigger (e.g. `#btn` or `.trigger`). */
  get anchor() {
    return this.getAttribute("anchor");
  }
  set anchor(t) {
    t ? this.setAttribute("anchor", t) : this.removeAttribute("anchor");
  }
  get open() {
    return this.hasAttribute("open");
  }
  set open(t) {
    t ? this.show() : this.hide();
  }
  show() {
    if (this.popoverMode) {
      if (this.open) {
        requestAnimationFrame(() => {
          d(this, o, De).call(this), d(this, o, we).call(this);
        });
        return;
      }
      this.setAttribute("open", "");
    }
  }
  hide() {
    !this.popoverMode || !this.open || this.removeAttribute("open");
  }
  toggle() {
    this.open ? this.hide() : this.show();
  }
  /** Last Used swatch grid — on by default; set `history="false"` to hide. */
  get history() {
    const t = this.getAttribute("history");
    return t === null ? !0 : t !== "false" && t !== "0";
  }
  set history(t) {
    t ? this.removeAttribute("history") : this.setAttribute("history", "false");
  }
}
$ = new WeakMap(), y = new WeakMap(), N = new WeakMap(), W = new WeakMap(), $e = new WeakMap(), E = new WeakMap(), ze = new WeakMap(), We = new WeakMap(), R = new WeakMap(), J = new WeakMap(), I = new WeakMap(), U = new WeakMap(), Je = new WeakMap(), F = new WeakMap(), Ae = new WeakMap(), K = new WeakMap(), Ue = new WeakMap(), O = new WeakMap(), oe = new WeakMap(), _e = new WeakMap(), Q = new WeakMap(), j = new WeakMap(), ee = new WeakMap(), te = new WeakMap(), le = new WeakMap(), ce = new WeakMap(), ne = new WeakMap(), Z = new WeakMap(), o = new WeakSet(), Ai = function() {
  const t = this.getAttribute("value");
  if (t) {
    const r = ge(t);
    r && m(this, y, r);
  }
}, _i = function() {
  const t = this.headerAction === "none" ? "" : this.headerAction === "theme" ? `<button type="button" class="pcp-header-btn pcp-theme-toggle" aria-label="Switch to light mode">${rr}</button>` : `<button type="button" class="pcp-header-btn pcp-close" aria-label="Close">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M4.25 4.25L11.75 11.75M11.75 4.25L4.25 11.75"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>`;
  l(this, $).innerHTML = `
      <style>${Qi}</style>
      <div class="pcp" part="container">
        <header class="pcp-header">
          <div class="pcp-tabs" role="tablist" part="tabs">
            <div class="pcp-tabs-pill"></div>
            ${ho.map((r) => `<button type="button" class="pcp-tab" role="tab" data-format="${r}">${uo[r]}</button>`).join("")}
          </div>
          ${t}
        </header>
        <div class="pcp-plane-wrap">
          <div class="pcp-plane-surface pcp-clip">
            <canvas class="pcp-plane" width="240" height="180" aria-label="Color plane"></canvas>
          </div>
          <div class="pcp-cursor" aria-hidden="true"></div>
        </div>
        <div class="pcp-slider-wrapper">
          <div class="pcp-slider pcp-hue-row" aria-label="Hue">
            <div class="pcp-slider-track pcp-clip">
              <div class="pcp-slider-fill pcp-slider-fill-hue"></div>
            </div>
            <div class="pcp-slider-handle"></div>
          </div>
        </div>
        <div class="pcp-slider-wrapper">
          <div class="pcp-slider pcp-alpha-row" aria-label="Opacity">
            <div class="pcp-slider-track pcp-clip">
              <div class="pcp-slider-fill pcp-slider-fill-alpha"></div>
            </div>
            <div class="pcp-slider-handle"></div>
          </div>
        </div>
        <div class="pcp-inputs">
          <div class="pcp-swatch pcp-clip" aria-hidden="true">
            <span class="pcp-swatch-fill"></span>
          </div>
          <div class="pcp-fields"></div>
          <div class="pcp-field pcp-alpha-field">
            <input class="pcp-field-input pcp-alpha-input" type="text" inputmode="numeric" value="80%" aria-label="Opacity" />
          </div>
        </div>
        <div class="pcp-history-section">
          <div class="pcp-history"></div>
        </div>
      </div>
    `, m(this, ze, l(this, $).querySelector(".pcp-plane")), m(this, We, l(this, $).querySelector(".pcp-plane-wrap")), m(this, R, l(this, $).querySelector(".pcp-cursor")), m(this, J, l(this, $).querySelector(".pcp-hue-row")), m(this, I, l(this, J).querySelector(".pcp-slider-handle")), m(this, U, l(this, $).querySelector(".pcp-alpha-row")), m(this, Je, l(this, $).querySelector(".pcp-slider-fill-alpha")), m(this, F, l(this, U).querySelector(".pcp-slider-handle")), m(this, Ae, l(this, $).querySelector(".pcp-tabs-pill")), m(this, K, l(this, $).querySelector(".pcp-fields")), m(this, Ue, l(this, $).querySelector(".pcp-swatch-fill")), m(this, O, l(this, $).querySelector(".pcp-alpha-input")), m(this, _e, l(this, $).querySelector(".pcp-history-section")), m(this, oe, l(this, $).querySelector(".pcp-history")), d(this, o, Sn).call(this), m(this, Q, l(this, $).querySelector(".pcp-theme-toggle")), d(this, o, je).call(this);
}, Li = function() {
  d(this, o, Tn).call(this), l(this, E).push(
    gn(
      l(this, We),
      (t, r) => d(this, o, Ni).call(this, t, r),
      () => d(this, o, G).call(this),
      () => d(this, o, B).call(this)
    )
  ), l(this, E).push(
    gn(
      l(this, J),
      (t) => d(this, o, Ii).call(this, t),
      () => d(this, o, G).call(this),
      () => d(this, o, B).call(this)
    )
  ), l(this, E).push(
    gn(
      l(this, U),
      (t) => d(this, o, qi).call(this, t),
      () => d(this, o, G).call(this),
      () => d(this, o, B).call(this)
    )
  ), l(this, E).push(d(this, o, Pn).call(this, l(this, J))), l(this, E).push(d(this, o, Pn).call(this, l(this, U))), l(this, $).querySelectorAll(".pcp-tab").forEach((t) => {
    t.addEventListener("click", () => {
      const r = t.dataset.format;
      r && r !== l(this, N) && (m(this, N, r), d(this, o, we).call(this), d(this, o, Xn).call(this), d(this, o, ct).call(this), d(this, o, ot).call(this));
    });
  }), l(this, O).addEventListener("focus", () => d(this, o, B).call(this)), l(this, O).addEventListener("change", () => d(this, o, En).call(this)), l(this, O).addEventListener("keydown", (t) => {
    t.key === "Enter" && d(this, o, En).call(this);
  }), l(this, E).push(d(this, o, Zi).call(this)), d(this, o, Oe).call(this), d(this, o, Ln).call(this);
}, $n = function() {
  this.popoverMode && this.hide(), this.dispatchEvent(new CustomEvent("close", { bubbles: !0, composed: !0 }));
}, zn = function() {
  const t = this.anchor;
  return t ? co(t, this.ownerDocument) : null;
}, De = function() {
  m(this, le, d(this, o, zn).call(this)), l(this, le) ? (po(this, l(this, le)), this.setAttribute("data-positioned", "")) : (this.movable || this.popoverMode) && (qr(this), this.setAttribute("data-positioned", ""));
}, An = function() {
  if (l(this, te)) {
    const t = l(this, E).indexOf(l(this, te));
    t >= 0 && l(this, E).splice(t, 1), l(this, te).call(this), m(this, te, null);
  }
  m(this, le, null);
}, _n = function() {
  if (d(this, o, An).call(this), !this.popoverMode) {
    this.removeAttribute("open"), this.movable || (this.style.position = "", this.style.left = "", this.style.top = "", this.style.zIndex = "");
    return;
  }
  this.movable || (this.style.position = "fixed", this.style.zIndex = "1000");
  const t = d(this, o, zn).call(this);
  m(this, le, t);
  const r = (c) => {
    c.preventDefault(), c.stopPropagation(), this.toggle();
  }, i = (c) => {
    if (!this.open) return;
    const p = c.composedPath();
    p.includes(this) || t && p.includes(t) || this.hide();
  }, a = (c) => {
    c.key === "Escape" && this.open && (c.preventDefault(), d(this, o, $n).call(this));
  }, s = () => {
    this.open && d(this, o, De).call(this);
  };
  t == null || t.addEventListener("click", r), document.addEventListener("pointerdown", i, !0), document.addEventListener("keydown", a), window.addEventListener("resize", s), window.addEventListener("scroll", s, !0), m(this, te, () => {
    t == null || t.removeEventListener("click", r), document.removeEventListener("pointerdown", i, !0), document.removeEventListener("keydown", a), window.removeEventListener("resize", s), window.removeEventListener("scroll", s, !0);
  }), l(this, E).push(l(this, te));
}, Ln = function() {
  if (!this.history) {
    l(this, _e).hidden = !0, l(this, oe).innerHTML = "";
    return;
  }
  d(this, o, dt).call(this);
}, Sn = function() {
  if (this.getAttribute("label") === "") {
    this.removeAttribute("aria-label");
    return;
  }
  this.setAttribute("aria-label", this.label);
}, Oe = function() {
  if (l(this, ee)) {
    const i = l(this, E).indexOf(l(this, ee));
    i >= 0 && l(this, E).splice(i, 1), l(this, ee).call(this), m(this, ee, null);
  }
  if (!(this.movable || this.popoverMode)) {
    this.popoverMode || (this.style.position = "", this.style.left = "", this.style.top = "", this.style.zIndex = ""), this.removeAttribute("data-positioned");
    return;
  }
  !this.popoverMode && !this.hasAttribute("data-positioned") && requestAnimationFrame(() => {
    qr(this), this.setAttribute("data-positioned", "");
  });
  const r = l(this, $).querySelector(".pcp-header");
  r && (m(this, ee, lo(r, this)), l(this, E).push(l(this, ee)));
}, B = function() {
  m(this, $e, { ...l(this, y) });
}, Cn = function() {
  return this.theme === "light" ? "light" : this.theme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}, Si = function() {
  const t = d(this, o, Cn).call(this) === "light" ? "dark" : "light";
  this.theme = t, d(this, o, je).call(this);
  const r = { theme: t };
  this.dispatchEvent(
    new CustomEvent("themechange", {
      detail: r,
      bubbles: !0,
      composed: !0
    })
  );
}, je = function() {
  if (!l(this, Q)) return;
  const t = d(this, o, Cn).call(this) === "light";
  l(this, Q).innerHTML = t ? Ki : rr, l(this, Q).setAttribute(
    "aria-label",
    t ? "Switch to dark mode" : "Switch to light mode"
  );
}, Tn = function() {
  var i;
  (i = l(this, j)) == null || i.call(this), m(this, j, null);
  const t = l(this, $).querySelector(".pcp-close");
  if (t) {
    const a = () => d(this, o, $n).call(this);
    t.addEventListener("click", a), m(this, j, () => t.removeEventListener("click", a));
    return;
  }
  const r = l(this, $).querySelector(".pcp-theme-toggle");
  if (r) {
    const a = () => d(this, o, Si).call(this);
    r.addEventListener("click", a), m(this, j, () => r.removeEventListener("click", a));
  }
}, Ci = function() {
  var i, a;
  (i = l(this, j)) == null || i.call(this), m(this, j, null);
  const t = l(this, $).querySelector(".pcp-header");
  if (!t || ((a = t.querySelector(".pcp-header-btn")) == null || a.remove(), m(this, Q, null), this.headerAction === "none")) return;
  const r = document.createElement("button");
  r.type = "button", r.className = `pcp-header-btn ${this.headerAction === "theme" ? "pcp-theme-toggle" : "pcp-close"}`, t.appendChild(r), this.headerAction === "theme" ? (m(this, Q, r), d(this, o, je).call(this)) : (r.setAttribute("aria-label", "Close"), r.innerHTML = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M4.25 4.25L11.75 11.75M11.75 4.25L4.25 11.75"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>`), d(this, o, Tn).call(this);
}, Pn = function(t) {
  const r = () => {
    t.dataset.active = "true";
  }, i = () => {
    const a = t.querySelector(".pcp-slider-handle");
    a != null && a.hasAttribute("data-dragging") || delete t.dataset.active;
  };
  return t.addEventListener("pointerenter", r), t.addEventListener("pointerleave", i), () => {
    t.removeEventListener("pointerenter", r), t.removeEventListener("pointerleave", i);
  };
}, Ti = function(t, r) {
  const i = Math.max(0, Math.min(1, r)) * 100;
  t.style.left = `max(0px, calc(${i}% - 1.5px))`;
}, Pi = function() {
  const t = getComputedStyle(this), r = Er(t.getPropertyValue("--pcp-checker-base").trim()) ?? { r: 255, g: 255, b: 255 }, i = Er(t.getPropertyValue("--pcp-checker-tone").trim()) ?? { r: 204, g: 204, b: 204 };
  return { base: r, tone: i };
}, Ei = function(t, r) {
  const i = t.style.left.match(/calc\(([\d.]+)%/);
  return i ? parseFloat(i[1]) / 100 : r;
}, Hi = function(t, r) {
  if (r === "hue") return Bs(t);
  const { base: i, tone: a } = d(this, o, Pi).call(this);
  return oo(xt(l(this, y)), t, i, a);
}, at = function(t, r, i) {
  const a = d(this, o, Hi).call(this, r, i), { backgroundColor: s, boxShadow: c } = so(a.r, a.g, a.b);
  t.style.backgroundColor = s, t.style.boxShadow = c;
}, Ze = function(t, r, i) {
  d(this, o, Ti).call(this, t, r), d(this, o, at).call(this, t, r, i);
}, Ni = function(t, r) {
  l(this, R).dataset.dragging = "true";
  const i = d(this, o, fe).call(this);
  d(this, o, V).call(this, Ks(t, r, i, l(this, y).alpha), !0, {
    refreshPlane: !1,
    refreshCursor: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  }), d(this, o, qn).call(this, t, r);
}, Ii = function(t) {
  l(this, J).dataset.active = "true", l(this, I).dataset.dragging = "true", m(this, Z, t * 360), d(this, o, Ze).call(this, l(this, I), t, "hue"), d(this, o, V).call(this, Mi(l(this, y), l(this, Z)), !0, {
    refreshPlane: !0,
    refreshCursor: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  });
}, qi = function(t) {
  l(this, U).dataset.active = "true", l(this, F).dataset.dragging = "true", d(this, o, V).call(this, q({ ...l(this, y), alpha: t }), !0, {
    refreshPlane: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  }), d(this, o, Ze).call(this, l(this, F), t, "alpha");
}, Ri = function() {
  const r = l(this, I).style.left.match(/calc\(([\d.]+)%/);
  return r ? parseFloat(r[1]) / 100 * 360 : l(this, Z);
}, st = function() {
  se(l(this, y)) || m(this, Z, Gs(l(this, y)));
}, En = function() {
  const t = l(this, O).value.replace(/%/g, "").trim(), r = Number(t);
  if (Number.isNaN(r)) {
    d(this, o, lt).call(this);
    return;
  }
  d(this, o, V).call(this, q({ ...l(this, y), alpha: r / 100 }), !0), d(this, o, G).call(this);
}, Hn = function(t, r) {
  d(this, o, Fi).call(this, { [t]: r }, !0);
}, Fi = function(t, r = !0) {
  const i = {};
  it(l(this, y), l(this, N)).forEach((s) => {
    i[s.key] = t[s.key] ?? s.value;
  });
  const a = Cr(l(this, N), i, l(this, y));
  a && (d(this, o, V).call(this, a, !0), r && d(this, o, G).call(this));
}, Xi = function(t, r) {
  if (t.scrubStep != null)
    return r ? t.scrubStep * 0.1 : t.scrubStep;
  const i = t.min ?? 0, s = (t.max ?? 100) - i, c = t.step != null && t.step < 1 ? s / 120 : t.step ?? 1;
  return r ? c * 0.1 : c;
}, Di = function(t, r) {
  return t.step != null && t.step < 1 ? r.toFixed(3) : String(Math.round(r));
}, Oi = function(t, r, i, a) {
  const s = l(this, K).querySelector(
    `.pcp-field-input[data-key="${t}"]`
  ), c = it(l(this, y), l(this, N)), p = c.find((C) => C.key === t);
  if (!p) return;
  const b = r.min ?? 0, f = r.max ?? 100, x = d(this, o, Xi).call(this, r, a), g = Number(s ? s.value.replace(/%/g, "").trim() : p.value);
  let M = g + i * x;
  if (r.step != null && r.step < 1 ? (M = Math.round(M / r.step) * r.step, M = Math.min(f, Math.max(b, M))) : M = Math.min(f, Math.max(b, Math.round(M))), Math.abs(M - g) < (r.step != null && r.step < 1 ? r.step / 2 : 0.5)) return;
  const A = d(this, o, Di).call(this, r, M);
  let z = null;
  if (l(this, N) === "hsl" && (t === "h" || t === "s" || t === "l"))
    z = Ws(l(this, y), t, M);
  else if (l(this, N) === "oklch" && (t === "l" || t === "c" || t === "h"))
    z = Js(l(this, y), t, M, l(this, Z));
  else {
    const C = {};
    c.forEach((L) => {
      C[L.key] = L.key === t ? A : L.value;
    }), z = Cr(l(this, N), C, l(this, y));
  }
  if (!z) return;
  t === "h" && m(this, Z, D(M));
  const _ = t === "h" || l(this, N) === "oklch" && (t === "c" || t === "l");
  d(this, o, V).call(this, z, !0, {
    refreshFields: !1,
    refreshCursor: !0,
    refreshSliders: !0,
    syncPlaneHue: !_
  }), s && (s.value = A);
}, ji = function(t, r) {
  const i = r ? 0.05 : 0.5, a = l(this, y).alpha * 100;
  let s = a + t * i;
  if (s = Math.min(100, Math.max(0, r ? s : Math.round(s))), Math.abs(s - a) < 0.01) return;
  const c = s / 100;
  d(this, o, V).call(this, q({ ...l(this, y), alpha: c }), !0, {
    refreshFields: !1,
    refreshPlane: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  }), l(this, O).value = `${Math.round(s)}%`;
}, Zi = function() {
  return Nr(l(this, O), {
    onStart: () => d(this, o, B).call(this),
    onDelta: (t, r) => d(this, o, ji).call(this, t, r.shiftKey),
    onEnd: () => {
      d(this, o, G).call(this), d(this, o, lt).call(this);
    }
  });
}, Yi = function(t) {
  l(this, N) !== "hex" && l(this, K).querySelectorAll(".pcp-field-input").forEach((r) => {
    const i = r, a = i.dataset.key;
    if (!a) return;
    const s = t.find((c) => c.key === a);
    !s || s.min == null || s.max == null || Nr(i, {
      onStart: () => d(this, o, B).call(this),
      onDelta: (c, p) => d(this, o, Oi).call(this, a, s, c, p.shiftKey),
      onEnd: () => {
        d(this, o, G).call(this), d(this, o, ct).call(this);
      }
    });
  });
}, V = function(t, r = !0, i) {
  let a = q(t);
  se(a) && (a = vt(a, l(this, Z))), m(this, y, a), !(l(this, R).hasAttribute("data-dragging") || l(this, I).hasAttribute("data-dragging")) && (i == null ? void 0 : i.syncPlaneHue) !== !1 && !se(a) && d(this, o, st).call(this), d(this, o, Nn).call(this, r, i);
}, Ye = function(t = !0) {
  se(l(this, y)) || d(this, o, st).call(this), d(this, o, we).call(this), d(this, o, Xn).call(this), d(this, o, Nn).call(this, t), d(this, o, dt).call(this);
}, Nn = function(t, r) {
  (r == null ? void 0 : r.refreshFields) !== !1 && d(this, o, ct).call(this), d(this, o, Vi).call(this), (r == null ? void 0 : r.refreshSliders) !== !1 && d(this, o, Rn).call(this), (r == null ? void 0 : r.refreshCursor) !== !1 && !l(this, R).hasAttribute("data-dragging") && d(this, o, ot).call(this), (r == null ? void 0 : r.refreshPlane) === !0 ? d(this, o, In).call(this) : (r == null ? void 0 : r.refreshPlane) !== !1 && !l(this, R).hasAttribute("data-dragging") && !l(this, I).hasAttribute("data-dragging") && l(this, ce) !== d(this, o, fe).call(this) && d(this, o, In).call(this), t && d(this, o, Gi).call(this);
}, In = function() {
  l(this, ne) == null && m(this, ne, requestAnimationFrame(() => {
    m(this, ne, null);
    const t = d(this, o, fe).call(this);
    l(this, ce) !== t && (Lr(l(this, ze), t), m(this, ce, t));
  }));
}, fe = function() {
  return l(this, I).hasAttribute("data-dragging") ? d(this, o, Ri).call(this) : l(this, Z);
}, we = function() {
  const t = d(this, o, fe).call(this);
  Lr(l(this, ze), t), m(this, ce, t);
}, ot = function() {
  const { x: t, y: r } = Us(l(this, y));
  d(this, o, qn).call(this, t, r);
}, qn = function(t, r) {
  l(this, R).style.left = `${t * 100}%`, l(this, R).style.top = `${r * 100}%`;
}, Rn = function() {
  const r = d(this, o, fe).call(this) / 360;
  l(this, I).hasAttribute("data-dragging") ? d(this, o, at).call(this, l(this, I), r, "hue") : d(this, o, Ze).call(this, l(this, I), r, "hue");
  const i = l(this, F).hasAttribute("data-dragging") ? d(this, o, Ei).call(this, l(this, F), l(this, y).alpha) : l(this, y).alpha;
  l(this, F).hasAttribute("data-dragging") ? d(this, o, at).call(this, l(this, F), i, "alpha") : d(this, o, Ze).call(this, l(this, F), i, "alpha"), d(this, o, Bi).call(this);
}, Bi = function() {
  l(this, Je).style.setProperty("--pcp-alpha-gradient", Vs(l(this, y)));
}, Fn = function(t, r) {
  const { r: i, g: a, b: s } = xt(r);
  t.style.setProperty("--swatch-solid", `rgb(${i}, ${a}, ${s})`), t.style.setProperty("--swatch-alpha", `rgba(${i}, ${a}, ${s}, ${r.alpha})`);
}, Vi = function() {
  d(this, o, Fn).call(this, l(this, Ue), l(this, y));
}, lt = function() {
  l(this, O).value = `${Math.round(l(this, y).alpha * 100)}%`;
}, ct = function() {
  const t = it(l(this, y), l(this, N));
  l(this, K).dataset.format = l(this, N), l(this, K).innerHTML = t.map(
    (r) => `
        <div class="pcp-field pcp-field-${r.key}">
          <input
            class="pcp-field-input"
            type="text"
            data-key="${r.key}"
            value="${r.value}"
            aria-label="${r.label}"
          />
        </div>
      `
  ).join(""), l(this, K).querySelectorAll(".pcp-field-input").forEach((r) => {
    const i = r, a = i.dataset.key;
    i.addEventListener("focus", () => d(this, o, B).call(this)), i.addEventListener("change", () => d(this, o, Hn).call(this, a, i.value)), i.addEventListener("keydown", (s) => {
      s.key === "Enter" && d(this, o, Hn).call(this, a, i.value);
    });
  }), d(this, o, Yi).call(this, t), d(this, o, lt).call(this);
}, Xn = function() {
  const t = l(this, $).querySelectorAll(".pcp-tab");
  let r = null;
  if (t.forEach((i) => {
    const a = i.dataset.format === l(this, N);
    i.setAttribute("data-active", String(a)), i.setAttribute("aria-selected", String(a)), a && (r = i);
  }), r) {
    const i = r, a = i.offsetLeft, s = i.offsetWidth;
    l(this, Ae).style.left = `${a}px`, l(this, Ae).style.width = `${s}px`;
  }
}, dt = function() {
  this.history && (l(this, _e).hidden = l(this, W).length === 0, l(this, oe).innerHTML = l(this, W).map((t, r) => `
          <button type="button" class="pcp-history-swatch pcp-clip" data-index="${r}" aria-label="Color ${Ge(t)}">
            <span class="pcp-swatch-fill" data-history-fill="${r}"></span>
          </button>
        `).join(""), l(this, oe).querySelectorAll("[data-history-fill]").forEach((t) => {
    const r = Number(t.dataset.historyFill), i = l(this, W)[r];
    i && d(this, o, Fn).call(this, t, i);
  }), l(this, oe).querySelectorAll(".pcp-history-swatch").forEach((t) => {
    t.addEventListener("click", () => {
      const r = Number(t.dataset.index), i = l(this, W)[r];
      i && (d(this, o, B).call(this), d(this, o, V).call(this, { ...i }, !0, { refreshFields: !0 }), d(this, o, G).call(this));
    });
  }));
}, G = function() {
  const t = l(this, R).hasAttribute("data-dragging"), r = l(this, I).hasAttribute("data-dragging");
  delete l(this, R).dataset.dragging, delete l(this, I).dataset.dragging, delete l(this, F).dataset.dragging, delete l(this, J).dataset.active, delete l(this, U).dataset.active, (t || r) && (se(l(this, y)) || d(this, o, st).call(this), d(this, o, Rn).call(this), d(this, o, ot).call(this), l(this, ce) !== d(this, o, fe).call(this) && d(this, o, we).call(this));
  const i = l(this, $e);
  m(this, $e, null), this.history && i && !$i(i, l(this, y)) && (m(this, W, eo(i, l(this, W))), d(this, o, dt).call(this));
}, Gi = function() {
  const t = {
    color: { ...l(this, y) },
    css: Sr(l(this, y)),
    hex: Ge(l(this, y))
  };
  this.dispatchEvent(
    new CustomEvent("change", {
      detail: t,
      bubbles: !0,
      composed: !0
    })
  );
};
customElements.get("pretty-color-picker") || customElements.define("pretty-color-picker", fo);
export {
  Tr as DEFAULT_COLOR,
  Pr as DEFAULT_PICKER_LABEL,
  fo as PrettyColorPicker,
  it as formatFieldsFor,
  q as normalizeOklch,
  ge as oklchFromCss,
  Sr as oklchToCss,
  Ge as oklchToHex,
  go as oklchToRgbString,
  Cr as parseFormatFields
};
