var In = (e) => {
  throw TypeError(e);
};
var kt = (e, n, t) => n.has(e) || In("Cannot " + t);
var l = (e, n, t) => (kt(e, n, "read from private field"), t ? t.call(e) : n.get(e)), k = (e, n, t) => n.has(e) ? In("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(e) : n.set(e, t), M = (e, n, t, r) => (kt(e, n, "write to private field"), r ? r.call(e, t) : n.set(e, t), t), d = (e, n, t) => (kt(e, n, "access private method"), t);
const qn = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z" opacity="0.2"/><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/></svg>', $i = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z" opacity="0.2"/><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"/></svg>', zi = '@import"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap";:host{--pcp-width: 260px;--pcp-radius-sm: 4px;--pcp-radius: 6px;--pcp-radius-lg: 9px;--pcp-panel-padding: 9px;--pcp-history-cols: 8;--pcp-history-swatch-size: calc( (var(--pcp-width) - 2 * var(--pcp-panel-padding) - 7 * var(--pcp-history-gap)) / var(--pcp-history-cols) );--pcp-control-height: var(--pcp-history-swatch-size);--pcp-tab-row-height: 32px;--pcp-field-label-size: 10px;--pcp-field-label-line: 12px;--pcp-field-label-gap: 3px;--pcp-field-value-size: 11px;--pcp-field-value-line: 15px;--pcp-field-input-height: 20px;--pcp-input-panel-height: calc( var(--pcp-field-label-line) + var(--pcp-field-label-gap) + var(--pcp-field-input-height) );--pcp-input-row-padding-y: 7px;--pcp-input-row-padding-x: 7px;--pcp-alpha-col-width: 4ch;--pcp-value-col-width: minmax(0, 1fr);--pcp-swatch-code-gap: 8px;--pcp-history-gap: 6px;--pcp-checker-size: 6px;--pcp-slider-handle-height: calc(var(--pcp-control-height) * 20 / 36);--pcp-field-input-radius: var(--pcp-radius-sm);--pcp-icon-button-size: 26px;--pcp-icon-button-radius: var(--pcp-radius-sm);--pcp-title-size: 12px;--pcp-title-line: 17px;--pcp-title-weight: 600;--pcp-title-tracking: -.24px;--pcp-ease-out: cubic-bezier(.175, .885, .32, 1.1);--pcp-font: "Geist", system-ui, -apple-system, "SF Pro Display", sans-serif;--pcp-mono: "Geist Mono", ui-monospace, monospace;display:inline-block;font-family:var(--pcp-font);-webkit-font-smoothing:antialiased;color:var(--pcp-text-primary)}:host([movable]){position:fixed;z-index:1000;margin:0}:host([movable]) .pcp-header{cursor:grab;touch-action:none}:host([movable]) .pcp-header[data-dragging=true]{cursor:grabbing}:host,:host([theme="dark"]){color-scheme:dark;--pcp-bg: #212121;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: rgba(255, 255, 255, .05);--pcp-surface-hover: rgba(255, 255, 255, .1);--pcp-surface-active: rgba(255, 255, 255, .11);--pcp-tab-pill: rgba(255, 255, 255, .11);--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-root: #ffffff;--pcp-text-primary: rgba(255, 255, 255, .95);--pcp-text-label: rgba(255, 255, 255, .7);--pcp-text-secondary: rgba(255, 255, 255, .6);--pcp-text-tertiary: rgba(255, 255, 255, .4);--pcp-text-focus: #ffffff;--pcp-slider-handle: rgba(255, 255, 255, .95);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: 0 8px 32px rgba(0, 0, 0, .5)}:host([theme="light"]){color-scheme:light;--pcp-bg: #fafafa;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: rgba(0, 0, 0, .04);--pcp-surface-hover: rgba(0, 0, 0, .08);--pcp-surface-active: rgba(0, 0, 0, .1);--pcp-tab-pill: rgba(0, 0, 0, .1);--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-root: #000000;--pcp-text-primary: rgba(0, 0, 0, .9);--pcp-text-label: rgba(0, 0, 0, .6);--pcp-text-secondary: rgba(0, 0, 0, .55);--pcp-text-tertiary: rgba(0, 0, 0, .35);--pcp-text-focus: #000000;--pcp-slider-handle: rgba(0, 0, 0, .9);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 4px 20px rgba(0, 0, 0, .08)}@media(prefers-color-scheme:dark){:host([theme="system"]){color-scheme:dark;--pcp-bg: #212121;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: rgba(255, 255, 255, .05);--pcp-surface-hover: rgba(255, 255, 255, .1);--pcp-surface-active: rgba(255, 255, 255, .11);--pcp-tab-pill: rgba(255, 255, 255, .11);--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-root: #ffffff;--pcp-text-primary: rgba(255, 255, 255, .95);--pcp-text-label: rgba(255, 255, 255, .7);--pcp-text-secondary: rgba(255, 255, 255, .6);--pcp-text-tertiary: rgba(255, 255, 255, .4);--pcp-text-focus: #ffffff;--pcp-slider-handle: rgba(255, 255, 255, .95);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: 0 8px 32px rgba(0, 0, 0, .5)}}@media(prefers-color-scheme:light){:host([theme="system"]){color-scheme:light;--pcp-bg: #fafafa;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: rgba(0, 0, 0, .04);--pcp-surface-hover: rgba(0, 0, 0, .08);--pcp-surface-active: rgba(0, 0, 0, .1);--pcp-tab-pill: rgba(0, 0, 0, .1);--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-root: #000000;--pcp-text-primary: rgba(0, 0, 0, .9);--pcp-text-label: rgba(0, 0, 0, .6);--pcp-text-secondary: rgba(0, 0, 0, .55);--pcp-text-tertiary: rgba(0, 0, 0, .35);--pcp-text-focus: #000000;--pcp-slider-handle: rgba(0, 0, 0, .9);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 4px 20px rgba(0, 0, 0, .08)}}*,*:before,*:after{box-sizing:border-box}.pcp-clip{overflow:hidden;border-radius:var(--pcp-clip-radius, var(--pcp-radius-sm))}.pcp-swatch-fill{display:block;box-sizing:border-box;width:calc(100% + 2px);height:calc(100% + 2px);margin:-1px;border-radius:inherit;background-color:var(--pcp-checker-base);background-image:linear-gradient(to right,var(--swatch-solid, #000) 50%,transparent 50%),linear-gradient(to right,transparent 50%,var(--swatch-alpha, rgba(0, 0, 0, .5)) 50%),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,100% 100%,var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size);background-position:0 0,0 0,0 0,0 calc(var(--pcp-checker-size) / 2),calc(var(--pcp-checker-size) / 2) calc(var(--pcp-checker-size) / -2),calc(var(--pcp-checker-size) / -2) 0}@supports (background: -webkit-named-image(i)){.pcp-clip,.pcp-swatch-fill{clip-path:inset(0 round var(--pcp-clip-radius, var(--pcp-radius-sm)))}}.pcp{width:var(--pcp-width);background:var(--pcp-bg);border:1px solid var(--pcp-border);border-radius:var(--pcp-radius-lg);box-shadow:var(--pcp-elevation);padding:var(--pcp-panel-padding);-webkit-user-select:none;user-select:none}.pcp-header{display:flex;align-items:center;justify-content:space-between;gap:6px;padding-bottom:4px;margin-bottom:8px;min-height:var(--pcp-icon-button-size);border-bottom:1px solid var(--pcp-divider)}.pcp-title{flex:1;min-width:0;font-family:var(--pcp-font);font-size:var(--pcp-title-size);font-weight:var(--pcp-title-weight);line-height:var(--pcp-title-line);letter-spacing:var(--pcp-title-tracking);color:var(--pcp-text-root);margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pcp-header-btn{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--pcp-icon-button-size);height:var(--pcp-icon-button-size);padding:0;border:none;border-radius:var(--pcp-icon-button-radius);background:transparent;color:var(--pcp-text-focus);cursor:pointer;transition:background .15s var(--pcp-ease-out),color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-header-btn svg{width:13px;height:13px;flex-shrink:0}@media(hover:hover)and (pointer:fine){.pcp-header-btn:hover{background:var(--pcp-surface-hover);color:var(--pcp-text-primary)}}.pcp-header-btn:active{background:var(--pcp-surface-active);transform:scale(.97)}.pcp-header-btn:focus{outline:none}.pcp-header-btn:focus-visible{box-shadow:0 0 0 2px var(--pcp-bg),0 0 0 4px var(--pcp-focus-ring)}.pcp-plane-wrap{position:relative;width:100%;aspect-ratio:4 / 3;--pcp-clip-radius: var(--pcp-radius-sm);margin-bottom:5px;cursor:crosshair;touch-action:none}.pcp-plane{display:block;width:100%;height:100%}.pcp-cursor{position:absolute;width:13px;height:13px;margin:-6.5px 0 0 -6.5px;border:2px solid var(--pcp-cursor-ring);border-radius:50%;box-shadow:0 0 0 1px var(--pcp-cursor-outline),inset 0 0 0 1px #0000001f;pointer-events:none}.pcp-cursor[data-dragging=true]{transition:none}.pcp-slider-wrapper{position:relative;height:var(--pcp-control-height);margin-bottom:5px}.pcp-slider{position:absolute;top:0;right:0;bottom:0;left:0;cursor:pointer;-webkit-user-select:none;user-select:none;--pcp-clip-radius: var(--pcp-radius-sm);background:transparent;touch-action:none}.pcp-slider-fill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none}.pcp-slider-fill-hue{background:linear-gradient(to right,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.pcp-slider-fill-alpha{--pcp-alpha-gradient: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));background-color:var(--pcp-checker-base);background-image:var(--pcp-alpha-gradient),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size);background-position:0 0,0 0,0 calc(var(--pcp-checker-size) / 2),calc(var(--pcp-checker-size) / 2) calc(var(--pcp-checker-size) / -2),calc(var(--pcp-checker-size) / -2) 0}.pcp-slider-handle{position:absolute;top:50%;left:0;z-index:1;width:3px;height:var(--pcp-slider-handle-height);border:none;outline:none;border-radius:999px;background:var(--pcp-slider-handle);pointer-events:none;transform:translateY(-50%);opacity:.68;box-shadow:none;filter:none;transition:opacity .15s ease,background .12s ease}.pcp-slider:hover .pcp-slider-handle,.pcp-slider[data-active=true] .pcp-slider-handle{opacity:.68}.pcp-slider-handle[data-dragging=true]{opacity:.95}.pcp-tabs{position:relative;display:flex;align-items:center;height:var(--pcp-tab-row-height);box-sizing:border-box;padding:2px;margin-bottom:7px;background:transparent;border-radius:var(--pcp-radius)}.pcp-tabs-pill{position:absolute;top:2px;bottom:2px;left:0;width:0;background:var(--pcp-tab-pill);border-radius:5px;z-index:0;pointer-events:none;transition:left .2s var(--pcp-ease-out),width .2s var(--pcp-ease-out)}.pcp-tab{position:relative;z-index:1;flex:1;display:flex;align-items:center;justify-content:center;height:100%;padding:0 4px;font-family:inherit;font-size:11px;font-weight:500;line-height:1;text-align:center;background:transparent;border:none;color:var(--pcp-text-label);cursor:pointer;transition:color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-tab[data-active=true]{color:var(--pcp-text-primary)}.pcp-tab:active{transform:scale(.97)}.pcp-inputs{display:grid;width:100%;min-width:0;box-sizing:border-box;overflow:hidden;grid-template-columns:var(--pcp-input-panel-height) var(--pcp-swatch-code-gap) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-alpha-col-width);column-gap:3px;align-items:center;margin-bottom:8px;padding:var(--pcp-input-row-padding-y) var(--pcp-input-row-padding-x);background:var(--pcp-surface);border-radius:var(--pcp-radius-sm)}.pcp-swatch{grid-column:1;flex-shrink:0;width:var(--pcp-input-panel-height);height:var(--pcp-input-panel-height);--pcp-clip-radius: var(--pcp-radius-sm);position:relative}.pcp-fields{grid-column:3 / 6;display:grid;min-width:0;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:3px}.pcp-fields[data-format=hex] .pcp-field-hex{grid-column:1 / -1;justify-self:center;width:fit-content;align-items:center}.pcp-fields[data-format=hex] .pcp-field-label{text-align:center;white-space:nowrap}.pcp-fields[data-format=hex] .pcp-field-input{width:8ch;min-width:8ch;padding:0 4px}.pcp-fields[data-format=rgb] .pcp-field-r{grid-column:1}.pcp-fields[data-format=rgb] .pcp-field-g{grid-column:2}.pcp-fields[data-format=rgb] .pcp-field-b{grid-column:3}.pcp-fields[data-format=hsl] .pcp-field-h{grid-column:1}.pcp-fields[data-format=hsl] .pcp-field-s{grid-column:2}.pcp-fields[data-format=hsl] .pcp-field-l{grid-column:3}.pcp-fields[data-format=oklch] .pcp-field-l{grid-column:1}.pcp-fields[data-format=oklch] .pcp-field-c{grid-column:2}.pcp-fields[data-format=oklch] .pcp-field-h{grid-column:3}.pcp-alpha-field{grid-column:6;box-sizing:border-box;width:var(--pcp-alpha-col-width);min-width:var(--pcp-alpha-col-width);max-width:var(--pcp-alpha-col-width);align-items:center}.pcp-alpha-field .pcp-field-input{width:100%;min-width:0;padding:0;box-sizing:border-box}.pcp-field{min-width:0;display:flex;flex-direction:column;align-items:stretch;justify-content:center;gap:var(--pcp-field-label-gap)}.pcp-fields[data-format=oklch] .pcp-field-c .pcp-field-input{letter-spacing:-.02em;padding:0 1px}.pcp-field-label{display:block;font-size:var(--pcp-field-label-size);font-weight:500;line-height:var(--pcp-field-label-line);color:var(--pcp-text-label);margin:0;text-align:center}.pcp-fields:not([data-format=hex]) .pcp-field-label,.pcp-alpha-field .pcp-field-label{cursor:ew-resize;-webkit-user-select:none;user-select:none;touch-action:none;transition:color .15s var(--pcp-ease-out)}.pcp-field-label[data-scrubbing=true]{color:var(--pcp-text-primary)}.pcp-field-input{width:100%;min-width:0;min-height:var(--pcp-field-input-height);height:var(--pcp-field-input-height);padding:0 2px;font-family:var(--pcp-mono);font-size:var(--pcp-field-value-size);font-weight:500;line-height:var(--pcp-field-input-height);font-variant-numeric:tabular-nums;text-align:center;color:var(--pcp-text-secondary);background:transparent;border:none;border-radius:var(--pcp-field-input-radius);outline:none;box-shadow:none;transition:color .15s var(--pcp-ease-out),background .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-field-input:hover{background:var(--pcp-surface-hover)}}.pcp-field-input:focus{color:var(--pcp-text-focus);background:transparent;border-radius:var(--pcp-field-input-radius);box-shadow:none;outline:none}.pcp-field-input:active{background:var(--pcp-surface-active)}.pcp-history-section[hidden]{display:none}.pcp-history-label{font-size:10px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--pcp-text-label);margin:0 0 5px}.pcp-history{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:var(--pcp-history-gap);width:100%}.pcp-history-swatch{-moz-appearance:none;appearance:none;-webkit-appearance:none;display:block;width:100%;aspect-ratio:1;height:auto;flex-shrink:0;padding:0;border:none;background:none;--pcp-clip-radius: 4px;cursor:pointer;transition:opacity .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-history-swatch:hover{opacity:.85}}.pcp-history-swatch:active{opacity:.7}@media(prefers-reduced-motion:reduce){.pcp-header-btn,.pcp-tab,.pcp-tabs-pill,.pcp-cursor,.pcp-slider-handle,.pcp-history-swatch{transition:none}.pcp-tab:active,.pcp-header-btn:active{transform:none}}', br = (e, n) => {
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
}, _i = {
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
}, Ti = (e) => br(_i[e.toLowerCase()], 6), Li = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, Ni = (e) => {
  let n;
  return (n = e.match(Li)) ? br(parseInt(n[1], 16), n[1].length) : void 0;
}, ne = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", Se = `${ne}%`, yn = `(?:${ne}%|${ne})`, Si = `(?:${ne}(deg|grad|rad|turn)|${ne})`, be = "\\s*,\\s*", Ai = new RegExp(
  `^rgba?\\(\\s*${ne}${be}${ne}${be}${ne}\\s*(?:,\\s*${yn}\\s*)?\\)$`
), Hi = new RegExp(
  `^rgba?\\(\\s*${Se}${be}${Se}${be}${Se}\\s*(?:,\\s*${yn}\\s*)?\\)$`
), Ci = (e) => {
  let n = { mode: "rgb" }, t;
  if (t = e.match(Ai))
    t[1] !== void 0 && (n.r = t[1] / 255), t[2] !== void 0 && (n.g = t[2] / 255), t[3] !== void 0 && (n.b = t[3] / 255);
  else if (t = e.match(Hi))
    t[1] !== void 0 && (n.r = t[1] / 100), t[2] !== void 0 && (n.g = t[2] / 100), t[3] !== void 0 && (n.b = t[3] / 100);
  else
    return;
  return t[4] !== void 0 ? n.alpha = Math.max(0, Math.min(1, t[4] / 100)) : t[5] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[5]))), n;
}, Ue = (e, n) => e === void 0 ? void 0 : typeof e != "object" ? xr(e) : e.mode !== void 0 ? e : n ? { ...e, mode: n } : void 0, R = (e = "rgb") => (n) => (n = Ue(n, e)) !== void 0 ? (
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
) : void 0, O = {}, gr = {}, Ke = [], mr = {}, Ei = (e) => e, y = (e) => (O[e.mode] = {
  ...O[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((n) => {
  O[n] || (O[n] = {}), O[n][e.mode] = e.fromMode[n];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((n) => {
  if (e.ranges[n] === void 0 && (e.ranges[n] = [0, 1]), !e.interpolate[n])
    throw new Error(`Missing interpolator for: ${n}`);
  typeof e.interpolate[n] == "function" && (e.interpolate[n] = {
    use: e.interpolate[n]
  }), e.interpolate[n].fixup || (e.interpolate[n].fixup = Ei);
}), gr[e.mode] = e, (e.parse || []).forEach((n) => {
  Pi(n, e.mode);
}), R(e.mode)), at = (e) => gr[e], Pi = (e, n) => {
  if (typeof e == "string") {
    if (!n)
      throw new Error("'mode' required when 'parser' is a string");
    mr[e] = n;
  } else typeof e == "function" && Ke.indexOf(e) < 0 && Ke.push(e);
}, Qt = /[^\x00-\x7F]|[a-zA-Z_]/, Ii = /[^\x00-\x7F]|[-\w]/, p = {
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
function Oe(e) {
  let n = e[g], t = e[g + 1];
  return n === "-" || n === "+" ? /\d/.test(t) || t === "." && /\d/.test(e[g + 2]) : n === "." ? /\d/.test(t) : /\d/.test(n);
}
function en(e) {
  if (g >= e.length)
    return !1;
  let n = e[g];
  if (Qt.test(n))
    return !0;
  if (n === "-") {
    if (e.length - g < 2)
      return !1;
    let t = e[g + 1];
    return !!(t === "-" || Qt.test(t));
  }
  return !1;
}
const qi = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function Te(e) {
  let n = "";
  if ((e[g] === "-" || e[g] === "+") && (n += e[g++]), n += De(e), e[g] === "." && /\d/.test(e[g + 1]) && (n += e[g++] + De(e)), (e[g] === "e" || e[g] === "E") && ((e[g + 1] === "-" || e[g + 1] === "+") && /\d/.test(e[g + 2]) ? n += e[g++] + e[g++] + De(e) : /\d/.test(e[g + 1]) && (n += e[g++] + De(e))), en(e)) {
    let t = Qe(e);
    return t === "deg" || t === "rad" || t === "turn" || t === "grad" ? { type: p.Hue, value: n * qi[t] } : void 0;
  }
  return e[g] === "%" ? (g++, { type: p.Percentage, value: +n }) : { type: p.Number, value: +n };
}
function De(e) {
  let n = "";
  for (; /\d/.test(e[g]); )
    n += e[g++];
  return n;
}
function Qe(e) {
  let n = "";
  for (; g < e.length && Ii.test(e[g]); )
    n += e[g++];
  return n;
}
function Ri(e) {
  let n = Qe(e);
  return e[g] === "(" ? (g++, { type: p.Function, value: n }) : n === "none" ? { type: p.None, value: void 0 } : { type: p.Ident, value: n };
}
function Fi(e = "") {
  let n = e.trim(), t = [], r;
  for (g = 0; g < n.length; ) {
    if (r = n[g++], r === `
` || r === "	" || r === " ") {
      for (; g < n.length && (n[g] === `
` || n[g] === "	" || n[g] === " "); )
        g++;
      continue;
    }
    if (r === ",")
      return;
    if (r === ")") {
      t.push({ type: p.ParenClose });
      continue;
    }
    if (r === "+") {
      if (g--, Oe(n)) {
        t.push(Te(n));
        continue;
      }
      return;
    }
    if (r === "-") {
      if (g--, Oe(n)) {
        t.push(Te(n));
        continue;
      }
      if (en(n)) {
        t.push({ type: p.Ident, value: Qe(n) });
        continue;
      }
      return;
    }
    if (r === ".") {
      if (g--, Oe(n)) {
        t.push(Te(n));
        continue;
      }
      return;
    }
    if (r === "/") {
      for (; g < n.length && (n[g] === `
` || n[g] === "	" || n[g] === " "); )
        g++;
      let i;
      if (Oe(n) && (i = Te(n), i.type !== p.Hue)) {
        t.push({ type: p.Alpha, value: i });
        continue;
      }
      if (en(n) && Qe(n) === "none") {
        t.push({
          type: p.Alpha,
          value: { type: p.None, value: void 0 }
        });
        continue;
      }
      return;
    }
    if (/\d/.test(r)) {
      g--, t.push(Te(n));
      continue;
    }
    if (Qt.test(r)) {
      g--, t.push(Ri(n));
      continue;
    }
    return;
  }
  return t;
}
function Xi(e) {
  e._i = 0;
  let n = e[e._i++];
  if (!n || n.type !== p.Function || n.value !== "color" || (n = e[e._i++], n.type !== p.Ident))
    return;
  const t = mr[n.value];
  if (!t)
    return;
  const r = { mode: t }, i = vr(e, !1);
  if (!i)
    return;
  const a = at(t).channels;
  for (let o = 0, c, u; o < a.length; o++)
    c = i[o], u = a[o], c.type !== p.None && (r[u] = c.type === p.Number ? c.value : c.value / 100, u === "alpha" && (r[u] = Math.max(0, Math.min(1, r[u]))));
  return r;
}
function vr(e, n) {
  const t = [];
  let r;
  for (; e._i < e.length; ) {
    if (r = e[e._i++], r.type === p.None || r.type === p.Number || r.type === p.Alpha || r.type === p.Percentage || n && r.type === p.Hue) {
      t.push(r);
      continue;
    }
    if (r.type === p.ParenClose) {
      if (e._i < e.length)
        return;
      continue;
    }
    return;
  }
  if (!(t.length < 3 || t.length > 4)) {
    if (t.length === 4) {
      if (t[3].type !== p.Alpha)
        return;
      t[3] = t[3].value;
    }
    return t.length === 3 && t.push({ type: p.None, value: void 0 }), t.every((i) => i.type !== p.Alpha) ? t : void 0;
  }
}
function Oi(e, n) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== p.Function)
    return;
  let r = vr(e, n);
  if (r)
    return r.unshift(t.value), r;
}
const xr = (e) => {
  if (typeof e != "string")
    return;
  const n = Fi(e), t = n ? Oi(n, !0) : void 0;
  let r, i = 0, a = Ke.length;
  for (; i < a; )
    if ((r = Ke[i++](e, t)) !== void 0)
      return r;
  return n ? Xi(n) : void 0;
};
function Di(e, n) {
  if (!n || n[0] !== "rgb" && n[0] !== "rgba")
    return;
  const t = { mode: "rgb" }, [, r, i, a, o] = n;
  if (!(r.type === p.Hue || i.type === p.Hue || a.type === p.Hue))
    return r.type !== p.None && (t.r = r.type === p.Number ? r.value / 255 : r.value / 100), i.type !== p.None && (t.g = i.type === p.Number ? i.value / 255 : i.value / 100), a.type !== p.None && (t.b = a.type === p.Number ? a.value / 255 : a.value / 100), o.type !== p.None && (t.alpha = Math.min(
      1,
      Math.max(
        0,
        o.type === p.Number ? o.value : o.value / 100
      )
    )), t;
}
const ji = (e) => e === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0, Zi = (e, n, t) => e + t * (n - e), Yi = (e) => {
  let n = [];
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t], i = e[t + 1];
    r === void 0 && i === void 0 ? n.push(void 0) : r !== void 0 && i !== void 0 ? n.push([r, i]) : n.push(r !== void 0 ? [r, r] : [i, i]);
  }
  return n;
}, Bi = (e) => (n) => {
  let t = Yi(n);
  return (r) => {
    let i = r * t.length, a = r >= 1 ? t.length - 1 : Math.max(Math.floor(i), 0), o = t[a];
    return o === void 0 ? void 0 : e(o[0], o[1], i - a);
  };
}, h = Bi(Zi), L = (e) => {
  let n = !1, t = e.map((r) => r !== void 0 ? (n = !0, r) : 1);
  return n ? t : e;
}, ge = {
  mode: "rgb",
  channels: ["r", "g", "b", "alpha"],
  parse: [
    Di,
    Ni,
    Ci,
    Ti,
    ji,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: h,
    g: h,
    b: h,
    alpha: { use: h, fixup: L }
  },
  gamut: !0,
  white: { r: 1, g: 1, b: 1 },
  black: { r: 0, g: 0, b: 0 }
}, $t = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), Rn = (e) => {
  let n = $t(e.r), t = $t(e.g), r = $t(e.b), i = {
    mode: "xyz65",
    x: 0.5766690429101305 * n + 0.1855582379065463 * t + 0.1882286462349947 * r,
    y: 0.297344975250536 * n + 0.6273635662554661 * t + 0.0752914584939979 * r,
    z: 0.0270313613864123 * n + 0.0706888525358272 * t + 0.9913375368376386 * r
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, zt = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), Fn = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "a98",
    r: zt(
      e * 2.0415879038107465 - n * 0.5650069742788597 - 0.3447313507783297 * t
    ),
    g: zt(
      e * -0.9692436362808798 + n * 1.8759675015077206 + 0.0415550574071756 * t
    ),
    b: zt(
      e * 0.0134442806320312 - n * 0.1183623922310184 + 1.0151749943912058 * t
    )
  };
  return r !== void 0 && (i.alpha = r), i;
}, _t = (e = 0) => {
  const n = Math.abs(e);
  return n <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((n + 0.055) / 1.055, 2.4);
}, me = ({ r: e, g: n, b: t, alpha: r }) => {
  let i = {
    mode: "lrgb",
    r: _t(e),
    g: _t(n),
    b: _t(t)
  };
  return r !== void 0 && (i.alpha = r), i;
}, se = (e) => {
  let { r: n, g: t, b: r, alpha: i } = me(e), a = {
    mode: "xyz65",
    x: 0.4123907992659593 * n + 0.357584339383878 * t + 0.1804807884018343 * r,
    y: 0.2126390058715102 * n + 0.715168678767756 * t + 0.0721923153607337 * r,
    z: 0.0193308187155918 * n + 0.119194779794626 * t + 0.9505321522496607 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, Tt = (e = 0) => {
  const n = Math.abs(e);
  return n > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(n, 1 / 2.4) - 0.055) : e * 12.92;
}, ve = ({ r: e, g: n, b: t, alpha: r }, i = "rgb") => {
  let a = {
    mode: i,
    r: Tt(e),
    g: Tt(n),
    b: Tt(t)
  };
  return r !== void 0 && (a.alpha = r), a;
}, le = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = ve({
    r: e * 3.2409699419045226 - n * 1.537383177570094 - 0.4986107602930034 * t,
    g: e * -0.9692436362808796 + n * 1.8759675015077204 + 0.0415550574071756 * t,
    b: e * 0.0556300796969936 - n * 0.2039769588889765 + 1.0569715142428784 * t
  });
  return r !== void 0 && (i.alpha = r), i;
}, Gi = {
  ...ge,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => Fn(se(e)),
    xyz65: Fn
  },
  toMode: {
    rgb: (e) => le(Rn(e)),
    xyz65: Rn
  }
}, A = (e) => (e = e % 360) < 0 ? e + 360 : e, Ji = (e, n) => e.map((t, r, i) => {
  if (t === void 0)
    return t;
  let a = A(t);
  return r === 0 || e[r - 1] === void 0 ? a : n(a - A(i[r - 1]));
}).reduce((t, r) => !t.length || r === void 0 || t[t.length - 1] === void 0 ? (t.push(r), t) : (t.push(r + t[t.length - 1]), t), []), G = (e) => Ji(e, (n) => Math.abs(n) <= 180 ? n : n - 360 * Math.sign(n)), S = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0], Vi = Math.PI / 180, Wi = 180 / Math.PI;
let Xn = S[3] * S[4], On = S[1] * S[4], Dn = S[1] * S[2] - S[0] * S[3];
const Ui = ({ r: e, g: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (Dn * t + e * Xn - n * On) / (Dn + Xn - On), a = t - i, o = (S[4] * (n - i) - S[2] * a) / S[3], c = {
    mode: "cubehelix",
    l: i,
    s: i === 0 || i === 1 ? void 0 : Math.sqrt(a * a + o * o) / (S[4] * i * (1 - i))
  };
  return c.s && (c.h = Math.atan2(o, a) * Wi - 120), r !== void 0 && (c.alpha = r), c;
}, Ki = ({ h: e, s: n, l: t, alpha: r }) => {
  let i = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * Vi, t === void 0 && (t = 0);
  let a = n === void 0 ? 0 : n * t * (1 - t), o = Math.cos(e), c = Math.sin(e);
  return i.r = t + a * (S[0] * o + S[1] * c), i.g = t + a * (S[2] * o + S[3] * c), i.b = t + a * (S[4] * o + S[5] * c), r !== void 0 && (i.alpha = r), i;
}, ot = (e, n) => {
  if (e.h === void 0 || n.h === void 0 || !e.s || !n.s)
    return 0;
  let t = A(e.h), r = A(n.h), i = Math.sin((r - t + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * n.s) * i;
}, Qi = (e, n) => {
  if (e.h === void 0 || n.h === void 0)
    return 0;
  let t = A(e.h), r = A(n.h);
  return Math.abs(r - t) > 180 ? t - (r - 360 * Math.sign(r - t)) : r - t;
}, st = (e, n) => {
  if (e.h === void 0 || n.h === void 0 || !e.c || !n.c)
    return 0;
  let t = A(e.h), r = A(n.h), i = Math.sin((r - t + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * n.c) * i;
}, J = (e) => {
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
}, ea = {
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
    rgb: Ui
  },
  toMode: {
    rgb: Ki
  },
  interpolate: {
    h: {
      use: h,
      fixup: G
    },
    s: h,
    l: h,
    alpha: {
      use: h,
      fixup: L
    }
  },
  difference: {
    h: ot
  },
  average: {
    h: J
  }
}, re = ({ l: e, a: n, b: t, alpha: r }, i = "lch") => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let a = Math.sqrt(n * n + t * t), o = { mode: i, l: e, c: a };
  return a && (o.h = A(Math.atan2(t, n) * 180 / Math.PI)), r !== void 0 && (o.alpha = r), o;
}, ie = ({ l: e, c: n, h: t, alpha: r }, i = "lab") => {
  t === void 0 && (t = 0);
  let a = {
    mode: i,
    l: e,
    a: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    b: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return r !== void 0 && (a.alpha = r), a;
}, yr = Math.pow(29, 3) / Math.pow(3, 3), Mr = Math.pow(6, 3) / Math.pow(29, 3), T = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: (1 - 0.3457 - 0.3585) / 0.3585
}, de = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: (1 - 0.3127 - 0.329) / 0.329
};
let Lt = (e) => Math.pow(e, 3) > Mr ? Math.pow(e, 3) : (116 * e - 16) / yr;
const wr = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (e + 16) / 116, a = n / 500 + i, o = i - t / 200, c = {
    mode: "xyz65",
    x: Lt(a) * de.X,
    y: Lt(i) * de.Y,
    z: Lt(o) * de.Z
  };
  return r !== void 0 && (c.alpha = r), c;
}, lt = (e) => le(wr(e)), Nt = (e) => e > Mr ? Math.cbrt(e) : (yr * e + 16) / 116, kr = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Nt(e / de.X), a = Nt(n / de.Y), o = Nt(t / de.Z), c = {
    mode: "lab65",
    l: 116 * a - 16,
    a: 500 * (i - a),
    b: 200 * (a - o)
  };
  return r !== void 0 && (c.alpha = r), c;
}, ct = (e) => {
  let n = kr(se(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, et = 1, $r = 1, Ae = 26 / 180 * Math.PI, tt = Math.cos(Ae), nt = Math.sin(Ae), zr = 100 / Math.log(139 / 100), tn = ({ l: e, c: n, h: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "lab65",
    l: (Math.exp(e * et / zr) - 1) / 39e-4
  }, a = (Math.exp(0.0435 * n * $r * et) - 1) / 0.075, o = a * Math.cos(t / 180 * Math.PI - Ae), c = a * Math.sin(t / 180 * Math.PI - Ae);
  return i.a = o * tt - c / 0.83 * nt, i.b = o * nt + c / 0.83 * tt, r !== void 0 && (i.alpha = r), i;
}, nn = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = n * tt + t * nt, a = 0.83 * (t * tt - n * nt), o = Math.sqrt(i * i + a * a), c = {
    mode: "dlch",
    l: zr / et * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * o) / (0.0435 * $r * et)
  };
  return c.c && (c.h = A((Math.atan2(a, i) + Ae) / Math.PI * 180)), r !== void 0 && (c.alpha = r), c;
}, jn = (e) => tn(re(e, "dlch")), Zn = (e) => ie(nn(e), "dlab"), ta = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: jn,
    rgb: (e) => lt(jn(e))
  },
  fromMode: {
    lab65: Zn,
    rgb: (e) => Zn(ct(e))
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-40.09, 45.501],
    b: [-40.469, 44.344]
  },
  interpolate: {
    l: h,
    a: h,
    b: h,
    alpha: {
      use: h,
      fixup: L
    }
  }
}, na = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: tn,
    dlab: (e) => ie(e, "dlab"),
    rgb: (e) => lt(tn(e))
  },
  fromMode: {
    lab65: nn,
    dlab: (e) => re(e, "dlch"),
    rgb: (e) => nn(ct(e))
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 51.484],
    h: [0, 360]
  },
  interpolate: {
    l: h,
    c: h,
    h: {
      use: h,
      fixup: G
    },
    alpha: {
      use: h,
      fixup: L
    }
  },
  difference: {
    h: st
  },
  average: {
    h: J
  }
};
function ra({ h: e, s: n, i: t, alpha: r }) {
  e = A(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
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
function ia({ r: e, g: n, b: t, alpha: r }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.max(e, n, t), a = Math.min(e, n, t), o = {
    mode: "hsi",
    s: e + n + t === 0 ? 0 : 1 - 3 * a / (e + n + t),
    i: (e + n + t) / 3
  };
  return i - a !== 0 && (o.h = (i === e ? (n - t) / (i - a) + (n < t) * 6 : i === n ? (t - e) / (i - a) + 2 : (e - n) / (i - a) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
const aa = {
  mode: "hsi",
  toMode: {
    rgb: ra
  },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: {
    rgb: ia
  },
  channels: ["h", "s", "i", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: h, fixup: G },
    s: h,
    i: h,
    alpha: { use: h, fixup: L }
  },
  difference: {
    h: ot
  },
  average: {
    h: J
  }
};
function oa({ h: e, s: n, l: t, alpha: r }) {
  e = A(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = t + n * (t < 0.5 ? t : 1 - t), a = i - (i - t) * 2 * Math.abs(e / 60 % 2 - 1), o;
  switch (Math.floor(e / 60)) {
    case 0:
      o = { r: i, g: a, b: 2 * t - i };
      break;
    case 1:
      o = { r: a, g: i, b: 2 * t - i };
      break;
    case 2:
      o = { r: 2 * t - i, g: i, b: a };
      break;
    case 3:
      o = { r: 2 * t - i, g: a, b: i };
      break;
    case 4:
      o = { r: a, g: 2 * t - i, b: i };
      break;
    case 5:
      o = { r: i, g: 2 * t - i, b: a };
      break;
    default:
      o = { r: 2 * t - i, g: 2 * t - i, b: 2 * t - i };
  }
  return o.mode = "rgb", r !== void 0 && (o.alpha = r), o;
}
function sa({ r: e, g: n, b: t, alpha: r }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.max(e, n, t), a = Math.min(e, n, t), o = {
    mode: "hsl",
    s: i === a ? 0 : (i - a) / (1 - Math.abs(i + a - 1)),
    l: 0.5 * (i + a)
  };
  return i - a !== 0 && (o.h = (i === e ? (n - t) / (i - a) + (n < t) * 6 : i === n ? (t - e) / (i - a) + 2 : (e - n) / (i - a) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
const la = (e, n) => {
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
}, ca = new RegExp(
  `^hsla?\\(\\s*${Si}${be}${Se}${be}${Se}\\s*(?:,\\s*${yn}\\s*)?\\)$`
), da = (e) => {
  let n = e.match(ca);
  if (!n) return;
  let t = { mode: "hsl" };
  return n[3] !== void 0 ? t.h = +n[3] : n[1] !== void 0 && n[2] !== void 0 && (t.h = la(n[1], n[2])), n[4] !== void 0 && (t.s = Math.min(Math.max(0, n[4] / 100), 1)), n[5] !== void 0 && (t.l = Math.min(Math.max(0, n[5] / 100), 1)), n[6] !== void 0 ? t.alpha = Math.max(0, Math.min(1, n[6] / 100)) : n[7] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[7]))), t;
};
function pa(e, n) {
  if (!n || n[0] !== "hsl" && n[0] !== "hsla")
    return;
  const t = { mode: "hsl" }, [, r, i, a, o] = n;
  if (r.type !== p.None) {
    if (r.type === p.Percentage)
      return;
    t.h = r.value;
  }
  if (i.type !== p.None) {
    if (i.type === p.Hue)
      return;
    t.s = i.value / 100;
  }
  if (a.type !== p.None) {
    if (a.type === p.Hue)
      return;
    t.l = a.value / 100;
  }
  return o.type !== p.None && (t.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === p.Number ? o.value : o.value / 100
    )
  )), t;
}
const _r = {
  mode: "hsl",
  toMode: {
    rgb: oa
  },
  fromMode: {
    rgb: sa
  },
  channels: ["h", "s", "l", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [pa, da],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: h, fixup: G },
    s: h,
    l: h,
    alpha: { use: h, fixup: L }
  },
  difference: {
    h: ot
  },
  average: {
    h: J
  }
};
function Tr({ h: e, s: n, v: t, alpha: r }) {
  e = A(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
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
function Lr({ r: e, g: n, b: t, alpha: r }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.max(e, n, t), a = Math.min(e, n, t), o = {
    mode: "hsv",
    s: i === 0 ? 0 : 1 - a / i,
    v: i
  };
  return i - a !== 0 && (o.h = (i === e ? (n - t) / (i - a) + (n < t) * 6 : i === n ? (t - e) / (i - a) + 2 : (e - n) / (i - a) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
const Nr = {
  mode: "hsv",
  toMode: {
    rgb: Tr
  },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: {
    rgb: Lr
  },
  channels: ["h", "s", "v", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: h, fixup: G },
    s: h,
    v: h,
    alpha: { use: h, fixup: L }
  },
  difference: {
    h: ot
  },
  average: {
    h: J
  }
};
function ua({ h: e, w: n, b: t, alpha: r }) {
  if (n === void 0 && (n = 0), t === void 0 && (t = 0), n + t > 1) {
    let i = n + t;
    n /= i, t /= i;
  }
  return Tr({
    h: e,
    s: t === 1 ? 1 : 1 - n / (1 - t),
    v: 1 - t,
    alpha: r
  });
}
function ha(e) {
  let n = Lr(e);
  if (n === void 0) return;
  let t = n.s !== void 0 ? n.s : 0, r = n.v !== void 0 ? n.v : 0, i = {
    mode: "hwb",
    w: (1 - t) * r,
    b: 1 - r
  };
  return n.h !== void 0 && (i.h = n.h), n.alpha !== void 0 && (i.alpha = n.alpha), i;
}
function fa(e, n) {
  if (!n || n[0] !== "hwb")
    return;
  const t = { mode: "hwb" }, [, r, i, a, o] = n;
  if (r.type !== p.None) {
    if (r.type === p.Percentage)
      return;
    t.h = r.value;
  }
  if (i.type !== p.None) {
    if (i.type === p.Hue)
      return;
    t.w = i.value / 100;
  }
  if (a.type !== p.None) {
    if (a.type === p.Hue)
      return;
    t.b = a.value / 100;
  }
  return o.type !== p.None && (t.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === p.Number ? o.value : o.value / 100
    )
  )), t;
}
const ba = {
  mode: "hwb",
  toMode: {
    rgb: ua
  },
  fromMode: {
    rgb: ha
  },
  channels: ["h", "w", "b", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [fa],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: h, fixup: G },
    w: h,
    b: h,
    alpha: { use: h, fixup: L }
  },
  difference: {
    h: Qi
  },
  average: {
    h: J
  }
}, Sr = 203, dt = 0.1593017578125, Ar = 78.84375, pt = 0.8359375, ut = 18.8515625, ht = 18.6875;
function St(e) {
  if (e < 0) return 0;
  const n = Math.pow(e, 1 / Ar);
  return 1e4 * Math.pow(Math.max(0, n - pt) / (ut - ht * n), 1 / dt);
}
function At(e) {
  if (e < 0) return 0;
  const n = Math.pow(e / 1e4, dt);
  return Math.pow((pt + ut * n) / (1 + ht * n), Ar);
}
const Ht = (e) => Math.max(e / Sr, 0), Yn = ({ i: e, t: n, p: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = St(
    e + 0.008609037037932761 * n + 0.11102962500302593 * t
  ), a = St(
    e - 0.00860903703793275 * n - 0.11102962500302599 * t
  ), o = St(
    e + 0.5600313357106791 * n - 0.32062717498731885 * t
  ), c = {
    mode: "xyz65",
    x: Ht(
      2.070152218389422 * i - 1.3263473389671556 * a + 0.2066510476294051 * o
    ),
    y: Ht(
      0.3647385209748074 * i + 0.680566024947227 * a - 0.0453045459220346 * o
    ),
    z: Ht(
      -0.049747207535812 * i - 0.0492609666966138 * a + 1.1880659249923042 * o
    )
  };
  return r !== void 0 && (c.alpha = r), c;
}, Ct = (e = 0) => Math.max(e * Sr, 0), Bn = ({ x: e, y: n, z: t, alpha: r }) => {
  const i = Ct(e), a = Ct(n), o = Ct(t), c = At(
    0.3592832590121217 * i + 0.6976051147779502 * a - 0.0358915932320289 * o
  ), u = At(
    -0.1920808463704995 * i + 1.1004767970374323 * a + 0.0753748658519118 * o
  ), f = At(
    0.0070797844607477 * i + 0.0748396662186366 * a + 0.8433265453898765 * o
  ), b = 0.5 * c + 0.5 * u, m = 1.61376953125 * c - 3.323486328125 * u + 1.709716796875 * f, v = 4.378173828125 * c - 4.24560546875 * u - 0.132568359375 * f, w = { mode: "itp", i: b, t: m, p: v };
  return r !== void 0 && (w.alpha = r), w;
}, ga = {
  mode: "itp",
  channels: ["i", "t", "p", "alpha"],
  parse: ["--ictcp"],
  serialize: "--ictcp",
  toMode: {
    xyz65: Yn,
    rgb: (e) => le(Yn(e))
  },
  fromMode: {
    xyz65: Bn,
    rgb: (e) => Bn(se(e))
  },
  ranges: {
    i: [0, 0.581],
    t: [-0.369, 0.272],
    p: [-0.164, 0.331]
  },
  interpolate: {
    i: h,
    t: h,
    p: h,
    alpha: { use: h, fixup: L }
  }
}, ma = 134.03437499999998, va = 16295499532821565e-27, Et = (e) => {
  if (e < 0) return 0;
  let n = Math.pow(e / 1e4, dt);
  return Math.pow((pt + ut * n) / (1 + ht * n), ma);
}, Pt = (e = 0) => Math.max(e * 203, 0), Hr = ({ x: e, y: n, z: t, alpha: r }) => {
  e = Pt(e), n = Pt(n), t = Pt(t);
  let i = 1.15 * e - 0.15 * t, a = 0.66 * n + 0.34 * e, o = Et(0.41478972 * i + 0.579999 * a + 0.014648 * t), c = Et(-0.20151 * i + 1.120649 * a + 0.0531008 * t), u = Et(-0.0166008 * i + 0.2648 * a + 0.6684799 * t), f = (o + c) / 2, b = {
    mode: "jab",
    j: 0.44 * f / (1 - 0.56 * f) - va,
    a: 3.524 * o - 4.066708 * c + 0.542708 * u,
    b: 0.199076 * o + 1.096799 * c - 1.295875 * u
  };
  return r !== void 0 && (b.alpha = r), b;
}, xa = 134.03437499999998, Gn = 16295499532821565e-27, It = (e) => {
  if (e < 0) return 0;
  let n = Math.pow(e, 1 / xa);
  return 1e4 * Math.pow((pt - n) / (ht * n - ut), 1 / dt);
}, qt = (e) => e / 203, Cr = ({ j: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (e + Gn) / (0.44 + 0.56 * (e + Gn)), a = It(i + 0.13860504 * n + 0.058047316 * t), o = It(i - 0.13860504 * n - 0.058047316 * t), c = It(i - 0.096019242 * n - 0.8118919 * t), u = {
    mode: "xyz65",
    x: qt(
      1.661373024652174 * a - 0.914523081304348 * o + 0.23136208173913045 * c
    ),
    y: qt(
      -0.3250758611844533 * a + 1.571847026732543 * o - 0.21825383453227928 * c
    ),
    z: qt(-0.090982811 * a - 0.31272829 * o + 1.5227666 * c)
  };
  return r !== void 0 && (u.alpha = r), u;
}, Er = (e) => {
  let n = Hr(se(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, Pr = (e) => le(Cr(e)), ya = {
  mode: "jab",
  channels: ["j", "a", "b", "alpha"],
  parse: ["--jzazbz"],
  serialize: "--jzazbz",
  fromMode: {
    rgb: Er,
    xyz65: Hr
  },
  toMode: {
    rgb: Pr,
    xyz65: Cr
  },
  ranges: {
    j: [0, 0.222],
    a: [-0.109, 0.129],
    b: [-0.185, 0.134]
  },
  interpolate: {
    j: h,
    a: h,
    b: h,
    alpha: { use: h, fixup: L }
  }
}, Jn = ({ j: e, a: n, b: t, alpha: r }) => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.sqrt(n * n + t * t), a = {
    mode: "jch",
    j: e,
    c: i
  };
  return i && (a.h = A(Math.atan2(t, n) * 180 / Math.PI)), r !== void 0 && (a.alpha = r), a;
}, Vn = ({ j: e, c: n, h: t, alpha: r }) => {
  t === void 0 && (t = 0);
  let i = {
    mode: "jab",
    j: e,
    a: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    b: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return r !== void 0 && (i.alpha = r), i;
}, Ma = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: Vn,
    rgb: (e) => Pr(Vn(e))
  },
  fromMode: {
    rgb: (e) => Jn(Er(e)),
    jab: Jn
  },
  channels: ["j", "c", "h", "alpha"],
  ranges: {
    j: [0, 0.221],
    c: [0, 0.19],
    h: [0, 360]
  },
  interpolate: {
    h: { use: h, fixup: G },
    c: h,
    j: h,
    alpha: { use: h, fixup: L }
  },
  difference: {
    h: st
  },
  average: {
    h: J
  }
}, ft = Math.pow(29, 3) / Math.pow(3, 3), Mn = Math.pow(6, 3) / Math.pow(29, 3);
let Rt = (e) => Math.pow(e, 3) > Mn ? Math.pow(e, 3) : (116 * e - 16) / ft;
const wn = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (e + 16) / 116, a = n / 500 + i, o = i - t / 200, c = {
    mode: "xyz50",
    x: Rt(a) * T.X,
    y: Rt(i) * T.Y,
    z: Rt(o) * T.Z
  };
  return r !== void 0 && (c.alpha = r), c;
}, Re = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = ve({
    r: e * 3.1341359569958707 - n * 1.6173863321612538 - 0.4906619460083532 * t,
    g: e * -0.978795502912089 + n * 1.916254567259524 + 0.03344273116131949 * t,
    b: e * 0.07195537988411677 - n * 0.2289768264158322 + 1.405386058324125 * t
  });
  return r !== void 0 && (i.alpha = r), i;
}, Ir = (e) => Re(wn(e)), Fe = (e) => {
  let { r: n, g: t, b: r, alpha: i } = me(e), a = {
    mode: "xyz50",
    x: 0.436065742824811 * n + 0.3851514688337912 * t + 0.14307845442264197 * r,
    y: 0.22249319175623702 * n + 0.7168870538238823 * t + 0.06061979053616537 * r,
    z: 0.013923904500943465 * n + 0.09708128566574634 * t + 0.7140993584005155 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, Ft = (e) => e > Mn ? Math.cbrt(e) : (ft * e + 16) / 116, kn = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Ft(e / T.X), a = Ft(n / T.Y), o = Ft(t / T.Z), c = {
    mode: "lab",
    l: 116 * a - 16,
    a: 500 * (i - a),
    b: 200 * (a - o)
  };
  return r !== void 0 && (c.alpha = r), c;
}, qr = (e) => {
  let n = kn(Fe(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
};
function wa(e, n) {
  if (!n || n[0] !== "lab")
    return;
  const t = { mode: "lab" }, [, r, i, a, o] = n;
  if (!(r.type === p.Hue || i.type === p.Hue || a.type === p.Hue))
    return r.type !== p.None && (t.l = Math.min(Math.max(0, r.value), 100)), i.type !== p.None && (t.a = i.type === p.Number ? i.value : i.value * 125 / 100), a.type !== p.None && (t.b = a.type === p.Number ? a.value : a.value * 125 / 100), o.type !== p.None && (t.alpha = Math.min(
      1,
      Math.max(
        0,
        o.type === p.Number ? o.value : o.value / 100
      )
    )), t;
}
const $n = {
  mode: "lab",
  toMode: {
    xyz50: wn,
    rgb: Ir
  },
  fromMode: {
    xyz50: kn,
    rgb: qr
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  },
  parse: [wa],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: h,
    a: h,
    b: h,
    alpha: { use: h, fixup: L }
  }
}, ka = {
  ...$n,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: wr,
    rgb: lt
  },
  fromMode: {
    xyz65: kr,
    rgb: ct
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function $a(e, n) {
  if (!n || n[0] !== "lch")
    return;
  const t = { mode: "lch" }, [, r, i, a, o] = n;
  if (r.type !== p.None) {
    if (r.type === p.Hue)
      return;
    t.l = Math.min(Math.max(0, r.value), 100);
  }
  if (i.type !== p.None && (t.c = Math.max(
    0,
    i.type === p.Number ? i.value : i.value * 150 / 100
  )), a.type !== p.None) {
    if (a.type === p.Percentage)
      return;
    t.h = a.value;
  }
  return o.type !== p.None && (t.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === p.Number ? o.value : o.value / 100
    )
  )), t;
}
const zn = {
  mode: "lch",
  toMode: {
    lab: ie,
    rgb: (e) => Ir(ie(e))
  },
  fromMode: {
    rgb: (e) => re(qr(e)),
    lab: re
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  },
  parse: [$a],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: h, fixup: G },
    c: h,
    l: h,
    alpha: { use: h, fixup: L }
  },
  difference: {
    h: st
  },
  average: {
    h: J
  }
}, za = {
  ...zn,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => ie(e, "lab65"),
    rgb: (e) => lt(ie(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => re(ct(e), "lch65"),
    lab65: (e) => re(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, Rr = ({ l: e, u: n, v: t, alpha: r }) => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.sqrt(n * n + t * t), a = {
    mode: "lchuv",
    l: e,
    c: i
  };
  return i && (a.h = A(Math.atan2(t, n) * 180 / Math.PI)), r !== void 0 && (a.alpha = r), a;
}, Fr = ({ l: e, c: n, h: t, alpha: r }) => {
  t === void 0 && (t = 0);
  let i = {
    mode: "luv",
    l: e,
    u: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    v: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return r !== void 0 && (i.alpha = r), i;
}, Xr = (e, n, t) => 4 * e / (e + 15 * n + 3 * t), Or = (e, n, t) => 9 * n / (e + 15 * n + 3 * t), _a = Xr(T.X, T.Y, T.Z), Ta = Or(T.X, T.Y, T.Z), La = (e) => e <= Mn ? ft * e : 116 * Math.cbrt(e) - 16, rn = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = La(n / T.Y), a = Xr(e, n, t), o = Or(e, n, t);
  !isFinite(a) || !isFinite(o) ? i = a = o = 0 : (a = 13 * i * (a - _a), o = 13 * i * (o - Ta));
  let c = {
    mode: "luv",
    l: i,
    u: a,
    v: o
  };
  return r !== void 0 && (c.alpha = r), c;
}, Na = (e, n, t) => 4 * e / (e + 15 * n + 3 * t), Sa = (e, n, t) => 9 * n / (e + 15 * n + 3 * t), Aa = Na(T.X, T.Y, T.Z), Ha = Sa(T.X, T.Y, T.Z), an = ({ l: e, u: n, v: t, alpha: r }) => {
  if (e === void 0 && (e = 0), e === 0)
    return { mode: "xyz50", x: 0, y: 0, z: 0 };
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = n / (13 * e) + Aa, a = t / (13 * e) + Ha, o = T.Y * (e <= 8 ? e / ft : Math.pow((e + 16) / 116, 3)), c = o * (9 * i) / (4 * a), u = o * (12 - 3 * i - 20 * a) / (4 * a), f = { mode: "xyz50", x: c, y: o, z: u };
  return r !== void 0 && (f.alpha = r), f;
}, Ca = (e) => Rr(rn(Fe(e))), Ea = (e) => Re(an(Fr(e))), Pa = {
  mode: "lchuv",
  toMode: {
    luv: Fr,
    rgb: Ea
  },
  fromMode: {
    rgb: Ca,
    luv: Rr
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
    h: { use: h, fixup: G },
    c: h,
    l: h,
    alpha: { use: h, fixup: L }
  },
  difference: {
    h: st
  },
  average: {
    h: J
  }
}, Ia = {
  ...ge,
  mode: "lrgb",
  toMode: {
    rgb: ve
  },
  fromMode: {
    rgb: me
  },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, qa = {
  mode: "luv",
  toMode: {
    xyz50: an,
    rgb: (e) => Re(an(e))
  },
  fromMode: {
    xyz50: rn,
    rgb: (e) => rn(Fe(e))
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
    l: h,
    u: h,
    v: h,
    alpha: { use: h, fixup: L }
  }
}, Dr = ({ r: e, g: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.cbrt(
    0.412221469470763 * e + 0.5363325372617348 * n + 0.0514459932675022 * t
  ), a = Math.cbrt(
    0.2119034958178252 * e + 0.6806995506452344 * n + 0.1073969535369406 * t
  ), o = Math.cbrt(
    0.0883024591900564 * e + 0.2817188391361215 * n + 0.6299787016738222 * t
  ), c = {
    mode: "oklab",
    l: 0.210454268309314 * i + 0.7936177747023054 * a - 0.0040720430116193 * o,
    a: 1.9779985324311684 * i - 2.42859224204858 * a + 0.450593709617411 * o,
    b: 0.0259040424655478 * i + 0.7827717124575296 * a - 0.8086757549230774 * o
  };
  return r !== void 0 && (c.alpha = r), c;
}, bt = (e) => {
  let n = Dr(me(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, Xe = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.pow(e + 0.3963377773761749 * n + 0.2158037573099136 * t, 3), a = Math.pow(e - 0.1055613458156586 * n - 0.0638541728258133 * t, 3), o = Math.pow(e - 0.0894841775298119 * n - 1.2914855480194092 * t, 3), c = {
    mode: "lrgb",
    r: 4.076741636075957 * i - 3.3077115392580616 * a + 0.2309699031821044 * o,
    g: -1.2684379732850317 * i + 2.6097573492876887 * a - 0.3413193760026573 * o,
    b: -0.0041960761386756 * i - 0.7034186179359362 * a + 1.7076146940746117 * o
  };
  return r !== void 0 && (c.alpha = r), c;
}, gt = (e) => ve(Xe(e));
function on(e) {
  const r = 1.170873786407767;
  return 0.5 * (r * e - 0.206 + Math.sqrt((r * e - 0.206) * (r * e - 0.206) + 4 * 0.03 * r * e));
}
function rt(e) {
  return (e * e + 0.206 * e) / (1.170873786407767 * (e + 0.03));
}
function Ra(e, n) {
  let t, r, i, a, o, c, u, f;
  -1.88170328 * e - 0.80936493 * n > 1 ? (t = 1.19086277, r = 1.76576728, i = 0.59662641, a = 0.75515197, o = 0.56771245, c = 4.0767416621, u = -3.3077115913, f = 0.2309699292) : 1.81444104 * e - 1.19445276 * n > 1 ? (t = 0.73956515, r = -0.45954404, i = 0.08285427, a = 0.1254107, o = 0.14503204, c = -1.2684380046, u = 2.6097574011, f = -0.3413193965) : (t = 1.35733652, r = -915799e-8, i = -1.1513021, a = -0.50559606, o = 692167e-8, c = -0.0041960863, u = -0.7034186147, f = 1.707614701);
  let b = t + r * e + i * n + a * e * e + o * e * n, m = 0.3963377774 * e + 0.2158037573 * n, v = -0.1055613458 * e - 0.0638541728 * n, w = -0.0894841775 * e - 1.291485548 * n;
  {
    let _ = 1 + b * m, $ = 1 + b * v, N = 1 + b * w, C = _ * _ * _, H = $ * $ * $, V = N * N * N, ye = 3 * m * _ * _, Me = 3 * v * $ * $, we = 3 * w * N * N, ke = 6 * m * m * _, $e = 6 * v * v * $, ze = 6 * w * w * N, ce = c * C + u * H + f * V, ae = c * ye + u * Me + f * we, _e = c * ke + u * $e + f * ze;
    b = b - ce * ae / (ae * ae - 0.5 * ce * _e);
  }
  return b;
}
function _n(e, n) {
  let t = Ra(e, n), r = Xe({ l: 1, a: t * e, b: t * n }), i = Math.cbrt(1 / Math.max(r.r, r.g, r.b)), a = i * t;
  return [i, a];
}
function Fa(e, n, t, r, i, a = null) {
  a || (a = _n(e, n));
  let o;
  if ((t - i) * a[1] - (a[0] - i) * r <= 0)
    o = a[1] * i / (r * a[0] + a[1] * (i - t));
  else {
    o = a[1] * (i - 1) / (r * (a[0] - 1) + a[1] * (i - t));
    {
      let c = t - i, u = r, f = 0.3963377774 * e + 0.2158037573 * n, b = -0.1055613458 * e - 0.0638541728 * n, m = -0.0894841775 * e - 1.291485548 * n, v = c + u * f, w = c + u * b, _ = c + u * m;
      {
        let $ = i * (1 - o) + o * t, N = o * r, C = $ + N * f, H = $ + N * b, V = $ + N * m, ye = C * C * C, Me = H * H * H, we = V * V * V, ke = 3 * v * C * C, $e = 3 * w * H * H, ze = 3 * _ * V * V, ce = 6 * v * v * C, ae = 6 * w * w * H, _e = 6 * _ * _ * V, Sn = 4.0767416621 * ye - 3.3077115913 * Me + 0.2309699292 * we - 1, mt = 4.0767416621 * ke - 3.3077115913 * $e + 0.2309699292 * ze, Mi = 4.0767416621 * ce - 3.3077115913 * ae + 0.2309699292 * _e, An = mt / (mt * mt - 0.5 * Sn * Mi), vt = -Sn * An, Hn = -1.2684380046 * ye + 2.6097574011 * Me - 0.3413193965 * we - 1, xt = -1.2684380046 * ke + 2.6097574011 * $e - 0.3413193965 * ze, wi = -1.2684380046 * ce + 2.6097574011 * ae - 0.3413193965 * _e, Cn = xt / (xt * xt - 0.5 * Hn * wi), yt = -Hn * Cn, En = -0.0041960863 * ye - 0.7034186147 * Me + 1.707614701 * we - 1, Mt = -0.0041960863 * ke - 0.7034186147 * $e + 1.707614701 * ze, ki = -0.0041960863 * ce - 0.7034186147 * ae + 1.707614701 * _e, Pn = Mt / (Mt * Mt - 0.5 * En * ki), wt = -En * Pn;
        vt = An >= 0 ? vt : 1e6, yt = Cn >= 0 ? yt : 1e6, wt = Pn >= 0 ? wt : 1e6, o += Math.min(vt, Math.min(yt, wt));
      }
    }
  }
  return o;
}
function Tn(e, n, t = null) {
  t || (t = _n(e, n));
  let r = t[0], i = t[1];
  return [i / r, i / (1 - r)];
}
function jr(e, n, t) {
  let r = _n(n, t), i = Fa(n, t, e, 1, e, r), a = Tn(n, t, r), o = 0.11516993 + 1 / (7.4477897 + 4.1590124 * t + n * (-2.19557347 + 1.75198401 * t + n * (-2.13704948 - 10.02301043 * t + n * (-4.24894561 + 5.38770819 * t + 4.69891013 * n)))), c = 0.11239642 + 1 / (1.6132032 - 0.68124379 * t + n * (0.40370612 + 0.90148123 * t + n * (-0.27087943 + 0.6122399 * t + n * (299215e-8 - 0.45399568 * t - 0.14661872 * n)))), u = i / Math.min(e * a[0], (1 - e) * a[1]), f = e * o, b = (1 - e) * c, m = 0.9 * u * Math.sqrt(
    Math.sqrt(
      1 / (1 / (f * f * f * f) + 1 / (b * b * b * b))
    )
  );
  return f = e * 0.4, b = (1 - e) * 0.8, [Math.sqrt(1 / (1 / (f * f) + 1 / (b * b))), m, i];
}
function Wn(e) {
  const n = e.l !== void 0 ? e.l : 0, t = e.a !== void 0 ? e.a : 0, r = e.b !== void 0 ? e.b : 0, i = { mode: "okhsl", l: on(n) };
  e.alpha !== void 0 && (i.alpha = e.alpha);
  let a = Math.sqrt(t * t + r * r);
  if (!a)
    return i.s = 0, i;
  let [o, c, u] = jr(n, t / a, r / a), f;
  if (a < c) {
    let b = 0, m = 0.8 * o, v = 1 - m / c;
    f = (a - b) / (m + v * (a - b)) * 0.8;
  } else {
    let b = c, m = 0.2 * c * c * 1.25 * 1.25 / o, v = 1 - m / (u - c);
    f = 0.8 + 0.2 * ((a - b) / (m + v * (a - b)));
  }
  return f && (i.s = f, i.h = A(Math.atan2(r, t) * 180 / Math.PI)), i;
}
function Un(e) {
  let n = e.h !== void 0 ? e.h : 0, t = e.s !== void 0 ? e.s : 0, r = e.l !== void 0 ? e.l : 0;
  const i = { mode: "oklab", l: rt(r) };
  if (e.alpha !== void 0 && (i.alpha = e.alpha), !t || r === 1)
    return i.a = i.b = 0, i;
  let a = Math.cos(n / 180 * Math.PI), o = Math.sin(n / 180 * Math.PI), [c, u, f] = jr(i.l, a, o), b, m, v, w;
  t < 0.8 ? (b = 1.25 * t, m = 0, v = 0.8 * c, w = 1 - v / u) : (b = 5 * (t - 0.8), m = u, v = 0.2 * u * u * 1.25 * 1.25 / c, w = 1 - v / (f - u));
  let _ = m + b * v / (1 - w * b);
  return i.a = _ * a, i.b = _ * o, i;
}
const Xa = {
  ..._r,
  mode: "okhsl",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--okhsl"],
  serialize: "--okhsl",
  fromMode: {
    oklab: Wn,
    rgb: (e) => Wn(bt(e))
  },
  toMode: {
    oklab: Un,
    rgb: (e) => gt(Un(e))
  }
};
function Kn(e) {
  let n = e.l !== void 0 ? e.l : 0, t = e.a !== void 0 ? e.a : 0, r = e.b !== void 0 ? e.b : 0, i = Math.sqrt(t * t + r * r), a = i ? t / i : 1, o = i ? r / i : 1, [c, u] = Tn(a, o), f = 0.5, b = 1 - f / c, m = u / (i + n * u), v = m * n, w = m * i, _ = rt(v), $ = w * _ / v, N = Xe({ l: _, a: a * $, b: o * $ }), C = Math.cbrt(
    1 / Math.max(N.r, N.g, N.b, 0)
  );
  n = n / C, i = i / C * on(n) / n, n = on(n);
  const H = {
    mode: "okhsv",
    s: i ? (f + u) * w / (u * f + u * b * w) : 0,
    v: n ? n / v : 0
  };
  return H.s && (H.h = A(Math.atan2(r, t) * 180 / Math.PI)), e.alpha !== void 0 && (H.alpha = e.alpha), H;
}
function Qn(e) {
  const n = { mode: "oklab" };
  e.alpha !== void 0 && (n.alpha = e.alpha);
  const t = e.h !== void 0 ? e.h : 0, r = e.s !== void 0 ? e.s : 0, i = e.v !== void 0 ? e.v : 0, a = Math.cos(t / 180 * Math.PI), o = Math.sin(t / 180 * Math.PI), [c, u] = Tn(a, o), f = 0.5, b = 1 - f / c, m = 1 - r * f / (f + u - u * b * r), v = r * u * f / (f + u - u * b * r), w = rt(m), _ = v * w / m, $ = Xe({
    l: w,
    a: a * _,
    b: o * _
  }), N = Math.cbrt(
    1 / Math.max($.r, $.g, $.b, 0)
  ), C = rt(i * m), H = v * C / m;
  return n.l = C * N, n.a = H * a * N, n.b = H * o * N, n;
}
const Oa = {
  ...Nr,
  mode: "okhsv",
  channels: ["h", "s", "v", "alpha"],
  parse: ["--okhsv"],
  serialize: "--okhsv",
  fromMode: {
    oklab: Kn,
    rgb: (e) => Kn(bt(e))
  },
  toMode: {
    oklab: Qn,
    rgb: (e) => gt(Qn(e))
  }
};
function Da(e, n) {
  if (!n || n[0] !== "oklab")
    return;
  const t = { mode: "oklab" }, [, r, i, a, o] = n;
  if (!(r.type === p.Hue || i.type === p.Hue || a.type === p.Hue))
    return r.type !== p.None && (t.l = Math.min(
      Math.max(0, r.type === p.Number ? r.value : r.value / 100),
      1
    )), i.type !== p.None && (t.a = i.type === p.Number ? i.value : i.value * 0.4 / 100), a.type !== p.None && (t.b = a.type === p.Number ? a.value : a.value * 0.4 / 100), o.type !== p.None && (t.alpha = Math.min(
      1,
      Math.max(
        0,
        o.type === p.Number ? o.value : o.value / 100
      )
    )), t;
}
const ja = {
  ...$n,
  mode: "oklab",
  toMode: {
    lrgb: Xe,
    rgb: gt
  },
  fromMode: {
    lrgb: Dr,
    rgb: bt
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [Da],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function Za(e, n) {
  if (!n || n[0] !== "oklch")
    return;
  const t = { mode: "oklch" }, [, r, i, a, o] = n;
  if (r.type !== p.None) {
    if (r.type === p.Hue)
      return;
    t.l = Math.min(
      Math.max(0, r.type === p.Number ? r.value : r.value / 100),
      1
    );
  }
  if (i.type !== p.None && (t.c = Math.max(
    0,
    i.type === p.Number ? i.value : i.value * 0.4 / 100
  )), a.type !== p.None) {
    if (a.type === p.Percentage)
      return;
    t.h = a.value;
  }
  return o.type !== p.None && (t.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === p.Number ? o.value : o.value / 100
    )
  )), t;
}
const Ya = {
  ...zn,
  mode: "oklch",
  toMode: {
    oklab: (e) => ie(e, "oklab"),
    rgb: (e) => gt(ie(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => re(bt(e), "oklch"),
    oklab: (e) => re(e, "oklch")
  },
  parse: [Za],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, er = (e) => {
  let { r: n, g: t, b: r, alpha: i } = me(e), a = {
    mode: "xyz65",
    x: 0.486570948648216 * n + 0.265667693169093 * t + 0.1982172852343625 * r,
    y: 0.2289745640697487 * n + 0.6917385218365062 * t + 0.079286914093745 * r,
    z: 0 * n + 0.0451133818589026 * t + 1.043944368900976 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, tr = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = ve(
    {
      r: e * 2.4934969119414263 - n * 0.9313836179191242 - 0.402710784450717 * t,
      g: e * -0.8294889695615749 + n * 1.7626640603183465 + 0.0236246858419436 * t,
      b: e * 0.0358458302437845 - n * 0.0761723892680418 + 0.9568845240076871 * t
    },
    "p3"
  );
  return r !== void 0 && (i.alpha = r), i;
}, Ba = {
  ...ge,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => tr(se(e)),
    xyz65: tr
  },
  toMode: {
    rgb: (e) => le(er(e)),
    xyz65: er
  }
}, Xt = (e) => {
  let n = Math.abs(e);
  return n >= 1 / 512 ? Math.sign(e) * Math.pow(n, 1 / 1.8) : 16 * e;
}, nr = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "prophoto",
    r: Xt(
      e * 1.3457868816471585 - n * 0.2555720873797946 - 0.0511018649755453 * t
    ),
    g: Xt(
      e * -0.5446307051249019 + n * 1.5082477428451466 + 0.0205274474364214 * t
    ),
    b: Xt(e * 0 + n * 0 + 1.2119675456389452 * t)
  };
  return r !== void 0 && (i.alpha = r), i;
}, Ot = (e = 0) => {
  let n = Math.abs(e);
  return n >= 16 / 512 ? Math.sign(e) * Math.pow(n, 1.8) : e / 16;
}, rr = (e) => {
  let n = Ot(e.r), t = Ot(e.g), r = Ot(e.b), i = {
    mode: "xyz50",
    x: 0.7977666449006423 * n + 0.1351812974005331 * t + 0.0313477341283922 * r,
    y: 0.2880748288194013 * n + 0.7118352342418731 * t + 899369387256e-16 * r,
    z: 0 * n + 0 * t + 0.8251046025104602 * r
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Ga = {
  ...ge,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: nr,
    rgb: (e) => nr(Fe(e))
  },
  toMode: {
    xyz50: rr,
    rgb: (e) => Re(rr(e))
  }
}, ir = 1.09929682680944, Ja = 0.018053968510807, Dt = (e) => {
  const n = Math.abs(e);
  return n > Ja ? (Math.sign(e) || 1) * (ir * Math.pow(n, 0.45) - (ir - 1)) : 4.5 * e;
}, ar = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "rec2020",
    r: Dt(
      e * 1.7166511879712683 - n * 0.3556707837763925 - 0.2533662813736599 * t
    ),
    g: Dt(
      e * -0.6666843518324893 + n * 1.6164812366349395 + 0.0157685458139111 * t
    ),
    b: Dt(
      e * 0.0176398574453108 - n * 0.0427706132578085 + 0.9421031212354739 * t
    )
  };
  return r !== void 0 && (i.alpha = r), i;
}, or = 1.09929682680944, Va = 0.018053968510807, jt = (e = 0) => {
  let n = Math.abs(e);
  return n < Va * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((n + or - 1) / or, 1 / 0.45);
}, sr = (e) => {
  let n = jt(e.r), t = jt(e.g), r = jt(e.b), i = {
    mode: "xyz65",
    x: 0.6369580483012911 * n + 0.1446169035862083 * t + 0.1688809751641721 * r,
    y: 0.262700212011267 * n + 0.6779980715188708 * t + 0.059301716469862 * r,
    z: 0 * n + 0.0280726930490874 * t + 1.0609850577107909 * r
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Wa = {
  ...ge,
  mode: "rec2020",
  fromMode: {
    xyz65: ar,
    rgb: (e) => ar(se(e))
  },
  toMode: {
    xyz65: sr,
    rgb: (e) => le(sr(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, oe = 0.0037930732552754493, Zr = Math.cbrt(oe), Zt = (e) => Math.cbrt(e) - Zr, Ua = (e) => {
  const { r: n, g: t, b: r, alpha: i } = me(e), a = Zt(0.3 * n + 0.622 * t + 0.078 * r + oe), o = Zt(0.23 * n + 0.692 * t + 0.078 * r + oe), c = Zt(
    0.2434226892454782 * n + 0.2047674442449682 * t + 0.5518098665095535 * r + oe
  ), u = {
    mode: "xyb",
    x: (a - o) / 2,
    y: (a + o) / 2,
    /* Apply default chroma from luma (subtract Y from B) */
    b: c - (a + o) / 2
  };
  return i !== void 0 && (u.alpha = i), u;
}, Yt = (e) => Math.pow(e + Zr, 3), Ka = ({ x: e, y: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = Yt(e + n) - oe, a = Yt(n - e) - oe, o = Yt(t + n) - oe, c = ve({
    r: 11.031566904639861 * i - 9.866943908131562 * a - 0.16462299650829934 * o,
    g: -3.2541473810744237 * i + 4.418770377582723 * a - 0.16462299650829934 * o,
    b: -3.6588512867136815 * i + 2.7129230459360922 * a + 1.9459282407775895 * o
  });
  return r !== void 0 && (c.alpha = r), c;
}, Qa = {
  mode: "xyb",
  channels: ["x", "y", "b", "alpha"],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: {
    rgb: Ka
  },
  fromMode: {
    rgb: Ua
  },
  ranges: {
    x: [-0.0154, 0.0281],
    y: [0, 0.8453],
    b: [-0.2778, 0.388]
  },
  interpolate: {
    x: h,
    y: h,
    b: h,
    alpha: { use: h, fixup: L }
  }
}, e0 = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: Re,
    lab: kn
  },
  fromMode: {
    rgb: Fe,
    lab: wn
  },
  channels: ["x", "y", "z", "alpha"],
  ranges: {
    x: [0, 0.964],
    y: [0, 0.999],
    z: [0, 0.825]
  },
  interpolate: {
    x: h,
    y: h,
    z: h,
    alpha: { use: h, fixup: L }
  }
}, t0 = (e) => {
  let { x: n, y: t, z: r, alpha: i } = e;
  n === void 0 && (n = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = {
    mode: "xyz50",
    x: 1.0479298208405488 * n + 0.0229467933410191 * t - 0.0501922295431356 * r,
    y: 0.0296278156881593 * n + 0.990434484573249 * t - 0.0170738250293851 * r,
    z: -0.0092430581525912 * n + 0.0150551448965779 * t + 0.7518742899580008 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, n0 = (e) => {
  let { x: n, y: t, z: r, alpha: i } = e;
  n === void 0 && (n = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = {
    mode: "xyz65",
    x: 0.9554734527042182 * n - 0.0230985368742614 * t + 0.0632593086610217 * r,
    y: -0.0283697069632081 * n + 1.0099954580058226 * t + 0.021041398966943 * r,
    z: 0.0123140016883199 * n - 0.0205076964334779 * t + 1.3303659366080753 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, r0 = {
  mode: "xyz65",
  toMode: {
    rgb: le,
    xyz50: t0
  },
  fromMode: {
    rgb: se,
    xyz50: n0
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
    x: h,
    y: h,
    z: h,
    alpha: { use: h, fixup: L }
  }
}, i0 = ({ r: e, g: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * n + 0.11448223 * t,
    i: 0.59597799 * e - 0.2741761 * n - 0.32180189 * t,
    q: 0.21147017 * e - 0.52261711 * n + 0.31114694 * t
  };
  return r !== void 0 && (i.alpha = r), i;
}, a0 = ({ y: e, i: n, q: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = {
    mode: "rgb",
    r: e + 0.95608445 * n + 0.6208885 * t,
    g: e - 0.27137664 * n - 0.6486059 * t,
    b: e - 1.10561724 * n + 1.70250126 * t
  };
  return r !== void 0 && (i.alpha = r), i;
}, o0 = {
  mode: "yiq",
  toMode: {
    rgb: a0
  },
  fromMode: {
    rgb: i0
  },
  channels: ["y", "i", "q", "alpha"],
  parse: ["--yiq"],
  serialize: "--yiq",
  ranges: {
    i: [-0.595, 0.595],
    q: [-0.522, 0.522]
  },
  interpolate: {
    y: h,
    i: h,
    q: h,
    alpha: { use: h, fixup: L }
  }
}, s0 = (e) => Math.max(0, Math.min(1, e || 0)), Bt = (e) => Math.round(s0(e) * 255), l0 = R("rgb"), c0 = (e) => {
  if (e === void 0)
    return;
  let n = Bt(e.r), t = Bt(e.g), r = Bt(e.b);
  return "#" + (1 << 24 | n << 16 | t << 8 | r).toString(16).slice(1);
}, d0 = (e) => c0(l0(e)), Yr = R("rgb"), Br = (e) => {
  const n = {
    mode: e.mode,
    r: Math.max(0, Math.min(e.r !== void 0 ? e.r : 0, 1)),
    g: Math.max(0, Math.min(e.g !== void 0 ? e.g : 0, 1)),
    b: Math.max(0, Math.min(e.b !== void 0 ? e.b : 0, 1))
  };
  return e.alpha !== void 0 && (n.alpha = e.alpha), n;
}, p0 = (e) => Br(Yr(e)), Gr = (e) => e !== void 0 && (e.r === void 0 || e.r >= 0 && e.r <= 1) && (e.g === void 0 || e.g >= 0 && e.g <= 1) && (e.b === void 0 || e.b >= 0 && e.b <= 1);
function u0(e) {
  return Gr(Yr(e));
}
function Jr(e = "rgb") {
  const { gamut: n } = at(e);
  if (!n)
    return (r) => !0;
  const t = R(typeof n == "string" ? n : e);
  return (r) => Gr(t(r));
}
function h0(e = "rgb") {
  const { gamut: n } = at(e);
  if (!n)
    return (a) => Ue(a);
  const t = typeof n == "string" ? n : e, r = R(t), i = Jr(t);
  return (a) => {
    const o = Ue(a);
    if (!o)
      return;
    const c = r(o);
    if (i(c))
      return o;
    const u = Br(c);
    return o.mode === u.mode ? u : R(o.mode)(u);
  };
}
function f0(e, n = "lch", t = "rgb") {
  e = Ue(e);
  let r = t === "rgb" ? u0 : Jr(t), i = t === "rgb" ? p0 : h0(t);
  if (e === void 0 || r(e)) return e;
  let a = R(e.mode);
  e = R(n)(e);
  let o = { ...e, c: 0 };
  if (!r(o))
    return a(i(o));
  let c = 0, u = e.c !== void 0 ? e.c : 0, f = at(n).ranges.c, b = (f[1] - f[0]) / Math.pow(2, 13), m = o.c;
  for (; u - c > b; )
    o.c = c + (u - c) * 0.5, r(o) ? (m = o.c, c = o.c) : u = o.c;
  return a(
    r(o) ? o : { ...o, c: m }
  );
}
y(Gi);
y(ea);
y(ta);
y(na);
y(aa);
y(_r);
y(Nr);
y(ba);
y(ga);
y(ya);
y(Ma);
y($n);
y(ka);
y(zn);
y(za);
y(Pa);
y(Ia);
y(qa);
y(Xa);
y(Oa);
y(ja);
const Ln = y(Ya);
y(Ba);
y(Ga);
y(Wa);
y(ge);
y(Qa);
y(e0);
y(r0);
y(o0);
const b0 = R("rgb");
function g0(e, n) {
  const t = e.getContext("2d", { willReadFrequently: !0 });
  if (!t) return;
  const { width: r, height: i } = e, a = t.createImageData(r, i), o = a.data;
  for (let c = 0; c < i; c++) {
    const u = 1 - c / (i - 1 || 1);
    for (let f = 0; f < r; f++) {
      const b = f / (r - 1 || 1), m = b0({ mode: "hsv", h: n, s: b, v: u, alpha: 1 }), v = (c * r + f) * 4;
      if (!m) {
        o[v] = o[v + 1] = o[v + 2] = 0, o[v + 3] = 255;
        continue;
      }
      o[v] = Math.round(Gt((m.r ?? 0) * 255)), o[v + 1] = Math.round(Gt((m.g ?? 0) * 255)), o[v + 2] = Math.round(Gt((m.b ?? 0) * 255)), o[v + 3] = 255;
    }
  }
  t.putImageData(a, 0, 0);
}
function Gt(e) {
  return Math.min(255, Math.max(0, e));
}
const xe = R("rgb"), Nn = R("hsv"), m0 = R("hsl");
function F(e) {
  const n = Ce(e.l ?? 0), t = Math.max(0, e.c ?? 0), r = M0(e.h ?? 0), i = Ce(e.alpha ?? 1), a = f0({ mode: "oklch", l: n, c: t, h: r, alpha: i }, "rgb");
  return {
    l: a.l ?? n,
    c: a.c ?? 0,
    h: a.h ?? r,
    alpha: a.alpha ?? i
  };
}
function pe(e) {
  const n = xr(e.trim());
  if (!n) return null;
  const t = Ln(n);
  return (t == null ? void 0 : t.l) == null ? null : F({
    l: t.l,
    c: t.c ?? 0,
    h: t.h ?? 0,
    alpha: t.alpha ?? 1
  });
}
function lr(e) {
  const { l: n, c: t, h: r, alpha: i } = e;
  return i >= 1 ? `oklch(${(n * 100).toFixed(1)}% ${t.toFixed(4)} ${r.toFixed(1)})` : `oklch(${(n * 100).toFixed(1)}% ${t.toFixed(4)} ${r.toFixed(1)} / ${Math.round(i * 100)}%)`;
}
function He(e) {
  return d0(xe({ mode: "oklch", ...e })) ?? "#000000";
}
function F0(e) {
  const { r: n, g: t, b: r } = it(e);
  return e.alpha < 1 ? `rgba(${n}, ${t}, ${r}, ${e.alpha.toFixed(2)})` : `rgb(${n}, ${t}, ${r})`;
}
function it(e) {
  const n = xe({ mode: "oklch", ...e, alpha: 1 });
  return n ? {
    r: Math.round((n.r ?? 0) * 255),
    g: Math.round((n.g ?? 0) * 255),
    b: Math.round((n.b ?? 0) * 255)
  } : { r: 0, g: 0, b: 0 };
}
function v0(e) {
  const n = Math.max(0, Math.min(1, e)) * 360, t = xe({ mode: "hsv", h: n, s: 1, v: 1, alpha: 1 });
  return t ? {
    r: Math.round((t.r ?? 0) * 255),
    g: Math.round((t.g ?? 0) * 255),
    b: Math.round((t.b ?? 0) * 255)
  } : { r: 0, g: 0, b: 0 };
}
function x0(e) {
  const { r: n, g: t, b: r } = it(e);
  return `linear-gradient(to right, rgba(${n}, ${t}, ${r}, 0), rgb(${n}, ${t}, ${r}))`;
}
function Jt(e) {
  const n = Nn({ mode: "oklch", ...e, alpha: 1 });
  return (n == null ? void 0 : n.h) ?? e.h;
}
function y0(e, n) {
  const t = Nn({ mode: "oklch", ...e, alpha: 1 }), r = Ln(xe({ mode: "hsv", h: n, s: (t == null ? void 0 : t.s) ?? 0, v: (t == null ? void 0 : t.v) ?? 1, alpha: 1 }) ?? { mode: "hsv", h: n, s: (t == null ? void 0 : t.s) ?? 0, v: (t == null ? void 0 : t.v) ?? 1 });
  return (r == null ? void 0 : r.l) == null ? F({ ...e, h: n }) : F({
    l: r.l,
    c: r.c ?? 0,
    h: r.h ?? n,
    alpha: e.alpha
  });
}
function je(e, n) {
  switch (n) {
    case "hex":
      return [{ key: "hex", label: "HEX CODE", value: He(e).replace("#", "").toUpperCase() }];
    case "rgb": {
      const t = xe({ mode: "oklch", ...e });
      return [
        { key: "r", label: "R", value: String(Math.round((t.r ?? 0) * 255)), min: 0, max: 255 },
        { key: "g", label: "G", value: String(Math.round((t.g ?? 0) * 255)), min: 0, max: 255 },
        { key: "b", label: "B", value: String(Math.round((t.b ?? 0) * 255)), min: 0, max: 255 }
      ];
    }
    case "hsl": {
      const t = m0({ mode: "oklch", ...e });
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
function cr(e, n, t) {
  switch (e) {
    case "hex": {
      const r = (n.hex ?? "").trim().replace(/^#/, "");
      if (!/^[0-9a-fA-F]{3,8}$/.test(r)) return null;
      const i = pe(`#${r}`);
      return i ? Vt(i, t.alpha) : null;
    }
    case "rgb": {
      const r = Number(n.r), i = Number(n.g), a = Number(n.b);
      if ([r, i, a].some((c) => Number.isNaN(c))) return null;
      const o = pe(`rgb(${Wt(r)}, ${Wt(i)}, ${Wt(a)})`);
      return o ? Vt(o, t.alpha) : null;
    }
    case "hsl": {
      const r = Ut(n.h), i = Ut(n.s), a = Ut(n.l);
      if ([r, i, a].some((c) => Number.isNaN(c))) return null;
      const o = pe(`hsl(${r}, ${dr(i)}%, ${dr(a)}%)`);
      return o ? Vt(o, t.alpha) : null;
    }
    case "oklch": {
      const r = Number(n.l), i = Number(n.c), a = Number(n.h);
      return [r, i, a].some((o) => Number.isNaN(o)) ? null : F({ l: r / 100, c: i, h: a, alpha: t.alpha });
    }
  }
}
function Vt(e, n) {
  return { ...e, alpha: Ce(n) };
}
function Ce(e) {
  return Math.min(1, Math.max(0, e));
}
function Wt(e) {
  return Math.min(255, Math.max(0, Math.round(e)));
}
function dr(e) {
  return Math.min(100, Math.max(0, e));
}
function Ut(e) {
  return Number(e.replace(/%/g, "").trim());
}
function M0(e) {
  const n = e % 360;
  return n < 0 ? n + 360 : n;
}
function w0(e) {
  const n = Nn({ mode: "oklch", ...e, alpha: 1 });
  return { x: (n == null ? void 0 : n.s) ?? 0, y: 1 - ((n == null ? void 0 : n.v) ?? 0) };
}
function k0(e, n, t, r) {
  const i = Ce(e), a = Ce(n), o = Ln(
    xe({ mode: "hsv", h: t, s: i, v: 1 - a, alpha: 1 }) ?? {
      mode: "hsv",
      h: t,
      s: i,
      v: 1 - a
    }
  );
  return (o == null ? void 0 : o.l) != null ? F({
    l: o.l,
    c: o.c ?? 0,
    h: o.h ?? t,
    alpha: r
  }) : F({ l: 0.5, c: 0, h: t, alpha: r });
}
const $0 = {
  l: 0.62,
  c: 0.24,
  h: 303,
  alpha: 0.8
}, Vr = "pretty-color-picker-history", Wr = 16;
function Ur(e, n) {
  return He(e) === He(n) && e.alpha === n.alpha;
}
function z0() {
  try {
    const e = localStorage.getItem(Vr);
    if (!e) return [];
    const n = JSON.parse(e);
    return Array.isArray(n) ? n.slice(0, Wr) : [];
  } catch {
    return [];
  }
}
function _0(e, n) {
  const t = n.filter((i) => !Ur(i, e)), r = [e, ...t].slice(0, Wr);
  try {
    localStorage.setItem(Vr, JSON.stringify(r));
  } catch {
  }
  return r;
}
const T0 = "#ededed", L0 = "#171717", N0 = 0.52;
function S0(e, n, t) {
  const r = [e, n, t].map((i) => {
    const a = i / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2];
}
function A0(e, n, t) {
  return S0(e, n, t) > N0 ? L0 : T0;
}
function pr(e) {
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
function H0(e, n, t, r) {
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
function ur(e, n) {
  const t = n.getBoundingClientRect(), r = fr((e.clientX - t.left) / t.width), i = fr((e.clientY - t.top) / t.height);
  return { x: r, y: i };
}
function hr(e, n) {
  let t = !1;
  const r = (o) => {
    !t || o.movementX === 0 || n.onDelta(o.movementX, o);
  }, i = (o) => {
    var c;
    if (t) {
      if (t = !1, o.pointerId != null)
        try {
          e.releasePointerCapture(o.pointerId);
        } catch {
        }
      window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", i), window.removeEventListener("pointercancel", i), (c = n.onEnd) == null || c.call(n, o);
    }
  }, a = (o) => {
    var c;
    o.button === 0 && (o.preventDefault(), t = !0, e.setPointerCapture(o.pointerId), (c = n.onStart) == null || c.call(n, o), window.addEventListener("pointermove", r), window.addEventListener("pointerup", i), window.addEventListener("pointercancel", i));
  };
  return e.addEventListener("pointerdown", a), () => {
    e.removeEventListener("pointerdown", a), window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", i), window.removeEventListener("pointercancel", i);
  };
}
function Kt(e, n, t, r) {
  let i = !1;
  const a = (u) => {
    if (!i) return;
    const { x: f, y: b } = ur(u, e);
    n(f, b);
  }, o = (u) => {
    if (i) {
      if (i = !1, (u == null ? void 0 : u.pointerId) != null)
        try {
          e.releasePointerCapture(u.pointerId);
        } catch {
        }
      window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", o), t == null || t();
    }
  }, c = (u) => {
    if (u.button !== 0) return;
    i = !0, e.setPointerCapture(u.pointerId), r == null || r();
    const { x: f, y: b } = ur(u, e);
    n(f, b), window.addEventListener("pointermove", a), window.addEventListener("pointerup", o), window.addEventListener("pointercancel", o);
  };
  return e.addEventListener("pointerdown", c), () => {
    e.removeEventListener("pointerdown", c), window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", o);
  };
}
function fr(e) {
  return Math.min(1, Math.max(0, e));
}
const Ze = 48;
function C0(e, n) {
  const t = (r) => {
    if (r.button !== 0 || r.target.closest(".pcp-header-btn")) return;
    r.preventDefault();
    const a = n.getBoundingClientRect(), o = r.clientX - a.left, c = r.clientY - a.top;
    e.dataset.dragging = "true", e.setPointerCapture(r.pointerId);
    const u = (b) => {
      Kr(n, b.clientX - o, b.clientY - c);
    }, f = (b) => {
      e.removeAttribute("data-dragging");
      try {
        e.releasePointerCapture(b.pointerId);
      } catch {
      }
      window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f);
    };
    window.addEventListener("pointermove", u), window.addEventListener("pointerup", f), window.addEventListener("pointercancel", f);
  };
  return e.addEventListener("pointerdown", t), () => {
    e.removeEventListener("pointerdown", t), e.removeAttribute("data-dragging");
  };
}
function E0(e) {
  const n = e.offsetWidth, t = e.offsetHeight;
  Kr(
    e,
    (window.innerWidth - n) / 2,
    (window.innerHeight - t) / 2
  );
}
function Kr(e, n, t) {
  const r = e.offsetWidth, i = e.offsetHeight, a = window.innerWidth - Ze, o = window.innerHeight - Ze, c = Ze - r, u = Ze - i;
  e.style.left = `${Math.min(a, Math.max(c, n))}px`, e.style.top = `${Math.min(o, Math.max(u, t))}px`;
}
const P0 = ["hex", "rgb", "hsl", "oklch"], I0 = {
  hex: "HEX",
  rgb: "RGB",
  hsl: "HSL",
  oklch: "OKLCH"
};
var z, x, E, K, ue, P, Ee, Pe, Q, j, I, Z, Ie, q, he, Y, qe, X, ee, fe, te, B, s, Qr, ei, ti, sn, ln, W, cn, ni, Ye, dn, ri, ii, pn, ai, Be, Le, oi, si, li, ci, un, hn, di, pi, ui, hi, fi, bi, gi, D, Ne, fn, bn, Ge, gn, mn, mi, vi, vn, xi, Je, Ve, xn, We, U, yi;
class q0 extends HTMLElement {
  constructor() {
    super();
    k(this, s);
    k(this, z);
    k(this, x, { ...$0 });
    k(this, E, "hsl");
    k(this, K, z0());
    k(this, ue, null);
    k(this, P, []);
    k(this, Ee);
    k(this, Pe);
    k(this, Q);
    k(this, j);
    k(this, I);
    k(this, Z);
    k(this, Ie);
    k(this, q);
    k(this, he);
    k(this, Y);
    k(this, qe);
    k(this, X);
    k(this, ee);
    k(this, fe);
    k(this, te, null);
    k(this, B, null);
    M(this, z, this.attachShadow({ mode: "open" }));
  }
  static get observedAttributes() {
    return ["value", "theme", "header-action", "movable", "history"];
  }
  connectedCallback() {
    d(this, s, ei).call(this), d(this, s, ti).call(this), d(this, s, Qr).call(this), d(this, s, Ne).call(this);
  }
  disconnectedCallback() {
    l(this, P).forEach((t) => t()), M(this, P, []);
  }
  attributeChangedCallback(t, r, i) {
    if (this.isConnected) {
      if (t === "value" && i != null) {
        const a = pe(i);
        a && (M(this, x, a), d(this, s, Ne).call(this, !1));
        return;
      }
      t === "theme" && d(this, s, Ye).call(this), t === "movable" && d(this, s, ln).call(this), t === "history" && d(this, s, sn).call(this);
    }
  }
  get value() {
    return lr(l(this, x));
  }
  set value(t) {
    const r = pe(t);
    r && (M(this, x, r), d(this, s, Ne).call(this));
  }
  get color() {
    return { ...l(this, x) };
  }
  set color(t) {
    M(this, x, F(t)), d(this, s, Ne).call(this);
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
  /** Last Used swatch grid — on by default; set `history="false"` to hide. */
  get history() {
    const t = this.getAttribute("history");
    return t === null ? !0 : t !== "false" && t !== "0";
  }
  set history(t) {
    t ? this.removeAttribute("history") : this.setAttribute("history", "false");
  }
}
z = new WeakMap(), x = new WeakMap(), E = new WeakMap(), K = new WeakMap(), ue = new WeakMap(), P = new WeakMap(), Ee = new WeakMap(), Pe = new WeakMap(), Q = new WeakMap(), j = new WeakMap(), I = new WeakMap(), Z = new WeakMap(), Ie = new WeakMap(), q = new WeakMap(), he = new WeakMap(), Y = new WeakMap(), qe = new WeakMap(), X = new WeakMap(), ee = new WeakMap(), fe = new WeakMap(), te = new WeakMap(), B = new WeakMap(), s = new WeakSet(), Qr = function() {
  const t = this.getAttribute("value");
  if (t) {
    const r = pe(t);
    r && M(this, x, r);
  }
}, ei = function() {
  const t = this.headerAction === "theme" ? `<button type="button" class="pcp-header-btn pcp-theme-toggle" aria-label="Switch to light mode">${qn}</button>` : `<button type="button" class="pcp-header-btn pcp-close" aria-label="Close">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M4.25 4.25L11.75 11.75M11.75 4.25L4.25 11.75"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>`;
  l(this, z).innerHTML = `
      <style>${zi}</style>
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
          ${P0.map((r) => `<button type="button" class="pcp-tab" role="tab" data-format="${r}">${I0[r]}</button>`).join("")}
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
    `, M(this, Ee, l(this, z).querySelector(".pcp-plane")), M(this, Pe, l(this, z).querySelector(".pcp-plane-wrap")), M(this, Q, l(this, z).querySelector(".pcp-cursor")), M(this, j, l(this, z).querySelector(".pcp-hue-row")), M(this, I, l(this, j).querySelector(".pcp-slider-handle")), M(this, Z, l(this, z).querySelector(".pcp-alpha-row")), M(this, Ie, l(this, z).querySelector(".pcp-slider-fill-alpha")), M(this, q, l(this, Z).querySelector(".pcp-slider-handle")), M(this, he, l(this, z).querySelector(".pcp-tabs-pill")), M(this, Y, l(this, z).querySelector(".pcp-fields")), M(this, qe, l(this, z).querySelector(".pcp-swatch-fill")), M(this, X, l(this, z).querySelector(".pcp-alpha-input")), M(this, fe, l(this, z).querySelector(".pcp-history-section")), M(this, ee, l(this, z).querySelector(".pcp-history")), M(this, te, l(this, z).querySelector(".pcp-theme-toggle")), d(this, s, Ye).call(this);
}, ti = function() {
  var r;
  const t = l(this, z).querySelector(".pcp-close");
  t == null || t.addEventListener("click", () => {
    this.dispatchEvent(new CustomEvent("close", { bubbles: !0, composed: !0 }));
  }), (r = l(this, te)) == null || r.addEventListener("click", () => d(this, s, ni).call(this)), l(this, P).push(
    Kt(
      l(this, Pe),
      (i, a) => d(this, s, oi).call(this, i, a),
      () => d(this, s, U).call(this),
      () => d(this, s, W).call(this)
    )
  ), l(this, P).push(
    Kt(
      l(this, j),
      (i) => d(this, s, si).call(this, i),
      () => d(this, s, U).call(this),
      () => d(this, s, W).call(this)
    )
  ), l(this, P).push(
    Kt(
      l(this, Z),
      (i) => d(this, s, li).call(this, i),
      () => d(this, s, U).call(this),
      () => d(this, s, W).call(this)
    )
  ), l(this, P).push(d(this, s, dn).call(this, l(this, j))), l(this, P).push(d(this, s, dn).call(this, l(this, Z))), l(this, z).querySelectorAll(".pcp-tab").forEach((i) => {
    i.addEventListener("click", () => {
      const a = i.dataset.format;
      a && a !== l(this, E) && (M(this, E, a), d(this, s, Ge).call(this), d(this, s, xn).call(this), d(this, s, Ve).call(this), d(this, s, gn).call(this));
    });
  }), l(this, X).addEventListener("focus", () => d(this, s, W).call(this)), l(this, X).addEventListener("change", () => d(this, s, un).call(this)), l(this, X).addEventListener("keydown", (i) => {
    i.key === "Enter" && d(this, s, un).call(this);
  }), l(this, P).push(d(this, s, bi).call(this)), d(this, s, ln).call(this), d(this, s, sn).call(this);
}, sn = function() {
  this.history ? (l(this, fe).hidden = !1, d(this, s, We).call(this)) : (l(this, fe).hidden = !0, l(this, ee).innerHTML = "");
}, ln = function() {
  if (l(this, B)) {
    const r = l(this, P).indexOf(l(this, B));
    r >= 0 && l(this, P).splice(r, 1), l(this, B).call(this), M(this, B, null);
  }
  if (!this.movable) {
    this.style.position = "", this.style.left = "", this.style.top = "", this.style.zIndex = "", this.removeAttribute("data-positioned");
    return;
  }
  this.hasAttribute("data-positioned") || requestAnimationFrame(() => {
    E0(this), this.setAttribute("data-positioned", "");
  });
  const t = l(this, z).querySelector(".pcp-header");
  t && (M(this, B, C0(t, this)), l(this, P).push(l(this, B)));
}, W = function() {
  M(this, ue, { ...l(this, x) });
}, cn = function() {
  return this.theme === "light" ? "light" : this.theme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}, ni = function() {
  const t = d(this, s, cn).call(this) === "light" ? "dark" : "light";
  this.theme = t, d(this, s, Ye).call(this);
  const r = { theme: t };
  this.dispatchEvent(
    new CustomEvent("themechange", {
      detail: r,
      bubbles: !0,
      composed: !0
    })
  );
}, Ye = function() {
  if (!l(this, te)) return;
  const t = d(this, s, cn).call(this) === "light";
  l(this, te).innerHTML = t ? $i : qn, l(this, te).setAttribute(
    "aria-label",
    t ? "Switch to dark mode" : "Switch to light mode"
  );
}, dn = function(t) {
  const r = () => {
    t.dataset.active = "true";
  }, i = () => {
    const a = t.querySelector(".pcp-slider-handle");
    a != null && a.hasAttribute("data-dragging") || delete t.dataset.active;
  };
  return t.addEventListener("pointerenter", r), t.addEventListener("pointerleave", i), () => {
    t.removeEventListener("pointerenter", r), t.removeEventListener("pointerleave", i);
  };
}, ri = function(t, r) {
  const i = Math.max(0, Math.min(1, r)) * 100;
  t.style.left = `max(1px, calc(${i}% - 1.5px))`;
}, ii = function() {
  const t = getComputedStyle(this), r = pr(t.getPropertyValue("--pcp-checker-base").trim()) ?? { r: 255, g: 255, b: 255 }, i = pr(t.getPropertyValue("--pcp-checker-tone").trim()) ?? { r: 204, g: 204, b: 204 };
  return { base: r, tone: i };
}, pn = function(t, r) {
  const i = t.style.left.match(/calc\(([\d.]+)%/);
  return i ? parseFloat(i[1]) / 100 : r;
}, ai = function(t, r) {
  if (r === "hue") return v0(t);
  const { base: i, tone: a } = d(this, s, ii).call(this);
  return H0(it(l(this, x)), t, i, a);
}, Be = function(t, r, i) {
  const a = d(this, s, ai).call(this, r, i);
  t.style.background = A0(a.r, a.g, a.b);
}, Le = function(t, r, i) {
  d(this, s, ri).call(this, t, r), d(this, s, Be).call(this, t, r, i);
}, oi = function(t, r) {
  l(this, Q).dataset.dragging = "true";
  const i = d(this, s, bn).call(this);
  d(this, s, D).call(this, k0(t, r, i, l(this, x).alpha), !0), d(this, s, mn).call(this, t, r);
}, si = function(t) {
  l(this, j).dataset.active = "true", l(this, I).dataset.dragging = "true", d(this, s, Le).call(this, l(this, I), t, "hue");
  const r = t * 360;
  d(this, s, D).call(this, y0(l(this, x), r), !0);
}, li = function(t) {
  l(this, Z).dataset.active = "true", l(this, q).dataset.dragging = "true", d(this, s, D).call(this, F({ ...l(this, x), alpha: t }), !0), d(this, s, Le).call(this, l(this, q), t, "alpha");
}, ci = function() {
  const r = l(this, I).style.left.match(/calc\(([\d.]+)%/);
  return r ? parseFloat(r[1]) / 100 * 360 : Jt(l(this, x));
}, un = function() {
  const t = l(this, X).value.replace(/%/g, "").trim(), r = Number(t);
  if (Number.isNaN(r)) {
    d(this, s, Je).call(this);
    return;
  }
  d(this, s, D).call(this, F({ ...l(this, x), alpha: r / 100 }), !0), d(this, s, U).call(this);
}, hn = function(t, r) {
  d(this, s, di).call(this, { [t]: r }, !0);
}, di = function(t, r = !0) {
  const i = {};
  je(l(this, x), l(this, E)).forEach((o) => {
    i[o.key] = t[o.key] ?? o.value;
  });
  const a = cr(l(this, E), i, l(this, x));
  a && (d(this, s, D).call(this, a, !0), r && d(this, s, U).call(this));
}, pi = function(t, r) {
  const i = t.min ?? 0, o = (t.max ?? 100) - i, c = t.step != null && t.step < 1 ? o / 120 : t.step ?? 1;
  return r ? c * 0.1 : c;
}, ui = function(t, r) {
  return t.step != null && t.step < 1 ? r.toFixed(3) : String(Math.round(r));
}, hi = function(t, r, i, a) {
  const o = je(l(this, x), l(this, E)).find(($) => $.key === t);
  if (!o) return;
  const c = r.min ?? 0, u = r.max ?? 100, f = d(this, s, pi).call(this, r, a);
  let b = Number(o.value) + i * f;
  r.step != null && r.step < 1 ? (b = Math.round(b / r.step) * r.step, b = Math.min(u, Math.max(c, b))) : b = Math.min(u, Math.max(c, Math.round(b)));
  const m = d(this, s, ui).call(this, r, b), v = {};
  je(l(this, x), l(this, E)).forEach(($) => {
    v[$.key] = $.key === t ? m : $.value;
  });
  const w = cr(l(this, E), v, l(this, x));
  if (!w) return;
  d(this, s, D).call(this, w, !0, { refreshFields: !1 });
  const _ = l(this, Y).querySelector(
    `.pcp-field-input[data-key="${t}"]`
  );
  _ && (_.value = m);
}, fi = function(t, r) {
  const i = r ? 0.05 : 0.5;
  let a = l(this, x).alpha * 100 + t * i;
  a = Math.min(100, Math.max(0, r ? a : Math.round(a)));
  const o = a / 100;
  d(this, s, D).call(this, F({ ...l(this, x), alpha: o }), !0, { refreshFields: !1 }), l(this, X).value = `${Math.round(a)}%`;
}, bi = function() {
  const t = l(this, z).querySelector(".pcp-alpha-field .pcp-field-label");
  return t ? hr(t, {
    onStart: () => {
      d(this, s, W).call(this), t.setAttribute("data-scrubbing", "true"), document.body.style.cursor = "ew-resize";
    },
    onDelta: (r, i) => d(this, s, fi).call(this, r, i.shiftKey),
    onEnd: () => {
      t.removeAttribute("data-scrubbing"), document.body.style.cursor = "", d(this, s, U).call(this), d(this, s, Je).call(this);
    }
  }) : () => {
  };
}, gi = function(t) {
  l(this, E) !== "hex" && l(this, Y).querySelectorAll(".pcp-field-label").forEach((r) => {
    var c;
    const i = r.closest(".pcp-field");
    if (!i) return;
    const a = (c = [...i.classList].find((u) => u.startsWith("pcp-field-") && u !== "pcp-field")) == null ? void 0 : c.slice(10);
    if (!a) return;
    const o = t.find((u) => u.key === a);
    !o || o.min == null || o.max == null || hr(r, {
      onStart: () => {
        d(this, s, W).call(this), r.setAttribute("data-scrubbing", "true"), document.body.style.cursor = "ew-resize";
      },
      onDelta: (u, f) => d(this, s, hi).call(this, a, o, u, f.shiftKey),
      onEnd: () => {
        r.removeAttribute("data-scrubbing"), document.body.style.cursor = "", d(this, s, U).call(this), d(this, s, Ve).call(this);
      }
    });
  });
}, D = function(t, r = !0, i) {
  M(this, x, F(t)), d(this, s, fn).call(this, r, i);
}, Ne = function(t = !0) {
  d(this, s, Ge).call(this), d(this, s, xn).call(this), d(this, s, fn).call(this, t), d(this, s, We).call(this);
}, fn = function(t, r) {
  (r == null ? void 0 : r.refreshFields) !== !1 && d(this, s, Ve).call(this), d(this, s, xi).call(this), d(this, s, mi).call(this), d(this, s, gn).call(this), d(this, s, Ge).call(this), t && d(this, s, yi).call(this);
}, bn = function() {
  return l(this, I).hasAttribute("data-dragging") ? d(this, s, ci).call(this) : Jt(l(this, x));
}, Ge = function() {
  g0(l(this, Ee), d(this, s, bn).call(this));
}, gn = function() {
  const { x: t, y: r } = w0(l(this, x));
  d(this, s, mn).call(this, t, r);
}, mn = function(t, r) {
  l(this, Q).style.left = `${t * 100}%`, l(this, Q).style.top = `${r * 100}%`;
}, mi = function() {
  const t = Jt(l(this, x)), r = l(this, I).hasAttribute("data-dragging") ? d(this, s, pn).call(this, l(this, I), t / 360) : t / 360;
  l(this, I).hasAttribute("data-dragging") ? d(this, s, Be).call(this, l(this, I), r, "hue") : d(this, s, Le).call(this, l(this, I), r, "hue");
  const i = l(this, q).hasAttribute("data-dragging") ? d(this, s, pn).call(this, l(this, q), l(this, x).alpha) : l(this, x).alpha;
  l(this, q).hasAttribute("data-dragging") ? d(this, s, Be).call(this, l(this, q), i, "alpha") : d(this, s, Le).call(this, l(this, q), i, "alpha"), d(this, s, vi).call(this);
}, vi = function() {
  l(this, Ie).style.setProperty("--pcp-alpha-gradient", x0(l(this, x)));
}, vn = function(t, r) {
  const { r: i, g: a, b: o } = it(r);
  t.style.setProperty("--swatch-solid", `rgb(${i}, ${a}, ${o})`), t.style.setProperty("--swatch-alpha", `rgba(${i}, ${a}, ${o}, ${r.alpha})`);
}, xi = function() {
  d(this, s, vn).call(this, l(this, qe), l(this, x));
}, Je = function() {
  l(this, X).value = `${Math.round(l(this, x).alpha * 100)}%`;
}, Ve = function() {
  const t = je(l(this, x), l(this, E));
  l(this, Y).dataset.format = l(this, E), l(this, Y).innerHTML = t.map(
    (r) => `
        <div class="pcp-field pcp-field-${r.key}">
          <span class="pcp-field-label">${r.label}</span>
          <input
            class="pcp-field-input"
            type="text"
            data-key="${r.key}"
            value="${r.value}"
            aria-label="${r.label}"
          />
        </div>
      `
  ).join(""), l(this, Y).querySelectorAll(".pcp-field-input").forEach((r) => {
    const i = r, a = i.dataset.key;
    i.addEventListener("focus", () => d(this, s, W).call(this)), i.addEventListener("change", () => d(this, s, hn).call(this, a, i.value)), i.addEventListener("keydown", (o) => {
      o.key === "Enter" && d(this, s, hn).call(this, a, i.value);
    });
  }), d(this, s, gi).call(this, t), d(this, s, Je).call(this);
}, xn = function() {
  const t = l(this, z).querySelectorAll(".pcp-tab");
  let r = null;
  if (t.forEach((i) => {
    const a = i.dataset.format === l(this, E);
    i.setAttribute("data-active", String(a)), i.setAttribute("aria-selected", String(a)), a && (r = i);
  }), r) {
    const i = r, a = i.offsetLeft, o = i.offsetWidth;
    l(this, he).style.left = `${a}px`, l(this, he).style.width = `${o}px`;
  }
}, We = function() {
  this.history && (l(this, ee).innerHTML = l(this, K).map((t, r) => `
          <button type="button" class="pcp-history-swatch pcp-clip" data-index="${r}" aria-label="Color ${He(t)}">
            <span class="pcp-swatch-fill" data-history-fill="${r}"></span>
          </button>
        `).join(""), l(this, ee).querySelectorAll("[data-history-fill]").forEach((t) => {
    const r = Number(t.dataset.historyFill), i = l(this, K)[r];
    i && d(this, s, vn).call(this, t, i);
  }), l(this, ee).querySelectorAll(".pcp-history-swatch").forEach((t) => {
    t.addEventListener("click", () => {
      const r = Number(t.dataset.index), i = l(this, K)[r];
      i && d(this, s, D).call(this, { ...i }, !0, { refreshFields: !0 });
    });
  }));
}, U = function() {
  delete l(this, Q).dataset.dragging, delete l(this, I).dataset.dragging, delete l(this, q).dataset.dragging, delete l(this, j).dataset.active, delete l(this, Z).dataset.active;
  const t = l(this, ue);
  M(this, ue, null), this.history && t && !Ur(t, l(this, x)) && (M(this, K, _0(t, l(this, K))), d(this, s, We).call(this));
}, yi = function() {
  const t = {
    color: { ...l(this, x) },
    css: lr(l(this, x)),
    hex: He(l(this, x))
  };
  this.dispatchEvent(
    new CustomEvent("change", {
      detail: t,
      bubbles: !0,
      composed: !0
    })
  );
};
customElements.get("pretty-color-picker") || customElements.define("pretty-color-picker", q0);
export {
  $0 as DEFAULT_COLOR,
  q0 as PrettyColorPicker,
  je as formatFieldsFor,
  F as normalizeOklch,
  pe as oklchFromCss,
  lr as oklchToCss,
  He as oklchToHex,
  F0 as oklchToRgbString,
  cr as parseFormatFields
};
