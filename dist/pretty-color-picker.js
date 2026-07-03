var Cn = (e) => {
  throw TypeError(e);
};
var gt = (e, n, t) => n.has(e) || Cn("Cannot " + t);
var d = (e, n, t) => (gt(e, n, "read from private field"), t ? t.call(e) : n.get(e)), w = (e, n, t) => n.has(e) ? Cn("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(e) : n.set(e, t), M = (e, n, t, r) => (gt(e, n, "write to private field"), r ? r.call(e, t) : n.set(e, t), t), p = (e, n, t) => (gt(e, n, "access private method"), t);
const Sn = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z" opacity="0.2"/><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/></svg>', di = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z" opacity="0.2"/><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"/></svg>', ci = '@import"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap";:host{--pcp-width: 260px;--pcp-radius-sm: 4px;--pcp-radius: 6px;--pcp-radius-lg: 9px;--pcp-panel-padding: 9px;--pcp-history-cols: 8;--pcp-history-swatch-size: calc( (var(--pcp-width) - 2 * var(--pcp-panel-padding) - 7 * var(--pcp-history-gap)) / var(--pcp-history-cols) );--pcp-control-height: var(--pcp-history-swatch-size);--pcp-tab-row-height: 32px;--pcp-field-label-size: 10px;--pcp-field-label-line: 12px;--pcp-field-label-gap: 3px;--pcp-field-value-size: 11px;--pcp-field-value-line: 15px;--pcp-field-input-height: 20px;--pcp-input-panel-height: calc( var(--pcp-field-label-line) + var(--pcp-field-label-gap) + var(--pcp-field-input-height) );--pcp-input-row-padding-y: 7px;--pcp-input-row-padding-x: 7px;--pcp-alpha-col-width: 4ch;--pcp-value-col-width: minmax(0, 1fr);--pcp-swatch-code-gap: 8px;--pcp-history-gap: 6px;--pcp-checker-size: 6px;--pcp-slider-handle-height: calc(var(--pcp-control-height) * 20 / 36);--pcp-field-input-radius: var(--pcp-radius-sm);--pcp-icon-button-size: 26px;--pcp-icon-button-radius: var(--pcp-radius-sm);--pcp-title-size: 12px;--pcp-title-line: 17px;--pcp-title-weight: 600;--pcp-title-tracking: -.24px;--pcp-ease-out: cubic-bezier(.175, .885, .32, 1.1);--pcp-font: "Geist", system-ui, -apple-system, "SF Pro Display", sans-serif;--pcp-mono: "Geist Mono", ui-monospace, monospace;display:inline-block;font-family:var(--pcp-font);-webkit-font-smoothing:antialiased;color:var(--pcp-text-primary)}:host,:host([theme="dark"]){color-scheme:dark;--pcp-bg: #1a1a1a;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: #1f1f1f;--pcp-surface-hover: #292929;--pcp-surface-active: #292929;--pcp-tab-pill: #292929;--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-primary: #ededed;--pcp-text-label: #a0a0a0;--pcp-text-tertiary: #8f8f8f;--pcp-text-focus: #ffffff;--pcp-slider-handle: #ededed;--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: none}:host([theme="light"]){color-scheme:light;--pcp-bg: #ffffff;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: #f2f2f2;--pcp-surface-hover: #ebebeb;--pcp-surface-active: #e6e6e6;--pcp-tab-pill: #ebebeb;--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-primary: #171717;--pcp-text-label: #4d4d4d;--pcp-text-tertiary: #8f8f8f;--pcp-text-focus: #171717;--pcp-slider-handle: #171717;--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 2px 2px rgba(0, 0, 0, .04)}@media(prefers-color-scheme:dark){:host([theme="system"]){color-scheme:dark;--pcp-bg: #1a1a1a;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: #1f1f1f;--pcp-surface-hover: #292929;--pcp-surface-active: #292929;--pcp-tab-pill: #292929;--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-primary: #ededed;--pcp-text-label: #a0a0a0;--pcp-text-tertiary: #8f8f8f;--pcp-text-focus: #ffffff;--pcp-slider-handle: #ededed;--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: none}}@media(prefers-color-scheme:light){:host([theme="system"]){color-scheme:light;--pcp-bg: #ffffff;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: #f2f2f2;--pcp-surface-hover: #ebebeb;--pcp-surface-active: #e6e6e6;--pcp-tab-pill: #ebebeb;--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-primary: #171717;--pcp-text-label: #4d4d4d;--pcp-text-tertiary: #8f8f8f;--pcp-text-focus: #171717;--pcp-slider-handle: #171717;--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 2px 2px rgba(0, 0, 0, .04)}}*,*:before,*:after{box-sizing:border-box}.pcp-clip{overflow:hidden}.pcp-swatch-fill{display:block;width:100%;height:100%;border-radius:inherit;background-color:var(--pcp-checker-base);background-image:linear-gradient(to right,var(--swatch-solid, #000) 50%,transparent 50%),linear-gradient(to right,transparent 50%,var(--swatch-alpha, rgba(0, 0, 0, .5)) 50%),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,100% 100%,var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size);background-position:0 0,0 0,0 0,0 calc(var(--pcp-checker-size) / 2),calc(var(--pcp-checker-size) / 2) calc(var(--pcp-checker-size) / -2),calc(var(--pcp-checker-size) / -2) 0}.pcp{width:var(--pcp-width);background:var(--pcp-bg);border:1px solid var(--pcp-border);border-radius:var(--pcp-radius-lg);box-shadow:var(--pcp-elevation);padding:var(--pcp-panel-padding);-webkit-user-select:none;user-select:none}.pcp-header{display:flex;align-items:center;justify-content:space-between;gap:6px;padding-bottom:4px;margin-bottom:8px;min-height:var(--pcp-icon-button-size);border-bottom:1px solid var(--pcp-divider)}.pcp-title{flex:1;min-width:0;font-family:var(--pcp-font);font-size:var(--pcp-title-size);font-weight:var(--pcp-title-weight);line-height:var(--pcp-title-line);letter-spacing:var(--pcp-title-tracking);color:var(--pcp-text-primary);margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pcp-header-btn{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--pcp-icon-button-size);height:var(--pcp-icon-button-size);padding:0;border:none;border-radius:var(--pcp-icon-button-radius);background:transparent;color:var(--pcp-text-label);cursor:pointer;transition:background .15s var(--pcp-ease-out),color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-header-btn svg{width:13px;height:13px;flex-shrink:0}@media(hover:hover)and (pointer:fine){.pcp-header-btn:hover{background:var(--pcp-surface-hover);color:var(--pcp-text-primary)}}.pcp-header-btn:active{background:var(--pcp-surface-active);transform:scale(.97)}.pcp-header-btn:focus{outline:none}.pcp-header-btn:focus-visible{box-shadow:0 0 0 2px var(--pcp-bg),0 0 0 4px var(--pcp-focus-ring)}.pcp-plane-wrap{position:relative;width:100%;aspect-ratio:4 / 3;border-radius:var(--pcp-radius-sm);margin-bottom:5px;cursor:crosshair;touch-action:none}.pcp-plane{display:block;width:100%;height:100%}.pcp-cursor{position:absolute;width:13px;height:13px;margin:-6.5px 0 0 -6.5px;border:2px solid var(--pcp-cursor-ring);border-radius:50%;box-shadow:0 0 0 1px var(--pcp-cursor-outline),inset 0 0 0 1px #0000001f;pointer-events:none}.pcp-cursor[data-dragging=true]{transition:none}.pcp-slider-wrapper{position:relative;height:var(--pcp-control-height);margin-bottom:5px}.pcp-slider{position:absolute;top:0;right:0;bottom:0;left:0;cursor:pointer;-webkit-user-select:none;user-select:none;border-radius:var(--pcp-radius-sm);background:transparent;touch-action:none}.pcp-slider-fill{position:absolute;top:-1px;right:-1px;bottom:-1px;left:-1px;border-radius:var(--pcp-radius-sm);pointer-events:none}.pcp-slider-fill-hue{background:linear-gradient(to right,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.pcp-slider-fill-alpha{--pcp-alpha-gradient: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));background-color:var(--pcp-checker-base);background-image:var(--pcp-alpha-gradient),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size);background-position:0 0,0 0,0 calc(var(--pcp-checker-size) / 2),calc(var(--pcp-checker-size) / 2) calc(var(--pcp-checker-size) / -2),calc(var(--pcp-checker-size) / -2) 0}.pcp-slider-handle{position:absolute;top:50%;left:0;z-index:1;width:3px;height:var(--pcp-slider-handle-height);border:none;outline:none;border-radius:999px;background:var(--pcp-slider-handle);pointer-events:none;transform:translateY(-50%);opacity:.68;box-shadow:none;filter:none;transition:opacity .15s ease,background .12s ease}.pcp-slider:hover .pcp-slider-handle,.pcp-slider[data-active=true] .pcp-slider-handle{opacity:.68}.pcp-slider-handle[data-dragging=true]{opacity:.95}.pcp-tabs{position:relative;display:flex;align-items:center;height:var(--pcp-tab-row-height);box-sizing:border-box;padding:2px;margin-bottom:7px;background:transparent;border-radius:var(--pcp-radius)}.pcp-tabs-pill{position:absolute;top:2px;bottom:2px;left:0;width:0;background:var(--pcp-tab-pill);border-radius:5px;z-index:0;pointer-events:none;transition:left .2s var(--pcp-ease-out),width .2s var(--pcp-ease-out)}.pcp-tab{position:relative;z-index:1;flex:1;display:flex;align-items:center;justify-content:center;height:100%;padding:0 4px;font-family:inherit;font-size:11px;font-weight:500;line-height:1;text-align:center;background:transparent;border:none;color:var(--pcp-text-label);cursor:pointer;transition:color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-tab[data-active=true]{color:var(--pcp-text-primary)}.pcp-tab:active{transform:scale(.97)}.pcp-inputs{display:grid;width:100%;min-width:0;box-sizing:border-box;overflow:hidden;grid-template-columns:var(--pcp-input-panel-height) var(--pcp-swatch-code-gap) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-alpha-col-width);column-gap:3px;align-items:center;margin-bottom:8px;padding:var(--pcp-input-row-padding-y) var(--pcp-input-row-padding-x);background:var(--pcp-surface);border-radius:var(--pcp-radius-sm)}.pcp-swatch{grid-column:1;flex-shrink:0;width:var(--pcp-input-panel-height);height:var(--pcp-input-panel-height);border-radius:var(--pcp-radius-sm);position:relative;overflow:hidden}.pcp-fields{grid-column:3 / 6;display:grid;min-width:0;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:3px}.pcp-fields[data-format=hex] .pcp-field-hex{grid-column:1 / -1;justify-self:center;width:fit-content;align-items:center}.pcp-fields[data-format=hex] .pcp-field-label{text-align:center;white-space:nowrap}.pcp-fields[data-format=hex] .pcp-field-input{width:8ch;min-width:8ch;padding:0 4px}.pcp-fields[data-format=rgb] .pcp-field-r{grid-column:1}.pcp-fields[data-format=rgb] .pcp-field-g{grid-column:2}.pcp-fields[data-format=rgb] .pcp-field-b{grid-column:3}.pcp-fields[data-format=hsl] .pcp-field-h{grid-column:1}.pcp-fields[data-format=hsl] .pcp-field-s{grid-column:2}.pcp-fields[data-format=hsl] .pcp-field-l{grid-column:3}.pcp-fields[data-format=oklch] .pcp-field-l{grid-column:1}.pcp-fields[data-format=oklch] .pcp-field-c{grid-column:2}.pcp-fields[data-format=oklch] .pcp-field-h{grid-column:3}.pcp-alpha-field{grid-column:6;box-sizing:border-box;width:var(--pcp-alpha-col-width);min-width:var(--pcp-alpha-col-width);max-width:var(--pcp-alpha-col-width);align-items:center}.pcp-alpha-field .pcp-field-input{width:100%;min-width:0;padding:0;box-sizing:border-box}.pcp-field{min-width:0;display:flex;flex-direction:column;align-items:stretch;justify-content:center;gap:var(--pcp-field-label-gap)}.pcp-fields[data-format=oklch] .pcp-field-c .pcp-field-input{letter-spacing:-.02em;padding:0 1px}.pcp-field-label{display:block;font-size:var(--pcp-field-label-size);font-weight:500;line-height:var(--pcp-field-label-line);color:var(--pcp-text-tertiary);margin:0;text-align:center}.pcp-field-input{width:100%;min-width:0;min-height:var(--pcp-field-input-height);height:var(--pcp-field-input-height);padding:0 2px;font-family:var(--pcp-mono);font-size:var(--pcp-field-value-size);font-weight:500;line-height:var(--pcp-field-input-height);font-variant-numeric:tabular-nums;text-align:center;color:var(--pcp-text-label);background:transparent;border:none;border-radius:var(--pcp-field-input-radius);outline:none;box-shadow:none;transition:color .15s var(--pcp-ease-out),background .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-field-input:hover{background:var(--pcp-surface-hover)}}.pcp-field-input:focus{color:var(--pcp-text-focus);background:transparent;border-radius:var(--pcp-field-input-radius);box-shadow:none;outline:none}.pcp-field-input:active{background:var(--pcp-surface-active)}.pcp-history-label{font-size:10px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--pcp-text-tertiary);margin:0 0 5px}.pcp-history{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:var(--pcp-history-gap);width:100%}.pcp-history-swatch{-moz-appearance:none;appearance:none;-webkit-appearance:none;width:100%;aspect-ratio:1;height:auto;flex-shrink:0;padding:0;border:none;background:none;border-radius:4px;cursor:pointer;transition:opacity .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-history-swatch:hover{opacity:.85}}.pcp-history-swatch:active{opacity:.7}@media(prefers-reduced-motion:reduce){.pcp-header-btn,.pcp-tab,.pcp-tabs-pill,.pcp-cursor,.pcp-slider-handle,.pcp-history-swatch{transition:none}.pcp-tab:active,.pcp-header-btn:active{transform:none}}', lr = (e, n) => {
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
}, pi = {
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
}, fi = (e) => lr(pi[e.toLowerCase()], 6), ui = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, hi = (e) => {
  let n;
  return (n = e.match(ui)) ? lr(parseInt(n[1], 16), n[1].length) : void 0;
}, U = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", Ne = `${U}%`, hn = `(?:${U}%|${U})`, bi = `(?:${U}(deg|grad|rad|turn)|${U})`, ue = "\\s*,\\s*", gi = new RegExp(
  `^rgba?\\(\\s*${U}${ue}${U}${ue}${U}\\s*(?:,\\s*${hn}\\s*)?\\)$`
), mi = new RegExp(
  `^rgba?\\(\\s*${Ne}${ue}${Ne}${ue}${Ne}\\s*(?:,\\s*${hn}\\s*)?\\)$`
), vi = (e) => {
  let n = { mode: "rgb" }, t;
  if (t = e.match(gi))
    t[1] !== void 0 && (n.r = t[1] / 255), t[2] !== void 0 && (n.g = t[2] / 255), t[3] !== void 0 && (n.b = t[3] / 255);
  else if (t = e.match(mi))
    t[1] !== void 0 && (n.r = t[1] / 100), t[2] !== void 0 && (n.g = t[2] / 100), t[3] !== void 0 && (n.b = t[3] / 100);
  else
    return;
  return t[4] !== void 0 ? n.alpha = Math.max(0, Math.min(1, t[4] / 100)) : t[5] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[5]))), n;
}, Ze = (e, n) => e === void 0 ? void 0 : typeof e != "object" ? fr(e) : e.mode !== void 0 ? e : n ? { ...e, mode: n } : void 0, I = (e = "rgb") => (n) => (n = Ze(n, e)) !== void 0 ? (
  // if the color's mode corresponds to our target mode
  n.mode === e ? (
    // then just return the color
    n
  ) : (
    // otherwise check to see if we have a dedicated
    // converter for the target mode
    F[n.mode][e] ? (
      // and return its result...
      F[n.mode][e](n)
    ) : (
      // ...otherwise pass through RGB as an intermediary step.
      // if the target mode is RGB...
      e === "rgb" ? (
        // just return the RGB
        F[n.mode].rgb(n)
      ) : (
        // otherwise convert color.mode -> RGB -> target_mode
        F.rgb[e](F[n.mode].rgb(n))
      )
    )
  )
) : void 0, F = {}, dr = {}, Ye = [], cr = {}, xi = (e) => e, y = (e) => (F[e.mode] = {
  ...F[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((n) => {
  F[n] || (F[n] = {}), F[n][e.mode] = e.fromMode[n];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((n) => {
  if (e.ranges[n] === void 0 && (e.ranges[n] = [0, 1]), !e.interpolate[n])
    throw new Error(`Missing interpolator for: ${n}`);
  typeof e.interpolate[n] == "function" && (e.interpolate[n] = {
    use: e.interpolate[n]
  }), e.interpolate[n].fixup || (e.interpolate[n].fixup = xi);
}), dr[e.mode] = e, (e.parse || []).forEach((n) => {
  yi(n, e.mode);
}), I(e.mode)), Ke = (e) => dr[e], yi = (e, n) => {
  if (typeof e == "string") {
    if (!n)
      throw new Error("'mode' required when 'parser' is a string");
    cr[e] = n;
  } else typeof e == "function" && Ye.indexOf(e) < 0 && Ye.push(e);
}, Gt = /[^\x00-\x7F]|[a-zA-Z_]/, Mi = /[^\x00-\x7F]|[-\w]/, c = {
  Function: "function",
  Ident: "ident",
  Number: "number",
  Percentage: "percentage",
  ParenClose: ")",
  None: "none",
  Hue: "hue",
  Alpha: "alpha"
};
let b = 0;
function Fe(e) {
  let n = e[b], t = e[b + 1];
  return n === "-" || n === "+" ? /\d/.test(t) || t === "." && /\d/.test(e[b + 2]) : n === "." ? /\d/.test(t) : /\d/.test(n);
}
function Bt(e) {
  if (b >= e.length)
    return !1;
  let n = e[b];
  if (Gt.test(n))
    return !0;
  if (n === "-") {
    if (e.length - b < 2)
      return !1;
    let t = e[b + 1];
    return !!(t === "-" || Gt.test(t));
  }
  return !1;
}
const ki = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function ze(e) {
  let n = "";
  if ((e[b] === "-" || e[b] === "+") && (n += e[b++]), n += Xe(e), e[b] === "." && /\d/.test(e[b + 1]) && (n += e[b++] + Xe(e)), (e[b] === "e" || e[b] === "E") && ((e[b + 1] === "-" || e[b + 1] === "+") && /\d/.test(e[b + 2]) ? n += e[b++] + e[b++] + Xe(e) : /\d/.test(e[b + 1]) && (n += e[b++] + Xe(e))), Bt(e)) {
    let t = Ge(e);
    return t === "deg" || t === "rad" || t === "turn" || t === "grad" ? { type: c.Hue, value: n * ki[t] } : void 0;
  }
  return e[b] === "%" ? (b++, { type: c.Percentage, value: +n }) : { type: c.Number, value: +n };
}
function Xe(e) {
  let n = "";
  for (; /\d/.test(e[b]); )
    n += e[b++];
  return n;
}
function Ge(e) {
  let n = "";
  for (; b < e.length && Mi.test(e[b]); )
    n += e[b++];
  return n;
}
function wi(e) {
  let n = Ge(e);
  return e[b] === "(" ? (b++, { type: c.Function, value: n }) : n === "none" ? { type: c.None, value: void 0 } : { type: c.Ident, value: n };
}
function $i(e = "") {
  let n = e.trim(), t = [], r;
  for (b = 0; b < n.length; ) {
    if (r = n[b++], r === `
` || r === "	" || r === " ") {
      for (; b < n.length && (n[b] === `
` || n[b] === "	" || n[b] === " "); )
        b++;
      continue;
    }
    if (r === ",")
      return;
    if (r === ")") {
      t.push({ type: c.ParenClose });
      continue;
    }
    if (r === "+") {
      if (b--, Fe(n)) {
        t.push(ze(n));
        continue;
      }
      return;
    }
    if (r === "-") {
      if (b--, Fe(n)) {
        t.push(ze(n));
        continue;
      }
      if (Bt(n)) {
        t.push({ type: c.Ident, value: Ge(n) });
        continue;
      }
      return;
    }
    if (r === ".") {
      if (b--, Fe(n)) {
        t.push(ze(n));
        continue;
      }
      return;
    }
    if (r === "/") {
      for (; b < n.length && (n[b] === `
` || n[b] === "	" || n[b] === " "); )
        b++;
      let i;
      if (Fe(n) && (i = ze(n), i.type !== c.Hue)) {
        t.push({ type: c.Alpha, value: i });
        continue;
      }
      if (Bt(n) && Ge(n) === "none") {
        t.push({
          type: c.Alpha,
          value: { type: c.None, value: void 0 }
        });
        continue;
      }
      return;
    }
    if (/\d/.test(r)) {
      b--, t.push(ze(n));
      continue;
    }
    if (Gt.test(r)) {
      b--, t.push(wi(n));
      continue;
    }
    return;
  }
  return t;
}
function zi(e) {
  e._i = 0;
  let n = e[e._i++];
  if (!n || n.type !== c.Function || n.value !== "color" || (n = e[e._i++], n.type !== c.Ident))
    return;
  const t = cr[n.value];
  if (!t)
    return;
  const r = { mode: t }, i = pr(e, !1);
  if (!i)
    return;
  const a = Ke(t).channels;
  for (let o = 0, l, u; o < a.length; o++)
    l = i[o], u = a[o], l.type !== c.None && (r[u] = l.type === c.Number ? l.value : l.value / 100, u === "alpha" && (r[u] = Math.max(0, Math.min(1, r[u]))));
  return r;
}
function pr(e, n) {
  const t = [];
  let r;
  for (; e._i < e.length; ) {
    if (r = e[e._i++], r.type === c.None || r.type === c.Number || r.type === c.Alpha || r.type === c.Percentage || n && r.type === c.Hue) {
      t.push(r);
      continue;
    }
    if (r.type === c.ParenClose) {
      if (e._i < e.length)
        return;
      continue;
    }
    return;
  }
  if (!(t.length < 3 || t.length > 4)) {
    if (t.length === 4) {
      if (t[3].type !== c.Alpha)
        return;
      t[3] = t[3].value;
    }
    return t.length === 3 && t.push({ type: c.None, value: void 0 }), t.every((i) => i.type !== c.Alpha) ? t : void 0;
  }
}
function _i(e, n) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== c.Function)
    return;
  let r = pr(e, n);
  if (r)
    return r.unshift(t.value), r;
}
const fr = (e) => {
  if (typeof e != "string")
    return;
  const n = $i(e), t = n ? _i(n, !0) : void 0;
  let r, i = 0, a = Ye.length;
  for (; i < a; )
    if ((r = Ye[i++](e, t)) !== void 0)
      return r;
  return n ? zi(n) : void 0;
};
function Ti(e, n) {
  if (!n || n[0] !== "rgb" && n[0] !== "rgba")
    return;
  const t = { mode: "rgb" }, [, r, i, a, o] = n;
  if (!(r.type === c.Hue || i.type === c.Hue || a.type === c.Hue))
    return r.type !== c.None && (t.r = r.type === c.Number ? r.value / 255 : r.value / 100), i.type !== c.None && (t.g = i.type === c.Number ? i.value / 255 : i.value / 100), a.type !== c.None && (t.b = a.type === c.Number ? a.value / 255 : a.value / 100), o.type !== c.None && (t.alpha = Math.min(
      1,
      Math.max(
        0,
        o.type === c.Number ? o.value : o.value / 100
      )
    )), t;
}
const Ni = (e) => e === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0, Hi = (e, n, t) => e + t * (n - e), Ci = (e) => {
  let n = [];
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t], i = e[t + 1];
    r === void 0 && i === void 0 ? n.push(void 0) : r !== void 0 && i !== void 0 ? n.push([r, i]) : n.push(r !== void 0 ? [r, r] : [i, i]);
  }
  return n;
}, Si = (e) => (n) => {
  let t = Ci(n);
  return (r) => {
    let i = r * t.length, a = r >= 1 ? t.length - 1 : Math.max(Math.floor(i), 0), o = t[a];
    return o === void 0 ? void 0 : e(o[0], o[1], i - a);
  };
}, f = Si(Hi), T = (e) => {
  let n = !1, t = e.map((r) => r !== void 0 ? (n = !0, r) : 1);
  return n ? t : e;
}, he = {
  mode: "rgb",
  channels: ["r", "g", "b", "alpha"],
  parse: [
    Ti,
    hi,
    vi,
    fi,
    Ni,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: f,
    g: f,
    b: f,
    alpha: { use: f, fixup: T }
  },
  gamut: !0,
  white: { r: 1, g: 1, b: 1 },
  black: { r: 0, g: 0, b: 0 }
}, mt = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), Ln = (e) => {
  let n = mt(e.r), t = mt(e.g), r = mt(e.b), i = {
    mode: "xyz65",
    x: 0.5766690429101305 * n + 0.1855582379065463 * t + 0.1882286462349947 * r,
    y: 0.297344975250536 * n + 0.6273635662554661 * t + 0.0752914584939979 * r,
    z: 0.0270313613864123 * n + 0.0706888525358272 * t + 0.9913375368376386 * r
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, vt = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), Pn = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "a98",
    r: vt(
      e * 2.0415879038107465 - n * 0.5650069742788597 - 0.3447313507783297 * t
    ),
    g: vt(
      e * -0.9692436362808798 + n * 1.8759675015077206 + 0.0415550574071756 * t
    ),
    b: vt(
      e * 0.0134442806320312 - n * 0.1183623922310184 + 1.0151749943912058 * t
    )
  };
  return r !== void 0 && (i.alpha = r), i;
}, xt = (e = 0) => {
  const n = Math.abs(e);
  return n <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((n + 0.055) / 1.055, 2.4);
}, be = ({ r: e, g: n, b: t, alpha: r }) => {
  let i = {
    mode: "lrgb",
    r: xt(e),
    g: xt(n),
    b: xt(t)
  };
  return r !== void 0 && (i.alpha = r), i;
}, ie = (e) => {
  let { r: n, g: t, b: r, alpha: i } = be(e), a = {
    mode: "xyz65",
    x: 0.4123907992659593 * n + 0.357584339383878 * t + 0.1804807884018343 * r,
    y: 0.2126390058715102 * n + 0.715168678767756 * t + 0.0721923153607337 * r,
    z: 0.0193308187155918 * n + 0.119194779794626 * t + 0.9505321522496607 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, yt = (e = 0) => {
  const n = Math.abs(e);
  return n > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(n, 1 / 2.4) - 0.055) : e * 12.92;
}, ge = ({ r: e, g: n, b: t, alpha: r }, i = "rgb") => {
  let a = {
    mode: i,
    r: yt(e),
    g: yt(n),
    b: yt(t)
  };
  return r !== void 0 && (a.alpha = r), a;
}, ae = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = ge({
    r: e * 3.2409699419045226 - n * 1.537383177570094 - 0.4986107602930034 * t,
    g: e * -0.9692436362808796 + n * 1.8759675015077204 + 0.0415550574071756 * t,
    b: e * 0.0556300796969936 - n * 0.2039769588889765 + 1.0569715142428784 * t
  });
  return r !== void 0 && (i.alpha = r), i;
}, Li = {
  ...he,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => Pn(ie(e)),
    xyz65: Pn
  },
  toMode: {
    rgb: (e) => ae(Ln(e)),
    xyz65: Ln
  }
}, S = (e) => (e = e % 360) < 0 ? e + 360 : e, Pi = (e, n) => e.map((t, r, i) => {
  if (t === void 0)
    return t;
  let a = S(t);
  return r === 0 || e[r - 1] === void 0 ? a : n(a - S(i[r - 1]));
}).reduce((t, r) => !t.length || r === void 0 || t[t.length - 1] === void 0 ? (t.push(r), t) : (t.push(r + t[t.length - 1]), t), []), Z = (e) => Pi(e, (n) => Math.abs(n) <= 180 ? n : n - 360 * Math.sign(n)), H = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0], Ai = Math.PI / 180, Ei = 180 / Math.PI;
let An = H[3] * H[4], En = H[1] * H[4], In = H[1] * H[2] - H[0] * H[3];
const Ii = ({ r: e, g: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (In * t + e * An - n * En) / (In + An - En), a = t - i, o = (H[4] * (n - i) - H[2] * a) / H[3], l = {
    mode: "cubehelix",
    l: i,
    s: i === 0 || i === 1 ? void 0 : Math.sqrt(a * a + o * o) / (H[4] * i * (1 - i))
  };
  return l.s && (l.h = Math.atan2(o, a) * Ei - 120), r !== void 0 && (l.alpha = r), l;
}, qi = ({ h: e, s: n, l: t, alpha: r }) => {
  let i = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * Ai, t === void 0 && (t = 0);
  let a = n === void 0 ? 0 : n * t * (1 - t), o = Math.cos(e), l = Math.sin(e);
  return i.r = t + a * (H[0] * o + H[1] * l), i.g = t + a * (H[2] * o + H[3] * l), i.b = t + a * (H[4] * o + H[5] * l), r !== void 0 && (i.alpha = r), i;
}, Qe = (e, n) => {
  if (e.h === void 0 || n.h === void 0 || !e.s || !n.s)
    return 0;
  let t = S(e.h), r = S(n.h), i = Math.sin((r - t + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * n.s) * i;
}, Ri = (e, n) => {
  if (e.h === void 0 || n.h === void 0)
    return 0;
  let t = S(e.h), r = S(n.h);
  return Math.abs(r - t) > 180 ? t - (r - 360 * Math.sign(r - t)) : r - t;
}, et = (e, n) => {
  if (e.h === void 0 || n.h === void 0 || !e.c || !n.c)
    return 0;
  let t = S(e.h), r = S(n.h), i = Math.sin((r - t + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * n.c) * i;
}, Y = (e) => {
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
}, Fi = {
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
    rgb: Ii
  },
  toMode: {
    rgb: qi
  },
  interpolate: {
    h: {
      use: f,
      fixup: Z
    },
    s: f,
    l: f,
    alpha: {
      use: f,
      fixup: T
    }
  },
  difference: {
    h: Qe
  },
  average: {
    h: Y
  }
}, W = ({ l: e, a: n, b: t, alpha: r }, i = "lch") => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let a = Math.sqrt(n * n + t * t), o = { mode: i, l: e, c: a };
  return a && (o.h = S(Math.atan2(t, n) * 180 / Math.PI)), r !== void 0 && (o.alpha = r), o;
}, K = ({ l: e, c: n, h: t, alpha: r }, i = "lab") => {
  t === void 0 && (t = 0);
  let a = {
    mode: i,
    l: e,
    a: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    b: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return r !== void 0 && (a.alpha = r), a;
}, ur = Math.pow(29, 3) / Math.pow(3, 3), hr = Math.pow(6, 3) / Math.pow(29, 3), z = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: (1 - 0.3457 - 0.3585) / 0.3585
}, de = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: (1 - 0.3127 - 0.329) / 0.329
};
let Mt = (e) => Math.pow(e, 3) > hr ? Math.pow(e, 3) : (116 * e - 16) / ur;
const br = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (e + 16) / 116, a = n / 500 + i, o = i - t / 200, l = {
    mode: "xyz65",
    x: Mt(a) * de.X,
    y: Mt(i) * de.Y,
    z: Mt(o) * de.Z
  };
  return r !== void 0 && (l.alpha = r), l;
}, tt = (e) => ae(br(e)), kt = (e) => e > hr ? Math.cbrt(e) : (ur * e + 16) / 116, gr = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = kt(e / de.X), a = kt(n / de.Y), o = kt(t / de.Z), l = {
    mode: "lab65",
    l: 116 * a - 16,
    a: 500 * (i - a),
    b: 200 * (a - o)
  };
  return r !== void 0 && (l.alpha = r), l;
}, nt = (e) => {
  let n = gr(ie(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, Be = 1, mr = 1, He = 26 / 180 * Math.PI, Je = Math.cos(He), Ve = Math.sin(He), vr = 100 / Math.log(139 / 100), Jt = ({ l: e, c: n, h: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "lab65",
    l: (Math.exp(e * Be / vr) - 1) / 39e-4
  }, a = (Math.exp(0.0435 * n * mr * Be) - 1) / 0.075, o = a * Math.cos(t / 180 * Math.PI - He), l = a * Math.sin(t / 180 * Math.PI - He);
  return i.a = o * Je - l / 0.83 * Ve, i.b = o * Ve + l / 0.83 * Je, r !== void 0 && (i.alpha = r), i;
}, Vt = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = n * Je + t * Ve, a = 0.83 * (t * Je - n * Ve), o = Math.sqrt(i * i + a * a), l = {
    mode: "dlch",
    l: vr / Be * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * o) / (0.0435 * mr * Be)
  };
  return l.c && (l.h = S((Math.atan2(a, i) + He) / Math.PI * 180)), r !== void 0 && (l.alpha = r), l;
}, qn = (e) => Jt(W(e, "dlch")), Rn = (e) => K(Vt(e), "dlab"), Xi = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: qn,
    rgb: (e) => tt(qn(e))
  },
  fromMode: {
    lab65: Rn,
    rgb: (e) => Rn(nt(e))
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-40.09, 45.501],
    b: [-40.469, 44.344]
  },
  interpolate: {
    l: f,
    a: f,
    b: f,
    alpha: {
      use: f,
      fixup: T
    }
  }
}, Oi = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: Jt,
    dlab: (e) => K(e, "dlab"),
    rgb: (e) => tt(Jt(e))
  },
  fromMode: {
    lab65: Vt,
    dlab: (e) => W(e, "dlch"),
    rgb: (e) => Vt(nt(e))
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 51.484],
    h: [0, 360]
  },
  interpolate: {
    l: f,
    c: f,
    h: {
      use: f,
      fixup: Z
    },
    alpha: {
      use: f,
      fixup: T
    }
  },
  difference: {
    h: et
  },
  average: {
    h: Y
  }
};
function ji({ h: e, s: n, i: t, alpha: r }) {
  e = S(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
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
function Di({ r: e, g: n, b: t, alpha: r }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.max(e, n, t), a = Math.min(e, n, t), o = {
    mode: "hsi",
    s: e + n + t === 0 ? 0 : 1 - 3 * a / (e + n + t),
    i: (e + n + t) / 3
  };
  return i - a !== 0 && (o.h = (i === e ? (n - t) / (i - a) + (n < t) * 6 : i === n ? (t - e) / (i - a) + 2 : (e - n) / (i - a) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
const Zi = {
  mode: "hsi",
  toMode: {
    rgb: ji
  },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: {
    rgb: Di
  },
  channels: ["h", "s", "i", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: f, fixup: Z },
    s: f,
    i: f,
    alpha: { use: f, fixup: T }
  },
  difference: {
    h: Qe
  },
  average: {
    h: Y
  }
};
function Yi({ h: e, s: n, l: t, alpha: r }) {
  e = S(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
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
function Gi({ r: e, g: n, b: t, alpha: r }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.max(e, n, t), a = Math.min(e, n, t), o = {
    mode: "hsl",
    s: i === a ? 0 : (i - a) / (1 - Math.abs(i + a - 1)),
    l: 0.5 * (i + a)
  };
  return i - a !== 0 && (o.h = (i === e ? (n - t) / (i - a) + (n < t) * 6 : i === n ? (t - e) / (i - a) + 2 : (e - n) / (i - a) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
const Bi = (e, n) => {
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
}, Ji = new RegExp(
  `^hsla?\\(\\s*${bi}${ue}${Ne}${ue}${Ne}\\s*(?:,\\s*${hn}\\s*)?\\)$`
), Vi = (e) => {
  let n = e.match(Ji);
  if (!n) return;
  let t = { mode: "hsl" };
  return n[3] !== void 0 ? t.h = +n[3] : n[1] !== void 0 && n[2] !== void 0 && (t.h = Bi(n[1], n[2])), n[4] !== void 0 && (t.s = Math.min(Math.max(0, n[4] / 100), 1)), n[5] !== void 0 && (t.l = Math.min(Math.max(0, n[5] / 100), 1)), n[6] !== void 0 ? t.alpha = Math.max(0, Math.min(1, n[6] / 100)) : n[7] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[7]))), t;
};
function Ui(e, n) {
  if (!n || n[0] !== "hsl" && n[0] !== "hsla")
    return;
  const t = { mode: "hsl" }, [, r, i, a, o] = n;
  if (r.type !== c.None) {
    if (r.type === c.Percentage)
      return;
    t.h = r.value;
  }
  if (i.type !== c.None) {
    if (i.type === c.Hue)
      return;
    t.s = i.value / 100;
  }
  if (a.type !== c.None) {
    if (a.type === c.Hue)
      return;
    t.l = a.value / 100;
  }
  return o.type !== c.None && (t.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === c.Number ? o.value : o.value / 100
    )
  )), t;
}
const xr = {
  mode: "hsl",
  toMode: {
    rgb: Yi
  },
  fromMode: {
    rgb: Gi
  },
  channels: ["h", "s", "l", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Ui, Vi],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: f, fixup: Z },
    s: f,
    l: f,
    alpha: { use: f, fixup: T }
  },
  difference: {
    h: Qe
  },
  average: {
    h: Y
  }
};
function yr({ h: e, s: n, v: t, alpha: r }) {
  e = S(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
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
function Mr({ r: e, g: n, b: t, alpha: r }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.max(e, n, t), a = Math.min(e, n, t), o = {
    mode: "hsv",
    s: i === 0 ? 0 : 1 - a / i,
    v: i
  };
  return i - a !== 0 && (o.h = (i === e ? (n - t) / (i - a) + (n < t) * 6 : i === n ? (t - e) / (i - a) + 2 : (e - n) / (i - a) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
const kr = {
  mode: "hsv",
  toMode: {
    rgb: yr
  },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: {
    rgb: Mr
  },
  channels: ["h", "s", "v", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: f, fixup: Z },
    s: f,
    v: f,
    alpha: { use: f, fixup: T }
  },
  difference: {
    h: Qe
  },
  average: {
    h: Y
  }
};
function Wi({ h: e, w: n, b: t, alpha: r }) {
  if (n === void 0 && (n = 0), t === void 0 && (t = 0), n + t > 1) {
    let i = n + t;
    n /= i, t /= i;
  }
  return yr({
    h: e,
    s: t === 1 ? 1 : 1 - n / (1 - t),
    v: 1 - t,
    alpha: r
  });
}
function Ki(e) {
  let n = Mr(e);
  if (n === void 0) return;
  let t = n.s !== void 0 ? n.s : 0, r = n.v !== void 0 ? n.v : 0, i = {
    mode: "hwb",
    w: (1 - t) * r,
    b: 1 - r
  };
  return n.h !== void 0 && (i.h = n.h), n.alpha !== void 0 && (i.alpha = n.alpha), i;
}
function Qi(e, n) {
  if (!n || n[0] !== "hwb")
    return;
  const t = { mode: "hwb" }, [, r, i, a, o] = n;
  if (r.type !== c.None) {
    if (r.type === c.Percentage)
      return;
    t.h = r.value;
  }
  if (i.type !== c.None) {
    if (i.type === c.Hue)
      return;
    t.w = i.value / 100;
  }
  if (a.type !== c.None) {
    if (a.type === c.Hue)
      return;
    t.b = a.value / 100;
  }
  return o.type !== c.None && (t.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === c.Number ? o.value : o.value / 100
    )
  )), t;
}
const ea = {
  mode: "hwb",
  toMode: {
    rgb: Wi
  },
  fromMode: {
    rgb: Ki
  },
  channels: ["h", "w", "b", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Qi],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: f, fixup: Z },
    w: f,
    b: f,
    alpha: { use: f, fixup: T }
  },
  difference: {
    h: Ri
  },
  average: {
    h: Y
  }
}, wr = 203, rt = 0.1593017578125, $r = 78.84375, it = 0.8359375, at = 18.8515625, ot = 18.6875;
function wt(e) {
  if (e < 0) return 0;
  const n = Math.pow(e, 1 / $r);
  return 1e4 * Math.pow(Math.max(0, n - it) / (at - ot * n), 1 / rt);
}
function $t(e) {
  if (e < 0) return 0;
  const n = Math.pow(e / 1e4, rt);
  return Math.pow((it + at * n) / (1 + ot * n), $r);
}
const zt = (e) => Math.max(e / wr, 0), Fn = ({ i: e, t: n, p: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = wt(
    e + 0.008609037037932761 * n + 0.11102962500302593 * t
  ), a = wt(
    e - 0.00860903703793275 * n - 0.11102962500302599 * t
  ), o = wt(
    e + 0.5600313357106791 * n - 0.32062717498731885 * t
  ), l = {
    mode: "xyz65",
    x: zt(
      2.070152218389422 * i - 1.3263473389671556 * a + 0.2066510476294051 * o
    ),
    y: zt(
      0.3647385209748074 * i + 0.680566024947227 * a - 0.0453045459220346 * o
    ),
    z: zt(
      -0.049747207535812 * i - 0.0492609666966138 * a + 1.1880659249923042 * o
    )
  };
  return r !== void 0 && (l.alpha = r), l;
}, _t = (e = 0) => Math.max(e * wr, 0), Xn = ({ x: e, y: n, z: t, alpha: r }) => {
  const i = _t(e), a = _t(n), o = _t(t), l = $t(
    0.3592832590121217 * i + 0.6976051147779502 * a - 0.0358915932320289 * o
  ), u = $t(
    -0.1920808463704995 * i + 1.1004767970374323 * a + 0.0753748658519118 * o
  ), h = $t(
    0.0070797844607477 * i + 0.0748396662186366 * a + 0.8433265453898765 * o
  ), g = 0.5 * l + 0.5 * u, m = 1.61376953125 * l - 3.323486328125 * u + 1.709716796875 * h, v = 4.378173828125 * l - 4.24560546875 * u - 0.132568359375 * h, k = { mode: "itp", i: g, t: m, p: v };
  return r !== void 0 && (k.alpha = r), k;
}, ta = {
  mode: "itp",
  channels: ["i", "t", "p", "alpha"],
  parse: ["--ictcp"],
  serialize: "--ictcp",
  toMode: {
    xyz65: Fn,
    rgb: (e) => ae(Fn(e))
  },
  fromMode: {
    xyz65: Xn,
    rgb: (e) => Xn(ie(e))
  },
  ranges: {
    i: [0, 0.581],
    t: [-0.369, 0.272],
    p: [-0.164, 0.331]
  },
  interpolate: {
    i: f,
    t: f,
    p: f,
    alpha: { use: f, fixup: T }
  }
}, na = 134.03437499999998, ra = 16295499532821565e-27, Tt = (e) => {
  if (e < 0) return 0;
  let n = Math.pow(e / 1e4, rt);
  return Math.pow((it + at * n) / (1 + ot * n), na);
}, Nt = (e = 0) => Math.max(e * 203, 0), zr = ({ x: e, y: n, z: t, alpha: r }) => {
  e = Nt(e), n = Nt(n), t = Nt(t);
  let i = 1.15 * e - 0.15 * t, a = 0.66 * n + 0.34 * e, o = Tt(0.41478972 * i + 0.579999 * a + 0.014648 * t), l = Tt(-0.20151 * i + 1.120649 * a + 0.0531008 * t), u = Tt(-0.0166008 * i + 0.2648 * a + 0.6684799 * t), h = (o + l) / 2, g = {
    mode: "jab",
    j: 0.44 * h / (1 - 0.56 * h) - ra,
    a: 3.524 * o - 4.066708 * l + 0.542708 * u,
    b: 0.199076 * o + 1.096799 * l - 1.295875 * u
  };
  return r !== void 0 && (g.alpha = r), g;
}, ia = 134.03437499999998, On = 16295499532821565e-27, Ht = (e) => {
  if (e < 0) return 0;
  let n = Math.pow(e, 1 / ia);
  return 1e4 * Math.pow((it - n) / (ot * n - at), 1 / rt);
}, Ct = (e) => e / 203, _r = ({ j: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (e + On) / (0.44 + 0.56 * (e + On)), a = Ht(i + 0.13860504 * n + 0.058047316 * t), o = Ht(i - 0.13860504 * n - 0.058047316 * t), l = Ht(i - 0.096019242 * n - 0.8118919 * t), u = {
    mode: "xyz65",
    x: Ct(
      1.661373024652174 * a - 0.914523081304348 * o + 0.23136208173913045 * l
    ),
    y: Ct(
      -0.3250758611844533 * a + 1.571847026732543 * o - 0.21825383453227928 * l
    ),
    z: Ct(-0.090982811 * a - 0.31272829 * o + 1.5227666 * l)
  };
  return r !== void 0 && (u.alpha = r), u;
}, Tr = (e) => {
  let n = zr(ie(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, Nr = (e) => ae(_r(e)), aa = {
  mode: "jab",
  channels: ["j", "a", "b", "alpha"],
  parse: ["--jzazbz"],
  serialize: "--jzazbz",
  fromMode: {
    rgb: Tr,
    xyz65: zr
  },
  toMode: {
    rgb: Nr,
    xyz65: _r
  },
  ranges: {
    j: [0, 0.222],
    a: [-0.109, 0.129],
    b: [-0.185, 0.134]
  },
  interpolate: {
    j: f,
    a: f,
    b: f,
    alpha: { use: f, fixup: T }
  }
}, jn = ({ j: e, a: n, b: t, alpha: r }) => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.sqrt(n * n + t * t), a = {
    mode: "jch",
    j: e,
    c: i
  };
  return i && (a.h = S(Math.atan2(t, n) * 180 / Math.PI)), r !== void 0 && (a.alpha = r), a;
}, Dn = ({ j: e, c: n, h: t, alpha: r }) => {
  t === void 0 && (t = 0);
  let i = {
    mode: "jab",
    j: e,
    a: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    b: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return r !== void 0 && (i.alpha = r), i;
}, oa = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: Dn,
    rgb: (e) => Nr(Dn(e))
  },
  fromMode: {
    rgb: (e) => jn(Tr(e)),
    jab: jn
  },
  channels: ["j", "c", "h", "alpha"],
  ranges: {
    j: [0, 0.221],
    c: [0, 0.19],
    h: [0, 360]
  },
  interpolate: {
    h: { use: f, fixup: Z },
    c: f,
    j: f,
    alpha: { use: f, fixup: T }
  },
  difference: {
    h: et
  },
  average: {
    h: Y
  }
}, st = Math.pow(29, 3) / Math.pow(3, 3), bn = Math.pow(6, 3) / Math.pow(29, 3);
let St = (e) => Math.pow(e, 3) > bn ? Math.pow(e, 3) : (116 * e - 16) / st;
const gn = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = (e + 16) / 116, a = n / 500 + i, o = i - t / 200, l = {
    mode: "xyz50",
    x: St(a) * z.X,
    y: St(i) * z.Y,
    z: St(o) * z.Z
  };
  return r !== void 0 && (l.alpha = r), l;
}, Ie = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = ge({
    r: e * 3.1341359569958707 - n * 1.6173863321612538 - 0.4906619460083532 * t,
    g: e * -0.978795502912089 + n * 1.916254567259524 + 0.03344273116131949 * t,
    b: e * 0.07195537988411677 - n * 0.2289768264158322 + 1.405386058324125 * t
  });
  return r !== void 0 && (i.alpha = r), i;
}, Hr = (e) => Ie(gn(e)), qe = (e) => {
  let { r: n, g: t, b: r, alpha: i } = be(e), a = {
    mode: "xyz50",
    x: 0.436065742824811 * n + 0.3851514688337912 * t + 0.14307845442264197 * r,
    y: 0.22249319175623702 * n + 0.7168870538238823 * t + 0.06061979053616537 * r,
    z: 0.013923904500943465 * n + 0.09708128566574634 * t + 0.7140993584005155 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, Lt = (e) => e > bn ? Math.cbrt(e) : (st * e + 16) / 116, mn = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Lt(e / z.X), a = Lt(n / z.Y), o = Lt(t / z.Z), l = {
    mode: "lab",
    l: 116 * a - 16,
    a: 500 * (i - a),
    b: 200 * (a - o)
  };
  return r !== void 0 && (l.alpha = r), l;
}, Cr = (e) => {
  let n = mn(qe(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
};
function sa(e, n) {
  if (!n || n[0] !== "lab")
    return;
  const t = { mode: "lab" }, [, r, i, a, o] = n;
  if (!(r.type === c.Hue || i.type === c.Hue || a.type === c.Hue))
    return r.type !== c.None && (t.l = Math.min(Math.max(0, r.value), 100)), i.type !== c.None && (t.a = i.type === c.Number ? i.value : i.value * 125 / 100), a.type !== c.None && (t.b = a.type === c.Number ? a.value : a.value * 125 / 100), o.type !== c.None && (t.alpha = Math.min(
      1,
      Math.max(
        0,
        o.type === c.Number ? o.value : o.value / 100
      )
    )), t;
}
const vn = {
  mode: "lab",
  toMode: {
    xyz50: gn,
    rgb: Hr
  },
  fromMode: {
    xyz50: mn,
    rgb: Cr
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  },
  parse: [sa],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: f,
    a: f,
    b: f,
    alpha: { use: f, fixup: T }
  }
}, la = {
  ...vn,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: br,
    rgb: tt
  },
  fromMode: {
    xyz65: gr,
    rgb: nt
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function da(e, n) {
  if (!n || n[0] !== "lch")
    return;
  const t = { mode: "lch" }, [, r, i, a, o] = n;
  if (r.type !== c.None) {
    if (r.type === c.Hue)
      return;
    t.l = Math.min(Math.max(0, r.value), 100);
  }
  if (i.type !== c.None && (t.c = Math.max(
    0,
    i.type === c.Number ? i.value : i.value * 150 / 100
  )), a.type !== c.None) {
    if (a.type === c.Percentage)
      return;
    t.h = a.value;
  }
  return o.type !== c.None && (t.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === c.Number ? o.value : o.value / 100
    )
  )), t;
}
const xn = {
  mode: "lch",
  toMode: {
    lab: K,
    rgb: (e) => Hr(K(e))
  },
  fromMode: {
    rgb: (e) => W(Cr(e)),
    lab: W
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  },
  parse: [da],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: f, fixup: Z },
    c: f,
    l: f,
    alpha: { use: f, fixup: T }
  },
  difference: {
    h: et
  },
  average: {
    h: Y
  }
}, ca = {
  ...xn,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => K(e, "lab65"),
    rgb: (e) => tt(K(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => W(nt(e), "lch65"),
    lab65: (e) => W(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, Sr = ({ l: e, u: n, v: t, alpha: r }) => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.sqrt(n * n + t * t), a = {
    mode: "lchuv",
    l: e,
    c: i
  };
  return i && (a.h = S(Math.atan2(t, n) * 180 / Math.PI)), r !== void 0 && (a.alpha = r), a;
}, Lr = ({ l: e, c: n, h: t, alpha: r }) => {
  t === void 0 && (t = 0);
  let i = {
    mode: "luv",
    l: e,
    u: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    v: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return r !== void 0 && (i.alpha = r), i;
}, Pr = (e, n, t) => 4 * e / (e + 15 * n + 3 * t), Ar = (e, n, t) => 9 * n / (e + 15 * n + 3 * t), pa = Pr(z.X, z.Y, z.Z), fa = Ar(z.X, z.Y, z.Z), ua = (e) => e <= bn ? st * e : 116 * Math.cbrt(e) - 16, Ut = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = ua(n / z.Y), a = Pr(e, n, t), o = Ar(e, n, t);
  !isFinite(a) || !isFinite(o) ? i = a = o = 0 : (a = 13 * i * (a - pa), o = 13 * i * (o - fa));
  let l = {
    mode: "luv",
    l: i,
    u: a,
    v: o
  };
  return r !== void 0 && (l.alpha = r), l;
}, ha = (e, n, t) => 4 * e / (e + 15 * n + 3 * t), ba = (e, n, t) => 9 * n / (e + 15 * n + 3 * t), ga = ha(z.X, z.Y, z.Z), ma = ba(z.X, z.Y, z.Z), Wt = ({ l: e, u: n, v: t, alpha: r }) => {
  if (e === void 0 && (e = 0), e === 0)
    return { mode: "xyz50", x: 0, y: 0, z: 0 };
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = n / (13 * e) + ga, a = t / (13 * e) + ma, o = z.Y * (e <= 8 ? e / st : Math.pow((e + 16) / 116, 3)), l = o * (9 * i) / (4 * a), u = o * (12 - 3 * i - 20 * a) / (4 * a), h = { mode: "xyz50", x: l, y: o, z: u };
  return r !== void 0 && (h.alpha = r), h;
}, va = (e) => Sr(Ut(qe(e))), xa = (e) => Ie(Wt(Lr(e))), ya = {
  mode: "lchuv",
  toMode: {
    luv: Lr,
    rgb: xa
  },
  fromMode: {
    rgb: va,
    luv: Sr
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
    h: { use: f, fixup: Z },
    c: f,
    l: f,
    alpha: { use: f, fixup: T }
  },
  difference: {
    h: et
  },
  average: {
    h: Y
  }
}, Ma = {
  ...he,
  mode: "lrgb",
  toMode: {
    rgb: ge
  },
  fromMode: {
    rgb: be
  },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, ka = {
  mode: "luv",
  toMode: {
    xyz50: Wt,
    rgb: (e) => Ie(Wt(e))
  },
  fromMode: {
    xyz50: Ut,
    rgb: (e) => Ut(qe(e))
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
    l: f,
    u: f,
    v: f,
    alpha: { use: f, fixup: T }
  }
}, Er = ({ r: e, g: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.cbrt(
    0.412221469470763 * e + 0.5363325372617348 * n + 0.0514459932675022 * t
  ), a = Math.cbrt(
    0.2119034958178252 * e + 0.6806995506452344 * n + 0.1073969535369406 * t
  ), o = Math.cbrt(
    0.0883024591900564 * e + 0.2817188391361215 * n + 0.6299787016738222 * t
  ), l = {
    mode: "oklab",
    l: 0.210454268309314 * i + 0.7936177747023054 * a - 0.0040720430116193 * o,
    a: 1.9779985324311684 * i - 2.42859224204858 * a + 0.450593709617411 * o,
    b: 0.0259040424655478 * i + 0.7827717124575296 * a - 0.8086757549230774 * o
  };
  return r !== void 0 && (l.alpha = r), l;
}, lt = (e) => {
  let n = Er(be(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, Re = ({ l: e, a: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = Math.pow(e + 0.3963377773761749 * n + 0.2158037573099136 * t, 3), a = Math.pow(e - 0.1055613458156586 * n - 0.0638541728258133 * t, 3), o = Math.pow(e - 0.0894841775298119 * n - 1.2914855480194092 * t, 3), l = {
    mode: "lrgb",
    r: 4.076741636075957 * i - 3.3077115392580616 * a + 0.2309699031821044 * o,
    g: -1.2684379732850317 * i + 2.6097573492876887 * a - 0.3413193760026573 * o,
    b: -0.0041960761386756 * i - 0.7034186179359362 * a + 1.7076146940746117 * o
  };
  return r !== void 0 && (l.alpha = r), l;
}, dt = (e) => ge(Re(e));
function Kt(e) {
  const r = 1.170873786407767;
  return 0.5 * (r * e - 0.206 + Math.sqrt((r * e - 0.206) * (r * e - 0.206) + 4 * 0.03 * r * e));
}
function Ue(e) {
  return (e * e + 0.206 * e) / (1.170873786407767 * (e + 0.03));
}
function wa(e, n) {
  let t, r, i, a, o, l, u, h;
  -1.88170328 * e - 0.80936493 * n > 1 ? (t = 1.19086277, r = 1.76576728, i = 0.59662641, a = 0.75515197, o = 0.56771245, l = 4.0767416621, u = -3.3077115913, h = 0.2309699292) : 1.81444104 * e - 1.19445276 * n > 1 ? (t = 0.73956515, r = -0.45954404, i = 0.08285427, a = 0.1254107, o = 0.14503204, l = -1.2684380046, u = 2.6097574011, h = -0.3413193965) : (t = 1.35733652, r = -915799e-8, i = -1.1513021, a = -0.50559606, o = 692167e-8, l = -0.0041960863, u = -0.7034186147, h = 1.707614701);
  let g = t + r * e + i * n + a * e * e + o * e * n, m = 0.3963377774 * e + 0.2158037573 * n, v = -0.1055613458 * e - 0.0638541728 * n, k = -0.0894841775 * e - 1.291485548 * n;
  {
    let _ = 1 + g * m, C = 1 + g * v, N = 1 + g * k, P = _ * _ * _, L = C * C * C, G = N * N * N, ve = 3 * m * _ * _, xe = 3 * v * C * C, ye = 3 * k * N * N, Me = 6 * m * m * _, ke = 6 * v * v * C, we = 6 * k * k * N, oe = l * P + u * L + h * G, Q = l * ve + u * xe + h * ye, $e = l * Me + u * ke + h * we;
    g = g - oe * Q / (Q * Q - 0.5 * oe * $e);
  }
  return g;
}
function yn(e, n) {
  let t = wa(e, n), r = Re({ l: 1, a: t * e, b: t * n }), i = Math.cbrt(1 / Math.max(r.r, r.g, r.b)), a = i * t;
  return [i, a];
}
function $a(e, n, t, r, i, a = null) {
  a || (a = yn(e, n));
  let o;
  if ((t - i) * a[1] - (a[0] - i) * r <= 0)
    o = a[1] * i / (r * a[0] + a[1] * (i - t));
  else {
    o = a[1] * (i - 1) / (r * (a[0] - 1) + a[1] * (i - t));
    {
      let l = t - i, u = r, h = 0.3963377774 * e + 0.2158037573 * n, g = -0.1055613458 * e - 0.0638541728 * n, m = -0.0894841775 * e - 1.291485548 * n, v = l + u * h, k = l + u * g, _ = l + u * m;
      {
        let C = i * (1 - o) + o * t, N = o * r, P = C + N * h, L = C + N * g, G = C + N * m, ve = P * P * P, xe = L * L * L, ye = G * G * G, Me = 3 * v * P * P, ke = 3 * k * L * L, we = 3 * _ * G * G, oe = 6 * v * v * P, Q = 6 * k * k * L, $e = 6 * _ * _ * G, $n = 4.0767416621 * ve - 3.3077115913 * xe + 0.2309699292 * ye - 1, ct = 4.0767416621 * Me - 3.3077115913 * ke + 0.2309699292 * we, oi = 4.0767416621 * oe - 3.3077115913 * Q + 0.2309699292 * $e, zn = ct / (ct * ct - 0.5 * $n * oi), pt = -$n * zn, _n = -1.2684380046 * ve + 2.6097574011 * xe - 0.3413193965 * ye - 1, ft = -1.2684380046 * Me + 2.6097574011 * ke - 0.3413193965 * we, si = -1.2684380046 * oe + 2.6097574011 * Q - 0.3413193965 * $e, Tn = ft / (ft * ft - 0.5 * _n * si), ut = -_n * Tn, Nn = -0.0041960863 * ve - 0.7034186147 * xe + 1.707614701 * ye - 1, ht = -0.0041960863 * Me - 0.7034186147 * ke + 1.707614701 * we, li = -0.0041960863 * oe - 0.7034186147 * Q + 1.707614701 * $e, Hn = ht / (ht * ht - 0.5 * Nn * li), bt = -Nn * Hn;
        pt = zn >= 0 ? pt : 1e6, ut = Tn >= 0 ? ut : 1e6, bt = Hn >= 0 ? bt : 1e6, o += Math.min(pt, Math.min(ut, bt));
      }
    }
  }
  return o;
}
function Mn(e, n, t = null) {
  t || (t = yn(e, n));
  let r = t[0], i = t[1];
  return [i / r, i / (1 - r)];
}
function Ir(e, n, t) {
  let r = yn(n, t), i = $a(n, t, e, 1, e, r), a = Mn(n, t, r), o = 0.11516993 + 1 / (7.4477897 + 4.1590124 * t + n * (-2.19557347 + 1.75198401 * t + n * (-2.13704948 - 10.02301043 * t + n * (-4.24894561 + 5.38770819 * t + 4.69891013 * n)))), l = 0.11239642 + 1 / (1.6132032 - 0.68124379 * t + n * (0.40370612 + 0.90148123 * t + n * (-0.27087943 + 0.6122399 * t + n * (299215e-8 - 0.45399568 * t - 0.14661872 * n)))), u = i / Math.min(e * a[0], (1 - e) * a[1]), h = e * o, g = (1 - e) * l, m = 0.9 * u * Math.sqrt(
    Math.sqrt(
      1 / (1 / (h * h * h * h) + 1 / (g * g * g * g))
    )
  );
  return h = e * 0.4, g = (1 - e) * 0.8, [Math.sqrt(1 / (1 / (h * h) + 1 / (g * g))), m, i];
}
function Zn(e) {
  const n = e.l !== void 0 ? e.l : 0, t = e.a !== void 0 ? e.a : 0, r = e.b !== void 0 ? e.b : 0, i = { mode: "okhsl", l: Kt(n) };
  e.alpha !== void 0 && (i.alpha = e.alpha);
  let a = Math.sqrt(t * t + r * r);
  if (!a)
    return i.s = 0, i;
  let [o, l, u] = Ir(n, t / a, r / a), h;
  if (a < l) {
    let g = 0, m = 0.8 * o, v = 1 - m / l;
    h = (a - g) / (m + v * (a - g)) * 0.8;
  } else {
    let g = l, m = 0.2 * l * l * 1.25 * 1.25 / o, v = 1 - m / (u - l);
    h = 0.8 + 0.2 * ((a - g) / (m + v * (a - g)));
  }
  return h && (i.s = h, i.h = S(Math.atan2(r, t) * 180 / Math.PI)), i;
}
function Yn(e) {
  let n = e.h !== void 0 ? e.h : 0, t = e.s !== void 0 ? e.s : 0, r = e.l !== void 0 ? e.l : 0;
  const i = { mode: "oklab", l: Ue(r) };
  if (e.alpha !== void 0 && (i.alpha = e.alpha), !t || r === 1)
    return i.a = i.b = 0, i;
  let a = Math.cos(n / 180 * Math.PI), o = Math.sin(n / 180 * Math.PI), [l, u, h] = Ir(i.l, a, o), g, m, v, k;
  t < 0.8 ? (g = 1.25 * t, m = 0, v = 0.8 * l, k = 1 - v / u) : (g = 5 * (t - 0.8), m = u, v = 0.2 * u * u * 1.25 * 1.25 / l, k = 1 - v / (h - u));
  let _ = m + g * v / (1 - k * g);
  return i.a = _ * a, i.b = _ * o, i;
}
const za = {
  ...xr,
  mode: "okhsl",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--okhsl"],
  serialize: "--okhsl",
  fromMode: {
    oklab: Zn,
    rgb: (e) => Zn(lt(e))
  },
  toMode: {
    oklab: Yn,
    rgb: (e) => dt(Yn(e))
  }
};
function Gn(e) {
  let n = e.l !== void 0 ? e.l : 0, t = e.a !== void 0 ? e.a : 0, r = e.b !== void 0 ? e.b : 0, i = Math.sqrt(t * t + r * r), a = i ? t / i : 1, o = i ? r / i : 1, [l, u] = Mn(a, o), h = 0.5, g = 1 - h / l, m = u / (i + n * u), v = m * n, k = m * i, _ = Ue(v), C = k * _ / v, N = Re({ l: _, a: a * C, b: o * C }), P = Math.cbrt(
    1 / Math.max(N.r, N.g, N.b, 0)
  );
  n = n / P, i = i / P * Kt(n) / n, n = Kt(n);
  const L = {
    mode: "okhsv",
    s: i ? (h + u) * k / (u * h + u * g * k) : 0,
    v: n ? n / v : 0
  };
  return L.s && (L.h = S(Math.atan2(r, t) * 180 / Math.PI)), e.alpha !== void 0 && (L.alpha = e.alpha), L;
}
function Bn(e) {
  const n = { mode: "oklab" };
  e.alpha !== void 0 && (n.alpha = e.alpha);
  const t = e.h !== void 0 ? e.h : 0, r = e.s !== void 0 ? e.s : 0, i = e.v !== void 0 ? e.v : 0, a = Math.cos(t / 180 * Math.PI), o = Math.sin(t / 180 * Math.PI), [l, u] = Mn(a, o), h = 0.5, g = 1 - h / l, m = 1 - r * h / (h + u - u * g * r), v = r * u * h / (h + u - u * g * r), k = Ue(m), _ = v * k / m, C = Re({
    l: k,
    a: a * _,
    b: o * _
  }), N = Math.cbrt(
    1 / Math.max(C.r, C.g, C.b, 0)
  ), P = Ue(i * m), L = v * P / m;
  return n.l = P * N, n.a = L * a * N, n.b = L * o * N, n;
}
const _a = {
  ...kr,
  mode: "okhsv",
  channels: ["h", "s", "v", "alpha"],
  parse: ["--okhsv"],
  serialize: "--okhsv",
  fromMode: {
    oklab: Gn,
    rgb: (e) => Gn(lt(e))
  },
  toMode: {
    oklab: Bn,
    rgb: (e) => dt(Bn(e))
  }
};
function Ta(e, n) {
  if (!n || n[0] !== "oklab")
    return;
  const t = { mode: "oklab" }, [, r, i, a, o] = n;
  if (!(r.type === c.Hue || i.type === c.Hue || a.type === c.Hue))
    return r.type !== c.None && (t.l = Math.min(
      Math.max(0, r.type === c.Number ? r.value : r.value / 100),
      1
    )), i.type !== c.None && (t.a = i.type === c.Number ? i.value : i.value * 0.4 / 100), a.type !== c.None && (t.b = a.type === c.Number ? a.value : a.value * 0.4 / 100), o.type !== c.None && (t.alpha = Math.min(
      1,
      Math.max(
        0,
        o.type === c.Number ? o.value : o.value / 100
      )
    )), t;
}
const Na = {
  ...vn,
  mode: "oklab",
  toMode: {
    lrgb: Re,
    rgb: dt
  },
  fromMode: {
    lrgb: Er,
    rgb: lt
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [Ta],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function Ha(e, n) {
  if (!n || n[0] !== "oklch")
    return;
  const t = { mode: "oklch" }, [, r, i, a, o] = n;
  if (r.type !== c.None) {
    if (r.type === c.Hue)
      return;
    t.l = Math.min(
      Math.max(0, r.type === c.Number ? r.value : r.value / 100),
      1
    );
  }
  if (i.type !== c.None && (t.c = Math.max(
    0,
    i.type === c.Number ? i.value : i.value * 0.4 / 100
  )), a.type !== c.None) {
    if (a.type === c.Percentage)
      return;
    t.h = a.value;
  }
  return o.type !== c.None && (t.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === c.Number ? o.value : o.value / 100
    )
  )), t;
}
const Ca = {
  ...xn,
  mode: "oklch",
  toMode: {
    oklab: (e) => K(e, "oklab"),
    rgb: (e) => dt(K(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => W(lt(e), "oklch"),
    oklab: (e) => W(e, "oklch")
  },
  parse: [Ha],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, Jn = (e) => {
  let { r: n, g: t, b: r, alpha: i } = be(e), a = {
    mode: "xyz65",
    x: 0.486570948648216 * n + 0.265667693169093 * t + 0.1982172852343625 * r,
    y: 0.2289745640697487 * n + 0.6917385218365062 * t + 0.079286914093745 * r,
    z: 0 * n + 0.0451133818589026 * t + 1.043944368900976 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, Vn = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = ge(
    {
      r: e * 2.4934969119414263 - n * 0.9313836179191242 - 0.402710784450717 * t,
      g: e * -0.8294889695615749 + n * 1.7626640603183465 + 0.0236246858419436 * t,
      b: e * 0.0358458302437845 - n * 0.0761723892680418 + 0.9568845240076871 * t
    },
    "p3"
  );
  return r !== void 0 && (i.alpha = r), i;
}, Sa = {
  ...he,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => Vn(ie(e)),
    xyz65: Vn
  },
  toMode: {
    rgb: (e) => ae(Jn(e)),
    xyz65: Jn
  }
}, Pt = (e) => {
  let n = Math.abs(e);
  return n >= 1 / 512 ? Math.sign(e) * Math.pow(n, 1 / 1.8) : 16 * e;
}, Un = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "prophoto",
    r: Pt(
      e * 1.3457868816471585 - n * 0.2555720873797946 - 0.0511018649755453 * t
    ),
    g: Pt(
      e * -0.5446307051249019 + n * 1.5082477428451466 + 0.0205274474364214 * t
    ),
    b: Pt(e * 0 + n * 0 + 1.2119675456389452 * t)
  };
  return r !== void 0 && (i.alpha = r), i;
}, At = (e = 0) => {
  let n = Math.abs(e);
  return n >= 16 / 512 ? Math.sign(e) * Math.pow(n, 1.8) : e / 16;
}, Wn = (e) => {
  let n = At(e.r), t = At(e.g), r = At(e.b), i = {
    mode: "xyz50",
    x: 0.7977666449006423 * n + 0.1351812974005331 * t + 0.0313477341283922 * r,
    y: 0.2880748288194013 * n + 0.7118352342418731 * t + 899369387256e-16 * r,
    z: 0 * n + 0 * t + 0.8251046025104602 * r
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, La = {
  ...he,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: Un,
    rgb: (e) => Un(qe(e))
  },
  toMode: {
    xyz50: Wn,
    rgb: (e) => Ie(Wn(e))
  }
}, Kn = 1.09929682680944, Pa = 0.018053968510807, Et = (e) => {
  const n = Math.abs(e);
  return n > Pa ? (Math.sign(e) || 1) * (Kn * Math.pow(n, 0.45) - (Kn - 1)) : 4.5 * e;
}, Qn = ({ x: e, y: n, z: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let i = {
    mode: "rec2020",
    r: Et(
      e * 1.7166511879712683 - n * 0.3556707837763925 - 0.2533662813736599 * t
    ),
    g: Et(
      e * -0.6666843518324893 + n * 1.6164812366349395 + 0.0157685458139111 * t
    ),
    b: Et(
      e * 0.0176398574453108 - n * 0.0427706132578085 + 0.9421031212354739 * t
    )
  };
  return r !== void 0 && (i.alpha = r), i;
}, er = 1.09929682680944, Aa = 0.018053968510807, It = (e = 0) => {
  let n = Math.abs(e);
  return n < Aa * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((n + er - 1) / er, 1 / 0.45);
}, tr = (e) => {
  let n = It(e.r), t = It(e.g), r = It(e.b), i = {
    mode: "xyz65",
    x: 0.6369580483012911 * n + 0.1446169035862083 * t + 0.1688809751641721 * r,
    y: 0.262700212011267 * n + 0.6779980715188708 * t + 0.059301716469862 * r,
    z: 0 * n + 0.0280726930490874 * t + 1.0609850577107909 * r
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Ea = {
  ...he,
  mode: "rec2020",
  fromMode: {
    xyz65: Qn,
    rgb: (e) => Qn(ie(e))
  },
  toMode: {
    xyz65: tr,
    rgb: (e) => ae(tr(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, re = 0.0037930732552754493, qr = Math.cbrt(re), qt = (e) => Math.cbrt(e) - qr, Ia = (e) => {
  const { r: n, g: t, b: r, alpha: i } = be(e), a = qt(0.3 * n + 0.622 * t + 0.078 * r + re), o = qt(0.23 * n + 0.692 * t + 0.078 * r + re), l = qt(
    0.2434226892454782 * n + 0.2047674442449682 * t + 0.5518098665095535 * r + re
  ), u = {
    mode: "xyb",
    x: (a - o) / 2,
    y: (a + o) / 2,
    /* Apply default chroma from luma (subtract Y from B) */
    b: l - (a + o) / 2
  };
  return i !== void 0 && (u.alpha = i), u;
}, Rt = (e) => Math.pow(e + qr, 3), qa = ({ x: e, y: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = Rt(e + n) - re, a = Rt(n - e) - re, o = Rt(t + n) - re, l = ge({
    r: 11.031566904639861 * i - 9.866943908131562 * a - 0.16462299650829934 * o,
    g: -3.2541473810744237 * i + 4.418770377582723 * a - 0.16462299650829934 * o,
    b: -3.6588512867136815 * i + 2.7129230459360922 * a + 1.9459282407775895 * o
  });
  return r !== void 0 && (l.alpha = r), l;
}, Ra = {
  mode: "xyb",
  channels: ["x", "y", "b", "alpha"],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: {
    rgb: qa
  },
  fromMode: {
    rgb: Ia
  },
  ranges: {
    x: [-0.0154, 0.0281],
    y: [0, 0.8453],
    b: [-0.2778, 0.388]
  },
  interpolate: {
    x: f,
    y: f,
    b: f,
    alpha: { use: f, fixup: T }
  }
}, Fa = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: Ie,
    lab: mn
  },
  fromMode: {
    rgb: qe,
    lab: gn
  },
  channels: ["x", "y", "z", "alpha"],
  ranges: {
    x: [0, 0.964],
    y: [0, 0.999],
    z: [0, 0.825]
  },
  interpolate: {
    x: f,
    y: f,
    z: f,
    alpha: { use: f, fixup: T }
  }
}, Xa = (e) => {
  let { x: n, y: t, z: r, alpha: i } = e;
  n === void 0 && (n = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = {
    mode: "xyz50",
    x: 1.0479298208405488 * n + 0.0229467933410191 * t - 0.0501922295431356 * r,
    y: 0.0296278156881593 * n + 0.990434484573249 * t - 0.0170738250293851 * r,
    z: -0.0092430581525912 * n + 0.0150551448965779 * t + 0.7518742899580008 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, Oa = (e) => {
  let { x: n, y: t, z: r, alpha: i } = e;
  n === void 0 && (n = 0), t === void 0 && (t = 0), r === void 0 && (r = 0);
  let a = {
    mode: "xyz65",
    x: 0.9554734527042182 * n - 0.0230985368742614 * t + 0.0632593086610217 * r,
    y: -0.0283697069632081 * n + 1.0099954580058226 * t + 0.021041398966943 * r,
    z: 0.0123140016883199 * n - 0.0205076964334779 * t + 1.3303659366080753 * r
  };
  return i !== void 0 && (a.alpha = i), a;
}, ja = {
  mode: "xyz65",
  toMode: {
    rgb: ae,
    xyz50: Xa
  },
  fromMode: {
    rgb: ie,
    xyz50: Oa
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
    x: f,
    y: f,
    z: f,
    alpha: { use: f, fixup: T }
  }
}, Da = ({ r: e, g: n, b: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * n + 0.11448223 * t,
    i: 0.59597799 * e - 0.2741761 * n - 0.32180189 * t,
    q: 0.21147017 * e - 0.52261711 * n + 0.31114694 * t
  };
  return r !== void 0 && (i.alpha = r), i;
}, Za = ({ y: e, i: n, q: t, alpha: r }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const i = {
    mode: "rgb",
    r: e + 0.95608445 * n + 0.6208885 * t,
    g: e - 0.27137664 * n - 0.6486059 * t,
    b: e - 1.10561724 * n + 1.70250126 * t
  };
  return r !== void 0 && (i.alpha = r), i;
}, Ya = {
  mode: "yiq",
  toMode: {
    rgb: Za
  },
  fromMode: {
    rgb: Da
  },
  channels: ["y", "i", "q", "alpha"],
  parse: ["--yiq"],
  serialize: "--yiq",
  ranges: {
    i: [-0.595, 0.595],
    q: [-0.522, 0.522]
  },
  interpolate: {
    y: f,
    i: f,
    q: f,
    alpha: { use: f, fixup: T }
  }
}, Ga = (e) => Math.max(0, Math.min(1, e || 0)), Ft = (e) => Math.round(Ga(e) * 255), Ba = I("rgb"), Ja = (e) => {
  if (e === void 0)
    return;
  let n = Ft(e.r), t = Ft(e.g), r = Ft(e.b);
  return "#" + (1 << 24 | n << 16 | t << 8 | r).toString(16).slice(1);
}, Va = (e) => Ja(Ba(e)), Rr = I("rgb"), Fr = (e) => {
  const n = {
    mode: e.mode,
    r: Math.max(0, Math.min(e.r !== void 0 ? e.r : 0, 1)),
    g: Math.max(0, Math.min(e.g !== void 0 ? e.g : 0, 1)),
    b: Math.max(0, Math.min(e.b !== void 0 ? e.b : 0, 1))
  };
  return e.alpha !== void 0 && (n.alpha = e.alpha), n;
}, Ua = (e) => Fr(Rr(e)), Xr = (e) => e !== void 0 && (e.r === void 0 || e.r >= 0 && e.r <= 1) && (e.g === void 0 || e.g >= 0 && e.g <= 1) && (e.b === void 0 || e.b >= 0 && e.b <= 1);
function Wa(e) {
  return Xr(Rr(e));
}
function Or(e = "rgb") {
  const { gamut: n } = Ke(e);
  if (!n)
    return (r) => !0;
  const t = I(typeof n == "string" ? n : e);
  return (r) => Xr(t(r));
}
function Ka(e = "rgb") {
  const { gamut: n } = Ke(e);
  if (!n)
    return (a) => Ze(a);
  const t = typeof n == "string" ? n : e, r = I(t), i = Or(t);
  return (a) => {
    const o = Ze(a);
    if (!o)
      return;
    const l = r(o);
    if (i(l))
      return o;
    const u = Fr(l);
    return o.mode === u.mode ? u : I(o.mode)(u);
  };
}
function Qa(e, n = "lch", t = "rgb") {
  e = Ze(e);
  let r = t === "rgb" ? Wa : Or(t), i = t === "rgb" ? Ua : Ka(t);
  if (e === void 0 || r(e)) return e;
  let a = I(e.mode);
  e = I(n)(e);
  let o = { ...e, c: 0 };
  if (!r(o))
    return a(i(o));
  let l = 0, u = e.c !== void 0 ? e.c : 0, h = Ke(n).ranges.c, g = (h[1] - h[0]) / Math.pow(2, 13), m = o.c;
  for (; u - l > g; )
    o.c = l + (u - l) * 0.5, r(o) ? (m = o.c, l = o.c) : u = o.c;
  return a(
    r(o) ? o : { ...o, c: m }
  );
}
y(Li);
y(Fi);
y(Xi);
y(Oi);
y(Zi);
y(xr);
y(kr);
y(ea);
y(ta);
y(aa);
y(oa);
y(vn);
y(la);
y(xn);
y(ca);
y(ya);
y(Ma);
y(ka);
y(za);
y(_a);
y(Na);
const kn = y(Ca);
y(Sa);
y(La);
y(Ea);
y(he);
y(Ra);
y(Fa);
y(ja);
y(Ya);
const e0 = I("rgb");
function t0(e, n) {
  const t = e.getContext("2d", { willReadFrequently: !0 });
  if (!t) return;
  const { width: r, height: i } = e, a = t.createImageData(r, i), o = a.data;
  for (let l = 0; l < i; l++) {
    const u = 1 - l / (i - 1 || 1);
    for (let h = 0; h < r; h++) {
      const g = h / (r - 1 || 1), m = e0({ mode: "hsv", h: n, s: g, v: u, alpha: 1 }), v = (l * r + h) * 4;
      if (!m) {
        o[v] = o[v + 1] = o[v + 2] = 0, o[v + 3] = 255;
        continue;
      }
      o[v] = Math.round(Xt((m.r ?? 0) * 255)), o[v + 1] = Math.round(Xt((m.g ?? 0) * 255)), o[v + 2] = Math.round(Xt((m.b ?? 0) * 255)), o[v + 3] = 255;
    }
  }
  t.putImageData(a, 0, 0);
}
function Xt(e) {
  return Math.min(255, Math.max(0, e));
}
const me = I("rgb"), wn = I("hsv"), n0 = I("hsl");
function X(e) {
  const n = Se(e.l ?? 0), t = Math.max(0, e.c ?? 0), r = s0(e.h ?? 0), i = Se(e.alpha ?? 1), a = Qa({ mode: "oklch", l: n, c: t, h: r, alpha: i }, "rgb");
  return {
    l: a.l ?? n,
    c: a.c ?? 0,
    h: a.h ?? r,
    alpha: a.alpha ?? i
  };
}
function ce(e) {
  const n = fr(e.trim());
  if (!n) return null;
  const t = kn(n);
  return (t == null ? void 0 : t.l) == null ? null : X({
    l: t.l,
    c: t.c ?? 0,
    h: t.h ?? 0,
    alpha: t.alpha ?? 1
  });
}
function nr(e) {
  const { l: n, c: t, h: r, alpha: i } = e;
  return i >= 1 ? `oklch(${(n * 100).toFixed(1)}% ${t.toFixed(4)} ${r.toFixed(1)})` : `oklch(${(n * 100).toFixed(1)}% ${t.toFixed(4)} ${r.toFixed(1)} / ${Math.round(i * 100)}%)`;
}
function Ce(e) {
  return Va(me({ mode: "oklch", ...e })) ?? "#000000";
}
function w0(e) {
  const { r: n, g: t, b: r } = We(e);
  return e.alpha < 1 ? `rgba(${n}, ${t}, ${r}, ${e.alpha.toFixed(2)})` : `rgb(${n}, ${t}, ${r})`;
}
function We(e) {
  const n = me({ mode: "oklch", ...e, alpha: 1 });
  return n ? {
    r: Math.round((n.r ?? 0) * 255),
    g: Math.round((n.g ?? 0) * 255),
    b: Math.round((n.b ?? 0) * 255)
  } : { r: 0, g: 0, b: 0 };
}
function r0(e) {
  const n = Math.max(0, Math.min(1, e)) * 360, t = me({ mode: "hsv", h: n, s: 1, v: 1, alpha: 1 });
  return t ? {
    r: Math.round((t.r ?? 0) * 255),
    g: Math.round((t.g ?? 0) * 255),
    b: Math.round((t.b ?? 0) * 255)
  } : { r: 0, g: 0, b: 0 };
}
function i0(e) {
  const { r: n, g: t, b: r } = We(e);
  return `linear-gradient(to right, rgba(${n}, ${t}, ${r}, 0), rgb(${n}, ${t}, ${r}))`;
}
function Ot(e) {
  const n = wn({ mode: "oklch", ...e, alpha: 1 });
  return (n == null ? void 0 : n.h) ?? e.h;
}
function a0(e, n) {
  const t = wn({ mode: "oklch", ...e, alpha: 1 }), r = kn(me({ mode: "hsv", h: n, s: (t == null ? void 0 : t.s) ?? 0, v: (t == null ? void 0 : t.v) ?? 1, alpha: 1 }) ?? { mode: "hsv", h: n, s: (t == null ? void 0 : t.s) ?? 0, v: (t == null ? void 0 : t.v) ?? 1 });
  return (r == null ? void 0 : r.l) == null ? X({ ...e, h: n }) : X({
    l: r.l,
    c: r.c ?? 0,
    h: r.h ?? n,
    alpha: e.alpha
  });
}
function rr(e, n) {
  switch (n) {
    case "hex":
      return [{ key: "hex", label: "HEX CODE", value: Ce(e).replace("#", "").toUpperCase() }];
    case "rgb": {
      const t = me({ mode: "oklch", ...e });
      return [
        { key: "r", label: "R", value: String(Math.round((t.r ?? 0) * 255)), min: 0, max: 255 },
        { key: "g", label: "G", value: String(Math.round((t.g ?? 0) * 255)), min: 0, max: 255 },
        { key: "b", label: "B", value: String(Math.round((t.b ?? 0) * 255)), min: 0, max: 255 }
      ];
    }
    case "hsl": {
      const t = n0({ mode: "oklch", ...e });
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
function o0(e, n, t) {
  switch (e) {
    case "hex": {
      const r = (n.hex ?? "").trim().replace(/^#/, "");
      if (!/^[0-9a-fA-F]{3,8}$/.test(r)) return null;
      const i = ce(`#${r}`);
      return i ? jt(i, t.alpha) : null;
    }
    case "rgb": {
      const r = Number(n.r), i = Number(n.g), a = Number(n.b);
      if ([r, i, a].some((l) => Number.isNaN(l))) return null;
      const o = ce(`rgb(${Dt(r)}, ${Dt(i)}, ${Dt(a)})`);
      return o ? jt(o, t.alpha) : null;
    }
    case "hsl": {
      const r = Zt(n.h), i = Zt(n.s), a = Zt(n.l);
      if ([r, i, a].some((l) => Number.isNaN(l))) return null;
      const o = ce(`hsl(${r}, ${ir(i)}%, ${ir(a)}%)`);
      return o ? jt(o, t.alpha) : null;
    }
    case "oklch": {
      const r = Number(n.l), i = Number(n.c), a = Number(n.h);
      return [r, i, a].some((o) => Number.isNaN(o)) ? null : X({ l: r / 100, c: i, h: a, alpha: t.alpha });
    }
  }
}
function jt(e, n) {
  return { ...e, alpha: Se(n) };
}
function Se(e) {
  return Math.min(1, Math.max(0, e));
}
function Dt(e) {
  return Math.min(255, Math.max(0, Math.round(e)));
}
function ir(e) {
  return Math.min(100, Math.max(0, e));
}
function Zt(e) {
  return Number(e.replace(/%/g, "").trim());
}
function s0(e) {
  const n = e % 360;
  return n < 0 ? n + 360 : n;
}
function l0(e) {
  const n = wn({ mode: "oklch", ...e, alpha: 1 });
  return { x: (n == null ? void 0 : n.s) ?? 0, y: 1 - ((n == null ? void 0 : n.v) ?? 0) };
}
function d0(e, n, t, r) {
  const i = Se(e), a = Se(n), o = kn(
    me({ mode: "hsv", h: t, s: i, v: 1 - a, alpha: 1 }) ?? {
      mode: "hsv",
      h: t,
      s: i,
      v: 1 - a
    }
  );
  return (o == null ? void 0 : o.l) != null ? X({
    l: o.l,
    c: o.c ?? 0,
    h: o.h ?? t,
    alpha: r
  }) : X({ l: 0.5, c: 0, h: t, alpha: r });
}
const c0 = {
  l: 0.62,
  c: 0.24,
  h: 303,
  alpha: 0.8
}, jr = "pretty-color-picker-history", Dr = 16;
function Zr(e, n) {
  return Ce(e) === Ce(n) && e.alpha === n.alpha;
}
function p0() {
  try {
    const e = localStorage.getItem(jr);
    if (!e) return [];
    const n = JSON.parse(e);
    return Array.isArray(n) ? n.slice(0, Dr) : [];
  } catch {
    return [];
  }
}
function f0(e, n) {
  const t = n.filter((i) => !Zr(i, e)), r = [e, ...t].slice(0, Dr);
  try {
    localStorage.setItem(jr, JSON.stringify(r));
  } catch {
  }
  return r;
}
const u0 = "#ededed", h0 = "#171717", b0 = 0.52;
function g0(e, n, t) {
  const r = [e, n, t].map((i) => {
    const a = i / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2];
}
function m0(e, n, t) {
  return g0(e, n, t) > b0 ? h0 : u0;
}
function ar(e) {
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
function v0(e, n, t, r) {
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
function or(e, n) {
  const t = n.getBoundingClientRect(), r = sr((e.clientX - t.left) / t.width), i = sr((e.clientY - t.top) / t.height);
  return { x: r, y: i };
}
function Yt(e, n, t, r) {
  let i = !1;
  const a = (u) => {
    if (!i) return;
    const { x: h, y: g } = or(u, e);
    n(h, g);
  }, o = (u) => {
    if (i) {
      if (i = !1, (u == null ? void 0 : u.pointerId) != null)
        try {
          e.releasePointerCapture(u.pointerId);
        } catch {
        }
      window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", o), t == null || t();
    }
  }, l = (u) => {
    if (u.button !== 0) return;
    i = !0, e.setPointerCapture(u.pointerId), r == null || r();
    const { x: h, y: g } = or(u, e);
    n(h, g), window.addEventListener("pointermove", a), window.addEventListener("pointerup", o), window.addEventListener("pointercancel", o);
  };
  return e.addEventListener("pointerdown", l), () => {
    e.removeEventListener("pointerdown", l), window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", o);
  };
}
function sr(e) {
  return Math.min(1, Math.max(0, e));
}
const x0 = ["hex", "rgb", "hsl", "oklch"], y0 = {
  hex: "HEX",
  rgb: "RGB",
  hsl: "HSL",
  oklch: "OKLCH"
};
var $, x, q, B, pe, R, Le, Pe, J, O, A, j, Ae, E, fe, te, Ee, D, ne, V, s, Yr, Gr, Br, se, Qt, Jr, Oe, en, Vr, Ur, tn, Wr, je, _e, Kr, Qr, ei, ti, nn, rn, ee, Te, an, on, De, sn, ln, ni, ri, dn, ii, cn, pn, fn, un, le, ai;
class M0 extends HTMLElement {
  constructor() {
    super();
    w(this, s);
    w(this, $);
    w(this, x, { ...c0 });
    w(this, q, "hsl");
    w(this, B, p0());
    w(this, pe, null);
    w(this, R, []);
    w(this, Le);
    w(this, Pe);
    w(this, J);
    w(this, O);
    w(this, A);
    w(this, j);
    w(this, Ae);
    w(this, E);
    w(this, fe);
    w(this, te);
    w(this, Ee);
    w(this, D);
    w(this, ne);
    w(this, V, null);
    M(this, $, this.attachShadow({ mode: "open" }));
  }
  static get observedAttributes() {
    return ["value", "theme", "header-action"];
  }
  connectedCallback() {
    p(this, s, Gr).call(this), p(this, s, Br).call(this), p(this, s, Yr).call(this), p(this, s, Te).call(this);
  }
  disconnectedCallback() {
    d(this, R).forEach((t) => t()), M(this, R, []);
  }
  attributeChangedCallback(t, r, i) {
    if (this.isConnected) {
      if (t === "value" && i != null) {
        const a = ce(i);
        a && (M(this, x, a), p(this, s, Te).call(this, !1));
        return;
      }
      t === "theme" && p(this, s, Oe).call(this);
    }
  }
  get value() {
    return nr(d(this, x));
  }
  set value(t) {
    const r = ce(t);
    r && (M(this, x, r), p(this, s, Te).call(this));
  }
  get color() {
    return { ...d(this, x) };
  }
  set color(t) {
    M(this, x, X(t)), p(this, s, Te).call(this);
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
}
$ = new WeakMap(), x = new WeakMap(), q = new WeakMap(), B = new WeakMap(), pe = new WeakMap(), R = new WeakMap(), Le = new WeakMap(), Pe = new WeakMap(), J = new WeakMap(), O = new WeakMap(), A = new WeakMap(), j = new WeakMap(), Ae = new WeakMap(), E = new WeakMap(), fe = new WeakMap(), te = new WeakMap(), Ee = new WeakMap(), D = new WeakMap(), ne = new WeakMap(), V = new WeakMap(), s = new WeakSet(), Yr = function() {
  const t = this.getAttribute("value");
  if (t) {
    const r = ce(t);
    r && M(this, x, r);
  }
}, Gr = function() {
  const t = this.headerAction === "theme" ? `<button type="button" class="pcp-header-btn pcp-theme-toggle" aria-label="Switch to light mode">${Sn}</button>` : `<button type="button" class="pcp-header-btn pcp-close" aria-label="Close">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M4.25 4.25L11.75 11.75M11.75 4.25L4.25 11.75"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>`;
  d(this, $).innerHTML = `
      <style>${ci}</style>
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
          ${x0.map((r) => `<button type="button" class="pcp-tab" role="tab" data-format="${r}">${y0[r]}</button>`).join("")}
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
    `, M(this, Le, d(this, $).querySelector(".pcp-plane")), M(this, Pe, d(this, $).querySelector(".pcp-plane-wrap")), M(this, J, d(this, $).querySelector(".pcp-cursor")), M(this, O, d(this, $).querySelector(".pcp-hue-row")), M(this, A, d(this, O).querySelector(".pcp-slider-handle")), M(this, j, d(this, $).querySelector(".pcp-alpha-row")), M(this, Ae, d(this, $).querySelector(".pcp-slider-fill-alpha")), M(this, E, d(this, j).querySelector(".pcp-slider-handle")), M(this, fe, d(this, $).querySelector(".pcp-tabs-pill")), M(this, te, d(this, $).querySelector(".pcp-fields")), M(this, Ee, d(this, $).querySelector(".pcp-swatch-fill")), M(this, D, d(this, $).querySelector(".pcp-alpha-input")), M(this, ne, d(this, $).querySelector(".pcp-history")), M(this, V, d(this, $).querySelector(".pcp-theme-toggle")), p(this, s, Oe).call(this);
}, Br = function() {
  var r;
  const t = d(this, $).querySelector(".pcp-close");
  t == null || t.addEventListener("click", () => {
    this.dispatchEvent(new CustomEvent("close", { bubbles: !0, composed: !0 }));
  }), (r = d(this, V)) == null || r.addEventListener("click", () => p(this, s, Jr).call(this)), d(this, R).push(
    Yt(
      d(this, Pe),
      (i, a) => p(this, s, Kr).call(this, i, a),
      () => p(this, s, le).call(this),
      () => p(this, s, se).call(this)
    )
  ), d(this, R).push(
    Yt(
      d(this, O),
      (i) => p(this, s, Qr).call(this, i),
      () => p(this, s, le).call(this),
      () => p(this, s, se).call(this)
    )
  ), d(this, R).push(
    Yt(
      d(this, j),
      (i) => p(this, s, ei).call(this, i),
      () => p(this, s, le).call(this),
      () => p(this, s, se).call(this)
    )
  ), d(this, R).push(p(this, s, en).call(this, d(this, O))), d(this, R).push(p(this, s, en).call(this, d(this, j))), d(this, $).querySelectorAll(".pcp-tab").forEach((i) => {
    i.addEventListener("click", () => {
      const a = i.dataset.format;
      a && a !== d(this, q) && (M(this, q, a), p(this, s, De).call(this), p(this, s, fn).call(this), p(this, s, pn).call(this), p(this, s, sn).call(this));
    });
  }), d(this, D).addEventListener("focus", () => p(this, s, se).call(this)), d(this, D).addEventListener("change", () => p(this, s, nn).call(this)), d(this, D).addEventListener("keydown", (i) => {
    i.key === "Enter" && p(this, s, nn).call(this);
  });
}, se = function() {
  M(this, pe, { ...d(this, x) });
}, Qt = function() {
  return this.theme === "light" ? "light" : this.theme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}, Jr = function() {
  const t = p(this, s, Qt).call(this) === "light" ? "dark" : "light";
  this.theme = t, p(this, s, Oe).call(this);
  const r = { theme: t };
  this.dispatchEvent(
    new CustomEvent("themechange", {
      detail: r,
      bubbles: !0,
      composed: !0
    })
  );
}, Oe = function() {
  if (!d(this, V)) return;
  const t = p(this, s, Qt).call(this) === "light";
  d(this, V).innerHTML = t ? di : Sn, d(this, V).setAttribute(
    "aria-label",
    t ? "Switch to dark mode" : "Switch to light mode"
  );
}, en = function(t) {
  const r = () => {
    t.dataset.active = "true";
  }, i = () => {
    const a = t.querySelector(".pcp-slider-handle");
    a != null && a.hasAttribute("data-dragging") || delete t.dataset.active;
  };
  return t.addEventListener("pointerenter", r), t.addEventListener("pointerleave", i), () => {
    t.removeEventListener("pointerenter", r), t.removeEventListener("pointerleave", i);
  };
}, Vr = function(t, r) {
  const i = Math.max(0, Math.min(1, r)) * 100;
  t.style.left = `max(1px, calc(${i}% - 1.5px))`;
}, Ur = function() {
  const t = getComputedStyle(this), r = ar(t.getPropertyValue("--pcp-checker-base").trim()) ?? { r: 255, g: 255, b: 255 }, i = ar(t.getPropertyValue("--pcp-checker-tone").trim()) ?? { r: 204, g: 204, b: 204 };
  return { base: r, tone: i };
}, tn = function(t, r) {
  const i = t.style.left.match(/calc\(([\d.]+)%/);
  return i ? parseFloat(i[1]) / 100 : r;
}, Wr = function(t, r) {
  if (r === "hue") return r0(t);
  const { base: i, tone: a } = p(this, s, Ur).call(this);
  return v0(We(d(this, x)), t, i, a);
}, je = function(t, r, i) {
  const a = p(this, s, Wr).call(this, r, i);
  t.style.background = m0(a.r, a.g, a.b);
}, _e = function(t, r, i) {
  p(this, s, Vr).call(this, t, r), p(this, s, je).call(this, t, r, i);
}, Kr = function(t, r) {
  d(this, J).dataset.dragging = "true";
  const i = p(this, s, on).call(this);
  p(this, s, ee).call(this, d0(t, r, i, d(this, x).alpha), !0), p(this, s, ln).call(this, t, r);
}, Qr = function(t) {
  d(this, O).dataset.active = "true", d(this, A).dataset.dragging = "true", p(this, s, _e).call(this, d(this, A), t, "hue");
  const r = t * 360;
  p(this, s, ee).call(this, a0(d(this, x), r), !0);
}, ei = function(t) {
  d(this, j).dataset.active = "true", d(this, E).dataset.dragging = "true", p(this, s, ee).call(this, X({ ...d(this, x), alpha: t }), !0), p(this, s, _e).call(this, d(this, E), t, "alpha");
}, ti = function() {
  const r = d(this, A).style.left.match(/calc\(([\d.]+)%/);
  return r ? parseFloat(r[1]) / 100 * 360 : Ot(d(this, x));
}, nn = function() {
  const t = d(this, D).value.replace(/%/g, "").trim(), r = Number(t);
  if (Number.isNaN(r)) {
    p(this, s, cn).call(this);
    return;
  }
  p(this, s, ee).call(this, X({ ...d(this, x), alpha: r / 100 }), !0), p(this, s, le).call(this);
}, rn = function(t, r) {
  const i = {};
  rr(d(this, x), d(this, q)).forEach((o) => {
    i[o.key] = o.key === t ? r : o.value;
  });
  const a = o0(d(this, q), i, d(this, x));
  a && (p(this, s, ee).call(this, a, !0), p(this, s, le).call(this));
}, ee = function(t, r = !0, i) {
  M(this, x, X(t)), p(this, s, an).call(this, r, i);
}, Te = function(t = !0) {
  p(this, s, De).call(this), p(this, s, fn).call(this), p(this, s, an).call(this, t), p(this, s, un).call(this);
}, an = function(t, r) {
  (r == null ? void 0 : r.refreshFields) !== !1 && p(this, s, pn).call(this), p(this, s, ii).call(this), p(this, s, ni).call(this), p(this, s, sn).call(this), p(this, s, De).call(this), t && p(this, s, ai).call(this);
}, on = function() {
  return d(this, A).hasAttribute("data-dragging") ? p(this, s, ti).call(this) : Ot(d(this, x));
}, De = function() {
  t0(d(this, Le), p(this, s, on).call(this));
}, sn = function() {
  const { x: t, y: r } = l0(d(this, x));
  p(this, s, ln).call(this, t, r);
}, ln = function(t, r) {
  d(this, J).style.left = `${t * 100}%`, d(this, J).style.top = `${r * 100}%`;
}, ni = function() {
  const t = Ot(d(this, x)), r = d(this, A).hasAttribute("data-dragging") ? p(this, s, tn).call(this, d(this, A), t / 360) : t / 360;
  d(this, A).hasAttribute("data-dragging") ? p(this, s, je).call(this, d(this, A), r, "hue") : p(this, s, _e).call(this, d(this, A), r, "hue");
  const i = d(this, E).hasAttribute("data-dragging") ? p(this, s, tn).call(this, d(this, E), d(this, x).alpha) : d(this, x).alpha;
  d(this, E).hasAttribute("data-dragging") ? p(this, s, je).call(this, d(this, E), i, "alpha") : p(this, s, _e).call(this, d(this, E), i, "alpha"), p(this, s, ri).call(this);
}, ri = function() {
  d(this, Ae).style.setProperty("--pcp-alpha-gradient", i0(d(this, x)));
}, dn = function(t, r) {
  const { r: i, g: a, b: o } = We(r);
  t.style.setProperty("--swatch-solid", `rgb(${i}, ${a}, ${o})`), t.style.setProperty("--swatch-alpha", `rgba(${i}, ${a}, ${o}, ${r.alpha})`);
}, ii = function() {
  p(this, s, dn).call(this, d(this, Ee), d(this, x));
}, cn = function() {
  d(this, D).value = `${Math.round(d(this, x).alpha * 100)}%`;
}, pn = function() {
  const t = rr(d(this, x), d(this, q));
  d(this, te).dataset.format = d(this, q), d(this, te).innerHTML = t.map(
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
  ).join(""), d(this, te).querySelectorAll(".pcp-field-input").forEach((r) => {
    const i = r, a = i.dataset.key;
    i.addEventListener("focus", () => p(this, s, se).call(this)), i.addEventListener("change", () => p(this, s, rn).call(this, a, i.value)), i.addEventListener("keydown", (o) => {
      o.key === "Enter" && p(this, s, rn).call(this, a, i.value);
    });
  }), p(this, s, cn).call(this);
}, fn = function() {
  const t = d(this, $).querySelectorAll(".pcp-tab");
  let r = null;
  if (t.forEach((i) => {
    const a = i.dataset.format === d(this, q);
    i.setAttribute("data-active", String(a)), i.setAttribute("aria-selected", String(a)), a && (r = i);
  }), r) {
    const i = r, a = i.offsetLeft, o = i.offsetWidth;
    d(this, fe).style.left = `${a}px`, d(this, fe).style.width = `${o}px`;
  }
}, un = function() {
  d(this, ne).innerHTML = d(this, B).map((t, r) => `
          <button type="button" class="pcp-history-swatch pcp-clip" data-index="${r}" aria-label="Color ${Ce(t)}">
            <span class="pcp-swatch-fill" data-history-fill="${r}"></span>
          </button>
        `).join(""), d(this, ne).querySelectorAll("[data-history-fill]").forEach((t) => {
    const r = Number(t.dataset.historyFill), i = d(this, B)[r];
    i && p(this, s, dn).call(this, t, i);
  }), d(this, ne).querySelectorAll(".pcp-history-swatch").forEach((t) => {
    t.addEventListener("click", () => {
      const r = Number(t.dataset.index), i = d(this, B)[r];
      i && p(this, s, ee).call(this, { ...i }, !0, { refreshFields: !0 });
    });
  });
}, le = function() {
  delete d(this, J).dataset.dragging, delete d(this, A).dataset.dragging, delete d(this, E).dataset.dragging, delete d(this, O).dataset.active, delete d(this, j).dataset.active;
  const t = d(this, pe);
  M(this, pe, null), t && !Zr(t, d(this, x)) && M(this, B, f0(t, d(this, B))), p(this, s, un).call(this);
}, ai = function() {
  const t = {
    color: { ...d(this, x) },
    css: nr(d(this, x)),
    hex: Ce(d(this, x))
  };
  this.dispatchEvent(
    new CustomEvent("change", {
      detail: t,
      bubbles: !0,
      composed: !0
    })
  );
};
customElements.get("pretty-color-picker") || customElements.define("pretty-color-picker", M0);
export {
  c0 as DEFAULT_COLOR,
  M0 as PrettyColorPicker,
  rr as formatFieldsFor,
  X as normalizeOklch,
  ce as oklchFromCss,
  nr as oklchToCss,
  Ce as oklchToHex,
  w0 as oklchToRgbString,
  o0 as parseFormatFields
};
