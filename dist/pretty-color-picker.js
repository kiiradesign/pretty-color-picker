var Pn = (e) => {
  throw TypeError(e);
};
var vt = (e, n, t) => n.has(e) || Pn("Cannot " + t);
var s = (e, n, t) => (vt(e, n, "read from private field"), t ? t.call(e) : n.get(e)), w = (e, n, t) => n.has(e) ? Pn("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(e) : n.set(e, t), M = (e, n, t, r) => (vt(e, n, "write to private field"), r ? r.call(e, t) : n.set(e, t), t), f = (e, n, t) => (vt(e, n, "access private method"), t);
const An = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z" opacity="0.2"/><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/></svg>', hi = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z" opacity="0.2"/><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"/></svg>', ui = '@import"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap";:host{--pcp-width: 260px;--pcp-radius-sm: 4px;--pcp-radius: 6px;--pcp-radius-lg: 9px;--pcp-panel-padding: 9px;--pcp-history-cols: 8;--pcp-history-swatch-size: calc( (var(--pcp-width) - 2 * var(--pcp-panel-padding) - 7 * var(--pcp-history-gap)) / var(--pcp-history-cols) );--pcp-control-height: var(--pcp-history-swatch-size);--pcp-tab-row-height: 32px;--pcp-field-label-size: 10px;--pcp-field-label-line: 12px;--pcp-field-label-gap: 3px;--pcp-field-value-size: 11px;--pcp-field-value-line: 15px;--pcp-field-input-height: 20px;--pcp-input-panel-height: calc( var(--pcp-field-label-line) + var(--pcp-field-label-gap) + var(--pcp-field-input-height) );--pcp-input-row-padding-y: 7px;--pcp-input-row-padding-x: 7px;--pcp-alpha-col-width: 4ch;--pcp-value-col-width: minmax(0, 1fr);--pcp-swatch-code-gap: 8px;--pcp-history-gap: 6px;--pcp-checker-size: 6px;--pcp-slider-handle-height: calc(var(--pcp-control-height) * 20 / 36);--pcp-field-input-radius: var(--pcp-radius-sm);--pcp-icon-button-size: 26px;--pcp-icon-button-radius: var(--pcp-radius-sm);--pcp-title-size: 12px;--pcp-title-line: 17px;--pcp-title-weight: 600;--pcp-title-tracking: -.24px;--pcp-ease-out: cubic-bezier(.175, .885, .32, 1.1);--pcp-font: "Geist", system-ui, -apple-system, "SF Pro Display", sans-serif;--pcp-mono: "Geist Mono", ui-monospace, monospace;display:inline-block;font-family:var(--pcp-font);-webkit-font-smoothing:antialiased;color:var(--pcp-text-primary)}:host([movable]){position:fixed;z-index:1000;margin:0}:host([movable]) .pcp-header{cursor:grab;touch-action:none}:host([movable]) .pcp-header[data-dragging=true]{cursor:grabbing}:host,:host([theme="dark"]){color-scheme:dark;--pcp-bg: #212121;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: rgba(255, 255, 255, .05);--pcp-surface-hover: rgba(255, 255, 255, .1);--pcp-surface-active: rgba(255, 255, 255, .11);--pcp-tab-pill: rgba(255, 255, 255, .11);--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-root: #ffffff;--pcp-text-primary: rgba(255, 255, 255, .95);--pcp-text-label: rgba(255, 255, 255, .7);--pcp-text-secondary: rgba(255, 255, 255, .6);--pcp-text-tertiary: rgba(255, 255, 255, .4);--pcp-text-focus: #ffffff;--pcp-slider-handle: rgba(255, 255, 255, .95);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: 0 8px 32px rgba(0, 0, 0, .5)}:host([theme="light"]){color-scheme:light;--pcp-bg: #fafafa;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: rgba(0, 0, 0, .04);--pcp-surface-hover: rgba(0, 0, 0, .08);--pcp-surface-active: rgba(0, 0, 0, .1);--pcp-tab-pill: rgba(0, 0, 0, .1);--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-root: #000000;--pcp-text-primary: rgba(0, 0, 0, .9);--pcp-text-label: rgba(0, 0, 0, .6);--pcp-text-secondary: rgba(0, 0, 0, .55);--pcp-text-tertiary: rgba(0, 0, 0, .35);--pcp-text-focus: #000000;--pcp-slider-handle: rgba(0, 0, 0, .9);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 4px 20px rgba(0, 0, 0, .08)}@media(prefers-color-scheme:dark){:host([theme="system"]){color-scheme:dark;--pcp-bg: #212121;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: rgba(255, 255, 255, .05);--pcp-surface-hover: rgba(255, 255, 255, .1);--pcp-surface-active: rgba(255, 255, 255, .11);--pcp-tab-pill: rgba(255, 255, 255, .11);--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-root: #ffffff;--pcp-text-primary: rgba(255, 255, 255, .95);--pcp-text-label: rgba(255, 255, 255, .7);--pcp-text-secondary: rgba(255, 255, 255, .6);--pcp-text-tertiary: rgba(255, 255, 255, .4);--pcp-text-focus: #ffffff;--pcp-slider-handle: rgba(255, 255, 255, .95);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: 0 8px 32px rgba(0, 0, 0, .5)}}@media(prefers-color-scheme:light){:host([theme="system"]){color-scheme:light;--pcp-bg: #fafafa;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: rgba(0, 0, 0, .04);--pcp-surface-hover: rgba(0, 0, 0, .08);--pcp-surface-active: rgba(0, 0, 0, .1);--pcp-tab-pill: rgba(0, 0, 0, .1);--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-root: #000000;--pcp-text-primary: rgba(0, 0, 0, .9);--pcp-text-label: rgba(0, 0, 0, .6);--pcp-text-secondary: rgba(0, 0, 0, .55);--pcp-text-tertiary: rgba(0, 0, 0, .35);--pcp-text-focus: #000000;--pcp-slider-handle: rgba(0, 0, 0, .9);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 4px 20px rgba(0, 0, 0, .08)}}*,*:before,*:after{box-sizing:border-box}.pcp-clip{overflow:hidden;border-radius:var(--pcp-clip-radius, var(--pcp-radius-sm))}.pcp-swatch-fill{display:block;box-sizing:border-box;width:calc(100% + 2px);height:calc(100% + 2px);margin:-1px;border-radius:inherit;background-color:var(--pcp-checker-base);background-image:linear-gradient(to right,var(--swatch-solid, #000) 50%,transparent 50%),linear-gradient(to right,transparent 50%,var(--swatch-alpha, rgba(0, 0, 0, .5)) 50%),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,100% 100%,var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size);background-position:0 0,0 0,0 0,0 calc(var(--pcp-checker-size) / 2),calc(var(--pcp-checker-size) / 2) calc(var(--pcp-checker-size) / -2),calc(var(--pcp-checker-size) / -2) 0}@supports (background: -webkit-named-image(i)){.pcp-clip,.pcp-swatch-fill{clip-path:inset(0 round var(--pcp-clip-radius, var(--pcp-radius-sm)))}}.pcp{width:var(--pcp-width);background:var(--pcp-bg);border:1px solid var(--pcp-border);border-radius:var(--pcp-radius-lg);box-shadow:var(--pcp-elevation);padding:var(--pcp-panel-padding);-webkit-user-select:none;user-select:none}.pcp-header{display:flex;align-items:center;justify-content:space-between;gap:6px;padding-bottom:4px;margin-bottom:8px;min-height:var(--pcp-icon-button-size);border-bottom:1px solid var(--pcp-divider)}.pcp-title{flex:1;min-width:0;font-family:var(--pcp-font);font-size:var(--pcp-title-size);font-weight:var(--pcp-title-weight);line-height:var(--pcp-title-line);letter-spacing:var(--pcp-title-tracking);color:var(--pcp-text-root);margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pcp-header-btn{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--pcp-icon-button-size);height:var(--pcp-icon-button-size);padding:0;border:none;border-radius:var(--pcp-icon-button-radius);background:transparent;color:var(--pcp-text-focus);cursor:pointer;transition:background .15s var(--pcp-ease-out),color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-header-btn svg{width:13px;height:13px;flex-shrink:0}@media(hover:hover)and (pointer:fine){.pcp-header-btn:hover{background:var(--pcp-surface-hover);color:var(--pcp-text-primary)}}.pcp-header-btn:active{background:var(--pcp-surface-active);transform:scale(.97)}.pcp-header-btn:focus{outline:none}.pcp-header-btn:focus-visible{box-shadow:0 0 0 2px var(--pcp-bg),0 0 0 4px var(--pcp-focus-ring)}.pcp-plane-wrap{position:relative;width:100%;aspect-ratio:4 / 3;--pcp-clip-radius: var(--pcp-radius-sm);margin-bottom:5px;cursor:crosshair;touch-action:none}.pcp-plane{display:block;width:100%;height:100%}.pcp-cursor{position:absolute;width:13px;height:13px;margin:-6.5px 0 0 -6.5px;border:2px solid var(--pcp-cursor-ring);border-radius:50%;box-shadow:0 0 0 1px var(--pcp-cursor-outline),inset 0 0 0 1px #0000001f;pointer-events:none}.pcp-cursor[data-dragging=true]{transition:none}.pcp-slider-wrapper{position:relative;height:var(--pcp-control-height);margin-bottom:5px}.pcp-slider{position:absolute;top:0;right:0;bottom:0;left:0;cursor:pointer;-webkit-user-select:none;user-select:none;--pcp-clip-radius: var(--pcp-radius-sm);background:transparent;touch-action:none}.pcp-slider-fill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none}.pcp-slider-fill-hue{background:linear-gradient(to right,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.pcp-slider-fill-alpha{--pcp-alpha-gradient: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));background-color:var(--pcp-checker-base);background-image:var(--pcp-alpha-gradient),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size);background-position:0 0,0 0,0 calc(var(--pcp-checker-size) / 2),calc(var(--pcp-checker-size) / 2) calc(var(--pcp-checker-size) / -2),calc(var(--pcp-checker-size) / -2) 0}.pcp-slider-handle{position:absolute;top:50%;left:0;z-index:1;width:3px;height:var(--pcp-slider-handle-height);border:none;outline:none;border-radius:999px;background:var(--pcp-slider-handle);pointer-events:none;transform:translateY(-50%);opacity:.68;box-shadow:none;filter:none;transition:opacity .15s ease,background .12s ease}.pcp-slider:hover .pcp-slider-handle,.pcp-slider[data-active=true] .pcp-slider-handle{opacity:.68}.pcp-slider-handle[data-dragging=true]{opacity:.95}.pcp-tabs{position:relative;display:flex;align-items:center;height:var(--pcp-tab-row-height);box-sizing:border-box;padding:2px;margin-bottom:7px;background:transparent;border-radius:var(--pcp-radius)}.pcp-tabs-pill{position:absolute;top:2px;bottom:2px;left:0;width:0;background:var(--pcp-tab-pill);border-radius:5px;z-index:0;pointer-events:none;transition:left .2s var(--pcp-ease-out),width .2s var(--pcp-ease-out)}.pcp-tab{position:relative;z-index:1;flex:1;display:flex;align-items:center;justify-content:center;height:100%;padding:0 4px;font-family:inherit;font-size:11px;font-weight:500;line-height:1;text-align:center;background:transparent;border:none;color:var(--pcp-text-label);cursor:pointer;transition:color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-tab[data-active=true]{color:var(--pcp-text-primary)}.pcp-tab:active{transform:scale(.97)}.pcp-inputs{display:grid;width:100%;min-width:0;box-sizing:border-box;overflow:hidden;grid-template-columns:var(--pcp-input-panel-height) var(--pcp-swatch-code-gap) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-alpha-col-width);column-gap:3px;align-items:center;margin-bottom:8px;padding:var(--pcp-input-row-padding-y) var(--pcp-input-row-padding-x);background:var(--pcp-surface);border-radius:var(--pcp-radius-sm)}.pcp-swatch{grid-column:1;flex-shrink:0;width:var(--pcp-input-panel-height);height:var(--pcp-input-panel-height);--pcp-clip-radius: var(--pcp-radius-sm);position:relative}.pcp-fields{grid-column:3 / 6;display:grid;min-width:0;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:3px}.pcp-fields[data-format=hex] .pcp-field-hex{grid-column:1 / -1;justify-self:center;width:fit-content;align-items:center}.pcp-fields[data-format=hex] .pcp-field-label{text-align:center;white-space:nowrap}.pcp-fields[data-format=hex] .pcp-field-input{width:8ch;min-width:8ch;padding:0 4px}.pcp-fields[data-format=rgb] .pcp-field-r{grid-column:1}.pcp-fields[data-format=rgb] .pcp-field-g{grid-column:2}.pcp-fields[data-format=rgb] .pcp-field-b{grid-column:3}.pcp-fields[data-format=hsl] .pcp-field-h{grid-column:1}.pcp-fields[data-format=hsl] .pcp-field-s{grid-column:2}.pcp-fields[data-format=hsl] .pcp-field-l{grid-column:3}.pcp-fields[data-format=oklch] .pcp-field-l{grid-column:1}.pcp-fields[data-format=oklch] .pcp-field-c{grid-column:2}.pcp-fields[data-format=oklch] .pcp-field-h{grid-column:3}.pcp-alpha-field{grid-column:6;box-sizing:border-box;width:var(--pcp-alpha-col-width);min-width:var(--pcp-alpha-col-width);max-width:var(--pcp-alpha-col-width);align-items:center}.pcp-alpha-field .pcp-field-input{width:100%;min-width:0;padding:0;box-sizing:border-box}.pcp-field{min-width:0;display:flex;flex-direction:column;align-items:stretch;justify-content:center;gap:var(--pcp-field-label-gap)}.pcp-fields[data-format=oklch] .pcp-field-c .pcp-field-input{letter-spacing:-.02em;padding:0 1px}.pcp-field-label{display:block;font-size:var(--pcp-field-label-size);font-weight:500;line-height:var(--pcp-field-label-line);color:var(--pcp-text-label);margin:0;text-align:center}.pcp-field-input{width:100%;min-width:0;min-height:var(--pcp-field-input-height);height:var(--pcp-field-input-height);padding:0 2px;font-family:var(--pcp-mono);font-size:var(--pcp-field-value-size);font-weight:500;line-height:var(--pcp-field-input-height);font-variant-numeric:tabular-nums;text-align:center;color:var(--pcp-text-secondary);background:transparent;border:none;border-radius:var(--pcp-field-input-radius);outline:none;box-shadow:none;transition:color .15s var(--pcp-ease-out),background .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-field-input:hover{background:var(--pcp-surface-hover)}}.pcp-field-input:focus{color:var(--pcp-text-focus);background:transparent;border-radius:var(--pcp-field-input-radius);box-shadow:none;outline:none}.pcp-field-input:active{background:var(--pcp-surface-active)}.pcp-history-label{font-size:10px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--pcp-text-label);margin:0 0 5px}.pcp-history{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:var(--pcp-history-gap);width:100%}.pcp-history-swatch{-moz-appearance:none;appearance:none;-webkit-appearance:none;display:block;width:100%;aspect-ratio:1;height:auto;flex-shrink:0;padding:0;border:none;background:none;--pcp-clip-radius: 4px;cursor:pointer;transition:opacity .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-history-swatch:hover{opacity:.85}}.pcp-history-swatch:active{opacity:.7}@media(prefers-reduced-motion:reduce){.pcp-header-btn,.pcp-tab,.pcp-tabs-pill,.pcp-cursor,.pcp-slider-handle,.pcp-history-swatch{transition:none}.pcp-tab:active,.pcp-header-btn:active{transform:none}}', pr = (e, n) => {
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
}, bi = {
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
}, gi = (e) => pr(bi[e.toLowerCase()], 6), mi = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, vi = (e) => {
  let n;
  return (n = e.match(mi)) ? pr(parseInt(n[1], 16), n[1].length) : void 0;
}, U = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", Le = `${U}%`, mn = `(?:${U}%|${U})`, xi = `(?:${U}(deg|grad|rad|turn)|${U})`, ue = "\\s*,\\s*", yi = new RegExp(
  `^rgba?\\(\\s*${U}${ue}${U}${ue}${U}\\s*(?:,\\s*${mn}\\s*)?\\)$`
), Mi = new RegExp(
  `^rgba?\\(\\s*${Le}${ue}${Le}${ue}${Le}\\s*(?:,\\s*${mn}\\s*)?\\)$`
), ki = (e) => {
  let n = { mode: "rgb" }, t;
  if (t = e.match(yi))
    t[1] !== void 0 && (n.r = t[1] / 255), t[2] !== void 0 && (n.g = t[2] / 255), t[3] !== void 0 && (n.b = t[3] / 255);
  else if (t = e.match(Mi))
    t[1] !== void 0 && (n.r = t[1] / 100), t[2] !== void 0 && (n.g = t[2] / 100), t[3] !== void 0 && (n.b = t[3] / 100);
  else
    return;
  return t[4] !== void 0 ? n.alpha = Math.max(0, Math.min(1, t[4] / 100)) : t[5] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[5]))), n;
}, Be = (e, n) => e === void 0 ? void 0 : typeof e != "object" ? br(e) : e.mode !== void 0 ? e : n ? { ...e, mode: n } : void 0, q = (e = "rgb") => (n) => (n = Be(n, e)) !== void 0 ? (
  // if the color's mode corresponds to our target mode
  n.mode === e ? (
    // then just return the color
    n
  ) : (
    // otherwise check to see if we have a dedicated
    // converter for the target mode
    X[n.mode][e] ? (
      // and return its result...
      X[n.mode][e](n)
    ) : (
      // ...otherwise pass through RGB as an intermediary step.
      // if the target mode is RGB...
      e === "rgb" ? (
        // just return the RGB
        X[n.mode].rgb(n)
      ) : (
        // otherwise convert color.mode -> RGB -> target_mode
        X.rgb[e](X[n.mode].rgb(n))
      )
    )
  )
) : void 0, X = {}, fr = {}, Ge = [], hr = {}, wi = (e) => e, y = (e) => (X[e.mode] = {
  ...X[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((n) => {
  X[n] || (X[n] = {}), X[n][e.mode] = e.fromMode[n];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((n) => {
  if (e.ranges[n] === void 0 && (e.ranges[n] = [0, 1]), !e.interpolate[n])
    throw new Error(`Missing interpolator for: ${n}`);
  typeof e.interpolate[n] == "function" && (e.interpolate[n] = {
    use: e.interpolate[n]
  }), e.interpolate[n].fixup || (e.interpolate[n].fixup = wi);
}), fr[e.mode] = e, (e.parse || []).forEach((n) => {
  $i(n, e.mode);
}), q(e.mode)), et = (e) => fr[e], $i = (e, n) => {
  if (typeof e == "string") {
    if (!n)
      throw new Error("'mode' required when 'parser' is a string");
    hr[e] = n;
  } else typeof e == "function" && Ge.indexOf(e) < 0 && Ge.push(e);
}, Jt = /[^\x00-\x7F]|[a-zA-Z_]/, zi = /[^\x00-\x7F]|[-\w]/, d = {
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
function Fe(e) {
  let n = e[g], t = e[g + 1];
  return n === "-" || n === "+" ? /\d/.test(t) || t === "." && /\d/.test(e[g + 2]) : n === "." ? /\d/.test(t) : /\d/.test(n);
}
function Vt(e) {
  if (g >= e.length)
    return !1;
  let n = e[g];
  if (Jt.test(n))
    return !0;
  if (n === "-") {
    if (e.length - g < 2)
      return !1;
    let t = e[g + 1];
    return !!(t === "-" || Jt.test(t));
  }
  return !1;
}
const _i = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function _e(e) {
  let n = "";
  if ((e[g] === "-" || e[g] === "+") && (n += e[g++]), n += Oe(e), e[g] === "." && /\d/.test(e[g + 1]) && (n += e[g++] + Oe(e)), (e[g] === "e" || e[g] === "E") && ((e[g + 1] === "-" || e[g + 1] === "+") && /\d/.test(e[g + 2]) ? n += e[g++] + e[g++] + Oe(e) : /\d/.test(e[g + 1]) && (n += e[g++] + Oe(e))), Vt(e)) {
    let t = Je(e);
    return t === "deg" || t === "rad" || t === "turn" || t === "grad" ? { type: d.Hue, value: n * _i[t] } : void 0;
  }
  return e[g] === "%" ? (g++, { type: d.Percentage, value: +n }) : { type: d.Number, value: +n };
}
function Oe(e) {
  let n = "";
  for (; /\d/.test(e[g]); )
    n += e[g++];
  return n;
}
function Je(e) {
  let n = "";
  for (; g < e.length && zi.test(e[g]); )
    n += e[g++];
  return n;
}
function Ti(e) {
  let n = Je(e);
  return e[g] === "(" ? (g++, { type: d.Function, value: n }) : n === "none" ? { type: d.None, value: void 0 } : { type: d.Ident, value: n };
}
function Ni(e = "") {
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
      t.push({ type: d.ParenClose });
      continue;
    }
    if (r === "+") {
      if (g--, Fe(n)) {
        t.push(_e(n));
        continue;
      }
      return;
    }
    if (r === "-") {
      if (g--, Fe(n)) {
        t.push(_e(n));
        continue;
      }
      if (Vt(n)) {
        t.push({ type: d.Ident, value: Je(n) });
        continue;
      }
      return;
    }
    if (r === ".") {
      if (g--, Fe(n)) {
        t.push(_e(n));
        continue;
      }
      return;
    }
    if (r === "/") {
      for (; g < n.length && (n[g] === `
` || n[g] === "	" || n[g] === " "); )
        g++;
      let i;
      if (Fe(n) && (i = _e(n), i.type !== d.Hue)) {
        t.push({ type: d.Alpha, value: i });
        continue;
      }
      if (Vt(n) && Je(n) === "none") {
        t.push({
          type: d.Alpha,
          value: { type: d.None, value: void 0 }
        });
        continue;
      }
      return;
    }
    if (/\d/.test(r)) {
      g--, t.push(_e(n));
      continue;
    }
    if (Jt.test(r)) {
      g--, t.push(Ti(n));
      continue;
    }
    return;
  }
  return t;
}
function Li(e) {
  e._i = 0;
  let n = e[e._i++];
  if (!n || n.type !== d.Function || n.value !== "color" || (n = e[e._i++], n.type !== d.Ident))
    return;
  const t = hr[n.value];
  if (!t)
    return;
  const r = { mode: t }, i = ur(e, !1);
  if (!i)
    return;
  const a = et(t).channels;
  for (let o = 0, c, p; o < a.length; o++)
    c = i[o], p = a[o], c.type !== d.None && (r[p] = c.type === d.Number ? c.value : c.value / 100, p === "alpha" && (r[p] = Math.max(0, Math.min(1, r[p]))));
  return r;
}
function ur(e, n) {
  const t = [];
  let r;
  for (; e._i < e.length; ) {
    if (r = e[e._i++], r.type === d.None || r.type === d.Number || r.type === d.Alpha || r.type === d.Percentage || n && r.type === d.Hue) {
      t.push(r);
      continue;
    }
    if (r.type === d.ParenClose) {
      if (e._i < e.length)
        return;
      continue;
    }
    return;
  }
  if (!(t.length < 3 || t.length > 4)) {
    if (t.length === 4) {
      if (t[3].type !== d.Alpha)
        return;
      t[3] = t[3].value;
    }
    return t.length === 3 && t.push({ type: d.None, value: void 0 }), t.every((i) => i.type !== d.Alpha) ? t : void 0;
  }
}
function Hi(e, n) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== d.Function)
    return;
  let r = ur(e, n);
  if (r)
    return r.unshift(t.value), r;
}
const br = (e) => {
  if (typeof e != "string")
    return;
  const n = Ni(e), t = n ? Hi(n, !0) : void 0;
  let r, i = 0, a = Ge.length;
  for (; i < a; )
    if ((r = Ge[i++](e, t)) !== void 0)
      return r;
  return n ? Li(n) : void 0;
};
function Ci(e, n) {
  if (!n || n[0] !== "rgb" && n[0] !== "rgba")
    return;
  const t = { mode: "rgb" }, [, r, i, a, o] = n;
  if (!(r.type === d.Hue || i.type === d.Hue || a.type === d.Hue))
    return r.type !== d.None && (t.r = r.type === d.Number ? r.value / 255 : r.value / 100), i.type !== d.None && (t.g = i.type === d.Number ? i.value / 255 : i.value / 100), a.type !== d.None && (t.b = a.type === d.Number ? a.value / 255 : a.value / 100), o.type !== d.None && (t.alpha = Math.min(
      1,
      Math.max(
        0,
        o.type === d.Number ? o.value : o.value / 100
      )
    )), t;
}
const Si = (e) => e === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0, Pi = (e, n, t) => e + t * (n - e), Ai = (e) => {
  let n = [];
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t], i = e[t + 1];
    r === void 0 && i === void 0 ? n.push(void 0) : r !== void 0 && i !== void 0 ? n.push([r, i]) : n.push(r !== void 0 ? [r, r] : [i, i]);
  }
  return n;
}, Ei = (e) => (n) => {
  let t = Ai(n);
  return (r) => {
    let i = r * t.length, a = r >= 1 ? t.length - 1 : Math.max(Math.floor(i), 0), o = t[a];
    return o === void 0 ? void 0 : e(o[0], o[1], i - a);
  };
}, h = Ei(Pi), T = (e) => {
  let n = !1, t = e.map((r) => r !== void 0 ? (n = !0, r) : 1);
  return n ? t : e;
}, be = {
  mode: "rgb",
  channels: ["r", "g", "b", "alpha"],
  parse: [
    Ci,
    vi,
    ki,
    gi,
    Si,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: h,
    g: h,
    b: h,
    alpha: { use: h, fixup: T }
  },
  gamut: !0,
  white: { r: 1, g: 1, b: 1 },
  black: { r: 0, g: 0, b: 0 }
}, xt = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), En = (e) => {
  let n = xt(e.r), t = xt(e.g), r = xt(e.b), i = {
    mode: "xyz65",
    x: 0.5766690429101305 * n + 0.1855582379065463 * t + 0.1882286462349947 * r,
    y: 0.297344975250536 * n + 0.6273635662554661 * t + 0.0752914584939979 * r,
    z: 0.0270313613864123 * n + 0.0706888525358272 * t + 0.9913375368376386 * r
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, yt = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), In = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "a98",
    r: yt(
      e * 2.0415879038107465 - n * 0.5650069742788597 - 0.3447313507783297 * t
    ),
    g: yt(
      e * -0.9692436362808798 + n * 1.8759675015077206 + 0.0415550574071756 * t
    ),
    b: yt(
      e * 0.0134442806320312 - n * 0.1183623922310184 + 1.0151749943912058 * t
    )
  };
  return r !== void 0 && (i.alpha = r), i;
}, Mt = (e = 0) => {
  const n = Math.abs(e);
  return n <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((n + 0.055) / 1.055, 2.4);
}, ge = ({ r: e, g: n, b: t, alpha: r }) => {
  let i = {
    mode: "lrgb",
    r: Mt(e),
    g: Mt(n),
    b: Mt(t)
  };
  return r !== void 0 && (i.alpha = r), i;
}, ae = (e) => {
  let { r: n, g: t, b: r, alpha: i } = ge(e), a = {
    mode: "xyz65",
    x: 0.4123907992659593 * n + 0.357584339383878 * t + 0.1804807884018343 * r,
    y: 0.2126390058715102 * n + 0.715168678767756 * t + 0.0721923153607337 * r,
    z: 0.0193308187155918 * n + 0.119194779794626 * t + 0.9505321522496607 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, kt = (e = 0) => {
  const n = Math.abs(e);
  return n > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(n, 1 / 2.4) - 0.055) : e * 12.92;
}, me = ({ r: e, g: n, b: t, alpha: r }, i = "rgb") => {
  let a = {
    mode: i,
    r: kt(e),
    g: kt(n),
    b: kt(t)
  };
  return r !== void 0 && (a.alpha = r), a;
}, oe = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = me({
    r: e * 3.2409699419045226 - n * 1.537383177570094 - 0.4986107602930034 * t,
    g: e * -0.9692436362808796 + n * 1.8759675015077204 + 0.0415550574071756 * t,
    b: e * 0.0556300796969936 - n * 0.2039769588889765 + 1.0569715142428784 * t
  });
  return r !== void 0 && (i.alpha = r), i;
}, Ii = {
  ...be,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => In(ae(e)),
    xyz65: In
  },
  toMode: {
    rgb: (e) => oe(En(e)),
    xyz65: En
  }
}, C = (e) => (e = e % 360) < 0 ? e + 360 : e, qi = (e, n) => e.map((t, r, i) => {
  if (t === void 0)
    return t;
  let a = C(t);
  return r === 0 || e[r - 1] === void 0 ? a : n(a - C(i[r - 1]));
}).reduce((t, r) => !t.length || r === void 0 || t[t.length - 1] === void 0 ? (t.push(r), t) : (t.push(r + t[t.length - 1]), t), []), Y = (e) => qi(e, (n) => Math.abs(n) <= 180 ? n : n - 360 * Math.sign(n)), L = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0], Ri = Math.PI / 180, Xi = 180 / Math.PI;
let qn = L[3] * L[4], Rn = L[1] * L[4], Xn = L[1] * L[2] - L[0] * L[3];
const Fi = ({ r: e, g: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (Xn * t + e * qn - n * Rn) / (Xn + qn - Rn), a = t - i, o = (L[4] * (n - i) - L[2] * a) / L[3], c = {
    mode: "cubehelix",
    l: i,
    s: i === 0 || i === 1 ? void 0 : Math.sqrt(a * a + o * o) / (L[4] * i * (1 - i))
  };
  return c.s && (c.h = Math.atan2(o, a) * Xi - 120), r !== void 0 && (c.alpha = r), c;
}, Oi = ({ h: e, s: n, l: t, alpha: r }) => {
  let i = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * Ri, t === void 0 && (t = 0);
  let a = n === void 0 ? 0 : n * t * (1 - t), o = Math.cos(e), c = Math.sin(e);
  return i.r = t + a * (L[0] * o + L[1] * c), i.g = t + a * (L[2] * o + L[3] * c), i.b = t + a * (L[4] * o + L[5] * c), r !== void 0 && (i.alpha = r), i;
}, tt = (e, n) => {
  if (e.h === void 0 || n.h === void 0 || !e.s || !n.s)
    return 0;
  let t = C(e.h), r = C(n.h), i = Math.sin((r - t + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * n.s) * i;
}, ji = (e, n) => {
  if (e.h === void 0 || n.h === void 0)
    return 0;
  let t = C(e.h), r = C(n.h);
  return Math.abs(r - t) > 180 ? t - (r - 360 * Math.sign(r - t)) : r - t;
}, nt = (e, n) => {
  if (e.h === void 0 || n.h === void 0 || !e.c || !n.c)
    return 0;
  let t = C(e.h), r = C(n.h), i = Math.sin((r - t + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * n.c) * i;
}, B = (e) => {
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
}, Di = {
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
    rgb: Fi
  },
  toMode: {
    rgb: Oi
  },
  interpolate: {
    h: {
      use: h,
      fixup: Y
    },
    s: h,
    l: h,
    alpha: {
      use: h,
      fixup: T
    }
  },
  difference: {
    h: tt
  },
  average: {
    h: B
  }
}, K = ({ l: e, a: n, b: t, alpha: r }, i = "lch") => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let a = Math.sqrt(n * n + t * t), o = { mode: i, l: e, c: a };
  return a && (o.h = C(Math.atan2(t, n) * 180 / Math.PI)), r !== void 0 && (o.alpha = r), o;
}, Q = ({ l: e, c: n, h: t, alpha: r }, i = "lab") => {
  t === void 0 && (t = 0);
  let a = {
    mode: i,
    l: e,
    a: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    b: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return r !== void 0 && (a.alpha = r), a;
}, gr = Math.pow(29, 3) / Math.pow(3, 3), mr = Math.pow(6, 3) / Math.pow(29, 3), z = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: (1 - 0.3457 - 0.3585) / 0.3585
}, de = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: (1 - 0.3127 - 0.329) / 0.329
};
let wt = (e) => Math.pow(e, 3) > mr ? Math.pow(e, 3) : (116 * e - 16) / gr;
const vr = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (e + 16) / 116, a = n / 500 + i, o = i - t / 200, c = {
    mode: "xyz65",
    x: wt(a) * de.X,
    y: wt(i) * de.Y,
    z: wt(o) * de.Z
  };
  return r !== void 0 && (c.alpha = r), c;
}, rt = (e) => oe(vr(e)), $t = (e) => e > mr ? Math.cbrt(e) : (gr * e + 16) / 116, xr = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = $t(e / de.X), a = $t(n / de.Y), o = $t(t / de.Z), c = {
    mode: "lab65",
    l: 116 * a - 16,
    a: 500 * (i - a),
    b: 200 * (a - o)
  };
  return r !== void 0 && (c.alpha = r), c;
}, it = (e) => {
  let n = xr(ae(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, Ve = 1, yr = 1, He = 26 / 180 * Math.PI, We = Math.cos(He), Ue = Math.sin(He), Mr = 100 / Math.log(139 / 100), Wt = ({ l: e, c: n, h: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "lab65",
    l: (Math.exp(e * Ve / Mr) - 1) / 39e-4
  }, a = (Math.exp(0.0435 * n * yr * Ve) - 1) / 0.075, o = a * Math.cos(t / 180 * Math.PI - He), c = a * Math.sin(t / 180 * Math.PI - He);
  return i.a = o * We - c / 0.83 * Ue, i.b = o * Ue + c / 0.83 * We, r !== void 0 && (i.alpha = r), i;
}, Ut = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = n * We + t * Ue, a = 0.83 * (t * We - n * Ue), o = Math.sqrt(i * i + a * a), c = {
    mode: "dlch",
    l: Mr / Ve * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * o) / (0.0435 * yr * Ve)
  };
  return c.c && (c.h = C((Math.atan2(a, i) + He) / Math.PI * 180)), r !== void 0 && (c.alpha = r), c;
}, Fn = (e) => Wt(K(e, "dlch")), On = (e) => Q(Ut(e), "dlab"), Zi = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: Fn,
    rgb: (e) => rt(Fn(e))
  },
  fromMode: {
    lab65: On,
    rgb: (e) => On(it(e))
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
      fixup: T
    }
  }
}, Yi = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: Wt,
    dlab: (e) => Q(e, "dlab"),
    rgb: (e) => rt(Wt(e))
  },
  fromMode: {
    lab65: Ut,
    dlab: (e) => K(e, "dlch"),
    rgb: (e) => Ut(it(e))
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
      fixup: Y
    },
    alpha: {
      use: h,
      fixup: T
    }
  },
  difference: {
    h: nt
  },
  average: {
    h: B
  }
};
function Bi({ h: e, s: n, i: t, alpha: r }) {
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
function Gi({ r: e, g: n, b: t, alpha: r }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.max(e, n, t), a = Math.min(e, n, t), o = {
    mode: "hsi",
    s: e + n + t === 0 ? 0 : 1 - 3 * a / (e + n + t),
    i: (e + n + t) / 3
  };
  return i - a !== 0 && (o.h = (i === e ? (n - t) / (i - a) + (n < t) * 6 : i === n ? (t - e) / (i - a) + 2 : (e - n) / (i - a) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
const Ji = {
  mode: "hsi",
  toMode: {
    rgb: Bi
  },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: {
    rgb: Gi
  },
  channels: ["h", "s", "i", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: h, fixup: Y },
    s: h,
    i: h,
    alpha: { use: h, fixup: T }
  },
  difference: {
    h: tt
  },
  average: {
    h: B
  }
};
function Vi({ h: e, s: n, l: t, alpha: r }) {
  e = C(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
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
function Wi({ r: e, g: n, b: t, alpha: r }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.max(e, n, t), a = Math.min(e, n, t), o = {
    mode: "hsl",
    s: i === a ? 0 : (i - a) / (1 - Math.abs(i + a - 1)),
    l: 0.5 * (i + a)
  };
  return i - a !== 0 && (o.h = (i === e ? (n - t) / (i - a) + (n < t) * 6 : i === n ? (t - e) / (i - a) + 2 : (e - n) / (i - a) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
const Ui = (e, n) => {
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
}, Ki = new RegExp(
  `^hsla?\\(\\s*${xi}${ue}${Le}${ue}${Le}\\s*(?:,\\s*${mn}\\s*)?\\)$`
), Qi = (e) => {
  let n = e.match(Ki);
  if (!n) return;
  let t = { mode: "hsl" };
  return n[3] !== void 0 ? t.h = +n[3] : n[1] !== void 0 && n[2] !== void 0 && (t.h = Ui(n[1], n[2])), n[4] !== void 0 && (t.s = Math.min(Math.max(0, n[4] / 100), 1)), n[5] !== void 0 && (t.l = Math.min(Math.max(0, n[5] / 100), 1)), n[6] !== void 0 ? t.alpha = Math.max(0, Math.min(1, n[6] / 100)) : n[7] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[7]))), t;
};
function ea(e, n) {
  if (!n || n[0] !== "hsl" && n[0] !== "hsla")
    return;
  const t = { mode: "hsl" }, [, r, i, a, o] = n;
  if (r.type !== d.None) {
    if (r.type === d.Percentage)
      return;
    t.h = r.value;
  }
  if (i.type !== d.None) {
    if (i.type === d.Hue)
      return;
    t.s = i.value / 100;
  }
  if (a.type !== d.None) {
    if (a.type === d.Hue)
      return;
    t.l = a.value / 100;
  }
  return o.type !== d.None && (t.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === d.Number ? o.value : o.value / 100
    )
  )), t;
}
const kr = {
  mode: "hsl",
  toMode: {
    rgb: Vi
  },
  fromMode: {
    rgb: Wi
  },
  channels: ["h", "s", "l", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [ea, Qi],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: h, fixup: Y },
    s: h,
    l: h,
    alpha: { use: h, fixup: T }
  },
  difference: {
    h: tt
  },
  average: {
    h: B
  }
};
function wr({ h: e, s: n, v: t, alpha: r }) {
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
function $r({ r: e, g: n, b: t, alpha: r }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.max(e, n, t), a = Math.min(e, n, t), o = {
    mode: "hsv",
    s: i === 0 ? 0 : 1 - a / i,
    v: i
  };
  return i - a !== 0 && (o.h = (i === e ? (n - t) / (i - a) + (n < t) * 6 : i === n ? (t - e) / (i - a) + 2 : (e - n) / (i - a) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
const zr = {
  mode: "hsv",
  toMode: {
    rgb: wr
  },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: {
    rgb: $r
  },
  channels: ["h", "s", "v", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: h, fixup: Y },
    s: h,
    v: h,
    alpha: { use: h, fixup: T }
  },
  difference: {
    h: tt
  },
  average: {
    h: B
  }
};
function ta({ h: e, w: n, b: t, alpha: r }) {
  if (n === void 0 && (n = 0), t === void 0 && (t = 0), n + t > 1) {
    let i = n + t;
    n /= i, t /= i;
  }
  return wr({
    h: e,
    s: t === 1 ? 1 : 1 - n / (1 - t),
    v: 1 - t,
    alpha: r
  });
}
function na(e) {
  let n = $r(e);
  if (n === void 0) return;
  let t = n.s !== void 0 ? n.s : 0, r = n.v !== void 0 ? n.v : 0, i = {
    mode: "hwb",
    w: (1 - t) * r,
    b: 1 - r
  };
  return n.h !== void 0 && (i.h = n.h), n.alpha !== void 0 && (i.alpha = n.alpha), i;
}
function ra(e, n) {
  if (!n || n[0] !== "hwb")
    return;
  const t = { mode: "hwb" }, [, r, i, a, o] = n;
  if (r.type !== d.None) {
    if (r.type === d.Percentage)
      return;
    t.h = r.value;
  }
  if (i.type !== d.None) {
    if (i.type === d.Hue)
      return;
    t.w = i.value / 100;
  }
  if (a.type !== d.None) {
    if (a.type === d.Hue)
      return;
    t.b = a.value / 100;
  }
  return o.type !== d.None && (t.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === d.Number ? o.value : o.value / 100
    )
  )), t;
}
const ia = {
  mode: "hwb",
  toMode: {
    rgb: ta
  },
  fromMode: {
    rgb: na
  },
  channels: ["h", "w", "b", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [ra],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: h, fixup: Y },
    w: h,
    b: h,
    alpha: { use: h, fixup: T }
  },
  difference: {
    h: ji
  },
  average: {
    h: B
  }
}, _r = 203, at = 0.1593017578125, Tr = 78.84375, ot = 0.8359375, st = 18.8515625, lt = 18.6875;
function zt(e) {
  if (e < 0) return 0;
  const n = Math.pow(e, 1 / Tr);
  return 1e4 * Math.pow(Math.max(0, n - ot) / (st - lt * n), 1 / at);
}
function _t(e) {
  if (e < 0) return 0;
  const n = Math.pow(e / 1e4, at);
  return Math.pow((ot + st * n) / (1 + lt * n), Tr);
}
const Tt = (e) => Math.max(e / _r, 0), jn = ({ i: e, t: n, p: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = zt(
    e + 0.008609037037932761 * n + 0.11102962500302593 * t
  ), a = zt(
    e - 0.00860903703793275 * n - 0.11102962500302599 * t
  ), o = zt(
    e + 0.5600313357106791 * n - 0.32062717498731885 * t
  ), c = {
    mode: "xyz65",
    x: Tt(
      2.070152218389422 * i - 1.3263473389671556 * a + 0.2066510476294051 * o
    ),
    y: Tt(
      0.3647385209748074 * i + 0.680566024947227 * a - 0.0453045459220346 * o
    ),
    z: Tt(
      -0.049747207535812 * i - 0.0492609666966138 * a + 1.1880659249923042 * o
    )
  };
  return r !== void 0 && (c.alpha = r), c;
}, Nt = (e = 0) => Math.max(e * _r, 0), Dn = ({ x: e, y: n, z: t, alpha: r }) => {
  const i = Nt(e), a = Nt(n), o = Nt(t), c = _t(
    0.3592832590121217 * i + 0.6976051147779502 * a - 0.0358915932320289 * o
  ), p = _t(
    -0.1920808463704995 * i + 1.1004767970374323 * a + 0.0753748658519118 * o
  ), u = _t(
    0.0070797844607477 * i + 0.0748396662186366 * a + 0.8433265453898765 * o
  ), b = 0.5 * c + 0.5 * p, m = 1.61376953125 * c - 3.323486328125 * p + 1.709716796875 * u, v = 4.378173828125 * c - 4.24560546875 * p - 0.132568359375 * u, k = { mode: "itp", i: b, t: m, p: v };
  return r !== void 0 && (k.alpha = r), k;
}, aa = {
  mode: "itp",
  channels: ["i", "t", "p", "alpha"],
  parse: ["--ictcp"],
  serialize: "--ictcp",
  toMode: {
    xyz65: jn,
    rgb: (e) => oe(jn(e))
  },
  fromMode: {
    xyz65: Dn,
    rgb: (e) => Dn(ae(e))
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
    alpha: { use: h, fixup: T }
  }
}, oa = 134.03437499999998, sa = 16295499532821565e-27, Lt = (e) => {
  if (e < 0) return 0;
  let n = Math.pow(e / 1e4, at);
  return Math.pow((ot + st * n) / (1 + lt * n), oa);
}, Ht = (e = 0) => Math.max(e * 203, 0), Nr = ({ x: e, y: n, z: t, alpha: r }) => {
  e = Ht(e), n = Ht(n), t = Ht(t);
  let i = 1.15 * e - 0.15 * t, a = 0.66 * n + 0.34 * e, o = Lt(0.41478972 * i + 0.579999 * a + 0.014648 * t), c = Lt(-0.20151 * i + 1.120649 * a + 0.0531008 * t), p = Lt(-0.0166008 * i + 0.2648 * a + 0.6684799 * t), u = (o + c) / 2, b = {
    mode: "jab",
    j: 0.44 * u / (1 - 0.56 * u) - sa,
    a: 3.524 * o - 4.066708 * c + 0.542708 * p,
    b: 0.199076 * o + 1.096799 * c - 1.295875 * p
  };
  return r !== void 0 && (b.alpha = r), b;
}, la = 134.03437499999998, Zn = 16295499532821565e-27, Ct = (e) => {
  if (e < 0) return 0;
  let n = Math.pow(e, 1 / la);
  return 1e4 * Math.pow((ot - n) / (lt * n - st), 1 / at);
}, St = (e) => e / 203, Lr = ({ j: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (e + Zn) / (0.44 + 0.56 * (e + Zn)), a = Ct(i + 0.13860504 * n + 0.058047316 * t), o = Ct(i - 0.13860504 * n - 0.058047316 * t), c = Ct(i - 0.096019242 * n - 0.8118919 * t), p = {
    mode: "xyz65",
    x: St(
      1.661373024652174 * a - 0.914523081304348 * o + 0.23136208173913045 * c
    ),
    y: St(
      -0.3250758611844533 * a + 1.571847026732543 * o - 0.21825383453227928 * c
    ),
    z: St(-0.090982811 * a - 0.31272829 * o + 1.5227666 * c)
  };
  return r !== void 0 && (p.alpha = r), p;
}, Hr = (e) => {
  let n = Nr(ae(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, Cr = (e) => oe(Lr(e)), ca = {
  mode: "jab",
  channels: ["j", "a", "b", "alpha"],
  parse: ["--jzazbz"],
  serialize: "--jzazbz",
  fromMode: {
    rgb: Hr,
    xyz65: Nr
  },
  toMode: {
    rgb: Cr,
    xyz65: Lr
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
    alpha: { use: h, fixup: T }
  }
}, Yn = ({ j: e, a: n, b: t, alpha: r }) => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.sqrt(n * n + t * t), a = {
    mode: "jch",
    j: e,
    c: i
  };
  return i && (a.h = C(Math.atan2(t, n) * 180 / Math.PI)), r !== void 0 && (a.alpha = r), a;
}, Bn = ({ j: e, c: n, h: t, alpha: r }) => {
  t === void 0 && (t = 0);
  let i = {
    mode: "jab",
    j: e,
    a: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    b: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return r !== void 0 && (i.alpha = r), i;
}, da = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: Bn,
    rgb: (e) => Cr(Bn(e))
  },
  fromMode: {
    rgb: (e) => Yn(Hr(e)),
    jab: Yn
  },
  channels: ["j", "c", "h", "alpha"],
  ranges: {
    j: [0, 0.221],
    c: [0, 0.19],
    h: [0, 360]
  },
  interpolate: {
    h: { use: h, fixup: Y },
    c: h,
    j: h,
    alpha: { use: h, fixup: T }
  },
  difference: {
    h: nt
  },
  average: {
    h: B
  }
}, ct = Math.pow(29, 3) / Math.pow(3, 3), vn = Math.pow(6, 3) / Math.pow(29, 3);
let Pt = (e) => Math.pow(e, 3) > vn ? Math.pow(e, 3) : (116 * e - 16) / ct;
const xn = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (e + 16) / 116, a = n / 500 + i, o = i - t / 200, c = {
    mode: "xyz50",
    x: Pt(a) * z.X,
    y: Pt(i) * z.Y,
    z: Pt(o) * z.Z
  };
  return r !== void 0 && (c.alpha = r), c;
}, qe = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = me({
    r: e * 3.1341359569958707 - n * 1.6173863321612538 - 0.4906619460083532 * t,
    g: e * -0.978795502912089 + n * 1.916254567259524 + 0.03344273116131949 * t,
    b: e * 0.07195537988411677 - n * 0.2289768264158322 + 1.405386058324125 * t
  });
  return r !== void 0 && (i.alpha = r), i;
}, Sr = (e) => qe(xn(e)), Re = (e) => {
  let { r: n, g: t, b: r, alpha: i } = ge(e), a = {
    mode: "xyz50",
    x: 0.436065742824811 * n + 0.3851514688337912 * t + 0.14307845442264197 * r,
    y: 0.22249319175623702 * n + 0.7168870538238823 * t + 0.06061979053616537 * r,
    z: 0.013923904500943465 * n + 0.09708128566574634 * t + 0.7140993584005155 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, At = (e) => e > vn ? Math.cbrt(e) : (ct * e + 16) / 116, yn = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = At(e / z.X), a = At(n / z.Y), o = At(t / z.Z), c = {
    mode: "lab",
    l: 116 * a - 16,
    a: 500 * (i - a),
    b: 200 * (a - o)
  };
  return r !== void 0 && (c.alpha = r), c;
}, Pr = (e) => {
  let n = yn(Re(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
};
function pa(e, n) {
  if (!n || n[0] !== "lab")
    return;
  const t = { mode: "lab" }, [, r, i, a, o] = n;
  if (!(r.type === d.Hue || i.type === d.Hue || a.type === d.Hue))
    return r.type !== d.None && (t.l = Math.min(Math.max(0, r.value), 100)), i.type !== d.None && (t.a = i.type === d.Number ? i.value : i.value * 125 / 100), a.type !== d.None && (t.b = a.type === d.Number ? a.value : a.value * 125 / 100), o.type !== d.None && (t.alpha = Math.min(
      1,
      Math.max(
        0,
        o.type === d.Number ? o.value : o.value / 100
      )
    )), t;
}
const Mn = {
  mode: "lab",
  toMode: {
    xyz50: xn,
    rgb: Sr
  },
  fromMode: {
    xyz50: yn,
    rgb: Pr
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  },
  parse: [pa],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: h,
    a: h,
    b: h,
    alpha: { use: h, fixup: T }
  }
}, fa = {
  ...Mn,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: vr,
    rgb: rt
  },
  fromMode: {
    xyz65: xr,
    rgb: it
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function ha(e, n) {
  if (!n || n[0] !== "lch")
    return;
  const t = { mode: "lch" }, [, r, i, a, o] = n;
  if (r.type !== d.None) {
    if (r.type === d.Hue)
      return;
    t.l = Math.min(Math.max(0, r.value), 100);
  }
  if (i.type !== d.None && (t.c = Math.max(
    0,
    i.type === d.Number ? i.value : i.value * 150 / 100
  )), a.type !== d.None) {
    if (a.type === d.Percentage)
      return;
    t.h = a.value;
  }
  return o.type !== d.None && (t.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === d.Number ? o.value : o.value / 100
    )
  )), t;
}
const kn = {
  mode: "lch",
  toMode: {
    lab: Q,
    rgb: (e) => Sr(Q(e))
  },
  fromMode: {
    rgb: (e) => K(Pr(e)),
    lab: K
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  },
  parse: [ha],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: h, fixup: Y },
    c: h,
    l: h,
    alpha: { use: h, fixup: T }
  },
  difference: {
    h: nt
  },
  average: {
    h: B
  }
}, ua = {
  ...kn,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => Q(e, "lab65"),
    rgb: (e) => rt(Q(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => K(it(e), "lch65"),
    lab65: (e) => K(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, Ar = ({ l: e, u: n, v: t, alpha: r }) => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.sqrt(n * n + t * t), a = {
    mode: "lchuv",
    l: e,
    c: i
  };
  return i && (a.h = C(Math.atan2(t, n) * 180 / Math.PI)), r !== void 0 && (a.alpha = r), a;
}, Er = ({ l: e, c: n, h: t, alpha: r }) => {
  t === void 0 && (t = 0);
  let i = {
    mode: "luv",
    l: e,
    u: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    v: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return r !== void 0 && (i.alpha = r), i;
}, Ir = (e, n, t) => 4 * e / (e + 15 * n + 3 * t), qr = (e, n, t) => 9 * n / (e + 15 * n + 3 * t), ba = Ir(z.X, z.Y, z.Z), ga = qr(z.X, z.Y, z.Z), ma = (e) => e <= vn ? ct * e : 116 * Math.cbrt(e) - 16, Kt = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = ma(n / z.Y), a = Ir(e, n, t), o = qr(e, n, t);
  !isFinite(a) || !isFinite(o) ? i = a = o = 0 : (a = 13 * i * (a - ba), o = 13 * i * (o - ga));
  let c = {
    mode: "luv",
    l: i,
    u: a,
    v: o
  };
  return r !== void 0 && (c.alpha = r), c;
}, va = (e, n, t) => 4 * e / (e + 15 * n + 3 * t), xa = (e, n, t) => 9 * n / (e + 15 * n + 3 * t), ya = va(z.X, z.Y, z.Z), Ma = xa(z.X, z.Y, z.Z), Qt = ({ l: e, u: n, v: t, alpha: r }) => {
  if (e === void 0 && (e = 0), e === 0)
    return { mode: "xyz50", x: 0, y: 0, z: 0 };
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = n / (13 * e) + ya, a = t / (13 * e) + Ma, o = z.Y * (e <= 8 ? e / ct : Math.pow((e + 16) / 116, 3)), c = o * (9 * i) / (4 * a), p = o * (12 - 3 * i - 20 * a) / (4 * a), u = { mode: "xyz50", x: c, y: o, z: p };
  return r !== void 0 && (u.alpha = r), u;
}, ka = (e) => Ar(Kt(Re(e))), wa = (e) => qe(Qt(Er(e))), $a = {
  mode: "lchuv",
  toMode: {
    luv: Er,
    rgb: wa
  },
  fromMode: {
    rgb: ka,
    luv: Ar
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
    h: { use: h, fixup: Y },
    c: h,
    l: h,
    alpha: { use: h, fixup: T }
  },
  difference: {
    h: nt
  },
  average: {
    h: B
  }
}, za = {
  ...be,
  mode: "lrgb",
  toMode: {
    rgb: me
  },
  fromMode: {
    rgb: ge
  },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, _a = {
  mode: "luv",
  toMode: {
    xyz50: Qt,
    rgb: (e) => qe(Qt(e))
  },
  fromMode: {
    xyz50: Kt,
    rgb: (e) => Kt(Re(e))
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
    alpha: { use: h, fixup: T }
  }
}, Rr = ({ r: e, g: n, b: t, alpha: r }) => {
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
}, dt = (e) => {
  let n = Rr(ge(e));
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
}, pt = (e) => me(Xe(e));
function en(e) {
  const r = 1.170873786407767;
  return 0.5 * (r * e - 0.206 + Math.sqrt((r * e - 0.206) * (r * e - 0.206) + 4 * 0.03 * r * e));
}
function Ke(e) {
  return (e * e + 0.206 * e) / (1.170873786407767 * (e + 0.03));
}
function Ta(e, n) {
  let t, r, i, a, o, c, p, u;
  -1.88170328 * e - 0.80936493 * n > 1 ? (t = 1.19086277, r = 1.76576728, i = 0.59662641, a = 0.75515197, o = 0.56771245, c = 4.0767416621, p = -3.3077115913, u = 0.2309699292) : 1.81444104 * e - 1.19445276 * n > 1 ? (t = 0.73956515, r = -0.45954404, i = 0.08285427, a = 0.1254107, o = 0.14503204, c = -1.2684380046, p = 2.6097574011, u = -0.3413193965) : (t = 1.35733652, r = -915799e-8, i = -1.1513021, a = -0.50559606, o = 692167e-8, c = -0.0041960863, p = -0.7034186147, u = 1.707614701);
  let b = t + r * e + i * n + a * e * e + o * e * n, m = 0.3963377774 * e + 0.2158037573 * n, v = -0.1055613458 * e - 0.0638541728 * n, k = -0.0894841775 * e - 1.291485548 * n;
  {
    let _ = 1 + b * m, H = 1 + b * v, N = 1 + b * k, P = _ * _ * _, S = H * H * H, G = N * N * N, xe = 3 * m * _ * _, ye = 3 * v * H * H, Me = 3 * k * N * N, ke = 6 * m * m * _, we = 6 * v * v * H, $e = 6 * k * k * N, se = c * P + p * S + u * G, ee = c * xe + p * ye + u * Me, ze = c * ke + p * we + u * $e;
    b = b - se * ee / (ee * ee - 0.5 * se * ze);
  }
  return b;
}
function wn(e, n) {
  let t = Ta(e, n), r = Xe({ l: 1, a: t * e, b: t * n }), i = Math.cbrt(1 / Math.max(r.r, r.g, r.b)), a = i * t;
  return [i, a];
}
function Na(e, n, t, r, i, a = null) {
  a || (a = wn(e, n));
  let o;
  if ((t - i) * a[1] - (a[0] - i) * r <= 0)
    o = a[1] * i / (r * a[0] + a[1] * (i - t));
  else {
    o = a[1] * (i - 1) / (r * (a[0] - 1) + a[1] * (i - t));
    {
      let c = t - i, p = r, u = 0.3963377774 * e + 0.2158037573 * n, b = -0.1055613458 * e - 0.0638541728 * n, m = -0.0894841775 * e - 1.291485548 * n, v = c + p * u, k = c + p * b, _ = c + p * m;
      {
        let H = i * (1 - o) + o * t, N = o * r, P = H + N * u, S = H + N * b, G = H + N * m, xe = P * P * P, ye = S * S * S, Me = G * G * G, ke = 3 * v * P * P, we = 3 * k * S * S, $e = 3 * _ * G * G, se = 6 * v * v * P, ee = 6 * k * k * S, ze = 6 * _ * _ * G, Tn = 4.0767416621 * xe - 3.3077115913 * ye + 0.2309699292 * Me - 1, ft = 4.0767416621 * ke - 3.3077115913 * we + 0.2309699292 * $e, di = 4.0767416621 * se - 3.3077115913 * ee + 0.2309699292 * ze, Nn = ft / (ft * ft - 0.5 * Tn * di), ht = -Tn * Nn, Ln = -1.2684380046 * xe + 2.6097574011 * ye - 0.3413193965 * Me - 1, ut = -1.2684380046 * ke + 2.6097574011 * we - 0.3413193965 * $e, pi = -1.2684380046 * se + 2.6097574011 * ee - 0.3413193965 * ze, Hn = ut / (ut * ut - 0.5 * Ln * pi), bt = -Ln * Hn, Cn = -0.0041960863 * xe - 0.7034186147 * ye + 1.707614701 * Me - 1, gt = -0.0041960863 * ke - 0.7034186147 * we + 1.707614701 * $e, fi = -0.0041960863 * se - 0.7034186147 * ee + 1.707614701 * ze, Sn = gt / (gt * gt - 0.5 * Cn * fi), mt = -Cn * Sn;
        ht = Nn >= 0 ? ht : 1e6, bt = Hn >= 0 ? bt : 1e6, mt = Sn >= 0 ? mt : 1e6, o += Math.min(ht, Math.min(bt, mt));
      }
    }
  }
  return o;
}
function $n(e, n, t = null) {
  t || (t = wn(e, n));
  let r = t[0], i = t[1];
  return [i / r, i / (1 - r)];
}
function Xr(e, n, t) {
  let r = wn(n, t), i = Na(n, t, e, 1, e, r), a = $n(n, t, r), o = 0.11516993 + 1 / (7.4477897 + 4.1590124 * t + n * (-2.19557347 + 1.75198401 * t + n * (-2.13704948 - 10.02301043 * t + n * (-4.24894561 + 5.38770819 * t + 4.69891013 * n)))), c = 0.11239642 + 1 / (1.6132032 - 0.68124379 * t + n * (0.40370612 + 0.90148123 * t + n * (-0.27087943 + 0.6122399 * t + n * (299215e-8 - 0.45399568 * t - 0.14661872 * n)))), p = i / Math.min(e * a[0], (1 - e) * a[1]), u = e * o, b = (1 - e) * c, m = 0.9 * p * Math.sqrt(
    Math.sqrt(
      1 / (1 / (u * u * u * u) + 1 / (b * b * b * b))
    )
  );
  return u = e * 0.4, b = (1 - e) * 0.8, [Math.sqrt(1 / (1 / (u * u) + 1 / (b * b))), m, i];
}
function Gn(e) {
  const n = e.l !== void 0 ? e.l : 0, t = e.a !== void 0 ? e.a : 0, r = e.b !== void 0 ? e.b : 0, i = { mode: "okhsl", l: en(n) };
  e.alpha !== void 0 && (i.alpha = e.alpha);
  let a = Math.sqrt(t * t + r * r);
  if (!a)
    return i.s = 0, i;
  let [o, c, p] = Xr(n, t / a, r / a), u;
  if (a < c) {
    let b = 0, m = 0.8 * o, v = 1 - m / c;
    u = (a - b) / (m + v * (a - b)) * 0.8;
  } else {
    let b = c, m = 0.2 * c * c * 1.25 * 1.25 / o, v = 1 - m / (p - c);
    u = 0.8 + 0.2 * ((a - b) / (m + v * (a - b)));
  }
  return u && (i.s = u, i.h = C(Math.atan2(r, t) * 180 / Math.PI)), i;
}
function Jn(e) {
  let n = e.h !== void 0 ? e.h : 0, t = e.s !== void 0 ? e.s : 0, r = e.l !== void 0 ? e.l : 0;
  const i = { mode: "oklab", l: Ke(r) };
  if (e.alpha !== void 0 && (i.alpha = e.alpha), !t || r === 1)
    return i.a = i.b = 0, i;
  let a = Math.cos(n / 180 * Math.PI), o = Math.sin(n / 180 * Math.PI), [c, p, u] = Xr(i.l, a, o), b, m, v, k;
  t < 0.8 ? (b = 1.25 * t, m = 0, v = 0.8 * c, k = 1 - v / p) : (b = 5 * (t - 0.8), m = p, v = 0.2 * p * p * 1.25 * 1.25 / c, k = 1 - v / (u - p));
  let _ = m + b * v / (1 - k * b);
  return i.a = _ * a, i.b = _ * o, i;
}
const La = {
  ...kr,
  mode: "okhsl",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--okhsl"],
  serialize: "--okhsl",
  fromMode: {
    oklab: Gn,
    rgb: (e) => Gn(dt(e))
  },
  toMode: {
    oklab: Jn,
    rgb: (e) => pt(Jn(e))
  }
};
function Vn(e) {
  let n = e.l !== void 0 ? e.l : 0, t = e.a !== void 0 ? e.a : 0, r = e.b !== void 0 ? e.b : 0, i = Math.sqrt(t * t + r * r), a = i ? t / i : 1, o = i ? r / i : 1, [c, p] = $n(a, o), u = 0.5, b = 1 - u / c, m = p / (i + n * p), v = m * n, k = m * i, _ = Ke(v), H = k * _ / v, N = Xe({ l: _, a: a * H, b: o * H }), P = Math.cbrt(
    1 / Math.max(N.r, N.g, N.b, 0)
  );
  n = n / P, i = i / P * en(n) / n, n = en(n);
  const S = {
    mode: "okhsv",
    s: i ? (u + p) * k / (p * u + p * b * k) : 0,
    v: n ? n / v : 0
  };
  return S.s && (S.h = C(Math.atan2(r, t) * 180 / Math.PI)), e.alpha !== void 0 && (S.alpha = e.alpha), S;
}
function Wn(e) {
  const n = { mode: "oklab" };
  e.alpha !== void 0 && (n.alpha = e.alpha);
  const t = e.h !== void 0 ? e.h : 0, r = e.s !== void 0 ? e.s : 0, i = e.v !== void 0 ? e.v : 0, a = Math.cos(t / 180 * Math.PI), o = Math.sin(t / 180 * Math.PI), [c, p] = $n(a, o), u = 0.5, b = 1 - u / c, m = 1 - r * u / (u + p - p * b * r), v = r * p * u / (u + p - p * b * r), k = Ke(m), _ = v * k / m, H = Xe({
    l: k,
    a: a * _,
    b: o * _
  }), N = Math.cbrt(
    1 / Math.max(H.r, H.g, H.b, 0)
  ), P = Ke(i * m), S = v * P / m;
  return n.l = P * N, n.a = S * a * N, n.b = S * o * N, n;
}
const Ha = {
  ...zr,
  mode: "okhsv",
  channels: ["h", "s", "v", "alpha"],
  parse: ["--okhsv"],
  serialize: "--okhsv",
  fromMode: {
    oklab: Vn,
    rgb: (e) => Vn(dt(e))
  },
  toMode: {
    oklab: Wn,
    rgb: (e) => pt(Wn(e))
  }
};
function Ca(e, n) {
  if (!n || n[0] !== "oklab")
    return;
  const t = { mode: "oklab" }, [, r, i, a, o] = n;
  if (!(r.type === d.Hue || i.type === d.Hue || a.type === d.Hue))
    return r.type !== d.None && (t.l = Math.min(
      Math.max(0, r.type === d.Number ? r.value : r.value / 100),
      1
    )), i.type !== d.None && (t.a = i.type === d.Number ? i.value : i.value * 0.4 / 100), a.type !== d.None && (t.b = a.type === d.Number ? a.value : a.value * 0.4 / 100), o.type !== d.None && (t.alpha = Math.min(
      1,
      Math.max(
        0,
        o.type === d.Number ? o.value : o.value / 100
      )
    )), t;
}
const Sa = {
  ...Mn,
  mode: "oklab",
  toMode: {
    lrgb: Xe,
    rgb: pt
  },
  fromMode: {
    lrgb: Rr,
    rgb: dt
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [Ca],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function Pa(e, n) {
  if (!n || n[0] !== "oklch")
    return;
  const t = { mode: "oklch" }, [, r, i, a, o] = n;
  if (r.type !== d.None) {
    if (r.type === d.Hue)
      return;
    t.l = Math.min(
      Math.max(0, r.type === d.Number ? r.value : r.value / 100),
      1
    );
  }
  if (i.type !== d.None && (t.c = Math.max(
    0,
    i.type === d.Number ? i.value : i.value * 0.4 / 100
  )), a.type !== d.None) {
    if (a.type === d.Percentage)
      return;
    t.h = a.value;
  }
  return o.type !== d.None && (t.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === d.Number ? o.value : o.value / 100
    )
  )), t;
}
const Aa = {
  ...kn,
  mode: "oklch",
  toMode: {
    oklab: (e) => Q(e, "oklab"),
    rgb: (e) => pt(Q(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => K(dt(e), "oklch"),
    oklab: (e) => K(e, "oklch")
  },
  parse: [Pa],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, Un = (e) => {
  let { r: n, g: t, b: r, alpha: i } = ge(e), a = {
    mode: "xyz65",
    x: 0.486570948648216 * n + 0.265667693169093 * t + 0.1982172852343625 * r,
    y: 0.2289745640697487 * n + 0.6917385218365062 * t + 0.079286914093745 * r,
    z: 0 * n + 0.0451133818589026 * t + 1.043944368900976 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, Kn = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = me(
    {
      r: e * 2.4934969119414263 - n * 0.9313836179191242 - 0.402710784450717 * t,
      g: e * -0.8294889695615749 + n * 1.7626640603183465 + 0.0236246858419436 * t,
      b: e * 0.0358458302437845 - n * 0.0761723892680418 + 0.9568845240076871 * t
    },
    "p3"
  );
  return r !== void 0 && (i.alpha = r), i;
}, Ea = {
  ...be,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => Kn(ae(e)),
    xyz65: Kn
  },
  toMode: {
    rgb: (e) => oe(Un(e)),
    xyz65: Un
  }
}, Et = (e) => {
  let n = Math.abs(e);
  return n >= 1 / 512 ? Math.sign(e) * Math.pow(n, 1 / 1.8) : 16 * e;
}, Qn = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "prophoto",
    r: Et(
      e * 1.3457868816471585 - n * 0.2555720873797946 - 0.0511018649755453 * t
    ),
    g: Et(
      e * -0.5446307051249019 + n * 1.5082477428451466 + 0.0205274474364214 * t
    ),
    b: Et(e * 0 + n * 0 + 1.2119675456389452 * t)
  };
  return r !== void 0 && (i.alpha = r), i;
}, It = (e = 0) => {
  let n = Math.abs(e);
  return n >= 16 / 512 ? Math.sign(e) * Math.pow(n, 1.8) : e / 16;
}, er = (e) => {
  let n = It(e.r), t = It(e.g), r = It(e.b), i = {
    mode: "xyz50",
    x: 0.7977666449006423 * n + 0.1351812974005331 * t + 0.0313477341283922 * r,
    y: 0.2880748288194013 * n + 0.7118352342418731 * t + 899369387256e-16 * r,
    z: 0 * n + 0 * t + 0.8251046025104602 * r
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Ia = {
  ...be,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: Qn,
    rgb: (e) => Qn(Re(e))
  },
  toMode: {
    xyz50: er,
    rgb: (e) => qe(er(e))
  }
}, tr = 1.09929682680944, qa = 0.018053968510807, qt = (e) => {
  const n = Math.abs(e);
  return n > qa ? (Math.sign(e) || 1) * (tr * Math.pow(n, 0.45) - (tr - 1)) : 4.5 * e;
}, nr = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "rec2020",
    r: qt(
      e * 1.7166511879712683 - n * 0.3556707837763925 - 0.2533662813736599 * t
    ),
    g: qt(
      e * -0.6666843518324893 + n * 1.6164812366349395 + 0.0157685458139111 * t
    ),
    b: qt(
      e * 0.0176398574453108 - n * 0.0427706132578085 + 0.9421031212354739 * t
    )
  };
  return r !== void 0 && (i.alpha = r), i;
}, rr = 1.09929682680944, Ra = 0.018053968510807, Rt = (e = 0) => {
  let n = Math.abs(e);
  return n < Ra * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((n + rr - 1) / rr, 1 / 0.45);
}, ir = (e) => {
  let n = Rt(e.r), t = Rt(e.g), r = Rt(e.b), i = {
    mode: "xyz65",
    x: 0.6369580483012911 * n + 0.1446169035862083 * t + 0.1688809751641721 * r,
    y: 0.262700212011267 * n + 0.6779980715188708 * t + 0.059301716469862 * r,
    z: 0 * n + 0.0280726930490874 * t + 1.0609850577107909 * r
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Xa = {
  ...be,
  mode: "rec2020",
  fromMode: {
    xyz65: nr,
    rgb: (e) => nr(ae(e))
  },
  toMode: {
    xyz65: ir,
    rgb: (e) => oe(ir(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, ie = 0.0037930732552754493, Fr = Math.cbrt(ie), Xt = (e) => Math.cbrt(e) - Fr, Fa = (e) => {
  const { r: n, g: t, b: r, alpha: i } = ge(e), a = Xt(0.3 * n + 0.622 * t + 0.078 * r + ie), o = Xt(0.23 * n + 0.692 * t + 0.078 * r + ie), c = Xt(
    0.2434226892454782 * n + 0.2047674442449682 * t + 0.5518098665095535 * r + ie
  ), p = {
    mode: "xyb",
    x: (a - o) / 2,
    y: (a + o) / 2,
    /* Apply default chroma from luma (subtract Y from B) */
    b: c - (a + o) / 2
  };
  return i !== void 0 && (p.alpha = i), p;
}, Ft = (e) => Math.pow(e + Fr, 3), Oa = ({ x: e, y: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = Ft(e + n) - ie, a = Ft(n - e) - ie, o = Ft(t + n) - ie, c = me({
    r: 11.031566904639861 * i - 9.866943908131562 * a - 0.16462299650829934 * o,
    g: -3.2541473810744237 * i + 4.418770377582723 * a - 0.16462299650829934 * o,
    b: -3.6588512867136815 * i + 2.7129230459360922 * a + 1.9459282407775895 * o
  });
  return r !== void 0 && (c.alpha = r), c;
}, ja = {
  mode: "xyb",
  channels: ["x", "y", "b", "alpha"],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: {
    rgb: Oa
  },
  fromMode: {
    rgb: Fa
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
    alpha: { use: h, fixup: T }
  }
}, Da = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: qe,
    lab: yn
  },
  fromMode: {
    rgb: Re,
    lab: xn
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
    alpha: { use: h, fixup: T }
  }
}, Za = (e) => {
  let { x: n, y: t, z: r, alpha: i } = e;
  n === void 0 && (n = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = {
    mode: "xyz50",
    x: 1.0479298208405488 * n + 0.0229467933410191 * t - 0.0501922295431356 * r,
    y: 0.0296278156881593 * n + 0.990434484573249 * t - 0.0170738250293851 * r,
    z: -0.0092430581525912 * n + 0.0150551448965779 * t + 0.7518742899580008 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, Ya = (e) => {
  let { x: n, y: t, z: r, alpha: i } = e;
  n === void 0 && (n = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = {
    mode: "xyz65",
    x: 0.9554734527042182 * n - 0.0230985368742614 * t + 0.0632593086610217 * r,
    y: -0.0283697069632081 * n + 1.0099954580058226 * t + 0.021041398966943 * r,
    z: 0.0123140016883199 * n - 0.0205076964334779 * t + 1.3303659366080753 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, Ba = {
  mode: "xyz65",
  toMode: {
    rgb: oe,
    xyz50: Za
  },
  fromMode: {
    rgb: ae,
    xyz50: Ya
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
    alpha: { use: h, fixup: T }
  }
}, Ga = ({ r: e, g: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * n + 0.11448223 * t,
    i: 0.59597799 * e - 0.2741761 * n - 0.32180189 * t,
    q: 0.21147017 * e - 0.52261711 * n + 0.31114694 * t
  };
  return r !== void 0 && (i.alpha = r), i;
}, Ja = ({ y: e, i: n, q: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = {
    mode: "rgb",
    r: e + 0.95608445 * n + 0.6208885 * t,
    g: e - 0.27137664 * n - 0.6486059 * t,
    b: e - 1.10561724 * n + 1.70250126 * t
  };
  return r !== void 0 && (i.alpha = r), i;
}, Va = {
  mode: "yiq",
  toMode: {
    rgb: Ja
  },
  fromMode: {
    rgb: Ga
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
    alpha: { use: h, fixup: T }
  }
}, Wa = (e) => Math.max(0, Math.min(1, e || 0)), Ot = (e) => Math.round(Wa(e) * 255), Ua = q("rgb"), Ka = (e) => {
  if (e === void 0)
    return;
  let n = Ot(e.r), t = Ot(e.g), r = Ot(e.b);
  return "#" + (1 << 24 | n << 16 | t << 8 | r).toString(16).slice(1);
}, Qa = (e) => Ka(Ua(e)), Or = q("rgb"), jr = (e) => {
  const n = {
    mode: e.mode,
    r: Math.max(0, Math.min(e.r !== void 0 ? e.r : 0, 1)),
    g: Math.max(0, Math.min(e.g !== void 0 ? e.g : 0, 1)),
    b: Math.max(0, Math.min(e.b !== void 0 ? e.b : 0, 1))
  };
  return e.alpha !== void 0 && (n.alpha = e.alpha), n;
}, e0 = (e) => jr(Or(e)), Dr = (e) => e !== void 0 && (e.r === void 0 || e.r >= 0 && e.r <= 1) && (e.g === void 0 || e.g >= 0 && e.g <= 1) && (e.b === void 0 || e.b >= 0 && e.b <= 1);
function t0(e) {
  return Dr(Or(e));
}
function Zr(e = "rgb") {
  const { gamut: n } = et(e);
  if (!n)
    return (r) => !0;
  const t = q(typeof n == "string" ? n : e);
  return (r) => Dr(t(r));
}
function n0(e = "rgb") {
  const { gamut: n } = et(e);
  if (!n)
    return (a) => Be(a);
  const t = typeof n == "string" ? n : e, r = q(t), i = Zr(t);
  return (a) => {
    const o = Be(a);
    if (!o)
      return;
    const c = r(o);
    if (i(c))
      return o;
    const p = jr(c);
    return o.mode === p.mode ? p : q(o.mode)(p);
  };
}
function r0(e, n = "lch", t = "rgb") {
  e = Be(e);
  let r = t === "rgb" ? t0 : Zr(t), i = t === "rgb" ? e0 : n0(t);
  if (e === void 0 || r(e)) return e;
  let a = q(e.mode);
  e = q(n)(e);
  let o = { ...e, c: 0 };
  if (!r(o))
    return a(i(o));
  let c = 0, p = e.c !== void 0 ? e.c : 0, u = et(n).ranges.c, b = (u[1] - u[0]) / Math.pow(2, 13), m = o.c;
  for (; p - c > b; )
    o.c = c + (p - c) * 0.5, r(o) ? (m = o.c, c = o.c) : p = o.c;
  return a(
    r(o) ? o : { ...o, c: m }
  );
}
y(Ii);
y(Di);
y(Zi);
y(Yi);
y(Ji);
y(kr);
y(zr);
y(ia);
y(aa);
y(ca);
y(da);
y(Mn);
y(fa);
y(kn);
y(ua);
y($a);
y(za);
y(_a);
y(La);
y(Ha);
y(Sa);
const zn = y(Aa);
y(Ea);
y(Ia);
y(Xa);
y(be);
y(ja);
y(Da);
y(Ba);
y(Va);
const i0 = q("rgb");
function a0(e, n) {
  const t = e.getContext("2d", { willReadFrequently: !0 });
  if (!t) return;
  const { width: r, height: i } = e, a = t.createImageData(r, i), o = a.data;
  for (let c = 0; c < i; c++) {
    const p = 1 - c / (i - 1 || 1);
    for (let u = 0; u < r; u++) {
      const b = u / (r - 1 || 1), m = i0({ mode: "hsv", h: n, s: b, v: p, alpha: 1 }), v = (c * r + u) * 4;
      if (!m) {
        o[v] = o[v + 1] = o[v + 2] = 0, o[v + 3] = 255;
        continue;
      }
      o[v] = Math.round(jt((m.r ?? 0) * 255)), o[v + 1] = Math.round(jt((m.g ?? 0) * 255)), o[v + 2] = Math.round(jt((m.b ?? 0) * 255)), o[v + 3] = 255;
    }
  }
  t.putImageData(a, 0, 0);
}
function jt(e) {
  return Math.min(255, Math.max(0, e));
}
const ve = q("rgb"), _n = q("hsv"), o0 = q("hsl");
function F(e) {
  const n = Se(e.l ?? 0), t = Math.max(0, e.c ?? 0), r = p0(e.h ?? 0), i = Se(e.alpha ?? 1), a = r0({ mode: "oklch", l: n, c: t, h: r, alpha: i }, "rgb");
  return {
    l: a.l ?? n,
    c: a.c ?? 0,
    h: a.h ?? r,
    alpha: a.alpha ?? i
  };
}
function pe(e) {
  const n = br(e.trim());
  if (!n) return null;
  const t = zn(n);
  return (t == null ? void 0 : t.l) == null ? null : F({
    l: t.l,
    c: t.c ?? 0,
    h: t.h ?? 0,
    alpha: t.alpha ?? 1
  });
}
function ar(e) {
  const { l: n, c: t, h: r, alpha: i } = e;
  return i >= 1 ? `oklch(${(n * 100).toFixed(1)}% ${t.toFixed(4)} ${r.toFixed(1)})` : `oklch(${(n * 100).toFixed(1)}% ${t.toFixed(4)} ${r.toFixed(1)} / ${Math.round(i * 100)}%)`;
}
function Ce(e) {
  return Qa(ve({ mode: "oklch", ...e })) ?? "#000000";
}
function L0(e) {
  const { r: n, g: t, b: r } = Qe(e);
  return e.alpha < 1 ? `rgba(${n}, ${t}, ${r}, ${e.alpha.toFixed(2)})` : `rgb(${n}, ${t}, ${r})`;
}
function Qe(e) {
  const n = ve({ mode: "oklch", ...e, alpha: 1 });
  return n ? {
    r: Math.round((n.r ?? 0) * 255),
    g: Math.round((n.g ?? 0) * 255),
    b: Math.round((n.b ?? 0) * 255)
  } : { r: 0, g: 0, b: 0 };
}
function s0(e) {
  const n = Math.max(0, Math.min(1, e)) * 360, t = ve({ mode: "hsv", h: n, s: 1, v: 1, alpha: 1 });
  return t ? {
    r: Math.round((t.r ?? 0) * 255),
    g: Math.round((t.g ?? 0) * 255),
    b: Math.round((t.b ?? 0) * 255)
  } : { r: 0, g: 0, b: 0 };
}
function l0(e) {
  const { r: n, g: t, b: r } = Qe(e);
  return `linear-gradient(to right, rgba(${n}, ${t}, ${r}, 0), rgb(${n}, ${t}, ${r}))`;
}
function Dt(e) {
  const n = _n({ mode: "oklch", ...e, alpha: 1 });
  return (n == null ? void 0 : n.h) ?? e.h;
}
function c0(e, n) {
  const t = _n({ mode: "oklch", ...e, alpha: 1 }), r = zn(ve({ mode: "hsv", h: n, s: (t == null ? void 0 : t.s) ?? 0, v: (t == null ? void 0 : t.v) ?? 1, alpha: 1 }) ?? { mode: "hsv", h: n, s: (t == null ? void 0 : t.s) ?? 0, v: (t == null ? void 0 : t.v) ?? 1 });
  return (r == null ? void 0 : r.l) == null ? F({ ...e, h: n }) : F({
    l: r.l,
    c: r.c ?? 0,
    h: r.h ?? n,
    alpha: e.alpha
  });
}
function or(e, n) {
  switch (n) {
    case "hex":
      return [{ key: "hex", label: "HEX CODE", value: Ce(e).replace("#", "").toUpperCase() }];
    case "rgb": {
      const t = ve({ mode: "oklch", ...e });
      return [
        { key: "r", label: "R", value: String(Math.round((t.r ?? 0) * 255)), min: 0, max: 255 },
        { key: "g", label: "G", value: String(Math.round((t.g ?? 0) * 255)), min: 0, max: 255 },
        { key: "b", label: "B", value: String(Math.round((t.b ?? 0) * 255)), min: 0, max: 255 }
      ];
    }
    case "hsl": {
      const t = o0({ mode: "oklch", ...e });
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
function d0(e, n, t) {
  switch (e) {
    case "hex": {
      const r = (n.hex ?? "").trim().replace(/^#/, "");
      if (!/^[0-9a-fA-F]{3,8}$/.test(r)) return null;
      const i = pe(`#${r}`);
      return i ? Zt(i, t.alpha) : null;
    }
    case "rgb": {
      const r = Number(n.r), i = Number(n.g), a = Number(n.b);
      if ([r, i, a].some((c) => Number.isNaN(c))) return null;
      const o = pe(`rgb(${Yt(r)}, ${Yt(i)}, ${Yt(a)})`);
      return o ? Zt(o, t.alpha) : null;
    }
    case "hsl": {
      const r = Bt(n.h), i = Bt(n.s), a = Bt(n.l);
      if ([r, i, a].some((c) => Number.isNaN(c))) return null;
      const o = pe(`hsl(${r}, ${sr(i)}%, ${sr(a)}%)`);
      return o ? Zt(o, t.alpha) : null;
    }
    case "oklch": {
      const r = Number(n.l), i = Number(n.c), a = Number(n.h);
      return [r, i, a].some((o) => Number.isNaN(o)) ? null : F({ l: r / 100, c: i, h: a, alpha: t.alpha });
    }
  }
}
function Zt(e, n) {
  return { ...e, alpha: Se(n) };
}
function Se(e) {
  return Math.min(1, Math.max(0, e));
}
function Yt(e) {
  return Math.min(255, Math.max(0, Math.round(e)));
}
function sr(e) {
  return Math.min(100, Math.max(0, e));
}
function Bt(e) {
  return Number(e.replace(/%/g, "").trim());
}
function p0(e) {
  const n = e % 360;
  return n < 0 ? n + 360 : n;
}
function f0(e) {
  const n = _n({ mode: "oklch", ...e, alpha: 1 });
  return { x: (n == null ? void 0 : n.s) ?? 0, y: 1 - ((n == null ? void 0 : n.v) ?? 0) };
}
function h0(e, n, t, r) {
  const i = Se(e), a = Se(n), o = zn(
    ve({ mode: "hsv", h: t, s: i, v: 1 - a, alpha: 1 }) ?? {
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
const u0 = {
  l: 0.62,
  c: 0.24,
  h: 303,
  alpha: 0.8
}, Yr = "pretty-color-picker-history", Br = 16;
function Gr(e, n) {
  return Ce(e) === Ce(n) && e.alpha === n.alpha;
}
function b0() {
  try {
    const e = localStorage.getItem(Yr);
    if (!e) return [];
    const n = JSON.parse(e);
    return Array.isArray(n) ? n.slice(0, Br) : [];
  } catch {
    return [];
  }
}
function g0(e, n) {
  const t = n.filter((i) => !Gr(i, e)), r = [e, ...t].slice(0, Br);
  try {
    localStorage.setItem(Yr, JSON.stringify(r));
  } catch {
  }
  return r;
}
const m0 = "#ededed", v0 = "#171717", x0 = 0.52;
function y0(e, n, t) {
  const r = [e, n, t].map((i) => {
    const a = i / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2];
}
function M0(e, n, t) {
  return y0(e, n, t) > x0 ? v0 : m0;
}
function lr(e) {
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
function k0(e, n, t, r) {
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
function cr(e, n) {
  const t = n.getBoundingClientRect(), r = dr((e.clientX - t.left) / t.width), i = dr((e.clientY - t.top) / t.height);
  return { x: r, y: i };
}
function Gt(e, n, t, r) {
  let i = !1;
  const a = (p) => {
    if (!i) return;
    const { x: u, y: b } = cr(p, e);
    n(u, b);
  }, o = (p) => {
    if (i) {
      if (i = !1, (p == null ? void 0 : p.pointerId) != null)
        try {
          e.releasePointerCapture(p.pointerId);
        } catch {
        }
      window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", o), t == null || t();
    }
  }, c = (p) => {
    if (p.button !== 0) return;
    i = !0, e.setPointerCapture(p.pointerId), r == null || r();
    const { x: u, y: b } = cr(p, e);
    n(u, b), window.addEventListener("pointermove", a), window.addEventListener("pointerup", o), window.addEventListener("pointercancel", o);
  };
  return e.addEventListener("pointerdown", c), () => {
    e.removeEventListener("pointerdown", c), window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", o);
  };
}
function dr(e) {
  return Math.min(1, Math.max(0, e));
}
const je = 48;
function w0(e, n) {
  const t = (r) => {
    if (r.button !== 0 || r.target.closest(".pcp-header-btn")) return;
    r.preventDefault();
    const a = n.getBoundingClientRect(), o = r.clientX - a.left, c = r.clientY - a.top;
    e.dataset.dragging = "true", e.setPointerCapture(r.pointerId);
    const p = (b) => {
      Jr(n, b.clientX - o, b.clientY - c);
    }, u = (b) => {
      e.removeAttribute("data-dragging");
      try {
        e.releasePointerCapture(b.pointerId);
      } catch {
      }
      window.removeEventListener("pointermove", p), window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", u);
    };
    window.addEventListener("pointermove", p), window.addEventListener("pointerup", u), window.addEventListener("pointercancel", u);
  };
  return e.addEventListener("pointerdown", t), () => {
    e.removeEventListener("pointerdown", t), e.removeAttribute("data-dragging");
  };
}
function $0(e) {
  const n = e.offsetWidth, t = e.offsetHeight;
  Jr(
    e,
    (window.innerWidth - n) / 2,
    (window.innerHeight - t) / 2
  );
}
function Jr(e, n, t) {
  const r = e.offsetWidth, i = e.offsetHeight, a = window.innerWidth - je, o = window.innerHeight - je, c = je - r, p = je - i;
  e.style.left = `${Math.min(a, Math.max(c, n))}px`, e.style.top = `${Math.min(o, Math.max(p, t))}px`;
}
const z0 = ["hex", "rgb", "hsl", "oklch"], _0 = {
  hex: "HEX",
  rgb: "RGB",
  hsl: "HSL",
  oklch: "OKLCH"
};
var $, x, R, J, fe, E, Pe, Ae, V, O, A, j, Ee, I, he, ne, Ie, D, re, W, Z, l, Vr, Wr, Ur, tn, le, nn, Kr, De, rn, Qr, ei, an, ti, Ze, Te, ni, ri, ii, ai, on, sn, te, Ne, ln, cn, Ye, dn, pn, oi, si, fn, li, hn, un, bn, gn, ce, ci;
class T0 extends HTMLElement {
  constructor() {
    super();
    w(this, l);
    w(this, $);
    w(this, x, { ...u0 });
    w(this, R, "hsl");
    w(this, J, b0());
    w(this, fe, null);
    w(this, E, []);
    w(this, Pe);
    w(this, Ae);
    w(this, V);
    w(this, O);
    w(this, A);
    w(this, j);
    w(this, Ee);
    w(this, I);
    w(this, he);
    w(this, ne);
    w(this, Ie);
    w(this, D);
    w(this, re);
    w(this, W, null);
    w(this, Z, null);
    M(this, $, this.attachShadow({ mode: "open" }));
  }
  static get observedAttributes() {
    return ["value", "theme", "header-action", "movable"];
  }
  connectedCallback() {
    f(this, l, Wr).call(this), f(this, l, Ur).call(this), f(this, l, Vr).call(this), f(this, l, Ne).call(this);
  }
  disconnectedCallback() {
    s(this, E).forEach((t) => t()), M(this, E, []);
  }
  attributeChangedCallback(t, r, i) {
    if (this.isConnected) {
      if (t === "value" && i != null) {
        const a = pe(i);
        a && (M(this, x, a), f(this, l, Ne).call(this, !1));
        return;
      }
      t === "theme" && f(this, l, De).call(this), t === "movable" && f(this, l, tn).call(this);
    }
  }
  get value() {
    return ar(s(this, x));
  }
  set value(t) {
    const r = pe(t);
    r && (M(this, x, r), f(this, l, Ne).call(this));
  }
  get color() {
    return { ...s(this, x) };
  }
  set color(t) {
    M(this, x, F(t)), f(this, l, Ne).call(this);
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
}
$ = new WeakMap(), x = new WeakMap(), R = new WeakMap(), J = new WeakMap(), fe = new WeakMap(), E = new WeakMap(), Pe = new WeakMap(), Ae = new WeakMap(), V = new WeakMap(), O = new WeakMap(), A = new WeakMap(), j = new WeakMap(), Ee = new WeakMap(), I = new WeakMap(), he = new WeakMap(), ne = new WeakMap(), Ie = new WeakMap(), D = new WeakMap(), re = new WeakMap(), W = new WeakMap(), Z = new WeakMap(), l = new WeakSet(), Vr = function() {
  const t = this.getAttribute("value");
  if (t) {
    const r = pe(t);
    r && M(this, x, r);
  }
}, Wr = function() {
  const t = this.headerAction === "theme" ? `<button type="button" class="pcp-header-btn pcp-theme-toggle" aria-label="Switch to light mode">${An}</button>` : `<button type="button" class="pcp-header-btn pcp-close" aria-label="Close">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M4.25 4.25L11.75 11.75M11.75 4.25L4.25 11.75"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>`;
  s(this, $).innerHTML = `
      <style>${ui}</style>
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
          ${z0.map((r) => `<button type="button" class="pcp-tab" role="tab" data-format="${r}">${_0[r]}</button>`).join("")}
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
        <p class="pcp-history-label">Last Used</p>
        <div class="pcp-history"></div>
      </div>
    `, M(this, Pe, s(this, $).querySelector(".pcp-plane")), M(this, Ae, s(this, $).querySelector(".pcp-plane-wrap")), M(this, V, s(this, $).querySelector(".pcp-cursor")), M(this, O, s(this, $).querySelector(".pcp-hue-row")), M(this, A, s(this, O).querySelector(".pcp-slider-handle")), M(this, j, s(this, $).querySelector(".pcp-alpha-row")), M(this, Ee, s(this, $).querySelector(".pcp-slider-fill-alpha")), M(this, I, s(this, j).querySelector(".pcp-slider-handle")), M(this, he, s(this, $).querySelector(".pcp-tabs-pill")), M(this, ne, s(this, $).querySelector(".pcp-fields")), M(this, Ie, s(this, $).querySelector(".pcp-swatch-fill")), M(this, D, s(this, $).querySelector(".pcp-alpha-input")), M(this, re, s(this, $).querySelector(".pcp-history")), M(this, W, s(this, $).querySelector(".pcp-theme-toggle")), f(this, l, De).call(this);
}, Ur = function() {
  var r;
  const t = s(this, $).querySelector(".pcp-close");
  t == null || t.addEventListener("click", () => {
    this.dispatchEvent(new CustomEvent("close", { bubbles: !0, composed: !0 }));
  }), (r = s(this, W)) == null || r.addEventListener("click", () => f(this, l, Kr).call(this)), s(this, E).push(
    Gt(
      s(this, Ae),
      (i, a) => f(this, l, ni).call(this, i, a),
      () => f(this, l, ce).call(this),
      () => f(this, l, le).call(this)
    )
  ), s(this, E).push(
    Gt(
      s(this, O),
      (i) => f(this, l, ri).call(this, i),
      () => f(this, l, ce).call(this),
      () => f(this, l, le).call(this)
    )
  ), s(this, E).push(
    Gt(
      s(this, j),
      (i) => f(this, l, ii).call(this, i),
      () => f(this, l, ce).call(this),
      () => f(this, l, le).call(this)
    )
  ), s(this, E).push(f(this, l, rn).call(this, s(this, O))), s(this, E).push(f(this, l, rn).call(this, s(this, j))), s(this, $).querySelectorAll(".pcp-tab").forEach((i) => {
    i.addEventListener("click", () => {
      const a = i.dataset.format;
      a && a !== s(this, R) && (M(this, R, a), f(this, l, Ye).call(this), f(this, l, bn).call(this), f(this, l, un).call(this), f(this, l, dn).call(this));
    });
  }), s(this, D).addEventListener("focus", () => f(this, l, le).call(this)), s(this, D).addEventListener("change", () => f(this, l, on).call(this)), s(this, D).addEventListener("keydown", (i) => {
    i.key === "Enter" && f(this, l, on).call(this);
  }), f(this, l, tn).call(this);
}, tn = function() {
  if (s(this, Z)) {
    const r = s(this, E).indexOf(s(this, Z));
    r >= 0 && s(this, E).splice(r, 1), s(this, Z).call(this), M(this, Z, null);
  }
  if (!this.movable) {
    this.style.position = "", this.style.left = "", this.style.top = "", this.style.zIndex = "", this.removeAttribute("data-positioned");
    return;
  }
  this.hasAttribute("data-positioned") || requestAnimationFrame(() => {
    $0(this), this.setAttribute("data-positioned", "");
  });
  const t = s(this, $).querySelector(".pcp-header");
  t && (M(this, Z, w0(t, this)), s(this, E).push(s(this, Z)));
}, le = function() {
  M(this, fe, { ...s(this, x) });
}, nn = function() {
  return this.theme === "light" ? "light" : this.theme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}, Kr = function() {
  const t = f(this, l, nn).call(this) === "light" ? "dark" : "light";
  this.theme = t, f(this, l, De).call(this);
  const r = { theme: t };
  this.dispatchEvent(
    new CustomEvent("themechange", {
      detail: r,
      bubbles: !0,
      composed: !0
    })
  );
}, De = function() {
  if (!s(this, W)) return;
  const t = f(this, l, nn).call(this) === "light";
  s(this, W).innerHTML = t ? hi : An, s(this, W).setAttribute(
    "aria-label",
    t ? "Switch to dark mode" : "Switch to light mode"
  );
}, rn = function(t) {
  const r = () => {
    t.dataset.active = "true";
  }, i = () => {
    const a = t.querySelector(".pcp-slider-handle");
    a != null && a.hasAttribute("data-dragging") || delete t.dataset.active;
  };
  return t.addEventListener("pointerenter", r), t.addEventListener("pointerleave", i), () => {
    t.removeEventListener("pointerenter", r), t.removeEventListener("pointerleave", i);
  };
}, Qr = function(t, r) {
  const i = Math.max(0, Math.min(1, r)) * 100;
  t.style.left = `max(1px, calc(${i}% - 1.5px))`;
}, ei = function() {
  const t = getComputedStyle(this), r = lr(t.getPropertyValue("--pcp-checker-base").trim()) ?? { r: 255, g: 255, b: 255 }, i = lr(t.getPropertyValue("--pcp-checker-tone").trim()) ?? { r: 204, g: 204, b: 204 };
  return { base: r, tone: i };
}, an = function(t, r) {
  const i = t.style.left.match(/calc\(([\d.]+)%/);
  return i ? parseFloat(i[1]) / 100 : r;
}, ti = function(t, r) {
  if (r === "hue") return s0(t);
  const { base: i, tone: a } = f(this, l, ei).call(this);
  return k0(Qe(s(this, x)), t, i, a);
}, Ze = function(t, r, i) {
  const a = f(this, l, ti).call(this, r, i);
  t.style.background = M0(a.r, a.g, a.b);
}, Te = function(t, r, i) {
  f(this, l, Qr).call(this, t, r), f(this, l, Ze).call(this, t, r, i);
}, ni = function(t, r) {
  s(this, V).dataset.dragging = "true";
  const i = f(this, l, cn).call(this);
  f(this, l, te).call(this, h0(t, r, i, s(this, x).alpha), !0), f(this, l, pn).call(this, t, r);
}, ri = function(t) {
  s(this, O).dataset.active = "true", s(this, A).dataset.dragging = "true", f(this, l, Te).call(this, s(this, A), t, "hue");
  const r = t * 360;
  f(this, l, te).call(this, c0(s(this, x), r), !0);
}, ii = function(t) {
  s(this, j).dataset.active = "true", s(this, I).dataset.dragging = "true", f(this, l, te).call(this, F({ ...s(this, x), alpha: t }), !0), f(this, l, Te).call(this, s(this, I), t, "alpha");
}, ai = function() {
  const r = s(this, A).style.left.match(/calc\(([\d.]+)%/);
  return r ? parseFloat(r[1]) / 100 * 360 : Dt(s(this, x));
}, on = function() {
  const t = s(this, D).value.replace(/%/g, "").trim(), r = Number(t);
  if (Number.isNaN(r)) {
    f(this, l, hn).call(this);
    return;
  }
  f(this, l, te).call(this, F({ ...s(this, x), alpha: r / 100 }), !0), f(this, l, ce).call(this);
}, sn = function(t, r) {
  const i = {};
  or(s(this, x), s(this, R)).forEach((o) => {
    i[o.key] = o.key === t ? r : o.value;
  });
  const a = d0(s(this, R), i, s(this, x));
  a && (f(this, l, te).call(this, a, !0), f(this, l, ce).call(this));
}, te = function(t, r = !0, i) {
  M(this, x, F(t)), f(this, l, ln).call(this, r, i);
}, Ne = function(t = !0) {
  f(this, l, Ye).call(this), f(this, l, bn).call(this), f(this, l, ln).call(this, t), f(this, l, gn).call(this);
}, ln = function(t, r) {
  (r == null ? void 0 : r.refreshFields) !== !1 && f(this, l, un).call(this), f(this, l, li).call(this), f(this, l, oi).call(this), f(this, l, dn).call(this), f(this, l, Ye).call(this), t && f(this, l, ci).call(this);
}, cn = function() {
  return s(this, A).hasAttribute("data-dragging") ? f(this, l, ai).call(this) : Dt(s(this, x));
}, Ye = function() {
  a0(s(this, Pe), f(this, l, cn).call(this));
}, dn = function() {
  const { x: t, y: r } = f0(s(this, x));
  f(this, l, pn).call(this, t, r);
}, pn = function(t, r) {
  s(this, V).style.left = `${t * 100}%`, s(this, V).style.top = `${r * 100}%`;
}, oi = function() {
  const t = Dt(s(this, x)), r = s(this, A).hasAttribute("data-dragging") ? f(this, l, an).call(this, s(this, A), t / 360) : t / 360;
  s(this, A).hasAttribute("data-dragging") ? f(this, l, Ze).call(this, s(this, A), r, "hue") : f(this, l, Te).call(this, s(this, A), r, "hue");
  const i = s(this, I).hasAttribute("data-dragging") ? f(this, l, an).call(this, s(this, I), s(this, x).alpha) : s(this, x).alpha;
  s(this, I).hasAttribute("data-dragging") ? f(this, l, Ze).call(this, s(this, I), i, "alpha") : f(this, l, Te).call(this, s(this, I), i, "alpha"), f(this, l, si).call(this);
}, si = function() {
  s(this, Ee).style.setProperty("--pcp-alpha-gradient", l0(s(this, x)));
}, fn = function(t, r) {
  const { r: i, g: a, b: o } = Qe(r);
  t.style.setProperty("--swatch-solid", `rgb(${i}, ${a}, ${o})`), t.style.setProperty("--swatch-alpha", `rgba(${i}, ${a}, ${o}, ${r.alpha})`);
}, li = function() {
  f(this, l, fn).call(this, s(this, Ie), s(this, x));
}, hn = function() {
  s(this, D).value = `${Math.round(s(this, x).alpha * 100)}%`;
}, un = function() {
  const t = or(s(this, x), s(this, R));
  s(this, ne).dataset.format = s(this, R), s(this, ne).innerHTML = t.map(
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
  ).join(""), s(this, ne).querySelectorAll(".pcp-field-input").forEach((r) => {
    const i = r, a = i.dataset.key;
    i.addEventListener("focus", () => f(this, l, le).call(this)), i.addEventListener("change", () => f(this, l, sn).call(this, a, i.value)), i.addEventListener("keydown", (o) => {
      o.key === "Enter" && f(this, l, sn).call(this, a, i.value);
    });
  }), f(this, l, hn).call(this);
}, bn = function() {
  const t = s(this, $).querySelectorAll(".pcp-tab");
  let r = null;
  if (t.forEach((i) => {
    const a = i.dataset.format === s(this, R);
    i.setAttribute("data-active", String(a)), i.setAttribute("aria-selected", String(a)), a && (r = i);
  }), r) {
    const i = r, a = i.offsetLeft, o = i.offsetWidth;
    s(this, he).style.left = `${a}px`, s(this, he).style.width = `${o}px`;
  }
}, gn = function() {
  s(this, re).innerHTML = s(this, J).map((t, r) => `
          <button type="button" class="pcp-history-swatch pcp-clip" data-index="${r}" aria-label="Color ${Ce(t)}">
            <span class="pcp-swatch-fill" data-history-fill="${r}"></span>
          </button>
        `).join(""), s(this, re).querySelectorAll("[data-history-fill]").forEach((t) => {
    const r = Number(t.dataset.historyFill), i = s(this, J)[r];
    i && f(this, l, fn).call(this, t, i);
  }), s(this, re).querySelectorAll(".pcp-history-swatch").forEach((t) => {
    t.addEventListener("click", () => {
      const r = Number(t.dataset.index), i = s(this, J)[r];
      i && f(this, l, te).call(this, { ...i }, !0, { refreshFields: !0 });
    });
  });
}, ce = function() {
  delete s(this, V).dataset.dragging, delete s(this, A).dataset.dragging, delete s(this, I).dataset.dragging, delete s(this, O).dataset.active, delete s(this, j).dataset.active;
  const t = s(this, fe);
  M(this, fe, null), t && !Gr(t, s(this, x)) && M(this, J, g0(t, s(this, J))), f(this, l, gn).call(this);
}, ci = function() {
  const t = {
    color: { ...s(this, x) },
    css: ar(s(this, x)),
    hex: Ce(s(this, x))
  };
  this.dispatchEvent(
    new CustomEvent("change", {
      detail: t,
      bubbles: !0,
      composed: !0
    })
  );
};
customElements.get("pretty-color-picker") || customElements.define("pretty-color-picker", T0);
export {
  u0 as DEFAULT_COLOR,
  T0 as PrettyColorPicker,
  or as formatFieldsFor,
  F as normalizeOklch,
  pe as oklchFromCss,
  ar as oklchToCss,
  Ce as oklchToHex,
  L0 as oklchToRgbString,
  d0 as parseFormatFields
};
