var ii = (e) => {
  throw TypeError(e);
};
var Ot = (e, n, t) => n.has(e) || ii("Cannot " + t);
var l = (e, n, t) => (Ot(e, n, "read from private field"), t ? t.call(e) : n.get(e)), w = (e, n, t) => n.has(e) ? ii("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(e) : n.set(e, t), g = (e, n, t, i) => (Ot(e, n, "write to private field"), i ? i.call(e, t) : n.set(e, t), t), d = (e, n, t) => (Ot(e, n, "access private method"), t);
const ri = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z" opacity="0.2"/><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/></svg>', Qr = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z" opacity="0.2"/><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"/></svg>', ea = '@import"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap";:host{--pcp-width: 260px;--pcp-radius-sm: 4px;--pcp-radius: 6px;--pcp-radius-lg: 9px;--pcp-panel-padding: 9px;--pcp-section-gap: 6px;--pcp-history-cols: 8;--pcp-history-swatch-size: calc( (var(--pcp-width) - 2 * var(--pcp-panel-padding) - 7 * var(--pcp-history-gap)) / var(--pcp-history-cols) );--pcp-control-height: var(--pcp-history-swatch-size);--pcp-tab-row-height: 32px;--pcp-field-label-size: 10px;--pcp-field-label-line: 12px;--pcp-field-label-gap: 3px;--pcp-field-value-size: 11px;--pcp-field-value-line: 15px;--pcp-field-input-height: 20px;--pcp-input-panel-height: calc( var(--pcp-field-label-line) + var(--pcp-field-label-gap) + var(--pcp-field-input-height) );--pcp-input-row-padding-y: 6px;--pcp-input-row-padding-x: 7px;--pcp-alpha-col-width: 4ch;--pcp-value-col-width: minmax(0, 1fr);--pcp-swatch-code-gap: 8px;--pcp-history-gap: 6px;--pcp-checker-size: 6px;--pcp-slider-handle-height: calc(var(--pcp-control-height) * 20 / 36);--pcp-field-input-radius: var(--pcp-radius-sm);--pcp-icon-button-size: 26px;--pcp-icon-button-radius: var(--pcp-radius-sm);--pcp-title-size: 12px;--pcp-title-line: 17px;--pcp-title-weight: 600;--pcp-title-tracking: -.24px;--pcp-ease-out: cubic-bezier(.175, .885, .32, 1.1);--pcp-font: "Geist", system-ui, -apple-system, "SF Pro Display", sans-serif;--pcp-mono: "Geist Mono", ui-monospace, monospace;display:inline-block;font-family:var(--pcp-font);-webkit-font-smoothing:antialiased;color:var(--pcp-text-primary)}:host([mode="popover"]),:host([movable]){position:fixed;z-index:1000;margin:0}:host([mode="popover"]:not([open])){display:none}:host([mode="popover"]) .pcp-header,:host([movable]) .pcp-header{cursor:grab;touch-action:none}:host([mode="popover"]) .pcp-header[data-dragging=true],:host([movable]) .pcp-header[data-dragging=true]{cursor:grabbing}:host,:host([theme="dark"]){color-scheme:dark;--pcp-bg: #212121;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: rgba(255, 255, 255, .05);--pcp-surface-hover: rgba(255, 255, 255, .1);--pcp-surface-active: rgba(255, 255, 255, .11);--pcp-tab-pill: rgba(255, 255, 255, .11);--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-root: #ffffff;--pcp-text-primary: rgba(255, 255, 255, .95);--pcp-text-label: rgba(255, 255, 255, .7);--pcp-text-secondary: rgba(255, 255, 255, .6);--pcp-text-tertiary: rgba(255, 255, 255, .4);--pcp-text-focus: #ffffff;--pcp-slider-handle: rgba(255, 255, 255, .95);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: 0 8px 32px rgba(0, 0, 0, .5)}:host([theme="light"]){color-scheme:light;--pcp-bg: #fafafa;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: rgba(0, 0, 0, .04);--pcp-surface-hover: rgba(0, 0, 0, .08);--pcp-surface-active: rgba(0, 0, 0, .1);--pcp-tab-pill: rgba(0, 0, 0, .1);--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-root: #000000;--pcp-text-primary: rgba(0, 0, 0, .9);--pcp-text-label: rgba(0, 0, 0, .6);--pcp-text-secondary: rgba(0, 0, 0, .55);--pcp-text-tertiary: rgba(0, 0, 0, .35);--pcp-text-focus: #000000;--pcp-slider-handle: rgba(0, 0, 0, .9);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 4px 20px rgba(0, 0, 0, .08)}@media(prefers-color-scheme:dark){:host([theme="system"]){color-scheme:dark;--pcp-bg: #212121;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: rgba(255, 255, 255, .05);--pcp-surface-hover: rgba(255, 255, 255, .1);--pcp-surface-active: rgba(255, 255, 255, .11);--pcp-tab-pill: rgba(255, 255, 255, .11);--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-root: #ffffff;--pcp-text-primary: rgba(255, 255, 255, .95);--pcp-text-label: rgba(255, 255, 255, .7);--pcp-text-secondary: rgba(255, 255, 255, .6);--pcp-text-tertiary: rgba(255, 255, 255, .4);--pcp-text-focus: #ffffff;--pcp-slider-handle: rgba(255, 255, 255, .95);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: 0 8px 32px rgba(0, 0, 0, .5)}}@media(prefers-color-scheme:light){:host([theme="system"]){color-scheme:light;--pcp-bg: #fafafa;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: rgba(0, 0, 0, .04);--pcp-surface-hover: rgba(0, 0, 0, .08);--pcp-surface-active: rgba(0, 0, 0, .1);--pcp-tab-pill: rgba(0, 0, 0, .1);--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-root: #000000;--pcp-text-primary: rgba(0, 0, 0, .9);--pcp-text-label: rgba(0, 0, 0, .6);--pcp-text-secondary: rgba(0, 0, 0, .55);--pcp-text-tertiary: rgba(0, 0, 0, .35);--pcp-text-focus: #000000;--pcp-slider-handle: rgba(0, 0, 0, .9);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 4px 20px rgba(0, 0, 0, .08)}}*,*:before,*:after{box-sizing:border-box}.pcp-clip{overflow:hidden;border-radius:var(--pcp-clip-radius, var(--pcp-radius-sm))}.pcp-swatch-fill{display:block;box-sizing:border-box;width:calc(100% + 2px);height:calc(100% + 2px);margin:-1px;border-radius:inherit;background-color:var(--pcp-checker-base);background-image:linear-gradient(to right,var(--swatch-solid, #000) 50%,transparent 50%),linear-gradient(to right,transparent 50%,var(--swatch-alpha, rgba(0, 0, 0, .5)) 50%),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,100% 100%,var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size);background-position:0 0,0 0,0 0,0 calc(var(--pcp-checker-size) / 2),calc(var(--pcp-checker-size) / 2) calc(var(--pcp-checker-size) / -2),calc(var(--pcp-checker-size) / -2) 0}@supports (background: -webkit-named-image(i)){.pcp-clip,.pcp-swatch-fill{clip-path:inset(0 round var(--pcp-clip-radius, var(--pcp-radius-sm)))}}.pcp{display:flex;flex-direction:column;gap:var(--pcp-section-gap);width:var(--pcp-width);background:var(--pcp-bg);border:1px solid var(--pcp-border);border-radius:var(--pcp-radius-lg);box-shadow:var(--pcp-elevation);padding:var(--pcp-panel-padding);-webkit-user-select:none;user-select:none}.pcp-header{display:flex;align-items:center;justify-content:space-between;gap:6px;padding-bottom:4px;margin-bottom:0;min-height:var(--pcp-icon-button-size);border-bottom:1px solid var(--pcp-divider)}.pcp-title[hidden]{display:none}.pcp-title{flex:1;min-width:0;font-family:var(--pcp-font);font-size:var(--pcp-title-size);font-weight:var(--pcp-title-weight);line-height:var(--pcp-title-line);letter-spacing:var(--pcp-title-tracking);color:var(--pcp-text-root);margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pcp-header-btn{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--pcp-icon-button-size);height:var(--pcp-icon-button-size);padding:0;border:none;border-radius:var(--pcp-icon-button-radius);background:transparent;color:var(--pcp-text-focus);cursor:pointer;transition:background .15s var(--pcp-ease-out),color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-header-btn svg{width:13px;height:13px;flex-shrink:0}@media(hover:hover)and (pointer:fine){.pcp-header-btn:hover{background:var(--pcp-surface-hover);color:var(--pcp-text-primary)}}.pcp-header-btn:active{background:var(--pcp-surface-active);transform:scale(.97)}.pcp-header-btn:focus{outline:none}.pcp-header-btn:focus-visible{box-shadow:0 0 0 2px var(--pcp-bg),0 0 0 4px var(--pcp-focus-ring)}.pcp-plane-wrap{position:relative;width:100%;aspect-ratio:4 / 3;--pcp-clip-radius: var(--pcp-radius-sm);margin-bottom:0;cursor:crosshair;touch-action:none}.pcp-plane{display:block;width:100%;height:100%}.pcp-cursor{position:absolute;width:13px;height:13px;margin:-6.5px 0 0 -6.5px;border:2px solid var(--pcp-cursor-ring);border-radius:50%;box-shadow:0 0 0 1px var(--pcp-cursor-outline),inset 0 0 0 1px #0000001f;pointer-events:none}.pcp-cursor[data-dragging=true]{transition:none}.pcp-slider-wrapper{position:relative;height:var(--pcp-control-height);margin-bottom:0}.pcp-slider{position:absolute;top:0;right:0;bottom:0;left:0;cursor:pointer;-webkit-user-select:none;user-select:none;--pcp-clip-radius: var(--pcp-radius-sm);background:transparent;touch-action:none}.pcp-slider-fill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none}.pcp-slider-fill-hue{background:linear-gradient(to right,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.pcp-slider-fill-alpha{--pcp-alpha-gradient: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));background-color:var(--pcp-checker-base);background-image:var(--pcp-alpha-gradient),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size);background-position:0 0,0 0,0 calc(var(--pcp-checker-size) / 2),calc(var(--pcp-checker-size) / 2) calc(var(--pcp-checker-size) / -2),calc(var(--pcp-checker-size) / -2) 0}.pcp-slider-handle{position:absolute;top:50%;left:0;z-index:1;width:3px;height:var(--pcp-slider-handle-height);border:none;outline:none;border-radius:999px;background-color:transparent;pointer-events:none;transform:translateY(-50%);opacity:.68;box-shadow:none;filter:none;transition:opacity .15s ease,background-color .12s ease,box-shadow .12s ease}.pcp-slider:hover .pcp-slider-handle,.pcp-slider[data-active=true] .pcp-slider-handle{opacity:.68}.pcp-slider-handle[data-dragging=true]{opacity:.95}.pcp-tabs{position:relative;display:flex;align-items:center;height:var(--pcp-tab-row-height);box-sizing:border-box;padding:2px;margin-bottom:0;background:transparent;border-radius:var(--pcp-radius)}.pcp-tabs-pill{position:absolute;top:2px;bottom:2px;left:0;width:0;background:var(--pcp-tab-pill);border-radius:5px;z-index:0;pointer-events:none;transition:left .2s var(--pcp-ease-out),width .2s var(--pcp-ease-out)}.pcp-tab{position:relative;z-index:1;flex:1;display:flex;align-items:center;justify-content:center;height:100%;padding:0 4px;font-family:inherit;font-size:11px;font-weight:500;line-height:1;text-align:center;background:transparent;border:none;color:var(--pcp-text-label);cursor:pointer;transition:color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-tab[data-active=true]{color:var(--pcp-text-primary)}.pcp-tab:active{transform:scale(.97)}.pcp-inputs{display:grid;width:100%;min-width:0;box-sizing:border-box;overflow:hidden;grid-template-columns:var(--pcp-input-panel-height) var(--pcp-swatch-code-gap) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-alpha-col-width);column-gap:3px;align-items:center;margin-bottom:0;padding:var(--pcp-input-row-padding-y) var(--pcp-input-row-padding-x);background:var(--pcp-surface);border-radius:var(--pcp-radius-sm)}.pcp-swatch{grid-column:1;flex-shrink:0;width:var(--pcp-input-panel-height);height:var(--pcp-input-panel-height);--pcp-clip-radius: var(--pcp-radius-sm);position:relative}.pcp-fields{grid-column:3 / 6;display:grid;min-width:0;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:3px}.pcp-fields[data-format=hex] .pcp-field-hex{grid-column:1 / -1;justify-self:center;width:fit-content;align-items:center}.pcp-fields[data-format=hex] .pcp-field-label{text-align:center;white-space:nowrap}.pcp-fields[data-format=hex] .pcp-field-input{width:8ch;min-width:8ch;padding:0 4px}.pcp-fields[data-format=rgb] .pcp-field-r{grid-column:1}.pcp-fields[data-format=rgb] .pcp-field-g{grid-column:2}.pcp-fields[data-format=rgb] .pcp-field-b{grid-column:3}.pcp-fields[data-format=hsl] .pcp-field-h{grid-column:1}.pcp-fields[data-format=hsl] .pcp-field-s{grid-column:2}.pcp-fields[data-format=hsl] .pcp-field-l{grid-column:3}.pcp-fields[data-format=oklch] .pcp-field-l{grid-column:1}.pcp-fields[data-format=oklch] .pcp-field-c{grid-column:2}.pcp-fields[data-format=oklch] .pcp-field-h{grid-column:3}.pcp-alpha-field{grid-column:6;box-sizing:border-box;width:var(--pcp-alpha-col-width);min-width:var(--pcp-alpha-col-width);max-width:var(--pcp-alpha-col-width);align-items:center}.pcp-alpha-field .pcp-field-input{width:100%;min-width:0;padding:0;box-sizing:border-box}.pcp-field{min-width:0;display:flex;flex-direction:column;align-items:stretch;justify-content:center;gap:var(--pcp-field-label-gap)}.pcp-fields[data-format=oklch] .pcp-field-c .pcp-field-input{letter-spacing:-.02em;padding:0 1px}.pcp-field-label{display:block;font-size:var(--pcp-field-label-size);font-weight:500;line-height:var(--pcp-field-label-line);color:var(--pcp-text-label);margin:0;text-align:center}.pcp-fields:not([data-format=hex]) .pcp-field-label,.pcp-alpha-field .pcp-field-label{cursor:ew-resize;-webkit-user-select:none;user-select:none;touch-action:none;transition:color .15s var(--pcp-ease-out)}.pcp-field-label[data-scrubbing=true]{color:var(--pcp-text-primary)}.pcp-field-input{width:100%;min-width:0;min-height:var(--pcp-field-input-height);height:var(--pcp-field-input-height);padding:0 2px;font-family:var(--pcp-mono);font-size:var(--pcp-field-value-size);font-weight:500;line-height:var(--pcp-field-input-height);font-variant-numeric:tabular-nums;text-align:center;color:var(--pcp-text-secondary);background:transparent;border:none;border-radius:var(--pcp-field-input-radius);outline:none;box-shadow:none;transition:color .15s var(--pcp-ease-out),background .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-field-input:hover{background:var(--pcp-surface-hover)}}.pcp-field-input:focus{color:var(--pcp-text-focus);background:transparent;border-radius:var(--pcp-field-input-radius);box-shadow:none;outline:none}.pcp-field-input:active{background:var(--pcp-surface-active)}.pcp-history-section[hidden]{display:none}.pcp-history-label{font-size:10px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--pcp-text-label);margin:0 0 5px}.pcp-history{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:var(--pcp-history-gap);width:100%}.pcp-history-swatch{-moz-appearance:none;appearance:none;-webkit-appearance:none;display:block;width:100%;aspect-ratio:1;height:auto;flex-shrink:0;padding:0;border:none;background:none;--pcp-clip-radius: 4px;cursor:pointer;transition:opacity .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-history-swatch:hover{opacity:.85}}.pcp-history-swatch:active{opacity:.7}@media(prefers-reduced-motion:reduce){.pcp-header-btn,.pcp-tab,.pcp-tabs-pill,.pcp-cursor,.pcp-slider-handle,.pcp-history-swatch{transition:none}.pcp-tab:active,.pcp-header-btn:active{transform:none}}', Xi = (e, n) => {
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
}, ta = {
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
}, na = (e) => Xi(ta[e.toLowerCase()], 6), ia = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, ra = (e) => {
  let n;
  return (n = e.match(ia)) ? Xi(parseInt(n[1], 16), n[1].length) : void 0;
}, pe = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", We = `${pe}%`, On = `(?:${pe}%|${pe})`, aa = `(?:${pe}(deg|grad|rad|turn)|${pe})`, Se = "\\s*,\\s*", sa = new RegExp(
  `^rgba?\\(\\s*${pe}${Se}${pe}${Se}${pe}\\s*(?:,\\s*${On}\\s*)?\\)$`
), oa = new RegExp(
  `^rgba?\\(\\s*${We}${Se}${We}${Se}${We}\\s*(?:,\\s*${On}\\s*)?\\)$`
), la = (e) => {
  let n = { mode: "rgb" }, t;
  if (t = e.match(sa))
    t[1] !== void 0 && (n.r = t[1] / 255), t[2] !== void 0 && (n.g = t[2] / 255), t[3] !== void 0 && (n.b = t[3] / 255);
  else if (t = e.match(oa))
    t[1] !== void 0 && (n.r = t[1] / 100), t[2] !== void 0 && (n.g = t[2] / 100), t[3] !== void 0 && (n.b = t[3] / 100);
  else
    return;
  return t[4] !== void 0 ? n.alpha = Math.max(0, Math.min(1, t[4] / 100)) : t[5] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[5]))), n;
}, ht = (e, n) => e === void 0 ? void 0 : typeof e != "object" ? Zi(e) : e.mode !== void 0 ? e : n ? { ...e, mode: n } : void 0, X = (e = "rgb") => (n) => (n = ht(n, e)) !== void 0 ? (
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
) : void 0, Y = {}, Di = {}, ut = [], Oi = {}, ca = (e) => e, k = (e) => (Y[e.mode] = {
  ...Y[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((n) => {
  Y[n] || (Y[n] = {}), Y[n][e.mode] = e.fromMode[n];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((n) => {
  if (e.ranges[n] === void 0 && (e.ranges[n] = [0, 1]), !e.interpolate[n])
    throw new Error(`Missing interpolator for: ${n}`);
  typeof e.interpolate[n] == "function" && (e.interpolate[n] = {
    use: e.interpolate[n]
  }), e.interpolate[n].fixup || (e.interpolate[n].fixup = ca);
}), Di[e.mode] = e, (e.parse || []).forEach((n) => {
  da(n, e.mode);
}), X(e.mode)), wt = (e) => Di[e], da = (e, n) => {
  if (typeof e == "string") {
    if (!n)
      throw new Error("'mode' required when 'parser' is a string");
    Oi[e] = n;
  } else typeof e == "function" && ut.indexOf(e) < 0 && ut.push(e);
}, vn = /[^\x00-\x7F]|[a-zA-Z_]/, pa = /[^\x00-\x7F]|[-\w]/, h = {
  Function: "function",
  Ident: "ident",
  Number: "number",
  Percentage: "percentage",
  ParenClose: ")",
  None: "none",
  Hue: "hue",
  Alpha: "alpha"
};
let m = 0;
function nt(e) {
  let n = e[m], t = e[m + 1];
  return n === "-" || n === "+" ? /\d/.test(t) || t === "." && /\d/.test(e[m + 2]) : n === "." ? /\d/.test(t) : /\d/.test(n);
}
function xn(e) {
  if (m >= e.length)
    return !1;
  let n = e[m];
  if (vn.test(n))
    return !0;
  if (n === "-") {
    if (e.length - m < 2)
      return !1;
    let t = e[m + 1];
    return !!(t === "-" || vn.test(t));
  }
  return !1;
}
const ha = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function De(e) {
  let n = "";
  if ((e[m] === "-" || e[m] === "+") && (n += e[m++]), n += it(e), e[m] === "." && /\d/.test(e[m + 1]) && (n += e[m++] + it(e)), (e[m] === "e" || e[m] === "E") && ((e[m + 1] === "-" || e[m + 1] === "+") && /\d/.test(e[m + 2]) ? n += e[m++] + e[m++] + it(e) : /\d/.test(e[m + 1]) && (n += e[m++] + it(e))), xn(e)) {
    let t = ft(e);
    return t === "deg" || t === "rad" || t === "turn" || t === "grad" ? { type: h.Hue, value: n * ha[t] } : void 0;
  }
  return e[m] === "%" ? (m++, { type: h.Percentage, value: +n }) : { type: h.Number, value: +n };
}
function it(e) {
  let n = "";
  for (; /\d/.test(e[m]); )
    n += e[m++];
  return n;
}
function ft(e) {
  let n = "";
  for (; m < e.length && pa.test(e[m]); )
    n += e[m++];
  return n;
}
function ua(e) {
  let n = ft(e);
  return e[m] === "(" ? (m++, { type: h.Function, value: n }) : n === "none" ? { type: h.None, value: void 0 } : { type: h.Ident, value: n };
}
function fa(e = "") {
  let n = e.trim(), t = [], i;
  for (m = 0; m < n.length; ) {
    if (i = n[m++], i === `
` || i === "	" || i === " ") {
      for (; m < n.length && (n[m] === `
` || n[m] === "	" || n[m] === " "); )
        m++;
      continue;
    }
    if (i === ",")
      return;
    if (i === ")") {
      t.push({ type: h.ParenClose });
      continue;
    }
    if (i === "+") {
      if (m--, nt(n)) {
        t.push(De(n));
        continue;
      }
      return;
    }
    if (i === "-") {
      if (m--, nt(n)) {
        t.push(De(n));
        continue;
      }
      if (xn(n)) {
        t.push({ type: h.Ident, value: ft(n) });
        continue;
      }
      return;
    }
    if (i === ".") {
      if (m--, nt(n)) {
        t.push(De(n));
        continue;
      }
      return;
    }
    if (i === "/") {
      for (; m < n.length && (n[m] === `
` || n[m] === "	" || n[m] === " "); )
        m++;
      let r;
      if (nt(n) && (r = De(n), r.type !== h.Hue)) {
        t.push({ type: h.Alpha, value: r });
        continue;
      }
      if (xn(n) && ft(n) === "none") {
        t.push({
          type: h.Alpha,
          value: { type: h.None, value: void 0 }
        });
        continue;
      }
      return;
    }
    if (/\d/.test(i)) {
      m--, t.push(De(n));
      continue;
    }
    if (vn.test(i)) {
      m--, t.push(ua(n));
      continue;
    }
    return;
  }
  return t;
}
function ba(e) {
  e._i = 0;
  let n = e[e._i++];
  if (!n || n.type !== h.Function || n.value !== "color" || (n = e[e._i++], n.type !== h.Ident))
    return;
  const t = Oi[n.value];
  if (!t)
    return;
  const i = { mode: t }, r = ji(e, !1);
  if (!r)
    return;
  const a = wt(t).channels;
  for (let s = 0, c, p; s < a.length; s++)
    c = r[s], p = a[s], c.type !== h.None && (i[p] = c.type === h.Number ? c.value : c.value / 100, p === "alpha" && (i[p] = Math.max(0, Math.min(1, i[p]))));
  return i;
}
function ji(e, n) {
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
function ga(e, n) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== h.Function)
    return;
  let i = ji(e, n);
  if (i)
    return i.unshift(t.value), i;
}
const Zi = (e) => {
  if (typeof e != "string")
    return;
  const n = fa(e), t = n ? ga(n, !0) : void 0;
  let i, r = 0, a = ut.length;
  for (; r < a; )
    if ((i = ut[r++](e, t)) !== void 0)
      return i;
  return n ? ba(n) : void 0;
};
function ma(e, n) {
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
const va = (e) => e === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0, xa = (e, n, t) => e + t * (n - e), ya = (e) => {
  let n = [];
  for (let t = 0; t < e.length - 1; t++) {
    let i = e[t], r = e[t + 1];
    i === void 0 && r === void 0 ? n.push(void 0) : i !== void 0 && r !== void 0 ? n.push([i, r]) : n.push(i !== void 0 ? [i, i] : [r, r]);
  }
  return n;
}, Ma = (e) => (n) => {
  let t = ya(n);
  return (i) => {
    let r = i * t.length, a = i >= 1 ? t.length - 1 : Math.max(Math.floor(r), 0), s = t[a];
    return s === void 0 ? void 0 : e(s[0], s[1], r - a);
  };
}, u = Ma(xa), T = (e) => {
  let n = !1, t = e.map((i) => i !== void 0 ? (n = !0, i) : 1);
  return n ? t : e;
}, Ce = {
  mode: "rgb",
  channels: ["r", "g", "b", "alpha"],
  parse: [
    ma,
    ra,
    la,
    na,
    va,
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
}, jt = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), ai = (e) => {
  let n = jt(e.r), t = jt(e.g), i = jt(e.b), r = {
    mode: "xyz65",
    x: 0.5766690429101305 * n + 0.1855582379065463 * t + 0.1882286462349947 * i,
    y: 0.297344975250536 * n + 0.6273635662554661 * t + 0.0752914584939979 * i,
    z: 0.0270313613864123 * n + 0.0706888525358272 * t + 0.9913375368376386 * i
  };
  return e.alpha !== void 0 && (r.alpha = e.alpha), r;
}, Zt = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), si = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = {
    mode: "a98",
    r: Zt(
      e * 2.0415879038107465 - n * 0.5650069742788597 - 0.3447313507783297 * t
    ),
    g: Zt(
      e * -0.9692436362808798 + n * 1.8759675015077206 + 0.0415550574071756 * t
    ),
    b: Zt(
      e * 0.0134442806320312 - n * 0.1183623922310184 + 1.0151749943912058 * t
    )
  };
  return i !== void 0 && (r.alpha = i), r;
}, Yt = (e = 0) => {
  const n = Math.abs(e);
  return n <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((n + 0.055) / 1.055, 2.4);
}, Te = ({ r: e, g: n, b: t, alpha: i }) => {
  let r = {
    mode: "lrgb",
    r: Yt(e),
    g: Yt(n),
    b: Yt(t)
  };
  return i !== void 0 && (r.alpha = i), r;
}, xe = (e) => {
  let { r: n, g: t, b: i, alpha: r } = Te(e), a = {
    mode: "xyz65",
    x: 0.4123907992659593 * n + 0.357584339383878 * t + 0.1804807884018343 * i,
    y: 0.2126390058715102 * n + 0.715168678767756 * t + 0.0721923153607337 * i,
    z: 0.0193308187155918 * n + 0.119194779794626 * t + 0.9505321522496607 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, Bt = (e = 0) => {
  const n = Math.abs(e);
  return n > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(n, 1 / 2.4) - 0.055) : e * 12.92;
}, Pe = ({ r: e, g: n, b: t, alpha: i }, r = "rgb") => {
  let a = {
    mode: r,
    r: Bt(e),
    g: Bt(n),
    b: Bt(t)
  };
  return i !== void 0 && (a.alpha = i), a;
}, ye = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Pe({
    r: e * 3.2409699419045226 - n * 1.537383177570094 - 0.4986107602930034 * t,
    g: e * -0.9692436362808796 + n * 1.8759675015077204 + 0.0415550574071756 * t,
    b: e * 0.0556300796969936 - n * 0.2039769588889765 + 1.0569715142428784 * t
  });
  return i !== void 0 && (r.alpha = i), r;
}, wa = {
  ...Ce,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => si(xe(e)),
    xyz65: si
  },
  toMode: {
    rgb: (e) => ye(ai(e)),
    xyz65: ai
  }
}, H = (e) => (e = e % 360) < 0 ? e + 360 : e, ka = (e, n) => e.map((t, i, r) => {
  if (t === void 0)
    return t;
  let a = H(t);
  return i === 0 || e[i - 1] === void 0 ? a : n(a - H(r[i - 1]));
}).reduce((t, i) => !t.length || i === void 0 || t[t.length - 1] === void 0 ? (t.push(i), t) : (t.push(i + t[t.length - 1]), t), []), re = (e) => ka(e, (n) => Math.abs(n) <= 180 ? n : n - 360 * Math.sign(n)), P = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0], $a = Math.PI / 180, za = 180 / Math.PI;
let oi = P[3] * P[4], li = P[1] * P[4], ci = P[1] * P[2] - P[0] * P[3];
const Aa = ({ r: e, g: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = (ci * t + e * oi - n * li) / (ci + oi - li), a = t - r, s = (P[4] * (n - r) - P[2] * a) / P[3], c = {
    mode: "cubehelix",
    l: r,
    s: r === 0 || r === 1 ? void 0 : Math.sqrt(a * a + s * s) / (P[4] * r * (1 - r))
  };
  return c.s && (c.h = Math.atan2(s, a) * za - 120), i !== void 0 && (c.alpha = i), c;
}, _a = ({ h: e, s: n, l: t, alpha: i }) => {
  let r = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * $a, t === void 0 && (t = 0);
  let a = n === void 0 ? 0 : n * t * (1 - t), s = Math.cos(e), c = Math.sin(e);
  return r.r = t + a * (P[0] * s + P[1] * c), r.g = t + a * (P[2] * s + P[3] * c), r.b = t + a * (P[4] * s + P[5] * c), i !== void 0 && (r.alpha = i), r;
}, kt = (e, n) => {
  if (e.h === void 0 || n.h === void 0 || !e.s || !n.s)
    return 0;
  let t = H(e.h), i = H(n.h), r = Math.sin((i - t + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * n.s) * r;
}, La = (e, n) => {
  if (e.h === void 0 || n.h === void 0)
    return 0;
  let t = H(e.h), i = H(n.h);
  return Math.abs(i - t) > 180 ? t - (i - 360 * Math.sign(i - t)) : i - t;
}, $t = (e, n) => {
  if (e.h === void 0 || n.h === void 0 || !e.c || !n.c)
    return 0;
  let t = H(e.h), i = H(n.h), r = Math.sin((i - t + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * n.c) * r;
}, ae = (e) => {
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
}, Sa = {
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
    rgb: Aa
  },
  toMode: {
    rgb: _a
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
    h: kt
  },
  average: {
    h: ae
  }
}, he = ({ l: e, a: n, b: t, alpha: i }, r = "lch") => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let a = Math.sqrt(n * n + t * t), s = { mode: r, l: e, c: a };
  return a && (s.h = H(Math.atan2(t, n) * 180 / Math.PI)), i !== void 0 && (s.alpha = i), s;
}, ue = ({ l: e, c: n, h: t, alpha: i }, r = "lab") => {
  t === void 0 && (t = 0);
  let a = {
    mode: r,
    l: e,
    a: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    b: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return i !== void 0 && (a.alpha = i), a;
}, Yi = Math.pow(29, 3) / Math.pow(3, 3), Bi = Math.pow(6, 3) / Math.pow(29, 3), S = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: (1 - 0.3457 - 0.3585) / 0.3585
}, $e = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: (1 - 0.3127 - 0.329) / 0.329
};
let Wt = (e) => Math.pow(e, 3) > Bi ? Math.pow(e, 3) : (116 * e - 16) / Yi;
const Wi = ({ l: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = (e + 16) / 116, a = n / 500 + r, s = r - t / 200, c = {
    mode: "xyz65",
    x: Wt(a) * $e.X,
    y: Wt(r) * $e.Y,
    z: Wt(s) * $e.Z
  };
  return i !== void 0 && (c.alpha = i), c;
}, zt = (e) => ye(Wi(e)), Gt = (e) => e > Bi ? Math.cbrt(e) : (Yi * e + 16) / 116, Gi = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Gt(e / $e.X), a = Gt(n / $e.Y), s = Gt(t / $e.Z), c = {
    mode: "lab65",
    l: 116 * a - 16,
    a: 500 * (r - a),
    b: 200 * (a - s)
  };
  return i !== void 0 && (c.alpha = i), c;
}, At = (e) => {
  let n = Gi(xe(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, bt = 1, Vi = 1, Ge = 26 / 180 * Math.PI, gt = Math.cos(Ge), mt = Math.sin(Ge), Ji = 100 / Math.log(139 / 100), yn = ({ l: e, c: n, h: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = {
    mode: "lab65",
    l: (Math.exp(e * bt / Ji) - 1) / 39e-4
  }, a = (Math.exp(0.0435 * n * Vi * bt) - 1) / 0.075, s = a * Math.cos(t / 180 * Math.PI - Ge), c = a * Math.sin(t / 180 * Math.PI - Ge);
  return r.a = s * gt - c / 0.83 * mt, r.b = s * mt + c / 0.83 * gt, i !== void 0 && (r.alpha = i), r;
}, Mn = ({ l: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = n * gt + t * mt, a = 0.83 * (t * gt - n * mt), s = Math.sqrt(r * r + a * a), c = {
    mode: "dlch",
    l: Ji / bt * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * s) / (0.0435 * Vi * bt)
  };
  return c.c && (c.h = H((Math.atan2(a, r) + Ge) / Math.PI * 180)), i !== void 0 && (c.alpha = i), c;
}, di = (e) => yn(he(e, "dlch")), pi = (e) => ue(Mn(e), "dlab"), Ca = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: di,
    rgb: (e) => zt(di(e))
  },
  fromMode: {
    lab65: pi,
    rgb: (e) => pi(At(e))
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
}, Ta = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: yn,
    dlab: (e) => ue(e, "dlab"),
    rgb: (e) => zt(yn(e))
  },
  fromMode: {
    lab65: Mn,
    dlab: (e) => he(e, "dlch"),
    rgb: (e) => Mn(At(e))
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
    h: $t
  },
  average: {
    h: ae
  }
};
function Pa({ h: e, s: n, i: t, alpha: i }) {
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
function Ea({ r: e, g: n, b: t, alpha: i }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.max(e, n, t), a = Math.min(e, n, t), s = {
    mode: "hsi",
    s: e + n + t === 0 ? 0 : 1 - 3 * a / (e + n + t),
    i: (e + n + t) / 3
  };
  return r - a !== 0 && (s.h = (r === e ? (n - t) / (r - a) + (n < t) * 6 : r === n ? (t - e) / (r - a) + 2 : (e - n) / (r - a) + 4) * 60), i !== void 0 && (s.alpha = i), s;
}
const Ha = {
  mode: "hsi",
  toMode: {
    rgb: Pa
  },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: {
    rgb: Ea
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
    h: kt
  },
  average: {
    h: ae
  }
};
function Na({ h: e, s: n, l: t, alpha: i }) {
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
function Ia({ r: e, g: n, b: t, alpha: i }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.max(e, n, t), a = Math.min(e, n, t), s = {
    mode: "hsl",
    s: r === a ? 0 : (r - a) / (1 - Math.abs(r + a - 1)),
    l: 0.5 * (r + a)
  };
  return r - a !== 0 && (s.h = (r === e ? (n - t) / (r - a) + (n < t) * 6 : r === n ? (t - e) / (r - a) + 2 : (e - n) / (r - a) + 4) * 60), i !== void 0 && (s.alpha = i), s;
}
const qa = (e, n) => {
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
}, Ra = new RegExp(
  `^hsla?\\(\\s*${aa}${Se}${We}${Se}${We}\\s*(?:,\\s*${On}\\s*)?\\)$`
), Fa = (e) => {
  let n = e.match(Ra);
  if (!n) return;
  let t = { mode: "hsl" };
  return n[3] !== void 0 ? t.h = +n[3] : n[1] !== void 0 && n[2] !== void 0 && (t.h = qa(n[1], n[2])), n[4] !== void 0 && (t.s = Math.min(Math.max(0, n[4] / 100), 1)), n[5] !== void 0 && (t.l = Math.min(Math.max(0, n[5] / 100), 1)), n[6] !== void 0 ? t.alpha = Math.max(0, Math.min(1, n[6] / 100)) : n[7] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[7]))), t;
};
function Xa(e, n) {
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
const Ui = {
  mode: "hsl",
  toMode: {
    rgb: Na
  },
  fromMode: {
    rgb: Ia
  },
  channels: ["h", "s", "l", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Xa, Fa],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: u, fixup: re },
    s: u,
    l: u,
    alpha: { use: u, fixup: T }
  },
  difference: {
    h: kt
  },
  average: {
    h: ae
  }
};
function Ki({ h: e, s: n, v: t, alpha: i }) {
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
function Qi({ r: e, g: n, b: t, alpha: i }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.max(e, n, t), a = Math.min(e, n, t), s = {
    mode: "hsv",
    s: r === 0 ? 0 : 1 - a / r,
    v: r
  };
  return r - a !== 0 && (s.h = (r === e ? (n - t) / (r - a) + (n < t) * 6 : r === n ? (t - e) / (r - a) + 2 : (e - n) / (r - a) + 4) * 60), i !== void 0 && (s.alpha = i), s;
}
const er = {
  mode: "hsv",
  toMode: {
    rgb: Ki
  },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: {
    rgb: Qi
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
    h: kt
  },
  average: {
    h: ae
  }
};
function Da({ h: e, w: n, b: t, alpha: i }) {
  if (n === void 0 && (n = 0), t === void 0 && (t = 0), n + t > 1) {
    let r = n + t;
    n /= r, t /= r;
  }
  return Ki({
    h: e,
    s: t === 1 ? 1 : 1 - n / (1 - t),
    v: 1 - t,
    alpha: i
  });
}
function Oa(e) {
  let n = Qi(e);
  if (n === void 0) return;
  let t = n.s !== void 0 ? n.s : 0, i = n.v !== void 0 ? n.v : 0, r = {
    mode: "hwb",
    w: (1 - t) * i,
    b: 1 - i
  };
  return n.h !== void 0 && (r.h = n.h), n.alpha !== void 0 && (r.alpha = n.alpha), r;
}
function ja(e, n) {
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
const Za = {
  mode: "hwb",
  toMode: {
    rgb: Da
  },
  fromMode: {
    rgb: Oa
  },
  channels: ["h", "w", "b", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [ja],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: u, fixup: re },
    w: u,
    b: u,
    alpha: { use: u, fixup: T }
  },
  difference: {
    h: La
  },
  average: {
    h: ae
  }
}, tr = 203, _t = 0.1593017578125, nr = 78.84375, Lt = 0.8359375, St = 18.8515625, Ct = 18.6875;
function Vt(e) {
  if (e < 0) return 0;
  const n = Math.pow(e, 1 / nr);
  return 1e4 * Math.pow(Math.max(0, n - Lt) / (St - Ct * n), 1 / _t);
}
function Jt(e) {
  if (e < 0) return 0;
  const n = Math.pow(e / 1e4, _t);
  return Math.pow((Lt + St * n) / (1 + Ct * n), nr);
}
const Ut = (e) => Math.max(e / tr, 0), hi = ({ i: e, t: n, p: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const r = Vt(
    e + 0.008609037037932761 * n + 0.11102962500302593 * t
  ), a = Vt(
    e - 0.00860903703793275 * n - 0.11102962500302599 * t
  ), s = Vt(
    e + 0.5600313357106791 * n - 0.32062717498731885 * t
  ), c = {
    mode: "xyz65",
    x: Ut(
      2.070152218389422 * r - 1.3263473389671556 * a + 0.2066510476294051 * s
    ),
    y: Ut(
      0.3647385209748074 * r + 0.680566024947227 * a - 0.0453045459220346 * s
    ),
    z: Ut(
      -0.049747207535812 * r - 0.0492609666966138 * a + 1.1880659249923042 * s
    )
  };
  return i !== void 0 && (c.alpha = i), c;
}, Kt = (e = 0) => Math.max(e * tr, 0), ui = ({ x: e, y: n, z: t, alpha: i }) => {
  const r = Kt(e), a = Kt(n), s = Kt(t), c = Jt(
    0.3592832590121217 * r + 0.6976051147779502 * a - 0.0358915932320289 * s
  ), p = Jt(
    -0.1920808463704995 * r + 1.1004767970374323 * a + 0.0753748658519118 * s
  ), f = Jt(
    0.0070797844607477 * r + 0.0748396662186366 * a + 0.8433265453898765 * s
  ), b = 0.5 * c + 0.5 * p, x = 1.61376953125 * c - 3.323486328125 * p + 1.709716796875 * f, v = 4.378173828125 * c - 4.24560546875 * p - 0.132568359375 * f, M = { mode: "itp", i: b, t: x, p: v };
  return i !== void 0 && (M.alpha = i), M;
}, Ya = {
  mode: "itp",
  channels: ["i", "t", "p", "alpha"],
  parse: ["--ictcp"],
  serialize: "--ictcp",
  toMode: {
    xyz65: hi,
    rgb: (e) => ye(hi(e))
  },
  fromMode: {
    xyz65: ui,
    rgb: (e) => ui(xe(e))
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
}, Ba = 134.03437499999998, Wa = 16295499532821565e-27, Qt = (e) => {
  if (e < 0) return 0;
  let n = Math.pow(e / 1e4, _t);
  return Math.pow((Lt + St * n) / (1 + Ct * n), Ba);
}, en = (e = 0) => Math.max(e * 203, 0), ir = ({ x: e, y: n, z: t, alpha: i }) => {
  e = en(e), n = en(n), t = en(t);
  let r = 1.15 * e - 0.15 * t, a = 0.66 * n + 0.34 * e, s = Qt(0.41478972 * r + 0.579999 * a + 0.014648 * t), c = Qt(-0.20151 * r + 1.120649 * a + 0.0531008 * t), p = Qt(-0.0166008 * r + 0.2648 * a + 0.6684799 * t), f = (s + c) / 2, b = {
    mode: "jab",
    j: 0.44 * f / (1 - 0.56 * f) - Wa,
    a: 3.524 * s - 4.066708 * c + 0.542708 * p,
    b: 0.199076 * s + 1.096799 * c - 1.295875 * p
  };
  return i !== void 0 && (b.alpha = i), b;
}, Ga = 134.03437499999998, fi = 16295499532821565e-27, tn = (e) => {
  if (e < 0) return 0;
  let n = Math.pow(e, 1 / Ga);
  return 1e4 * Math.pow((Lt - n) / (Ct * n - St), 1 / _t);
}, nn = (e) => e / 203, rr = ({ j: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = (e + fi) / (0.44 + 0.56 * (e + fi)), a = tn(r + 0.13860504 * n + 0.058047316 * t), s = tn(r - 0.13860504 * n - 0.058047316 * t), c = tn(r - 0.096019242 * n - 0.8118919 * t), p = {
    mode: "xyz65",
    x: nn(
      1.661373024652174 * a - 0.914523081304348 * s + 0.23136208173913045 * c
    ),
    y: nn(
      -0.3250758611844533 * a + 1.571847026732543 * s - 0.21825383453227928 * c
    ),
    z: nn(-0.090982811 * a - 0.31272829 * s + 1.5227666 * c)
  };
  return i !== void 0 && (p.alpha = i), p;
}, ar = (e) => {
  let n = ir(xe(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, sr = (e) => ye(rr(e)), Va = {
  mode: "jab",
  channels: ["j", "a", "b", "alpha"],
  parse: ["--jzazbz"],
  serialize: "--jzazbz",
  fromMode: {
    rgb: ar,
    xyz65: ir
  },
  toMode: {
    rgb: sr,
    xyz65: rr
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
}, bi = ({ j: e, a: n, b: t, alpha: i }) => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.sqrt(n * n + t * t), a = {
    mode: "jch",
    j: e,
    c: r
  };
  return r && (a.h = H(Math.atan2(t, n) * 180 / Math.PI)), i !== void 0 && (a.alpha = i), a;
}, gi = ({ j: e, c: n, h: t, alpha: i }) => {
  t === void 0 && (t = 0);
  let r = {
    mode: "jab",
    j: e,
    a: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    b: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return i !== void 0 && (r.alpha = i), r;
}, Ja = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: gi,
    rgb: (e) => sr(gi(e))
  },
  fromMode: {
    rgb: (e) => bi(ar(e)),
    jab: bi
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
    h: $t
  },
  average: {
    h: ae
  }
}, Tt = Math.pow(29, 3) / Math.pow(3, 3), jn = Math.pow(6, 3) / Math.pow(29, 3);
let rn = (e) => Math.pow(e, 3) > jn ? Math.pow(e, 3) : (116 * e - 16) / Tt;
const Zn = ({ l: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = (e + 16) / 116, a = n / 500 + r, s = r - t / 200, c = {
    mode: "xyz50",
    x: rn(a) * S.X,
    y: rn(r) * S.Y,
    z: rn(s) * S.Z
  };
  return i !== void 0 && (c.alpha = i), c;
}, Qe = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Pe({
    r: e * 3.1341359569958707 - n * 1.6173863321612538 - 0.4906619460083532 * t,
    g: e * -0.978795502912089 + n * 1.916254567259524 + 0.03344273116131949 * t,
    b: e * 0.07195537988411677 - n * 0.2289768264158322 + 1.405386058324125 * t
  });
  return i !== void 0 && (r.alpha = i), r;
}, or = (e) => Qe(Zn(e)), et = (e) => {
  let { r: n, g: t, b: i, alpha: r } = Te(e), a = {
    mode: "xyz50",
    x: 0.436065742824811 * n + 0.3851514688337912 * t + 0.14307845442264197 * i,
    y: 0.22249319175623702 * n + 0.7168870538238823 * t + 0.06061979053616537 * i,
    z: 0.013923904500943465 * n + 0.09708128566574634 * t + 0.7140993584005155 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, an = (e) => e > jn ? Math.cbrt(e) : (Tt * e + 16) / 116, Yn = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = an(e / S.X), a = an(n / S.Y), s = an(t / S.Z), c = {
    mode: "lab",
    l: 116 * a - 16,
    a: 500 * (r - a),
    b: 200 * (a - s)
  };
  return i !== void 0 && (c.alpha = i), c;
}, lr = (e) => {
  let n = Yn(et(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
};
function Ua(e, n) {
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
const Bn = {
  mode: "lab",
  toMode: {
    xyz50: Zn,
    rgb: or
  },
  fromMode: {
    xyz50: Yn,
    rgb: lr
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  },
  parse: [Ua],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: u,
    a: u,
    b: u,
    alpha: { use: u, fixup: T }
  }
}, Ka = {
  ...Bn,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: Wi,
    rgb: zt
  },
  fromMode: {
    xyz65: Gi,
    rgb: At
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function Qa(e, n) {
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
const Wn = {
  mode: "lch",
  toMode: {
    lab: ue,
    rgb: (e) => or(ue(e))
  },
  fromMode: {
    rgb: (e) => he(lr(e)),
    lab: he
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  },
  parse: [Qa],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: u, fixup: re },
    c: u,
    l: u,
    alpha: { use: u, fixup: T }
  },
  difference: {
    h: $t
  },
  average: {
    h: ae
  }
}, es = {
  ...Wn,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => ue(e, "lab65"),
    rgb: (e) => zt(ue(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => he(At(e), "lch65"),
    lab65: (e) => he(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, cr = ({ l: e, u: n, v: t, alpha: i }) => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.sqrt(n * n + t * t), a = {
    mode: "lchuv",
    l: e,
    c: r
  };
  return r && (a.h = H(Math.atan2(t, n) * 180 / Math.PI)), i !== void 0 && (a.alpha = i), a;
}, dr = ({ l: e, c: n, h: t, alpha: i }) => {
  t === void 0 && (t = 0);
  let r = {
    mode: "luv",
    l: e,
    u: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    v: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return i !== void 0 && (r.alpha = i), r;
}, pr = (e, n, t) => 4 * e / (e + 15 * n + 3 * t), hr = (e, n, t) => 9 * n / (e + 15 * n + 3 * t), ts = pr(S.X, S.Y, S.Z), ns = hr(S.X, S.Y, S.Z), is = (e) => e <= jn ? Tt * e : 116 * Math.cbrt(e) - 16, wn = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = is(n / S.Y), a = pr(e, n, t), s = hr(e, n, t);
  !isFinite(a) || !isFinite(s) ? r = a = s = 0 : (a = 13 * r * (a - ts), s = 13 * r * (s - ns));
  let c = {
    mode: "luv",
    l: r,
    u: a,
    v: s
  };
  return i !== void 0 && (c.alpha = i), c;
}, rs = (e, n, t) => 4 * e / (e + 15 * n + 3 * t), as = (e, n, t) => 9 * n / (e + 15 * n + 3 * t), ss = rs(S.X, S.Y, S.Z), os = as(S.X, S.Y, S.Z), kn = ({ l: e, u: n, v: t, alpha: i }) => {
  if (e === void 0 && (e = 0), e === 0)
    return { mode: "xyz50", x: 0, y: 0, z: 0 };
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = n / (13 * e) + ss, a = t / (13 * e) + os, s = S.Y * (e <= 8 ? e / Tt : Math.pow((e + 16) / 116, 3)), c = s * (9 * r) / (4 * a), p = s * (12 - 3 * r - 20 * a) / (4 * a), f = { mode: "xyz50", x: c, y: s, z: p };
  return i !== void 0 && (f.alpha = i), f;
}, ls = (e) => cr(wn(et(e))), cs = (e) => Qe(kn(dr(e))), ds = {
  mode: "lchuv",
  toMode: {
    luv: dr,
    rgb: cs
  },
  fromMode: {
    rgb: ls,
    luv: cr
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
    h: $t
  },
  average: {
    h: ae
  }
}, ps = {
  ...Ce,
  mode: "lrgb",
  toMode: {
    rgb: Pe
  },
  fromMode: {
    rgb: Te
  },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, hs = {
  mode: "luv",
  toMode: {
    xyz50: kn,
    rgb: (e) => Qe(kn(e))
  },
  fromMode: {
    xyz50: wn,
    rgb: (e) => wn(et(e))
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
}, ur = ({ r: e, g: n, b: t, alpha: i }) => {
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
}, Pt = (e) => {
  let n = ur(Te(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, tt = ({ l: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.pow(e + 0.3963377773761749 * n + 0.2158037573099136 * t, 3), a = Math.pow(e - 0.1055613458156586 * n - 0.0638541728258133 * t, 3), s = Math.pow(e - 0.0894841775298119 * n - 1.2914855480194092 * t, 3), c = {
    mode: "lrgb",
    r: 4.076741636075957 * r - 3.3077115392580616 * a + 0.2309699031821044 * s,
    g: -1.2684379732850317 * r + 2.6097573492876887 * a - 0.3413193760026573 * s,
    b: -0.0041960761386756 * r - 0.7034186179359362 * a + 1.7076146940746117 * s
  };
  return i !== void 0 && (c.alpha = i), c;
}, Et = (e) => Pe(tt(e));
function $n(e) {
  const i = 1.170873786407767;
  return 0.5 * (i * e - 0.206 + Math.sqrt((i * e - 0.206) * (i * e - 0.206) + 4 * 0.03 * i * e));
}
function vt(e) {
  return (e * e + 0.206 * e) / (1.170873786407767 * (e + 0.03));
}
function us(e, n) {
  let t, i, r, a, s, c, p, f;
  -1.88170328 * e - 0.80936493 * n > 1 ? (t = 1.19086277, i = 1.76576728, r = 0.59662641, a = 0.75515197, s = 0.56771245, c = 4.0767416621, p = -3.3077115913, f = 0.2309699292) : 1.81444104 * e - 1.19445276 * n > 1 ? (t = 0.73956515, i = -0.45954404, r = 0.08285427, a = 0.1254107, s = 0.14503204, c = -1.2684380046, p = 2.6097574011, f = -0.3413193965) : (t = 1.35733652, i = -915799e-8, r = -1.1513021, a = -0.50559606, s = 692167e-8, c = -0.0041960863, p = -0.7034186147, f = 1.707614701);
  let b = t + i * e + r * n + a * e * e + s * e * n, x = 0.3963377774 * e + 0.2158037573 * n, v = -0.1055613458 * e - 0.0638541728 * n, M = -0.0894841775 * e - 1.291485548 * n;
  {
    let A = 1 + b * x, z = 1 + b * v, _ = 1 + b * M, C = A * A * A, L = z * z * z, se = _ * _ * _, He = 3 * x * A * A, Ne = 3 * v * z * z, Ie = 3 * M * _ * _, qe = 6 * x * x * A, Re = 6 * v * v * z, Fe = 6 * M * M * _, Me = c * C + p * L + f * se, fe = c * He + p * Ne + f * Ie, Xe = c * qe + p * Re + f * Fe;
    b = b - Me * fe / (fe * fe - 0.5 * Me * Xe);
  }
  return b;
}
function Gn(e, n) {
  let t = us(e, n), i = tt({ l: 1, a: t * e, b: t * n }), r = Math.cbrt(1 / Math.max(i.r, i.g, i.b)), a = r * t;
  return [r, a];
}
function fs(e, n, t, i, r, a = null) {
  a || (a = Gn(e, n));
  let s;
  if ((t - r) * a[1] - (a[0] - r) * i <= 0)
    s = a[1] * r / (i * a[0] + a[1] * (r - t));
  else {
    s = a[1] * (r - 1) / (i * (a[0] - 1) + a[1] * (r - t));
    {
      let c = t - r, p = i, f = 0.3963377774 * e + 0.2158037573 * n, b = -0.1055613458 * e - 0.0638541728 * n, x = -0.0894841775 * e - 1.291485548 * n, v = c + p * f, M = c + p * b, A = c + p * x;
      {
        let z = r * (1 - s) + s * t, _ = s * i, C = z + _ * f, L = z + _ * b, se = z + _ * x, He = C * C * C, Ne = L * L * L, Ie = se * se * se, qe = 3 * v * C * C, Re = 3 * M * L * L, Fe = 3 * A * se * se, Me = 6 * v * v * C, fe = 6 * M * M * L, Xe = 6 * A * A * se, Un = 4.0767416621 * He - 3.3077115913 * Ne + 0.2309699292 * Ie - 1, It = 4.0767416621 * qe - 3.3077115913 * Re + 0.2309699292 * Fe, Jr = 4.0767416621 * Me - 3.3077115913 * fe + 0.2309699292 * Xe, Kn = It / (It * It - 0.5 * Un * Jr), qt = -Un * Kn, Qn = -1.2684380046 * He + 2.6097574011 * Ne - 0.3413193965 * Ie - 1, Rt = -1.2684380046 * qe + 2.6097574011 * Re - 0.3413193965 * Fe, Ur = -1.2684380046 * Me + 2.6097574011 * fe - 0.3413193965 * Xe, ei = Rt / (Rt * Rt - 0.5 * Qn * Ur), Ft = -Qn * ei, ti = -0.0041960863 * He - 0.7034186147 * Ne + 1.707614701 * Ie - 1, Xt = -0.0041960863 * qe - 0.7034186147 * Re + 1.707614701 * Fe, Kr = -0.0041960863 * Me - 0.7034186147 * fe + 1.707614701 * Xe, ni = Xt / (Xt * Xt - 0.5 * ti * Kr), Dt = -ti * ni;
        qt = Kn >= 0 ? qt : 1e6, Ft = ei >= 0 ? Ft : 1e6, Dt = ni >= 0 ? Dt : 1e6, s += Math.min(qt, Math.min(Ft, Dt));
      }
    }
  }
  return s;
}
function Vn(e, n, t = null) {
  t || (t = Gn(e, n));
  let i = t[0], r = t[1];
  return [r / i, r / (1 - i)];
}
function fr(e, n, t) {
  let i = Gn(n, t), r = fs(n, t, e, 1, e, i), a = Vn(n, t, i), s = 0.11516993 + 1 / (7.4477897 + 4.1590124 * t + n * (-2.19557347 + 1.75198401 * t + n * (-2.13704948 - 10.02301043 * t + n * (-4.24894561 + 5.38770819 * t + 4.69891013 * n)))), c = 0.11239642 + 1 / (1.6132032 - 0.68124379 * t + n * (0.40370612 + 0.90148123 * t + n * (-0.27087943 + 0.6122399 * t + n * (299215e-8 - 0.45399568 * t - 0.14661872 * n)))), p = r / Math.min(e * a[0], (1 - e) * a[1]), f = e * s, b = (1 - e) * c, x = 0.9 * p * Math.sqrt(
    Math.sqrt(
      1 / (1 / (f * f * f * f) + 1 / (b * b * b * b))
    )
  );
  return f = e * 0.4, b = (1 - e) * 0.8, [Math.sqrt(1 / (1 / (f * f) + 1 / (b * b))), x, r];
}
function mi(e) {
  const n = e.l !== void 0 ? e.l : 0, t = e.a !== void 0 ? e.a : 0, i = e.b !== void 0 ? e.b : 0, r = { mode: "okhsl", l: $n(n) };
  e.alpha !== void 0 && (r.alpha = e.alpha);
  let a = Math.sqrt(t * t + i * i);
  if (!a)
    return r.s = 0, r;
  let [s, c, p] = fr(n, t / a, i / a), f;
  if (a < c) {
    let b = 0, x = 0.8 * s, v = 1 - x / c;
    f = (a - b) / (x + v * (a - b)) * 0.8;
  } else {
    let b = c, x = 0.2 * c * c * 1.25 * 1.25 / s, v = 1 - x / (p - c);
    f = 0.8 + 0.2 * ((a - b) / (x + v * (a - b)));
  }
  return f && (r.s = f, r.h = H(Math.atan2(i, t) * 180 / Math.PI)), r;
}
function vi(e) {
  let n = e.h !== void 0 ? e.h : 0, t = e.s !== void 0 ? e.s : 0, i = e.l !== void 0 ? e.l : 0;
  const r = { mode: "oklab", l: vt(i) };
  if (e.alpha !== void 0 && (r.alpha = e.alpha), !t || i === 1)
    return r.a = r.b = 0, r;
  let a = Math.cos(n / 180 * Math.PI), s = Math.sin(n / 180 * Math.PI), [c, p, f] = fr(r.l, a, s), b, x, v, M;
  t < 0.8 ? (b = 1.25 * t, x = 0, v = 0.8 * c, M = 1 - v / p) : (b = 5 * (t - 0.8), x = p, v = 0.2 * p * p * 1.25 * 1.25 / c, M = 1 - v / (f - p));
  let A = x + b * v / (1 - M * b);
  return r.a = A * a, r.b = A * s, r;
}
const bs = {
  ...Ui,
  mode: "okhsl",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--okhsl"],
  serialize: "--okhsl",
  fromMode: {
    oklab: mi,
    rgb: (e) => mi(Pt(e))
  },
  toMode: {
    oklab: vi,
    rgb: (e) => Et(vi(e))
  }
};
function xi(e) {
  let n = e.l !== void 0 ? e.l : 0, t = e.a !== void 0 ? e.a : 0, i = e.b !== void 0 ? e.b : 0, r = Math.sqrt(t * t + i * i), a = r ? t / r : 1, s = r ? i / r : 1, [c, p] = Vn(a, s), f = 0.5, b = 1 - f / c, x = p / (r + n * p), v = x * n, M = x * r, A = vt(v), z = M * A / v, _ = tt({ l: A, a: a * z, b: s * z }), C = Math.cbrt(
    1 / Math.max(_.r, _.g, _.b, 0)
  );
  n = n / C, r = r / C * $n(n) / n, n = $n(n);
  const L = {
    mode: "okhsv",
    s: r ? (f + p) * M / (p * f + p * b * M) : 0,
    v: n ? n / v : 0
  };
  return L.s && (L.h = H(Math.atan2(i, t) * 180 / Math.PI)), e.alpha !== void 0 && (L.alpha = e.alpha), L;
}
function yi(e) {
  const n = { mode: "oklab" };
  e.alpha !== void 0 && (n.alpha = e.alpha);
  const t = e.h !== void 0 ? e.h : 0, i = e.s !== void 0 ? e.s : 0, r = e.v !== void 0 ? e.v : 0, a = Math.cos(t / 180 * Math.PI), s = Math.sin(t / 180 * Math.PI), [c, p] = Vn(a, s), f = 0.5, b = 1 - f / c, x = 1 - i * f / (f + p - p * b * i), v = i * p * f / (f + p - p * b * i), M = vt(x), A = v * M / x, z = tt({
    l: M,
    a: a * A,
    b: s * A
  }), _ = Math.cbrt(
    1 / Math.max(z.r, z.g, z.b, 0)
  ), C = vt(r * x), L = v * C / x;
  return n.l = C * _, n.a = L * a * _, n.b = L * s * _, n;
}
const gs = {
  ...er,
  mode: "okhsv",
  channels: ["h", "s", "v", "alpha"],
  parse: ["--okhsv"],
  serialize: "--okhsv",
  fromMode: {
    oklab: xi,
    rgb: (e) => xi(Pt(e))
  },
  toMode: {
    oklab: yi,
    rgb: (e) => Et(yi(e))
  }
};
function ms(e, n) {
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
const vs = {
  ...Bn,
  mode: "oklab",
  toMode: {
    lrgb: tt,
    rgb: Et
  },
  fromMode: {
    lrgb: ur,
    rgb: Pt
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [ms],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function xs(e, n) {
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
const ys = {
  ...Wn,
  mode: "oklch",
  toMode: {
    oklab: (e) => ue(e, "oklab"),
    rgb: (e) => Et(ue(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => he(Pt(e), "oklch"),
    oklab: (e) => he(e, "oklch")
  },
  parse: [xs],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, Mi = (e) => {
  let { r: n, g: t, b: i, alpha: r } = Te(e), a = {
    mode: "xyz65",
    x: 0.486570948648216 * n + 0.265667693169093 * t + 0.1982172852343625 * i,
    y: 0.2289745640697487 * n + 0.6917385218365062 * t + 0.079286914093745 * i,
    z: 0 * n + 0.0451133818589026 * t + 1.043944368900976 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, wi = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Pe(
    {
      r: e * 2.4934969119414263 - n * 0.9313836179191242 - 0.402710784450717 * t,
      g: e * -0.8294889695615749 + n * 1.7626640603183465 + 0.0236246858419436 * t,
      b: e * 0.0358458302437845 - n * 0.0761723892680418 + 0.9568845240076871 * t
    },
    "p3"
  );
  return i !== void 0 && (r.alpha = i), r;
}, Ms = {
  ...Ce,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => wi(xe(e)),
    xyz65: wi
  },
  toMode: {
    rgb: (e) => ye(Mi(e)),
    xyz65: Mi
  }
}, sn = (e) => {
  let n = Math.abs(e);
  return n >= 1 / 512 ? Math.sign(e) * Math.pow(n, 1 / 1.8) : 16 * e;
}, ki = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = {
    mode: "prophoto",
    r: sn(
      e * 1.3457868816471585 - n * 0.2555720873797946 - 0.0511018649755453 * t
    ),
    g: sn(
      e * -0.5446307051249019 + n * 1.5082477428451466 + 0.0205274474364214 * t
    ),
    b: sn(e * 0 + n * 0 + 1.2119675456389452 * t)
  };
  return i !== void 0 && (r.alpha = i), r;
}, on = (e = 0) => {
  let n = Math.abs(e);
  return n >= 16 / 512 ? Math.sign(e) * Math.pow(n, 1.8) : e / 16;
}, $i = (e) => {
  let n = on(e.r), t = on(e.g), i = on(e.b), r = {
    mode: "xyz50",
    x: 0.7977666449006423 * n + 0.1351812974005331 * t + 0.0313477341283922 * i,
    y: 0.2880748288194013 * n + 0.7118352342418731 * t + 899369387256e-16 * i,
    z: 0 * n + 0 * t + 0.8251046025104602 * i
  };
  return e.alpha !== void 0 && (r.alpha = e.alpha), r;
}, ws = {
  ...Ce,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: ki,
    rgb: (e) => ki(et(e))
  },
  toMode: {
    xyz50: $i,
    rgb: (e) => Qe($i(e))
  }
}, zi = 1.09929682680944, ks = 0.018053968510807, ln = (e) => {
  const n = Math.abs(e);
  return n > ks ? (Math.sign(e) || 1) * (zi * Math.pow(n, 0.45) - (zi - 1)) : 4.5 * e;
}, Ai = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = {
    mode: "rec2020",
    r: ln(
      e * 1.7166511879712683 - n * 0.3556707837763925 - 0.2533662813736599 * t
    ),
    g: ln(
      e * -0.6666843518324893 + n * 1.6164812366349395 + 0.0157685458139111 * t
    ),
    b: ln(
      e * 0.0176398574453108 - n * 0.0427706132578085 + 0.9421031212354739 * t
    )
  };
  return i !== void 0 && (r.alpha = i), r;
}, _i = 1.09929682680944, $s = 0.018053968510807, cn = (e = 0) => {
  let n = Math.abs(e);
  return n < $s * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((n + _i - 1) / _i, 1 / 0.45);
}, Li = (e) => {
  let n = cn(e.r), t = cn(e.g), i = cn(e.b), r = {
    mode: "xyz65",
    x: 0.6369580483012911 * n + 0.1446169035862083 * t + 0.1688809751641721 * i,
    y: 0.262700212011267 * n + 0.6779980715188708 * t + 0.059301716469862 * i,
    z: 0 * n + 0.0280726930490874 * t + 1.0609850577107909 * i
  };
  return e.alpha !== void 0 && (r.alpha = e.alpha), r;
}, zs = {
  ...Ce,
  mode: "rec2020",
  fromMode: {
    xyz65: Ai,
    rgb: (e) => Ai(xe(e))
  },
  toMode: {
    xyz65: Li,
    rgb: (e) => ye(Li(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, ge = 0.0037930732552754493, br = Math.cbrt(ge), dn = (e) => Math.cbrt(e) - br, As = (e) => {
  const { r: n, g: t, b: i, alpha: r } = Te(e), a = dn(0.3 * n + 0.622 * t + 0.078 * i + ge), s = dn(0.23 * n + 0.692 * t + 0.078 * i + ge), c = dn(
    0.2434226892454782 * n + 0.2047674442449682 * t + 0.5518098665095535 * i + ge
  ), p = {
    mode: "xyb",
    x: (a - s) / 2,
    y: (a + s) / 2,
    /* Apply default chroma from luma (subtract Y from B) */
    b: c - (a + s) / 2
  };
  return r !== void 0 && (p.alpha = r), p;
}, pn = (e) => Math.pow(e + br, 3), _s = ({ x: e, y: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const r = pn(e + n) - ge, a = pn(n - e) - ge, s = pn(t + n) - ge, c = Pe({
    r: 11.031566904639861 * r - 9.866943908131562 * a - 0.16462299650829934 * s,
    g: -3.2541473810744237 * r + 4.418770377582723 * a - 0.16462299650829934 * s,
    b: -3.6588512867136815 * r + 2.7129230459360922 * a + 1.9459282407775895 * s
  });
  return i !== void 0 && (c.alpha = i), c;
}, Ls = {
  mode: "xyb",
  channels: ["x", "y", "b", "alpha"],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: {
    rgb: _s
  },
  fromMode: {
    rgb: As
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
}, Ss = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: Qe,
    lab: Yn
  },
  fromMode: {
    rgb: et,
    lab: Zn
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
}, Cs = (e) => {
  let { x: n, y: t, z: i, alpha: r } = e;
  n === void 0 && (n = 0), t === void 0 && (t = 0), i === void 0 && (i = 0);
  let a = {
    mode: "xyz50",
    x: 1.0479298208405488 * n + 0.0229467933410191 * t - 0.0501922295431356 * i,
    y: 0.0296278156881593 * n + 0.990434484573249 * t - 0.0170738250293851 * i,
    z: -0.0092430581525912 * n + 0.0150551448965779 * t + 0.7518742899580008 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, Ts = (e) => {
  let { x: n, y: t, z: i, alpha: r } = e;
  n === void 0 && (n = 0), t === void 0 && (t = 0), i === void 0 && (i = 0);
  let a = {
    mode: "xyz65",
    x: 0.9554734527042182 * n - 0.0230985368742614 * t + 0.0632593086610217 * i,
    y: -0.0283697069632081 * n + 1.0099954580058226 * t + 0.021041398966943 * i,
    z: 0.0123140016883199 * n - 0.0205076964334779 * t + 1.3303659366080753 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, Ps = {
  mode: "xyz65",
  toMode: {
    rgb: ye,
    xyz50: Cs
  },
  fromMode: {
    rgb: xe,
    xyz50: Ts
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
}, Es = ({ r: e, g: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const r = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * n + 0.11448223 * t,
    i: 0.59597799 * e - 0.2741761 * n - 0.32180189 * t,
    q: 0.21147017 * e - 0.52261711 * n + 0.31114694 * t
  };
  return i !== void 0 && (r.alpha = i), r;
}, Hs = ({ y: e, i: n, q: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const r = {
    mode: "rgb",
    r: e + 0.95608445 * n + 0.6208885 * t,
    g: e - 0.27137664 * n - 0.6486059 * t,
    b: e - 1.10561724 * n + 1.70250126 * t
  };
  return i !== void 0 && (r.alpha = i), r;
}, Ns = {
  mode: "yiq",
  toMode: {
    rgb: Hs
  },
  fromMode: {
    rgb: Es
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
}, Is = (e) => Math.max(0, Math.min(1, e || 0)), hn = (e) => Math.round(Is(e) * 255), qs = X("rgb"), Rs = (e) => {
  if (e === void 0)
    return;
  let n = hn(e.r), t = hn(e.g), i = hn(e.b);
  return "#" + (1 << 24 | n << 16 | t << 8 | i).toString(16).slice(1);
}, Fs = (e) => Rs(qs(e)), gr = X("rgb"), mr = (e) => {
  const n = {
    mode: e.mode,
    r: Math.max(0, Math.min(e.r !== void 0 ? e.r : 0, 1)),
    g: Math.max(0, Math.min(e.g !== void 0 ? e.g : 0, 1)),
    b: Math.max(0, Math.min(e.b !== void 0 ? e.b : 0, 1))
  };
  return e.alpha !== void 0 && (n.alpha = e.alpha), n;
}, Xs = (e) => mr(gr(e)), vr = (e) => e !== void 0 && (e.r === void 0 || e.r >= 0 && e.r <= 1) && (e.g === void 0 || e.g >= 0 && e.g <= 1) && (e.b === void 0 || e.b >= 0 && e.b <= 1);
function Ds(e) {
  return vr(gr(e));
}
function xr(e = "rgb") {
  const { gamut: n } = wt(e);
  if (!n)
    return (i) => !0;
  const t = X(typeof n == "string" ? n : e);
  return (i) => vr(t(i));
}
function Os(e = "rgb") {
  const { gamut: n } = wt(e);
  if (!n)
    return (a) => ht(a);
  const t = typeof n == "string" ? n : e, i = X(t), r = xr(t);
  return (a) => {
    const s = ht(a);
    if (!s)
      return;
    const c = i(s);
    if (r(c))
      return s;
    const p = mr(c);
    return s.mode === p.mode ? p : X(s.mode)(p);
  };
}
function js(e, n = "lch", t = "rgb") {
  e = ht(e);
  let i = t === "rgb" ? Ds : xr(t), r = t === "rgb" ? Xs : Os(t);
  if (e === void 0 || i(e)) return e;
  let a = X(e.mode);
  e = X(n)(e);
  let s = { ...e, c: 0 };
  if (!i(s))
    return a(r(s));
  let c = 0, p = e.c !== void 0 ? e.c : 0, f = wt(n).ranges.c, b = (f[1] - f[0]) / Math.pow(2, 13), x = s.c;
  for (; p - c > b; )
    s.c = c + (p - c) * 0.5, i(s) ? (x = s.c, c = s.c) : p = s.c;
  return a(
    i(s) ? s : { ...s, c: x }
  );
}
k(wa);
k(Sa);
k(Ca);
k(Ta);
k(Ha);
k(Ui);
k(er);
k(Za);
k(Ya);
k(Va);
k(Ja);
k(Bn);
k(Ka);
k(Wn);
k(es);
k(ds);
k(ps);
k(hs);
k(bs);
k(gs);
k(vs);
const Jn = k(ys);
k(Ms);
k(ws);
k(zs);
k(Ce);
k(Ls);
k(Ss);
k(Ps);
k(Ns);
const Zs = X("rgb");
function Si(e, n) {
  const t = e.getContext("2d", { willReadFrequently: !0 });
  if (!t) return;
  const { width: i, height: r } = e, a = t.createImageData(i, r), s = a.data;
  for (let c = 0; c < r; c++) {
    const p = 1 - c / (r - 1 || 1);
    for (let f = 0; f < i; f++) {
      const b = f / (i - 1 || 1), x = Zs({ mode: "hsv", h: n, s: b, v: p, alpha: 1 }), v = (c * i + f) * 4;
      if (!x) {
        s[v] = s[v + 1] = s[v + 2] = 0, s[v + 3] = 255;
        continue;
      }
      s[v] = Math.round(un((x.r ?? 0) * 255)), s[v + 1] = Math.round(un((x.g ?? 0) * 255)), s[v + 2] = Math.round(un((x.b ?? 0) * 255)), s[v + 3] = 255;
    }
  }
  t.putImageData(a, 0, 0);
}
function un(e) {
  return Math.min(255, Math.max(0, e));
}
const Ee = X("rgb"), Ht = X("hsv"), Ys = X("hsl"), yr = 2e-3, Mr = 4e-3;
function Nt(e) {
  return e.c <= yr;
}
function Bs(e) {
  const n = Ht({ mode: "oklch", ...e, alpha: 1 });
  return Math.max(0, (n == null ? void 0 : n.s) ?? 0);
}
function oe(e) {
  return Nt(e) ? !0 : Bs(e) < Mr;
}
function xt(e, n) {
  return oe(e) ? { ...e, h: D(n) } : e;
}
function q(e) {
  const n = ve(e.l ?? 0), t = Math.max(0, e.c ?? 0), i = D(e.h ?? 0), r = ve(e.alpha ?? 1), a = js({ mode: "oklch", l: n, c: t, h: i, alpha: r }, "rgb"), s = Nt({ c: t });
  return {
    l: a.l ?? n,
    c: s ? 0 : a.c ?? 0,
    h: s ? D(i) : i,
    alpha: a.alpha ?? r
  };
}
function me(e) {
  const n = Zi(e.trim());
  if (!n) return null;
  const t = Jn(n);
  return (t == null ? void 0 : t.l) == null ? null : q({
    l: t.l,
    c: t.c ?? 0,
    h: t.h ?? 0,
    alpha: t.alpha ?? 1
  });
}
function Ci(e) {
  const { l: n, c: t, h: i, alpha: r } = e;
  return r >= 1 ? `oklch(${(n * 100).toFixed(1)}% ${t.toFixed(4)} ${i.toFixed(1)})` : `oklch(${(n * 100).toFixed(1)}% ${t.toFixed(4)} ${i.toFixed(1)} / ${Math.round(r * 100)}%)`;
}
function Ve(e) {
  return Fs(Ee({ mode: "oklch", ...e })) ?? "#000000";
}
function mo(e) {
  const { r: n, g: t, b: i } = yt(e);
  return e.alpha < 1 ? `rgba(${n}, ${t}, ${i}, ${e.alpha.toFixed(2)})` : `rgb(${n}, ${t}, ${i})`;
}
function yt(e) {
  const n = Ee({ mode: "oklch", ...e, alpha: 1 });
  return n ? {
    r: Math.round((n.r ?? 0) * 255),
    g: Math.round((n.g ?? 0) * 255),
    b: Math.round((n.b ?? 0) * 255)
  } : { r: 0, g: 0, b: 0 };
}
function Ws(e) {
  const n = D(Math.max(0, Math.min(1, e)) * 360), t = Ee({ mode: "hsv", h: n, s: 1, v: 1, alpha: 1 });
  return t ? {
    r: Math.round((t.r ?? 0) * 255),
    g: Math.round((t.g ?? 0) * 255),
    b: Math.round((t.b ?? 0) * 255)
  } : { r: 255, g: 0, b: 0 };
}
function Gs(e) {
  const { r: n, g: t, b: i } = yt(e);
  return `linear-gradient(to right, rgba(${n}, ${t}, ${i}, 0), rgb(${n}, ${t}, ${i}))`;
}
function Vs(e) {
  if (oe(e)) return D(e.h);
  const n = Ht({ mode: "oklch", ...e, alpha: 1 });
  return D((n == null ? void 0 : n.h) ?? e.h);
}
function wr(e, n) {
  const t = D(n), i = Ht({ mode: "oklch", ...e, alpha: 1 }), r = Ee({
    mode: "hsv",
    h: t,
    s: (i == null ? void 0 : i.s) ?? 0,
    v: (i == null ? void 0 : i.v) ?? 1,
    alpha: 1
  }), a = Jn(
    r ?? { mode: "hsv", h: t, s: (i == null ? void 0 : i.s) ?? 0, v: (i == null ? void 0 : i.v) ?? 1 }
  );
  if ((a == null ? void 0 : a.l) != null) {
    const s = a.c ?? 0;
    return xt(
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
function at(e, n) {
  switch (n) {
    case "hex":
      return [{ key: "hex", label: "HEX CODE", value: Ve(e).replace("#", "").toUpperCase() }];
    case "rgb": {
      const t = Ee({ mode: "oklch", ...e });
      return [
        { key: "r", label: "R", value: String(Math.round((t.r ?? 0) * 255)), min: 0, max: 255 },
        { key: "g", label: "G", value: String(Math.round((t.g ?? 0) * 255)), min: 0, max: 255 },
        { key: "b", label: "B", value: String(Math.round((t.b ?? 0) * 255)), min: 0, max: 255 }
      ];
    }
    case "hsl": {
      const t = Ys({ mode: "oklch", ...e });
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
function Js(e, n, t) {
  var f, b, x;
  const i = e.alpha, r = at(e, "hsl"), a = n === "h" ? D(t) : Number(((f = r.find((v) => v.key === "h")) == null ? void 0 : f.value) ?? 0);
  let s = n === "s" ? t : Number(((b = r.find((v) => v.key === "s")) == null ? void 0 : b.value) ?? 0);
  const c = n === "l" ? t : Number(((x = r.find((v) => v.key === "l")) == null ? void 0 : x.value) ?? 0);
  n === "h" && s < 1 && (s = 1);
  const p = me(`hsl(${a}, ${Mt(s)}%, ${Mt(c)}%)`);
  return p ? { ...p, alpha: i } : e;
}
function Us(e, n, t, i) {
  switch (n) {
    case "l": {
      const r = q({ ...e, l: t / 100 });
      return i != null ? xt(r, i) : r;
    }
    case "c": {
      const r = Math.max(0, t), a = r <= yr || oe(e) ? i != null ? D(i) : D(e.h) : e.h, s = q({ ...e, c: r, h: a });
      return i != null ? xt(s, i) : s;
    }
    case "h":
      return wr(e, t);
  }
}
function Ti(e, n, t) {
  switch (e) {
    case "hex": {
      const i = (n.hex ?? "").trim().replace(/^#/, "");
      if (!/^[0-9a-fA-F]{3,8}$/.test(i)) return null;
      const r = me(`#${i}`);
      return r ? fn(r, t.alpha) : null;
    }
    case "rgb": {
      const i = Number(n.r), r = Number(n.g), a = Number(n.b);
      if ([i, r, a].some((c) => Number.isNaN(c))) return null;
      const s = me(`rgb(${bn(i)}, ${bn(r)}, ${bn(a)})`);
      return s ? fn(s, t.alpha) : null;
    }
    case "hsl": {
      const i = gn(n.h), r = gn(n.s), a = gn(n.l);
      if ([i, r, a].some((c) => Number.isNaN(c))) return null;
      const s = me(`hsl(${i}, ${Mt(r)}%, ${Mt(a)}%)`);
      return s ? fn(s, t.alpha) : null;
    }
    case "oklch": {
      const i = Number(n.l);
      let r = Number(n.c), a = Number(n.h);
      return [i, r, a].some((s) => Number.isNaN(s)) ? null : (r <= 0 && (r = 0, Nt(t) || (a = t.h)), q({ l: i / 100, c: r, h: a, alpha: t.alpha }));
    }
  }
}
function Ks(e) {
  const n = Ht({ mode: "oklch", ...e, alpha: 1 });
  return {
    x: ve((n == null ? void 0 : n.s) ?? 0),
    y: ve(1 - ((n == null ? void 0 : n.v) ?? 0))
  };
}
function Qs(e, n, t, i) {
  const r = ve(e), a = ve(n), s = D(t), c = Jn(
    Ee({ mode: "hsv", h: s, s: r, v: 1 - a, alpha: 1 }) ?? {
      mode: "hsv",
      h: s,
      s: r,
      v: 1 - a
    }
  );
  if ((c == null ? void 0 : c.l) != null) {
    const p = c.c ?? 0, f = r < Mr || Nt({ c: p });
    return q({
      l: c.l,
      c: p,
      h: f ? s : c.h ?? s,
      alpha: i
    });
  }
  return q({ l: 0.5, c: 0, h: s, alpha: i });
}
function fn(e, n) {
  return { ...e, alpha: ve(n) };
}
function ve(e) {
  return Math.min(1, Math.max(0, e));
}
function bn(e) {
  return Math.min(255, Math.max(0, Math.round(e)));
}
function Mt(e) {
  return Math.min(100, Math.max(0, e));
}
function gn(e) {
  return Number(e.replace(/%/g, "").trim());
}
function D(e) {
  return Math.min(360, Math.max(0, e));
}
const Pi = {
  l: 0.62,
  c: 0.24,
  h: 303,
  alpha: 0.8
}, kr = "pretty-color-picker-history", $r = 16, Ei = "Pretty Color Picker";
function zr(e, n) {
  return Ve(e) === Ve(n) && e.alpha === n.alpha;
}
function eo() {
  try {
    const e = localStorage.getItem(kr);
    if (!e) return [];
    const n = JSON.parse(e);
    return Array.isArray(n) ? n.slice(0, $r) : [];
  } catch {
    return [];
  }
}
function to(e, n) {
  const t = n.filter((r) => !zr(r, e)), i = [e, ...t].slice(0, $r);
  try {
    localStorage.setItem(kr, JSON.stringify(i));
  } catch {
  }
  return i;
}
const no = "#ededed", io = "#171717", ro = 0.52;
function ao(e, n, t) {
  const i = [e, n, t].map((r) => {
    const a = r / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2];
}
function so(e, n, t) {
  return ao(e, n, t) > ro ? io : no;
}
function oo(e, n, t) {
  return {
    backgroundColor: so(e, n, t),
    boxShadow: "none"
  };
}
function Hi(e) {
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
function lo(e, n, t, i) {
  const r = Math.max(0, Math.min(1, n)), a = {
    r: Math.round((t.r + i.r) / 2),
    g: Math.round((t.g + i.g) / 2),
    b: Math.round((t.b + i.b) / 2)
  };
  return {
    r: Math.round(r * e.r + (1 - r) * a.r),
    g: Math.round(r * e.g + (1 - r) * a.g),
    b: Math.round(r * e.b + (1 - r) * a.b)
  };
}
function Ni(e, n) {
  const t = n.getBoundingClientRect(), i = qi((e.clientX - t.left) / t.width), r = qi((e.clientY - t.top) / t.height);
  return { x: i, y: r };
}
function Ii(e, n) {
  let t = !1, i = null;
  const r = (c) => {
    if (!t || i == null) return;
    const p = c.clientX - i;
    i = c.clientX, p !== 0 && n.onDelta(p, c);
  }, a = (c) => {
    var p;
    if (t) {
      if (t = !1, i = null, c.pointerId != null)
        try {
          e.releasePointerCapture(c.pointerId);
        } catch {
        }
      window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", a), (p = n.onEnd) == null || p.call(n, c);
    }
  }, s = (c) => {
    var p;
    c.button === 0 && (c.preventDefault(), t = !0, i = c.clientX, e.setPointerCapture(c.pointerId), (p = n.onStart) == null || p.call(n, c), window.addEventListener("pointermove", r), window.addEventListener("pointerup", a), window.addEventListener("pointercancel", a));
  };
  return e.addEventListener("pointerdown", s), () => {
    e.removeEventListener("pointerdown", s), window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", a);
  };
}
function mn(e, n, t, i) {
  let r = !1;
  const a = (p) => {
    if (!r) return;
    const { x: f, y: b } = Ni(p, e);
    n(f, b);
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
    const { x: f, y: b } = Ni(p, e);
    n(f, b), window.addEventListener("pointermove", a), window.addEventListener("pointerup", s), window.addEventListener("pointercancel", s);
  };
  return e.addEventListener("pointerdown", c), () => {
    e.removeEventListener("pointerdown", c), window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", s);
  };
}
function qi(e) {
  return Math.min(1, Math.max(0, e));
}
const rt = 48;
function co(e, n) {
  const t = (i) => {
    if (i.button !== 0 || i.target.closest(".pcp-header-btn")) return;
    i.preventDefault();
    const a = n.getBoundingClientRect(), s = i.clientX - a.left, c = i.clientY - a.top;
    e.dataset.dragging = "true", e.setPointerCapture(i.pointerId);
    const p = (b) => {
      Ar(n, b.clientX - s, b.clientY - c);
    }, f = (b) => {
      e.removeAttribute("data-dragging");
      try {
        e.releasePointerCapture(b.pointerId);
      } catch {
      }
      window.removeEventListener("pointermove", p), window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f);
    };
    window.addEventListener("pointermove", p), window.addEventListener("pointerup", f), window.addEventListener("pointercancel", f);
  };
  return e.addEventListener("pointerdown", t), () => {
    e.removeEventListener("pointerdown", t), e.removeAttribute("data-dragging");
  };
}
function Ri(e) {
  const n = e.offsetWidth, t = e.offsetHeight;
  Ar(
    e,
    (window.innerWidth - n) / 2,
    (window.innerHeight - t) / 2
  );
}
function Ar(e, n, t) {
  const i = e.offsetWidth, r = e.offsetHeight, a = window.innerWidth - rt, s = window.innerHeight - rt, c = rt - i, p = rt - r;
  e.style.left = `${Math.min(a, Math.max(c, n))}px`, e.style.top = `${Math.min(s, Math.max(p, t))}px`;
}
const Fi = 8, we = 8;
function po(e, n = document) {
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
function ho(e, n) {
  const t = n.getBoundingClientRect(), i = e.offsetWidth, r = e.offsetHeight, a = window.innerWidth, s = window.innerHeight;
  let c = t.bottom + Fi, p = t.left;
  p + i > a - we && (p = t.right - i), p = Math.min(a - we - i, Math.max(we, p)), c + r > s - we && (c = t.top - r - Fi), c = Math.min(s - we - r, Math.max(we, c)), e.style.left = `${p}px`, e.style.top = `${c}px`;
}
const uo = ["hex", "rgb", "hsl", "oklch"], fo = {
  hex: "HEX",
  rgb: "RGB",
  hsl: "HSL",
  oklch: "OKLCH"
};
var $, y, N, V, ze, E, Ae, Je, R, J, I, U, Ue, F, _e, K, Ke, Z, le, Le, Q, ee, O, te, ne, ce, de, ie, j, o, _r, Lr, Sr, zn, An, Oe, _n, Ln, Sn, Cn, je, B, Tn, Cr, Ze, Pn, Tr, En, Pr, Er, Hr, Nr, st, Ye, Ir, qr, Rr, Fr, ot, Hn, Nn, Xr, Dr, Or, jr, Zr, Yr, Br, W, Be, In, qn, be, ke, lt, Rn, Fn, Wr, Xn, Gr, ct, dt, Dn, pt, G, Vr;
class bo extends HTMLElement {
  constructor() {
    super();
    w(this, o);
    w(this, $);
    w(this, y, { ...Pi });
    w(this, N, "hsl");
    w(this, V, eo());
    w(this, ze, null);
    w(this, E, []);
    w(this, Ae);
    w(this, Je);
    w(this, R);
    w(this, J);
    w(this, I);
    w(this, U);
    w(this, Ue);
    w(this, F);
    w(this, _e);
    w(this, K);
    w(this, Ke);
    w(this, Z);
    w(this, le);
    w(this, Le);
    w(this, Q);
    w(this, ee, null);
    w(this, O, null);
    w(this, te, null);
    w(this, ne, null);
    w(this, ce, null);
    w(this, de, null);
    w(this, ie, null);
    w(this, j, Pi.h);
    g(this, $, this.attachShadow({ mode: "open" }));
  }
  static get observedAttributes() {
    return ["value", "theme", "label", "header-action", "movable", "mode", "anchor", "open", "history"];
  }
  connectedCallback() {
    d(this, o, Lr).call(this), d(this, o, Sr).call(this), d(this, o, _r).call(this), d(this, o, Be).call(this, !1), d(this, o, Ln).call(this), d(this, o, je).call(this), this.popoverMode && this.open && requestAnimationFrame(() => d(this, o, Oe).call(this));
  }
  disconnectedCallback() {
    var t;
    l(this, ie) != null && (cancelAnimationFrame(l(this, ie)), g(this, ie, null)), (t = l(this, O)) == null || t.call(this), g(this, O, null), d(this, o, _n).call(this), l(this, E).forEach((i) => i()), g(this, E, []);
  }
  attributeChangedCallback(t, i, r) {
    if (this.isConnected) {
      if (t === "value" && r != null) {
        const a = me(r);
        a && (g(this, y, a), d(this, o, Be).call(this, !1));
        return;
      }
      t === "theme" && d(this, o, Ze).call(this), t === "movable" && d(this, o, je).call(this), (t === "mode" || t === "anchor") && (d(this, o, Ln).call(this), d(this, o, je).call(this)), t === "open" && this.popoverMode && r != null && requestAnimationFrame(() => {
        d(this, o, Oe).call(this), d(this, o, ke).call(this);
      }), t === "history" && d(this, o, Sn).call(this), t === "header-action" && d(this, o, Tr).call(this), t === "label" && d(this, o, Cn).call(this);
    }
  }
  get value() {
    return Ci(l(this, y));
  }
  set value(t) {
    const i = me(t);
    i && (g(this, y, i), d(this, o, Be).call(this));
  }
  get color() {
    return { ...l(this, y) };
  }
  set color(t) {
    g(this, y, q(t)), d(this, o, Be).call(this);
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
  /** Panel header title. Default `Pretty Color Picker`. Set `label=""` to hide. */
  get label() {
    const t = this.getAttribute("label");
    return t === null ? Ei : t;
  }
  set label(t) {
    t === Ei ? this.removeAttribute("label") : this.setAttribute("label", t);
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
          d(this, o, Oe).call(this), d(this, o, ke).call(this);
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
$ = new WeakMap(), y = new WeakMap(), N = new WeakMap(), V = new WeakMap(), ze = new WeakMap(), E = new WeakMap(), Ae = new WeakMap(), Je = new WeakMap(), R = new WeakMap(), J = new WeakMap(), I = new WeakMap(), U = new WeakMap(), Ue = new WeakMap(), F = new WeakMap(), _e = new WeakMap(), K = new WeakMap(), Ke = new WeakMap(), Z = new WeakMap(), le = new WeakMap(), Le = new WeakMap(), Q = new WeakMap(), ee = new WeakMap(), O = new WeakMap(), te = new WeakMap(), ne = new WeakMap(), ce = new WeakMap(), de = new WeakMap(), ie = new WeakMap(), j = new WeakMap(), o = new WeakSet(), _r = function() {
  const t = this.getAttribute("value");
  if (t) {
    const i = me(t);
    i && g(this, y, i);
  }
}, Lr = function() {
  const t = this.headerAction === "none" ? "" : this.headerAction === "theme" ? `<button type="button" class="pcp-header-btn pcp-theme-toggle" aria-label="Switch to light mode">${ri}</button>` : `<button type="button" class="pcp-header-btn pcp-close" aria-label="Close">
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
      <style>${ea}</style>
      <div class="pcp" part="container">
        <header class="pcp-header">
          <h2 class="pcp-title" part="title"></h2>
          ${t}
        </header>
        <div class="pcp-plane-wrap pcp-clip">
          <canvas class="pcp-plane" width="240" height="180" aria-label="Color plane"></canvas>
          <div class="pcp-cursor" aria-hidden="true"></div>
        </div>
        <div class="pcp-slider-wrapper">
          <div class="pcp-slider pcp-clip pcp-hue-row" aria-label="Hue">
            <div class="pcp-slider-fill pcp-slider-fill-hue"></div>
            <div class="pcp-slider-handle"></div>
          </div>
        </div>
        <div class="pcp-slider-wrapper">
          <div class="pcp-slider pcp-clip pcp-alpha-row" aria-label="Opacity">
            <div class="pcp-slider-fill pcp-slider-fill-alpha"></div>
            <div class="pcp-slider-handle"></div>
          </div>
        </div>
        <div class="pcp-tabs" role="tablist">
          <div class="pcp-tabs-pill"></div>
          ${uo.map((i) => `<button type="button" class="pcp-tab" role="tab" data-format="${i}">${fo[i]}</button>`).join("")}
        </div>
        <div class="pcp-inputs">
          <div class="pcp-swatch pcp-clip" aria-hidden="true">
            <span class="pcp-swatch-fill"></span>
          </div>
          <div class="pcp-fields"></div>
          <div class="pcp-field pcp-alpha-field">
            <span class="pcp-field-label">A</span>
            <input class="pcp-field-input pcp-alpha-input" type="text" inputmode="numeric" value="80%" aria-label="Opacity" />
          </div>
        </div>
        <div class="pcp-history-section">
          <p class="pcp-history-label">Last Used</p>
          <div class="pcp-history"></div>
        </div>
      </div>
    `, g(this, Ae, l(this, $).querySelector(".pcp-plane")), g(this, Je, l(this, $).querySelector(".pcp-plane-wrap")), g(this, R, l(this, $).querySelector(".pcp-cursor")), g(this, J, l(this, $).querySelector(".pcp-hue-row")), g(this, I, l(this, J).querySelector(".pcp-slider-handle")), g(this, U, l(this, $).querySelector(".pcp-alpha-row")), g(this, Ue, l(this, $).querySelector(".pcp-slider-fill-alpha")), g(this, F, l(this, U).querySelector(".pcp-slider-handle")), g(this, _e, l(this, $).querySelector(".pcp-tabs-pill")), g(this, K, l(this, $).querySelector(".pcp-fields")), g(this, Ke, l(this, $).querySelector(".pcp-swatch-fill")), g(this, Z, l(this, $).querySelector(".pcp-alpha-input")), g(this, Le, l(this, $).querySelector(".pcp-history-section")), g(this, le, l(this, $).querySelector(".pcp-history")), g(this, Q, l(this, $).querySelector(".pcp-title")), d(this, o, Cn).call(this), g(this, ee, l(this, $).querySelector(".pcp-theme-toggle")), d(this, o, Ze).call(this);
}, Sr = function() {
  d(this, o, Pn).call(this), l(this, E).push(
    mn(
      l(this, Je),
      (t, i) => d(this, o, Ir).call(this, t, i),
      () => d(this, o, G).call(this),
      () => d(this, o, B).call(this)
    )
  ), l(this, E).push(
    mn(
      l(this, J),
      (t) => d(this, o, qr).call(this, t),
      () => d(this, o, G).call(this),
      () => d(this, o, B).call(this)
    )
  ), l(this, E).push(
    mn(
      l(this, U),
      (t) => d(this, o, Rr).call(this, t),
      () => d(this, o, G).call(this),
      () => d(this, o, B).call(this)
    )
  ), l(this, E).push(d(this, o, En).call(this, l(this, J))), l(this, E).push(d(this, o, En).call(this, l(this, U))), l(this, $).querySelectorAll(".pcp-tab").forEach((t) => {
    t.addEventListener("click", () => {
      const i = t.dataset.format;
      i && i !== l(this, N) && (g(this, N, i), d(this, o, ke).call(this), d(this, o, Dn).call(this), d(this, o, dt).call(this), d(this, o, lt).call(this));
    });
  }), l(this, Z).addEventListener("focus", () => d(this, o, B).call(this)), l(this, Z).addEventListener("change", () => d(this, o, Hn).call(this)), l(this, Z).addEventListener("keydown", (t) => {
    t.key === "Enter" && d(this, o, Hn).call(this);
  }), l(this, E).push(d(this, o, Yr).call(this)), d(this, o, je).call(this), d(this, o, Sn).call(this);
}, zn = function() {
  this.popoverMode && this.hide(), this.dispatchEvent(new CustomEvent("close", { bubbles: !0, composed: !0 }));
}, An = function() {
  const t = this.anchor;
  return t ? po(t, this.ownerDocument) : null;
}, Oe = function() {
  g(this, ce, d(this, o, An).call(this)), l(this, ce) ? (ho(this, l(this, ce)), this.setAttribute("data-positioned", "")) : (this.movable || this.popoverMode) && (Ri(this), this.setAttribute("data-positioned", ""));
}, _n = function() {
  if (l(this, ne)) {
    const t = l(this, E).indexOf(l(this, ne));
    t >= 0 && l(this, E).splice(t, 1), l(this, ne).call(this), g(this, ne, null);
  }
  g(this, ce, null);
}, Ln = function() {
  if (d(this, o, _n).call(this), !this.popoverMode) {
    this.removeAttribute("open"), this.movable || (this.style.position = "", this.style.left = "", this.style.top = "", this.style.zIndex = "");
    return;
  }
  this.movable || (this.style.position = "fixed", this.style.zIndex = "1000");
  const t = d(this, o, An).call(this);
  g(this, ce, t);
  const i = (c) => {
    c.preventDefault(), c.stopPropagation(), this.toggle();
  }, r = (c) => {
    if (!this.open) return;
    const p = c.composedPath();
    p.includes(this) || t && p.includes(t) || this.hide();
  }, a = (c) => {
    c.key === "Escape" && this.open && (c.preventDefault(), d(this, o, zn).call(this));
  }, s = () => {
    this.open && d(this, o, Oe).call(this);
  };
  t == null || t.addEventListener("click", i), document.addEventListener("pointerdown", r, !0), document.addEventListener("keydown", a), window.addEventListener("resize", s), window.addEventListener("scroll", s, !0), g(this, ne, () => {
    t == null || t.removeEventListener("click", i), document.removeEventListener("pointerdown", r, !0), document.removeEventListener("keydown", a), window.removeEventListener("resize", s), window.removeEventListener("scroll", s, !0);
  }), l(this, E).push(l(this, ne));
}, Sn = function() {
  if (!this.history) {
    l(this, Le).hidden = !0, l(this, le).innerHTML = "";
    return;
  }
  d(this, o, pt).call(this);
}, Cn = function() {
  if (!l(this, Q)) return;
  if (this.getAttribute("label") === "") {
    l(this, Q).hidden = !0, l(this, Q).textContent = "";
    return;
  }
  l(this, Q).hidden = !1, l(this, Q).textContent = this.label;
}, je = function() {
  if (l(this, te)) {
    const r = l(this, E).indexOf(l(this, te));
    r >= 0 && l(this, E).splice(r, 1), l(this, te).call(this), g(this, te, null);
  }
  if (!(this.movable || this.popoverMode)) {
    this.popoverMode || (this.style.position = "", this.style.left = "", this.style.top = "", this.style.zIndex = ""), this.removeAttribute("data-positioned");
    return;
  }
  !this.popoverMode && !this.hasAttribute("data-positioned") && requestAnimationFrame(() => {
    Ri(this), this.setAttribute("data-positioned", "");
  });
  const i = l(this, $).querySelector(".pcp-header");
  i && (g(this, te, co(i, this)), l(this, E).push(l(this, te)));
}, B = function() {
  g(this, ze, { ...l(this, y) });
}, Tn = function() {
  return this.theme === "light" ? "light" : this.theme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}, Cr = function() {
  const t = d(this, o, Tn).call(this) === "light" ? "dark" : "light";
  this.theme = t, d(this, o, Ze).call(this);
  const i = { theme: t };
  this.dispatchEvent(
    new CustomEvent("themechange", {
      detail: i,
      bubbles: !0,
      composed: !0
    })
  );
}, Ze = function() {
  if (!l(this, ee)) return;
  const t = d(this, o, Tn).call(this) === "light";
  l(this, ee).innerHTML = t ? Qr : ri, l(this, ee).setAttribute(
    "aria-label",
    t ? "Switch to dark mode" : "Switch to light mode"
  );
}, Pn = function() {
  var r;
  (r = l(this, O)) == null || r.call(this), g(this, O, null);
  const t = l(this, $).querySelector(".pcp-close");
  if (t) {
    const a = () => d(this, o, zn).call(this);
    t.addEventListener("click", a), g(this, O, () => t.removeEventListener("click", a));
    return;
  }
  const i = l(this, $).querySelector(".pcp-theme-toggle");
  if (i) {
    const a = () => d(this, o, Cr).call(this);
    i.addEventListener("click", a), g(this, O, () => i.removeEventListener("click", a));
  }
}, Tr = function() {
  var r, a;
  (r = l(this, O)) == null || r.call(this), g(this, O, null);
  const t = l(this, $).querySelector(".pcp-header");
  if (!t || ((a = t.querySelector(".pcp-header-btn")) == null || a.remove(), g(this, ee, null), this.headerAction === "none")) return;
  const i = document.createElement("button");
  i.type = "button", i.className = `pcp-header-btn ${this.headerAction === "theme" ? "pcp-theme-toggle" : "pcp-close"}`, t.appendChild(i), this.headerAction === "theme" ? (g(this, ee, i), d(this, o, Ze).call(this)) : (i.setAttribute("aria-label", "Close"), i.innerHTML = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M4.25 4.25L11.75 11.75M11.75 4.25L4.25 11.75"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>`), d(this, o, Pn).call(this);
}, En = function(t) {
  const i = () => {
    t.dataset.active = "true";
  }, r = () => {
    const a = t.querySelector(".pcp-slider-handle");
    a != null && a.hasAttribute("data-dragging") || delete t.dataset.active;
  };
  return t.addEventListener("pointerenter", i), t.addEventListener("pointerleave", r), () => {
    t.removeEventListener("pointerenter", i), t.removeEventListener("pointerleave", r);
  };
}, Pr = function(t, i) {
  const r = Math.max(0, Math.min(1, i)) * 100;
  t.style.left = `max(1px, calc(${r}% - 1.5px))`;
}, Er = function() {
  const t = getComputedStyle(this), i = Hi(t.getPropertyValue("--pcp-checker-base").trim()) ?? { r: 255, g: 255, b: 255 }, r = Hi(t.getPropertyValue("--pcp-checker-tone").trim()) ?? { r: 204, g: 204, b: 204 };
  return { base: i, tone: r };
}, Hr = function(t, i) {
  const r = t.style.left.match(/calc\(([\d.]+)%/);
  return r ? parseFloat(r[1]) / 100 : i;
}, Nr = function(t, i) {
  if (i === "hue") return Ws(t);
  const { base: r, tone: a } = d(this, o, Er).call(this);
  return lo(yt(l(this, y)), t, r, a);
}, st = function(t, i, r) {
  const a = d(this, o, Nr).call(this, i, r), { backgroundColor: s, boxShadow: c } = oo(
    a.r,
    a.g,
    a.b
  );
  t.style.backgroundColor = s, t.style.boxShadow = c;
}, Ye = function(t, i, r) {
  d(this, o, Pr).call(this, t, i), d(this, o, st).call(this, t, i, r);
}, Ir = function(t, i) {
  l(this, R).dataset.dragging = "true";
  const r = d(this, o, be).call(this);
  d(this, o, W).call(this, Qs(t, i, r, l(this, y).alpha), !0, {
    refreshPlane: !1,
    refreshCursor: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  }), d(this, o, Rn).call(this, t, i);
}, qr = function(t) {
  l(this, J).dataset.active = "true", l(this, I).dataset.dragging = "true", g(this, j, t * 360), d(this, o, Ye).call(this, l(this, I), t, "hue"), d(this, o, W).call(this, wr(l(this, y), l(this, j)), !0, {
    refreshPlane: !0,
    refreshCursor: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  });
}, Rr = function(t) {
  l(this, U).dataset.active = "true", l(this, F).dataset.dragging = "true", d(this, o, W).call(this, q({ ...l(this, y), alpha: t }), !0, {
    refreshPlane: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  }), d(this, o, Ye).call(this, l(this, F), t, "alpha");
}, Fr = function() {
  const i = l(this, I).style.left.match(/calc\(([\d.]+)%/);
  return i ? parseFloat(i[1]) / 100 * 360 : l(this, j);
}, ot = function() {
  oe(l(this, y)) || g(this, j, Vs(l(this, y)));
}, Hn = function() {
  const t = l(this, Z).value.replace(/%/g, "").trim(), i = Number(t);
  if (Number.isNaN(i)) {
    d(this, o, ct).call(this);
    return;
  }
  d(this, o, W).call(this, q({ ...l(this, y), alpha: i / 100 }), !0), d(this, o, G).call(this);
}, Nn = function(t, i) {
  d(this, o, Xr).call(this, { [t]: i }, !0);
}, Xr = function(t, i = !0) {
  const r = {};
  at(l(this, y), l(this, N)).forEach((s) => {
    r[s.key] = t[s.key] ?? s.value;
  });
  const a = Ti(l(this, N), r, l(this, y));
  a && (d(this, o, W).call(this, a, !0), i && d(this, o, G).call(this));
}, Dr = function(t, i) {
  if (t.scrubStep != null)
    return i ? t.scrubStep * 0.1 : t.scrubStep;
  const r = t.min ?? 0, s = (t.max ?? 100) - r, c = t.step != null && t.step < 1 ? s / 120 : t.step ?? 1;
  return i ? c * 0.1 : c;
}, Or = function(t, i) {
  return t.step != null && t.step < 1 ? i.toFixed(3) : String(Math.round(i));
}, jr = function(t, i, r, a) {
  const s = l(this, K).querySelector(
    `.pcp-field-input[data-key="${t}"]`
  ), c = at(l(this, y), l(this, N)), p = c.find((C) => C.key === t);
  if (!p) return;
  const f = i.min ?? 0, b = i.max ?? 100, x = d(this, o, Dr).call(this, i, a), v = Number(s ? s.value.replace(/%/g, "").trim() : p.value);
  let M = v + r * x;
  if (i.step != null && i.step < 1 ? (M = Math.round(M / i.step) * i.step, M = Math.min(b, Math.max(f, M))) : M = Math.min(b, Math.max(f, Math.round(M))), Math.abs(M - v) < (i.step != null && i.step < 1 ? i.step / 2 : 0.5)) return;
  const A = d(this, o, Or).call(this, i, M);
  let z = null;
  if (l(this, N) === "hsl" && (t === "h" || t === "s" || t === "l"))
    z = Js(l(this, y), t, M);
  else if (l(this, N) === "oklch" && (t === "l" || t === "c" || t === "h"))
    z = Us(l(this, y), t, M, l(this, j));
  else {
    const C = {};
    c.forEach((L) => {
      C[L.key] = L.key === t ? A : L.value;
    }), z = Ti(l(this, N), C, l(this, y));
  }
  if (!z) return;
  t === "h" && g(this, j, D(M));
  const _ = t === "h" || l(this, N) === "oklch" && (t === "c" || t === "l");
  d(this, o, W).call(this, z, !0, {
    refreshFields: !1,
    refreshCursor: !0,
    refreshSliders: !0,
    syncPlaneHue: !_
  }), s && (s.value = A);
}, Zr = function(t, i) {
  const r = i ? 0.05 : 0.5, a = l(this, y).alpha * 100;
  let s = a + t * r;
  if (s = Math.min(100, Math.max(0, i ? s : Math.round(s))), Math.abs(s - a) < 0.01) return;
  const c = s / 100;
  d(this, o, W).call(this, q({ ...l(this, y), alpha: c }), !0, {
    refreshFields: !1,
    refreshPlane: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  }), l(this, Z).value = `${Math.round(s)}%`;
}, Yr = function() {
  const t = l(this, $).querySelector(".pcp-alpha-field .pcp-field-label");
  return t ? Ii(t, {
    onStart: () => {
      d(this, o, B).call(this), t.setAttribute("data-scrubbing", "true"), document.body.style.cursor = "ew-resize";
    },
    onDelta: (i, r) => d(this, o, Zr).call(this, i, r.shiftKey),
    onEnd: () => {
      t.removeAttribute("data-scrubbing"), document.body.style.cursor = "", d(this, o, G).call(this), d(this, o, ct).call(this);
    }
  }) : () => {
  };
}, Br = function(t) {
  l(this, N) !== "hex" && l(this, K).querySelectorAll(".pcp-field-label").forEach((i) => {
    var c;
    const r = i.closest(".pcp-field");
    if (!r) return;
    const a = (c = [...r.classList].find((p) => p.startsWith("pcp-field-") && p !== "pcp-field")) == null ? void 0 : c.slice(10);
    if (!a) return;
    const s = t.find((p) => p.key === a);
    !s || s.min == null || s.max == null || Ii(i, {
      onStart: () => {
        d(this, o, B).call(this), i.setAttribute("data-scrubbing", "true"), document.body.style.cursor = "ew-resize";
      },
      onDelta: (p, f) => d(this, o, jr).call(this, a, s, p, f.shiftKey),
      onEnd: () => {
        i.removeAttribute("data-scrubbing"), document.body.style.cursor = "", d(this, o, G).call(this), d(this, o, dt).call(this);
      }
    });
  });
}, W = function(t, i = !0, r) {
  let a = q(t);
  oe(a) && (a = xt(a, l(this, j))), g(this, y, a), !(l(this, R).hasAttribute("data-dragging") || l(this, I).hasAttribute("data-dragging")) && (r == null ? void 0 : r.syncPlaneHue) !== !1 && !oe(a) && d(this, o, ot).call(this), d(this, o, In).call(this, i, r);
}, Be = function(t = !0) {
  oe(l(this, y)) || d(this, o, ot).call(this), d(this, o, ke).call(this), d(this, o, Dn).call(this), d(this, o, In).call(this, t), d(this, o, pt).call(this);
}, In = function(t, i) {
  (i == null ? void 0 : i.refreshFields) !== !1 && d(this, o, dt).call(this), d(this, o, Gr).call(this), (i == null ? void 0 : i.refreshSliders) !== !1 && d(this, o, Fn).call(this), (i == null ? void 0 : i.refreshCursor) !== !1 && !l(this, R).hasAttribute("data-dragging") && d(this, o, lt).call(this), (i == null ? void 0 : i.refreshPlane) === !0 ? d(this, o, qn).call(this) : (i == null ? void 0 : i.refreshPlane) !== !1 && !l(this, R).hasAttribute("data-dragging") && !l(this, I).hasAttribute("data-dragging") && l(this, de) !== d(this, o, be).call(this) && d(this, o, qn).call(this), t && d(this, o, Vr).call(this);
}, qn = function() {
  l(this, ie) == null && g(this, ie, requestAnimationFrame(() => {
    g(this, ie, null);
    const t = d(this, o, be).call(this);
    l(this, de) !== t && (Si(l(this, Ae), t), g(this, de, t));
  }));
}, be = function() {
  return l(this, I).hasAttribute("data-dragging") ? d(this, o, Fr).call(this) : l(this, j);
}, ke = function() {
  const t = d(this, o, be).call(this);
  Si(l(this, Ae), t), g(this, de, t);
}, lt = function() {
  const { x: t, y: i } = Ks(l(this, y));
  d(this, o, Rn).call(this, t, i);
}, Rn = function(t, i) {
  l(this, R).style.left = `${t * 100}%`, l(this, R).style.top = `${i * 100}%`;
}, Fn = function() {
  const i = d(this, o, be).call(this) / 360;
  l(this, I).hasAttribute("data-dragging") ? d(this, o, st).call(this, l(this, I), i, "hue") : d(this, o, Ye).call(this, l(this, I), i, "hue");
  const r = l(this, F).hasAttribute("data-dragging") ? d(this, o, Hr).call(this, l(this, F), l(this, y).alpha) : l(this, y).alpha;
  l(this, F).hasAttribute("data-dragging") ? d(this, o, st).call(this, l(this, F), r, "alpha") : d(this, o, Ye).call(this, l(this, F), r, "alpha"), d(this, o, Wr).call(this);
}, Wr = function() {
  l(this, Ue).style.setProperty("--pcp-alpha-gradient", Gs(l(this, y)));
}, Xn = function(t, i) {
  const { r, g: a, b: s } = yt(i);
  t.style.setProperty("--swatch-solid", `rgb(${r}, ${a}, ${s})`), t.style.setProperty("--swatch-alpha", `rgba(${r}, ${a}, ${s}, ${i.alpha})`);
}, Gr = function() {
  d(this, o, Xn).call(this, l(this, Ke), l(this, y));
}, ct = function() {
  l(this, Z).value = `${Math.round(l(this, y).alpha * 100)}%`;
}, dt = function() {
  const t = at(l(this, y), l(this, N));
  l(this, K).dataset.format = l(this, N), l(this, K).innerHTML = t.map(
    (i) => `
        <div class="pcp-field pcp-field-${i.key}">
          <span class="pcp-field-label">${i.label}</span>
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
    r.addEventListener("focus", () => d(this, o, B).call(this)), r.addEventListener("change", () => d(this, o, Nn).call(this, a, r.value)), r.addEventListener("keydown", (s) => {
      s.key === "Enter" && d(this, o, Nn).call(this, a, r.value);
    });
  }), d(this, o, Br).call(this, t), d(this, o, ct).call(this);
}, Dn = function() {
  const t = l(this, $).querySelectorAll(".pcp-tab");
  let i = null;
  if (t.forEach((r) => {
    const a = r.dataset.format === l(this, N);
    r.setAttribute("data-active", String(a)), r.setAttribute("aria-selected", String(a)), a && (i = r);
  }), i) {
    const r = i, a = r.offsetLeft, s = r.offsetWidth;
    l(this, _e).style.left = `${a}px`, l(this, _e).style.width = `${s}px`;
  }
}, pt = function() {
  this.history && (l(this, Le).hidden = l(this, V).length === 0, l(this, le).innerHTML = l(this, V).map((t, i) => `
          <button type="button" class="pcp-history-swatch pcp-clip" data-index="${i}" aria-label="Color ${Ve(t)}">
            <span class="pcp-swatch-fill" data-history-fill="${i}"></span>
          </button>
        `).join(""), l(this, le).querySelectorAll("[data-history-fill]").forEach((t) => {
    const i = Number(t.dataset.historyFill), r = l(this, V)[i];
    r && d(this, o, Xn).call(this, t, r);
  }), l(this, le).querySelectorAll(".pcp-history-swatch").forEach((t) => {
    t.addEventListener("click", () => {
      const i = Number(t.dataset.index), r = l(this, V)[i];
      r && (d(this, o, B).call(this), d(this, o, W).call(this, { ...r }, !0, { refreshFields: !0 }), d(this, o, G).call(this));
    });
  }));
}, G = function() {
  const t = l(this, R).hasAttribute("data-dragging"), i = l(this, I).hasAttribute("data-dragging");
  delete l(this, R).dataset.dragging, delete l(this, I).dataset.dragging, delete l(this, F).dataset.dragging, delete l(this, J).dataset.active, delete l(this, U).dataset.active, (t || i) && (oe(l(this, y)) || d(this, o, ot).call(this), d(this, o, Fn).call(this), d(this, o, lt).call(this), l(this, de) !== d(this, o, be).call(this) && d(this, o, ke).call(this));
  const r = l(this, ze);
  g(this, ze, null), this.history && r && !zr(r, l(this, y)) && (g(this, V, to(r, l(this, V))), d(this, o, pt).call(this));
}, Vr = function() {
  const t = {
    color: { ...l(this, y) },
    css: Ci(l(this, y)),
    hex: Ve(l(this, y))
  };
  this.dispatchEvent(
    new CustomEvent("change", {
      detail: t,
      bubbles: !0,
      composed: !0
    })
  );
};
customElements.get("pretty-color-picker") || customElements.define("pretty-color-picker", bo);
export {
  Pi as DEFAULT_COLOR,
  Ei as DEFAULT_PICKER_LABEL,
  bo as PrettyColorPicker,
  at as formatFieldsFor,
  q as normalizeOklch,
  me as oklchFromCss,
  Ci as oklchToCss,
  Ve as oklchToHex,
  mo as oklchToRgbString,
  Ti as parseFormatFields
};
