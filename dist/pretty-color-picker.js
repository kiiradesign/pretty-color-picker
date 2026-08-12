var ti = (e) => {
  throw TypeError(e);
};
var Ft = (e, n, t) => n.has(e) || ti("Cannot " + t);
var l = (e, n, t) => (Ft(e, n, "read from private field"), t ? t.call(e) : n.get(e)), w = (e, n, t) => n.has(e) ? ti("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(e) : n.set(e, t), m = (e, n, t, i) => (Ft(e, n, "write to private field"), i ? i.call(e, t) : n.set(e, t), t), d = (e, n, t) => (Ft(e, n, "access private method"), t);
const ni = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z" opacity="0.2"/><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/></svg>', Gr = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z" opacity="0.2"/><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"/></svg>', Vr = '@import"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap";:host{--pcp-width: 260px;--pcp-radius-sm: 4px;--pcp-radius: 6px;--pcp-radius-lg: 9px;--pcp-panel-padding: 9px;--pcp-section-gap: 6px;--pcp-history-cols: 8;--pcp-history-swatch-size: calc( (var(--pcp-width) - 2 * var(--pcp-panel-padding) - 7 * var(--pcp-history-gap)) / var(--pcp-history-cols) );--pcp-control-height: var(--pcp-history-swatch-size);--pcp-tab-row-height: 28px;--pcp-field-value-size: 11px;--pcp-field-value-line: 15px;--pcp-field-input-height: 28px;--pcp-input-panel-height: var(--pcp-field-input-height);--pcp-input-row-padding-y: 4px;--pcp-input-row-padding-x: 7px;--pcp-alpha-col-width: 4ch;--pcp-value-col-width: minmax(0, 1fr);--pcp-swatch-code-gap: 8px;--pcp-history-gap: 6px;--pcp-checker-size: 6px;--pcp-loupe-size: 13px;--pcp-field-input-radius: var(--pcp-radius-sm);--pcp-icon-button-size: 26px;--pcp-icon-button-radius: var(--pcp-radius-sm);--pcp-ease-out: cubic-bezier(.175, .885, .32, 1.1);--pcp-font: "Geist", system-ui, -apple-system, "SF Pro Display", sans-serif;--pcp-mono: "Geist Mono", ui-monospace, monospace;display:inline-block;font-family:var(--pcp-font);-webkit-font-smoothing:antialiased;color:var(--pcp-text-primary)}:host([mode="popover"]),:host([movable]){position:fixed;z-index:1000;margin:0}:host([mode="popover"]:not([open])){display:none}:host([mode="popover"]) .pcp-header,:host([movable]) .pcp-header{cursor:grab;touch-action:none}:host([mode="popover"]) .pcp-header[data-dragging=true],:host([movable]) .pcp-header[data-dragging=true]{cursor:grabbing}:host([mode="popover"]) .pcp-header .pcp-tabs,:host([movable]) .pcp-header .pcp-tabs,:host([mode="popover"]) .pcp-header .pcp-tab,:host([movable]) .pcp-header .pcp-tab,:host([mode="popover"]) .pcp-header .pcp-header-btn,:host([movable]) .pcp-header .pcp-header-btn{cursor:pointer;touch-action:manipulation}:host,:host([theme="dark"]){color-scheme:dark;--pcp-bg: #212121;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: rgba(255, 255, 255, .05);--pcp-surface-hover: rgba(255, 255, 255, .1);--pcp-surface-active: rgba(255, 255, 255, .11);--pcp-tab-pill: rgba(255, 255, 255, .11);--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-root: #ffffff;--pcp-text-section: rgba(255, 255, 255, .7);--pcp-text-primary: rgba(255, 255, 255, .95);--pcp-text-label: rgba(255, 255, 255, .7);--pcp-text-muted: #a0a0a0;--pcp-text-secondary: rgba(255, 255, 255, .6);--pcp-text-tertiary: rgba(255, 255, 255, .4);--pcp-text-focus: #ffffff;--pcp-slider-handle: rgba(255, 255, 255, .95);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: 0 8px 32px rgba(0, 0, 0, .5)}:host([theme="light"]){color-scheme:light;--pcp-bg: #fafafa;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: rgba(0, 0, 0, .04);--pcp-surface-hover: rgba(0, 0, 0, .08);--pcp-surface-active: rgba(0, 0, 0, .1);--pcp-tab-pill: rgba(0, 0, 0, .1);--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-root: #000000;--pcp-text-section: rgba(0, 0, 0, .65);--pcp-text-primary: rgba(0, 0, 0, .9);--pcp-text-label: rgba(0, 0, 0, .6);--pcp-text-muted: #4d4d4d;--pcp-text-secondary: rgba(0, 0, 0, .55);--pcp-text-tertiary: rgba(0, 0, 0, .35);--pcp-text-focus: #000000;--pcp-slider-handle: rgba(0, 0, 0, .9);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 4px 20px rgba(0, 0, 0, .08)}@media(prefers-color-scheme:dark){:host([theme="system"]){color-scheme:dark;--pcp-bg: #212121;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: rgba(255, 255, 255, .05);--pcp-surface-hover: rgba(255, 255, 255, .1);--pcp-surface-active: rgba(255, 255, 255, .11);--pcp-tab-pill: rgba(255, 255, 255, .11);--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-root: #ffffff;--pcp-text-section: rgba(255, 255, 255, .7);--pcp-text-primary: rgba(255, 255, 255, .95);--pcp-text-label: rgba(255, 255, 255, .7);--pcp-text-muted: #a0a0a0;--pcp-text-secondary: rgba(255, 255, 255, .6);--pcp-text-tertiary: rgba(255, 255, 255, .4);--pcp-text-focus: #ffffff;--pcp-slider-handle: rgba(255, 255, 255, .95);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: 0 8px 32px rgba(0, 0, 0, .5)}}@media(prefers-color-scheme:light){:host([theme="system"]){color-scheme:light;--pcp-bg: #fafafa;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: rgba(0, 0, 0, .04);--pcp-surface-hover: rgba(0, 0, 0, .08);--pcp-surface-active: rgba(0, 0, 0, .1);--pcp-tab-pill: rgba(0, 0, 0, .1);--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-root: #000000;--pcp-text-section: rgba(0, 0, 0, .65);--pcp-text-primary: rgba(0, 0, 0, .9);--pcp-text-label: rgba(0, 0, 0, .6);--pcp-text-muted: #4d4d4d;--pcp-text-secondary: rgba(0, 0, 0, .55);--pcp-text-tertiary: rgba(0, 0, 0, .35);--pcp-text-focus: #000000;--pcp-slider-handle: rgba(0, 0, 0, .9);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 4px 20px rgba(0, 0, 0, .08)}}*,*:before,*:after{box-sizing:border-box}.pcp-clip{overflow:hidden;border-radius:var(--pcp-clip-radius, var(--pcp-radius-sm))}.pcp-swatch-fill{display:block;box-sizing:border-box;width:calc(100% + 2px);height:calc(100% + 2px);margin:-1px;border-radius:inherit;background-color:var(--pcp-checker-base);background-image:linear-gradient(to right,var(--swatch-solid, #000) 50%,transparent 50%),linear-gradient(to right,transparent 50%,var(--swatch-alpha, rgba(0, 0, 0, .5)) 50%),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,100% 100%,var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size);background-position:0 0,0 0,0 0,0 calc(var(--pcp-checker-size) / 2),calc(var(--pcp-checker-size) / 2) calc(var(--pcp-checker-size) / -2),calc(var(--pcp-checker-size) / -2) 0}@supports (background: -webkit-named-image(i)){.pcp-clip,.pcp-swatch-fill{clip-path:inset(0 round var(--pcp-clip-radius, var(--pcp-radius-sm)))}}.pcp{display:flex;flex-direction:column;gap:var(--pcp-section-gap);width:var(--pcp-width);background:var(--pcp-bg);border:1px solid var(--pcp-border);border-radius:var(--pcp-radius-lg);box-shadow:var(--pcp-elevation);padding:var(--pcp-panel-padding);-webkit-user-select:none;user-select:none}.pcp-header{display:flex;align-items:center;justify-content:space-between;gap:6px;padding-bottom:4px;margin-bottom:0;min-height:var(--pcp-icon-button-size);border-bottom:1px solid var(--pcp-divider)}.pcp-header .pcp-tabs{flex:1;min-width:0}.pcp-header-btn{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--pcp-icon-button-size);height:var(--pcp-icon-button-size);padding:0;border:none;border-radius:var(--pcp-icon-button-radius);background:transparent;color:var(--pcp-text-focus);cursor:pointer;transition:background .15s var(--pcp-ease-out),color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-header-btn svg{width:13px;height:13px;flex-shrink:0}@media(hover:hover)and (pointer:fine){.pcp-header-btn:hover{background:var(--pcp-surface-hover);color:var(--pcp-text-primary)}}.pcp-header-btn:active{background:var(--pcp-surface-active);transform:scale(.97)}.pcp-header-btn:focus{outline:none}.pcp-header-btn:focus-visible{box-shadow:0 0 0 2px var(--pcp-bg),0 0 0 4px var(--pcp-focus-ring)}.pcp-plane-wrap{position:relative;width:100%;aspect-ratio:4 / 3;margin-bottom:0;cursor:crosshair;touch-action:none;overflow:visible}.pcp-plane-surface{position:absolute;top:0;right:0;bottom:0;left:0;--pcp-clip-radius: var(--pcp-radius-sm)}.pcp-plane{display:block;width:100%;height:100%}.pcp-cursor{position:absolute;z-index:2;width:var(--pcp-loupe-size);height:var(--pcp-loupe-size);margin:calc(var(--pcp-loupe-size) / -2) 0 0 calc(var(--pcp-loupe-size) / -2);border:2px solid var(--pcp-cursor-ring);border-radius:50%;box-shadow:0 0 0 1px var(--pcp-cursor-outline),inset 0 0 0 1px #0000001f;pointer-events:none}.pcp-cursor[data-dragging=true]{transition:none}.pcp-slider-wrapper{position:relative;height:var(--pcp-control-height);margin-bottom:0;overflow:visible}.pcp-slider{position:absolute;top:0;right:0;bottom:0;left:0;cursor:pointer;-webkit-user-select:none;user-select:none;background:transparent;touch-action:none;overflow:visible}.pcp-slider-track{position:absolute;top:0;right:0;bottom:0;left:0;--pcp-clip-radius: var(--pcp-radius-sm);pointer-events:none}.pcp-slider-fill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none}.pcp-slider-fill-hue{background:linear-gradient(to right,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.pcp-slider-fill-alpha{--pcp-alpha-gradient: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));background-color:var(--pcp-checker-base);background-image:var(--pcp-alpha-gradient),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size);background-position:0 0,0 0,0 calc(var(--pcp-checker-size) / 2),calc(var(--pcp-checker-size) / 2) calc(var(--pcp-checker-size) / -2),calc(var(--pcp-checker-size) / -2) 0}.pcp-slider-handle{position:absolute;top:50%;left:0;z-index:2;width:var(--pcp-loupe-size);height:var(--pcp-loupe-size);border:2px solid var(--pcp-cursor-ring);outline:none;border-radius:50%;background-color:transparent;pointer-events:none;transform:translate(-50%,-50%);box-shadow:0 0 0 1px var(--pcp-cursor-outline),inset 0 0 0 1px #0000001f;filter:none;opacity:1;transition:box-shadow .12s ease}.pcp-slider-handle[data-dragging=true]{box-shadow:0 0 0 1px var(--pcp-cursor-outline),inset 0 0 0 1px #0000001f,0 1px 4px #00000047}.pcp-tabs{position:relative;display:flex;align-items:center;height:var(--pcp-tab-row-height);box-sizing:border-box;padding:2px;margin-bottom:0;background:transparent;border-radius:var(--pcp-radius)}.pcp-tabs-pill{position:absolute;top:2px;bottom:2px;left:0;width:0;background:var(--pcp-tab-pill);border-radius:5px;z-index:0;pointer-events:none;transition:left .2s var(--pcp-ease-out),width .2s var(--pcp-ease-out)}.pcp-tab{position:relative;z-index:1;flex:1;display:flex;align-items:center;justify-content:center;height:100%;padding:0 4px;font-family:inherit;font-size:11px;font-weight:500;line-height:1;text-align:center;background:transparent;border:none;color:var(--pcp-text-label);cursor:pointer;transition:color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-tab[data-active=true]{color:var(--pcp-text-primary)}.pcp-tab:active{transform:scale(.97)}.pcp-inputs{display:grid;width:100%;min-width:0;box-sizing:border-box;overflow:hidden;grid-template-columns:var(--pcp-input-panel-height) var(--pcp-swatch-code-gap) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-alpha-col-width);column-gap:3px;align-items:center;margin-bottom:0;padding:var(--pcp-input-row-padding-y) var(--pcp-input-row-padding-x);background:var(--pcp-surface);border-radius:var(--pcp-radius-sm)}.pcp-swatch{grid-column:1;flex-shrink:0;width:var(--pcp-input-panel-height);height:var(--pcp-input-panel-height);--pcp-clip-radius: var(--pcp-radius-sm);position:relative}.pcp-fields{grid-column:3 / 6;display:grid;min-width:0;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:3px}.pcp-fields[data-format=hex] .pcp-field-hex{grid-column:1 / -1;justify-self:center;width:fit-content;align-items:center}.pcp-fields[data-format=hex] .pcp-field-input{width:8ch;min-width:8ch;padding:0 4px}.pcp-fields[data-format=rgb] .pcp-field-r{grid-column:1}.pcp-fields[data-format=rgb] .pcp-field-g{grid-column:2}.pcp-fields[data-format=rgb] .pcp-field-b{grid-column:3}.pcp-fields[data-format=hsl] .pcp-field-h{grid-column:1}.pcp-fields[data-format=hsl] .pcp-field-s{grid-column:2}.pcp-fields[data-format=hsl] .pcp-field-l{grid-column:3}.pcp-fields[data-format=oklch] .pcp-field-l{grid-column:1}.pcp-fields[data-format=oklch] .pcp-field-c{grid-column:2}.pcp-fields[data-format=oklch] .pcp-field-h{grid-column:3}.pcp-alpha-field{grid-column:6;box-sizing:border-box;width:var(--pcp-alpha-col-width);min-width:var(--pcp-alpha-col-width);max-width:var(--pcp-alpha-col-width);align-items:center}.pcp-alpha-field .pcp-field-input{width:100%;min-width:0;padding:0;box-sizing:border-box}.pcp-field{min-width:0;display:flex;flex-direction:column;align-items:stretch;justify-content:center}.pcp-fields[data-format=oklch] .pcp-field-c .pcp-field-input{letter-spacing:-.02em;padding:0 1px}.pcp-fields:not([data-format=hex]) .pcp-field-input,.pcp-alpha-field .pcp-field-input{cursor:ew-resize;touch-action:none}.pcp-field-input[data-scrubbing=true]{color:var(--pcp-text-focus);cursor:ew-resize}.pcp-field-input{width:100%;min-width:0;min-height:var(--pcp-field-input-height);height:var(--pcp-field-input-height);padding:0 2px;font-family:var(--pcp-mono);font-size:var(--pcp-field-value-size);font-weight:500;line-height:var(--pcp-field-input-height);font-variant-numeric:tabular-nums;text-align:center;color:var(--pcp-text-secondary);background:transparent;border:none;border-radius:var(--pcp-field-input-radius);outline:none;box-shadow:none;transition:color .15s var(--pcp-ease-out),background .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-field-input:hover{background:var(--pcp-surface-hover)}}.pcp-field-input:focus{color:var(--pcp-text-focus);background:transparent;border-radius:var(--pcp-field-input-radius);box-shadow:none;outline:none;cursor:text}.pcp-field-input:active{background:var(--pcp-surface-active)}.pcp-history-section[hidden]{display:none}.pcp-history{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:var(--pcp-history-gap);width:100%}.pcp-history-swatch{-moz-appearance:none;appearance:none;-webkit-appearance:none;display:block;width:100%;aspect-ratio:1;height:auto;flex-shrink:0;padding:0;border:none;background:none;--pcp-clip-radius: 4px;cursor:pointer;transition:opacity .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-history-swatch:hover{opacity:.85}}.pcp-history-swatch:active{opacity:.7}@media(prefers-reduced-motion:reduce){.pcp-header-btn,.pcp-tab,.pcp-tabs-pill,.pcp-cursor,.pcp-slider-handle,.pcp-history-swatch{transition:none}.pcp-tab:active,.pcp-header-btn:active{transform:none}}', qi = (e, n) => {
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
}, Jr = {
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
}, Ur = (e) => qi(Jr[e.toLowerCase()], 6), Kr = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, Qr = (e) => {
  let n;
  return (n = e.match(Kr)) ? qi(parseInt(n[1], 16), n[1].length) : void 0;
}, de = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", Be = `${de}%`, Fn = `(?:${de}%|${de})`, ea = `(?:${de}(deg|grad|rad|turn)|${de})`, Le = "\\s*,\\s*", ta = new RegExp(
  `^rgba?\\(\\s*${de}${Le}${de}${Le}${de}\\s*(?:,\\s*${Fn}\\s*)?\\)$`
), na = new RegExp(
  `^rgba?\\(\\s*${Be}${Le}${Be}${Le}${Be}\\s*(?:,\\s*${Fn}\\s*)?\\)$`
), ia = (e) => {
  let n = { mode: "rgb" }, t;
  if (t = e.match(ta))
    t[1] !== void 0 && (n.r = t[1] / 255), t[2] !== void 0 && (n.g = t[2] / 255), t[3] !== void 0 && (n.b = t[3] / 255);
  else if (t = e.match(na))
    t[1] !== void 0 && (n.r = t[1] / 100), t[2] !== void 0 && (n.g = t[2] / 100), t[3] !== void 0 && (n.b = t[3] / 100);
  else
    return;
  return t[4] !== void 0 ? n.alpha = Math.max(0, Math.min(1, t[4] / 100)) : t[5] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[5]))), n;
}, dt = (e, n) => e === void 0 ? void 0 : typeof e != "object" ? Oi(e) : e.mode !== void 0 ? e : n ? { ...e, mode: n } : void 0, F = (e = "rgb") => (n) => (n = dt(n, e)) !== void 0 ? (
  // if the color's mode corresponds to our target mode
  n.mode === e ? (
    // then just return the color
    n
  ) : (
    // otherwise check to see if we have a dedicated
    // converter for the target mode
    B[n.mode][e] ? (
      // and return its result...
      B[n.mode][e](n)
    ) : (
      // ...otherwise pass through RGB as an intermediary step.
      // if the target mode is RGB...
      e === "rgb" ? (
        // just return the RGB
        B[n.mode].rgb(n)
      ) : (
        // otherwise convert color.mode -> RGB -> target_mode
        B.rgb[e](B[n.mode].rgb(n))
      )
    )
  )
) : void 0, B = {}, Ri = {}, pt = [], Fi = {}, ra = (e) => e, k = (e) => (B[e.mode] = {
  ...B[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((n) => {
  B[n] || (B[n] = {}), B[n][e.mode] = e.fromMode[n];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((n) => {
  if (e.ranges[n] === void 0 && (e.ranges[n] = [0, 1]), !e.interpolate[n])
    throw new Error(`Missing interpolator for: ${n}`);
  typeof e.interpolate[n] == "function" && (e.interpolate[n] = {
    use: e.interpolate[n]
  }), e.interpolate[n].fixup || (e.interpolate[n].fixup = ra);
}), Ri[e.mode] = e, (e.parse || []).forEach((n) => {
  aa(n, e.mode);
}), F(e.mode)), xt = (e) => Ri[e], aa = (e, n) => {
  if (typeof e == "string") {
    if (!n)
      throw new Error("'mode' required when 'parser' is a string");
    Fi[e] = n;
  } else typeof e == "function" && pt.indexOf(e) < 0 && pt.push(e);
}, bn = /[^\x00-\x7F]|[a-zA-Z_]/, sa = /[^\x00-\x7F]|[-\w]/, h = {
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
function gn(e) {
  if (v >= e.length)
    return !1;
  let n = e[v];
  if (bn.test(n))
    return !0;
  if (n === "-") {
    if (e.length - v < 2)
      return !1;
    let t = e[v + 1];
    return !!(t === "-" || bn.test(t));
  }
  return !1;
}
const oa = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function Fe(e) {
  let n = "";
  if ((e[v] === "-" || e[v] === "+") && (n += e[v++]), n += nt(e), e[v] === "." && /\d/.test(e[v + 1]) && (n += e[v++] + nt(e)), (e[v] === "e" || e[v] === "E") && ((e[v + 1] === "-" || e[v + 1] === "+") && /\d/.test(e[v + 2]) ? n += e[v++] + e[v++] + nt(e) : /\d/.test(e[v + 1]) && (n += e[v++] + nt(e))), gn(e)) {
    let t = ht(e);
    return t === "deg" || t === "rad" || t === "turn" || t === "grad" ? { type: h.Hue, value: n * oa[t] } : void 0;
  }
  return e[v] === "%" ? (v++, { type: h.Percentage, value: +n }) : { type: h.Number, value: +n };
}
function nt(e) {
  let n = "";
  for (; /\d/.test(e[v]); )
    n += e[v++];
  return n;
}
function ht(e) {
  let n = "";
  for (; v < e.length && sa.test(e[v]); )
    n += e[v++];
  return n;
}
function la(e) {
  let n = ht(e);
  return e[v] === "(" ? (v++, { type: h.Function, value: n }) : n === "none" ? { type: h.None, value: void 0 } : { type: h.Ident, value: n };
}
function ca(e = "") {
  let n = e.trim(), t = [], i;
  for (v = 0; v < n.length; ) {
    if (i = n[v++], i === `
` || i === "	" || i === " ") {
      for (; v < n.length && (n[v] === `
` || n[v] === "	" || n[v] === " "); )
        v++;
      continue;
    }
    if (i === ",")
      return;
    if (i === ")") {
      t.push({ type: h.ParenClose });
      continue;
    }
    if (i === "+") {
      if (v--, tt(n)) {
        t.push(Fe(n));
        continue;
      }
      return;
    }
    if (i === "-") {
      if (v--, tt(n)) {
        t.push(Fe(n));
        continue;
      }
      if (gn(n)) {
        t.push({ type: h.Ident, value: ht(n) });
        continue;
      }
      return;
    }
    if (i === ".") {
      if (v--, tt(n)) {
        t.push(Fe(n));
        continue;
      }
      return;
    }
    if (i === "/") {
      for (; v < n.length && (n[v] === `
` || n[v] === "	" || n[v] === " "); )
        v++;
      let r;
      if (tt(n) && (r = Fe(n), r.type !== h.Hue)) {
        t.push({ type: h.Alpha, value: r });
        continue;
      }
      if (gn(n) && ht(n) === "none") {
        t.push({
          type: h.Alpha,
          value: { type: h.None, value: void 0 }
        });
        continue;
      }
      return;
    }
    if (/\d/.test(i)) {
      v--, t.push(Fe(n));
      continue;
    }
    if (bn.test(i)) {
      v--, t.push(la(n));
      continue;
    }
    return;
  }
  return t;
}
function da(e) {
  e._i = 0;
  let n = e[e._i++];
  if (!n || n.type !== h.Function || n.value !== "color" || (n = e[e._i++], n.type !== h.Ident))
    return;
  const t = Fi[n.value];
  if (!t)
    return;
  const i = { mode: t }, r = Xi(e, !1);
  if (!r)
    return;
  const a = xt(t).channels;
  for (let s = 0, c, p; s < a.length; s++)
    c = r[s], p = a[s], c.type !== h.None && (i[p] = c.type === h.Number ? c.value : c.value / 100, p === "alpha" && (i[p] = Math.max(0, Math.min(1, i[p]))));
  return i;
}
function Xi(e, n) {
  const t = [];
  let i;
  for (; e._i < e.length; ) {
    if (i = e[e._i++], i.type === h.None || i.type === h.Number || i.type === h.Alpha || i.type === h.Percentage || n && i.type === h.Hue) {
      t.push(i);
      continue;
    }
    if (i.type === h.ParenClose) {
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
    return t.length === 3 && t.push({ type: h.None, value: void 0 }), t.every((r) => r.type !== h.Alpha) ? t : void 0;
  }
}
function pa(e, n) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== h.Function)
    return;
  let i = Xi(e, n);
  if (i)
    return i.unshift(t.value), i;
}
const Oi = (e) => {
  if (typeof e != "string")
    return;
  const n = ca(e), t = n ? pa(n, !0) : void 0;
  let i, r = 0, a = pt.length;
  for (; r < a; )
    if ((i = pt[r++](e, t)) !== void 0)
      return i;
  return n ? da(n) : void 0;
};
function ha(e, n) {
  if (!n || n[0] !== "rgb" && n[0] !== "rgba")
    return;
  const t = { mode: "rgb" }, [, i, r, a, s] = n;
  if (!(i.type === h.Hue || r.type === h.Hue || a.type === h.Hue))
    return i.type !== h.None && (t.r = i.type === h.Number ? i.value / 255 : i.value / 100), r.type !== h.None && (t.g = r.type === h.Number ? r.value / 255 : r.value / 100), a.type !== h.None && (t.b = a.type === h.Number ? a.value / 255 : a.value / 100), s.type !== h.None && (t.alpha = Math.min(
      1,
      Math.max(
        0,
        s.type === h.Number ? s.value : s.value / 100
      )
    )), t;
}
const ua = (e) => e === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0, fa = (e, n, t) => e + t * (n - e), ba = (e) => {
  let n = [];
  for (let t = 0; t < e.length - 1; t++) {
    let i = e[t], r = e[t + 1];
    i === void 0 && r === void 0 ? n.push(void 0) : i !== void 0 && r !== void 0 ? n.push([i, r]) : n.push(i !== void 0 ? [i, i] : [r, r]);
  }
  return n;
}, ga = (e) => (n) => {
  let t = ba(n);
  return (i) => {
    let r = i * t.length, a = i >= 1 ? t.length - 1 : Math.max(Math.floor(r), 0), s = t[a];
    return s === void 0 ? void 0 : e(s[0], s[1], r - a);
  };
}, u = ga(fa), S = (e) => {
  let n = !1, t = e.map((i) => i !== void 0 ? (n = !0, i) : 1);
  return n ? t : e;
}, Te = {
  mode: "rgb",
  channels: ["r", "g", "b", "alpha"],
  parse: [
    ha,
    Qr,
    ia,
    Ur,
    ua,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: u,
    g: u,
    b: u,
    alpha: { use: u, fixup: S }
  },
  gamut: !0,
  white: { r: 1, g: 1, b: 1 },
  black: { r: 0, g: 0, b: 0 }
}, Xt = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), ii = (e) => {
  let n = Xt(e.r), t = Xt(e.g), i = Xt(e.b), r = {
    mode: "xyz65",
    x: 0.5766690429101305 * n + 0.1855582379065463 * t + 0.1882286462349947 * i,
    y: 0.297344975250536 * n + 0.6273635662554661 * t + 0.0752914584939979 * i,
    z: 0.0270313613864123 * n + 0.0706888525358272 * t + 0.9913375368376386 * i
  };
  return e.alpha !== void 0 && (r.alpha = e.alpha), r;
}, Ot = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), ri = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = {
    mode: "a98",
    r: Ot(
      e * 2.0415879038107465 - n * 0.5650069742788597 - 0.3447313507783297 * t
    ),
    g: Ot(
      e * -0.9692436362808798 + n * 1.8759675015077206 + 0.0415550574071756 * t
    ),
    b: Ot(
      e * 0.0134442806320312 - n * 0.1183623922310184 + 1.0151749943912058 * t
    )
  };
  return i !== void 0 && (r.alpha = i), r;
}, Dt = (e = 0) => {
  const n = Math.abs(e);
  return n <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((n + 0.055) / 1.055, 2.4);
}, Pe = ({ r: e, g: n, b: t, alpha: i }) => {
  let r = {
    mode: "lrgb",
    r: Dt(e),
    g: Dt(n),
    b: Dt(t)
  };
  return i !== void 0 && (r.alpha = i), r;
}, ve = (e) => {
  let { r: n, g: t, b: i, alpha: r } = Pe(e), a = {
    mode: "xyz65",
    x: 0.4123907992659593 * n + 0.357584339383878 * t + 0.1804807884018343 * i,
    y: 0.2126390058715102 * n + 0.715168678767756 * t + 0.0721923153607337 * i,
    z: 0.0193308187155918 * n + 0.119194779794626 * t + 0.9505321522496607 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, jt = (e = 0) => {
  const n = Math.abs(e);
  return n > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(n, 1 / 2.4) - 0.055) : e * 12.92;
}, Se = ({ r: e, g: n, b: t, alpha: i }, r = "rgb") => {
  let a = {
    mode: r,
    r: jt(e),
    g: jt(n),
    b: jt(t)
  };
  return i !== void 0 && (a.alpha = i), a;
}, xe = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Se({
    r: e * 3.2409699419045226 - n * 1.537383177570094 - 0.4986107602930034 * t,
    g: e * -0.9692436362808796 + n * 1.8759675015077204 + 0.0415550574071756 * t,
    b: e * 0.0556300796969936 - n * 0.2039769588889765 + 1.0569715142428784 * t
  });
  return i !== void 0 && (r.alpha = i), r;
}, ma = {
  ...Te,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => ri(ve(e)),
    xyz65: ri
  },
  toMode: {
    rgb: (e) => xe(ii(e)),
    xyz65: ii
  }
}, H = (e) => (e = e % 360) < 0 ? e + 360 : e, va = (e, n) => e.map((t, i, r) => {
  if (t === void 0)
    return t;
  let a = H(t);
  return i === 0 || e[i - 1] === void 0 ? a : n(a - H(r[i - 1]));
}).reduce((t, i) => !t.length || i === void 0 || t[t.length - 1] === void 0 ? (t.push(i), t) : (t.push(i + t[t.length - 1]), t), []), ie = (e) => va(e, (n) => Math.abs(n) <= 180 ? n : n - 360 * Math.sign(n)), E = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0], xa = Math.PI / 180, ya = 180 / Math.PI;
let ai = E[3] * E[4], si = E[1] * E[4], oi = E[1] * E[2] - E[0] * E[3];
const Ma = ({ r: e, g: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = (oi * t + e * ai - n * si) / (oi + ai - si), a = t - r, s = (E[4] * (n - r) - E[2] * a) / E[3], c = {
    mode: "cubehelix",
    l: r,
    s: r === 0 || r === 1 ? void 0 : Math.sqrt(a * a + s * s) / (E[4] * r * (1 - r))
  };
  return c.s && (c.h = Math.atan2(s, a) * ya - 120), i !== void 0 && (c.alpha = i), c;
}, wa = ({ h: e, s: n, l: t, alpha: i }) => {
  let r = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * xa, t === void 0 && (t = 0);
  let a = n === void 0 ? 0 : n * t * (1 - t), s = Math.cos(e), c = Math.sin(e);
  return r.r = t + a * (E[0] * s + E[1] * c), r.g = t + a * (E[2] * s + E[3] * c), r.b = t + a * (E[4] * s + E[5] * c), i !== void 0 && (r.alpha = i), r;
}, yt = (e, n) => {
  if (e.h === void 0 || n.h === void 0 || !e.s || !n.s)
    return 0;
  let t = H(e.h), i = H(n.h), r = Math.sin((i - t + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * n.s) * r;
}, ka = (e, n) => {
  if (e.h === void 0 || n.h === void 0)
    return 0;
  let t = H(e.h), i = H(n.h);
  return Math.abs(i - t) > 180 ? t - (i - 360 * Math.sign(i - t)) : i - t;
}, Mt = (e, n) => {
  if (e.h === void 0 || n.h === void 0 || !e.c || !n.c)
    return 0;
  let t = H(e.h), i = H(n.h), r = Math.sin((i - t + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * n.c) * r;
}, re = (e) => {
  let n = e.reduce(
    (i, r) => {
      if (r !== void 0) {
        let a = r * Math.PI / 180;
        i.sin += Math.sin(a), i.cos += Math.cos(a);
      }
      return i;
    },
    { sin: 0, cos: 0 }
  ), t = Math.atan2(n.sin, n.cos) * 180 / Math.PI;
  return t < 0 ? 360 + t : t;
}, $a = {
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
    rgb: Ma
  },
  toMode: {
    rgb: wa
  },
  interpolate: {
    h: {
      use: u,
      fixup: ie
    },
    s: u,
    l: u,
    alpha: {
      use: u,
      fixup: S
    }
  },
  difference: {
    h: yt
  },
  average: {
    h: re
  }
}, pe = ({ l: e, a: n, b: t, alpha: i }, r = "lch") => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let a = Math.sqrt(n * n + t * t), s = { mode: r, l: e, c: a };
  return a && (s.h = H(Math.atan2(t, n) * 180 / Math.PI)), i !== void 0 && (s.alpha = i), s;
}, he = ({ l: e, c: n, h: t, alpha: i }, r = "lab") => {
  t === void 0 && (t = 0);
  let a = {
    mode: r,
    l: e,
    a: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    b: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return i !== void 0 && (a.alpha = i), a;
}, Di = Math.pow(29, 3) / Math.pow(3, 3), ji = Math.pow(6, 3) / Math.pow(29, 3), T = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: (1 - 0.3457 - 0.3585) / 0.3585
}, ke = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: (1 - 0.3127 - 0.329) / 0.329
};
let Zt = (e) => Math.pow(e, 3) > ji ? Math.pow(e, 3) : (116 * e - 16) / Di;
const Zi = ({ l: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = (e + 16) / 116, a = n / 500 + r, s = r - t / 200, c = {
    mode: "xyz65",
    x: Zt(a) * ke.X,
    y: Zt(r) * ke.Y,
    z: Zt(s) * ke.Z
  };
  return i !== void 0 && (c.alpha = i), c;
}, wt = (e) => xe(Zi(e)), Bt = (e) => e > ji ? Math.cbrt(e) : (Di * e + 16) / 116, Bi = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Bt(e / ke.X), a = Bt(n / ke.Y), s = Bt(t / ke.Z), c = {
    mode: "lab65",
    l: 116 * a - 16,
    a: 500 * (r - a),
    b: 200 * (a - s)
  };
  return i !== void 0 && (c.alpha = i), c;
}, kt = (e) => {
  let n = Bi(ve(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, ut = 1, Yi = 1, Ye = 26 / 180 * Math.PI, ft = Math.cos(Ye), bt = Math.sin(Ye), Wi = 100 / Math.log(139 / 100), mn = ({ l: e, c: n, h: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = {
    mode: "lab65",
    l: (Math.exp(e * ut / Wi) - 1) / 39e-4
  }, a = (Math.exp(0.0435 * n * Yi * ut) - 1) / 0.075, s = a * Math.cos(t / 180 * Math.PI - Ye), c = a * Math.sin(t / 180 * Math.PI - Ye);
  return r.a = s * ft - c / 0.83 * bt, r.b = s * bt + c / 0.83 * ft, i !== void 0 && (r.alpha = i), r;
}, vn = ({ l: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = n * ft + t * bt, a = 0.83 * (t * ft - n * bt), s = Math.sqrt(r * r + a * a), c = {
    mode: "dlch",
    l: Wi / ut * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * s) / (0.0435 * Yi * ut)
  };
  return c.c && (c.h = H((Math.atan2(a, r) + Ye) / Math.PI * 180)), i !== void 0 && (c.alpha = i), c;
}, li = (e) => mn(pe(e, "dlch")), ci = (e) => he(vn(e), "dlab"), za = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: li,
    rgb: (e) => wt(li(e))
  },
  fromMode: {
    lab65: ci,
    rgb: (e) => ci(kt(e))
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
      fixup: S
    }
  }
}, Aa = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: mn,
    dlab: (e) => he(e, "dlab"),
    rgb: (e) => wt(mn(e))
  },
  fromMode: {
    lab65: vn,
    dlab: (e) => pe(e, "dlch"),
    rgb: (e) => vn(kt(e))
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
      fixup: ie
    },
    alpha: {
      use: u,
      fixup: S
    }
  },
  difference: {
    h: Mt
  },
  average: {
    h: re
  }
};
function _a({ h: e, s: n, i: t, alpha: i }) {
  e = H(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.abs(e / 60 % 2 - 1), a;
  switch (Math.floor(e / 60)) {
    case 0:
      a = {
        r: t * (1 + n * (3 / (2 - r) - 1)),
        g: t * (1 + n * (3 * (1 - r) / (2 - r) - 1)),
        b: t * (1 - n)
      };
      break;
    case 1:
      a = {
        r: t * (1 + n * (3 * (1 - r) / (2 - r) - 1)),
        g: t * (1 + n * (3 / (2 - r) - 1)),
        b: t * (1 - n)
      };
      break;
    case 2:
      a = {
        r: t * (1 - n),
        g: t * (1 + n * (3 / (2 - r) - 1)),
        b: t * (1 + n * (3 * (1 - r) / (2 - r) - 1))
      };
      break;
    case 3:
      a = {
        r: t * (1 - n),
        g: t * (1 + n * (3 * (1 - r) / (2 - r) - 1)),
        b: t * (1 + n * (3 / (2 - r) - 1))
      };
      break;
    case 4:
      a = {
        r: t * (1 + n * (3 * (1 - r) / (2 - r) - 1)),
        g: t * (1 - n),
        b: t * (1 + n * (3 / (2 - r) - 1))
      };
      break;
    case 5:
      a = {
        r: t * (1 + n * (3 / (2 - r) - 1)),
        g: t * (1 - n),
        b: t * (1 + n * (3 * (1 - r) / (2 - r) - 1))
      };
      break;
    default:
      a = { r: t * (1 - n), g: t * (1 - n), b: t * (1 - n) };
  }
  return a.mode = "rgb", i !== void 0 && (a.alpha = i), a;
}
function La({ r: e, g: n, b: t, alpha: i }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.max(e, n, t), a = Math.min(e, n, t), s = {
    mode: "hsi",
    s: e + n + t === 0 ? 0 : 1 - 3 * a / (e + n + t),
    i: (e + n + t) / 3
  };
  return r - a !== 0 && (s.h = (r === e ? (n - t) / (r - a) + (n < t) * 6 : r === n ? (t - e) / (r - a) + 2 : (e - n) / (r - a) + 4) * 60), i !== void 0 && (s.alpha = i), s;
}
const Ta = {
  mode: "hsi",
  toMode: {
    rgb: _a
  },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: {
    rgb: La
  },
  channels: ["h", "s", "i", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: u, fixup: ie },
    s: u,
    i: u,
    alpha: { use: u, fixup: S }
  },
  difference: {
    h: yt
  },
  average: {
    h: re
  }
};
function Pa({ h: e, s: n, l: t, alpha: i }) {
  e = H(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = t + n * (t < 0.5 ? t : 1 - t), a = r - (r - t) * 2 * Math.abs(e / 60 % 2 - 1), s;
  switch (Math.floor(e / 60)) {
    case 0:
      s = { r, g: a, b: 2 * t - r };
      break;
    case 1:
      s = { r: a, g: r, b: 2 * t - r };
      break;
    case 2:
      s = { r: 2 * t - r, g: r, b: a };
      break;
    case 3:
      s = { r: 2 * t - r, g: a, b: r };
      break;
    case 4:
      s = { r: a, g: 2 * t - r, b: r };
      break;
    case 5:
      s = { r, g: 2 * t - r, b: a };
      break;
    default:
      s = { r: 2 * t - r, g: 2 * t - r, b: 2 * t - r };
  }
  return s.mode = "rgb", i !== void 0 && (s.alpha = i), s;
}
function Sa({ r: e, g: n, b: t, alpha: i }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.max(e, n, t), a = Math.min(e, n, t), s = {
    mode: "hsl",
    s: r === a ? 0 : (r - a) / (1 - Math.abs(r + a - 1)),
    l: 0.5 * (r + a)
  };
  return r - a !== 0 && (s.h = (r === e ? (n - t) / (r - a) + (n < t) * 6 : r === n ? (t - e) / (r - a) + 2 : (e - n) / (r - a) + 4) * 60), i !== void 0 && (s.alpha = i), s;
}
const Ea = (e, n) => {
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
}, Ca = new RegExp(
  `^hsla?\\(\\s*${ea}${Le}${Be}${Le}${Be}\\s*(?:,\\s*${Fn}\\s*)?\\)$`
), Ha = (e) => {
  let n = e.match(Ca);
  if (!n) return;
  let t = { mode: "hsl" };
  return n[3] !== void 0 ? t.h = +n[3] : n[1] !== void 0 && n[2] !== void 0 && (t.h = Ea(n[1], n[2])), n[4] !== void 0 && (t.s = Math.min(Math.max(0, n[4] / 100), 1)), n[5] !== void 0 && (t.l = Math.min(Math.max(0, n[5] / 100), 1)), n[6] !== void 0 ? t.alpha = Math.max(0, Math.min(1, n[6] / 100)) : n[7] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[7]))), t;
};
function Na(e, n) {
  if (!n || n[0] !== "hsl" && n[0] !== "hsla")
    return;
  const t = { mode: "hsl" }, [, i, r, a, s] = n;
  if (i.type !== h.None) {
    if (i.type === h.Percentage)
      return;
    t.h = i.value;
  }
  if (r.type !== h.None) {
    if (r.type === h.Hue)
      return;
    t.s = r.value / 100;
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
const Gi = {
  mode: "hsl",
  toMode: {
    rgb: Pa
  },
  fromMode: {
    rgb: Sa
  },
  channels: ["h", "s", "l", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Na, Ha],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: u, fixup: ie },
    s: u,
    l: u,
    alpha: { use: u, fixup: S }
  },
  difference: {
    h: yt
  },
  average: {
    h: re
  }
};
function Vi({ h: e, s: n, v: t, alpha: i }) {
  e = H(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.abs(e / 60 % 2 - 1), a;
  switch (Math.floor(e / 60)) {
    case 0:
      a = { r: t, g: t * (1 - n * r), b: t * (1 - n) };
      break;
    case 1:
      a = { r: t * (1 - n * r), g: t, b: t * (1 - n) };
      break;
    case 2:
      a = { r: t * (1 - n), g: t, b: t * (1 - n * r) };
      break;
    case 3:
      a = { r: t * (1 - n), g: t * (1 - n * r), b: t };
      break;
    case 4:
      a = { r: t * (1 - n * r), g: t * (1 - n), b: t };
      break;
    case 5:
      a = { r: t, g: t * (1 - n), b: t * (1 - n * r) };
      break;
    default:
      a = { r: t * (1 - n), g: t * (1 - n), b: t * (1 - n) };
  }
  return a.mode = "rgb", i !== void 0 && (a.alpha = i), a;
}
function Ji({ r: e, g: n, b: t, alpha: i }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.max(e, n, t), a = Math.min(e, n, t), s = {
    mode: "hsv",
    s: r === 0 ? 0 : 1 - a / r,
    v: r
  };
  return r - a !== 0 && (s.h = (r === e ? (n - t) / (r - a) + (n < t) * 6 : r === n ? (t - e) / (r - a) + 2 : (e - n) / (r - a) + 4) * 60), i !== void 0 && (s.alpha = i), s;
}
const Ui = {
  mode: "hsv",
  toMode: {
    rgb: Vi
  },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: {
    rgb: Ji
  },
  channels: ["h", "s", "v", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: u, fixup: ie },
    s: u,
    v: u,
    alpha: { use: u, fixup: S }
  },
  difference: {
    h: yt
  },
  average: {
    h: re
  }
};
function Ia({ h: e, w: n, b: t, alpha: i }) {
  if (n === void 0 && (n = 0), t === void 0 && (t = 0), n + t > 1) {
    let r = n + t;
    n /= r, t /= r;
  }
  return Vi({
    h: e,
    s: t === 1 ? 1 : 1 - n / (1 - t),
    v: 1 - t,
    alpha: i
  });
}
function qa(e) {
  let n = Ji(e);
  if (n === void 0) return;
  let t = n.s !== void 0 ? n.s : 0, i = n.v !== void 0 ? n.v : 0, r = {
    mode: "hwb",
    w: (1 - t) * i,
    b: 1 - i
  };
  return n.h !== void 0 && (r.h = n.h), n.alpha !== void 0 && (r.alpha = n.alpha), r;
}
function Ra(e, n) {
  if (!n || n[0] !== "hwb")
    return;
  const t = { mode: "hwb" }, [, i, r, a, s] = n;
  if (i.type !== h.None) {
    if (i.type === h.Percentage)
      return;
    t.h = i.value;
  }
  if (r.type !== h.None) {
    if (r.type === h.Hue)
      return;
    t.w = r.value / 100;
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
const Fa = {
  mode: "hwb",
  toMode: {
    rgb: Ia
  },
  fromMode: {
    rgb: qa
  },
  channels: ["h", "w", "b", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Ra],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: u, fixup: ie },
    w: u,
    b: u,
    alpha: { use: u, fixup: S }
  },
  difference: {
    h: ka
  },
  average: {
    h: re
  }
}, Ki = 203, $t = 0.1593017578125, Qi = 78.84375, zt = 0.8359375, At = 18.8515625, _t = 18.6875;
function Yt(e) {
  if (e < 0) return 0;
  const n = Math.pow(e, 1 / Qi);
  return 1e4 * Math.pow(Math.max(0, n - zt) / (At - _t * n), 1 / $t);
}
function Wt(e) {
  if (e < 0) return 0;
  const n = Math.pow(e / 1e4, $t);
  return Math.pow((zt + At * n) / (1 + _t * n), Qi);
}
const Gt = (e) => Math.max(e / Ki, 0), di = ({ i: e, t: n, p: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const r = Yt(
    e + 0.008609037037932761 * n + 0.11102962500302593 * t
  ), a = Yt(
    e - 0.00860903703793275 * n - 0.11102962500302599 * t
  ), s = Yt(
    e + 0.5600313357106791 * n - 0.32062717498731885 * t
  ), c = {
    mode: "xyz65",
    x: Gt(
      2.070152218389422 * r - 1.3263473389671556 * a + 0.2066510476294051 * s
    ),
    y: Gt(
      0.3647385209748074 * r + 0.680566024947227 * a - 0.0453045459220346 * s
    ),
    z: Gt(
      -0.049747207535812 * r - 0.0492609666966138 * a + 1.1880659249923042 * s
    )
  };
  return i !== void 0 && (c.alpha = i), c;
}, Vt = (e = 0) => Math.max(e * Ki, 0), pi = ({ x: e, y: n, z: t, alpha: i }) => {
  const r = Vt(e), a = Vt(n), s = Vt(t), c = Wt(
    0.3592832590121217 * r + 0.6976051147779502 * a - 0.0358915932320289 * s
  ), p = Wt(
    -0.1920808463704995 * r + 1.1004767970374323 * a + 0.0753748658519118 * s
  ), b = Wt(
    0.0070797844607477 * r + 0.0748396662186366 * a + 0.8433265453898765 * s
  ), f = 0.5 * c + 0.5 * p, x = 1.61376953125 * c - 3.323486328125 * p + 1.709716796875 * b, g = 4.378173828125 * c - 4.24560546875 * p - 0.132568359375 * b, M = { mode: "itp", i: f, t: x, p: g };
  return i !== void 0 && (M.alpha = i), M;
}, Xa = {
  mode: "itp",
  channels: ["i", "t", "p", "alpha"],
  parse: ["--ictcp"],
  serialize: "--ictcp",
  toMode: {
    xyz65: di,
    rgb: (e) => xe(di(e))
  },
  fromMode: {
    xyz65: pi,
    rgb: (e) => pi(ve(e))
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
    alpha: { use: u, fixup: S }
  }
}, Oa = 134.03437499999998, Da = 16295499532821565e-27, Jt = (e) => {
  if (e < 0) return 0;
  let n = Math.pow(e / 1e4, $t);
  return Math.pow((zt + At * n) / (1 + _t * n), Oa);
}, Ut = (e = 0) => Math.max(e * 203, 0), er = ({ x: e, y: n, z: t, alpha: i }) => {
  e = Ut(e), n = Ut(n), t = Ut(t);
  let r = 1.15 * e - 0.15 * t, a = 0.66 * n + 0.34 * e, s = Jt(0.41478972 * r + 0.579999 * a + 0.014648 * t), c = Jt(-0.20151 * r + 1.120649 * a + 0.0531008 * t), p = Jt(-0.0166008 * r + 0.2648 * a + 0.6684799 * t), b = (s + c) / 2, f = {
    mode: "jab",
    j: 0.44 * b / (1 - 0.56 * b) - Da,
    a: 3.524 * s - 4.066708 * c + 0.542708 * p,
    b: 0.199076 * s + 1.096799 * c - 1.295875 * p
  };
  return i !== void 0 && (f.alpha = i), f;
}, ja = 134.03437499999998, hi = 16295499532821565e-27, Kt = (e) => {
  if (e < 0) return 0;
  let n = Math.pow(e, 1 / ja);
  return 1e4 * Math.pow((zt - n) / (_t * n - At), 1 / $t);
}, Qt = (e) => e / 203, tr = ({ j: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = (e + hi) / (0.44 + 0.56 * (e + hi)), a = Kt(r + 0.13860504 * n + 0.058047316 * t), s = Kt(r - 0.13860504 * n - 0.058047316 * t), c = Kt(r - 0.096019242 * n - 0.8118919 * t), p = {
    mode: "xyz65",
    x: Qt(
      1.661373024652174 * a - 0.914523081304348 * s + 0.23136208173913045 * c
    ),
    y: Qt(
      -0.3250758611844533 * a + 1.571847026732543 * s - 0.21825383453227928 * c
    ),
    z: Qt(-0.090982811 * a - 0.31272829 * s + 1.5227666 * c)
  };
  return i !== void 0 && (p.alpha = i), p;
}, nr = (e) => {
  let n = er(ve(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, ir = (e) => xe(tr(e)), Za = {
  mode: "jab",
  channels: ["j", "a", "b", "alpha"],
  parse: ["--jzazbz"],
  serialize: "--jzazbz",
  fromMode: {
    rgb: nr,
    xyz65: er
  },
  toMode: {
    rgb: ir,
    xyz65: tr
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
    alpha: { use: u, fixup: S }
  }
}, ui = ({ j: e, a: n, b: t, alpha: i }) => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.sqrt(n * n + t * t), a = {
    mode: "jch",
    j: e,
    c: r
  };
  return r && (a.h = H(Math.atan2(t, n) * 180 / Math.PI)), i !== void 0 && (a.alpha = i), a;
}, fi = ({ j: e, c: n, h: t, alpha: i }) => {
  t === void 0 && (t = 0);
  let r = {
    mode: "jab",
    j: e,
    a: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    b: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return i !== void 0 && (r.alpha = i), r;
}, Ba = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: fi,
    rgb: (e) => ir(fi(e))
  },
  fromMode: {
    rgb: (e) => ui(nr(e)),
    jab: ui
  },
  channels: ["j", "c", "h", "alpha"],
  ranges: {
    j: [0, 0.221],
    c: [0, 0.19],
    h: [0, 360]
  },
  interpolate: {
    h: { use: u, fixup: ie },
    c: u,
    j: u,
    alpha: { use: u, fixup: S }
  },
  difference: {
    h: Mt
  },
  average: {
    h: re
  }
}, Lt = Math.pow(29, 3) / Math.pow(3, 3), Xn = Math.pow(6, 3) / Math.pow(29, 3);
let en = (e) => Math.pow(e, 3) > Xn ? Math.pow(e, 3) : (116 * e - 16) / Lt;
const On = ({ l: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = (e + 16) / 116, a = n / 500 + r, s = r - t / 200, c = {
    mode: "xyz50",
    x: en(a) * T.X,
    y: en(r) * T.Y,
    z: en(s) * T.Z
  };
  return i !== void 0 && (c.alpha = i), c;
}, Ue = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Se({
    r: e * 3.1341359569958707 - n * 1.6173863321612538 - 0.4906619460083532 * t,
    g: e * -0.978795502912089 + n * 1.916254567259524 + 0.03344273116131949 * t,
    b: e * 0.07195537988411677 - n * 0.2289768264158322 + 1.405386058324125 * t
  });
  return i !== void 0 && (r.alpha = i), r;
}, rr = (e) => Ue(On(e)), Ke = (e) => {
  let { r: n, g: t, b: i, alpha: r } = Pe(e), a = {
    mode: "xyz50",
    x: 0.436065742824811 * n + 0.3851514688337912 * t + 0.14307845442264197 * i,
    y: 0.22249319175623702 * n + 0.7168870538238823 * t + 0.06061979053616537 * i,
    z: 0.013923904500943465 * n + 0.09708128566574634 * t + 0.7140993584005155 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, tn = (e) => e > Xn ? Math.cbrt(e) : (Lt * e + 16) / 116, Dn = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = tn(e / T.X), a = tn(n / T.Y), s = tn(t / T.Z), c = {
    mode: "lab",
    l: 116 * a - 16,
    a: 500 * (r - a),
    b: 200 * (a - s)
  };
  return i !== void 0 && (c.alpha = i), c;
}, ar = (e) => {
  let n = Dn(Ke(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
};
function Ya(e, n) {
  if (!n || n[0] !== "lab")
    return;
  const t = { mode: "lab" }, [, i, r, a, s] = n;
  if (!(i.type === h.Hue || r.type === h.Hue || a.type === h.Hue))
    return i.type !== h.None && (t.l = Math.min(Math.max(0, i.value), 100)), r.type !== h.None && (t.a = r.type === h.Number ? r.value : r.value * 125 / 100), a.type !== h.None && (t.b = a.type === h.Number ? a.value : a.value * 125 / 100), s.type !== h.None && (t.alpha = Math.min(
      1,
      Math.max(
        0,
        s.type === h.Number ? s.value : s.value / 100
      )
    )), t;
}
const jn = {
  mode: "lab",
  toMode: {
    xyz50: On,
    rgb: rr
  },
  fromMode: {
    xyz50: Dn,
    rgb: ar
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  },
  parse: [Ya],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: u,
    a: u,
    b: u,
    alpha: { use: u, fixup: S }
  }
}, Wa = {
  ...jn,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: Zi,
    rgb: wt
  },
  fromMode: {
    xyz65: Bi,
    rgb: kt
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function Ga(e, n) {
  if (!n || n[0] !== "lch")
    return;
  const t = { mode: "lch" }, [, i, r, a, s] = n;
  if (i.type !== h.None) {
    if (i.type === h.Hue)
      return;
    t.l = Math.min(Math.max(0, i.value), 100);
  }
  if (r.type !== h.None && (t.c = Math.max(
    0,
    r.type === h.Number ? r.value : r.value * 150 / 100
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
const Zn = {
  mode: "lch",
  toMode: {
    lab: he,
    rgb: (e) => rr(he(e))
  },
  fromMode: {
    rgb: (e) => pe(ar(e)),
    lab: pe
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  },
  parse: [Ga],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: u, fixup: ie },
    c: u,
    l: u,
    alpha: { use: u, fixup: S }
  },
  difference: {
    h: Mt
  },
  average: {
    h: re
  }
}, Va = {
  ...Zn,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => he(e, "lab65"),
    rgb: (e) => wt(he(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => pe(kt(e), "lch65"),
    lab65: (e) => pe(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, sr = ({ l: e, u: n, v: t, alpha: i }) => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.sqrt(n * n + t * t), a = {
    mode: "lchuv",
    l: e,
    c: r
  };
  return r && (a.h = H(Math.atan2(t, n) * 180 / Math.PI)), i !== void 0 && (a.alpha = i), a;
}, or = ({ l: e, c: n, h: t, alpha: i }) => {
  t === void 0 && (t = 0);
  let r = {
    mode: "luv",
    l: e,
    u: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    v: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return i !== void 0 && (r.alpha = i), r;
}, lr = (e, n, t) => 4 * e / (e + 15 * n + 3 * t), cr = (e, n, t) => 9 * n / (e + 15 * n + 3 * t), Ja = lr(T.X, T.Y, T.Z), Ua = cr(T.X, T.Y, T.Z), Ka = (e) => e <= Xn ? Lt * e : 116 * Math.cbrt(e) - 16, xn = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Ka(n / T.Y), a = lr(e, n, t), s = cr(e, n, t);
  !isFinite(a) || !isFinite(s) ? r = a = s = 0 : (a = 13 * r * (a - Ja), s = 13 * r * (s - Ua));
  let c = {
    mode: "luv",
    l: r,
    u: a,
    v: s
  };
  return i !== void 0 && (c.alpha = i), c;
}, Qa = (e, n, t) => 4 * e / (e + 15 * n + 3 * t), es = (e, n, t) => 9 * n / (e + 15 * n + 3 * t), ts = Qa(T.X, T.Y, T.Z), ns = es(T.X, T.Y, T.Z), yn = ({ l: e, u: n, v: t, alpha: i }) => {
  if (e === void 0 && (e = 0), e === 0)
    return { mode: "xyz50", x: 0, y: 0, z: 0 };
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = n / (13 * e) + ts, a = t / (13 * e) + ns, s = T.Y * (e <= 8 ? e / Lt : Math.pow((e + 16) / 116, 3)), c = s * (9 * r) / (4 * a), p = s * (12 - 3 * r - 20 * a) / (4 * a), b = { mode: "xyz50", x: c, y: s, z: p };
  return i !== void 0 && (b.alpha = i), b;
}, is = (e) => sr(xn(Ke(e))), rs = (e) => Ue(yn(or(e))), as = {
  mode: "lchuv",
  toMode: {
    luv: or,
    rgb: rs
  },
  fromMode: {
    rgb: is,
    luv: sr
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
    h: { use: u, fixup: ie },
    c: u,
    l: u,
    alpha: { use: u, fixup: S }
  },
  difference: {
    h: Mt
  },
  average: {
    h: re
  }
}, ss = {
  ...Te,
  mode: "lrgb",
  toMode: {
    rgb: Se
  },
  fromMode: {
    rgb: Pe
  },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, os = {
  mode: "luv",
  toMode: {
    xyz50: yn,
    rgb: (e) => Ue(yn(e))
  },
  fromMode: {
    xyz50: xn,
    rgb: (e) => xn(Ke(e))
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
    alpha: { use: u, fixup: S }
  }
}, dr = ({ r: e, g: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.cbrt(
    0.412221469470763 * e + 0.5363325372617348 * n + 0.0514459932675022 * t
  ), a = Math.cbrt(
    0.2119034958178252 * e + 0.6806995506452344 * n + 0.1073969535369406 * t
  ), s = Math.cbrt(
    0.0883024591900564 * e + 0.2817188391361215 * n + 0.6299787016738222 * t
  ), c = {
    mode: "oklab",
    l: 0.210454268309314 * r + 0.7936177747023054 * a - 0.0040720430116193 * s,
    a: 1.9779985324311684 * r - 2.42859224204858 * a + 0.450593709617411 * s,
    b: 0.0259040424655478 * r + 0.7827717124575296 * a - 0.8086757549230774 * s
  };
  return i !== void 0 && (c.alpha = i), c;
}, Tt = (e) => {
  let n = dr(Pe(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, Qe = ({ l: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.pow(e + 0.3963377773761749 * n + 0.2158037573099136 * t, 3), a = Math.pow(e - 0.1055613458156586 * n - 0.0638541728258133 * t, 3), s = Math.pow(e - 0.0894841775298119 * n - 1.2914855480194092 * t, 3), c = {
    mode: "lrgb",
    r: 4.076741636075957 * r - 3.3077115392580616 * a + 0.2309699031821044 * s,
    g: -1.2684379732850317 * r + 2.6097573492876887 * a - 0.3413193760026573 * s,
    b: -0.0041960761386756 * r - 0.7034186179359362 * a + 1.7076146940746117 * s
  };
  return i !== void 0 && (c.alpha = i), c;
}, Pt = (e) => Se(Qe(e));
function Mn(e) {
  const i = 1.170873786407767;
  return 0.5 * (i * e - 0.206 + Math.sqrt((i * e - 0.206) * (i * e - 0.206) + 4 * 0.03 * i * e));
}
function gt(e) {
  return (e * e + 0.206 * e) / (1.170873786407767 * (e + 0.03));
}
function ls(e, n) {
  let t, i, r, a, s, c, p, b;
  -1.88170328 * e - 0.80936493 * n > 1 ? (t = 1.19086277, i = 1.76576728, r = 0.59662641, a = 0.75515197, s = 0.56771245, c = 4.0767416621, p = -3.3077115913, b = 0.2309699292) : 1.81444104 * e - 1.19445276 * n > 1 ? (t = 0.73956515, i = -0.45954404, r = 0.08285427, a = 0.1254107, s = 0.14503204, c = -1.2684380046, p = 2.6097574011, b = -0.3413193965) : (t = 1.35733652, i = -915799e-8, r = -1.1513021, a = -0.50559606, s = 692167e-8, c = -0.0041960863, p = -0.7034186147, b = 1.707614701);
  let f = t + i * e + r * n + a * e * e + s * e * n, x = 0.3963377774 * e + 0.2158037573 * n, g = -0.1055613458 * e - 0.0638541728 * n, M = -0.0894841775 * e - 1.291485548 * n;
  {
    let A = 1 + f * x, z = 1 + f * g, _ = 1 + f * M, P = A * A * A, L = z * z * z, ae = _ * _ * _, Ee = 3 * x * A * A, Ce = 3 * g * z * z, He = 3 * M * _ * _, Ne = 6 * x * x * A, Ie = 6 * g * g * z, qe = 6 * M * M * _, ye = c * P + p * L + b * ae, ue = c * Ee + p * Ce + b * He, Re = c * Ne + p * Ie + b * qe;
    f = f - ye * ue / (ue * ue - 0.5 * ye * Re);
  }
  return f;
}
function Bn(e, n) {
  let t = ls(e, n), i = Qe({ l: 1, a: t * e, b: t * n }), r = Math.cbrt(1 / Math.max(i.r, i.g, i.b)), a = r * t;
  return [r, a];
}
function cs(e, n, t, i, r, a = null) {
  a || (a = Bn(e, n));
  let s;
  if ((t - r) * a[1] - (a[0] - r) * i <= 0)
    s = a[1] * r / (i * a[0] + a[1] * (r - t));
  else {
    s = a[1] * (r - 1) / (i * (a[0] - 1) + a[1] * (r - t));
    {
      let c = t - r, p = i, b = 0.3963377774 * e + 0.2158037573 * n, f = -0.1055613458 * e - 0.0638541728 * n, x = -0.0894841775 * e - 1.291485548 * n, g = c + p * b, M = c + p * f, A = c + p * x;
      {
        let z = r * (1 - s) + s * t, _ = s * i, P = z + _ * b, L = z + _ * f, ae = z + _ * x, Ee = P * P * P, Ce = L * L * L, He = ae * ae * ae, Ne = 3 * g * P * P, Ie = 3 * M * L * L, qe = 3 * A * ae * ae, ye = 6 * g * g * P, ue = 6 * M * M * L, Re = 6 * A * A * ae, Vn = 4.0767416621 * Ee - 3.3077115913 * Ce + 0.2309699292 * He - 1, Ct = 4.0767416621 * Ne - 3.3077115913 * Ie + 0.2309699292 * qe, Br = 4.0767416621 * ye - 3.3077115913 * ue + 0.2309699292 * Re, Jn = Ct / (Ct * Ct - 0.5 * Vn * Br), Ht = -Vn * Jn, Un = -1.2684380046 * Ee + 2.6097574011 * Ce - 0.3413193965 * He - 1, Nt = -1.2684380046 * Ne + 2.6097574011 * Ie - 0.3413193965 * qe, Yr = -1.2684380046 * ye + 2.6097574011 * ue - 0.3413193965 * Re, Kn = Nt / (Nt * Nt - 0.5 * Un * Yr), It = -Un * Kn, Qn = -0.0041960863 * Ee - 0.7034186147 * Ce + 1.707614701 * He - 1, qt = -0.0041960863 * Ne - 0.7034186147 * Ie + 1.707614701 * qe, Wr = -0.0041960863 * ye - 0.7034186147 * ue + 1.707614701 * Re, ei = qt / (qt * qt - 0.5 * Qn * Wr), Rt = -Qn * ei;
        Ht = Jn >= 0 ? Ht : 1e6, It = Kn >= 0 ? It : 1e6, Rt = ei >= 0 ? Rt : 1e6, s += Math.min(Ht, Math.min(It, Rt));
      }
    }
  }
  return s;
}
function Yn(e, n, t = null) {
  t || (t = Bn(e, n));
  let i = t[0], r = t[1];
  return [r / i, r / (1 - i)];
}
function pr(e, n, t) {
  let i = Bn(n, t), r = cs(n, t, e, 1, e, i), a = Yn(n, t, i), s = 0.11516993 + 1 / (7.4477897 + 4.1590124 * t + n * (-2.19557347 + 1.75198401 * t + n * (-2.13704948 - 10.02301043 * t + n * (-4.24894561 + 5.38770819 * t + 4.69891013 * n)))), c = 0.11239642 + 1 / (1.6132032 - 0.68124379 * t + n * (0.40370612 + 0.90148123 * t + n * (-0.27087943 + 0.6122399 * t + n * (299215e-8 - 0.45399568 * t - 0.14661872 * n)))), p = r / Math.min(e * a[0], (1 - e) * a[1]), b = e * s, f = (1 - e) * c, x = 0.9 * p * Math.sqrt(
    Math.sqrt(
      1 / (1 / (b * b * b * b) + 1 / (f * f * f * f))
    )
  );
  return b = e * 0.4, f = (1 - e) * 0.8, [Math.sqrt(1 / (1 / (b * b) + 1 / (f * f))), x, r];
}
function bi(e) {
  const n = e.l !== void 0 ? e.l : 0, t = e.a !== void 0 ? e.a : 0, i = e.b !== void 0 ? e.b : 0, r = { mode: "okhsl", l: Mn(n) };
  e.alpha !== void 0 && (r.alpha = e.alpha);
  let a = Math.sqrt(t * t + i * i);
  if (!a)
    return r.s = 0, r;
  let [s, c, p] = pr(n, t / a, i / a), b;
  if (a < c) {
    let f = 0, x = 0.8 * s, g = 1 - x / c;
    b = (a - f) / (x + g * (a - f)) * 0.8;
  } else {
    let f = c, x = 0.2 * c * c * 1.25 * 1.25 / s, g = 1 - x / (p - c);
    b = 0.8 + 0.2 * ((a - f) / (x + g * (a - f)));
  }
  return b && (r.s = b, r.h = H(Math.atan2(i, t) * 180 / Math.PI)), r;
}
function gi(e) {
  let n = e.h !== void 0 ? e.h : 0, t = e.s !== void 0 ? e.s : 0, i = e.l !== void 0 ? e.l : 0;
  const r = { mode: "oklab", l: gt(i) };
  if (e.alpha !== void 0 && (r.alpha = e.alpha), !t || i === 1)
    return r.a = r.b = 0, r;
  let a = Math.cos(n / 180 * Math.PI), s = Math.sin(n / 180 * Math.PI), [c, p, b] = pr(r.l, a, s), f, x, g, M;
  t < 0.8 ? (f = 1.25 * t, x = 0, g = 0.8 * c, M = 1 - g / p) : (f = 5 * (t - 0.8), x = p, g = 0.2 * p * p * 1.25 * 1.25 / c, M = 1 - g / (b - p));
  let A = x + f * g / (1 - M * f);
  return r.a = A * a, r.b = A * s, r;
}
const ds = {
  ...Gi,
  mode: "okhsl",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--okhsl"],
  serialize: "--okhsl",
  fromMode: {
    oklab: bi,
    rgb: (e) => bi(Tt(e))
  },
  toMode: {
    oklab: gi,
    rgb: (e) => Pt(gi(e))
  }
};
function mi(e) {
  let n = e.l !== void 0 ? e.l : 0, t = e.a !== void 0 ? e.a : 0, i = e.b !== void 0 ? e.b : 0, r = Math.sqrt(t * t + i * i), a = r ? t / r : 1, s = r ? i / r : 1, [c, p] = Yn(a, s), b = 0.5, f = 1 - b / c, x = p / (r + n * p), g = x * n, M = x * r, A = gt(g), z = M * A / g, _ = Qe({ l: A, a: a * z, b: s * z }), P = Math.cbrt(
    1 / Math.max(_.r, _.g, _.b, 0)
  );
  n = n / P, r = r / P * Mn(n) / n, n = Mn(n);
  const L = {
    mode: "okhsv",
    s: r ? (b + p) * M / (p * b + p * f * M) : 0,
    v: n ? n / g : 0
  };
  return L.s && (L.h = H(Math.atan2(i, t) * 180 / Math.PI)), e.alpha !== void 0 && (L.alpha = e.alpha), L;
}
function vi(e) {
  const n = { mode: "oklab" };
  e.alpha !== void 0 && (n.alpha = e.alpha);
  const t = e.h !== void 0 ? e.h : 0, i = e.s !== void 0 ? e.s : 0, r = e.v !== void 0 ? e.v : 0, a = Math.cos(t / 180 * Math.PI), s = Math.sin(t / 180 * Math.PI), [c, p] = Yn(a, s), b = 0.5, f = 1 - b / c, x = 1 - i * b / (b + p - p * f * i), g = i * p * b / (b + p - p * f * i), M = gt(x), A = g * M / x, z = Qe({
    l: M,
    a: a * A,
    b: s * A
  }), _ = Math.cbrt(
    1 / Math.max(z.r, z.g, z.b, 0)
  ), P = gt(r * x), L = g * P / x;
  return n.l = P * _, n.a = L * a * _, n.b = L * s * _, n;
}
const ps = {
  ...Ui,
  mode: "okhsv",
  channels: ["h", "s", "v", "alpha"],
  parse: ["--okhsv"],
  serialize: "--okhsv",
  fromMode: {
    oklab: mi,
    rgb: (e) => mi(Tt(e))
  },
  toMode: {
    oklab: vi,
    rgb: (e) => Pt(vi(e))
  }
};
function hs(e, n) {
  if (!n || n[0] !== "oklab")
    return;
  const t = { mode: "oklab" }, [, i, r, a, s] = n;
  if (!(i.type === h.Hue || r.type === h.Hue || a.type === h.Hue))
    return i.type !== h.None && (t.l = Math.min(
      Math.max(0, i.type === h.Number ? i.value : i.value / 100),
      1
    )), r.type !== h.None && (t.a = r.type === h.Number ? r.value : r.value * 0.4 / 100), a.type !== h.None && (t.b = a.type === h.Number ? a.value : a.value * 0.4 / 100), s.type !== h.None && (t.alpha = Math.min(
      1,
      Math.max(
        0,
        s.type === h.Number ? s.value : s.value / 100
      )
    )), t;
}
const us = {
  ...jn,
  mode: "oklab",
  toMode: {
    lrgb: Qe,
    rgb: Pt
  },
  fromMode: {
    lrgb: dr,
    rgb: Tt
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [hs],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function fs(e, n) {
  if (!n || n[0] !== "oklch")
    return;
  const t = { mode: "oklch" }, [, i, r, a, s] = n;
  if (i.type !== h.None) {
    if (i.type === h.Hue)
      return;
    t.l = Math.min(
      Math.max(0, i.type === h.Number ? i.value : i.value / 100),
      1
    );
  }
  if (r.type !== h.None && (t.c = Math.max(
    0,
    r.type === h.Number ? r.value : r.value * 0.4 / 100
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
const bs = {
  ...Zn,
  mode: "oklch",
  toMode: {
    oklab: (e) => he(e, "oklab"),
    rgb: (e) => Pt(he(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => pe(Tt(e), "oklch"),
    oklab: (e) => pe(e, "oklch")
  },
  parse: [fs],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, xi = (e) => {
  let { r: n, g: t, b: i, alpha: r } = Pe(e), a = {
    mode: "xyz65",
    x: 0.486570948648216 * n + 0.265667693169093 * t + 0.1982172852343625 * i,
    y: 0.2289745640697487 * n + 0.6917385218365062 * t + 0.079286914093745 * i,
    z: 0 * n + 0.0451133818589026 * t + 1.043944368900976 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, yi = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Se(
    {
      r: e * 2.4934969119414263 - n * 0.9313836179191242 - 0.402710784450717 * t,
      g: e * -0.8294889695615749 + n * 1.7626640603183465 + 0.0236246858419436 * t,
      b: e * 0.0358458302437845 - n * 0.0761723892680418 + 0.9568845240076871 * t
    },
    "p3"
  );
  return i !== void 0 && (r.alpha = i), r;
}, gs = {
  ...Te,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => yi(ve(e)),
    xyz65: yi
  },
  toMode: {
    rgb: (e) => xe(xi(e)),
    xyz65: xi
  }
}, nn = (e) => {
  let n = Math.abs(e);
  return n >= 1 / 512 ? Math.sign(e) * Math.pow(n, 1 / 1.8) : 16 * e;
}, Mi = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = {
    mode: "prophoto",
    r: nn(
      e * 1.3457868816471585 - n * 0.2555720873797946 - 0.0511018649755453 * t
    ),
    g: nn(
      e * -0.5446307051249019 + n * 1.5082477428451466 + 0.0205274474364214 * t
    ),
    b: nn(e * 0 + n * 0 + 1.2119675456389452 * t)
  };
  return i !== void 0 && (r.alpha = i), r;
}, rn = (e = 0) => {
  let n = Math.abs(e);
  return n >= 16 / 512 ? Math.sign(e) * Math.pow(n, 1.8) : e / 16;
}, wi = (e) => {
  let n = rn(e.r), t = rn(e.g), i = rn(e.b), r = {
    mode: "xyz50",
    x: 0.7977666449006423 * n + 0.1351812974005331 * t + 0.0313477341283922 * i,
    y: 0.2880748288194013 * n + 0.7118352342418731 * t + 899369387256e-16 * i,
    z: 0 * n + 0 * t + 0.8251046025104602 * i
  };
  return e.alpha !== void 0 && (r.alpha = e.alpha), r;
}, ms = {
  ...Te,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: Mi,
    rgb: (e) => Mi(Ke(e))
  },
  toMode: {
    xyz50: wi,
    rgb: (e) => Ue(wi(e))
  }
}, ki = 1.09929682680944, vs = 0.018053968510807, an = (e) => {
  const n = Math.abs(e);
  return n > vs ? (Math.sign(e) || 1) * (ki * Math.pow(n, 0.45) - (ki - 1)) : 4.5 * e;
}, $i = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = {
    mode: "rec2020",
    r: an(
      e * 1.7166511879712683 - n * 0.3556707837763925 - 0.2533662813736599 * t
    ),
    g: an(
      e * -0.6666843518324893 + n * 1.6164812366349395 + 0.0157685458139111 * t
    ),
    b: an(
      e * 0.0176398574453108 - n * 0.0427706132578085 + 0.9421031212354739 * t
    )
  };
  return i !== void 0 && (r.alpha = i), r;
}, zi = 1.09929682680944, xs = 0.018053968510807, sn = (e = 0) => {
  let n = Math.abs(e);
  return n < xs * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((n + zi - 1) / zi, 1 / 0.45);
}, Ai = (e) => {
  let n = sn(e.r), t = sn(e.g), i = sn(e.b), r = {
    mode: "xyz65",
    x: 0.6369580483012911 * n + 0.1446169035862083 * t + 0.1688809751641721 * i,
    y: 0.262700212011267 * n + 0.6779980715188708 * t + 0.059301716469862 * i,
    z: 0 * n + 0.0280726930490874 * t + 1.0609850577107909 * i
  };
  return e.alpha !== void 0 && (r.alpha = e.alpha), r;
}, ys = {
  ...Te,
  mode: "rec2020",
  fromMode: {
    xyz65: $i,
    rgb: (e) => $i(ve(e))
  },
  toMode: {
    xyz65: Ai,
    rgb: (e) => xe(Ai(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, be = 0.0037930732552754493, hr = Math.cbrt(be), on = (e) => Math.cbrt(e) - hr, Ms = (e) => {
  const { r: n, g: t, b: i, alpha: r } = Pe(e), a = on(0.3 * n + 0.622 * t + 0.078 * i + be), s = on(0.23 * n + 0.692 * t + 0.078 * i + be), c = on(
    0.2434226892454782 * n + 0.2047674442449682 * t + 0.5518098665095535 * i + be
  ), p = {
    mode: "xyb",
    x: (a - s) / 2,
    y: (a + s) / 2,
    /* Apply default chroma from luma (subtract Y from B) */
    b: c - (a + s) / 2
  };
  return r !== void 0 && (p.alpha = r), p;
}, ln = (e) => Math.pow(e + hr, 3), ws = ({ x: e, y: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const r = ln(e + n) - be, a = ln(n - e) - be, s = ln(t + n) - be, c = Se({
    r: 11.031566904639861 * r - 9.866943908131562 * a - 0.16462299650829934 * s,
    g: -3.2541473810744237 * r + 4.418770377582723 * a - 0.16462299650829934 * s,
    b: -3.6588512867136815 * r + 2.7129230459360922 * a + 1.9459282407775895 * s
  });
  return i !== void 0 && (c.alpha = i), c;
}, ks = {
  mode: "xyb",
  channels: ["x", "y", "b", "alpha"],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: {
    rgb: ws
  },
  fromMode: {
    rgb: Ms
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
    alpha: { use: u, fixup: S }
  }
}, $s = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: Ue,
    lab: Dn
  },
  fromMode: {
    rgb: Ke,
    lab: On
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
    alpha: { use: u, fixup: S }
  }
}, zs = (e) => {
  let { x: n, y: t, z: i, alpha: r } = e;
  n === void 0 && (n = 0), t === void 0 && (t = 0), i === void 0 && (i = 0);
  let a = {
    mode: "xyz50",
    x: 1.0479298208405488 * n + 0.0229467933410191 * t - 0.0501922295431356 * i,
    y: 0.0296278156881593 * n + 0.990434484573249 * t - 0.0170738250293851 * i,
    z: -0.0092430581525912 * n + 0.0150551448965779 * t + 0.7518742899580008 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, As = (e) => {
  let { x: n, y: t, z: i, alpha: r } = e;
  n === void 0 && (n = 0), t === void 0 && (t = 0), i === void 0 && (i = 0);
  let a = {
    mode: "xyz65",
    x: 0.9554734527042182 * n - 0.0230985368742614 * t + 0.0632593086610217 * i,
    y: -0.0283697069632081 * n + 1.0099954580058226 * t + 0.021041398966943 * i,
    z: 0.0123140016883199 * n - 0.0205076964334779 * t + 1.3303659366080753 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, _s = {
  mode: "xyz65",
  toMode: {
    rgb: xe,
    xyz50: zs
  },
  fromMode: {
    rgb: ve,
    xyz50: As
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
    alpha: { use: u, fixup: S }
  }
}, Ls = ({ r: e, g: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const r = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * n + 0.11448223 * t,
    i: 0.59597799 * e - 0.2741761 * n - 0.32180189 * t,
    q: 0.21147017 * e - 0.52261711 * n + 0.31114694 * t
  };
  return i !== void 0 && (r.alpha = i), r;
}, Ts = ({ y: e, i: n, q: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const r = {
    mode: "rgb",
    r: e + 0.95608445 * n + 0.6208885 * t,
    g: e - 0.27137664 * n - 0.6486059 * t,
    b: e - 1.10561724 * n + 1.70250126 * t
  };
  return i !== void 0 && (r.alpha = i), r;
}, Ps = {
  mode: "yiq",
  toMode: {
    rgb: Ts
  },
  fromMode: {
    rgb: Ls
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
    alpha: { use: u, fixup: S }
  }
}, Ss = (e) => Math.max(0, Math.min(1, e || 0)), cn = (e) => Math.round(Ss(e) * 255), Es = F("rgb"), Cs = (e) => {
  if (e === void 0)
    return;
  let n = cn(e.r), t = cn(e.g), i = cn(e.b);
  return "#" + (1 << 24 | n << 16 | t << 8 | i).toString(16).slice(1);
}, Hs = (e) => Cs(Es(e)), ur = F("rgb"), fr = (e) => {
  const n = {
    mode: e.mode,
    r: Math.max(0, Math.min(e.r !== void 0 ? e.r : 0, 1)),
    g: Math.max(0, Math.min(e.g !== void 0 ? e.g : 0, 1)),
    b: Math.max(0, Math.min(e.b !== void 0 ? e.b : 0, 1))
  };
  return e.alpha !== void 0 && (n.alpha = e.alpha), n;
}, Ns = (e) => fr(ur(e)), br = (e) => e !== void 0 && (e.r === void 0 || e.r >= 0 && e.r <= 1) && (e.g === void 0 || e.g >= 0 && e.g <= 1) && (e.b === void 0 || e.b >= 0 && e.b <= 1);
function Is(e) {
  return br(ur(e));
}
function gr(e = "rgb") {
  const { gamut: n } = xt(e);
  if (!n)
    return (i) => !0;
  const t = F(typeof n == "string" ? n : e);
  return (i) => br(t(i));
}
function qs(e = "rgb") {
  const { gamut: n } = xt(e);
  if (!n)
    return (a) => dt(a);
  const t = typeof n == "string" ? n : e, i = F(t), r = gr(t);
  return (a) => {
    const s = dt(a);
    if (!s)
      return;
    const c = i(s);
    if (r(c))
      return s;
    const p = fr(c);
    return s.mode === p.mode ? p : F(s.mode)(p);
  };
}
function Rs(e, n = "lch", t = "rgb") {
  e = dt(e);
  let i = t === "rgb" ? Is : gr(t), r = t === "rgb" ? Ns : qs(t);
  if (e === void 0 || i(e)) return e;
  let a = F(e.mode);
  e = F(n)(e);
  let s = { ...e, c: 0 };
  if (!i(s))
    return a(r(s));
  let c = 0, p = e.c !== void 0 ? e.c : 0, b = xt(n).ranges.c, f = (b[1] - b[0]) / Math.pow(2, 13), x = s.c;
  for (; p - c > f; )
    s.c = c + (p - c) * 0.5, i(s) ? (x = s.c, c = s.c) : p = s.c;
  return a(
    i(s) ? s : { ...s, c: x }
  );
}
k(ma);
k($a);
k(za);
k(Aa);
k(Ta);
k(Gi);
k(Ui);
k(Fa);
k(Xa);
k(Za);
k(Ba);
k(jn);
k(Wa);
k(Zn);
k(Va);
k(as);
k(ss);
k(os);
k(ds);
k(ps);
k(us);
const Wn = k(bs);
k(gs);
k(ms);
k(ys);
k(Te);
k(ks);
k($s);
k(_s);
k(Ps);
const Fs = F("rgb");
function _i(e, n) {
  const t = e.getContext("2d", { willReadFrequently: !0 });
  if (!t) return;
  const { width: i, height: r } = e, a = t.createImageData(i, r), s = a.data;
  for (let c = 0; c < r; c++) {
    const p = 1 - c / (r - 1 || 1);
    for (let b = 0; b < i; b++) {
      const f = b / (i - 1 || 1), x = Fs({ mode: "hsv", h: n, s: f, v: p, alpha: 1 }), g = (c * i + b) * 4;
      if (!x) {
        s[g] = s[g + 1] = s[g + 2] = 0, s[g + 3] = 255;
        continue;
      }
      s[g] = Math.round(dn((x.r ?? 0) * 255)), s[g + 1] = Math.round(dn((x.g ?? 0) * 255)), s[g + 2] = Math.round(dn((x.b ?? 0) * 255)), s[g + 3] = 255;
    }
  }
  t.putImageData(a, 0, 0);
}
function dn(e) {
  return Math.min(255, Math.max(0, e));
}
const et = F("rgb"), St = F("hsv"), Xs = F("hsl"), mr = 2e-3, vr = 4e-3;
function Et(e) {
  return e.c <= mr;
}
function Os(e) {
  const n = St({ mode: "oklch", ...e, alpha: 1 });
  return Math.max(0, (n == null ? void 0 : n.s) ?? 0);
}
function se(e) {
  return Et(e) ? !0 : Os(e) < vr;
}
function mt(e, n) {
  return se(e) ? { ...e, h: j(n) } : e;
}
function q(e) {
  const n = me(e.l ?? 0), t = Math.max(0, e.c ?? 0), i = j(e.h ?? 0), r = me(e.alpha ?? 1), a = Rs({ mode: "oklch", l: n, c: t, h: i, alpha: r }, "rgb"), s = Et({ c: t });
  return {
    l: a.l ?? n,
    c: s ? 0 : a.c ?? 0,
    h: s ? j(i) : i,
    alpha: a.alpha ?? r
  };
}
function ge(e) {
  const n = Oi(e.trim());
  if (!n) return null;
  const t = Wn(n);
  return (t == null ? void 0 : t.l) == null ? null : q({
    l: t.l,
    c: t.c ?? 0,
    h: t.h ?? 0,
    alpha: t.alpha ?? 1
  });
}
function Li(e) {
  const { l: n, c: t, h: i, alpha: r } = e;
  return r >= 1 ? `oklch(${(n * 100).toFixed(1)}% ${t.toFixed(4)} ${i.toFixed(1)})` : `oklch(${(n * 100).toFixed(1)}% ${t.toFixed(4)} ${i.toFixed(1)} / ${Math.round(r * 100)}%)`;
}
function We(e) {
  return Hs(et({ mode: "oklch", ...e })) ?? "#000000";
}
function io(e) {
  const { r: n, g: t, b: i } = Gn(e);
  return e.alpha < 1 ? `rgba(${n}, ${t}, ${i}, ${e.alpha.toFixed(2)})` : `rgb(${n}, ${t}, ${i})`;
}
function Gn(e) {
  const n = et({ mode: "oklch", ...e, alpha: 1 });
  return n ? {
    r: Math.round((n.r ?? 0) * 255),
    g: Math.round((n.g ?? 0) * 255),
    b: Math.round((n.b ?? 0) * 255)
  } : { r: 0, g: 0, b: 0 };
}
function Ds(e) {
  const { r: n, g: t, b: i } = Gn(e);
  return `linear-gradient(to right, rgba(${n}, ${t}, ${i}, 0), rgb(${n}, ${t}, ${i}))`;
}
function js(e) {
  if (se(e)) return j(e.h);
  const n = St({ mode: "oklch", ...e, alpha: 1 });
  return j((n == null ? void 0 : n.h) ?? e.h);
}
function xr(e, n) {
  const t = j(n), i = St({ mode: "oklch", ...e, alpha: 1 }), r = et({
    mode: "hsv",
    h: t,
    s: (i == null ? void 0 : i.s) ?? 0,
    v: (i == null ? void 0 : i.v) ?? 1,
    alpha: 1
  }), a = Wn(
    r ?? { mode: "hsv", h: t, s: (i == null ? void 0 : i.s) ?? 0, v: (i == null ? void 0 : i.v) ?? 1 }
  );
  if ((a == null ? void 0 : a.l) != null) {
    const s = a.c ?? 0;
    return mt(
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
function rt(e, n) {
  switch (n) {
    case "hex":
      return [{ key: "hex", label: "HEX CODE", value: We(e).replace("#", "").toUpperCase() }];
    case "rgb": {
      const t = et({ mode: "oklch", ...e });
      return [
        { key: "r", label: "R", value: String(Math.round((t.r ?? 0) * 255)), min: 0, max: 255 },
        { key: "g", label: "G", value: String(Math.round((t.g ?? 0) * 255)), min: 0, max: 255 },
        { key: "b", label: "B", value: String(Math.round((t.b ?? 0) * 255)), min: 0, max: 255 }
      ];
    }
    case "hsl": {
      const t = Xs({ mode: "oklch", ...e });
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
function Zs(e, n, t) {
  var b, f, x;
  const i = e.alpha, r = rt(e, "hsl"), a = n === "h" ? j(t) : Number(((b = r.find((g) => g.key === "h")) == null ? void 0 : b.value) ?? 0);
  let s = n === "s" ? t : Number(((f = r.find((g) => g.key === "s")) == null ? void 0 : f.value) ?? 0);
  const c = n === "l" ? t : Number(((x = r.find((g) => g.key === "l")) == null ? void 0 : x.value) ?? 0);
  n === "h" && s < 1 && (s = 1);
  const p = ge(`hsl(${a}, ${vt(s)}%, ${vt(c)}%)`);
  return p ? { ...p, alpha: i } : e;
}
function Bs(e, n, t, i) {
  switch (n) {
    case "l": {
      const r = q({ ...e, l: t / 100 });
      return i != null ? mt(r, i) : r;
    }
    case "c": {
      const r = Math.max(0, t), a = r <= mr || se(e) ? i != null ? j(i) : j(e.h) : e.h, s = q({ ...e, c: r, h: a });
      return i != null ? mt(s, i) : s;
    }
    case "h":
      return xr(e, t);
  }
}
function Ti(e, n, t) {
  switch (e) {
    case "hex": {
      const i = (n.hex ?? "").trim().replace(/^#/, "");
      if (!/^[0-9a-fA-F]{3,8}$/.test(i)) return null;
      const r = ge(`#${i}`);
      return r ? pn(r, t.alpha) : null;
    }
    case "rgb": {
      const i = Number(n.r), r = Number(n.g), a = Number(n.b);
      if ([i, r, a].some((c) => Number.isNaN(c))) return null;
      const s = ge(`rgb(${hn(i)}, ${hn(r)}, ${hn(a)})`);
      return s ? pn(s, t.alpha) : null;
    }
    case "hsl": {
      const i = un(n.h), r = un(n.s), a = un(n.l);
      if ([i, r, a].some((c) => Number.isNaN(c))) return null;
      const s = ge(`hsl(${i}, ${vt(r)}%, ${vt(a)}%)`);
      return s ? pn(s, t.alpha) : null;
    }
    case "oklch": {
      const i = Number(n.l);
      let r = Number(n.c), a = Number(n.h);
      return [i, r, a].some((s) => Number.isNaN(s)) ? null : (r <= 0 && (r = 0, Et(t) || (a = t.h)), q({ l: i / 100, c: r, h: a, alpha: t.alpha }));
    }
  }
}
function Ys(e) {
  const n = St({ mode: "oklch", ...e, alpha: 1 });
  return {
    x: me((n == null ? void 0 : n.s) ?? 0),
    y: me(1 - ((n == null ? void 0 : n.v) ?? 0))
  };
}
function Ws(e, n, t, i) {
  const r = me(e), a = me(n), s = j(t), c = Wn(
    et({ mode: "hsv", h: s, s: r, v: 1 - a, alpha: 1 }) ?? {
      mode: "hsv",
      h: s,
      s: r,
      v: 1 - a
    }
  );
  if ((c == null ? void 0 : c.l) != null) {
    const p = c.c ?? 0, b = r < vr || Et({ c: p });
    return q({
      l: c.l,
      c: p,
      h: b ? s : c.h ?? s,
      alpha: i
    });
  }
  return q({ l: 0.5, c: 0, h: s, alpha: i });
}
function pn(e, n) {
  return { ...e, alpha: me(n) };
}
function me(e) {
  return Math.min(1, Math.max(0, e));
}
function hn(e) {
  return Math.min(255, Math.max(0, Math.round(e)));
}
function vt(e) {
  return Math.min(100, Math.max(0, e));
}
function un(e) {
  return Number(e.replace(/%/g, "").trim());
}
function j(e) {
  return Math.min(360, Math.max(0, e));
}
const Pi = {
  l: 0.62,
  c: 0.24,
  h: 303,
  alpha: 0.8
}, yr = "pretty-color-picker-history", Mr = 16, Si = "Pretty Color Picker";
function wr(e, n) {
  return We(e) === We(n) && e.alpha === n.alpha;
}
function Gs() {
  try {
    const e = localStorage.getItem(yr);
    if (!e) return [];
    const n = JSON.parse(e);
    return Array.isArray(n) ? n.slice(0, Mr) : [];
  } catch {
    return [];
  }
}
function Vs(e, n) {
  const t = n.filter((r) => !wr(r, e)), i = [e, ...t].slice(0, Mr);
  try {
    localStorage.setItem(yr, JSON.stringify(i));
  } catch {
  }
  return i;
}
function Ei(e, n) {
  const t = n.getBoundingClientRect(), i = Hi((e.clientX - t.left) / t.width), r = Hi((e.clientY - t.top) / t.height);
  return { x: i, y: r };
}
function Ci(e, n, t = 3) {
  let i = !1, r = !1, a = 0, s = 0;
  const c = (f) => {
    var g;
    if (!i) return;
    if (!r) {
      if (Math.abs(f.clientX - a) < t) return;
      r = !0, e.blur(), e.setAttribute("data-scrubbing", "true"), document.body.style.cursor = "ew-resize", (g = n.onStart) == null || g.call(n, f), s = f.clientX;
      return;
    }
    const x = f.clientX - s;
    s = f.clientX, x !== 0 && n.onDelta(x, f);
  }, p = (f) => {
    var g;
    if (!i) return;
    const x = r;
    if (i = !1, r = !1, f.pointerId != null)
      try {
        e.releasePointerCapture(f.pointerId);
      } catch {
      }
    window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), x && (e.removeAttribute("data-scrubbing"), document.body.style.cursor = "", (g = n.onEnd) == null || g.call(n, f));
  }, b = (f) => {
    f.button === 0 && (i = !0, r = !1, a = f.clientX, s = f.clientX, e.setPointerCapture(f.pointerId), window.addEventListener("pointermove", c), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p));
  };
  return e.addEventListener("pointerdown", b), () => {
    e.removeEventListener("pointerdown", b), window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), e.removeAttribute("data-scrubbing");
  };
}
function fn(e, n, t, i) {
  let r = !1;
  const a = (p) => {
    if (!r) return;
    const { x: b, y: f } = Ei(p, e);
    n(b, f);
  }, s = (p) => {
    if (r) {
      if (r = !1, (p == null ? void 0 : p.pointerId) != null)
        try {
          e.releasePointerCapture(p.pointerId);
        } catch {
        }
      window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", s), t == null || t();
    }
  }, c = (p) => {
    if (p.button !== 0) return;
    r = !0, e.setPointerCapture(p.pointerId), i == null || i();
    const { x: b, y: f } = Ei(p, e);
    n(b, f), window.addEventListener("pointermove", a), window.addEventListener("pointerup", s), window.addEventListener("pointercancel", s);
  };
  return e.addEventListener("pointerdown", c), () => {
    e.removeEventListener("pointerdown", c), window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", s);
  };
}
function Hi(e) {
  return Math.min(1, Math.max(0, e));
}
const it = 48;
function Js(e, n) {
  const t = (i) => {
    if (i.button !== 0 || i.target.closest(".pcp-header-btn, .pcp-tabs")) return;
    i.preventDefault();
    const a = n.getBoundingClientRect(), s = i.clientX - a.left, c = i.clientY - a.top;
    e.dataset.dragging = "true", e.setPointerCapture(i.pointerId);
    const p = (f) => {
      kr(n, f.clientX - s, f.clientY - c);
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
function Ni(e) {
  const n = e.offsetWidth, t = e.offsetHeight;
  kr(
    e,
    (window.innerWidth - n) / 2,
    (window.innerHeight - t) / 2
  );
}
function kr(e, n, t) {
  const i = e.offsetWidth, r = e.offsetHeight, a = window.innerWidth - it, s = window.innerHeight - it, c = it - i, p = it - r;
  e.style.left = `${Math.min(a, Math.max(c, n))}px`, e.style.top = `${Math.min(s, Math.max(p, t))}px`;
}
const Ii = 8, Me = 8;
function Us(e, n = document) {
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
function Ks(e, n) {
  const t = n.getBoundingClientRect(), i = e.offsetWidth, r = e.offsetHeight, a = window.innerWidth, s = window.innerHeight;
  let c = t.bottom + Ii, p = t.left;
  p + i > a - Me && (p = t.right - i), p = Math.min(a - Me - i, Math.max(Me, p)), c + r > s - Me && (c = t.top - r - Ii), c = Math.min(s - Me - r, Math.max(Me, c)), e.style.left = `${p}px`, e.style.top = `${c}px`;
}
const Qs = ["hex", "rgb", "hsl", "oklch"], eo = {
  hex: "HEX",
  rgb: "RGB",
  hsl: "HSL",
  oklch: "OKLCH"
};
var $, y, N, V, $e, C, ze, Ge, R, J, I, U, Ve, Z, Ae, K, Je, X, oe, _e, Q, O, ee, te, le, ce, ne, D, o, $r, zr, Ar, wn, kn, Xe, $n, zn, An, _n, Oe, Y, Ln, _r, De, Tn, Lr, Pn, Tr, Pr, je, Sr, Er, Cr, Hr, at, Sn, En, Nr, Ir, qr, Rr, Fr, Xr, Or, W, Ze, Cn, Hn, fe, we, st, Nn, In, Dr, qn, jr, ot, lt, Rn, ct, G, Zr;
class to extends HTMLElement {
  constructor() {
    super();
    w(this, o);
    w(this, $);
    w(this, y, { ...Pi });
    w(this, N, "hsl");
    w(this, V, Gs());
    w(this, $e, null);
    w(this, C, []);
    w(this, ze);
    w(this, Ge);
    w(this, R);
    w(this, J);
    w(this, I);
    w(this, U);
    w(this, Ve);
    w(this, Z);
    w(this, Ae);
    w(this, K);
    w(this, Je);
    w(this, X);
    w(this, oe);
    w(this, _e);
    w(this, Q, null);
    w(this, O, null);
    w(this, ee, null);
    w(this, te, null);
    w(this, le, null);
    w(this, ce, null);
    w(this, ne, null);
    w(this, D, Pi.h);
    m(this, $, this.attachShadow({ mode: "open" }));
  }
  static get observedAttributes() {
    return ["value", "theme", "label", "header-action", "movable", "mode", "anchor", "open", "history"];
  }
  connectedCallback() {
    d(this, o, zr).call(this), d(this, o, Ar).call(this), d(this, o, $r).call(this), d(this, o, Ze).call(this, !1), d(this, o, zn).call(this), d(this, o, Oe).call(this), this.popoverMode && this.open && requestAnimationFrame(() => d(this, o, Xe).call(this));
  }
  disconnectedCallback() {
    var t;
    l(this, ne) != null && (cancelAnimationFrame(l(this, ne)), m(this, ne, null)), (t = l(this, O)) == null || t.call(this), m(this, O, null), d(this, o, $n).call(this), l(this, C).forEach((i) => i()), m(this, C, []);
  }
  attributeChangedCallback(t, i, r) {
    if (this.isConnected) {
      if (t === "value" && r != null) {
        const a = ge(r);
        a && (m(this, y, a), d(this, o, Ze).call(this, !1));
        return;
      }
      t === "theme" && d(this, o, De).call(this), t === "movable" && d(this, o, Oe).call(this), (t === "mode" || t === "anchor") && (d(this, o, zn).call(this), d(this, o, Oe).call(this)), t === "open" && this.popoverMode && r != null && requestAnimationFrame(() => {
        d(this, o, Xe).call(this), d(this, o, we).call(this);
      }), t === "history" && d(this, o, An).call(this), t === "header-action" && d(this, o, Lr).call(this), t === "label" && d(this, o, _n).call(this);
    }
  }
  get value() {
    return Li(l(this, y));
  }
  set value(t) {
    const i = ge(t);
    i && (m(this, y, i), d(this, o, Ze).call(this));
  }
  get color() {
    return { ...l(this, y) };
  }
  set color(t) {
    m(this, y, q(t)), d(this, o, Ze).call(this);
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
    return t === null ? Si : t;
  }
  set label(t) {
    t === Si ? this.removeAttribute("label") : this.setAttribute("label", t);
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
          d(this, o, Xe).call(this), d(this, o, we).call(this);
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
$ = new WeakMap(), y = new WeakMap(), N = new WeakMap(), V = new WeakMap(), $e = new WeakMap(), C = new WeakMap(), ze = new WeakMap(), Ge = new WeakMap(), R = new WeakMap(), J = new WeakMap(), I = new WeakMap(), U = new WeakMap(), Ve = new WeakMap(), Z = new WeakMap(), Ae = new WeakMap(), K = new WeakMap(), Je = new WeakMap(), X = new WeakMap(), oe = new WeakMap(), _e = new WeakMap(), Q = new WeakMap(), O = new WeakMap(), ee = new WeakMap(), te = new WeakMap(), le = new WeakMap(), ce = new WeakMap(), ne = new WeakMap(), D = new WeakMap(), o = new WeakSet(), $r = function() {
  const t = this.getAttribute("value");
  if (t) {
    const i = ge(t);
    i && m(this, y, i);
  }
}, zr = function() {
  const t = this.headerAction === "none" ? "" : this.headerAction === "theme" ? `<button type="button" class="pcp-header-btn pcp-theme-toggle" aria-label="Switch to light mode">${ni}</button>` : `<button type="button" class="pcp-header-btn pcp-close" aria-label="Close">
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
      <style>${Vr}</style>
      <div class="pcp" part="container">
        <header class="pcp-header">
          <div class="pcp-tabs" role="tablist" part="tabs">
            <div class="pcp-tabs-pill"></div>
            ${Qs.map((i) => `<button type="button" class="pcp-tab" role="tab" data-format="${i}">${eo[i]}</button>`).join("")}
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
    `, m(this, ze, l(this, $).querySelector(".pcp-plane")), m(this, Ge, l(this, $).querySelector(".pcp-plane-wrap")), m(this, R, l(this, $).querySelector(".pcp-cursor")), m(this, J, l(this, $).querySelector(".pcp-hue-row")), m(this, I, l(this, J).querySelector(".pcp-slider-handle")), m(this, U, l(this, $).querySelector(".pcp-alpha-row")), m(this, Ve, l(this, $).querySelector(".pcp-slider-fill-alpha")), m(this, Z, l(this, U).querySelector(".pcp-slider-handle")), m(this, Ae, l(this, $).querySelector(".pcp-tabs-pill")), m(this, K, l(this, $).querySelector(".pcp-fields")), m(this, Je, l(this, $).querySelector(".pcp-swatch-fill")), m(this, X, l(this, $).querySelector(".pcp-alpha-input")), m(this, _e, l(this, $).querySelector(".pcp-history-section")), m(this, oe, l(this, $).querySelector(".pcp-history")), d(this, o, _n).call(this), m(this, Q, l(this, $).querySelector(".pcp-theme-toggle")), d(this, o, De).call(this);
}, Ar = function() {
  d(this, o, Tn).call(this), l(this, C).push(
    fn(
      l(this, Ge),
      (t, i) => d(this, o, Sr).call(this, t, i),
      () => d(this, o, G).call(this),
      () => d(this, o, Y).call(this)
    )
  ), l(this, C).push(
    fn(
      l(this, J),
      (t) => d(this, o, Er).call(this, t),
      () => d(this, o, G).call(this),
      () => d(this, o, Y).call(this)
    )
  ), l(this, C).push(
    fn(
      l(this, U),
      (t) => d(this, o, Cr).call(this, t),
      () => d(this, o, G).call(this),
      () => d(this, o, Y).call(this)
    )
  ), l(this, C).push(d(this, o, Pn).call(this, l(this, J))), l(this, C).push(d(this, o, Pn).call(this, l(this, U))), l(this, $).querySelectorAll(".pcp-tab").forEach((t) => {
    t.addEventListener("click", () => {
      const i = t.dataset.format;
      i && i !== l(this, N) && (m(this, N, i), d(this, o, we).call(this), d(this, o, Rn).call(this), d(this, o, lt).call(this), d(this, o, st).call(this));
    });
  }), l(this, X).addEventListener("focus", () => d(this, o, Y).call(this)), l(this, X).addEventListener("change", () => d(this, o, Sn).call(this)), l(this, X).addEventListener("keydown", (t) => {
    t.key === "Enter" && d(this, o, Sn).call(this);
  }), l(this, C).push(d(this, o, Xr).call(this)), d(this, o, Oe).call(this), d(this, o, An).call(this);
}, wn = function() {
  this.popoverMode && this.hide(), this.dispatchEvent(new CustomEvent("close", { bubbles: !0, composed: !0 }));
}, kn = function() {
  const t = this.anchor;
  return t ? Us(t, this.ownerDocument) : null;
}, Xe = function() {
  m(this, le, d(this, o, kn).call(this)), l(this, le) ? (Ks(this, l(this, le)), this.setAttribute("data-positioned", "")) : (this.movable || this.popoverMode) && (Ni(this), this.setAttribute("data-positioned", ""));
}, $n = function() {
  if (l(this, te)) {
    const t = l(this, C).indexOf(l(this, te));
    t >= 0 && l(this, C).splice(t, 1), l(this, te).call(this), m(this, te, null);
  }
  m(this, le, null);
}, zn = function() {
  if (d(this, o, $n).call(this), !this.popoverMode) {
    this.removeAttribute("open"), this.movable || (this.style.position = "", this.style.left = "", this.style.top = "", this.style.zIndex = "");
    return;
  }
  this.movable || (this.style.position = "fixed", this.style.zIndex = "1000");
  const t = d(this, o, kn).call(this);
  m(this, le, t);
  const i = (c) => {
    c.preventDefault(), c.stopPropagation(), this.toggle();
  }, r = (c) => {
    if (!this.open) return;
    const p = c.composedPath();
    p.includes(this) || t && p.includes(t) || this.hide();
  }, a = (c) => {
    c.key === "Escape" && this.open && (c.preventDefault(), d(this, o, wn).call(this));
  }, s = () => {
    this.open && d(this, o, Xe).call(this);
  };
  t == null || t.addEventListener("click", i), document.addEventListener("pointerdown", r, !0), document.addEventListener("keydown", a), window.addEventListener("resize", s), window.addEventListener("scroll", s, !0), m(this, te, () => {
    t == null || t.removeEventListener("click", i), document.removeEventListener("pointerdown", r, !0), document.removeEventListener("keydown", a), window.removeEventListener("resize", s), window.removeEventListener("scroll", s, !0);
  }), l(this, C).push(l(this, te));
}, An = function() {
  if (!this.history) {
    l(this, _e).hidden = !0, l(this, oe).innerHTML = "";
    return;
  }
  d(this, o, ct).call(this);
}, _n = function() {
  if (this.getAttribute("label") === "") {
    this.removeAttribute("aria-label");
    return;
  }
  this.setAttribute("aria-label", this.label);
}, Oe = function() {
  if (l(this, ee)) {
    const r = l(this, C).indexOf(l(this, ee));
    r >= 0 && l(this, C).splice(r, 1), l(this, ee).call(this), m(this, ee, null);
  }
  if (!(this.movable || this.popoverMode)) {
    this.popoverMode || (this.style.position = "", this.style.left = "", this.style.top = "", this.style.zIndex = ""), this.removeAttribute("data-positioned");
    return;
  }
  !this.popoverMode && !this.hasAttribute("data-positioned") && requestAnimationFrame(() => {
    Ni(this), this.setAttribute("data-positioned", "");
  });
  const i = l(this, $).querySelector(".pcp-header");
  i && (m(this, ee, Js(i, this)), l(this, C).push(l(this, ee)));
}, Y = function() {
  m(this, $e, { ...l(this, y) });
}, Ln = function() {
  return this.theme === "light" ? "light" : this.theme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}, _r = function() {
  const t = d(this, o, Ln).call(this) === "light" ? "dark" : "light";
  this.theme = t, d(this, o, De).call(this);
  const i = { theme: t };
  this.dispatchEvent(
    new CustomEvent("themechange", {
      detail: i,
      bubbles: !0,
      composed: !0
    })
  );
}, De = function() {
  if (!l(this, Q)) return;
  const t = d(this, o, Ln).call(this) === "light";
  l(this, Q).innerHTML = t ? Gr : ni, l(this, Q).setAttribute(
    "aria-label",
    t ? "Switch to dark mode" : "Switch to light mode"
  );
}, Tn = function() {
  var r;
  (r = l(this, O)) == null || r.call(this), m(this, O, null);
  const t = l(this, $).querySelector(".pcp-close");
  if (t) {
    const a = () => d(this, o, wn).call(this);
    t.addEventListener("click", a), m(this, O, () => t.removeEventListener("click", a));
    return;
  }
  const i = l(this, $).querySelector(".pcp-theme-toggle");
  if (i) {
    const a = () => d(this, o, _r).call(this);
    i.addEventListener("click", a), m(this, O, () => i.removeEventListener("click", a));
  }
}, Lr = function() {
  var r, a;
  (r = l(this, O)) == null || r.call(this), m(this, O, null);
  const t = l(this, $).querySelector(".pcp-header");
  if (!t || ((a = t.querySelector(".pcp-header-btn")) == null || a.remove(), m(this, Q, null), this.headerAction === "none")) return;
  const i = document.createElement("button");
  i.type = "button", i.className = `pcp-header-btn ${this.headerAction === "theme" ? "pcp-theme-toggle" : "pcp-close"}`, t.appendChild(i), this.headerAction === "theme" ? (m(this, Q, i), d(this, o, De).call(this)) : (i.setAttribute("aria-label", "Close"), i.innerHTML = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M4.25 4.25L11.75 11.75M11.75 4.25L4.25 11.75"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>`), d(this, o, Tn).call(this);
}, Pn = function(t) {
  const i = () => {
    t.dataset.active = "true";
  }, r = () => {
    const a = t.querySelector(".pcp-slider-handle");
    a != null && a.hasAttribute("data-dragging") || delete t.dataset.active;
  };
  return t.addEventListener("pointerenter", i), t.addEventListener("pointerleave", r), () => {
    t.removeEventListener("pointerenter", i), t.removeEventListener("pointerleave", r);
  };
}, Tr = function(t, i) {
  const r = Math.max(0, Math.min(1, i)) * 100;
  t.style.left = `${r}%`;
}, Pr = function(t, i) {
  const r = t.style.left.match(/([\d.]+)%/);
  return r ? parseFloat(r[1]) / 100 : i;
}, je = function(t, i, r) {
  d(this, o, Tr).call(this, t, i);
}, Sr = function(t, i) {
  l(this, R).dataset.dragging = "true";
  const r = d(this, o, fe).call(this);
  d(this, o, W).call(this, Ws(t, i, r, l(this, y).alpha), !0, {
    refreshPlane: !1,
    refreshCursor: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  }), d(this, o, Nn).call(this, t, i);
}, Er = function(t) {
  l(this, J).dataset.active = "true", l(this, I).dataset.dragging = "true", m(this, D, t * 360), d(this, o, je).call(this, l(this, I), t, "hue"), d(this, o, W).call(this, xr(l(this, y), l(this, D)), !0, {
    refreshPlane: !0,
    refreshCursor: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  });
}, Cr = function(t) {
  l(this, U).dataset.active = "true", l(this, Z).dataset.dragging = "true", d(this, o, W).call(this, q({ ...l(this, y), alpha: t }), !0, {
    refreshPlane: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  }), d(this, o, je).call(this, l(this, Z), t, "alpha");
}, Hr = function() {
  const i = l(this, I).style.left.match(/([\d.]+)%/);
  return i ? parseFloat(i[1]) / 100 * 360 : l(this, D);
}, at = function() {
  se(l(this, y)) || m(this, D, js(l(this, y)));
}, Sn = function() {
  const t = l(this, X).value.replace(/%/g, "").trim(), i = Number(t);
  if (Number.isNaN(i)) {
    d(this, o, ot).call(this);
    return;
  }
  d(this, o, W).call(this, q({ ...l(this, y), alpha: i / 100 }), !0), d(this, o, G).call(this);
}, En = function(t, i) {
  d(this, o, Nr).call(this, { [t]: i }, !0);
}, Nr = function(t, i = !0) {
  const r = {};
  rt(l(this, y), l(this, N)).forEach((s) => {
    r[s.key] = t[s.key] ?? s.value;
  });
  const a = Ti(l(this, N), r, l(this, y));
  a && (d(this, o, W).call(this, a, !0), i && d(this, o, G).call(this));
}, Ir = function(t, i) {
  if (t.scrubStep != null)
    return i ? t.scrubStep * 0.1 : t.scrubStep;
  const r = t.min ?? 0, s = (t.max ?? 100) - r, c = t.step != null && t.step < 1 ? s / 120 : t.step ?? 1;
  return i ? c * 0.1 : c;
}, qr = function(t, i) {
  return t.step != null && t.step < 1 ? i.toFixed(3) : String(Math.round(i));
}, Rr = function(t, i, r, a) {
  const s = l(this, K).querySelector(
    `.pcp-field-input[data-key="${t}"]`
  ), c = rt(l(this, y), l(this, N)), p = c.find((P) => P.key === t);
  if (!p) return;
  const b = i.min ?? 0, f = i.max ?? 100, x = d(this, o, Ir).call(this, i, a), g = Number(s ? s.value.replace(/%/g, "").trim() : p.value);
  let M = g + r * x;
  if (i.step != null && i.step < 1 ? (M = Math.round(M / i.step) * i.step, M = Math.min(f, Math.max(b, M))) : M = Math.min(f, Math.max(b, Math.round(M))), Math.abs(M - g) < (i.step != null && i.step < 1 ? i.step / 2 : 0.5)) return;
  const A = d(this, o, qr).call(this, i, M);
  let z = null;
  if (l(this, N) === "hsl" && (t === "h" || t === "s" || t === "l"))
    z = Zs(l(this, y), t, M);
  else if (l(this, N) === "oklch" && (t === "l" || t === "c" || t === "h"))
    z = Bs(l(this, y), t, M, l(this, D));
  else {
    const P = {};
    c.forEach((L) => {
      P[L.key] = L.key === t ? A : L.value;
    }), z = Ti(l(this, N), P, l(this, y));
  }
  if (!z) return;
  t === "h" && m(this, D, j(M));
  const _ = t === "h" || l(this, N) === "oklch" && (t === "c" || t === "l");
  d(this, o, W).call(this, z, !0, {
    refreshFields: !1,
    refreshCursor: !0,
    refreshSliders: !0,
    syncPlaneHue: !_
  }), s && (s.value = A);
}, Fr = function(t, i) {
  const r = i ? 0.05 : 0.5, a = l(this, y).alpha * 100;
  let s = a + t * r;
  if (s = Math.min(100, Math.max(0, i ? s : Math.round(s))), Math.abs(s - a) < 0.01) return;
  const c = s / 100;
  d(this, o, W).call(this, q({ ...l(this, y), alpha: c }), !0, {
    refreshFields: !1,
    refreshPlane: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  }), l(this, X).value = `${Math.round(s)}%`;
}, Xr = function() {
  return Ci(l(this, X), {
    onStart: () => d(this, o, Y).call(this),
    onDelta: (t, i) => d(this, o, Fr).call(this, t, i.shiftKey),
    onEnd: () => {
      d(this, o, G).call(this), d(this, o, ot).call(this);
    }
  });
}, Or = function(t) {
  l(this, N) !== "hex" && l(this, K).querySelectorAll(".pcp-field-input").forEach((i) => {
    const r = i, a = r.dataset.key;
    if (!a) return;
    const s = t.find((c) => c.key === a);
    !s || s.min == null || s.max == null || Ci(r, {
      onStart: () => d(this, o, Y).call(this),
      onDelta: (c, p) => d(this, o, Rr).call(this, a, s, c, p.shiftKey),
      onEnd: () => {
        d(this, o, G).call(this), d(this, o, lt).call(this);
      }
    });
  });
}, W = function(t, i = !0, r) {
  let a = q(t);
  se(a) && (a = mt(a, l(this, D))), m(this, y, a), !(l(this, R).hasAttribute("data-dragging") || l(this, I).hasAttribute("data-dragging")) && (r == null ? void 0 : r.syncPlaneHue) !== !1 && !se(a) && d(this, o, at).call(this), d(this, o, Cn).call(this, i, r);
}, Ze = function(t = !0) {
  se(l(this, y)) || d(this, o, at).call(this), d(this, o, we).call(this), d(this, o, Rn).call(this), d(this, o, Cn).call(this, t), d(this, o, ct).call(this);
}, Cn = function(t, i) {
  (i == null ? void 0 : i.refreshFields) !== !1 && d(this, o, lt).call(this), d(this, o, jr).call(this), (i == null ? void 0 : i.refreshSliders) !== !1 && d(this, o, In).call(this), (i == null ? void 0 : i.refreshCursor) !== !1 && !l(this, R).hasAttribute("data-dragging") && d(this, o, st).call(this), (i == null ? void 0 : i.refreshPlane) === !0 ? d(this, o, Hn).call(this) : (i == null ? void 0 : i.refreshPlane) !== !1 && !l(this, R).hasAttribute("data-dragging") && !l(this, I).hasAttribute("data-dragging") && l(this, ce) !== d(this, o, fe).call(this) && d(this, o, Hn).call(this), t && d(this, o, Zr).call(this);
}, Hn = function() {
  l(this, ne) == null && m(this, ne, requestAnimationFrame(() => {
    m(this, ne, null);
    const t = d(this, o, fe).call(this);
    l(this, ce) !== t && (_i(l(this, ze), t), m(this, ce, t));
  }));
}, fe = function() {
  return l(this, I).hasAttribute("data-dragging") ? d(this, o, Hr).call(this) : l(this, D);
}, we = function() {
  const t = d(this, o, fe).call(this);
  _i(l(this, ze), t), m(this, ce, t);
}, st = function() {
  const { x: t, y: i } = Ys(l(this, y));
  d(this, o, Nn).call(this, t, i);
}, Nn = function(t, i) {
  l(this, R).style.left = `${t * 100}%`, l(this, R).style.top = `${i * 100}%`;
}, In = function() {
  const i = d(this, o, fe).call(this) / 360;
  d(this, o, je).call(this, l(this, I), i, "hue");
  const r = l(this, Z).hasAttribute("data-dragging") ? d(this, o, Pr).call(this, l(this, Z), l(this, y).alpha) : l(this, y).alpha;
  d(this, o, je).call(this, l(this, Z), r, "alpha"), d(this, o, Dr).call(this);
}, Dr = function() {
  l(this, Ve).style.setProperty("--pcp-alpha-gradient", Ds(l(this, y)));
}, qn = function(t, i) {
  const { r, g: a, b: s } = Gn(i);
  t.style.setProperty("--swatch-solid", `rgb(${r}, ${a}, ${s})`), t.style.setProperty("--swatch-alpha", `rgba(${r}, ${a}, ${s}, ${i.alpha})`);
}, jr = function() {
  d(this, o, qn).call(this, l(this, Je), l(this, y));
}, ot = function() {
  l(this, X).value = `${Math.round(l(this, y).alpha * 100)}%`;
}, lt = function() {
  const t = rt(l(this, y), l(this, N));
  l(this, K).dataset.format = l(this, N), l(this, K).innerHTML = t.map(
    (i) => `
        <div class="pcp-field pcp-field-${i.key}">
          <input
            class="pcp-field-input"
            type="text"
            data-key="${i.key}"
            value="${i.value}"
            aria-label="${i.label}"
          />
        </div>
      `
  ).join(""), l(this, K).querySelectorAll(".pcp-field-input").forEach((i) => {
    const r = i, a = r.dataset.key;
    r.addEventListener("focus", () => d(this, o, Y).call(this)), r.addEventListener("change", () => d(this, o, En).call(this, a, r.value)), r.addEventListener("keydown", (s) => {
      s.key === "Enter" && d(this, o, En).call(this, a, r.value);
    });
  }), d(this, o, Or).call(this, t), d(this, o, ot).call(this);
}, Rn = function() {
  const t = l(this, $).querySelectorAll(".pcp-tab");
  let i = null;
  if (t.forEach((r) => {
    const a = r.dataset.format === l(this, N);
    r.setAttribute("data-active", String(a)), r.setAttribute("aria-selected", String(a)), a && (i = r);
  }), i) {
    const r = i, a = r.offsetLeft, s = r.offsetWidth;
    l(this, Ae).style.left = `${a}px`, l(this, Ae).style.width = `${s}px`;
  }
}, ct = function() {
  this.history && (l(this, _e).hidden = l(this, V).length === 0, l(this, oe).innerHTML = l(this, V).map((t, i) => `
          <button type="button" class="pcp-history-swatch pcp-clip" data-index="${i}" aria-label="Color ${We(t)}">
            <span class="pcp-swatch-fill" data-history-fill="${i}"></span>
          </button>
        `).join(""), l(this, oe).querySelectorAll("[data-history-fill]").forEach((t) => {
    const i = Number(t.dataset.historyFill), r = l(this, V)[i];
    r && d(this, o, qn).call(this, t, r);
  }), l(this, oe).querySelectorAll(".pcp-history-swatch").forEach((t) => {
    t.addEventListener("click", () => {
      const i = Number(t.dataset.index), r = l(this, V)[i];
      r && (d(this, o, Y).call(this), d(this, o, W).call(this, { ...r }, !0, { refreshFields: !0 }), d(this, o, G).call(this));
    });
  }));
}, G = function() {
  const t = l(this, R).hasAttribute("data-dragging"), i = l(this, I).hasAttribute("data-dragging");
  delete l(this, R).dataset.dragging, delete l(this, I).dataset.dragging, delete l(this, Z).dataset.dragging, delete l(this, J).dataset.active, delete l(this, U).dataset.active, (t || i) && (se(l(this, y)) || d(this, o, at).call(this), d(this, o, In).call(this), d(this, o, st).call(this), l(this, ce) !== d(this, o, fe).call(this) && d(this, o, we).call(this));
  const r = l(this, $e);
  m(this, $e, null), this.history && r && !wr(r, l(this, y)) && (m(this, V, Vs(r, l(this, V))), d(this, o, ct).call(this));
}, Zr = function() {
  const t = {
    color: { ...l(this, y) },
    css: Li(l(this, y)),
    hex: We(l(this, y))
  };
  this.dispatchEvent(
    new CustomEvent("change", {
      detail: t,
      bubbles: !0,
      composed: !0
    })
  );
};
customElements.get("pretty-color-picker") || customElements.define("pretty-color-picker", to);
export {
  Pi as DEFAULT_COLOR,
  Si as DEFAULT_PICKER_LABEL,
  to as PrettyColorPicker,
  rt as formatFieldsFor,
  q as normalizeOklch,
  ge as oklchFromCss,
  Li as oklchToCss,
  We as oklchToHex,
  io as oklchToRgbString,
  Ti as parseFormatFields
};
