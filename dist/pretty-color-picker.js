var Jn = (e) => {
  throw TypeError(e);
};
var It = (e, n, t) => n.has(e) || Jn("Cannot " + t);
var c = (e, n, t) => (It(e, n, "read from private field"), t ? t.call(e) : n.get(e)), k = (e, n, t) => n.has(e) ? Jn("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(e) : n.set(e, t), x = (e, n, t, i) => (It(e, n, "write to private field"), i ? i.call(e, t) : n.set(e, t), t), d = (e, n, t) => (It(e, n, "access private method"), t);
const Un = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z" opacity="0.2"/><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/></svg>', Zr = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z" opacity="0.2"/><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"/></svg>', Yr = '@import"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap";:host{--pcp-width: 260px;--pcp-radius-sm: 4px;--pcp-radius: 6px;--pcp-radius-lg: 9px;--pcp-panel-padding: 9px;--pcp-history-cols: 8;--pcp-history-swatch-size: calc( (var(--pcp-width) - 2 * var(--pcp-panel-padding) - 7 * var(--pcp-history-gap)) / var(--pcp-history-cols) );--pcp-control-height: var(--pcp-history-swatch-size);--pcp-tab-row-height: 32px;--pcp-field-label-size: 10px;--pcp-field-label-line: 12px;--pcp-field-label-gap: 3px;--pcp-field-value-size: 11px;--pcp-field-value-line: 15px;--pcp-field-input-height: 20px;--pcp-input-panel-height: calc( var(--pcp-field-label-line) + var(--pcp-field-label-gap) + var(--pcp-field-input-height) );--pcp-input-row-padding-y: 7px;--pcp-input-row-padding-x: 7px;--pcp-alpha-col-width: 4ch;--pcp-value-col-width: minmax(0, 1fr);--pcp-swatch-code-gap: 8px;--pcp-history-gap: 6px;--pcp-checker-size: 6px;--pcp-slider-handle-height: calc(var(--pcp-control-height) * 20 / 36);--pcp-field-input-radius: var(--pcp-radius-sm);--pcp-icon-button-size: 26px;--pcp-icon-button-radius: var(--pcp-radius-sm);--pcp-title-size: 12px;--pcp-title-line: 17px;--pcp-title-weight: 600;--pcp-title-tracking: -.24px;--pcp-ease-out: cubic-bezier(.175, .885, .32, 1.1);--pcp-font: "Geist", system-ui, -apple-system, "SF Pro Display", sans-serif;--pcp-mono: "Geist Mono", ui-monospace, monospace;display:inline-block;font-family:var(--pcp-font);-webkit-font-smoothing:antialiased;color:var(--pcp-text-primary)}:host([mode="popover"]),:host([movable]){position:fixed;z-index:1000;margin:0}:host([mode="popover"]:not([open])){display:none}:host([mode="popover"]) .pcp-header,:host([movable]) .pcp-header{cursor:grab;touch-action:none}:host([mode="popover"]) .pcp-header[data-dragging=true],:host([movable]) .pcp-header[data-dragging=true]{cursor:grabbing}:host,:host([theme="dark"]){color-scheme:dark;--pcp-bg: #212121;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: rgba(255, 255, 255, .05);--pcp-surface-hover: rgba(255, 255, 255, .1);--pcp-surface-active: rgba(255, 255, 255, .11);--pcp-tab-pill: rgba(255, 255, 255, .11);--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-root: #ffffff;--pcp-text-primary: rgba(255, 255, 255, .95);--pcp-text-label: rgba(255, 255, 255, .7);--pcp-text-secondary: rgba(255, 255, 255, .6);--pcp-text-tertiary: rgba(255, 255, 255, .4);--pcp-text-focus: #ffffff;--pcp-slider-handle: rgba(255, 255, 255, .95);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: 0 8px 32px rgba(0, 0, 0, .5)}:host([theme="light"]){color-scheme:light;--pcp-bg: #fafafa;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: rgba(0, 0, 0, .04);--pcp-surface-hover: rgba(0, 0, 0, .08);--pcp-surface-active: rgba(0, 0, 0, .1);--pcp-tab-pill: rgba(0, 0, 0, .1);--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-root: #000000;--pcp-text-primary: rgba(0, 0, 0, .9);--pcp-text-label: rgba(0, 0, 0, .6);--pcp-text-secondary: rgba(0, 0, 0, .55);--pcp-text-tertiary: rgba(0, 0, 0, .35);--pcp-text-focus: #000000;--pcp-slider-handle: rgba(0, 0, 0, .9);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 4px 20px rgba(0, 0, 0, .08)}@media(prefers-color-scheme:dark){:host([theme="system"]){color-scheme:dark;--pcp-bg: #212121;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: rgba(255, 255, 255, .05);--pcp-surface-hover: rgba(255, 255, 255, .1);--pcp-surface-active: rgba(255, 255, 255, .11);--pcp-tab-pill: rgba(255, 255, 255, .11);--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-root: #ffffff;--pcp-text-primary: rgba(255, 255, 255, .95);--pcp-text-label: rgba(255, 255, 255, .7);--pcp-text-secondary: rgba(255, 255, 255, .6);--pcp-text-tertiary: rgba(255, 255, 255, .4);--pcp-text-focus: #ffffff;--pcp-slider-handle: rgba(255, 255, 255, .95);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: 0 8px 32px rgba(0, 0, 0, .5)}}@media(prefers-color-scheme:light){:host([theme="system"]){color-scheme:light;--pcp-bg: #fafafa;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: rgba(0, 0, 0, .04);--pcp-surface-hover: rgba(0, 0, 0, .08);--pcp-surface-active: rgba(0, 0, 0, .1);--pcp-tab-pill: rgba(0, 0, 0, .1);--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-root: #000000;--pcp-text-primary: rgba(0, 0, 0, .9);--pcp-text-label: rgba(0, 0, 0, .6);--pcp-text-secondary: rgba(0, 0, 0, .55);--pcp-text-tertiary: rgba(0, 0, 0, .35);--pcp-text-focus: #000000;--pcp-slider-handle: rgba(0, 0, 0, .9);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 4px 20px rgba(0, 0, 0, .08)}}*,*:before,*:after{box-sizing:border-box}.pcp-clip{overflow:hidden;border-radius:var(--pcp-clip-radius, var(--pcp-radius-sm))}.pcp-swatch-fill{display:block;box-sizing:border-box;width:calc(100% + 2px);height:calc(100% + 2px);margin:-1px;border-radius:inherit;background-color:var(--pcp-checker-base);background-image:linear-gradient(to right,var(--swatch-solid, #000) 50%,transparent 50%),linear-gradient(to right,transparent 50%,var(--swatch-alpha, rgba(0, 0, 0, .5)) 50%),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,100% 100%,var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size);background-position:0 0,0 0,0 0,0 calc(var(--pcp-checker-size) / 2),calc(var(--pcp-checker-size) / 2) calc(var(--pcp-checker-size) / -2),calc(var(--pcp-checker-size) / -2) 0}@supports (background: -webkit-named-image(i)){.pcp-clip,.pcp-swatch-fill{clip-path:inset(0 round var(--pcp-clip-radius, var(--pcp-radius-sm)))}}.pcp{width:var(--pcp-width);background:var(--pcp-bg);border:1px solid var(--pcp-border);border-radius:var(--pcp-radius-lg);box-shadow:var(--pcp-elevation);padding:var(--pcp-panel-padding);-webkit-user-select:none;user-select:none}.pcp-header{display:flex;align-items:center;justify-content:space-between;gap:6px;padding-bottom:4px;margin-bottom:8px;min-height:var(--pcp-icon-button-size);border-bottom:1px solid var(--pcp-divider)}.pcp-title{flex:1;min-width:0;font-family:var(--pcp-font);font-size:var(--pcp-title-size);font-weight:var(--pcp-title-weight);line-height:var(--pcp-title-line);letter-spacing:var(--pcp-title-tracking);color:var(--pcp-text-root);margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pcp-header-btn{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--pcp-icon-button-size);height:var(--pcp-icon-button-size);padding:0;border:none;border-radius:var(--pcp-icon-button-radius);background:transparent;color:var(--pcp-text-focus);cursor:pointer;transition:background .15s var(--pcp-ease-out),color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-header-btn svg{width:13px;height:13px;flex-shrink:0}@media(hover:hover)and (pointer:fine){.pcp-header-btn:hover{background:var(--pcp-surface-hover);color:var(--pcp-text-primary)}}.pcp-header-btn:active{background:var(--pcp-surface-active);transform:scale(.97)}.pcp-header-btn:focus{outline:none}.pcp-header-btn:focus-visible{box-shadow:0 0 0 2px var(--pcp-bg),0 0 0 4px var(--pcp-focus-ring)}.pcp-plane-wrap{position:relative;width:100%;aspect-ratio:4 / 3;--pcp-clip-radius: var(--pcp-radius-sm);margin-bottom:5px;cursor:crosshair;touch-action:none}.pcp-plane{display:block;width:100%;height:100%}.pcp-cursor{position:absolute;width:13px;height:13px;margin:-6.5px 0 0 -6.5px;border:2px solid var(--pcp-cursor-ring);border-radius:50%;box-shadow:0 0 0 1px var(--pcp-cursor-outline),inset 0 0 0 1px #0000001f;pointer-events:none}.pcp-cursor[data-dragging=true]{transition:none}.pcp-slider-wrapper{position:relative;height:var(--pcp-control-height);margin-bottom:5px}.pcp-slider{position:absolute;top:0;right:0;bottom:0;left:0;cursor:pointer;-webkit-user-select:none;user-select:none;--pcp-clip-radius: var(--pcp-radius-sm);background:transparent;touch-action:none}.pcp-slider-fill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none}.pcp-slider-fill-hue{background:linear-gradient(to right,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.pcp-slider-fill-alpha{--pcp-alpha-gradient: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));background-color:var(--pcp-checker-base);background-image:var(--pcp-alpha-gradient),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size);background-position:0 0,0 0,0 calc(var(--pcp-checker-size) / 2),calc(var(--pcp-checker-size) / 2) calc(var(--pcp-checker-size) / -2),calc(var(--pcp-checker-size) / -2) 0}.pcp-slider-handle{position:absolute;top:50%;left:0;z-index:1;width:3px;height:var(--pcp-slider-handle-height);border:none;outline:none;border-radius:999px;background:var(--pcp-slider-handle);pointer-events:none;transform:translateY(-50%);opacity:.68;box-shadow:none;filter:none;transition:opacity .15s ease,background .12s ease}.pcp-slider:hover .pcp-slider-handle,.pcp-slider[data-active=true] .pcp-slider-handle{opacity:.68}.pcp-slider-handle[data-dragging=true]{opacity:.95}.pcp-tabs{position:relative;display:flex;align-items:center;height:var(--pcp-tab-row-height);box-sizing:border-box;padding:2px;margin-bottom:7px;background:transparent;border-radius:var(--pcp-radius)}.pcp-tabs-pill{position:absolute;top:2px;bottom:2px;left:0;width:0;background:var(--pcp-tab-pill);border-radius:5px;z-index:0;pointer-events:none;transition:left .2s var(--pcp-ease-out),width .2s var(--pcp-ease-out)}.pcp-tab{position:relative;z-index:1;flex:1;display:flex;align-items:center;justify-content:center;height:100%;padding:0 4px;font-family:inherit;font-size:11px;font-weight:500;line-height:1;text-align:center;background:transparent;border:none;color:var(--pcp-text-label);cursor:pointer;transition:color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-tab[data-active=true]{color:var(--pcp-text-primary)}.pcp-tab:active{transform:scale(.97)}.pcp-inputs{display:grid;width:100%;min-width:0;box-sizing:border-box;overflow:hidden;grid-template-columns:var(--pcp-input-panel-height) var(--pcp-swatch-code-gap) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-alpha-col-width);column-gap:3px;align-items:center;margin-bottom:8px;padding:var(--pcp-input-row-padding-y) var(--pcp-input-row-padding-x);background:var(--pcp-surface);border-radius:var(--pcp-radius-sm)}.pcp-swatch{grid-column:1;flex-shrink:0;width:var(--pcp-input-panel-height);height:var(--pcp-input-panel-height);--pcp-clip-radius: var(--pcp-radius-sm);position:relative}.pcp-fields{grid-column:3 / 6;display:grid;min-width:0;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:3px}.pcp-fields[data-format=hex] .pcp-field-hex{grid-column:1 / -1;justify-self:center;width:fit-content;align-items:center}.pcp-fields[data-format=hex] .pcp-field-label{text-align:center;white-space:nowrap}.pcp-fields[data-format=hex] .pcp-field-input{width:8ch;min-width:8ch;padding:0 4px}.pcp-fields[data-format=rgb] .pcp-field-r{grid-column:1}.pcp-fields[data-format=rgb] .pcp-field-g{grid-column:2}.pcp-fields[data-format=rgb] .pcp-field-b{grid-column:3}.pcp-fields[data-format=hsl] .pcp-field-h{grid-column:1}.pcp-fields[data-format=hsl] .pcp-field-s{grid-column:2}.pcp-fields[data-format=hsl] .pcp-field-l{grid-column:3}.pcp-fields[data-format=oklch] .pcp-field-l{grid-column:1}.pcp-fields[data-format=oklch] .pcp-field-c{grid-column:2}.pcp-fields[data-format=oklch] .pcp-field-h{grid-column:3}.pcp-alpha-field{grid-column:6;box-sizing:border-box;width:var(--pcp-alpha-col-width);min-width:var(--pcp-alpha-col-width);max-width:var(--pcp-alpha-col-width);align-items:center}.pcp-alpha-field .pcp-field-input{width:100%;min-width:0;padding:0;box-sizing:border-box}.pcp-field{min-width:0;display:flex;flex-direction:column;align-items:stretch;justify-content:center;gap:var(--pcp-field-label-gap)}.pcp-fields[data-format=oklch] .pcp-field-c .pcp-field-input{letter-spacing:-.02em;padding:0 1px}.pcp-field-label{display:block;font-size:var(--pcp-field-label-size);font-weight:500;line-height:var(--pcp-field-label-line);color:var(--pcp-text-label);margin:0;text-align:center}.pcp-fields:not([data-format=hex]) .pcp-field-label,.pcp-alpha-field .pcp-field-label{cursor:ew-resize;-webkit-user-select:none;user-select:none;touch-action:none;transition:color .15s var(--pcp-ease-out)}.pcp-field-label[data-scrubbing=true]{color:var(--pcp-text-primary)}.pcp-field-input{width:100%;min-width:0;min-height:var(--pcp-field-input-height);height:var(--pcp-field-input-height);padding:0 2px;font-family:var(--pcp-mono);font-size:var(--pcp-field-value-size);font-weight:500;line-height:var(--pcp-field-input-height);font-variant-numeric:tabular-nums;text-align:center;color:var(--pcp-text-secondary);background:transparent;border:none;border-radius:var(--pcp-field-input-radius);outline:none;box-shadow:none;transition:color .15s var(--pcp-ease-out),background .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-field-input:hover{background:var(--pcp-surface-hover)}}.pcp-field-input:focus{color:var(--pcp-text-focus);background:transparent;border-radius:var(--pcp-field-input-radius);box-shadow:none;outline:none}.pcp-field-input:active{background:var(--pcp-surface-active)}.pcp-history-section[hidden]{display:none}.pcp-history-label{font-size:10px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--pcp-text-label);margin:0 0 5px}.pcp-history{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:var(--pcp-history-gap);width:100%}.pcp-history-swatch{-moz-appearance:none;appearance:none;-webkit-appearance:none;display:block;width:100%;aspect-ratio:1;height:auto;flex-shrink:0;padding:0;border:none;background:none;--pcp-clip-radius: 4px;cursor:pointer;transition:opacity .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-history-swatch:hover{opacity:.85}}.pcp-history-swatch:active{opacity:.7}@media(prefers-reduced-motion:reduce){.pcp-header-btn,.pcp-tab,.pcp-tabs-pill,.pcp-cursor,.pcp-slider-handle,.pcp-history-swatch{transition:none}.pcp-tab:active,.pcp-header-btn:active{transform:none}}', Ci = (e, n) => {
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
}, Br = {
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
}, Wr = (e) => Ci(Br[e.toLowerCase()], 6), Gr = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, Vr = (e) => {
  let n;
  return (n = e.match(Gr)) ? Ci(parseInt(n[1], 16), n[1].length) : void 0;
}, le = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", je = `${le}%`, Cn = `(?:${le}%|${le})`, Jr = `(?:${le}(deg|grad|rad|turn)|${le})`, _e = "\\s*,\\s*", Ur = new RegExp(
  `^rgba?\\(\\s*${le}${_e}${le}${_e}${le}\\s*(?:,\\s*${Cn}\\s*)?\\)$`
), Kr = new RegExp(
  `^rgba?\\(\\s*${je}${_e}${je}${_e}${je}\\s*(?:,\\s*${Cn}\\s*)?\\)$`
), Qr = (e) => {
  let n = { mode: "rgb" }, t;
  if (t = e.match(Ur))
    t[1] !== void 0 && (n.r = t[1] / 255), t[2] !== void 0 && (n.g = t[2] / 255), t[3] !== void 0 && (n.b = t[3] / 255);
  else if (t = e.match(Kr))
    t[1] !== void 0 && (n.r = t[1] / 100), t[2] !== void 0 && (n.g = t[2] / 100), t[3] !== void 0 && (n.b = t[3] / 100);
  else
    return;
  return t[4] !== void 0 ? n.alpha = Math.max(0, Math.min(1, t[4] / 100)) : t[5] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[5]))), n;
}, dt = (e, n) => e === void 0 ? void 0 : typeof e != "object" ? Fi(e) : e.mode !== void 0 ? e : n ? { ...e, mode: n } : void 0, X = (e = "rgb") => (n) => (n = dt(n, e)) !== void 0 ? (
  // if the color's mode corresponds to our target mode
  n.mode === e ? (
    // then just return the color
    n
  ) : (
    // otherwise check to see if we have a dedicated
    // converter for the target mode
    O[n.mode][e] ? (
      // and return its result...
      O[n.mode][e](n)
    ) : (
      // ...otherwise pass through RGB as an intermediary step.
      // if the target mode is RGB...
      e === "rgb" ? (
        // just return the RGB
        O[n.mode].rgb(n)
      ) : (
        // otherwise convert color.mode -> RGB -> target_mode
        O.rgb[e](O[n.mode].rgb(n))
      )
    )
  )
) : void 0, O = {}, Ni = {}, pt = [], Ii = {}, ea = (e) => e, w = (e) => (O[e.mode] = {
  ...O[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((n) => {
  O[n] || (O[n] = {}), O[n][e.mode] = e.fromMode[n];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((n) => {
  if (e.ranges[n] === void 0 && (e.ranges[n] = [0, 1]), !e.interpolate[n])
    throw new Error(`Missing interpolator for: ${n}`);
  typeof e.interpolate[n] == "function" && (e.interpolate[n] = {
    use: e.interpolate[n]
  }), e.interpolate[n].fixup || (e.interpolate[n].fixup = ea);
}), Ni[e.mode] = e, (e.parse || []).forEach((n) => {
  ta(n, e.mode);
}), X(e.mode)), vt = (e) => Ni[e], ta = (e, n) => {
  if (typeof e == "string") {
    if (!n)
      throw new Error("'mode' required when 'parser' is a string");
    Ii[e] = n;
  } else typeof e == "function" && pt.indexOf(e) < 0 && pt.push(e);
}, hn = /[^\x00-\x7F]|[a-zA-Z_]/, na = /[^\x00-\x7F]|[-\w]/, h = {
  Function: "function",
  Ident: "ident",
  Number: "number",
  Percentage: "percentage",
  ParenClose: ")",
  None: "none",
  Hue: "hue",
  Alpha: "alpha"
};
let g = 0;
function Qe(e) {
  let n = e[g], t = e[g + 1];
  return n === "-" || n === "+" ? /\d/.test(t) || t === "." && /\d/.test(e[g + 2]) : n === "." ? /\d/.test(t) : /\d/.test(n);
}
function un(e) {
  if (g >= e.length)
    return !1;
  let n = e[g];
  if (hn.test(n))
    return !0;
  if (n === "-") {
    if (e.length - g < 2)
      return !1;
    let t = e[g + 1];
    return !!(t === "-" || hn.test(t));
  }
  return !1;
}
const ia = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function Fe(e) {
  let n = "";
  if ((e[g] === "-" || e[g] === "+") && (n += e[g++]), n += et(e), e[g] === "." && /\d/.test(e[g + 1]) && (n += e[g++] + et(e)), (e[g] === "e" || e[g] === "E") && ((e[g + 1] === "-" || e[g + 1] === "+") && /\d/.test(e[g + 2]) ? n += e[g++] + e[g++] + et(e) : /\d/.test(e[g + 1]) && (n += e[g++] + et(e))), un(e)) {
    let t = ht(e);
    return t === "deg" || t === "rad" || t === "turn" || t === "grad" ? { type: h.Hue, value: n * ia[t] } : void 0;
  }
  return e[g] === "%" ? (g++, { type: h.Percentage, value: +n }) : { type: h.Number, value: +n };
}
function et(e) {
  let n = "";
  for (; /\d/.test(e[g]); )
    n += e[g++];
  return n;
}
function ht(e) {
  let n = "";
  for (; g < e.length && na.test(e[g]); )
    n += e[g++];
  return n;
}
function ra(e) {
  let n = ht(e);
  return e[g] === "(" ? (g++, { type: h.Function, value: n }) : n === "none" ? { type: h.None, value: void 0 } : { type: h.Ident, value: n };
}
function aa(e = "") {
  let n = e.trim(), t = [], i;
  for (g = 0; g < n.length; ) {
    if (i = n[g++], i === `
` || i === "	" || i === " ") {
      for (; g < n.length && (n[g] === `
` || n[g] === "	" || n[g] === " "); )
        g++;
      continue;
    }
    if (i === ",")
      return;
    if (i === ")") {
      t.push({ type: h.ParenClose });
      continue;
    }
    if (i === "+") {
      if (g--, Qe(n)) {
        t.push(Fe(n));
        continue;
      }
      return;
    }
    if (i === "-") {
      if (g--, Qe(n)) {
        t.push(Fe(n));
        continue;
      }
      if (un(n)) {
        t.push({ type: h.Ident, value: ht(n) });
        continue;
      }
      return;
    }
    if (i === ".") {
      if (g--, Qe(n)) {
        t.push(Fe(n));
        continue;
      }
      return;
    }
    if (i === "/") {
      for (; g < n.length && (n[g] === `
` || n[g] === "	" || n[g] === " "); )
        g++;
      let r;
      if (Qe(n) && (r = Fe(n), r.type !== h.Hue)) {
        t.push({ type: h.Alpha, value: r });
        continue;
      }
      if (un(n) && ht(n) === "none") {
        t.push({
          type: h.Alpha,
          value: { type: h.None, value: void 0 }
        });
        continue;
      }
      return;
    }
    if (/\d/.test(i)) {
      g--, t.push(Fe(n));
      continue;
    }
    if (hn.test(i)) {
      g--, t.push(ra(n));
      continue;
    }
    return;
  }
  return t;
}
function sa(e) {
  e._i = 0;
  let n = e[e._i++];
  if (!n || n.type !== h.Function || n.value !== "color" || (n = e[e._i++], n.type !== h.Ident))
    return;
  const t = Ii[n.value];
  if (!t)
    return;
  const i = { mode: t }, r = qi(e, !1);
  if (!r)
    return;
  const a = vt(t).channels;
  for (let s = 0, l, p; s < a.length; s++)
    l = r[s], p = a[s], l.type !== h.None && (i[p] = l.type === h.Number ? l.value : l.value / 100, p === "alpha" && (i[p] = Math.max(0, Math.min(1, i[p]))));
  return i;
}
function qi(e, n) {
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
function oa(e, n) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== h.Function)
    return;
  let i = qi(e, n);
  if (i)
    return i.unshift(t.value), i;
}
const Fi = (e) => {
  if (typeof e != "string")
    return;
  const n = aa(e), t = n ? oa(n, !0) : void 0;
  let i, r = 0, a = pt.length;
  for (; r < a; )
    if ((i = pt[r++](e, t)) !== void 0)
      return i;
  return n ? sa(n) : void 0;
};
function la(e, n) {
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
const ca = (e) => e === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0, da = (e, n, t) => e + t * (n - e), pa = (e) => {
  let n = [];
  for (let t = 0; t < e.length - 1; t++) {
    let i = e[t], r = e[t + 1];
    i === void 0 && r === void 0 ? n.push(void 0) : i !== void 0 && r !== void 0 ? n.push([i, r]) : n.push(i !== void 0 ? [i, i] : [r, r]);
  }
  return n;
}, ha = (e) => (n) => {
  let t = pa(n);
  return (i) => {
    let r = i * t.length, a = i >= 1 ? t.length - 1 : Math.max(Math.floor(r), 0), s = t[a];
    return s === void 0 ? void 0 : e(s[0], s[1], r - a);
  };
}, u = ha(da), P = (e) => {
  let n = !1, t = e.map((i) => i !== void 0 ? (n = !0, i) : 1);
  return n ? t : e;
}, Ae = {
  mode: "rgb",
  channels: ["r", "g", "b", "alpha"],
  parse: [
    la,
    Vr,
    Qr,
    Wr,
    ca,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: u,
    g: u,
    b: u,
    alpha: { use: u, fixup: P }
  },
  gamut: !0,
  white: { r: 1, g: 1, b: 1 },
  black: { r: 0, g: 0, b: 0 }
}, qt = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), Kn = (e) => {
  let n = qt(e.r), t = qt(e.g), i = qt(e.b), r = {
    mode: "xyz65",
    x: 0.5766690429101305 * n + 0.1855582379065463 * t + 0.1882286462349947 * i,
    y: 0.297344975250536 * n + 0.6273635662554661 * t + 0.0752914584939979 * i,
    z: 0.0270313613864123 * n + 0.0706888525358272 * t + 0.9913375368376386 * i
  };
  return e.alpha !== void 0 && (r.alpha = e.alpha), r;
}, Ft = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), Qn = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = {
    mode: "a98",
    r: Ft(
      e * 2.0415879038107465 - n * 0.5650069742788597 - 0.3447313507783297 * t
    ),
    g: Ft(
      e * -0.9692436362808798 + n * 1.8759675015077206 + 0.0415550574071756 * t
    ),
    b: Ft(
      e * 0.0134442806320312 - n * 0.1183623922310184 + 1.0151749943912058 * t
    )
  };
  return i !== void 0 && (r.alpha = i), r;
}, Rt = (e = 0) => {
  const n = Math.abs(e);
  return n <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((n + 0.055) / 1.055, 2.4);
}, Le = ({ r: e, g: n, b: t, alpha: i }) => {
  let r = {
    mode: "lrgb",
    r: Rt(e),
    g: Rt(n),
    b: Rt(t)
  };
  return i !== void 0 && (r.alpha = i), r;
}, ge = (e) => {
  let { r: n, g: t, b: i, alpha: r } = Le(e), a = {
    mode: "xyz65",
    x: 0.4123907992659593 * n + 0.357584339383878 * t + 0.1804807884018343 * i,
    y: 0.2126390058715102 * n + 0.715168678767756 * t + 0.0721923153607337 * i,
    z: 0.0193308187155918 * n + 0.119194779794626 * t + 0.9505321522496607 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, Xt = (e = 0) => {
  const n = Math.abs(e);
  return n > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(n, 1 / 2.4) - 0.055) : e * 12.92;
}, Pe = ({ r: e, g: n, b: t, alpha: i }, r = "rgb") => {
  let a = {
    mode: r,
    r: Xt(e),
    g: Xt(n),
    b: Xt(t)
  };
  return i !== void 0 && (a.alpha = i), a;
}, me = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Pe({
    r: e * 3.2409699419045226 - n * 1.537383177570094 - 0.4986107602930034 * t,
    g: e * -0.9692436362808796 + n * 1.8759675015077204 + 0.0415550574071756 * t,
    b: e * 0.0556300796969936 - n * 0.2039769588889765 + 1.0569715142428784 * t
  });
  return i !== void 0 && (r.alpha = i), r;
}, ua = {
  ...Ae,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => Qn(ge(e)),
    xyz65: Qn
  },
  toMode: {
    rgb: (e) => me(Kn(e)),
    xyz65: Kn
  }
}, H = (e) => (e = e % 360) < 0 ? e + 360 : e, fa = (e, n) => e.map((t, i, r) => {
  if (t === void 0)
    return t;
  let a = H(t);
  return i === 0 || e[i - 1] === void 0 ? a : n(a - H(r[i - 1]));
}).reduce((t, i) => !t.length || i === void 0 || t[t.length - 1] === void 0 ? (t.push(i), t) : (t.push(i + t[t.length - 1]), t), []), ee = (e) => fa(e, (n) => Math.abs(n) <= 180 ? n : n - 360 * Math.sign(n)), T = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0], ba = Math.PI / 180, ga = 180 / Math.PI;
let ei = T[3] * T[4], ti = T[1] * T[4], ni = T[1] * T[2] - T[0] * T[3];
const ma = ({ r: e, g: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = (ni * t + e * ei - n * ti) / (ni + ei - ti), a = t - r, s = (T[4] * (n - r) - T[2] * a) / T[3], l = {
    mode: "cubehelix",
    l: r,
    s: r === 0 || r === 1 ? void 0 : Math.sqrt(a * a + s * s) / (T[4] * r * (1 - r))
  };
  return l.s && (l.h = Math.atan2(s, a) * ga - 120), i !== void 0 && (l.alpha = i), l;
}, va = ({ h: e, s: n, l: t, alpha: i }) => {
  let r = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * ba, t === void 0 && (t = 0);
  let a = n === void 0 ? 0 : n * t * (1 - t), s = Math.cos(e), l = Math.sin(e);
  return r.r = t + a * (T[0] * s + T[1] * l), r.g = t + a * (T[2] * s + T[3] * l), r.b = t + a * (T[4] * s + T[5] * l), i !== void 0 && (r.alpha = i), r;
}, xt = (e, n) => {
  if (e.h === void 0 || n.h === void 0 || !e.s || !n.s)
    return 0;
  let t = H(e.h), i = H(n.h), r = Math.sin((i - t + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * n.s) * r;
}, xa = (e, n) => {
  if (e.h === void 0 || n.h === void 0)
    return 0;
  let t = H(e.h), i = H(n.h);
  return Math.abs(i - t) > 180 ? t - (i - 360 * Math.sign(i - t)) : i - t;
}, yt = (e, n) => {
  if (e.h === void 0 || n.h === void 0 || !e.c || !n.c)
    return 0;
  let t = H(e.h), i = H(n.h), r = Math.sin((i - t + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * n.c) * r;
}, te = (e) => {
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
}, ya = {
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
    rgb: ma
  },
  toMode: {
    rgb: va
  },
  interpolate: {
    h: {
      use: u,
      fixup: ee
    },
    s: u,
    l: u,
    alpha: {
      use: u,
      fixup: P
    }
  },
  difference: {
    h: xt
  },
  average: {
    h: te
  }
}, ce = ({ l: e, a: n, b: t, alpha: i }, r = "lch") => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let a = Math.sqrt(n * n + t * t), s = { mode: r, l: e, c: a };
  return a && (s.h = H(Math.atan2(t, n) * 180 / Math.PI)), i !== void 0 && (s.alpha = i), s;
}, de = ({ l: e, c: n, h: t, alpha: i }, r = "lab") => {
  t === void 0 && (t = 0);
  let a = {
    mode: r,
    l: e,
    a: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    b: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return i !== void 0 && (a.alpha = i), a;
}, Ri = Math.pow(29, 3) / Math.pow(3, 3), Xi = Math.pow(6, 3) / Math.pow(29, 3), L = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: (1 - 0.3457 - 0.3585) / 0.3585
}, Me = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: (1 - 0.3127 - 0.329) / 0.329
};
let Dt = (e) => Math.pow(e, 3) > Xi ? Math.pow(e, 3) : (116 * e - 16) / Ri;
const Di = ({ l: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = (e + 16) / 116, a = n / 500 + r, s = r - t / 200, l = {
    mode: "xyz65",
    x: Dt(a) * Me.X,
    y: Dt(r) * Me.Y,
    z: Dt(s) * Me.Z
  };
  return i !== void 0 && (l.alpha = i), l;
}, Mt = (e) => me(Di(e)), Ot = (e) => e > Xi ? Math.cbrt(e) : (Ri * e + 16) / 116, Oi = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Ot(e / Me.X), a = Ot(n / Me.Y), s = Ot(t / Me.Z), l = {
    mode: "lab65",
    l: 116 * a - 16,
    a: 500 * (r - a),
    b: 200 * (a - s)
  };
  return i !== void 0 && (l.alpha = i), l;
}, wt = (e) => {
  let n = Oi(ge(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, ut = 1, ji = 1, Ze = 26 / 180 * Math.PI, ft = Math.cos(Ze), bt = Math.sin(Ze), Zi = 100 / Math.log(139 / 100), fn = ({ l: e, c: n, h: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = {
    mode: "lab65",
    l: (Math.exp(e * ut / Zi) - 1) / 39e-4
  }, a = (Math.exp(0.0435 * n * ji * ut) - 1) / 0.075, s = a * Math.cos(t / 180 * Math.PI - Ze), l = a * Math.sin(t / 180 * Math.PI - Ze);
  return r.a = s * ft - l / 0.83 * bt, r.b = s * bt + l / 0.83 * ft, i !== void 0 && (r.alpha = i), r;
}, bn = ({ l: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = n * ft + t * bt, a = 0.83 * (t * ft - n * bt), s = Math.sqrt(r * r + a * a), l = {
    mode: "dlch",
    l: Zi / ut * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * s) / (0.0435 * ji * ut)
  };
  return l.c && (l.h = H((Math.atan2(a, r) + Ze) / Math.PI * 180)), i !== void 0 && (l.alpha = i), l;
}, ii = (e) => fn(ce(e, "dlch")), ri = (e) => de(bn(e), "dlab"), Ma = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: ii,
    rgb: (e) => Mt(ii(e))
  },
  fromMode: {
    lab65: ri,
    rgb: (e) => ri(wt(e))
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
      fixup: P
    }
  }
}, wa = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: fn,
    dlab: (e) => de(e, "dlab"),
    rgb: (e) => Mt(fn(e))
  },
  fromMode: {
    lab65: bn,
    dlab: (e) => ce(e, "dlch"),
    rgb: (e) => bn(wt(e))
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
      fixup: ee
    },
    alpha: {
      use: u,
      fixup: P
    }
  },
  difference: {
    h: yt
  },
  average: {
    h: te
  }
};
function ka({ h: e, s: n, i: t, alpha: i }) {
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
function $a({ r: e, g: n, b: t, alpha: i }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.max(e, n, t), a = Math.min(e, n, t), s = {
    mode: "hsi",
    s: e + n + t === 0 ? 0 : 1 - 3 * a / (e + n + t),
    i: (e + n + t) / 3
  };
  return r - a !== 0 && (s.h = (r === e ? (n - t) / (r - a) + (n < t) * 6 : r === n ? (t - e) / (r - a) + 2 : (e - n) / (r - a) + 4) * 60), i !== void 0 && (s.alpha = i), s;
}
const za = {
  mode: "hsi",
  toMode: {
    rgb: ka
  },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: {
    rgb: $a
  },
  channels: ["h", "s", "i", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: u, fixup: ee },
    s: u,
    i: u,
    alpha: { use: u, fixup: P }
  },
  difference: {
    h: xt
  },
  average: {
    h: te
  }
};
function _a({ h: e, s: n, l: t, alpha: i }) {
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
function Aa({ r: e, g: n, b: t, alpha: i }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.max(e, n, t), a = Math.min(e, n, t), s = {
    mode: "hsl",
    s: r === a ? 0 : (r - a) / (1 - Math.abs(r + a - 1)),
    l: 0.5 * (r + a)
  };
  return r - a !== 0 && (s.h = (r === e ? (n - t) / (r - a) + (n < t) * 6 : r === n ? (t - e) / (r - a) + 2 : (e - n) / (r - a) + 4) * 60), i !== void 0 && (s.alpha = i), s;
}
const La = (e, n) => {
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
}, Pa = new RegExp(
  `^hsla?\\(\\s*${Jr}${_e}${je}${_e}${je}\\s*(?:,\\s*${Cn}\\s*)?\\)$`
), Sa = (e) => {
  let n = e.match(Pa);
  if (!n) return;
  let t = { mode: "hsl" };
  return n[3] !== void 0 ? t.h = +n[3] : n[1] !== void 0 && n[2] !== void 0 && (t.h = La(n[1], n[2])), n[4] !== void 0 && (t.s = Math.min(Math.max(0, n[4] / 100), 1)), n[5] !== void 0 && (t.l = Math.min(Math.max(0, n[5] / 100), 1)), n[6] !== void 0 ? t.alpha = Math.max(0, Math.min(1, n[6] / 100)) : n[7] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[7]))), t;
};
function Ta(e, n) {
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
const Yi = {
  mode: "hsl",
  toMode: {
    rgb: _a
  },
  fromMode: {
    rgb: Aa
  },
  channels: ["h", "s", "l", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Ta, Sa],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: u, fixup: ee },
    s: u,
    l: u,
    alpha: { use: u, fixup: P }
  },
  difference: {
    h: xt
  },
  average: {
    h: te
  }
};
function Bi({ h: e, s: n, v: t, alpha: i }) {
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
function Wi({ r: e, g: n, b: t, alpha: i }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.max(e, n, t), a = Math.min(e, n, t), s = {
    mode: "hsv",
    s: r === 0 ? 0 : 1 - a / r,
    v: r
  };
  return r - a !== 0 && (s.h = (r === e ? (n - t) / (r - a) + (n < t) * 6 : r === n ? (t - e) / (r - a) + 2 : (e - n) / (r - a) + 4) * 60), i !== void 0 && (s.alpha = i), s;
}
const Gi = {
  mode: "hsv",
  toMode: {
    rgb: Bi
  },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: {
    rgb: Wi
  },
  channels: ["h", "s", "v", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: u, fixup: ee },
    s: u,
    v: u,
    alpha: { use: u, fixup: P }
  },
  difference: {
    h: xt
  },
  average: {
    h: te
  }
};
function Ea({ h: e, w: n, b: t, alpha: i }) {
  if (n === void 0 && (n = 0), t === void 0 && (t = 0), n + t > 1) {
    let r = n + t;
    n /= r, t /= r;
  }
  return Bi({
    h: e,
    s: t === 1 ? 1 : 1 - n / (1 - t),
    v: 1 - t,
    alpha: i
  });
}
function Ha(e) {
  let n = Wi(e);
  if (n === void 0) return;
  let t = n.s !== void 0 ? n.s : 0, i = n.v !== void 0 ? n.v : 0, r = {
    mode: "hwb",
    w: (1 - t) * i,
    b: 1 - i
  };
  return n.h !== void 0 && (r.h = n.h), n.alpha !== void 0 && (r.alpha = n.alpha), r;
}
function Ca(e, n) {
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
const Na = {
  mode: "hwb",
  toMode: {
    rgb: Ea
  },
  fromMode: {
    rgb: Ha
  },
  channels: ["h", "w", "b", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Ca],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: u, fixup: ee },
    w: u,
    b: u,
    alpha: { use: u, fixup: P }
  },
  difference: {
    h: xa
  },
  average: {
    h: te
  }
}, Vi = 203, kt = 0.1593017578125, Ji = 78.84375, $t = 0.8359375, zt = 18.8515625, _t = 18.6875;
function jt(e) {
  if (e < 0) return 0;
  const n = Math.pow(e, 1 / Ji);
  return 1e4 * Math.pow(Math.max(0, n - $t) / (zt - _t * n), 1 / kt);
}
function Zt(e) {
  if (e < 0) return 0;
  const n = Math.pow(e / 1e4, kt);
  return Math.pow(($t + zt * n) / (1 + _t * n), Ji);
}
const Yt = (e) => Math.max(e / Vi, 0), ai = ({ i: e, t: n, p: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const r = jt(
    e + 0.008609037037932761 * n + 0.11102962500302593 * t
  ), a = jt(
    e - 0.00860903703793275 * n - 0.11102962500302599 * t
  ), s = jt(
    e + 0.5600313357106791 * n - 0.32062717498731885 * t
  ), l = {
    mode: "xyz65",
    x: Yt(
      2.070152218389422 * r - 1.3263473389671556 * a + 0.2066510476294051 * s
    ),
    y: Yt(
      0.3647385209748074 * r + 0.680566024947227 * a - 0.0453045459220346 * s
    ),
    z: Yt(
      -0.049747207535812 * r - 0.0492609666966138 * a + 1.1880659249923042 * s
    )
  };
  return i !== void 0 && (l.alpha = i), l;
}, Bt = (e = 0) => Math.max(e * Vi, 0), si = ({ x: e, y: n, z: t, alpha: i }) => {
  const r = Bt(e), a = Bt(n), s = Bt(t), l = Zt(
    0.3592832590121217 * r + 0.6976051147779502 * a - 0.0358915932320289 * s
  ), p = Zt(
    -0.1920808463704995 * r + 1.1004767970374323 * a + 0.0753748658519118 * s
  ), f = Zt(
    0.0070797844607477 * r + 0.0748396662186366 * a + 0.8433265453898765 * s
  ), b = 0.5 * l + 0.5 * p, v = 1.61376953125 * l - 3.323486328125 * p + 1.709716796875 * f, m = 4.378173828125 * l - 4.24560546875 * p - 0.132568359375 * f, M = { mode: "itp", i: b, t: v, p: m };
  return i !== void 0 && (M.alpha = i), M;
}, Ia = {
  mode: "itp",
  channels: ["i", "t", "p", "alpha"],
  parse: ["--ictcp"],
  serialize: "--ictcp",
  toMode: {
    xyz65: ai,
    rgb: (e) => me(ai(e))
  },
  fromMode: {
    xyz65: si,
    rgb: (e) => si(ge(e))
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
    alpha: { use: u, fixup: P }
  }
}, qa = 134.03437499999998, Fa = 16295499532821565e-27, Wt = (e) => {
  if (e < 0) return 0;
  let n = Math.pow(e / 1e4, kt);
  return Math.pow(($t + zt * n) / (1 + _t * n), qa);
}, Gt = (e = 0) => Math.max(e * 203, 0), Ui = ({ x: e, y: n, z: t, alpha: i }) => {
  e = Gt(e), n = Gt(n), t = Gt(t);
  let r = 1.15 * e - 0.15 * t, a = 0.66 * n + 0.34 * e, s = Wt(0.41478972 * r + 0.579999 * a + 0.014648 * t), l = Wt(-0.20151 * r + 1.120649 * a + 0.0531008 * t), p = Wt(-0.0166008 * r + 0.2648 * a + 0.6684799 * t), f = (s + l) / 2, b = {
    mode: "jab",
    j: 0.44 * f / (1 - 0.56 * f) - Fa,
    a: 3.524 * s - 4.066708 * l + 0.542708 * p,
    b: 0.199076 * s + 1.096799 * l - 1.295875 * p
  };
  return i !== void 0 && (b.alpha = i), b;
}, Ra = 134.03437499999998, oi = 16295499532821565e-27, Vt = (e) => {
  if (e < 0) return 0;
  let n = Math.pow(e, 1 / Ra);
  return 1e4 * Math.pow(($t - n) / (_t * n - zt), 1 / kt);
}, Jt = (e) => e / 203, Ki = ({ j: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = (e + oi) / (0.44 + 0.56 * (e + oi)), a = Vt(r + 0.13860504 * n + 0.058047316 * t), s = Vt(r - 0.13860504 * n - 0.058047316 * t), l = Vt(r - 0.096019242 * n - 0.8118919 * t), p = {
    mode: "xyz65",
    x: Jt(
      1.661373024652174 * a - 0.914523081304348 * s + 0.23136208173913045 * l
    ),
    y: Jt(
      -0.3250758611844533 * a + 1.571847026732543 * s - 0.21825383453227928 * l
    ),
    z: Jt(-0.090982811 * a - 0.31272829 * s + 1.5227666 * l)
  };
  return i !== void 0 && (p.alpha = i), p;
}, Qi = (e) => {
  let n = Ui(ge(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, er = (e) => me(Ki(e)), Xa = {
  mode: "jab",
  channels: ["j", "a", "b", "alpha"],
  parse: ["--jzazbz"],
  serialize: "--jzazbz",
  fromMode: {
    rgb: Qi,
    xyz65: Ui
  },
  toMode: {
    rgb: er,
    xyz65: Ki
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
    alpha: { use: u, fixup: P }
  }
}, li = ({ j: e, a: n, b: t, alpha: i }) => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.sqrt(n * n + t * t), a = {
    mode: "jch",
    j: e,
    c: r
  };
  return r && (a.h = H(Math.atan2(t, n) * 180 / Math.PI)), i !== void 0 && (a.alpha = i), a;
}, ci = ({ j: e, c: n, h: t, alpha: i }) => {
  t === void 0 && (t = 0);
  let r = {
    mode: "jab",
    j: e,
    a: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    b: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return i !== void 0 && (r.alpha = i), r;
}, Da = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: ci,
    rgb: (e) => er(ci(e))
  },
  fromMode: {
    rgb: (e) => li(Qi(e)),
    jab: li
  },
  channels: ["j", "c", "h", "alpha"],
  ranges: {
    j: [0, 0.221],
    c: [0, 0.19],
    h: [0, 360]
  },
  interpolate: {
    h: { use: u, fixup: ee },
    c: u,
    j: u,
    alpha: { use: u, fixup: P }
  },
  difference: {
    h: yt
  },
  average: {
    h: te
  }
}, At = Math.pow(29, 3) / Math.pow(3, 3), Nn = Math.pow(6, 3) / Math.pow(29, 3);
let Ut = (e) => Math.pow(e, 3) > Nn ? Math.pow(e, 3) : (116 * e - 16) / At;
const In = ({ l: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = (e + 16) / 116, a = n / 500 + r, s = r - t / 200, l = {
    mode: "xyz50",
    x: Ut(a) * L.X,
    y: Ut(r) * L.Y,
    z: Ut(s) * L.Z
  };
  return i !== void 0 && (l.alpha = i), l;
}, Je = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Pe({
    r: e * 3.1341359569958707 - n * 1.6173863321612538 - 0.4906619460083532 * t,
    g: e * -0.978795502912089 + n * 1.916254567259524 + 0.03344273116131949 * t,
    b: e * 0.07195537988411677 - n * 0.2289768264158322 + 1.405386058324125 * t
  });
  return i !== void 0 && (r.alpha = i), r;
}, tr = (e) => Je(In(e)), Ue = (e) => {
  let { r: n, g: t, b: i, alpha: r } = Le(e), a = {
    mode: "xyz50",
    x: 0.436065742824811 * n + 0.3851514688337912 * t + 0.14307845442264197 * i,
    y: 0.22249319175623702 * n + 0.7168870538238823 * t + 0.06061979053616537 * i,
    z: 0.013923904500943465 * n + 0.09708128566574634 * t + 0.7140993584005155 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, Kt = (e) => e > Nn ? Math.cbrt(e) : (At * e + 16) / 116, qn = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Kt(e / L.X), a = Kt(n / L.Y), s = Kt(t / L.Z), l = {
    mode: "lab",
    l: 116 * a - 16,
    a: 500 * (r - a),
    b: 200 * (a - s)
  };
  return i !== void 0 && (l.alpha = i), l;
}, nr = (e) => {
  let n = qn(Ue(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
};
function Oa(e, n) {
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
const Fn = {
  mode: "lab",
  toMode: {
    xyz50: In,
    rgb: tr
  },
  fromMode: {
    xyz50: qn,
    rgb: nr
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  },
  parse: [Oa],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: u,
    a: u,
    b: u,
    alpha: { use: u, fixup: P }
  }
}, ja = {
  ...Fn,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: Di,
    rgb: Mt
  },
  fromMode: {
    xyz65: Oi,
    rgb: wt
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function Za(e, n) {
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
const Rn = {
  mode: "lch",
  toMode: {
    lab: de,
    rgb: (e) => tr(de(e))
  },
  fromMode: {
    rgb: (e) => ce(nr(e)),
    lab: ce
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  },
  parse: [Za],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: u, fixup: ee },
    c: u,
    l: u,
    alpha: { use: u, fixup: P }
  },
  difference: {
    h: yt
  },
  average: {
    h: te
  }
}, Ya = {
  ...Rn,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => de(e, "lab65"),
    rgb: (e) => Mt(de(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => ce(wt(e), "lch65"),
    lab65: (e) => ce(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, ir = ({ l: e, u: n, v: t, alpha: i }) => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.sqrt(n * n + t * t), a = {
    mode: "lchuv",
    l: e,
    c: r
  };
  return r && (a.h = H(Math.atan2(t, n) * 180 / Math.PI)), i !== void 0 && (a.alpha = i), a;
}, rr = ({ l: e, c: n, h: t, alpha: i }) => {
  t === void 0 && (t = 0);
  let r = {
    mode: "luv",
    l: e,
    u: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    v: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return i !== void 0 && (r.alpha = i), r;
}, ar = (e, n, t) => 4 * e / (e + 15 * n + 3 * t), sr = (e, n, t) => 9 * n / (e + 15 * n + 3 * t), Ba = ar(L.X, L.Y, L.Z), Wa = sr(L.X, L.Y, L.Z), Ga = (e) => e <= Nn ? At * e : 116 * Math.cbrt(e) - 16, gn = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Ga(n / L.Y), a = ar(e, n, t), s = sr(e, n, t);
  !isFinite(a) || !isFinite(s) ? r = a = s = 0 : (a = 13 * r * (a - Ba), s = 13 * r * (s - Wa));
  let l = {
    mode: "luv",
    l: r,
    u: a,
    v: s
  };
  return i !== void 0 && (l.alpha = i), l;
}, Va = (e, n, t) => 4 * e / (e + 15 * n + 3 * t), Ja = (e, n, t) => 9 * n / (e + 15 * n + 3 * t), Ua = Va(L.X, L.Y, L.Z), Ka = Ja(L.X, L.Y, L.Z), mn = ({ l: e, u: n, v: t, alpha: i }) => {
  if (e === void 0 && (e = 0), e === 0)
    return { mode: "xyz50", x: 0, y: 0, z: 0 };
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = n / (13 * e) + Ua, a = t / (13 * e) + Ka, s = L.Y * (e <= 8 ? e / At : Math.pow((e + 16) / 116, 3)), l = s * (9 * r) / (4 * a), p = s * (12 - 3 * r - 20 * a) / (4 * a), f = { mode: "xyz50", x: l, y: s, z: p };
  return i !== void 0 && (f.alpha = i), f;
}, Qa = (e) => ir(gn(Ue(e))), es = (e) => Je(mn(rr(e))), ts = {
  mode: "lchuv",
  toMode: {
    luv: rr,
    rgb: es
  },
  fromMode: {
    rgb: Qa,
    luv: ir
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
    h: { use: u, fixup: ee },
    c: u,
    l: u,
    alpha: { use: u, fixup: P }
  },
  difference: {
    h: yt
  },
  average: {
    h: te
  }
}, ns = {
  ...Ae,
  mode: "lrgb",
  toMode: {
    rgb: Pe
  },
  fromMode: {
    rgb: Le
  },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, is = {
  mode: "luv",
  toMode: {
    xyz50: mn,
    rgb: (e) => Je(mn(e))
  },
  fromMode: {
    xyz50: gn,
    rgb: (e) => gn(Ue(e))
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
    alpha: { use: u, fixup: P }
  }
}, or = ({ r: e, g: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.cbrt(
    0.412221469470763 * e + 0.5363325372617348 * n + 0.0514459932675022 * t
  ), a = Math.cbrt(
    0.2119034958178252 * e + 0.6806995506452344 * n + 0.1073969535369406 * t
  ), s = Math.cbrt(
    0.0883024591900564 * e + 0.2817188391361215 * n + 0.6299787016738222 * t
  ), l = {
    mode: "oklab",
    l: 0.210454268309314 * r + 0.7936177747023054 * a - 0.0040720430116193 * s,
    a: 1.9779985324311684 * r - 2.42859224204858 * a + 0.450593709617411 * s,
    b: 0.0259040424655478 * r + 0.7827717124575296 * a - 0.8086757549230774 * s
  };
  return i !== void 0 && (l.alpha = i), l;
}, Lt = (e) => {
  let n = or(Le(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, Ke = ({ l: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.pow(e + 0.3963377773761749 * n + 0.2158037573099136 * t, 3), a = Math.pow(e - 0.1055613458156586 * n - 0.0638541728258133 * t, 3), s = Math.pow(e - 0.0894841775298119 * n - 1.2914855480194092 * t, 3), l = {
    mode: "lrgb",
    r: 4.076741636075957 * r - 3.3077115392580616 * a + 0.2309699031821044 * s,
    g: -1.2684379732850317 * r + 2.6097573492876887 * a - 0.3413193760026573 * s,
    b: -0.0041960761386756 * r - 0.7034186179359362 * a + 1.7076146940746117 * s
  };
  return i !== void 0 && (l.alpha = i), l;
}, Pt = (e) => Pe(Ke(e));
function vn(e) {
  const i = 1.170873786407767;
  return 0.5 * (i * e - 0.206 + Math.sqrt((i * e - 0.206) * (i * e - 0.206) + 4 * 0.03 * i * e));
}
function gt(e) {
  return (e * e + 0.206 * e) / (1.170873786407767 * (e + 0.03));
}
function rs(e, n) {
  let t, i, r, a, s, l, p, f;
  -1.88170328 * e - 0.80936493 * n > 1 ? (t = 1.19086277, i = 1.76576728, r = 0.59662641, a = 0.75515197, s = 0.56771245, l = 4.0767416621, p = -3.3077115913, f = 0.2309699292) : 1.81444104 * e - 1.19445276 * n > 1 ? (t = 0.73956515, i = -0.45954404, r = 0.08285427, a = 0.1254107, s = 0.14503204, l = -1.2684380046, p = 2.6097574011, f = -0.3413193965) : (t = 1.35733652, i = -915799e-8, r = -1.1513021, a = -0.50559606, s = 692167e-8, l = -0.0041960863, p = -0.7034186147, f = 1.707614701);
  let b = t + i * e + r * n + a * e * e + s * e * n, v = 0.3963377774 * e + 0.2158037573 * n, m = -0.1055613458 * e - 0.0638541728 * n, M = -0.0894841775 * e - 1.291485548 * n;
  {
    let A = 1 + b * v, $ = 1 + b * m, z = 1 + b * M, S = A * A * A, C = $ * $ * $, ne = z * z * z, Te = 3 * v * A * A, Ee = 3 * m * $ * $, He = 3 * M * z * z, Ce = 6 * v * v * A, Ne = 6 * m * m * $, Ie = 6 * M * M * z, ve = l * S + p * C + f * ne, pe = l * Te + p * Ee + f * He, qe = l * Ce + p * Ne + f * Ie;
    b = b - ve * pe / (pe * pe - 0.5 * ve * qe);
  }
  return b;
}
function Xn(e, n) {
  let t = rs(e, n), i = Ke({ l: 1, a: t * e, b: t * n }), r = Math.cbrt(1 / Math.max(i.r, i.g, i.b)), a = r * t;
  return [r, a];
}
function as(e, n, t, i, r, a = null) {
  a || (a = Xn(e, n));
  let s;
  if ((t - r) * a[1] - (a[0] - r) * i <= 0)
    s = a[1] * r / (i * a[0] + a[1] * (r - t));
  else {
    s = a[1] * (r - 1) / (i * (a[0] - 1) + a[1] * (r - t));
    {
      let l = t - r, p = i, f = 0.3963377774 * e + 0.2158037573 * n, b = -0.1055613458 * e - 0.0638541728 * n, v = -0.0894841775 * e - 1.291485548 * n, m = l + p * f, M = l + p * b, A = l + p * v;
      {
        let $ = r * (1 - s) + s * t, z = s * i, S = $ + z * f, C = $ + z * b, ne = $ + z * v, Te = S * S * S, Ee = C * C * C, He = ne * ne * ne, Ce = 3 * m * S * S, Ne = 3 * M * C * C, Ie = 3 * A * ne * ne, ve = 6 * m * m * S, pe = 6 * M * M * C, qe = 6 * A * A * ne, Zn = 4.0767416621 * Te - 3.3077115913 * Ee + 0.2309699292 * He - 1, St = 4.0767416621 * Ce - 3.3077115913 * Ne + 0.2309699292 * Ie, Dr = 4.0767416621 * ve - 3.3077115913 * pe + 0.2309699292 * qe, Yn = St / (St * St - 0.5 * Zn * Dr), Tt = -Zn * Yn, Bn = -1.2684380046 * Te + 2.6097574011 * Ee - 0.3413193965 * He - 1, Et = -1.2684380046 * Ce + 2.6097574011 * Ne - 0.3413193965 * Ie, Or = -1.2684380046 * ve + 2.6097574011 * pe - 0.3413193965 * qe, Wn = Et / (Et * Et - 0.5 * Bn * Or), Ht = -Bn * Wn, Gn = -0.0041960863 * Te - 0.7034186147 * Ee + 1.707614701 * He - 1, Ct = -0.0041960863 * Ce - 0.7034186147 * Ne + 1.707614701 * Ie, jr = -0.0041960863 * ve - 0.7034186147 * pe + 1.707614701 * qe, Vn = Ct / (Ct * Ct - 0.5 * Gn * jr), Nt = -Gn * Vn;
        Tt = Yn >= 0 ? Tt : 1e6, Ht = Wn >= 0 ? Ht : 1e6, Nt = Vn >= 0 ? Nt : 1e6, s += Math.min(Tt, Math.min(Ht, Nt));
      }
    }
  }
  return s;
}
function Dn(e, n, t = null) {
  t || (t = Xn(e, n));
  let i = t[0], r = t[1];
  return [r / i, r / (1 - i)];
}
function lr(e, n, t) {
  let i = Xn(n, t), r = as(n, t, e, 1, e, i), a = Dn(n, t, i), s = 0.11516993 + 1 / (7.4477897 + 4.1590124 * t + n * (-2.19557347 + 1.75198401 * t + n * (-2.13704948 - 10.02301043 * t + n * (-4.24894561 + 5.38770819 * t + 4.69891013 * n)))), l = 0.11239642 + 1 / (1.6132032 - 0.68124379 * t + n * (0.40370612 + 0.90148123 * t + n * (-0.27087943 + 0.6122399 * t + n * (299215e-8 - 0.45399568 * t - 0.14661872 * n)))), p = r / Math.min(e * a[0], (1 - e) * a[1]), f = e * s, b = (1 - e) * l, v = 0.9 * p * Math.sqrt(
    Math.sqrt(
      1 / (1 / (f * f * f * f) + 1 / (b * b * b * b))
    )
  );
  return f = e * 0.4, b = (1 - e) * 0.8, [Math.sqrt(1 / (1 / (f * f) + 1 / (b * b))), v, r];
}
function di(e) {
  const n = e.l !== void 0 ? e.l : 0, t = e.a !== void 0 ? e.a : 0, i = e.b !== void 0 ? e.b : 0, r = { mode: "okhsl", l: vn(n) };
  e.alpha !== void 0 && (r.alpha = e.alpha);
  let a = Math.sqrt(t * t + i * i);
  if (!a)
    return r.s = 0, r;
  let [s, l, p] = lr(n, t / a, i / a), f;
  if (a < l) {
    let b = 0, v = 0.8 * s, m = 1 - v / l;
    f = (a - b) / (v + m * (a - b)) * 0.8;
  } else {
    let b = l, v = 0.2 * l * l * 1.25 * 1.25 / s, m = 1 - v / (p - l);
    f = 0.8 + 0.2 * ((a - b) / (v + m * (a - b)));
  }
  return f && (r.s = f, r.h = H(Math.atan2(i, t) * 180 / Math.PI)), r;
}
function pi(e) {
  let n = e.h !== void 0 ? e.h : 0, t = e.s !== void 0 ? e.s : 0, i = e.l !== void 0 ? e.l : 0;
  const r = { mode: "oklab", l: gt(i) };
  if (e.alpha !== void 0 && (r.alpha = e.alpha), !t || i === 1)
    return r.a = r.b = 0, r;
  let a = Math.cos(n / 180 * Math.PI), s = Math.sin(n / 180 * Math.PI), [l, p, f] = lr(r.l, a, s), b, v, m, M;
  t < 0.8 ? (b = 1.25 * t, v = 0, m = 0.8 * l, M = 1 - m / p) : (b = 5 * (t - 0.8), v = p, m = 0.2 * p * p * 1.25 * 1.25 / l, M = 1 - m / (f - p));
  let A = v + b * m / (1 - M * b);
  return r.a = A * a, r.b = A * s, r;
}
const ss = {
  ...Yi,
  mode: "okhsl",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--okhsl"],
  serialize: "--okhsl",
  fromMode: {
    oklab: di,
    rgb: (e) => di(Lt(e))
  },
  toMode: {
    oklab: pi,
    rgb: (e) => Pt(pi(e))
  }
};
function hi(e) {
  let n = e.l !== void 0 ? e.l : 0, t = e.a !== void 0 ? e.a : 0, i = e.b !== void 0 ? e.b : 0, r = Math.sqrt(t * t + i * i), a = r ? t / r : 1, s = r ? i / r : 1, [l, p] = Dn(a, s), f = 0.5, b = 1 - f / l, v = p / (r + n * p), m = v * n, M = v * r, A = gt(m), $ = M * A / m, z = Ke({ l: A, a: a * $, b: s * $ }), S = Math.cbrt(
    1 / Math.max(z.r, z.g, z.b, 0)
  );
  n = n / S, r = r / S * vn(n) / n, n = vn(n);
  const C = {
    mode: "okhsv",
    s: r ? (f + p) * M / (p * f + p * b * M) : 0,
    v: n ? n / m : 0
  };
  return C.s && (C.h = H(Math.atan2(i, t) * 180 / Math.PI)), e.alpha !== void 0 && (C.alpha = e.alpha), C;
}
function ui(e) {
  const n = { mode: "oklab" };
  e.alpha !== void 0 && (n.alpha = e.alpha);
  const t = e.h !== void 0 ? e.h : 0, i = e.s !== void 0 ? e.s : 0, r = e.v !== void 0 ? e.v : 0, a = Math.cos(t / 180 * Math.PI), s = Math.sin(t / 180 * Math.PI), [l, p] = Dn(a, s), f = 0.5, b = 1 - f / l, v = 1 - i * f / (f + p - p * b * i), m = i * p * f / (f + p - p * b * i), M = gt(v), A = m * M / v, $ = Ke({
    l: M,
    a: a * A,
    b: s * A
  }), z = Math.cbrt(
    1 / Math.max($.r, $.g, $.b, 0)
  ), S = gt(r * v), C = m * S / v;
  return n.l = S * z, n.a = C * a * z, n.b = C * s * z, n;
}
const os = {
  ...Gi,
  mode: "okhsv",
  channels: ["h", "s", "v", "alpha"],
  parse: ["--okhsv"],
  serialize: "--okhsv",
  fromMode: {
    oklab: hi,
    rgb: (e) => hi(Lt(e))
  },
  toMode: {
    oklab: ui,
    rgb: (e) => Pt(ui(e))
  }
};
function ls(e, n) {
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
const cs = {
  ...Fn,
  mode: "oklab",
  toMode: {
    lrgb: Ke,
    rgb: Pt
  },
  fromMode: {
    lrgb: or,
    rgb: Lt
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [ls],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function ds(e, n) {
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
const ps = {
  ...Rn,
  mode: "oklch",
  toMode: {
    oklab: (e) => de(e, "oklab"),
    rgb: (e) => Pt(de(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => ce(Lt(e), "oklch"),
    oklab: (e) => ce(e, "oklch")
  },
  parse: [ds],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, fi = (e) => {
  let { r: n, g: t, b: i, alpha: r } = Le(e), a = {
    mode: "xyz65",
    x: 0.486570948648216 * n + 0.265667693169093 * t + 0.1982172852343625 * i,
    y: 0.2289745640697487 * n + 0.6917385218365062 * t + 0.079286914093745 * i,
    z: 0 * n + 0.0451133818589026 * t + 1.043944368900976 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, bi = ({ x: e, y: n, z: t, alpha: i }) => {
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
}, hs = {
  ...Ae,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => bi(ge(e)),
    xyz65: bi
  },
  toMode: {
    rgb: (e) => me(fi(e)),
    xyz65: fi
  }
}, Qt = (e) => {
  let n = Math.abs(e);
  return n >= 1 / 512 ? Math.sign(e) * Math.pow(n, 1 / 1.8) : 16 * e;
}, gi = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = {
    mode: "prophoto",
    r: Qt(
      e * 1.3457868816471585 - n * 0.2555720873797946 - 0.0511018649755453 * t
    ),
    g: Qt(
      e * -0.5446307051249019 + n * 1.5082477428451466 + 0.0205274474364214 * t
    ),
    b: Qt(e * 0 + n * 0 + 1.2119675456389452 * t)
  };
  return i !== void 0 && (r.alpha = i), r;
}, en = (e = 0) => {
  let n = Math.abs(e);
  return n >= 16 / 512 ? Math.sign(e) * Math.pow(n, 1.8) : e / 16;
}, mi = (e) => {
  let n = en(e.r), t = en(e.g), i = en(e.b), r = {
    mode: "xyz50",
    x: 0.7977666449006423 * n + 0.1351812974005331 * t + 0.0313477341283922 * i,
    y: 0.2880748288194013 * n + 0.7118352342418731 * t + 899369387256e-16 * i,
    z: 0 * n + 0 * t + 0.8251046025104602 * i
  };
  return e.alpha !== void 0 && (r.alpha = e.alpha), r;
}, us = {
  ...Ae,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: gi,
    rgb: (e) => gi(Ue(e))
  },
  toMode: {
    xyz50: mi,
    rgb: (e) => Je(mi(e))
  }
}, vi = 1.09929682680944, fs = 0.018053968510807, tn = (e) => {
  const n = Math.abs(e);
  return n > fs ? (Math.sign(e) || 1) * (vi * Math.pow(n, 0.45) - (vi - 1)) : 4.5 * e;
}, xi = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = {
    mode: "rec2020",
    r: tn(
      e * 1.7166511879712683 - n * 0.3556707837763925 - 0.2533662813736599 * t
    ),
    g: tn(
      e * -0.6666843518324893 + n * 1.6164812366349395 + 0.0157685458139111 * t
    ),
    b: tn(
      e * 0.0176398574453108 - n * 0.0427706132578085 + 0.9421031212354739 * t
    )
  };
  return i !== void 0 && (r.alpha = i), r;
}, yi = 1.09929682680944, bs = 0.018053968510807, nn = (e = 0) => {
  let n = Math.abs(e);
  return n < bs * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((n + yi - 1) / yi, 1 / 0.45);
}, Mi = (e) => {
  let n = nn(e.r), t = nn(e.g), i = nn(e.b), r = {
    mode: "xyz65",
    x: 0.6369580483012911 * n + 0.1446169035862083 * t + 0.1688809751641721 * i,
    y: 0.262700212011267 * n + 0.6779980715188708 * t + 0.059301716469862 * i,
    z: 0 * n + 0.0280726930490874 * t + 1.0609850577107909 * i
  };
  return e.alpha !== void 0 && (r.alpha = e.alpha), r;
}, gs = {
  ...Ae,
  mode: "rec2020",
  fromMode: {
    xyz65: xi,
    rgb: (e) => xi(ge(e))
  },
  toMode: {
    xyz65: Mi,
    rgb: (e) => me(Mi(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, ue = 0.0037930732552754493, cr = Math.cbrt(ue), rn = (e) => Math.cbrt(e) - cr, ms = (e) => {
  const { r: n, g: t, b: i, alpha: r } = Le(e), a = rn(0.3 * n + 0.622 * t + 0.078 * i + ue), s = rn(0.23 * n + 0.692 * t + 0.078 * i + ue), l = rn(
    0.2434226892454782 * n + 0.2047674442449682 * t + 0.5518098665095535 * i + ue
  ), p = {
    mode: "xyb",
    x: (a - s) / 2,
    y: (a + s) / 2,
    /* Apply default chroma from luma (subtract Y from B) */
    b: l - (a + s) / 2
  };
  return r !== void 0 && (p.alpha = r), p;
}, an = (e) => Math.pow(e + cr, 3), vs = ({ x: e, y: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const r = an(e + n) - ue, a = an(n - e) - ue, s = an(t + n) - ue, l = Pe({
    r: 11.031566904639861 * r - 9.866943908131562 * a - 0.16462299650829934 * s,
    g: -3.2541473810744237 * r + 4.418770377582723 * a - 0.16462299650829934 * s,
    b: -3.6588512867136815 * r + 2.7129230459360922 * a + 1.9459282407775895 * s
  });
  return i !== void 0 && (l.alpha = i), l;
}, xs = {
  mode: "xyb",
  channels: ["x", "y", "b", "alpha"],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: {
    rgb: vs
  },
  fromMode: {
    rgb: ms
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
    alpha: { use: u, fixup: P }
  }
}, ys = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: Je,
    lab: qn
  },
  fromMode: {
    rgb: Ue,
    lab: In
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
    alpha: { use: u, fixup: P }
  }
}, Ms = (e) => {
  let { x: n, y: t, z: i, alpha: r } = e;
  n === void 0 && (n = 0), t === void 0 && (t = 0), i === void 0 && (i = 0);
  let a = {
    mode: "xyz50",
    x: 1.0479298208405488 * n + 0.0229467933410191 * t - 0.0501922295431356 * i,
    y: 0.0296278156881593 * n + 0.990434484573249 * t - 0.0170738250293851 * i,
    z: -0.0092430581525912 * n + 0.0150551448965779 * t + 0.7518742899580008 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, ws = (e) => {
  let { x: n, y: t, z: i, alpha: r } = e;
  n === void 0 && (n = 0), t === void 0 && (t = 0), i === void 0 && (i = 0);
  let a = {
    mode: "xyz65",
    x: 0.9554734527042182 * n - 0.0230985368742614 * t + 0.0632593086610217 * i,
    y: -0.0283697069632081 * n + 1.0099954580058226 * t + 0.021041398966943 * i,
    z: 0.0123140016883199 * n - 0.0205076964334779 * t + 1.3303659366080753 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, ks = {
  mode: "xyz65",
  toMode: {
    rgb: me,
    xyz50: Ms
  },
  fromMode: {
    rgb: ge,
    xyz50: ws
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
    alpha: { use: u, fixup: P }
  }
}, $s = ({ r: e, g: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const r = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * n + 0.11448223 * t,
    i: 0.59597799 * e - 0.2741761 * n - 0.32180189 * t,
    q: 0.21147017 * e - 0.52261711 * n + 0.31114694 * t
  };
  return i !== void 0 && (r.alpha = i), r;
}, zs = ({ y: e, i: n, q: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const r = {
    mode: "rgb",
    r: e + 0.95608445 * n + 0.6208885 * t,
    g: e - 0.27137664 * n - 0.6486059 * t,
    b: e - 1.10561724 * n + 1.70250126 * t
  };
  return i !== void 0 && (r.alpha = i), r;
}, _s = {
  mode: "yiq",
  toMode: {
    rgb: zs
  },
  fromMode: {
    rgb: $s
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
    alpha: { use: u, fixup: P }
  }
}, As = (e) => Math.max(0, Math.min(1, e || 0)), sn = (e) => Math.round(As(e) * 255), Ls = X("rgb"), Ps = (e) => {
  if (e === void 0)
    return;
  let n = sn(e.r), t = sn(e.g), i = sn(e.b);
  return "#" + (1 << 24 | n << 16 | t << 8 | i).toString(16).slice(1);
}, Ss = (e) => Ps(Ls(e)), dr = X("rgb"), pr = (e) => {
  const n = {
    mode: e.mode,
    r: Math.max(0, Math.min(e.r !== void 0 ? e.r : 0, 1)),
    g: Math.max(0, Math.min(e.g !== void 0 ? e.g : 0, 1)),
    b: Math.max(0, Math.min(e.b !== void 0 ? e.b : 0, 1))
  };
  return e.alpha !== void 0 && (n.alpha = e.alpha), n;
}, Ts = (e) => pr(dr(e)), hr = (e) => e !== void 0 && (e.r === void 0 || e.r >= 0 && e.r <= 1) && (e.g === void 0 || e.g >= 0 && e.g <= 1) && (e.b === void 0 || e.b >= 0 && e.b <= 1);
function Es(e) {
  return hr(dr(e));
}
function ur(e = "rgb") {
  const { gamut: n } = vt(e);
  if (!n)
    return (i) => !0;
  const t = X(typeof n == "string" ? n : e);
  return (i) => hr(t(i));
}
function Hs(e = "rgb") {
  const { gamut: n } = vt(e);
  if (!n)
    return (a) => dt(a);
  const t = typeof n == "string" ? n : e, i = X(t), r = ur(t);
  return (a) => {
    const s = dt(a);
    if (!s)
      return;
    const l = i(s);
    if (r(l))
      return s;
    const p = pr(l);
    return s.mode === p.mode ? p : X(s.mode)(p);
  };
}
function Cs(e, n = "lch", t = "rgb") {
  e = dt(e);
  let i = t === "rgb" ? Es : ur(t), r = t === "rgb" ? Ts : Hs(t);
  if (e === void 0 || i(e)) return e;
  let a = X(e.mode);
  e = X(n)(e);
  let s = { ...e, c: 0 };
  if (!i(s))
    return a(r(s));
  let l = 0, p = e.c !== void 0 ? e.c : 0, f = vt(n).ranges.c, b = (f[1] - f[0]) / Math.pow(2, 13), v = s.c;
  for (; p - l > b; )
    s.c = l + (p - l) * 0.5, i(s) ? (v = s.c, l = s.c) : p = s.c;
  return a(
    i(s) ? s : { ...s, c: v }
  );
}
w(ua);
w(ya);
w(Ma);
w(wa);
w(za);
w(Yi);
w(Gi);
w(Na);
w(Ia);
w(Xa);
w(Da);
w(Fn);
w(ja);
w(Rn);
w(Ya);
w(ts);
w(ns);
w(is);
w(ss);
w(os);
w(cs);
const On = w(ps);
w(hs);
w(us);
w(gs);
w(Ae);
w(xs);
w(ys);
w(ks);
w(_s);
const Ns = X("rgb");
function wi(e, n) {
  const t = e.getContext("2d", { willReadFrequently: !0 });
  if (!t) return;
  const { width: i, height: r } = e, a = t.createImageData(i, r), s = a.data;
  for (let l = 0; l < r; l++) {
    const p = 1 - l / (r - 1 || 1);
    for (let f = 0; f < i; f++) {
      const b = f / (i - 1 || 1), v = Ns({ mode: "hsv", h: n, s: b, v: p, alpha: 1 }), m = (l * i + f) * 4;
      if (!v) {
        s[m] = s[m + 1] = s[m + 2] = 0, s[m + 3] = 255;
        continue;
      }
      s[m] = Math.round(on((v.r ?? 0) * 255)), s[m + 1] = Math.round(on((v.g ?? 0) * 255)), s[m + 2] = Math.round(on((v.b ?? 0) * 255)), s[m + 3] = 255;
    }
  }
  t.putImageData(a, 0, 0);
}
function on(e) {
  return Math.min(255, Math.max(0, e));
}
const Se = X("rgb"), jn = X("hsv"), Is = X("hsl"), ki = 0.7, $i = /* @__PURE__ */ new Map();
function q(e) {
  const n = be(e.l ?? 0), t = Math.max(0, e.c ?? 0), i = Q(e.h ?? 0), r = be(e.alpha ?? 1), a = Cs({ mode: "oklch", l: n, c: t, h: i, alpha: r }, "rgb"), s = t < 1e-4;
  return {
    l: a.l ?? n,
    c: s ? 0 : a.c ?? 0,
    h: i,
    alpha: a.alpha ?? r
  };
}
function fe(e) {
  const n = Fi(e.trim());
  if (!n) return null;
  const t = On(n);
  return (t == null ? void 0 : t.l) == null ? null : q({
    l: t.l,
    c: t.c ?? 0,
    h: t.h ?? 0,
    alpha: t.alpha ?? 1
  });
}
function zi(e) {
  const { l: n, c: t, h: i, alpha: r } = e;
  return r >= 1 ? `oklch(${(n * 100).toFixed(1)}% ${t.toFixed(4)} ${i.toFixed(1)})` : `oklch(${(n * 100).toFixed(1)}% ${t.toFixed(4)} ${i.toFixed(1)} / ${Math.round(r * 100)}%)`;
}
function Ye(e) {
  return Ss(Se({ mode: "oklch", ...e })) ?? "#000000";
}
function so(e) {
  const { r: n, g: t, b: i } = Be(e);
  return e.alpha < 1 ? `rgba(${n}, ${t}, ${i}, ${e.alpha.toFixed(2)})` : `rgb(${n}, ${t}, ${i})`;
}
function Be(e) {
  const n = Se({ mode: "oklch", ...e, alpha: 1 });
  return n ? {
    r: Math.round((n.r ?? 0) * 255),
    g: Math.round((n.g ?? 0) * 255),
    b: Math.round((n.b ?? 0) * 255)
  } : { r: 0, g: 0, b: 0 };
}
function qs(e) {
  const n = Q(Math.max(0, Math.min(1, e)) * 360), t = Os(ki, n);
  return Be(q({ l: ki, c: t, h: n, alpha: 1 }));
}
function Fs(e) {
  const { r: n, g: t, b: i } = Be(e);
  return `linear-gradient(to right, rgba(${n}, ${t}, ${i}, 0), rgb(${n}, ${t}, ${i}))`;
}
function Rs(e) {
  if (e.c < 1e-4) return Q(e.h);
  const n = jn({ mode: "oklch", ...e, alpha: 1 });
  return Q((n == null ? void 0 : n.h) ?? e.h);
}
function fr(e, n) {
  const t = Q(n), i = jn({ mode: "oklch", ...e, alpha: 1 }), r = Se({
    mode: "hsv",
    h: t,
    s: (i == null ? void 0 : i.s) ?? 0,
    v: (i == null ? void 0 : i.v) ?? 1,
    alpha: 1
  }), a = On(
    r ?? { mode: "hsv", h: t, s: (i == null ? void 0 : i.s) ?? 0, v: (i == null ? void 0 : i.v) ?? 1 }
  );
  return (a == null ? void 0 : a.l) != null ? q({
    l: a.l,
    c: a.c ?? 0,
    h: a.h ?? t,
    alpha: e.alpha
  }) : q({ ...e, h: t });
}
function nt(e, n) {
  switch (n) {
    case "hex":
      return [{ key: "hex", label: "HEX CODE", value: Ye(e).replace("#", "").toUpperCase() }];
    case "rgb": {
      const t = Se({ mode: "oklch", ...e });
      return [
        { key: "r", label: "R", value: String(Math.round((t.r ?? 0) * 255)), min: 0, max: 255 },
        { key: "g", label: "G", value: String(Math.round((t.g ?? 0) * 255)), min: 0, max: 255 },
        { key: "b", label: "B", value: String(Math.round((t.b ?? 0) * 255)), min: 0, max: 255 }
      ];
    }
    case "hsl": {
      const t = Is({ mode: "oklch", ...e });
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
function Xs(e, n, t) {
  var f, b, v;
  const i = e.alpha, r = nt(e, "hsl"), a = n === "h" ? Q(t) : Number(((f = r.find((m) => m.key === "h")) == null ? void 0 : f.value) ?? 0);
  let s = n === "s" ? t : Number(((b = r.find((m) => m.key === "s")) == null ? void 0 : b.value) ?? 0);
  const l = n === "l" ? t : Number(((v = r.find((m) => m.key === "l")) == null ? void 0 : v.value) ?? 0);
  n === "h" && s < 1 && (s = 1);
  const p = fe(`hsl(${a}, ${mt(s)}%, ${mt(l)}%)`);
  return p ? { ...p, alpha: i } : e;
}
function Ds(e, n, t) {
  switch (n) {
    case "l":
      return q({ ...e, l: t / 100 });
    case "c":
      return q({ ...e, c: t });
    case "h":
      return fr(e, t);
  }
}
function _i(e, n, t) {
  switch (e) {
    case "hex": {
      const i = (n.hex ?? "").trim().replace(/^#/, "");
      if (!/^[0-9a-fA-F]{3,8}$/.test(i)) return null;
      const r = fe(`#${i}`);
      return r ? ln(r, t.alpha) : null;
    }
    case "rgb": {
      const i = Number(n.r), r = Number(n.g), a = Number(n.b);
      if ([i, r, a].some((l) => Number.isNaN(l))) return null;
      const s = fe(`rgb(${cn(i)}, ${cn(r)}, ${cn(a)})`);
      return s ? ln(s, t.alpha) : null;
    }
    case "hsl": {
      const i = dn(n.h), r = dn(n.s), a = dn(n.l);
      if ([i, r, a].some((l) => Number.isNaN(l))) return null;
      const s = fe(`hsl(${i}, ${mt(r)}%, ${mt(a)}%)`);
      return s ? ln(s, t.alpha) : null;
    }
    case "oklch": {
      const i = Number(n.l);
      let r = Number(n.c), a = Number(n.h);
      return [i, r, a].some((s) => Number.isNaN(s)) ? null : (r <= 0 && (r = 0, t.c > 1e-4 && (a = t.h)), q({ l: i / 100, c: r, h: a, alpha: t.alpha }));
    }
  }
}
function Os(e, n) {
  const t = `${e.toFixed(3)}:${Q(n).toFixed(1)}`, i = $i.get(t);
  if (i != null) return i;
  let r = 0;
  for (let s = 0; s <= 0.45; s += 5e-3) {
    const l = Se({ mode: "oklch", l: e, c: s, h: Q(n), alpha: 1 });
    if (!l) break;
    const { r: p = 0, g: f = 0, b = 0 } = l;
    if (p < 0 || p > 1 || f < 0 || f > 1 || b < 0 || b > 1) break;
    r = s;
  }
  const a = Math.max(r, 1e-3);
  return $i.set(t, a), a;
}
function js(e) {
  const n = jn({ mode: "oklch", ...e, alpha: 1 });
  return {
    x: be((n == null ? void 0 : n.s) ?? 0),
    y: be(1 - ((n == null ? void 0 : n.v) ?? 0))
  };
}
function Zs(e, n, t, i) {
  const r = be(e), a = be(n), s = Q(t), l = On(
    Se({ mode: "hsv", h: s, s: r, v: 1 - a, alpha: 1 }) ?? {
      mode: "hsv",
      h: s,
      s: r,
      v: 1 - a
    }
  );
  return (l == null ? void 0 : l.l) != null ? q({
    l: l.l,
    c: l.c ?? 0,
    h: l.h ?? s,
    alpha: i
  }) : q({ l: 0.5, c: 0, h: s, alpha: i });
}
function ln(e, n) {
  return { ...e, alpha: be(n) };
}
function be(e) {
  return Math.min(1, Math.max(0, e));
}
function cn(e) {
  return Math.min(255, Math.max(0, Math.round(e)));
}
function mt(e) {
  return Math.min(100, Math.max(0, e));
}
function dn(e) {
  return Number(e.replace(/%/g, "").trim());
}
function Q(e) {
  return Math.min(360, Math.max(0, e));
}
const Ai = {
  l: 0.62,
  c: 0.24,
  h: 303,
  alpha: 0.8
}, br = "pretty-color-picker-history", gr = 16;
function mr(e, n) {
  return Ye(e) === Ye(n) && e.alpha === n.alpha;
}
function Ys() {
  try {
    const e = localStorage.getItem(br);
    if (!e) return [];
    const n = JSON.parse(e);
    return Array.isArray(n) ? n.slice(0, gr) : [];
  } catch {
    return [];
  }
}
function Bs(e, n) {
  const t = n.filter((r) => !mr(r, e)), i = [e, ...t].slice(0, gr);
  try {
    localStorage.setItem(br, JSON.stringify(i));
  } catch {
  }
  return i;
}
const Ws = "#ededed", Gs = "#171717", Vs = 0.52;
function Js(e, n, t) {
  const i = [e, n, t].map((r) => {
    const a = r / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2];
}
function Us(e, n, t) {
  return Js(e, n, t) > Vs ? Gs : Ws;
}
function Li(e) {
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
function Ks(e, n, t, i) {
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
function Pi(e, n) {
  const t = n.getBoundingClientRect(), i = Ti((e.clientX - t.left) / t.width), r = Ti((e.clientY - t.top) / t.height);
  return { x: i, y: r };
}
function Si(e, n) {
  let t = !1, i = null;
  const r = (l) => {
    if (!t || i == null) return;
    const p = l.clientX - i;
    i = l.clientX, p !== 0 && n.onDelta(p, l);
  }, a = (l) => {
    var p;
    if (t) {
      if (t = !1, i = null, l.pointerId != null)
        try {
          e.releasePointerCapture(l.pointerId);
        } catch {
        }
      window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", a), (p = n.onEnd) == null || p.call(n, l);
    }
  }, s = (l) => {
    var p;
    l.button === 0 && (l.preventDefault(), t = !0, i = l.clientX, e.setPointerCapture(l.pointerId), (p = n.onStart) == null || p.call(n, l), window.addEventListener("pointermove", r), window.addEventListener("pointerup", a), window.addEventListener("pointercancel", a));
  };
  return e.addEventListener("pointerdown", s), () => {
    e.removeEventListener("pointerdown", s), window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", a);
  };
}
function pn(e, n, t, i) {
  let r = !1;
  const a = (p) => {
    if (!r) return;
    const { x: f, y: b } = Pi(p, e);
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
  }, l = (p) => {
    if (p.button !== 0) return;
    r = !0, e.setPointerCapture(p.pointerId), i == null || i();
    const { x: f, y: b } = Pi(p, e);
    n(f, b), window.addEventListener("pointermove", a), window.addEventListener("pointerup", s), window.addEventListener("pointercancel", s);
  };
  return e.addEventListener("pointerdown", l), () => {
    e.removeEventListener("pointerdown", l), window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", s);
  };
}
function Ti(e) {
  return Math.min(1, Math.max(0, e));
}
const tt = 48;
function Qs(e, n) {
  const t = (i) => {
    if (i.button !== 0 || i.target.closest(".pcp-header-btn")) return;
    i.preventDefault();
    const a = n.getBoundingClientRect(), s = i.clientX - a.left, l = i.clientY - a.top;
    e.dataset.dragging = "true", e.setPointerCapture(i.pointerId);
    const p = (b) => {
      vr(n, b.clientX - s, b.clientY - l);
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
function Ei(e) {
  const n = e.offsetWidth, t = e.offsetHeight;
  vr(
    e,
    (window.innerWidth - n) / 2,
    (window.innerHeight - t) / 2
  );
}
function vr(e, n, t) {
  const i = e.offsetWidth, r = e.offsetHeight, a = window.innerWidth - tt, s = window.innerHeight - tt, l = tt - i, p = tt - r;
  e.style.left = `${Math.min(a, Math.max(l, n))}px`, e.style.top = `${Math.min(s, Math.max(p, t))}px`;
}
const Hi = 8, xe = 8;
function eo(e, n = document) {
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
function to(e, n) {
  const t = n.getBoundingClientRect(), i = e.offsetWidth, r = e.offsetHeight, a = window.innerWidth, s = window.innerHeight;
  let l = t.bottom + Hi, p = t.left;
  p + i > a - xe && (p = t.right - i), p = Math.min(a - xe - i, Math.max(xe, p)), l + r > s - xe && (l = t.top - r - Hi), l = Math.min(s - xe - r, Math.max(xe, l)), e.style.left = `${p}px`, e.style.top = `${l}px`;
}
const no = ["hex", "rgb", "hsl", "oklch"], io = {
  hex: "HEX",
  rgb: "RGB",
  hsl: "HSL",
  oklch: "OKLCH"
};
var _, y, N, B, we, E, ke, We, F, W, I, G, Ge, R, $e, V, Ve, D, ie, ze, re, J, U, ae, se, K, oe, o, xr, yr, Mr, xn, yn, Re, Mn, wn, kn, Xe, j, $n, wr, it, zn, kr, $r, zr, _r, rt, De, Ar, Lr, Pr, Sr, at, _n, An, Tr, Er, Hr, Cr, Nr, Ir, qr, Z, Oe, Ln, Pn, he, ye, st, Sn, Tn, Fr, En, Rr, ot, lt, Hn, ct, Y, Xr;
class ro extends HTMLElement {
  constructor() {
    super();
    k(this, o);
    k(this, _);
    k(this, y, { ...Ai });
    k(this, N, "hsl");
    k(this, B, Ys());
    k(this, we, null);
    k(this, E, []);
    k(this, ke);
    k(this, We);
    k(this, F);
    k(this, W);
    k(this, I);
    k(this, G);
    k(this, Ge);
    k(this, R);
    k(this, $e);
    k(this, V);
    k(this, Ve);
    k(this, D);
    k(this, ie);
    k(this, ze);
    k(this, re, null);
    k(this, J, null);
    k(this, U, null);
    k(this, ae, null);
    k(this, se, null);
    k(this, K, null);
    k(this, oe, Ai.h);
    x(this, _, this.attachShadow({ mode: "open" }));
  }
  static get observedAttributes() {
    return ["value", "theme", "header-action", "movable", "mode", "anchor", "open", "history"];
  }
  connectedCallback() {
    d(this, o, yr).call(this), d(this, o, Mr).call(this), d(this, o, xr).call(this), d(this, o, Oe).call(this, !1), d(this, o, wn).call(this), d(this, o, Xe).call(this), this.popoverMode && this.open && requestAnimationFrame(() => d(this, o, Re).call(this));
  }
  disconnectedCallback() {
    c(this, K) != null && (cancelAnimationFrame(c(this, K)), x(this, K, null)), d(this, o, Mn).call(this), c(this, E).forEach((t) => t()), x(this, E, []);
  }
  attributeChangedCallback(t, i, r) {
    if (this.isConnected) {
      if (t === "value" && r != null) {
        const a = fe(r);
        a && (x(this, y, a), d(this, o, Oe).call(this, !1));
        return;
      }
      t === "theme" && d(this, o, it).call(this), t === "movable" && d(this, o, Xe).call(this), (t === "mode" || t === "anchor") && (d(this, o, wn).call(this), d(this, o, Xe).call(this)), t === "open" && this.popoverMode && r != null && requestAnimationFrame(() => {
        d(this, o, Re).call(this), d(this, o, ye).call(this);
      }), t === "history" && d(this, o, kn).call(this);
    }
  }
  get value() {
    return zi(c(this, y));
  }
  set value(t) {
    const i = fe(t);
    i && (x(this, y, i), d(this, o, Oe).call(this));
  }
  get color() {
    return { ...c(this, y) };
  }
  set color(t) {
    x(this, y, q(t)), d(this, o, Oe).call(this);
  }
  get theme() {
    const t = this.getAttribute("theme");
    return t === "light" || t === "system" ? t : "dark";
  }
  set theme(t) {
    this.setAttribute("theme", t);
  }
  get headerAction() {
    return this.getAttribute("header-action") === "theme" ? "theme" : "close";
  }
  set headerAction(t) {
    this.setAttribute("header-action", t);
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
          d(this, o, Re).call(this), d(this, o, ye).call(this);
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
_ = new WeakMap(), y = new WeakMap(), N = new WeakMap(), B = new WeakMap(), we = new WeakMap(), E = new WeakMap(), ke = new WeakMap(), We = new WeakMap(), F = new WeakMap(), W = new WeakMap(), I = new WeakMap(), G = new WeakMap(), Ge = new WeakMap(), R = new WeakMap(), $e = new WeakMap(), V = new WeakMap(), Ve = new WeakMap(), D = new WeakMap(), ie = new WeakMap(), ze = new WeakMap(), re = new WeakMap(), J = new WeakMap(), U = new WeakMap(), ae = new WeakMap(), se = new WeakMap(), K = new WeakMap(), oe = new WeakMap(), o = new WeakSet(), xr = function() {
  const t = this.getAttribute("value");
  if (t) {
    const i = fe(t);
    i && x(this, y, i);
  }
}, yr = function() {
  const t = this.headerAction === "theme" ? `<button type="button" class="pcp-header-btn pcp-theme-toggle" aria-label="Switch to light mode">${Un}</button>` : `<button type="button" class="pcp-header-btn pcp-close" aria-label="Close">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M4.25 4.25L11.75 11.75M11.75 4.25L4.25 11.75"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>`;
  c(this, _).innerHTML = `
      <style>${Yr}</style>
      <div class="pcp" part="container">
        <header class="pcp-header">
          <h2 class="pcp-title">Pretty Color Picker</h2>
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
          ${no.map((i) => `<button type="button" class="pcp-tab" role="tab" data-format="${i}">${io[i]}</button>`).join("")}
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
    `, x(this, ke, c(this, _).querySelector(".pcp-plane")), x(this, We, c(this, _).querySelector(".pcp-plane-wrap")), x(this, F, c(this, _).querySelector(".pcp-cursor")), x(this, W, c(this, _).querySelector(".pcp-hue-row")), x(this, I, c(this, W).querySelector(".pcp-slider-handle")), x(this, G, c(this, _).querySelector(".pcp-alpha-row")), x(this, Ge, c(this, _).querySelector(".pcp-slider-fill-alpha")), x(this, R, c(this, G).querySelector(".pcp-slider-handle")), x(this, $e, c(this, _).querySelector(".pcp-tabs-pill")), x(this, V, c(this, _).querySelector(".pcp-fields")), x(this, Ve, c(this, _).querySelector(".pcp-swatch-fill")), x(this, D, c(this, _).querySelector(".pcp-alpha-input")), x(this, ze, c(this, _).querySelector(".pcp-history-section")), x(this, ie, c(this, _).querySelector(".pcp-history")), x(this, re, c(this, _).querySelector(".pcp-theme-toggle")), d(this, o, it).call(this);
}, Mr = function() {
  var i;
  const t = c(this, _).querySelector(".pcp-close");
  t == null || t.addEventListener("click", () => d(this, o, xn).call(this)), (i = c(this, re)) == null || i.addEventListener("click", () => d(this, o, wr).call(this)), c(this, E).push(
    pn(
      c(this, We),
      (r, a) => d(this, o, Ar).call(this, r, a),
      () => d(this, o, Y).call(this),
      () => d(this, o, j).call(this)
    )
  ), c(this, E).push(
    pn(
      c(this, W),
      (r) => d(this, o, Lr).call(this, r),
      () => d(this, o, Y).call(this),
      () => d(this, o, j).call(this)
    )
  ), c(this, E).push(
    pn(
      c(this, G),
      (r) => d(this, o, Pr).call(this, r),
      () => d(this, o, Y).call(this),
      () => d(this, o, j).call(this)
    )
  ), c(this, E).push(d(this, o, zn).call(this, c(this, W))), c(this, E).push(d(this, o, zn).call(this, c(this, G))), c(this, _).querySelectorAll(".pcp-tab").forEach((r) => {
    r.addEventListener("click", () => {
      const a = r.dataset.format;
      a && a !== c(this, N) && (x(this, N, a), d(this, o, ye).call(this), d(this, o, Hn).call(this), d(this, o, lt).call(this), d(this, o, st).call(this));
    });
  }), c(this, D).addEventListener("focus", () => d(this, o, j).call(this)), c(this, D).addEventListener("change", () => d(this, o, _n).call(this)), c(this, D).addEventListener("keydown", (r) => {
    r.key === "Enter" && d(this, o, _n).call(this);
  }), c(this, E).push(d(this, o, Ir).call(this)), d(this, o, Xe).call(this), d(this, o, kn).call(this);
}, xn = function() {
  this.popoverMode && this.hide(), this.dispatchEvent(new CustomEvent("close", { bubbles: !0, composed: !0 }));
}, yn = function() {
  const t = this.anchor;
  return t ? eo(t, this.ownerDocument) : null;
}, Re = function() {
  x(this, ae, d(this, o, yn).call(this)), c(this, ae) ? (to(this, c(this, ae)), this.setAttribute("data-positioned", "")) : (this.movable || this.popoverMode) && (Ei(this), this.setAttribute("data-positioned", ""));
}, Mn = function() {
  if (c(this, U)) {
    const t = c(this, E).indexOf(c(this, U));
    t >= 0 && c(this, E).splice(t, 1), c(this, U).call(this), x(this, U, null);
  }
  x(this, ae, null);
}, wn = function() {
  if (d(this, o, Mn).call(this), !this.popoverMode) {
    this.removeAttribute("open"), this.movable || (this.style.position = "", this.style.left = "", this.style.top = "", this.style.zIndex = "");
    return;
  }
  this.movable || (this.style.position = "fixed", this.style.zIndex = "1000");
  const t = d(this, o, yn).call(this);
  x(this, ae, t);
  const i = (l) => {
    l.preventDefault(), l.stopPropagation(), this.toggle();
  }, r = (l) => {
    if (!this.open) return;
    const p = l.composedPath();
    p.includes(this) || t && p.includes(t) || this.hide();
  }, a = (l) => {
    l.key === "Escape" && this.open && (l.preventDefault(), d(this, o, xn).call(this));
  }, s = () => {
    this.open && d(this, o, Re).call(this);
  };
  t == null || t.addEventListener("click", i), document.addEventListener("pointerdown", r, !0), document.addEventListener("keydown", a), window.addEventListener("resize", s), window.addEventListener("scroll", s, !0), x(this, U, () => {
    t == null || t.removeEventListener("click", i), document.removeEventListener("pointerdown", r, !0), document.removeEventListener("keydown", a), window.removeEventListener("resize", s), window.removeEventListener("scroll", s, !0);
  }), c(this, E).push(c(this, U));
}, kn = function() {
  if (!this.history) {
    c(this, ze).hidden = !0, c(this, ie).innerHTML = "";
    return;
  }
  d(this, o, ct).call(this);
}, Xe = function() {
  if (c(this, J)) {
    const r = c(this, E).indexOf(c(this, J));
    r >= 0 && c(this, E).splice(r, 1), c(this, J).call(this), x(this, J, null);
  }
  if (!(this.movable || this.popoverMode)) {
    this.popoverMode || (this.style.position = "", this.style.left = "", this.style.top = "", this.style.zIndex = ""), this.removeAttribute("data-positioned");
    return;
  }
  !this.popoverMode && !this.hasAttribute("data-positioned") && requestAnimationFrame(() => {
    Ei(this), this.setAttribute("data-positioned", "");
  });
  const i = c(this, _).querySelector(".pcp-header");
  i && (x(this, J, Qs(i, this)), c(this, E).push(c(this, J)));
}, j = function() {
  x(this, we, { ...c(this, y) });
}, $n = function() {
  return this.theme === "light" ? "light" : this.theme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}, wr = function() {
  const t = d(this, o, $n).call(this) === "light" ? "dark" : "light";
  this.theme = t, d(this, o, it).call(this);
  const i = { theme: t };
  this.dispatchEvent(
    new CustomEvent("themechange", {
      detail: i,
      bubbles: !0,
      composed: !0
    })
  );
}, it = function() {
  if (!c(this, re)) return;
  const t = d(this, o, $n).call(this) === "light";
  c(this, re).innerHTML = t ? Zr : Un, c(this, re).setAttribute(
    "aria-label",
    t ? "Switch to dark mode" : "Switch to light mode"
  );
}, zn = function(t) {
  const i = () => {
    t.dataset.active = "true";
  }, r = () => {
    const a = t.querySelector(".pcp-slider-handle");
    a != null && a.hasAttribute("data-dragging") || delete t.dataset.active;
  };
  return t.addEventListener("pointerenter", i), t.addEventListener("pointerleave", r), () => {
    t.removeEventListener("pointerenter", i), t.removeEventListener("pointerleave", r);
  };
}, kr = function(t, i) {
  const r = Math.max(0, Math.min(1, i)) * 100;
  t.style.left = `max(1px, calc(${r}% - 1.5px))`;
}, $r = function() {
  const t = getComputedStyle(this), i = Li(t.getPropertyValue("--pcp-checker-base").trim()) ?? { r: 255, g: 255, b: 255 }, r = Li(t.getPropertyValue("--pcp-checker-tone").trim()) ?? { r: 204, g: 204, b: 204 };
  return { base: i, tone: r };
}, zr = function(t, i) {
  const r = t.style.left.match(/calc\(([\d.]+)%/);
  return r ? parseFloat(r[1]) / 100 : i;
}, _r = function(t, i) {
  if (i === "hue") return qs(t);
  const { base: r, tone: a } = d(this, o, $r).call(this);
  return Ks(Be(c(this, y)), t, r, a);
}, rt = function(t, i, r) {
  const a = d(this, o, _r).call(this, i, r);
  t.style.background = Us(a.r, a.g, a.b);
}, De = function(t, i, r) {
  d(this, o, kr).call(this, t, i), d(this, o, rt).call(this, t, i, r);
}, Ar = function(t, i) {
  c(this, F).dataset.dragging = "true";
  const r = d(this, o, he).call(this);
  d(this, o, Z).call(this, Zs(t, i, r, c(this, y).alpha), !0, {
    refreshPlane: !1,
    refreshCursor: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  }), d(this, o, Sn).call(this, t, i);
}, Lr = function(t) {
  c(this, W).dataset.active = "true", c(this, I).dataset.dragging = "true", x(this, oe, t * 360), d(this, o, De).call(this, c(this, I), t, "hue"), d(this, o, Z).call(this, fr(c(this, y), c(this, oe)), !0, {
    refreshPlane: !0,
    refreshCursor: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  });
}, Pr = function(t) {
  c(this, G).dataset.active = "true", c(this, R).dataset.dragging = "true", d(this, o, Z).call(this, q({ ...c(this, y), alpha: t }), !0, {
    refreshPlane: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  }), d(this, o, De).call(this, c(this, R), t, "alpha");
}, Sr = function() {
  const i = c(this, I).style.left.match(/calc\(([\d.]+)%/);
  return i ? parseFloat(i[1]) / 100 * 360 : c(this, oe);
}, at = function() {
  x(this, oe, Rs(c(this, y)));
}, _n = function() {
  const t = c(this, D).value.replace(/%/g, "").trim(), i = Number(t);
  if (Number.isNaN(i)) {
    d(this, o, ot).call(this);
    return;
  }
  d(this, o, Z).call(this, q({ ...c(this, y), alpha: i / 100 }), !0), d(this, o, Y).call(this);
}, An = function(t, i) {
  d(this, o, Tr).call(this, { [t]: i }, !0);
}, Tr = function(t, i = !0) {
  const r = {};
  nt(c(this, y), c(this, N)).forEach((s) => {
    r[s.key] = t[s.key] ?? s.value;
  });
  const a = _i(c(this, N), r, c(this, y));
  a && (d(this, o, Z).call(this, a, !0), i && d(this, o, Y).call(this));
}, Er = function(t, i) {
  if (t.scrubStep != null)
    return i ? t.scrubStep * 0.1 : t.scrubStep;
  const r = t.min ?? 0, s = (t.max ?? 100) - r, l = t.step != null && t.step < 1 ? s / 120 : t.step ?? 1;
  return i ? l * 0.1 : l;
}, Hr = function(t, i) {
  return t.step != null && t.step < 1 ? i.toFixed(3) : String(Math.round(i));
}, Cr = function(t, i, r, a) {
  const s = c(this, V).querySelector(
    `.pcp-field-input[data-key="${t}"]`
  ), l = nt(c(this, y), c(this, N)), p = l.find((z) => z.key === t);
  if (!p) return;
  const f = i.min ?? 0, b = i.max ?? 100, v = d(this, o, Er).call(this, i, a), m = Number(s ? s.value.replace(/%/g, "").trim() : p.value);
  let M = m + r * v;
  if (i.step != null && i.step < 1 ? (M = Math.round(M / i.step) * i.step, M = Math.min(b, Math.max(f, M))) : M = Math.min(b, Math.max(f, Math.round(M))), Math.abs(M - m) < (i.step != null && i.step < 1 ? i.step / 2 : 0.5)) return;
  const A = d(this, o, Hr).call(this, i, M);
  let $ = null;
  if (c(this, N) === "hsl" && (t === "h" || t === "s" || t === "l"))
    $ = Xs(c(this, y), t, M);
  else if (c(this, N) === "oklch" && (t === "l" || t === "c" || t === "h"))
    $ = Ds(c(this, y), t, M);
  else {
    const z = {};
    l.forEach((S) => {
      z[S.key] = S.key === t ? A : S.value;
    }), $ = _i(c(this, N), z, c(this, y));
  }
  $ && (d(this, o, Z).call(this, $, !0, {
    refreshFields: !1,
    refreshCursor: !0,
    refreshSliders: !0
  }), s && (s.value = A));
}, Nr = function(t, i) {
  const r = i ? 0.05 : 0.5, a = c(this, y).alpha * 100;
  let s = a + t * r;
  if (s = Math.min(100, Math.max(0, i ? s : Math.round(s))), Math.abs(s - a) < 0.01) return;
  const l = s / 100;
  d(this, o, Z).call(this, q({ ...c(this, y), alpha: l }), !0, {
    refreshFields: !1,
    refreshPlane: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  }), c(this, D).value = `${Math.round(s)}%`;
}, Ir = function() {
  const t = c(this, _).querySelector(".pcp-alpha-field .pcp-field-label");
  return t ? Si(t, {
    onStart: () => {
      d(this, o, j).call(this), t.setAttribute("data-scrubbing", "true"), document.body.style.cursor = "ew-resize";
    },
    onDelta: (i, r) => d(this, o, Nr).call(this, i, r.shiftKey),
    onEnd: () => {
      t.removeAttribute("data-scrubbing"), document.body.style.cursor = "", d(this, o, Y).call(this), d(this, o, ot).call(this);
    }
  }) : () => {
  };
}, qr = function(t) {
  c(this, N) !== "hex" && c(this, V).querySelectorAll(".pcp-field-label").forEach((i) => {
    var l;
    const r = i.closest(".pcp-field");
    if (!r) return;
    const a = (l = [...r.classList].find((p) => p.startsWith("pcp-field-") && p !== "pcp-field")) == null ? void 0 : l.slice(10);
    if (!a) return;
    const s = t.find((p) => p.key === a);
    !s || s.min == null || s.max == null || Si(i, {
      onStart: () => {
        d(this, o, j).call(this), i.setAttribute("data-scrubbing", "true"), document.body.style.cursor = "ew-resize";
      },
      onDelta: (p, f) => d(this, o, Cr).call(this, a, s, p, f.shiftKey),
      onEnd: () => {
        i.removeAttribute("data-scrubbing"), document.body.style.cursor = "", d(this, o, Y).call(this), d(this, o, lt).call(this);
      }
    });
  });
}, Z = function(t, i = !0, r) {
  x(this, y, q(t)), !(c(this, F).hasAttribute("data-dragging") || c(this, I).hasAttribute("data-dragging")) && (r == null ? void 0 : r.syncPlaneHue) !== !1 && d(this, o, at).call(this), d(this, o, Ln).call(this, i, r);
}, Oe = function(t = !0) {
  d(this, o, at).call(this), d(this, o, ye).call(this), d(this, o, Hn).call(this), d(this, o, Ln).call(this, t), d(this, o, ct).call(this);
}, Ln = function(t, i) {
  (i == null ? void 0 : i.refreshFields) !== !1 && d(this, o, lt).call(this), d(this, o, Rr).call(this), (i == null ? void 0 : i.refreshSliders) !== !1 && d(this, o, Tn).call(this), (i == null ? void 0 : i.refreshCursor) !== !1 && !c(this, F).hasAttribute("data-dragging") && d(this, o, st).call(this), (i == null ? void 0 : i.refreshPlane) === !0 ? d(this, o, Pn).call(this) : (i == null ? void 0 : i.refreshPlane) !== !1 && !c(this, F).hasAttribute("data-dragging") && !c(this, I).hasAttribute("data-dragging") && c(this, se) !== d(this, o, he).call(this) && d(this, o, Pn).call(this), t && d(this, o, Xr).call(this);
}, Pn = function() {
  c(this, K) == null && x(this, K, requestAnimationFrame(() => {
    x(this, K, null);
    const t = d(this, o, he).call(this);
    c(this, se) !== t && (wi(c(this, ke), t), x(this, se, t));
  }));
}, he = function() {
  return c(this, I).hasAttribute("data-dragging") ? d(this, o, Sr).call(this) : c(this, oe);
}, ye = function() {
  const t = d(this, o, he).call(this);
  wi(c(this, ke), t), x(this, se, t);
}, st = function() {
  const { x: t, y: i } = js(c(this, y));
  d(this, o, Sn).call(this, t, i);
}, Sn = function(t, i) {
  c(this, F).style.left = `${t * 100}%`, c(this, F).style.top = `${i * 100}%`;
}, Tn = function() {
  const i = d(this, o, he).call(this) / 360;
  c(this, I).hasAttribute("data-dragging") ? d(this, o, rt).call(this, c(this, I), i, "hue") : d(this, o, De).call(this, c(this, I), i, "hue");
  const r = c(this, R).hasAttribute("data-dragging") ? d(this, o, zr).call(this, c(this, R), c(this, y).alpha) : c(this, y).alpha;
  c(this, R).hasAttribute("data-dragging") ? d(this, o, rt).call(this, c(this, R), r, "alpha") : d(this, o, De).call(this, c(this, R), r, "alpha"), d(this, o, Fr).call(this);
}, Fr = function() {
  c(this, Ge).style.setProperty("--pcp-alpha-gradient", Fs(c(this, y)));
}, En = function(t, i) {
  const { r, g: a, b: s } = Be(i);
  t.style.setProperty("--swatch-solid", `rgb(${r}, ${a}, ${s})`), t.style.setProperty("--swatch-alpha", `rgba(${r}, ${a}, ${s}, ${i.alpha})`);
}, Rr = function() {
  d(this, o, En).call(this, c(this, Ve), c(this, y));
}, ot = function() {
  c(this, D).value = `${Math.round(c(this, y).alpha * 100)}%`;
}, lt = function() {
  const t = nt(c(this, y), c(this, N));
  c(this, V).dataset.format = c(this, N), c(this, V).innerHTML = t.map(
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
  ).join(""), c(this, V).querySelectorAll(".pcp-field-input").forEach((i) => {
    const r = i, a = r.dataset.key;
    r.addEventListener("focus", () => d(this, o, j).call(this)), r.addEventListener("change", () => d(this, o, An).call(this, a, r.value)), r.addEventListener("keydown", (s) => {
      s.key === "Enter" && d(this, o, An).call(this, a, r.value);
    });
  }), d(this, o, qr).call(this, t), d(this, o, ot).call(this);
}, Hn = function() {
  const t = c(this, _).querySelectorAll(".pcp-tab");
  let i = null;
  if (t.forEach((r) => {
    const a = r.dataset.format === c(this, N);
    r.setAttribute("data-active", String(a)), r.setAttribute("aria-selected", String(a)), a && (i = r);
  }), i) {
    const r = i, a = r.offsetLeft, s = r.offsetWidth;
    c(this, $e).style.left = `${a}px`, c(this, $e).style.width = `${s}px`;
  }
}, ct = function() {
  this.history && (c(this, ze).hidden = c(this, B).length === 0, c(this, ie).innerHTML = c(this, B).map((t, i) => `
          <button type="button" class="pcp-history-swatch pcp-clip" data-index="${i}" aria-label="Color ${Ye(t)}">
            <span class="pcp-swatch-fill" data-history-fill="${i}"></span>
          </button>
        `).join(""), c(this, ie).querySelectorAll("[data-history-fill]").forEach((t) => {
    const i = Number(t.dataset.historyFill), r = c(this, B)[i];
    r && d(this, o, En).call(this, t, r);
  }), c(this, ie).querySelectorAll(".pcp-history-swatch").forEach((t) => {
    t.addEventListener("click", () => {
      const i = Number(t.dataset.index), r = c(this, B)[i];
      r && (d(this, o, j).call(this), d(this, o, Z).call(this, { ...r }, !0, { refreshFields: !0 }), d(this, o, Y).call(this));
    });
  }));
}, Y = function() {
  const t = c(this, F).hasAttribute("data-dragging"), i = c(this, I).hasAttribute("data-dragging");
  delete c(this, F).dataset.dragging, delete c(this, I).dataset.dragging, delete c(this, R).dataset.dragging, delete c(this, W).dataset.active, delete c(this, G).dataset.active, (t || i) && (d(this, o, at).call(this), d(this, o, Tn).call(this), d(this, o, st).call(this), c(this, se) !== d(this, o, he).call(this) && d(this, o, ye).call(this));
  const r = c(this, we);
  x(this, we, null), this.history && r && !mr(r, c(this, y)) && (x(this, B, Bs(r, c(this, B))), d(this, o, ct).call(this));
}, Xr = function() {
  const t = {
    color: { ...c(this, y) },
    css: zi(c(this, y)),
    hex: Ye(c(this, y))
  };
  this.dispatchEvent(
    new CustomEvent("change", {
      detail: t,
      bubbles: !0,
      composed: !0
    })
  );
};
customElements.get("pretty-color-picker") || customElements.define("pretty-color-picker", ro);
export {
  Ai as DEFAULT_COLOR,
  ro as PrettyColorPicker,
  nt as formatFieldsFor,
  q as normalizeOklch,
  fe as oklchFromCss,
  zi as oklchToCss,
  Ye as oklchToHex,
  so as oklchToRgbString,
  _i as parseFormatFields
};
