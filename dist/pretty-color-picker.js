var Dn = (e) => {
  throw TypeError(e);
};
var Nt = (e, n, t) => n.has(e) || Dn("Cannot " + t);
var l = (e, n, t) => (Nt(e, n, "read from private field"), t ? t.call(e) : n.get(e)), k = (e, n, t) => n.has(e) ? Dn("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(e) : n.set(e, t), x = (e, n, t, r) => (Nt(e, n, "write to private field"), r ? r.call(e, t) : n.set(e, t), t), d = (e, n, t) => (Nt(e, n, "access private method"), t);
const jn = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z" opacity="0.2"/><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/></svg>', Ei = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z" opacity="0.2"/><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"/></svg>', Ii = '@import"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap";:host{--pcp-width: 260px;--pcp-radius-sm: 4px;--pcp-radius: 6px;--pcp-radius-lg: 9px;--pcp-panel-padding: 9px;--pcp-history-cols: 8;--pcp-history-swatch-size: calc( (var(--pcp-width) - 2 * var(--pcp-panel-padding) - 7 * var(--pcp-history-gap)) / var(--pcp-history-cols) );--pcp-control-height: var(--pcp-history-swatch-size);--pcp-tab-row-height: 32px;--pcp-field-label-size: 10px;--pcp-field-label-line: 12px;--pcp-field-label-gap: 3px;--pcp-field-value-size: 11px;--pcp-field-value-line: 15px;--pcp-field-input-height: 20px;--pcp-input-panel-height: calc( var(--pcp-field-label-line) + var(--pcp-field-label-gap) + var(--pcp-field-input-height) );--pcp-input-row-padding-y: 7px;--pcp-input-row-padding-x: 7px;--pcp-alpha-col-width: 4ch;--pcp-value-col-width: minmax(0, 1fr);--pcp-swatch-code-gap: 8px;--pcp-history-gap: 6px;--pcp-checker-size: 6px;--pcp-slider-handle-height: calc(var(--pcp-control-height) * 20 / 36);--pcp-field-input-radius: var(--pcp-radius-sm);--pcp-icon-button-size: 26px;--pcp-icon-button-radius: var(--pcp-radius-sm);--pcp-title-size: 12px;--pcp-title-line: 17px;--pcp-title-weight: 600;--pcp-title-tracking: -.24px;--pcp-ease-out: cubic-bezier(.175, .885, .32, 1.1);--pcp-font: "Geist", system-ui, -apple-system, "SF Pro Display", sans-serif;--pcp-mono: "Geist Mono", ui-monospace, monospace;display:inline-block;font-family:var(--pcp-font);-webkit-font-smoothing:antialiased;color:var(--pcp-text-primary)}:host([movable]){position:fixed;z-index:1000;margin:0}:host([movable]) .pcp-header{cursor:grab;touch-action:none}:host([movable]) .pcp-header[data-dragging=true]{cursor:grabbing}:host,:host([theme="dark"]){color-scheme:dark;--pcp-bg: #212121;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: rgba(255, 255, 255, .05);--pcp-surface-hover: rgba(255, 255, 255, .1);--pcp-surface-active: rgba(255, 255, 255, .11);--pcp-tab-pill: rgba(255, 255, 255, .11);--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-root: #ffffff;--pcp-text-primary: rgba(255, 255, 255, .95);--pcp-text-label: rgba(255, 255, 255, .7);--pcp-text-secondary: rgba(255, 255, 255, .6);--pcp-text-tertiary: rgba(255, 255, 255, .4);--pcp-text-focus: #ffffff;--pcp-slider-handle: rgba(255, 255, 255, .95);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: 0 8px 32px rgba(0, 0, 0, .5)}:host([theme="light"]){color-scheme:light;--pcp-bg: #fafafa;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: rgba(0, 0, 0, .04);--pcp-surface-hover: rgba(0, 0, 0, .08);--pcp-surface-active: rgba(0, 0, 0, .1);--pcp-tab-pill: rgba(0, 0, 0, .1);--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-root: #000000;--pcp-text-primary: rgba(0, 0, 0, .9);--pcp-text-label: rgba(0, 0, 0, .6);--pcp-text-secondary: rgba(0, 0, 0, .55);--pcp-text-tertiary: rgba(0, 0, 0, .35);--pcp-text-focus: #000000;--pcp-slider-handle: rgba(0, 0, 0, .9);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 4px 20px rgba(0, 0, 0, .08)}@media(prefers-color-scheme:dark){:host([theme="system"]){color-scheme:dark;--pcp-bg: #212121;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: rgba(255, 255, 255, .05);--pcp-surface-hover: rgba(255, 255, 255, .1);--pcp-surface-active: rgba(255, 255, 255, .11);--pcp-tab-pill: rgba(255, 255, 255, .11);--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-root: #ffffff;--pcp-text-primary: rgba(255, 255, 255, .95);--pcp-text-label: rgba(255, 255, 255, .7);--pcp-text-secondary: rgba(255, 255, 255, .6);--pcp-text-tertiary: rgba(255, 255, 255, .4);--pcp-text-focus: #ffffff;--pcp-slider-handle: rgba(255, 255, 255, .95);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: 0 8px 32px rgba(0, 0, 0, .5)}}@media(prefers-color-scheme:light){:host([theme="system"]){color-scheme:light;--pcp-bg: #fafafa;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: rgba(0, 0, 0, .04);--pcp-surface-hover: rgba(0, 0, 0, .08);--pcp-surface-active: rgba(0, 0, 0, .1);--pcp-tab-pill: rgba(0, 0, 0, .1);--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-root: #000000;--pcp-text-primary: rgba(0, 0, 0, .9);--pcp-text-label: rgba(0, 0, 0, .6);--pcp-text-secondary: rgba(0, 0, 0, .55);--pcp-text-tertiary: rgba(0, 0, 0, .35);--pcp-text-focus: #000000;--pcp-slider-handle: rgba(0, 0, 0, .9);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 4px 20px rgba(0, 0, 0, .08)}}*,*:before,*:after{box-sizing:border-box}.pcp-clip{overflow:hidden;border-radius:var(--pcp-clip-radius, var(--pcp-radius-sm))}.pcp-swatch-fill{display:block;box-sizing:border-box;width:calc(100% + 2px);height:calc(100% + 2px);margin:-1px;border-radius:inherit;background-color:var(--pcp-checker-base);background-image:linear-gradient(to right,var(--swatch-solid, #000) 50%,transparent 50%),linear-gradient(to right,transparent 50%,var(--swatch-alpha, rgba(0, 0, 0, .5)) 50%),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,100% 100%,var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size);background-position:0 0,0 0,0 0,0 calc(var(--pcp-checker-size) / 2),calc(var(--pcp-checker-size) / 2) calc(var(--pcp-checker-size) / -2),calc(var(--pcp-checker-size) / -2) 0}@supports (background: -webkit-named-image(i)){.pcp-clip,.pcp-swatch-fill{clip-path:inset(0 round var(--pcp-clip-radius, var(--pcp-radius-sm)))}}.pcp{width:var(--pcp-width);background:var(--pcp-bg);border:1px solid var(--pcp-border);border-radius:var(--pcp-radius-lg);box-shadow:var(--pcp-elevation);padding:var(--pcp-panel-padding);-webkit-user-select:none;user-select:none}.pcp-header{display:flex;align-items:center;justify-content:space-between;gap:6px;padding-bottom:4px;margin-bottom:8px;min-height:var(--pcp-icon-button-size);border-bottom:1px solid var(--pcp-divider)}.pcp-title{flex:1;min-width:0;font-family:var(--pcp-font);font-size:var(--pcp-title-size);font-weight:var(--pcp-title-weight);line-height:var(--pcp-title-line);letter-spacing:var(--pcp-title-tracking);color:var(--pcp-text-root);margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pcp-header-btn{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--pcp-icon-button-size);height:var(--pcp-icon-button-size);padding:0;border:none;border-radius:var(--pcp-icon-button-radius);background:transparent;color:var(--pcp-text-focus);cursor:pointer;transition:background .15s var(--pcp-ease-out),color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-header-btn svg{width:13px;height:13px;flex-shrink:0}@media(hover:hover)and (pointer:fine){.pcp-header-btn:hover{background:var(--pcp-surface-hover);color:var(--pcp-text-primary)}}.pcp-header-btn:active{background:var(--pcp-surface-active);transform:scale(.97)}.pcp-header-btn:focus{outline:none}.pcp-header-btn:focus-visible{box-shadow:0 0 0 2px var(--pcp-bg),0 0 0 4px var(--pcp-focus-ring)}.pcp-plane-wrap{position:relative;width:100%;aspect-ratio:4 / 3;--pcp-clip-radius: var(--pcp-radius-sm);margin-bottom:5px;cursor:crosshair;touch-action:none}.pcp-plane{display:block;width:100%;height:100%}.pcp-cursor{position:absolute;width:13px;height:13px;margin:-6.5px 0 0 -6.5px;border:2px solid var(--pcp-cursor-ring);border-radius:50%;box-shadow:0 0 0 1px var(--pcp-cursor-outline),inset 0 0 0 1px #0000001f;pointer-events:none}.pcp-cursor[data-dragging=true]{transition:none}.pcp-slider-wrapper{position:relative;height:var(--pcp-control-height);margin-bottom:5px}.pcp-slider{position:absolute;top:0;right:0;bottom:0;left:0;cursor:pointer;-webkit-user-select:none;user-select:none;--pcp-clip-radius: var(--pcp-radius-sm);background:transparent;touch-action:none}.pcp-slider-fill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none}.pcp-slider-fill-hue{background:linear-gradient(to right,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.pcp-slider-fill-alpha{--pcp-alpha-gradient: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));background-color:var(--pcp-checker-base);background-image:var(--pcp-alpha-gradient),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size);background-position:0 0,0 0,0 calc(var(--pcp-checker-size) / 2),calc(var(--pcp-checker-size) / 2) calc(var(--pcp-checker-size) / -2),calc(var(--pcp-checker-size) / -2) 0}.pcp-slider-handle{position:absolute;top:50%;left:0;z-index:1;width:3px;height:var(--pcp-slider-handle-height);border:none;outline:none;border-radius:999px;background:var(--pcp-slider-handle);pointer-events:none;transform:translateY(-50%);opacity:.68;box-shadow:none;filter:none;transition:opacity .15s ease,background .12s ease}.pcp-slider:hover .pcp-slider-handle,.pcp-slider[data-active=true] .pcp-slider-handle{opacity:.68}.pcp-slider-handle[data-dragging=true]{opacity:.95}.pcp-tabs{position:relative;display:flex;align-items:center;height:var(--pcp-tab-row-height);box-sizing:border-box;padding:2px;margin-bottom:7px;background:transparent;border-radius:var(--pcp-radius)}.pcp-tabs-pill{position:absolute;top:2px;bottom:2px;left:0;width:0;background:var(--pcp-tab-pill);border-radius:5px;z-index:0;pointer-events:none;transition:left .2s var(--pcp-ease-out),width .2s var(--pcp-ease-out)}.pcp-tab{position:relative;z-index:1;flex:1;display:flex;align-items:center;justify-content:center;height:100%;padding:0 4px;font-family:inherit;font-size:11px;font-weight:500;line-height:1;text-align:center;background:transparent;border:none;color:var(--pcp-text-label);cursor:pointer;transition:color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-tab[data-active=true]{color:var(--pcp-text-primary)}.pcp-tab:active{transform:scale(.97)}.pcp-inputs{display:grid;width:100%;min-width:0;box-sizing:border-box;overflow:hidden;grid-template-columns:var(--pcp-input-panel-height) var(--pcp-swatch-code-gap) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-alpha-col-width);column-gap:3px;align-items:center;margin-bottom:8px;padding:var(--pcp-input-row-padding-y) var(--pcp-input-row-padding-x);background:var(--pcp-surface);border-radius:var(--pcp-radius-sm)}.pcp-swatch{grid-column:1;flex-shrink:0;width:var(--pcp-input-panel-height);height:var(--pcp-input-panel-height);--pcp-clip-radius: var(--pcp-radius-sm);position:relative}.pcp-fields{grid-column:3 / 6;display:grid;min-width:0;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:3px}.pcp-fields[data-format=hex] .pcp-field-hex{grid-column:1 / -1;justify-self:center;width:fit-content;align-items:center}.pcp-fields[data-format=hex] .pcp-field-label{text-align:center;white-space:nowrap}.pcp-fields[data-format=hex] .pcp-field-input{width:8ch;min-width:8ch;padding:0 4px}.pcp-fields[data-format=rgb] .pcp-field-r{grid-column:1}.pcp-fields[data-format=rgb] .pcp-field-g{grid-column:2}.pcp-fields[data-format=rgb] .pcp-field-b{grid-column:3}.pcp-fields[data-format=hsl] .pcp-field-h{grid-column:1}.pcp-fields[data-format=hsl] .pcp-field-s{grid-column:2}.pcp-fields[data-format=hsl] .pcp-field-l{grid-column:3}.pcp-fields[data-format=oklch] .pcp-field-l{grid-column:1}.pcp-fields[data-format=oklch] .pcp-field-c{grid-column:2}.pcp-fields[data-format=oklch] .pcp-field-h{grid-column:3}.pcp-alpha-field{grid-column:6;box-sizing:border-box;width:var(--pcp-alpha-col-width);min-width:var(--pcp-alpha-col-width);max-width:var(--pcp-alpha-col-width);align-items:center}.pcp-alpha-field .pcp-field-input{width:100%;min-width:0;padding:0;box-sizing:border-box}.pcp-field{min-width:0;display:flex;flex-direction:column;align-items:stretch;justify-content:center;gap:var(--pcp-field-label-gap)}.pcp-fields[data-format=oklch] .pcp-field-c .pcp-field-input{letter-spacing:-.02em;padding:0 1px}.pcp-field-label{display:block;font-size:var(--pcp-field-label-size);font-weight:500;line-height:var(--pcp-field-label-line);color:var(--pcp-text-label);margin:0;text-align:center}.pcp-fields:not([data-format=hex]) .pcp-field-label,.pcp-alpha-field .pcp-field-label{cursor:ew-resize;-webkit-user-select:none;user-select:none;touch-action:none;transition:color .15s var(--pcp-ease-out)}.pcp-field-label[data-scrubbing=true]{color:var(--pcp-text-primary)}.pcp-field-input{width:100%;min-width:0;min-height:var(--pcp-field-input-height);height:var(--pcp-field-input-height);padding:0 2px;font-family:var(--pcp-mono);font-size:var(--pcp-field-value-size);font-weight:500;line-height:var(--pcp-field-input-height);font-variant-numeric:tabular-nums;text-align:center;color:var(--pcp-text-secondary);background:transparent;border:none;border-radius:var(--pcp-field-input-radius);outline:none;box-shadow:none;transition:color .15s var(--pcp-ease-out),background .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-field-input:hover{background:var(--pcp-surface-hover)}}.pcp-field-input:focus{color:var(--pcp-text-focus);background:transparent;border-radius:var(--pcp-field-input-radius);box-shadow:none;outline:none}.pcp-field-input:active{background:var(--pcp-surface-active)}.pcp-history-section[hidden]{display:none}.pcp-history-label{font-size:10px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--pcp-text-label);margin:0 0 5px}.pcp-history{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:var(--pcp-history-gap);width:100%}.pcp-history-swatch{-moz-appearance:none;appearance:none;-webkit-appearance:none;display:block;width:100%;aspect-ratio:1;height:auto;flex-shrink:0;padding:0;border:none;background:none;--pcp-clip-radius: 4px;cursor:pointer;transition:opacity .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-history-swatch:hover{opacity:.85}}.pcp-history-swatch:active{opacity:.7}@media(prefers-reduced-motion:reduce){.pcp-header-btn,.pcp-tab,.pcp-tabs-pill,.pcp-cursor,.pcp-slider-handle,.pcp-history-swatch{transition:none}.pcp-tab:active,.pcp-header-btn:active{transform:none}}', zr = (e, n) => {
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
}, qi = {
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
}, Fi = (e) => zr(qi[e.toLowerCase()], 6), Ri = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, Xi = (e) => {
  let n;
  return (n = e.match(Ri)) ? zr(parseInt(n[1], 16), n[1].length) : void 0;
}, se = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", qe = `${se}%`, _n = `(?:${se}%|${se})`, Oi = `(?:${se}(deg|grad|rad|turn)|${se})`, we = "\\s*,\\s*", Di = new RegExp(
  `^rgba?\\(\\s*${se}${we}${se}${we}${se}\\s*(?:,\\s*${_n}\\s*)?\\)$`
), ji = new RegExp(
  `^rgba?\\(\\s*${qe}${we}${qe}${we}${qe}\\s*(?:,\\s*${_n}\\s*)?\\)$`
), Zi = (e) => {
  let n = { mode: "rgb" }, t;
  if (t = e.match(Di))
    t[1] !== void 0 && (n.r = t[1] / 255), t[2] !== void 0 && (n.g = t[2] / 255), t[3] !== void 0 && (n.b = t[3] / 255);
  else if (t = e.match(ji))
    t[1] !== void 0 && (n.r = t[1] / 100), t[2] !== void 0 && (n.g = t[2] / 100), t[3] !== void 0 && (n.b = t[3] / 100);
  else
    return;
  return t[4] !== void 0 ? n.alpha = Math.max(0, Math.min(1, t[4] / 100)) : t[5] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[5]))), n;
}, st = (e, n) => e === void 0 ? void 0 : typeof e != "object" ? Tr(e) : e.mode !== void 0 ? e : n ? { ...e, mode: n } : void 0, O = (e = "rgb") => (n) => (n = st(n, e)) !== void 0 ? (
  // if the color's mode corresponds to our target mode
  n.mode === e ? (
    // then just return the color
    n
  ) : (
    // otherwise check to see if we have a dedicated
    // converter for the target mode
    j[n.mode][e] ? (
      // and return its result...
      j[n.mode][e](n)
    ) : (
      // ...otherwise pass through RGB as an intermediary step.
      // if the target mode is RGB...
      e === "rgb" ? (
        // just return the RGB
        j[n.mode].rgb(n)
      ) : (
        // otherwise convert color.mode -> RGB -> target_mode
        j.rgb[e](j[n.mode].rgb(n))
      )
    )
  )
) : void 0, j = {}, _r = {}, ot = [], Sr = {}, Yi = (e) => e, w = (e) => (j[e.mode] = {
  ...j[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((n) => {
  j[n] || (j[n] = {}), j[n][e.mode] = e.fromMode[n];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((n) => {
  if (e.ranges[n] === void 0 && (e.ranges[n] = [0, 1]), !e.interpolate[n])
    throw new Error(`Missing interpolator for: ${n}`);
  typeof e.interpolate[n] == "function" && (e.interpolate[n] = {
    use: e.interpolate[n]
  }), e.interpolate[n].fixup || (e.interpolate[n].fixup = Yi);
}), _r[e.mode] = e, (e.parse || []).forEach((n) => {
  Bi(n, e.mode);
}), O(e.mode)), ft = (e) => _r[e], Bi = (e, n) => {
  if (typeof e == "string") {
    if (!n)
      throw new Error("'mode' required when 'parser' is a string");
    Sr[e] = n;
  } else typeof e == "function" && ot.indexOf(e) < 0 && ot.push(e);
}, ln = /[^\x00-\x7F]|[a-zA-Z_]/, Gi = /[^\x00-\x7F]|[-\w]/, h = {
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
function Ge(e) {
  let n = e[g], t = e[g + 1];
  return n === "-" || n === "+" ? /\d/.test(t) || t === "." && /\d/.test(e[g + 2]) : n === "." ? /\d/.test(t) : /\d/.test(n);
}
function cn(e) {
  if (g >= e.length)
    return !1;
  let n = e[g];
  if (ln.test(n))
    return !0;
  if (n === "-") {
    if (e.length - g < 2)
      return !1;
    let t = e[g + 1];
    return !!(t === "-" || ln.test(t));
  }
  return !1;
}
const Vi = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function Ae(e) {
  let n = "";
  if ((e[g] === "-" || e[g] === "+") && (n += e[g++]), n += Ve(e), e[g] === "." && /\d/.test(e[g + 1]) && (n += e[g++] + Ve(e)), (e[g] === "e" || e[g] === "E") && ((e[g + 1] === "-" || e[g + 1] === "+") && /\d/.test(e[g + 2]) ? n += e[g++] + e[g++] + Ve(e) : /\d/.test(e[g + 1]) && (n += e[g++] + Ve(e))), cn(e)) {
    let t = lt(e);
    return t === "deg" || t === "rad" || t === "turn" || t === "grad" ? { type: h.Hue, value: n * Vi[t] } : void 0;
  }
  return e[g] === "%" ? (g++, { type: h.Percentage, value: +n }) : { type: h.Number, value: +n };
}
function Ve(e) {
  let n = "";
  for (; /\d/.test(e[g]); )
    n += e[g++];
  return n;
}
function lt(e) {
  let n = "";
  for (; g < e.length && Gi.test(e[g]); )
    n += e[g++];
  return n;
}
function Ji(e) {
  let n = lt(e);
  return e[g] === "(" ? (g++, { type: h.Function, value: n }) : n === "none" ? { type: h.None, value: void 0 } : { type: h.Ident, value: n };
}
function Ui(e = "") {
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
      t.push({ type: h.ParenClose });
      continue;
    }
    if (r === "+") {
      if (g--, Ge(n)) {
        t.push(Ae(n));
        continue;
      }
      return;
    }
    if (r === "-") {
      if (g--, Ge(n)) {
        t.push(Ae(n));
        continue;
      }
      if (cn(n)) {
        t.push({ type: h.Ident, value: lt(n) });
        continue;
      }
      return;
    }
    if (r === ".") {
      if (g--, Ge(n)) {
        t.push(Ae(n));
        continue;
      }
      return;
    }
    if (r === "/") {
      for (; g < n.length && (n[g] === `
` || n[g] === "	" || n[g] === " "); )
        g++;
      let i;
      if (Ge(n) && (i = Ae(n), i.type !== h.Hue)) {
        t.push({ type: h.Alpha, value: i });
        continue;
      }
      if (cn(n) && lt(n) === "none") {
        t.push({
          type: h.Alpha,
          value: { type: h.None, value: void 0 }
        });
        continue;
      }
      return;
    }
    if (/\d/.test(r)) {
      g--, t.push(Ae(n));
      continue;
    }
    if (ln.test(r)) {
      g--, t.push(Ji(n));
      continue;
    }
    return;
  }
  return t;
}
function Wi(e) {
  e._i = 0;
  let n = e[e._i++];
  if (!n || n.type !== h.Function || n.value !== "color" || (n = e[e._i++], n.type !== h.Ident))
    return;
  const t = Sr[n.value];
  if (!t)
    return;
  const r = { mode: t }, i = Lr(e, !1);
  if (!i)
    return;
  const a = ft(t).channels;
  for (let s = 0, c, p; s < a.length; s++)
    c = i[s], p = a[s], c.type !== h.None && (r[p] = c.type === h.Number ? c.value : c.value / 100, p === "alpha" && (r[p] = Math.max(0, Math.min(1, r[p]))));
  return r;
}
function Lr(e, n) {
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
function Ki(e, n) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== h.Function)
    return;
  let r = Lr(e, n);
  if (r)
    return r.unshift(t.value), r;
}
const Tr = (e) => {
  if (typeof e != "string")
    return;
  const n = Ui(e), t = n ? Ki(n, !0) : void 0;
  let r, i = 0, a = ot.length;
  for (; i < a; )
    if ((r = ot[i++](e, t)) !== void 0)
      return r;
  return n ? Wi(n) : void 0;
};
function Qi(e, n) {
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
const ea = (e) => e === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0, ta = (e, n, t) => e + t * (n - e), na = (e) => {
  let n = [];
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t], i = e[t + 1];
    r === void 0 && i === void 0 ? n.push(void 0) : r !== void 0 && i !== void 0 ? n.push([r, i]) : n.push(r !== void 0 ? [r, r] : [i, i]);
  }
  return n;
}, ra = (e) => (n) => {
  let t = na(n);
  return (r) => {
    let i = r * t.length, a = r >= 1 ? t.length - 1 : Math.max(Math.floor(i), 0), s = t[a];
    return s === void 0 ? void 0 : e(s[0], s[1], i - a);
  };
}, u = ra(ta), H = (e) => {
  let n = !1, t = e.map((r) => r !== void 0 ? (n = !0, r) : 1);
  return n ? t : e;
}, ke = {
  mode: "rgb",
  channels: ["r", "g", "b", "alpha"],
  parse: [
    Qi,
    Xi,
    Zi,
    Fi,
    ea,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: u,
    g: u,
    b: u,
    alpha: { use: u, fixup: H }
  },
  gamut: !0,
  white: { r: 1, g: 1, b: 1 },
  black: { r: 0, g: 0, b: 0 }
}, Ct = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), Zn = (e) => {
  let n = Ct(e.r), t = Ct(e.g), r = Ct(e.b), i = {
    mode: "xyz65",
    x: 0.5766690429101305 * n + 0.1855582379065463 * t + 0.1882286462349947 * r,
    y: 0.297344975250536 * n + 0.6273635662554661 * t + 0.0752914584939979 * r,
    z: 0.0270313613864123 * n + 0.0706888525358272 * t + 0.9913375368376386 * r
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, At = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), Yn = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "a98",
    r: At(
      e * 2.0415879038107465 - n * 0.5650069742788597 - 0.3447313507783297 * t
    ),
    g: At(
      e * -0.9692436362808798 + n * 1.8759675015077206 + 0.0415550574071756 * t
    ),
    b: At(
      e * 0.0134442806320312 - n * 0.1183623922310184 + 1.0151749943912058 * t
    )
  };
  return r !== void 0 && (i.alpha = r), i;
}, Et = (e = 0) => {
  const n = Math.abs(e);
  return n <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((n + 0.055) / 1.055, 2.4);
}, $e = ({ r: e, g: n, b: t, alpha: r }) => {
  let i = {
    mode: "lrgb",
    r: Et(e),
    g: Et(n),
    b: Et(t)
  };
  return r !== void 0 && (i.alpha = r), i;
}, fe = (e) => {
  let { r: n, g: t, b: r, alpha: i } = $e(e), a = {
    mode: "xyz65",
    x: 0.4123907992659593 * n + 0.357584339383878 * t + 0.1804807884018343 * r,
    y: 0.2126390058715102 * n + 0.715168678767756 * t + 0.0721923153607337 * r,
    z: 0.0193308187155918 * n + 0.119194779794626 * t + 0.9505321522496607 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, It = (e = 0) => {
  const n = Math.abs(e);
  return n > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(n, 1 / 2.4) - 0.055) : e * 12.92;
}, ze = ({ r: e, g: n, b: t, alpha: r }, i = "rgb") => {
  let a = {
    mode: i,
    r: It(e),
    g: It(n),
    b: It(t)
  };
  return r !== void 0 && (a.alpha = r), a;
}, be = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = ze({
    r: e * 3.2409699419045226 - n * 1.537383177570094 - 0.4986107602930034 * t,
    g: e * -0.9692436362808796 + n * 1.8759675015077204 + 0.0415550574071756 * t,
    b: e * 0.0556300796969936 - n * 0.2039769588889765 + 1.0569715142428784 * t
  });
  return r !== void 0 && (i.alpha = r), i;
}, ia = {
  ...ke,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => Yn(fe(e)),
    xyz65: Yn
  },
  toMode: {
    rgb: (e) => be(Zn(e)),
    xyz65: Zn
  }
}, C = (e) => (e = e % 360) < 0 ? e + 360 : e, aa = (e, n) => e.map((t, r, i) => {
  if (t === void 0)
    return t;
  let a = C(t);
  return r === 0 || e[r - 1] === void 0 ? a : n(a - C(i[r - 1]));
}).reduce((t, r) => !t.length || r === void 0 || t[t.length - 1] === void 0 ? (t.push(r), t) : (t.push(r + t[t.length - 1]), t), []), ee = (e) => aa(e, (n) => Math.abs(n) <= 180 ? n : n - 360 * Math.sign(n)), P = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0], sa = Math.PI / 180, oa = 180 / Math.PI;
let Bn = P[3] * P[4], Gn = P[1] * P[4], Vn = P[1] * P[2] - P[0] * P[3];
const la = ({ r: e, g: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (Vn * t + e * Bn - n * Gn) / (Vn + Bn - Gn), a = t - i, s = (P[4] * (n - i) - P[2] * a) / P[3], c = {
    mode: "cubehelix",
    l: i,
    s: i === 0 || i === 1 ? void 0 : Math.sqrt(a * a + s * s) / (P[4] * i * (1 - i))
  };
  return c.s && (c.h = Math.atan2(s, a) * oa - 120), r !== void 0 && (c.alpha = r), c;
}, ca = ({ h: e, s: n, l: t, alpha: r }) => {
  let i = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * sa, t === void 0 && (t = 0);
  let a = n === void 0 ? 0 : n * t * (1 - t), s = Math.cos(e), c = Math.sin(e);
  return i.r = t + a * (P[0] * s + P[1] * c), i.g = t + a * (P[2] * s + P[3] * c), i.b = t + a * (P[4] * s + P[5] * c), r !== void 0 && (i.alpha = r), i;
}, bt = (e, n) => {
  if (e.h === void 0 || n.h === void 0 || !e.s || !n.s)
    return 0;
  let t = C(e.h), r = C(n.h), i = Math.sin((r - t + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * n.s) * i;
}, da = (e, n) => {
  if (e.h === void 0 || n.h === void 0)
    return 0;
  let t = C(e.h), r = C(n.h);
  return Math.abs(r - t) > 180 ? t - (r - 360 * Math.sign(r - t)) : r - t;
}, gt = (e, n) => {
  if (e.h === void 0 || n.h === void 0 || !e.c || !n.c)
    return 0;
  let t = C(e.h), r = C(n.h), i = Math.sin((r - t + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * n.c) * i;
}, te = (e) => {
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
}, pa = {
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
    rgb: la
  },
  toMode: {
    rgb: ca
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
      fixup: H
    }
  },
  difference: {
    h: bt
  },
  average: {
    h: te
  }
}, oe = ({ l: e, a: n, b: t, alpha: r }, i = "lch") => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let a = Math.sqrt(n * n + t * t), s = { mode: i, l: e, c: a };
  return a && (s.h = C(Math.atan2(t, n) * 180 / Math.PI)), r !== void 0 && (s.alpha = r), s;
}, le = ({ l: e, c: n, h: t, alpha: r }, i = "lab") => {
  t === void 0 && (t = 0);
  let a = {
    mode: i,
    l: e,
    a: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    b: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return r !== void 0 && (a.alpha = r), a;
}, Hr = Math.pow(29, 3) / Math.pow(3, 3), Pr = Math.pow(6, 3) / Math.pow(29, 3), T = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: (1 - 0.3457 - 0.3585) / 0.3585
}, me = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: (1 - 0.3127 - 0.329) / 0.329
};
let qt = (e) => Math.pow(e, 3) > Pr ? Math.pow(e, 3) : (116 * e - 16) / Hr;
const Nr = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (e + 16) / 116, a = n / 500 + i, s = i - t / 200, c = {
    mode: "xyz65",
    x: qt(a) * me.X,
    y: qt(i) * me.Y,
    z: qt(s) * me.Z
  };
  return r !== void 0 && (c.alpha = r), c;
}, mt = (e) => be(Nr(e)), Ft = (e) => e > Pr ? Math.cbrt(e) : (Hr * e + 16) / 116, Cr = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Ft(e / me.X), a = Ft(n / me.Y), s = Ft(t / me.Z), c = {
    mode: "lab65",
    l: 116 * a - 16,
    a: 500 * (i - a),
    b: 200 * (a - s)
  };
  return r !== void 0 && (c.alpha = r), c;
}, vt = (e) => {
  let n = Cr(fe(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, ct = 1, Ar = 1, Fe = 26 / 180 * Math.PI, dt = Math.cos(Fe), pt = Math.sin(Fe), Er = 100 / Math.log(139 / 100), dn = ({ l: e, c: n, h: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "lab65",
    l: (Math.exp(e * ct / Er) - 1) / 39e-4
  }, a = (Math.exp(0.0435 * n * Ar * ct) - 1) / 0.075, s = a * Math.cos(t / 180 * Math.PI - Fe), c = a * Math.sin(t / 180 * Math.PI - Fe);
  return i.a = s * dt - c / 0.83 * pt, i.b = s * pt + c / 0.83 * dt, r !== void 0 && (i.alpha = r), i;
}, pn = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = n * dt + t * pt, a = 0.83 * (t * dt - n * pt), s = Math.sqrt(i * i + a * a), c = {
    mode: "dlch",
    l: Er / ct * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * s) / (0.0435 * Ar * ct)
  };
  return c.c && (c.h = C((Math.atan2(a, i) + Fe) / Math.PI * 180)), r !== void 0 && (c.alpha = r), c;
}, Jn = (e) => dn(oe(e, "dlch")), Un = (e) => le(pn(e), "dlab"), ha = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: Jn,
    rgb: (e) => mt(Jn(e))
  },
  fromMode: {
    lab65: Un,
    rgb: (e) => Un(vt(e))
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
      fixup: H
    }
  }
}, ua = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: dn,
    dlab: (e) => le(e, "dlab"),
    rgb: (e) => mt(dn(e))
  },
  fromMode: {
    lab65: pn,
    dlab: (e) => oe(e, "dlch"),
    rgb: (e) => pn(vt(e))
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
      fixup: H
    }
  },
  difference: {
    h: gt
  },
  average: {
    h: te
  }
};
function fa({ h: e, s: n, i: t, alpha: r }) {
  e = C(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
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
function ba({ r: e, g: n, b: t, alpha: r }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.max(e, n, t), a = Math.min(e, n, t), s = {
    mode: "hsi",
    s: e + n + t === 0 ? 0 : 1 - 3 * a / (e + n + t),
    i: (e + n + t) / 3
  };
  return i - a !== 0 && (s.h = (i === e ? (n - t) / (i - a) + (n < t) * 6 : i === n ? (t - e) / (i - a) + 2 : (e - n) / (i - a) + 4) * 60), r !== void 0 && (s.alpha = r), s;
}
const ga = {
  mode: "hsi",
  toMode: {
    rgb: fa
  },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: {
    rgb: ba
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
    alpha: { use: u, fixup: H }
  },
  difference: {
    h: bt
  },
  average: {
    h: te
  }
};
function ma({ h: e, s: n, l: t, alpha: r }) {
  e = C(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
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
function va({ r: e, g: n, b: t, alpha: r }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.max(e, n, t), a = Math.min(e, n, t), s = {
    mode: "hsl",
    s: i === a ? 0 : (i - a) / (1 - Math.abs(i + a - 1)),
    l: 0.5 * (i + a)
  };
  return i - a !== 0 && (s.h = (i === e ? (n - t) / (i - a) + (n < t) * 6 : i === n ? (t - e) / (i - a) + 2 : (e - n) / (i - a) + 4) * 60), r !== void 0 && (s.alpha = r), s;
}
const xa = (e, n) => {
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
}, ya = new RegExp(
  `^hsla?\\(\\s*${Oi}${we}${qe}${we}${qe}\\s*(?:,\\s*${_n}\\s*)?\\)$`
), Ma = (e) => {
  let n = e.match(ya);
  if (!n) return;
  let t = { mode: "hsl" };
  return n[3] !== void 0 ? t.h = +n[3] : n[1] !== void 0 && n[2] !== void 0 && (t.h = xa(n[1], n[2])), n[4] !== void 0 && (t.s = Math.min(Math.max(0, n[4] / 100), 1)), n[5] !== void 0 && (t.l = Math.min(Math.max(0, n[5] / 100), 1)), n[6] !== void 0 ? t.alpha = Math.max(0, Math.min(1, n[6] / 100)) : n[7] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[7]))), t;
};
function wa(e, n) {
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
const Ir = {
  mode: "hsl",
  toMode: {
    rgb: ma
  },
  fromMode: {
    rgb: va
  },
  channels: ["h", "s", "l", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [wa, Ma],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: u, fixup: ee },
    s: u,
    l: u,
    alpha: { use: u, fixup: H }
  },
  difference: {
    h: bt
  },
  average: {
    h: te
  }
};
function qr({ h: e, s: n, v: t, alpha: r }) {
  e = C(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
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
function Fr({ r: e, g: n, b: t, alpha: r }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.max(e, n, t), a = Math.min(e, n, t), s = {
    mode: "hsv",
    s: i === 0 ? 0 : 1 - a / i,
    v: i
  };
  return i - a !== 0 && (s.h = (i === e ? (n - t) / (i - a) + (n < t) * 6 : i === n ? (t - e) / (i - a) + 2 : (e - n) / (i - a) + 4) * 60), r !== void 0 && (s.alpha = r), s;
}
const Rr = {
  mode: "hsv",
  toMode: {
    rgb: qr
  },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: {
    rgb: Fr
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
    alpha: { use: u, fixup: H }
  },
  difference: {
    h: bt
  },
  average: {
    h: te
  }
};
function ka({ h: e, w: n, b: t, alpha: r }) {
  if (n === void 0 && (n = 0), t === void 0 && (t = 0), n + t > 1) {
    let i = n + t;
    n /= i, t /= i;
  }
  return qr({
    h: e,
    s: t === 1 ? 1 : 1 - n / (1 - t),
    v: 1 - t,
    alpha: r
  });
}
function $a(e) {
  let n = Fr(e);
  if (n === void 0) return;
  let t = n.s !== void 0 ? n.s : 0, r = n.v !== void 0 ? n.v : 0, i = {
    mode: "hwb",
    w: (1 - t) * r,
    b: 1 - r
  };
  return n.h !== void 0 && (i.h = n.h), n.alpha !== void 0 && (i.alpha = n.alpha), i;
}
function za(e, n) {
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
const _a = {
  mode: "hwb",
  toMode: {
    rgb: ka
  },
  fromMode: {
    rgb: $a
  },
  channels: ["h", "w", "b", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [za],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: u, fixup: ee },
    w: u,
    b: u,
    alpha: { use: u, fixup: H }
  },
  difference: {
    h: da
  },
  average: {
    h: te
  }
}, Xr = 203, xt = 0.1593017578125, Or = 78.84375, yt = 0.8359375, Mt = 18.8515625, wt = 18.6875;
function Rt(e) {
  if (e < 0) return 0;
  const n = Math.pow(e, 1 / Or);
  return 1e4 * Math.pow(Math.max(0, n - yt) / (Mt - wt * n), 1 / xt);
}
function Xt(e) {
  if (e < 0) return 0;
  const n = Math.pow(e / 1e4, xt);
  return Math.pow((yt + Mt * n) / (1 + wt * n), Or);
}
const Ot = (e) => Math.max(e / Xr, 0), Wn = ({ i: e, t: n, p: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = Rt(
    e + 0.008609037037932761 * n + 0.11102962500302593 * t
  ), a = Rt(
    e - 0.00860903703793275 * n - 0.11102962500302599 * t
  ), s = Rt(
    e + 0.5600313357106791 * n - 0.32062717498731885 * t
  ), c = {
    mode: "xyz65",
    x: Ot(
      2.070152218389422 * i - 1.3263473389671556 * a + 0.2066510476294051 * s
    ),
    y: Ot(
      0.3647385209748074 * i + 0.680566024947227 * a - 0.0453045459220346 * s
    ),
    z: Ot(
      -0.049747207535812 * i - 0.0492609666966138 * a + 1.1880659249923042 * s
    )
  };
  return r !== void 0 && (c.alpha = r), c;
}, Dt = (e = 0) => Math.max(e * Xr, 0), Kn = ({ x: e, y: n, z: t, alpha: r }) => {
  const i = Dt(e), a = Dt(n), s = Dt(t), c = Xt(
    0.3592832590121217 * i + 0.6976051147779502 * a - 0.0358915932320289 * s
  ), p = Xt(
    -0.1920808463704995 * i + 1.1004767970374323 * a + 0.0753748658519118 * s
  ), f = Xt(
    0.0070797844607477 * i + 0.0748396662186366 * a + 0.8433265453898765 * s
  ), b = 0.5 * c + 0.5 * p, v = 1.61376953125 * c - 3.323486328125 * p + 1.709716796875 * f, m = 4.378173828125 * c - 4.24560546875 * p - 0.132568359375 * f, M = { mode: "itp", i: b, t: v, p: m };
  return r !== void 0 && (M.alpha = r), M;
}, Sa = {
  mode: "itp",
  channels: ["i", "t", "p", "alpha"],
  parse: ["--ictcp"],
  serialize: "--ictcp",
  toMode: {
    xyz65: Wn,
    rgb: (e) => be(Wn(e))
  },
  fromMode: {
    xyz65: Kn,
    rgb: (e) => Kn(fe(e))
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
    alpha: { use: u, fixup: H }
  }
}, La = 134.03437499999998, Ta = 16295499532821565e-27, jt = (e) => {
  if (e < 0) return 0;
  let n = Math.pow(e / 1e4, xt);
  return Math.pow((yt + Mt * n) / (1 + wt * n), La);
}, Zt = (e = 0) => Math.max(e * 203, 0), Dr = ({ x: e, y: n, z: t, alpha: r }) => {
  e = Zt(e), n = Zt(n), t = Zt(t);
  let i = 1.15 * e - 0.15 * t, a = 0.66 * n + 0.34 * e, s = jt(0.41478972 * i + 0.579999 * a + 0.014648 * t), c = jt(-0.20151 * i + 1.120649 * a + 0.0531008 * t), p = jt(-0.0166008 * i + 0.2648 * a + 0.6684799 * t), f = (s + c) / 2, b = {
    mode: "jab",
    j: 0.44 * f / (1 - 0.56 * f) - Ta,
    a: 3.524 * s - 4.066708 * c + 0.542708 * p,
    b: 0.199076 * s + 1.096799 * c - 1.295875 * p
  };
  return r !== void 0 && (b.alpha = r), b;
}, Ha = 134.03437499999998, Qn = 16295499532821565e-27, Yt = (e) => {
  if (e < 0) return 0;
  let n = Math.pow(e, 1 / Ha);
  return 1e4 * Math.pow((yt - n) / (wt * n - Mt), 1 / xt);
}, Bt = (e) => e / 203, jr = ({ j: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (e + Qn) / (0.44 + 0.56 * (e + Qn)), a = Yt(i + 0.13860504 * n + 0.058047316 * t), s = Yt(i - 0.13860504 * n - 0.058047316 * t), c = Yt(i - 0.096019242 * n - 0.8118919 * t), p = {
    mode: "xyz65",
    x: Bt(
      1.661373024652174 * a - 0.914523081304348 * s + 0.23136208173913045 * c
    ),
    y: Bt(
      -0.3250758611844533 * a + 1.571847026732543 * s - 0.21825383453227928 * c
    ),
    z: Bt(-0.090982811 * a - 0.31272829 * s + 1.5227666 * c)
  };
  return r !== void 0 && (p.alpha = r), p;
}, Zr = (e) => {
  let n = Dr(fe(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, Yr = (e) => be(jr(e)), Pa = {
  mode: "jab",
  channels: ["j", "a", "b", "alpha"],
  parse: ["--jzazbz"],
  serialize: "--jzazbz",
  fromMode: {
    rgb: Zr,
    xyz65: Dr
  },
  toMode: {
    rgb: Yr,
    xyz65: jr
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
    alpha: { use: u, fixup: H }
  }
}, er = ({ j: e, a: n, b: t, alpha: r }) => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.sqrt(n * n + t * t), a = {
    mode: "jch",
    j: e,
    c: i
  };
  return i && (a.h = C(Math.atan2(t, n) * 180 / Math.PI)), r !== void 0 && (a.alpha = r), a;
}, tr = ({ j: e, c: n, h: t, alpha: r }) => {
  t === void 0 && (t = 0);
  let i = {
    mode: "jab",
    j: e,
    a: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    b: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return r !== void 0 && (i.alpha = r), i;
}, Na = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: tr,
    rgb: (e) => Yr(tr(e))
  },
  fromMode: {
    rgb: (e) => er(Zr(e)),
    jab: er
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
    alpha: { use: u, fixup: H }
  },
  difference: {
    h: gt
  },
  average: {
    h: te
  }
}, kt = Math.pow(29, 3) / Math.pow(3, 3), Sn = Math.pow(6, 3) / Math.pow(29, 3);
let Gt = (e) => Math.pow(e, 3) > Sn ? Math.pow(e, 3) : (116 * e - 16) / kt;
const Ln = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (e + 16) / 116, a = n / 500 + i, s = i - t / 200, c = {
    mode: "xyz50",
    x: Gt(a) * T.X,
    y: Gt(i) * T.Y,
    z: Gt(s) * T.Z
  };
  return r !== void 0 && (c.alpha = r), c;
}, Ze = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = ze({
    r: e * 3.1341359569958707 - n * 1.6173863321612538 - 0.4906619460083532 * t,
    g: e * -0.978795502912089 + n * 1.916254567259524 + 0.03344273116131949 * t,
    b: e * 0.07195537988411677 - n * 0.2289768264158322 + 1.405386058324125 * t
  });
  return r !== void 0 && (i.alpha = r), i;
}, Br = (e) => Ze(Ln(e)), Ye = (e) => {
  let { r: n, g: t, b: r, alpha: i } = $e(e), a = {
    mode: "xyz50",
    x: 0.436065742824811 * n + 0.3851514688337912 * t + 0.14307845442264197 * r,
    y: 0.22249319175623702 * n + 0.7168870538238823 * t + 0.06061979053616537 * r,
    z: 0.013923904500943465 * n + 0.09708128566574634 * t + 0.7140993584005155 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, Vt = (e) => e > Sn ? Math.cbrt(e) : (kt * e + 16) / 116, Tn = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Vt(e / T.X), a = Vt(n / T.Y), s = Vt(t / T.Z), c = {
    mode: "lab",
    l: 116 * a - 16,
    a: 500 * (i - a),
    b: 200 * (a - s)
  };
  return r !== void 0 && (c.alpha = r), c;
}, Gr = (e) => {
  let n = Tn(Ye(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
};
function Ca(e, n) {
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
const Hn = {
  mode: "lab",
  toMode: {
    xyz50: Ln,
    rgb: Br
  },
  fromMode: {
    xyz50: Tn,
    rgb: Gr
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  },
  parse: [Ca],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: u,
    a: u,
    b: u,
    alpha: { use: u, fixup: H }
  }
}, Aa = {
  ...Hn,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: Nr,
    rgb: mt
  },
  fromMode: {
    xyz65: Cr,
    rgb: vt
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function Ea(e, n) {
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
const Pn = {
  mode: "lch",
  toMode: {
    lab: le,
    rgb: (e) => Br(le(e))
  },
  fromMode: {
    rgb: (e) => oe(Gr(e)),
    lab: oe
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  },
  parse: [Ea],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: u, fixup: ee },
    c: u,
    l: u,
    alpha: { use: u, fixup: H }
  },
  difference: {
    h: gt
  },
  average: {
    h: te
  }
}, Ia = {
  ...Pn,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => le(e, "lab65"),
    rgb: (e) => mt(le(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => oe(vt(e), "lch65"),
    lab65: (e) => oe(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, Vr = ({ l: e, u: n, v: t, alpha: r }) => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.sqrt(n * n + t * t), a = {
    mode: "lchuv",
    l: e,
    c: i
  };
  return i && (a.h = C(Math.atan2(t, n) * 180 / Math.PI)), r !== void 0 && (a.alpha = r), a;
}, Jr = ({ l: e, c: n, h: t, alpha: r }) => {
  t === void 0 && (t = 0);
  let i = {
    mode: "luv",
    l: e,
    u: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    v: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return r !== void 0 && (i.alpha = r), i;
}, Ur = (e, n, t) => 4 * e / (e + 15 * n + 3 * t), Wr = (e, n, t) => 9 * n / (e + 15 * n + 3 * t), qa = Ur(T.X, T.Y, T.Z), Fa = Wr(T.X, T.Y, T.Z), Ra = (e) => e <= Sn ? kt * e : 116 * Math.cbrt(e) - 16, hn = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Ra(n / T.Y), a = Ur(e, n, t), s = Wr(e, n, t);
  !isFinite(a) || !isFinite(s) ? i = a = s = 0 : (a = 13 * i * (a - qa), s = 13 * i * (s - Fa));
  let c = {
    mode: "luv",
    l: i,
    u: a,
    v: s
  };
  return r !== void 0 && (c.alpha = r), c;
}, Xa = (e, n, t) => 4 * e / (e + 15 * n + 3 * t), Oa = (e, n, t) => 9 * n / (e + 15 * n + 3 * t), Da = Xa(T.X, T.Y, T.Z), ja = Oa(T.X, T.Y, T.Z), un = ({ l: e, u: n, v: t, alpha: r }) => {
  if (e === void 0 && (e = 0), e === 0)
    return { mode: "xyz50", x: 0, y: 0, z: 0 };
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = n / (13 * e) + Da, a = t / (13 * e) + ja, s = T.Y * (e <= 8 ? e / kt : Math.pow((e + 16) / 116, 3)), c = s * (9 * i) / (4 * a), p = s * (12 - 3 * i - 20 * a) / (4 * a), f = { mode: "xyz50", x: c, y: s, z: p };
  return r !== void 0 && (f.alpha = r), f;
}, Za = (e) => Vr(hn(Ye(e))), Ya = (e) => Ze(un(Jr(e))), Ba = {
  mode: "lchuv",
  toMode: {
    luv: Jr,
    rgb: Ya
  },
  fromMode: {
    rgb: Za,
    luv: Vr
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
    alpha: { use: u, fixup: H }
  },
  difference: {
    h: gt
  },
  average: {
    h: te
  }
}, Ga = {
  ...ke,
  mode: "lrgb",
  toMode: {
    rgb: ze
  },
  fromMode: {
    rgb: $e
  },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, Va = {
  mode: "luv",
  toMode: {
    xyz50: un,
    rgb: (e) => Ze(un(e))
  },
  fromMode: {
    xyz50: hn,
    rgb: (e) => hn(Ye(e))
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
    alpha: { use: u, fixup: H }
  }
}, Kr = ({ r: e, g: n, b: t, alpha: r }) => {
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
}, $t = (e) => {
  let n = Kr($e(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, Be = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.pow(e + 0.3963377773761749 * n + 0.2158037573099136 * t, 3), a = Math.pow(e - 0.1055613458156586 * n - 0.0638541728258133 * t, 3), s = Math.pow(e - 0.0894841775298119 * n - 1.2914855480194092 * t, 3), c = {
    mode: "lrgb",
    r: 4.076741636075957 * i - 3.3077115392580616 * a + 0.2309699031821044 * s,
    g: -1.2684379732850317 * i + 2.6097573492876887 * a - 0.3413193760026573 * s,
    b: -0.0041960761386756 * i - 0.7034186179359362 * a + 1.7076146940746117 * s
  };
  return r !== void 0 && (c.alpha = r), c;
}, zt = (e) => ze(Be(e));
function fn(e) {
  const r = 1.170873786407767;
  return 0.5 * (r * e - 0.206 + Math.sqrt((r * e - 0.206) * (r * e - 0.206) + 4 * 0.03 * r * e));
}
function ht(e) {
  return (e * e + 0.206 * e) / (1.170873786407767 * (e + 0.03));
}
function Ja(e, n) {
  let t, r, i, a, s, c, p, f;
  -1.88170328 * e - 0.80936493 * n > 1 ? (t = 1.19086277, r = 1.76576728, i = 0.59662641, a = 0.75515197, s = 0.56771245, c = 4.0767416621, p = -3.3077115913, f = 0.2309699292) : 1.81444104 * e - 1.19445276 * n > 1 ? (t = 0.73956515, r = -0.45954404, i = 0.08285427, a = 0.1254107, s = 0.14503204, c = -1.2684380046, p = 2.6097574011, f = -0.3413193965) : (t = 1.35733652, r = -915799e-8, i = -1.1513021, a = -0.50559606, s = 692167e-8, c = -0.0041960863, p = -0.7034186147, f = 1.707614701);
  let b = t + r * e + i * n + a * e * e + s * e * n, v = 0.3963377774 * e + 0.2158037573 * n, m = -0.1055613458 * e - 0.0638541728 * n, M = -0.0894841775 * e - 1.291485548 * n;
  {
    let L = 1 + b * v, $ = 1 + b * m, _ = 1 + b * M, N = L * L * L, z = $ * $ * $, F = _ * _ * _, Se = 3 * v * L * L, Le = 3 * m * $ * $, Te = 3 * M * _ * _, He = 6 * v * v * L, Pe = 6 * m * m * $, Ne = 6 * M * M * _, ge = c * N + p * z + f * F, ce = c * Se + p * Le + f * Te, Ce = c * He + p * Pe + f * Ne;
    b = b - ge * ce / (ce * ce - 0.5 * ge * Ce);
  }
  return b;
}
function Nn(e, n) {
  let t = Ja(e, n), r = Be({ l: 1, a: t * e, b: t * n }), i = Math.cbrt(1 / Math.max(r.r, r.g, r.b)), a = i * t;
  return [i, a];
}
function Ua(e, n, t, r, i, a = null) {
  a || (a = Nn(e, n));
  let s;
  if ((t - i) * a[1] - (a[0] - i) * r <= 0)
    s = a[1] * i / (r * a[0] + a[1] * (i - t));
  else {
    s = a[1] * (i - 1) / (r * (a[0] - 1) + a[1] * (i - t));
    {
      let c = t - i, p = r, f = 0.3963377774 * e + 0.2158037573 * n, b = -0.1055613458 * e - 0.0638541728 * n, v = -0.0894841775 * e - 1.291485548 * n, m = c + p * f, M = c + p * b, L = c + p * v;
      {
        let $ = i * (1 - s) + s * t, _ = s * r, N = $ + _ * f, z = $ + _ * b, F = $ + _ * v, Se = N * N * N, Le = z * z * z, Te = F * F * F, He = 3 * m * N * N, Pe = 3 * M * z * z, Ne = 3 * L * F * F, ge = 6 * m * m * N, ce = 6 * M * M * z, Ce = 6 * L * L * F, In = 4.0767416621 * Se - 3.3077115913 * Le + 0.2309699292 * Te - 1, _t = 4.0767416621 * He - 3.3077115913 * Pe + 0.2309699292 * Ne, Ni = 4.0767416621 * ge - 3.3077115913 * ce + 0.2309699292 * Ce, qn = _t / (_t * _t - 0.5 * In * Ni), St = -In * qn, Fn = -1.2684380046 * Se + 2.6097574011 * Le - 0.3413193965 * Te - 1, Lt = -1.2684380046 * He + 2.6097574011 * Pe - 0.3413193965 * Ne, Ci = -1.2684380046 * ge + 2.6097574011 * ce - 0.3413193965 * Ce, Rn = Lt / (Lt * Lt - 0.5 * Fn * Ci), Tt = -Fn * Rn, Xn = -0.0041960863 * Se - 0.7034186147 * Le + 1.707614701 * Te - 1, Ht = -0.0041960863 * He - 0.7034186147 * Pe + 1.707614701 * Ne, Ai = -0.0041960863 * ge - 0.7034186147 * ce + 1.707614701 * Ce, On = Ht / (Ht * Ht - 0.5 * Xn * Ai), Pt = -Xn * On;
        St = qn >= 0 ? St : 1e6, Tt = Rn >= 0 ? Tt : 1e6, Pt = On >= 0 ? Pt : 1e6, s += Math.min(St, Math.min(Tt, Pt));
      }
    }
  }
  return s;
}
function Cn(e, n, t = null) {
  t || (t = Nn(e, n));
  let r = t[0], i = t[1];
  return [i / r, i / (1 - r)];
}
function Qr(e, n, t) {
  let r = Nn(n, t), i = Ua(n, t, e, 1, e, r), a = Cn(n, t, r), s = 0.11516993 + 1 / (7.4477897 + 4.1590124 * t + n * (-2.19557347 + 1.75198401 * t + n * (-2.13704948 - 10.02301043 * t + n * (-4.24894561 + 5.38770819 * t + 4.69891013 * n)))), c = 0.11239642 + 1 / (1.6132032 - 0.68124379 * t + n * (0.40370612 + 0.90148123 * t + n * (-0.27087943 + 0.6122399 * t + n * (299215e-8 - 0.45399568 * t - 0.14661872 * n)))), p = i / Math.min(e * a[0], (1 - e) * a[1]), f = e * s, b = (1 - e) * c, v = 0.9 * p * Math.sqrt(
    Math.sqrt(
      1 / (1 / (f * f * f * f) + 1 / (b * b * b * b))
    )
  );
  return f = e * 0.4, b = (1 - e) * 0.8, [Math.sqrt(1 / (1 / (f * f) + 1 / (b * b))), v, i];
}
function nr(e) {
  const n = e.l !== void 0 ? e.l : 0, t = e.a !== void 0 ? e.a : 0, r = e.b !== void 0 ? e.b : 0, i = { mode: "okhsl", l: fn(n) };
  e.alpha !== void 0 && (i.alpha = e.alpha);
  let a = Math.sqrt(t * t + r * r);
  if (!a)
    return i.s = 0, i;
  let [s, c, p] = Qr(n, t / a, r / a), f;
  if (a < c) {
    let b = 0, v = 0.8 * s, m = 1 - v / c;
    f = (a - b) / (v + m * (a - b)) * 0.8;
  } else {
    let b = c, v = 0.2 * c * c * 1.25 * 1.25 / s, m = 1 - v / (p - c);
    f = 0.8 + 0.2 * ((a - b) / (v + m * (a - b)));
  }
  return f && (i.s = f, i.h = C(Math.atan2(r, t) * 180 / Math.PI)), i;
}
function rr(e) {
  let n = e.h !== void 0 ? e.h : 0, t = e.s !== void 0 ? e.s : 0, r = e.l !== void 0 ? e.l : 0;
  const i = { mode: "oklab", l: ht(r) };
  if (e.alpha !== void 0 && (i.alpha = e.alpha), !t || r === 1)
    return i.a = i.b = 0, i;
  let a = Math.cos(n / 180 * Math.PI), s = Math.sin(n / 180 * Math.PI), [c, p, f] = Qr(i.l, a, s), b, v, m, M;
  t < 0.8 ? (b = 1.25 * t, v = 0, m = 0.8 * c, M = 1 - m / p) : (b = 5 * (t - 0.8), v = p, m = 0.2 * p * p * 1.25 * 1.25 / c, M = 1 - m / (f - p));
  let L = v + b * m / (1 - M * b);
  return i.a = L * a, i.b = L * s, i;
}
const Wa = {
  ...Ir,
  mode: "okhsl",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--okhsl"],
  serialize: "--okhsl",
  fromMode: {
    oklab: nr,
    rgb: (e) => nr($t(e))
  },
  toMode: {
    oklab: rr,
    rgb: (e) => zt(rr(e))
  }
};
function ir(e) {
  let n = e.l !== void 0 ? e.l : 0, t = e.a !== void 0 ? e.a : 0, r = e.b !== void 0 ? e.b : 0, i = Math.sqrt(t * t + r * r), a = i ? t / i : 1, s = i ? r / i : 1, [c, p] = Cn(a, s), f = 0.5, b = 1 - f / c, v = p / (i + n * p), m = v * n, M = v * i, L = ht(m), $ = M * L / m, _ = Be({ l: L, a: a * $, b: s * $ }), N = Math.cbrt(
    1 / Math.max(_.r, _.g, _.b, 0)
  );
  n = n / N, i = i / N * fn(n) / n, n = fn(n);
  const z = {
    mode: "okhsv",
    s: i ? (f + p) * M / (p * f + p * b * M) : 0,
    v: n ? n / m : 0
  };
  return z.s && (z.h = C(Math.atan2(r, t) * 180 / Math.PI)), e.alpha !== void 0 && (z.alpha = e.alpha), z;
}
function ar(e) {
  const n = { mode: "oklab" };
  e.alpha !== void 0 && (n.alpha = e.alpha);
  const t = e.h !== void 0 ? e.h : 0, r = e.s !== void 0 ? e.s : 0, i = e.v !== void 0 ? e.v : 0, a = Math.cos(t / 180 * Math.PI), s = Math.sin(t / 180 * Math.PI), [c, p] = Cn(a, s), f = 0.5, b = 1 - f / c, v = 1 - r * f / (f + p - p * b * r), m = r * p * f / (f + p - p * b * r), M = ht(v), L = m * M / v, $ = Be({
    l: M,
    a: a * L,
    b: s * L
  }), _ = Math.cbrt(
    1 / Math.max($.r, $.g, $.b, 0)
  ), N = ht(i * v), z = m * N / v;
  return n.l = N * _, n.a = z * a * _, n.b = z * s * _, n;
}
const Ka = {
  ...Rr,
  mode: "okhsv",
  channels: ["h", "s", "v", "alpha"],
  parse: ["--okhsv"],
  serialize: "--okhsv",
  fromMode: {
    oklab: ir,
    rgb: (e) => ir($t(e))
  },
  toMode: {
    oklab: ar,
    rgb: (e) => zt(ar(e))
  }
};
function Qa(e, n) {
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
const e0 = {
  ...Hn,
  mode: "oklab",
  toMode: {
    lrgb: Be,
    rgb: zt
  },
  fromMode: {
    lrgb: Kr,
    rgb: $t
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [Qa],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function t0(e, n) {
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
const n0 = {
  ...Pn,
  mode: "oklch",
  toMode: {
    oklab: (e) => le(e, "oklab"),
    rgb: (e) => zt(le(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => oe($t(e), "oklch"),
    oklab: (e) => oe(e, "oklch")
  },
  parse: [t0],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, sr = (e) => {
  let { r: n, g: t, b: r, alpha: i } = $e(e), a = {
    mode: "xyz65",
    x: 0.486570948648216 * n + 0.265667693169093 * t + 0.1982172852343625 * r,
    y: 0.2289745640697487 * n + 0.6917385218365062 * t + 0.079286914093745 * r,
    z: 0 * n + 0.0451133818589026 * t + 1.043944368900976 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, or = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = ze(
    {
      r: e * 2.4934969119414263 - n * 0.9313836179191242 - 0.402710784450717 * t,
      g: e * -0.8294889695615749 + n * 1.7626640603183465 + 0.0236246858419436 * t,
      b: e * 0.0358458302437845 - n * 0.0761723892680418 + 0.9568845240076871 * t
    },
    "p3"
  );
  return r !== void 0 && (i.alpha = r), i;
}, r0 = {
  ...ke,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => or(fe(e)),
    xyz65: or
  },
  toMode: {
    rgb: (e) => be(sr(e)),
    xyz65: sr
  }
}, Jt = (e) => {
  let n = Math.abs(e);
  return n >= 1 / 512 ? Math.sign(e) * Math.pow(n, 1 / 1.8) : 16 * e;
}, lr = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "prophoto",
    r: Jt(
      e * 1.3457868816471585 - n * 0.2555720873797946 - 0.0511018649755453 * t
    ),
    g: Jt(
      e * -0.5446307051249019 + n * 1.5082477428451466 + 0.0205274474364214 * t
    ),
    b: Jt(e * 0 + n * 0 + 1.2119675456389452 * t)
  };
  return r !== void 0 && (i.alpha = r), i;
}, Ut = (e = 0) => {
  let n = Math.abs(e);
  return n >= 16 / 512 ? Math.sign(e) * Math.pow(n, 1.8) : e / 16;
}, cr = (e) => {
  let n = Ut(e.r), t = Ut(e.g), r = Ut(e.b), i = {
    mode: "xyz50",
    x: 0.7977666449006423 * n + 0.1351812974005331 * t + 0.0313477341283922 * r,
    y: 0.2880748288194013 * n + 0.7118352342418731 * t + 899369387256e-16 * r,
    z: 0 * n + 0 * t + 0.8251046025104602 * r
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, i0 = {
  ...ke,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: lr,
    rgb: (e) => lr(Ye(e))
  },
  toMode: {
    xyz50: cr,
    rgb: (e) => Ze(cr(e))
  }
}, dr = 1.09929682680944, a0 = 0.018053968510807, Wt = (e) => {
  const n = Math.abs(e);
  return n > a0 ? (Math.sign(e) || 1) * (dr * Math.pow(n, 0.45) - (dr - 1)) : 4.5 * e;
}, pr = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "rec2020",
    r: Wt(
      e * 1.7166511879712683 - n * 0.3556707837763925 - 0.2533662813736599 * t
    ),
    g: Wt(
      e * -0.6666843518324893 + n * 1.6164812366349395 + 0.0157685458139111 * t
    ),
    b: Wt(
      e * 0.0176398574453108 - n * 0.0427706132578085 + 0.9421031212354739 * t
    )
  };
  return r !== void 0 && (i.alpha = r), i;
}, hr = 1.09929682680944, s0 = 0.018053968510807, Kt = (e = 0) => {
  let n = Math.abs(e);
  return n < s0 * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((n + hr - 1) / hr, 1 / 0.45);
}, ur = (e) => {
  let n = Kt(e.r), t = Kt(e.g), r = Kt(e.b), i = {
    mode: "xyz65",
    x: 0.6369580483012911 * n + 0.1446169035862083 * t + 0.1688809751641721 * r,
    y: 0.262700212011267 * n + 0.6779980715188708 * t + 0.059301716469862 * r,
    z: 0 * n + 0.0280726930490874 * t + 1.0609850577107909 * r
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, o0 = {
  ...ke,
  mode: "rec2020",
  fromMode: {
    xyz65: pr,
    rgb: (e) => pr(fe(e))
  },
  toMode: {
    xyz65: ur,
    rgb: (e) => be(ur(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, pe = 0.0037930732552754493, ei = Math.cbrt(pe), Qt = (e) => Math.cbrt(e) - ei, l0 = (e) => {
  const { r: n, g: t, b: r, alpha: i } = $e(e), a = Qt(0.3 * n + 0.622 * t + 0.078 * r + pe), s = Qt(0.23 * n + 0.692 * t + 0.078 * r + pe), c = Qt(
    0.2434226892454782 * n + 0.2047674442449682 * t + 0.5518098665095535 * r + pe
  ), p = {
    mode: "xyb",
    x: (a - s) / 2,
    y: (a + s) / 2,
    /* Apply default chroma from luma (subtract Y from B) */
    b: c - (a + s) / 2
  };
  return i !== void 0 && (p.alpha = i), p;
}, en = (e) => Math.pow(e + ei, 3), c0 = ({ x: e, y: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = en(e + n) - pe, a = en(n - e) - pe, s = en(t + n) - pe, c = ze({
    r: 11.031566904639861 * i - 9.866943908131562 * a - 0.16462299650829934 * s,
    g: -3.2541473810744237 * i + 4.418770377582723 * a - 0.16462299650829934 * s,
    b: -3.6588512867136815 * i + 2.7129230459360922 * a + 1.9459282407775895 * s
  });
  return r !== void 0 && (c.alpha = r), c;
}, d0 = {
  mode: "xyb",
  channels: ["x", "y", "b", "alpha"],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: {
    rgb: c0
  },
  fromMode: {
    rgb: l0
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
    alpha: { use: u, fixup: H }
  }
}, p0 = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: Ze,
    lab: Tn
  },
  fromMode: {
    rgb: Ye,
    lab: Ln
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
    alpha: { use: u, fixup: H }
  }
}, h0 = (e) => {
  let { x: n, y: t, z: r, alpha: i } = e;
  n === void 0 && (n = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = {
    mode: "xyz50",
    x: 1.0479298208405488 * n + 0.0229467933410191 * t - 0.0501922295431356 * r,
    y: 0.0296278156881593 * n + 0.990434484573249 * t - 0.0170738250293851 * r,
    z: -0.0092430581525912 * n + 0.0150551448965779 * t + 0.7518742899580008 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, u0 = (e) => {
  let { x: n, y: t, z: r, alpha: i } = e;
  n === void 0 && (n = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = {
    mode: "xyz65",
    x: 0.9554734527042182 * n - 0.0230985368742614 * t + 0.0632593086610217 * r,
    y: -0.0283697069632081 * n + 1.0099954580058226 * t + 0.021041398966943 * r,
    z: 0.0123140016883199 * n - 0.0205076964334779 * t + 1.3303659366080753 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, f0 = {
  mode: "xyz65",
  toMode: {
    rgb: be,
    xyz50: h0
  },
  fromMode: {
    rgb: fe,
    xyz50: u0
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
    alpha: { use: u, fixup: H }
  }
}, b0 = ({ r: e, g: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * n + 0.11448223 * t,
    i: 0.59597799 * e - 0.2741761 * n - 0.32180189 * t,
    q: 0.21147017 * e - 0.52261711 * n + 0.31114694 * t
  };
  return r !== void 0 && (i.alpha = r), i;
}, g0 = ({ y: e, i: n, q: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = {
    mode: "rgb",
    r: e + 0.95608445 * n + 0.6208885 * t,
    g: e - 0.27137664 * n - 0.6486059 * t,
    b: e - 1.10561724 * n + 1.70250126 * t
  };
  return r !== void 0 && (i.alpha = r), i;
}, m0 = {
  mode: "yiq",
  toMode: {
    rgb: g0
  },
  fromMode: {
    rgb: b0
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
    alpha: { use: u, fixup: H }
  }
}, v0 = (e) => Math.max(0, Math.min(1, e || 0)), tn = (e) => Math.round(v0(e) * 255), x0 = O("rgb"), y0 = (e) => {
  if (e === void 0)
    return;
  let n = tn(e.r), t = tn(e.g), r = tn(e.b);
  return "#" + (1 << 24 | n << 16 | t << 8 | r).toString(16).slice(1);
}, M0 = (e) => y0(x0(e)), ti = O("rgb"), ni = (e) => {
  const n = {
    mode: e.mode,
    r: Math.max(0, Math.min(e.r !== void 0 ? e.r : 0, 1)),
    g: Math.max(0, Math.min(e.g !== void 0 ? e.g : 0, 1)),
    b: Math.max(0, Math.min(e.b !== void 0 ? e.b : 0, 1))
  };
  return e.alpha !== void 0 && (n.alpha = e.alpha), n;
}, w0 = (e) => ni(ti(e)), ri = (e) => e !== void 0 && (e.r === void 0 || e.r >= 0 && e.r <= 1) && (e.g === void 0 || e.g >= 0 && e.g <= 1) && (e.b === void 0 || e.b >= 0 && e.b <= 1);
function k0(e) {
  return ri(ti(e));
}
function ii(e = "rgb") {
  const { gamut: n } = ft(e);
  if (!n)
    return (r) => !0;
  const t = O(typeof n == "string" ? n : e);
  return (r) => ri(t(r));
}
function $0(e = "rgb") {
  const { gamut: n } = ft(e);
  if (!n)
    return (a) => st(a);
  const t = typeof n == "string" ? n : e, r = O(t), i = ii(t);
  return (a) => {
    const s = st(a);
    if (!s)
      return;
    const c = r(s);
    if (i(c))
      return s;
    const p = ni(c);
    return s.mode === p.mode ? p : O(s.mode)(p);
  };
}
function z0(e, n = "lch", t = "rgb") {
  e = st(e);
  let r = t === "rgb" ? k0 : ii(t), i = t === "rgb" ? w0 : $0(t);
  if (e === void 0 || r(e)) return e;
  let a = O(e.mode);
  e = O(n)(e);
  let s = { ...e, c: 0 };
  if (!r(s))
    return a(i(s));
  let c = 0, p = e.c !== void 0 ? e.c : 0, f = ft(n).ranges.c, b = (f[1] - f[0]) / Math.pow(2, 13), v = s.c;
  for (; p - c > b; )
    s.c = c + (p - c) * 0.5, r(s) ? (v = s.c, c = s.c) : p = s.c;
  return a(
    r(s) ? s : { ...s, c: v }
  );
}
w(ia);
w(pa);
w(ha);
w(ua);
w(ga);
w(Ir);
w(Rr);
w(_a);
w(Sa);
w(Pa);
w(Na);
w(Hn);
w(Aa);
w(Pn);
w(Ia);
w(Ba);
w(Ga);
w(Va);
w(Wa);
w(Ka);
w(e0);
const An = w(n0);
w(r0);
w(i0);
w(o0);
w(ke);
w(d0);
w(p0);
w(f0);
w(m0);
const _0 = O("rgb");
function fr(e, n) {
  const t = e.getContext("2d", { willReadFrequently: !0 });
  if (!t) return;
  const { width: r, height: i } = e, a = t.createImageData(r, i), s = a.data;
  for (let c = 0; c < i; c++) {
    const p = 1 - c / (i - 1 || 1);
    for (let f = 0; f < r; f++) {
      const b = f / (r - 1 || 1), v = _0({ mode: "hsv", h: n, s: b, v: p, alpha: 1 }), m = (c * r + f) * 4;
      if (!v) {
        s[m] = s[m + 1] = s[m + 2] = 0, s[m + 3] = 255;
        continue;
      }
      s[m] = Math.round(nn((v.r ?? 0) * 255)), s[m + 1] = Math.round(nn((v.g ?? 0) * 255)), s[m + 2] = Math.round(nn((v.b ?? 0) * 255)), s[m + 3] = 255;
    }
  }
  t.putImageData(a, 0, 0);
}
function nn(e) {
  return Math.min(255, Math.max(0, e));
}
const _e = O("rgb"), En = O("hsv"), S0 = O("hsl"), br = 0.7, gr = /* @__PURE__ */ new Map();
function q(e) {
  const n = ue(e.l ?? 0), t = Math.max(0, e.c ?? 0), r = Q(e.h ?? 0), i = ue(e.alpha ?? 1), a = z0({ mode: "oklch", l: n, c: t, h: r, alpha: i }, "rgb"), s = t < 1e-4;
  return {
    l: a.l ?? n,
    c: s ? 0 : a.c ?? 0,
    h: r,
    alpha: a.alpha ?? i
  };
}
function he(e) {
  const n = Tr(e.trim());
  if (!n) return null;
  const t = An(n);
  return (t == null ? void 0 : t.l) == null ? null : q({
    l: t.l,
    c: t.c ?? 0,
    h: t.h ?? 0,
    alpha: t.alpha ?? 1
  });
}
function mr(e) {
  const { l: n, c: t, h: r, alpha: i } = e;
  return i >= 1 ? `oklch(${(n * 100).toFixed(1)}% ${t.toFixed(4)} ${r.toFixed(1)})` : `oklch(${(n * 100).toFixed(1)}% ${t.toFixed(4)} ${r.toFixed(1)} / ${Math.round(i * 100)}%)`;
}
function Re(e) {
  return M0(_e({ mode: "oklch", ...e })) ?? "#000000";
}
function J0(e) {
  const { r: n, g: t, b: r } = Xe(e);
  return e.alpha < 1 ? `rgba(${n}, ${t}, ${r}, ${e.alpha.toFixed(2)})` : `rgb(${n}, ${t}, ${r})`;
}
function Xe(e) {
  const n = _e({ mode: "oklch", ...e, alpha: 1 });
  return n ? {
    r: Math.round((n.r ?? 0) * 255),
    g: Math.round((n.g ?? 0) * 255),
    b: Math.round((n.b ?? 0) * 255)
  } : { r: 0, g: 0, b: 0 };
}
function L0(e) {
  const n = Q(Math.max(0, Math.min(1, e)) * 360), t = C0(br, n);
  return Xe(q({ l: br, c: t, h: n, alpha: 1 }));
}
function T0(e) {
  const { r: n, g: t, b: r } = Xe(e);
  return `linear-gradient(to right, rgba(${n}, ${t}, ${r}, 0), rgb(${n}, ${t}, ${r}))`;
}
function H0(e) {
  if (e.c < 1e-4) return Q(e.h);
  const n = En({ mode: "oklch", ...e, alpha: 1 });
  return Q((n == null ? void 0 : n.h) ?? e.h);
}
function ai(e, n) {
  const t = Q(n), r = En({ mode: "oklch", ...e, alpha: 1 }), i = _e({
    mode: "hsv",
    h: t,
    s: (r == null ? void 0 : r.s) ?? 0,
    v: (r == null ? void 0 : r.v) ?? 1,
    alpha: 1
  }), a = An(
    i ?? { mode: "hsv", h: t, s: (r == null ? void 0 : r.s) ?? 0, v: (r == null ? void 0 : r.v) ?? 1 }
  );
  return (a == null ? void 0 : a.l) != null ? q({
    l: a.l,
    c: a.c ?? 0,
    h: a.h ?? t,
    alpha: e.alpha
  }) : q({ ...e, h: t });
}
function Ue(e, n) {
  switch (n) {
    case "hex":
      return [{ key: "hex", label: "HEX CODE", value: Re(e).replace("#", "").toUpperCase() }];
    case "rgb": {
      const t = _e({ mode: "oklch", ...e });
      return [
        { key: "r", label: "R", value: String(Math.round((t.r ?? 0) * 255)), min: 0, max: 255 },
        { key: "g", label: "G", value: String(Math.round((t.g ?? 0) * 255)), min: 0, max: 255 },
        { key: "b", label: "B", value: String(Math.round((t.b ?? 0) * 255)), min: 0, max: 255 }
      ];
    }
    case "hsl": {
      const t = S0({ mode: "oklch", ...e });
      return [
        { key: "h", label: "H", value: String(Math.round((t == null ? void 0 : t.h) ?? 0)), min: 0, max: 360, scrubStep: 3 },
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
function P0(e, n, t) {
  var f, b, v;
  const r = e.alpha, i = Ue(e, "hsl"), a = n === "h" ? Q(t) : Number(((f = i.find((m) => m.key === "h")) == null ? void 0 : f.value) ?? 0);
  let s = n === "s" ? t : Number(((b = i.find((m) => m.key === "s")) == null ? void 0 : b.value) ?? 0);
  const c = n === "l" ? t : Number(((v = i.find((m) => m.key === "l")) == null ? void 0 : v.value) ?? 0);
  n === "h" && s < 1 && (s = 1);
  const p = he(`hsl(${a}, ${ut(s)}%, ${ut(c)}%)`);
  return p ? { ...p, alpha: r } : e;
}
function N0(e, n, t) {
  switch (n) {
    case "l":
      return q({ ...e, l: t / 100 });
    case "c":
      return q({ ...e, c: t });
    case "h":
      return ai(e, t);
  }
}
function vr(e, n, t) {
  switch (e) {
    case "hex": {
      const r = (n.hex ?? "").trim().replace(/^#/, "");
      if (!/^[0-9a-fA-F]{3,8}$/.test(r)) return null;
      const i = he(`#${r}`);
      return i ? rn(i, t.alpha) : null;
    }
    case "rgb": {
      const r = Number(n.r), i = Number(n.g), a = Number(n.b);
      if ([r, i, a].some((c) => Number.isNaN(c))) return null;
      const s = he(`rgb(${an(r)}, ${an(i)}, ${an(a)})`);
      return s ? rn(s, t.alpha) : null;
    }
    case "hsl": {
      const r = sn(n.h), i = sn(n.s), a = sn(n.l);
      if ([r, i, a].some((c) => Number.isNaN(c))) return null;
      const s = he(`hsl(${r}, ${ut(i)}%, ${ut(a)}%)`);
      return s ? rn(s, t.alpha) : null;
    }
    case "oklch": {
      const r = Number(n.l);
      let i = Number(n.c), a = Number(n.h);
      return [r, i, a].some((s) => Number.isNaN(s)) ? null : (i <= 0 && (i = 0, t.c > 1e-4 && (a = t.h)), q({ l: r / 100, c: i, h: a, alpha: t.alpha }));
    }
  }
}
function C0(e, n) {
  const t = `${e.toFixed(3)}:${Q(n).toFixed(1)}`, r = gr.get(t);
  if (r != null) return r;
  let i = 0;
  for (let s = 0; s <= 0.45; s += 5e-3) {
    const c = _e({ mode: "oklch", l: e, c: s, h: Q(n), alpha: 1 });
    if (!c) break;
    const { r: p = 0, g: f = 0, b = 0 } = c;
    if (p < 0 || p > 1 || f < 0 || f > 1 || b < 0 || b > 1) break;
    i = s;
  }
  const a = Math.max(i, 1e-3);
  return gr.set(t, a), a;
}
function xr(e) {
  const n = En({ mode: "oklch", ...e, alpha: 1 });
  return {
    x: ue((n == null ? void 0 : n.s) ?? 0),
    y: ue(1 - ((n == null ? void 0 : n.v) ?? 0))
  };
}
function A0(e, n, t, r) {
  const i = ue(e), a = ue(n), s = Q(t), c = An(
    _e({ mode: "hsv", h: s, s: i, v: 1 - a, alpha: 1 }) ?? {
      mode: "hsv",
      h: s,
      s: i,
      v: 1 - a
    }
  );
  return (c == null ? void 0 : c.l) != null ? q({
    l: c.l,
    c: c.c ?? 0,
    h: c.h ?? s,
    alpha: r
  }) : q({ l: 0.5, c: 0, h: s, alpha: r });
}
function rn(e, n) {
  return { ...e, alpha: ue(n) };
}
function ue(e) {
  return Math.min(1, Math.max(0, e));
}
function an(e) {
  return Math.min(255, Math.max(0, Math.round(e)));
}
function ut(e) {
  return Math.min(100, Math.max(0, e));
}
function sn(e) {
  return Number(e.replace(/%/g, "").trim());
}
function Q(e) {
  return Math.min(360, Math.max(0, e));
}
const yr = {
  l: 0.62,
  c: 0.24,
  h: 303,
  alpha: 0.8
}, si = "pretty-color-picker-history", oi = 16;
function li(e, n) {
  return Re(e) === Re(n) && e.alpha === n.alpha;
}
function E0() {
  try {
    const e = localStorage.getItem(si);
    if (!e) return [];
    const n = JSON.parse(e);
    return Array.isArray(n) ? n.slice(0, oi) : [];
  } catch {
    return [];
  }
}
function I0(e, n) {
  const t = n.filter((i) => !li(i, e)), r = [e, ...t].slice(0, oi);
  try {
    localStorage.setItem(si, JSON.stringify(r));
  } catch {
  }
  return r;
}
const q0 = "#ededed", F0 = "#171717", R0 = 0.52;
function X0(e, n, t) {
  const r = [e, n, t].map((i) => {
    const a = i / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2];
}
function O0(e, n, t) {
  return X0(e, n, t) > R0 ? F0 : q0;
}
function Mr(e) {
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
function D0(e, n, t, r) {
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
function wr(e, n) {
  const t = n.getBoundingClientRect(), r = $r((e.clientX - t.left) / t.width), i = $r((e.clientY - t.top) / t.height);
  return { x: r, y: i };
}
function kr(e, n) {
  let t = !1, r = null;
  const i = (c) => {
    if (!t || r == null) return;
    const p = c.clientX - r;
    r = c.clientX, p !== 0 && n.onDelta(p, c);
  }, a = (c) => {
    var p;
    if (t) {
      if (t = !1, r = null, c.pointerId != null)
        try {
          e.releasePointerCapture(c.pointerId);
        } catch {
        }
      window.removeEventListener("pointermove", i), window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", a), (p = n.onEnd) == null || p.call(n, c);
    }
  }, s = (c) => {
    var p;
    c.button === 0 && (c.preventDefault(), t = !0, r = c.clientX, e.setPointerCapture(c.pointerId), (p = n.onStart) == null || p.call(n, c), window.addEventListener("pointermove", i), window.addEventListener("pointerup", a), window.addEventListener("pointercancel", a));
  };
  return e.addEventListener("pointerdown", s), () => {
    e.removeEventListener("pointerdown", s), window.removeEventListener("pointermove", i), window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", a);
  };
}
function on(e, n, t, r) {
  let i = !1;
  const a = (p) => {
    if (!i) return;
    const { x: f, y: b } = wr(p, e);
    n(f, b);
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
    const { x: f, y: b } = wr(p, e);
    n(f, b), window.addEventListener("pointermove", a), window.addEventListener("pointerup", s), window.addEventListener("pointercancel", s);
  };
  return e.addEventListener("pointerdown", c), () => {
    e.removeEventListener("pointerdown", c), window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", s);
  };
}
function $r(e) {
  return Math.min(1, Math.max(0, e));
}
const Je = 48;
function j0(e, n) {
  const t = (r) => {
    if (r.button !== 0 || r.target.closest(".pcp-header-btn")) return;
    r.preventDefault();
    const a = n.getBoundingClientRect(), s = r.clientX - a.left, c = r.clientY - a.top;
    e.dataset.dragging = "true", e.setPointerCapture(r.pointerId);
    const p = (b) => {
      ci(n, b.clientX - s, b.clientY - c);
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
function Z0(e) {
  const n = e.offsetWidth, t = e.offsetHeight;
  ci(
    e,
    (window.innerWidth - n) / 2,
    (window.innerHeight - t) / 2
  );
}
function ci(e, n, t) {
  const r = e.offsetWidth, i = e.offsetHeight, a = window.innerWidth - Je, s = window.innerHeight - Je, c = Je - r, p = Je - i;
  e.style.left = `${Math.min(a, Math.max(c, n))}px`, e.style.top = `${Math.min(s, Math.max(p, t))}px`;
}
const Y0 = ["hex", "rgb", "hsl", "oklch"], B0 = {
  hex: "HEX",
  rgb: "RGB",
  hsl: "HSL",
  oklch: "OKLCH"
};
var S, y, A, G, ve, I, xe, Oe, R, V, E, J, De, X, ye, U, je, D, ne, Me, re, W, ie, K, ae, o, di, pi, hi, bn, gn, Z, mn, ui, We, vn, fi, bi, gi, mi, Ke, Ee, vi, xi, yi, Mi, Qe, xn, yn, wi, ki, $i, zi, _i, Si, Li, Y, Ie, Mn, wn, de, et, tt, nt, kn, Ti, $n, Hi, rt, it, zn, at, B, Pi;
class G0 extends HTMLElement {
  constructor() {
    super();
    k(this, o);
    k(this, S);
    k(this, y, { ...yr });
    k(this, A, "hsl");
    k(this, G, E0());
    k(this, ve, null);
    k(this, I, []);
    k(this, xe);
    k(this, Oe);
    k(this, R);
    k(this, V);
    k(this, E);
    k(this, J);
    k(this, De);
    k(this, X);
    k(this, ye);
    k(this, U);
    k(this, je);
    k(this, D);
    k(this, ne);
    k(this, Me);
    k(this, re, null);
    k(this, W, null);
    k(this, ie, null);
    k(this, K, null);
    k(this, ae, yr.h);
    x(this, S, this.attachShadow({ mode: "open" }));
  }
  static get observedAttributes() {
    return ["value", "theme", "header-action", "movable", "history"];
  }
  connectedCallback() {
    d(this, o, pi).call(this), d(this, o, hi).call(this), d(this, o, di).call(this), d(this, o, Ie).call(this, !1);
  }
  disconnectedCallback() {
    l(this, K) != null && (cancelAnimationFrame(l(this, K)), x(this, K, null)), l(this, I).forEach((t) => t()), x(this, I, []);
  }
  attributeChangedCallback(t, r, i) {
    if (this.isConnected) {
      if (t === "value" && i != null) {
        const a = he(i);
        a && (x(this, y, a), d(this, o, Ie).call(this, !1));
        return;
      }
      t === "theme" && d(this, o, We).call(this), t === "movable" && d(this, o, gn).call(this), t === "history" && d(this, o, bn).call(this);
    }
  }
  get value() {
    return mr(l(this, y));
  }
  set value(t) {
    const r = he(t);
    r && (x(this, y, r), d(this, o, Ie).call(this));
  }
  get color() {
    return { ...l(this, y) };
  }
  set color(t) {
    x(this, y, q(t)), d(this, o, Ie).call(this);
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
S = new WeakMap(), y = new WeakMap(), A = new WeakMap(), G = new WeakMap(), ve = new WeakMap(), I = new WeakMap(), xe = new WeakMap(), Oe = new WeakMap(), R = new WeakMap(), V = new WeakMap(), E = new WeakMap(), J = new WeakMap(), De = new WeakMap(), X = new WeakMap(), ye = new WeakMap(), U = new WeakMap(), je = new WeakMap(), D = new WeakMap(), ne = new WeakMap(), Me = new WeakMap(), re = new WeakMap(), W = new WeakMap(), ie = new WeakMap(), K = new WeakMap(), ae = new WeakMap(), o = new WeakSet(), di = function() {
  const t = this.getAttribute("value");
  if (t) {
    const r = he(t);
    r && x(this, y, r);
  }
}, pi = function() {
  const t = this.headerAction === "theme" ? `<button type="button" class="pcp-header-btn pcp-theme-toggle" aria-label="Switch to light mode">${jn}</button>` : `<button type="button" class="pcp-header-btn pcp-close" aria-label="Close">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M4.25 4.25L11.75 11.75M11.75 4.25L4.25 11.75"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>`;
  l(this, S).innerHTML = `
      <style>${Ii}</style>
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
          ${Y0.map((r) => `<button type="button" class="pcp-tab" role="tab" data-format="${r}">${B0[r]}</button>`).join("")}
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
    `, x(this, xe, l(this, S).querySelector(".pcp-plane")), x(this, Oe, l(this, S).querySelector(".pcp-plane-wrap")), x(this, R, l(this, S).querySelector(".pcp-cursor")), x(this, V, l(this, S).querySelector(".pcp-hue-row")), x(this, E, l(this, V).querySelector(".pcp-slider-handle")), x(this, J, l(this, S).querySelector(".pcp-alpha-row")), x(this, De, l(this, S).querySelector(".pcp-slider-fill-alpha")), x(this, X, l(this, J).querySelector(".pcp-slider-handle")), x(this, ye, l(this, S).querySelector(".pcp-tabs-pill")), x(this, U, l(this, S).querySelector(".pcp-fields")), x(this, je, l(this, S).querySelector(".pcp-swatch-fill")), x(this, D, l(this, S).querySelector(".pcp-alpha-input")), x(this, Me, l(this, S).querySelector(".pcp-history-section")), x(this, ne, l(this, S).querySelector(".pcp-history")), x(this, re, l(this, S).querySelector(".pcp-theme-toggle")), d(this, o, We).call(this);
}, hi = function() {
  var r;
  const t = l(this, S).querySelector(".pcp-close");
  t == null || t.addEventListener("click", () => {
    this.dispatchEvent(new CustomEvent("close", { bubbles: !0, composed: !0 }));
  }), (r = l(this, re)) == null || r.addEventListener("click", () => d(this, o, ui).call(this)), l(this, I).push(
    on(
      l(this, Oe),
      (i, a) => d(this, o, vi).call(this, i, a),
      () => d(this, o, B).call(this),
      () => d(this, o, Z).call(this)
    )
  ), l(this, I).push(
    on(
      l(this, V),
      (i) => d(this, o, xi).call(this, i),
      () => d(this, o, B).call(this),
      () => d(this, o, Z).call(this)
    )
  ), l(this, I).push(
    on(
      l(this, J),
      (i) => d(this, o, yi).call(this, i),
      () => d(this, o, B).call(this),
      () => d(this, o, Z).call(this)
    )
  ), l(this, I).push(d(this, o, vn).call(this, l(this, V))), l(this, I).push(d(this, o, vn).call(this, l(this, J))), l(this, S).querySelectorAll(".pcp-tab").forEach((i) => {
    i.addEventListener("click", () => {
      const a = i.dataset.format;
      a && a !== l(this, A) && (x(this, A, a), d(this, o, et).call(this), d(this, o, zn).call(this), d(this, o, it).call(this), d(this, o, tt).call(this));
    });
  }), l(this, D).addEventListener("focus", () => d(this, o, Z).call(this)), l(this, D).addEventListener("change", () => d(this, o, xn).call(this)), l(this, D).addEventListener("keydown", (i) => {
    i.key === "Enter" && d(this, o, xn).call(this);
  }), l(this, I).push(d(this, o, Si).call(this)), d(this, o, gn).call(this), d(this, o, bn).call(this);
}, bn = function() {
  if (!this.history) {
    l(this, Me).hidden = !0, l(this, ne).innerHTML = "";
    return;
  }
  d(this, o, at).call(this);
}, gn = function() {
  if (l(this, W)) {
    const r = l(this, I).indexOf(l(this, W));
    r >= 0 && l(this, I).splice(r, 1), l(this, W).call(this), x(this, W, null);
  }
  if (!this.movable) {
    this.style.position = "", this.style.left = "", this.style.top = "", this.style.zIndex = "", this.removeAttribute("data-positioned");
    return;
  }
  this.hasAttribute("data-positioned") || requestAnimationFrame(() => {
    Z0(this), this.setAttribute("data-positioned", "");
  });
  const t = l(this, S).querySelector(".pcp-header");
  t && (x(this, W, j0(t, this)), l(this, I).push(l(this, W)));
}, Z = function() {
  x(this, ve, { ...l(this, y) });
}, mn = function() {
  return this.theme === "light" ? "light" : this.theme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}, ui = function() {
  const t = d(this, o, mn).call(this) === "light" ? "dark" : "light";
  this.theme = t, d(this, o, We).call(this);
  const r = { theme: t };
  this.dispatchEvent(
    new CustomEvent("themechange", {
      detail: r,
      bubbles: !0,
      composed: !0
    })
  );
}, We = function() {
  if (!l(this, re)) return;
  const t = d(this, o, mn).call(this) === "light";
  l(this, re).innerHTML = t ? Ei : jn, l(this, re).setAttribute(
    "aria-label",
    t ? "Switch to dark mode" : "Switch to light mode"
  );
}, vn = function(t) {
  const r = () => {
    t.dataset.active = "true";
  }, i = () => {
    const a = t.querySelector(".pcp-slider-handle");
    a != null && a.hasAttribute("data-dragging") || delete t.dataset.active;
  };
  return t.addEventListener("pointerenter", r), t.addEventListener("pointerleave", i), () => {
    t.removeEventListener("pointerenter", r), t.removeEventListener("pointerleave", i);
  };
}, fi = function(t, r) {
  const i = Math.max(0, Math.min(1, r)) * 100;
  t.style.left = `max(1px, calc(${i}% - 1.5px))`;
}, bi = function() {
  const t = getComputedStyle(this), r = Mr(t.getPropertyValue("--pcp-checker-base").trim()) ?? { r: 255, g: 255, b: 255 }, i = Mr(t.getPropertyValue("--pcp-checker-tone").trim()) ?? { r: 204, g: 204, b: 204 };
  return { base: r, tone: i };
}, gi = function(t, r) {
  const i = t.style.left.match(/calc\(([\d.]+)%/);
  return i ? parseFloat(i[1]) / 100 : r;
}, mi = function(t, r) {
  if (r === "hue") return L0(t);
  const { base: i, tone: a } = d(this, o, bi).call(this);
  return D0(Xe(l(this, y)), t, i, a);
}, Ke = function(t, r, i) {
  const a = d(this, o, mi).call(this, r, i);
  t.style.background = O0(a.r, a.g, a.b);
}, Ee = function(t, r, i) {
  d(this, o, fi).call(this, t, r), d(this, o, Ke).call(this, t, r, i);
}, vi = function(t, r) {
  l(this, R).dataset.dragging = "true";
  const i = d(this, o, de).call(this);
  d(this, o, Y).call(this, A0(t, r, i, l(this, y).alpha), !0, {
    refreshPlane: !1,
    refreshCursor: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  }), d(this, o, nt).call(this, t, r);
}, xi = function(t) {
  l(this, V).dataset.active = "true", l(this, E).dataset.dragging = "true", x(this, ae, t * 360), d(this, o, Ee).call(this, l(this, E), t, "hue"), d(this, o, Y).call(this, ai(l(this, y), l(this, ae)), !0, {
    refreshPlane: !0,
    refreshCursor: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  });
}, yi = function(t) {
  l(this, J).dataset.active = "true", l(this, X).dataset.dragging = "true", d(this, o, Y).call(this, q({ ...l(this, y), alpha: t }), !0, {
    refreshPlane: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  }), d(this, o, Ee).call(this, l(this, X), t, "alpha");
}, Mi = function() {
  const r = l(this, E).style.left.match(/calc\(([\d.]+)%/);
  return r ? parseFloat(r[1]) / 100 * 360 : l(this, ae);
}, Qe = function() {
  x(this, ae, H0(l(this, y)));
}, xn = function() {
  const t = l(this, D).value.replace(/%/g, "").trim(), r = Number(t);
  if (Number.isNaN(r)) {
    d(this, o, rt).call(this);
    return;
  }
  d(this, o, Y).call(this, q({ ...l(this, y), alpha: r / 100 }), !0), d(this, o, B).call(this);
}, yn = function(t, r) {
  d(this, o, wi).call(this, { [t]: r }, !0);
}, wi = function(t, r = !0) {
  const i = {};
  Ue(l(this, y), l(this, A)).forEach((s) => {
    i[s.key] = t[s.key] ?? s.value;
  });
  const a = vr(l(this, A), i, l(this, y));
  a && (d(this, o, Y).call(this, a, !0), r && d(this, o, B).call(this));
}, ki = function(t, r) {
  if (t.scrubStep != null)
    return r ? t.scrubStep * 0.1 : t.scrubStep;
  const i = t.min ?? 0, s = (t.max ?? 100) - i, c = t.step != null && t.step < 1 ? s / 120 : t.step ?? 1;
  return r ? c * 0.1 : c;
}, $i = function(t, r) {
  return t.step != null && t.step < 1 ? r.toFixed(3) : String(Math.round(r));
}, zi = function(t, r, i, a) {
  const s = l(this, U).querySelector(
    `.pcp-field-input[data-key="${t}"]`
  ), c = Ue(l(this, y), l(this, A)), p = c.find((z) => z.key === t);
  if (!p) return;
  const f = r.min ?? 0, b = r.max ?? 100, v = d(this, o, ki).call(this, r, a), m = Number(s ? s.value.replace(/%/g, "").trim() : p.value);
  let M = m + i * v;
  if (r.step != null && r.step < 1 ? (M = Math.round(M / r.step) * r.step, M = Math.min(b, Math.max(f, M))) : M = Math.min(b, Math.max(f, Math.round(M))), Math.abs(M - m) < (r.step != null && r.step < 1 ? r.step / 2 : 0.5)) return;
  const L = d(this, o, $i).call(this, r, M);
  let $ = null;
  if (l(this, A) === "hsl" && (t === "h" || t === "s" || t === "l"))
    $ = P0(l(this, y), t, M);
  else if (l(this, A) === "oklch" && (t === "l" || t === "c" || t === "h"))
    $ = N0(l(this, y), t, M);
  else {
    const z = {};
    c.forEach((F) => {
      z[F.key] = F.key === t ? L : F.value;
    }), $ = vr(l(this, A), z, l(this, y));
  }
  if (!$) return;
  const _ = t === "h", N = l(this, A) === "oklch" && (t === "l" || t === "c");
  if (d(this, o, Y).call(this, $, !0, {
    refreshFields: !1,
    refreshPlane: _,
    refreshCursor: _ || N,
    refreshSliders: _ ? !1 : void 0
  }), _ || N) {
    const z = xr($);
    d(this, o, nt).call(this, z.x, z.y);
  }
  s && (s.value = L);
}, _i = function(t, r) {
  const i = r ? 0.05 : 0.5, a = l(this, y).alpha * 100;
  let s = a + t * i;
  if (s = Math.min(100, Math.max(0, r ? s : Math.round(s))), Math.abs(s - a) < 0.01) return;
  const c = s / 100;
  d(this, o, Y).call(this, q({ ...l(this, y), alpha: c }), !0, {
    refreshFields: !1,
    refreshPlane: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  }), l(this, D).value = `${Math.round(s)}%`;
}, Si = function() {
  const t = l(this, S).querySelector(".pcp-alpha-field .pcp-field-label");
  return t ? kr(t, {
    onStart: () => {
      d(this, o, Z).call(this), t.setAttribute("data-scrubbing", "true"), document.body.style.cursor = "ew-resize";
    },
    onDelta: (r, i) => d(this, o, _i).call(this, r, i.shiftKey),
    onEnd: () => {
      t.removeAttribute("data-scrubbing"), document.body.style.cursor = "", d(this, o, B).call(this), d(this, o, rt).call(this);
    }
  }) : () => {
  };
}, Li = function(t) {
  l(this, A) !== "hex" && l(this, U).querySelectorAll(".pcp-field-label").forEach((r) => {
    var c;
    const i = r.closest(".pcp-field");
    if (!i) return;
    const a = (c = [...i.classList].find((p) => p.startsWith("pcp-field-") && p !== "pcp-field")) == null ? void 0 : c.slice(10);
    if (!a) return;
    const s = t.find((p) => p.key === a);
    !s || s.min == null || s.max == null || kr(r, {
      onStart: () => {
        d(this, o, Z).call(this), r.setAttribute("data-scrubbing", "true"), document.body.style.cursor = "ew-resize";
      },
      onDelta: (p, f) => d(this, o, zi).call(this, a, s, p, f.shiftKey),
      onEnd: () => {
        r.removeAttribute("data-scrubbing"), document.body.style.cursor = "", d(this, o, B).call(this), d(this, o, it).call(this);
      }
    });
  });
}, Y = function(t, r = !0, i) {
  x(this, y, q(t)), !(l(this, R).hasAttribute("data-dragging") || l(this, E).hasAttribute("data-dragging")) && (i == null ? void 0 : i.syncPlaneHue) !== !1 && d(this, o, Qe).call(this), d(this, o, Mn).call(this, r, i);
}, Ie = function(t = !0) {
  d(this, o, Qe).call(this), d(this, o, et).call(this), d(this, o, zn).call(this), d(this, o, Mn).call(this, t), d(this, o, at).call(this);
}, Mn = function(t, r) {
  (r == null ? void 0 : r.refreshFields) !== !1 && d(this, o, it).call(this), d(this, o, Hi).call(this), (r == null ? void 0 : r.refreshSliders) !== !1 && d(this, o, kn).call(this), (r == null ? void 0 : r.refreshCursor) !== !1 && !l(this, R).hasAttribute("data-dragging") && d(this, o, tt).call(this), (r == null ? void 0 : r.refreshPlane) === !0 ? d(this, o, wn).call(this) : (r == null ? void 0 : r.refreshPlane) !== !1 && !l(this, R).hasAttribute("data-dragging") && !l(this, E).hasAttribute("data-dragging") && l(this, ie) !== d(this, o, de).call(this) && d(this, o, wn).call(this), t && d(this, o, Pi).call(this);
}, wn = function() {
  l(this, K) == null && x(this, K, requestAnimationFrame(() => {
    x(this, K, null);
    const t = d(this, o, de).call(this);
    l(this, ie) !== t && (fr(l(this, xe), t), x(this, ie, t));
  }));
}, de = function() {
  return l(this, E).hasAttribute("data-dragging") ? d(this, o, Mi).call(this) : l(this, ae);
}, et = function() {
  const t = d(this, o, de).call(this);
  fr(l(this, xe), t), x(this, ie, t);
}, tt = function() {
  const { x: t, y: r } = xr(l(this, y));
  d(this, o, nt).call(this, t, r);
}, nt = function(t, r) {
  l(this, R).style.left = `${t * 100}%`, l(this, R).style.top = `${r * 100}%`;
}, kn = function() {
  const r = d(this, o, de).call(this) / 360;
  l(this, E).hasAttribute("data-dragging") ? d(this, o, Ke).call(this, l(this, E), r, "hue") : d(this, o, Ee).call(this, l(this, E), r, "hue");
  const i = l(this, X).hasAttribute("data-dragging") ? d(this, o, gi).call(this, l(this, X), l(this, y).alpha) : l(this, y).alpha;
  l(this, X).hasAttribute("data-dragging") ? d(this, o, Ke).call(this, l(this, X), i, "alpha") : d(this, o, Ee).call(this, l(this, X), i, "alpha"), d(this, o, Ti).call(this);
}, Ti = function() {
  l(this, De).style.setProperty("--pcp-alpha-gradient", T0(l(this, y)));
}, $n = function(t, r) {
  const { r: i, g: a, b: s } = Xe(r);
  t.style.setProperty("--swatch-solid", `rgb(${i}, ${a}, ${s})`), t.style.setProperty("--swatch-alpha", `rgba(${i}, ${a}, ${s}, ${r.alpha})`);
}, Hi = function() {
  d(this, o, $n).call(this, l(this, je), l(this, y));
}, rt = function() {
  l(this, D).value = `${Math.round(l(this, y).alpha * 100)}%`;
}, it = function() {
  const t = Ue(l(this, y), l(this, A));
  l(this, U).dataset.format = l(this, A), l(this, U).innerHTML = t.map(
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
  ).join(""), l(this, U).querySelectorAll(".pcp-field-input").forEach((r) => {
    const i = r, a = i.dataset.key;
    i.addEventListener("focus", () => d(this, o, Z).call(this)), i.addEventListener("change", () => d(this, o, yn).call(this, a, i.value)), i.addEventListener("keydown", (s) => {
      s.key === "Enter" && d(this, o, yn).call(this, a, i.value);
    });
  }), d(this, o, Li).call(this, t), d(this, o, rt).call(this);
}, zn = function() {
  const t = l(this, S).querySelectorAll(".pcp-tab");
  let r = null;
  if (t.forEach((i) => {
    const a = i.dataset.format === l(this, A);
    i.setAttribute("data-active", String(a)), i.setAttribute("aria-selected", String(a)), a && (r = i);
  }), r) {
    const i = r, a = i.offsetLeft, s = i.offsetWidth;
    l(this, ye).style.left = `${a}px`, l(this, ye).style.width = `${s}px`;
  }
}, at = function() {
  this.history && (l(this, Me).hidden = l(this, G).length === 0, l(this, ne).innerHTML = l(this, G).map((t, r) => `
          <button type="button" class="pcp-history-swatch pcp-clip" data-index="${r}" aria-label="Color ${Re(t)}">
            <span class="pcp-swatch-fill" data-history-fill="${r}"></span>
          </button>
        `).join(""), l(this, ne).querySelectorAll("[data-history-fill]").forEach((t) => {
    const r = Number(t.dataset.historyFill), i = l(this, G)[r];
    i && d(this, o, $n).call(this, t, i);
  }), l(this, ne).querySelectorAll(".pcp-history-swatch").forEach((t) => {
    t.addEventListener("click", () => {
      const r = Number(t.dataset.index), i = l(this, G)[r];
      i && (d(this, o, Z).call(this), d(this, o, Y).call(this, { ...i }, !0, { refreshFields: !0 }), d(this, o, B).call(this));
    });
  }));
}, B = function() {
  const t = l(this, R).hasAttribute("data-dragging"), r = l(this, E).hasAttribute("data-dragging");
  delete l(this, R).dataset.dragging, delete l(this, E).dataset.dragging, delete l(this, X).dataset.dragging, delete l(this, V).dataset.active, delete l(this, J).dataset.active, (t || r) && (d(this, o, Qe).call(this), d(this, o, kn).call(this), d(this, o, tt).call(this), l(this, ie) !== d(this, o, de).call(this) && d(this, o, et).call(this));
  const i = l(this, ve);
  x(this, ve, null), this.history && i && !li(i, l(this, y)) && (x(this, G, I0(i, l(this, G))), d(this, o, at).call(this));
}, Pi = function() {
  const t = {
    color: { ...l(this, y) },
    css: mr(l(this, y)),
    hex: Re(l(this, y))
  };
  this.dispatchEvent(
    new CustomEvent("change", {
      detail: t,
      bubbles: !0,
      composed: !0
    })
  );
};
customElements.get("pretty-color-picker") || customElements.define("pretty-color-picker", G0);
export {
  yr as DEFAULT_COLOR,
  G0 as PrettyColorPicker,
  Ue as formatFieldsFor,
  q as normalizeOklch,
  he as oklchFromCss,
  mr as oklchToCss,
  Re as oklchToHex,
  J0 as oklchToRgbString,
  vr as parseFormatFields
};
