var Nn = (e) => {
  throw TypeError(e);
};
var ht = (e, t, n) => t.has(e) || Nn("Cannot " + n);
var l = (e, t, n) => (ht(e, t, "read from private field"), n ? n.call(e) : t.get(e)), w = (e, t, n) => t.has(e) ? Nn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), M = (e, t, n, i) => (ht(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n), u = (e, t, n) => (ht(e, t, "access private method"), n);
const ir = ':host{--pcp-width: 284px;--pcp-radius-sm: 5px;--pcp-radius: 7px;--pcp-radius-lg: 10px;--pcp-control-height: 24px;--pcp-tab-row-height: 36px;--pcp-field-label-size: 10px;--pcp-field-label-line: 12px;--pcp-field-label-gap: 3px;--pcp-field-value-size: 12px;--pcp-field-value-line: 16px;--pcp-field-input-height: 22px;--pcp-input-panel-height: calc( var(--pcp-field-label-line) + var(--pcp-field-label-gap) + var(--pcp-field-input-height) );--pcp-input-row-padding-y: 8px;--pcp-input-row-padding-x: 8px;--pcp-alpha-col-width: 4ch;--pcp-value-col-width: minmax(0, 1fr);--pcp-swatch-code-gap: 10px;--pcp-history-swatch-size: 20px;--pcp-history-gap: 6px;--pcp-field-input-radius: var(--pcp-radius-sm);--pcp-icon-button-size: 28px;--pcp-icon-button-radius: var(--pcp-radius-sm);--pcp-title-size: 13px;--pcp-title-line: 18px;--pcp-title-weight: 600;--pcp-title-tracking: -.24px;--pcp-ease-out: cubic-bezier(.175, .885, .32, 1.1);--pcp-font: "Geist", system-ui, -apple-system, "SF Pro Display", sans-serif;--pcp-mono: "Geist Mono", ui-monospace, monospace;display:inline-block;font-family:var(--pcp-font);-webkit-font-smoothing:antialiased;color:var(--pcp-text-primary)}:host,:host([theme="dark"]){color-scheme:dark;--pcp-bg: #1a1a1a;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: #1f1f1f;--pcp-surface-hover: #292929;--pcp-surface-active: #292929;--pcp-tab-pill: #292929;--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-primary: #ededed;--pcp-text-label: #a0a0a0;--pcp-text-tertiary: #8f8f8f;--pcp-text-focus: #ffffff;--pcp-checker-base: #999999;--pcp-checker-tone: #888888;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: none}:host([theme="light"]){color-scheme:light;--pcp-bg: #ffffff;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: #f2f2f2;--pcp-surface-hover: #ebebeb;--pcp-surface-active: #e6e6e6;--pcp-tab-pill: #ebebeb;--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-primary: #171717;--pcp-text-label: #4d4d4d;--pcp-text-tertiary: #8f8f8f;--pcp-text-focus: #171717;--pcp-checker-base: #ffffff;--pcp-checker-tone: #e6e6e6;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 2px 2px rgba(0, 0, 0, .04)}@media(prefers-color-scheme:dark){:host([theme="system"]){color-scheme:dark;--pcp-bg: #1a1a1a;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: #1f1f1f;--pcp-surface-hover: #292929;--pcp-surface-active: #292929;--pcp-tab-pill: #292929;--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-primary: #ededed;--pcp-text-label: #a0a0a0;--pcp-text-tertiary: #8f8f8f;--pcp-text-focus: #ffffff;--pcp-checker-base: #999999;--pcp-checker-tone: #888888;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: none}}@media(prefers-color-scheme:light){:host([theme="system"]){color-scheme:light;--pcp-bg: #ffffff;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: #f2f2f2;--pcp-surface-hover: #ebebeb;--pcp-surface-active: #e6e6e6;--pcp-tab-pill: #ebebeb;--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-primary: #171717;--pcp-text-label: #4d4d4d;--pcp-text-tertiary: #8f8f8f;--pcp-text-focus: #171717;--pcp-checker-base: #ffffff;--pcp-checker-tone: #e6e6e6;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 2px 2px rgba(0, 0, 0, .04)}}*,*:before,*:after{box-sizing:border-box}.pcp-clip{overflow:hidden;isolation:isolate;transform:translateZ(0)}.pcp-swatch-fill{display:block;width:100%;height:100%;border-radius:inherit;background-color:var(--pcp-checker-base);background-image:linear-gradient(to right,var(--swatch-solid, #000) 50%,transparent 50%),linear-gradient(to right,transparent 50%,var(--swatch-alpha, rgba(0, 0, 0, .5)) 50%),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,100% 100%,4px 4px,4px 4px,4px 4px,4px 4px;background-position:0 0,0 0,0 0,0 2px,2px -2px,-2px 0}.pcp{width:var(--pcp-width);background:var(--pcp-bg);border:1px solid var(--pcp-border);border-radius:var(--pcp-radius-lg);box-shadow:var(--pcp-elevation);padding:10px;-webkit-user-select:none;user-select:none}.pcp-header{display:flex;align-items:center;justify-content:space-between;gap:6px;padding-bottom:5px;margin-bottom:10px;min-height:var(--pcp-icon-button-size);border-bottom:1px solid var(--pcp-divider)}.pcp-title{flex:1;min-width:0;font-family:var(--pcp-font);font-size:var(--pcp-title-size);font-weight:var(--pcp-title-weight);line-height:var(--pcp-title-line);letter-spacing:var(--pcp-title-tracking);color:var(--pcp-text-primary);margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pcp-header-btn{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--pcp-icon-button-size);height:var(--pcp-icon-button-size);padding:0;border:none;border-radius:var(--pcp-icon-button-radius);background:transparent;color:var(--pcp-text-label);cursor:pointer;transition:background .15s var(--pcp-ease-out),color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-header-btn svg{width:14px;height:14px;flex-shrink:0}@media(hover:hover)and (pointer:fine){.pcp-header-btn:hover{background:var(--pcp-surface-hover);color:var(--pcp-text-primary)}}.pcp-header-btn:active{background:var(--pcp-surface-active);transform:scale(.97)}.pcp-header-btn:focus{outline:none}.pcp-header-btn:focus-visible{box-shadow:0 0 0 2px var(--pcp-bg),0 0 0 4px var(--pcp-focus-ring)}.pcp-plane-wrap{position:relative;width:100%;aspect-ratio:4 / 3;border-radius:var(--pcp-radius-sm);margin-bottom:6px;cursor:crosshair;touch-action:none}.pcp-plane{display:block;width:100%;height:100%}.pcp-cursor{position:absolute;width:14px;height:14px;margin:-7px 0 0 -7px;border:2px solid var(--pcp-cursor-ring);border-radius:50%;box-shadow:0 0 0 1px var(--pcp-cursor-outline),inset 0 0 0 1px #0000001f;pointer-events:none}.pcp-cursor[data-dragging=true]{transition:none}.pcp-slider-wrapper{position:relative;height:var(--pcp-control-height);margin-bottom:6px}.pcp-slider{position:absolute;top:0;right:0;bottom:0;left:0;cursor:pointer;-webkit-user-select:none;user-select:none;border-radius:var(--pcp-radius-sm);background:transparent;touch-action:none}.pcp-slider-fill{position:absolute;top:-1px;right:-1px;bottom:-1px;left:-1px;border-radius:var(--pcp-radius-sm);pointer-events:none}.pcp-slider-fill-hue{background:linear-gradient(to right,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.pcp-slider-fill-alpha{--pcp-alpha-gradient: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));background-color:var(--pcp-checker-base);background-image:var(--pcp-alpha-gradient),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,5px 5px,5px 5px,5px 5px,5px 5px;background-position:0 0,0 0,0 2.5px,2.5px -2.5px,-2.5px 0}.pcp-slider-handle{position:absolute;top:50%;left:0;z-index:1;width:3px;height:16px;border:none;outline:none;border-radius:999px;background:var(--pcp-text-primary);pointer-events:none;transform:translateY(-50%) scaleX(.25);transform-origin:center center;opacity:0;box-shadow:none;filter:none;transition:transform .25s cubic-bezier(.34,1.15,.64,1),opacity .15s ease}.pcp-slider:hover .pcp-slider-handle,.pcp-slider[data-active=true] .pcp-slider-handle{transform:translateY(-50%) scaleX(1);opacity:.5}.pcp-slider-handle[data-dragging=true]{transform:translateY(-50%) scaleX(1);opacity:.9;transition:opacity .15s ease}@media(hover:hover)and (pointer:fine){.pcp-slider:hover .pcp-slider-handle:not([data-dragging=true]){transform:translateY(-50%) scaleX(1);opacity:.5}}.pcp-tabs{position:relative;display:flex;align-items:center;height:var(--pcp-tab-row-height);box-sizing:border-box;padding:3px;margin-bottom:8px;background:transparent;border-radius:var(--pcp-radius)}.pcp-tabs-pill{position:absolute;top:3px;bottom:3px;background:var(--pcp-tab-pill);border-radius:6px;z-index:0;pointer-events:none;transition:left .2s var(--pcp-ease-out),width .2s var(--pcp-ease-out)}.pcp-tab{position:relative;z-index:1;flex:1;display:flex;align-items:center;justify-content:center;height:100%;padding:0 4px;font-family:inherit;font-size:12px;font-weight:500;line-height:1;text-align:center;background:transparent;border:none;color:var(--pcp-text-label);cursor:pointer;transition:color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-tab[data-active=true]{color:var(--pcp-text-primary)}.pcp-tab:active{transform:scale(.97)}.pcp-inputs{display:grid;width:100%;min-width:0;box-sizing:border-box;grid-template-columns:var(--pcp-input-panel-height) var(--pcp-swatch-code-gap) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-alpha-col-width);column-gap:3px;align-items:center;margin-bottom:10px;padding:var(--pcp-input-row-padding-y) var(--pcp-input-row-padding-x);background:var(--pcp-surface);border-radius:var(--pcp-radius-sm)}.pcp-swatch{grid-column:1;flex-shrink:0;width:var(--pcp-input-panel-height);height:var(--pcp-input-panel-height);border-radius:var(--pcp-radius-sm);position:relative}.pcp-fields{display:contents}.pcp-fields[data-format=hex] .pcp-field-hex{grid-column:3 / 6;justify-self:center;width:fit-content;align-items:center}.pcp-fields[data-format=hex] .pcp-field-label{text-align:center;white-space:nowrap}.pcp-fields[data-format=hex] .pcp-field-input{width:8.5ch;min-width:8.5ch;padding:0 6px}.pcp-fields[data-format=rgb] .pcp-field-r{grid-column:3}.pcp-fields[data-format=rgb] .pcp-field-g{grid-column:4}.pcp-fields[data-format=rgb] .pcp-field-b{grid-column:5}.pcp-fields[data-format=hsl] .pcp-field-h{grid-column:3}.pcp-fields[data-format=hsl] .pcp-field-s{grid-column:4}.pcp-fields[data-format=hsl] .pcp-field-l{grid-column:5}.pcp-fields[data-format=oklch] .pcp-field-l{grid-column:3}.pcp-fields[data-format=oklch] .pcp-field-c{grid-column:4}.pcp-fields[data-format=oklch] .pcp-field-h{grid-column:5}.pcp-alpha-field{grid-column:6;box-sizing:border-box;width:var(--pcp-alpha-col-width);min-width:var(--pcp-alpha-col-width);max-width:var(--pcp-alpha-col-width);align-items:center}.pcp-alpha-field .pcp-field-input{width:100%;min-width:0;padding:0;box-sizing:border-box}.pcp-field{min-width:0;display:flex;flex-direction:column;align-items:stretch;justify-content:center;gap:var(--pcp-field-label-gap)}.pcp-fields[data-format=oklch] .pcp-field-c .pcp-field-input{letter-spacing:-.02em;padding:0 1px}.pcp-field-label{display:block;font-size:var(--pcp-field-label-size);font-weight:500;line-height:var(--pcp-field-label-line);color:var(--pcp-text-tertiary);margin:0;text-align:center}.pcp-field-input{width:100%;min-width:0;min-height:var(--pcp-field-input-height);height:var(--pcp-field-input-height);padding:0 2px;font-family:var(--pcp-mono);font-size:var(--pcp-field-value-size);font-weight:500;line-height:var(--pcp-field-input-height);font-variant-numeric:tabular-nums;text-align:center;color:var(--pcp-text-label);background:transparent;border:none;border-radius:var(--pcp-field-input-radius);outline:none;box-shadow:none;transition:color .15s var(--pcp-ease-out),background .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-field-input:hover{background:var(--pcp-surface-hover)}}.pcp-field-input:focus{color:var(--pcp-text-focus);background:transparent;border-radius:var(--pcp-field-input-radius);box-shadow:none;outline:none}.pcp-field-input:active{background:var(--pcp-surface-active)}.pcp-history-label{font-size:10px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--pcp-text-tertiary);margin:0 0 6px}.pcp-history{display:grid;grid-template-columns:repeat(8,1fr);gap:var(--pcp-history-gap);justify-items:center}.pcp-history-swatch{-moz-appearance:none;appearance:none;-webkit-appearance:none;width:var(--pcp-history-swatch-size);height:var(--pcp-history-swatch-size);flex-shrink:0;padding:0;border:none;background:none;border-radius:4px;cursor:pointer;transition:opacity .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-history-swatch:hover{opacity:.85}}.pcp-history-swatch:active{opacity:.7}@media(prefers-reduced-motion:reduce){.pcp-header-btn,.pcp-tab,.pcp-tabs-pill,.pcp-cursor,.pcp-slider-handle,.pcp-history-swatch{transition:none}.pcp-tab:active,.pcp-header-btn:active{transform:none}}', ai = (e, t) => {
  if (typeof e == "number") {
    if (t === 3)
      return {
        mode: "rgb",
        r: (e >> 8 & 15 | e >> 4 & 240) / 255,
        g: (e >> 4 & 15 | e & 240) / 255,
        b: (e & 15 | e << 4 & 240) / 255
      };
    if (t === 4)
      return {
        mode: "rgb",
        r: (e >> 12 & 15 | e >> 8 & 240) / 255,
        g: (e >> 8 & 15 | e >> 4 & 240) / 255,
        b: (e >> 4 & 15 | e & 240) / 255,
        alpha: (e & 15 | e << 4 & 240) / 255
      };
    if (t === 6)
      return {
        mode: "rgb",
        r: (e >> 16 & 255) / 255,
        g: (e >> 8 & 255) / 255,
        b: (e & 255) / 255
      };
    if (t === 8)
      return {
        mode: "rgb",
        r: (e >> 24 & 255) / 255,
        g: (e >> 16 & 255) / 255,
        b: (e >> 8 & 255) / 255,
        alpha: (e & 255) / 255
      };
  }
}, rr = {
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
}, ar = (e) => ai(rr[e.toLowerCase()], 6), or = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, sr = (e) => {
  let t;
  return (t = e.match(or)) ? ai(parseInt(t[1], 16), t[1].length) : void 0;
}, W = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", Te = `${W}%`, cn = `(?:${W}%|${W})`, lr = `(?:${W}(deg|grad|rad|turn)|${W})`, ue = "\\s*,\\s*", dr = new RegExp(
  `^rgba?\\(\\s*${W}${ue}${W}${ue}${W}\\s*(?:,\\s*${cn}\\s*)?\\)$`
), pr = new RegExp(
  `^rgba?\\(\\s*${Te}${ue}${Te}${ue}${Te}\\s*(?:,\\s*${cn}\\s*)?\\)$`
), cr = (e) => {
  let t = { mode: "rgb" }, n;
  if (n = e.match(dr))
    n[1] !== void 0 && (t.r = n[1] / 255), n[2] !== void 0 && (t.g = n[2] / 255), n[3] !== void 0 && (t.b = n[3] / 255);
  else if (n = e.match(pr))
    n[1] !== void 0 && (t.r = n[1] / 100), n[2] !== void 0 && (t.g = n[2] / 100), n[3] !== void 0 && (t.b = n[3] / 100);
  else
    return;
  return n[4] !== void 0 ? t.alpha = Math.max(0, Math.min(1, n[4] / 100)) : n[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[5]))), t;
}, Ye = (e, t) => e === void 0 ? void 0 : typeof e != "object" ? di(e) : e.mode !== void 0 ? e : t ? { ...e, mode: t } : void 0, E = (e = "rgb") => (t) => (t = Ye(t, e)) !== void 0 ? (
  // if the color's mode corresponds to our target mode
  t.mode === e ? (
    // then just return the color
    t
  ) : (
    // otherwise check to see if we have a dedicated
    // converter for the target mode
    I[t.mode][e] ? (
      // and return its result...
      I[t.mode][e](t)
    ) : (
      // ...otherwise pass through RGB as an intermediary step.
      // if the target mode is RGB...
      e === "rgb" ? (
        // just return the RGB
        I[t.mode].rgb(t)
      ) : (
        // otherwise convert color.mode -> RGB -> target_mode
        I.rgb[e](I[t.mode].rgb(t))
      )
    )
  )
) : void 0, I = {}, oi = {}, De = [], si = {}, fr = (e) => e, y = (e) => (I[e.mode] = {
  ...I[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
  I[t] || (I[t] = {}), I[t][e.mode] = e.fromMode[t];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((t) => {
  if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t])
    throw new Error(`Missing interpolator for: ${t}`);
  typeof e.interpolate[t] == "function" && (e.interpolate[t] = {
    use: e.interpolate[t]
  }), e.interpolate[t].fixup || (e.interpolate[t].fixup = fr);
}), oi[e.mode] = e, (e.parse || []).forEach((t) => {
  ur(t, e.mode);
}), E(e.mode)), We = (e) => oi[e], ur = (e, t) => {
  if (typeof e == "string") {
    if (!t)
      throw new Error("'mode' required when 'parser' is a string");
    si[e] = t;
  } else typeof e == "function" && De.indexOf(e) < 0 && De.push(e);
}, Dt = /[^\x00-\x7F]|[a-zA-Z_]/, hr = /[^\x00-\x7F]|[-\w]/, p = {
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
function Xe(e) {
  let t = e[b], n = e[b + 1];
  return t === "-" || t === "+" ? /\d/.test(n) || n === "." && /\d/.test(e[b + 2]) : t === "." ? /\d/.test(n) : /\d/.test(t);
}
function Zt(e) {
  if (b >= e.length)
    return !1;
  let t = e[b];
  if (Dt.test(t))
    return !0;
  if (t === "-") {
    if (e.length - b < 2)
      return !1;
    let n = e[b + 1];
    return !!(n === "-" || Dt.test(n));
  }
  return !1;
}
const br = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function $e(e) {
  let t = "";
  if ((e[b] === "-" || e[b] === "+") && (t += e[b++]), t += Fe(e), e[b] === "." && /\d/.test(e[b + 1]) && (t += e[b++] + Fe(e)), (e[b] === "e" || e[b] === "E") && ((e[b + 1] === "-" || e[b + 1] === "+") && /\d/.test(e[b + 2]) ? t += e[b++] + e[b++] + Fe(e) : /\d/.test(e[b + 1]) && (t += e[b++] + Fe(e))), Zt(e)) {
    let n = Ze(e);
    return n === "deg" || n === "rad" || n === "turn" || n === "grad" ? { type: p.Hue, value: t * br[n] } : void 0;
  }
  return e[b] === "%" ? (b++, { type: p.Percentage, value: +t }) : { type: p.Number, value: +t };
}
function Fe(e) {
  let t = "";
  for (; /\d/.test(e[b]); )
    t += e[b++];
  return t;
}
function Ze(e) {
  let t = "";
  for (; b < e.length && hr.test(e[b]); )
    t += e[b++];
  return t;
}
function gr(e) {
  let t = Ze(e);
  return e[b] === "(" ? (b++, { type: p.Function, value: t }) : t === "none" ? { type: p.None, value: void 0 } : { type: p.Ident, value: t };
}
function mr(e = "") {
  let t = e.trim(), n = [], i;
  for (b = 0; b < t.length; ) {
    if (i = t[b++], i === `
` || i === "	" || i === " ") {
      for (; b < t.length && (t[b] === `
` || t[b] === "	" || t[b] === " "); )
        b++;
      continue;
    }
    if (i === ",")
      return;
    if (i === ")") {
      n.push({ type: p.ParenClose });
      continue;
    }
    if (i === "+") {
      if (b--, Xe(t)) {
        n.push($e(t));
        continue;
      }
      return;
    }
    if (i === "-") {
      if (b--, Xe(t)) {
        n.push($e(t));
        continue;
      }
      if (Zt(t)) {
        n.push({ type: p.Ident, value: Ze(t) });
        continue;
      }
      return;
    }
    if (i === ".") {
      if (b--, Xe(t)) {
        n.push($e(t));
        continue;
      }
      return;
    }
    if (i === "/") {
      for (; b < t.length && (t[b] === `
` || t[b] === "	" || t[b] === " "); )
        b++;
      let r;
      if (Xe(t) && (r = $e(t), r.type !== p.Hue)) {
        n.push({ type: p.Alpha, value: r });
        continue;
      }
      if (Zt(t) && Ze(t) === "none") {
        n.push({
          type: p.Alpha,
          value: { type: p.None, value: void 0 }
        });
        continue;
      }
      return;
    }
    if (/\d/.test(i)) {
      b--, n.push($e(t));
      continue;
    }
    if (Dt.test(i)) {
      b--, n.push(gr(t));
      continue;
    }
    return;
  }
  return n;
}
function xr(e) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== p.Function || t.value !== "color" || (t = e[e._i++], t.type !== p.Ident))
    return;
  const n = si[t.value];
  if (!n)
    return;
  const i = { mode: n }, r = li(e, !1);
  if (!r)
    return;
  const a = We(n).channels;
  for (let o = 0, s, f; o < a.length; o++)
    s = r[o], f = a[o], s.type !== p.None && (i[f] = s.type === p.Number ? s.value : s.value / 100, f === "alpha" && (i[f] = Math.max(0, Math.min(1, i[f]))));
  return i;
}
function li(e, t) {
  const n = [];
  let i;
  for (; e._i < e.length; ) {
    if (i = e[e._i++], i.type === p.None || i.type === p.Number || i.type === p.Alpha || i.type === p.Percentage || t && i.type === p.Hue) {
      n.push(i);
      continue;
    }
    if (i.type === p.ParenClose) {
      if (e._i < e.length)
        return;
      continue;
    }
    return;
  }
  if (!(n.length < 3 || n.length > 4)) {
    if (n.length === 4) {
      if (n[3].type !== p.Alpha)
        return;
      n[3] = n[3].value;
    }
    return n.length === 3 && n.push({ type: p.None, value: void 0 }), n.every((r) => r.type !== p.Alpha) ? n : void 0;
  }
}
function vr(e, t) {
  e._i = 0;
  let n = e[e._i++];
  if (!n || n.type !== p.Function)
    return;
  let i = li(e, t);
  if (i)
    return i.unshift(n.value), i;
}
const di = (e) => {
  if (typeof e != "string")
    return;
  const t = mr(e), n = t ? vr(t, !0) : void 0;
  let i, r = 0, a = De.length;
  for (; r < a; )
    if ((i = De[r++](e, n)) !== void 0)
      return i;
  return t ? xr(t) : void 0;
};
function yr(e, t) {
  if (!t || t[0] !== "rgb" && t[0] !== "rgba")
    return;
  const n = { mode: "rgb" }, [, i, r, a, o] = t;
  if (!(i.type === p.Hue || r.type === p.Hue || a.type === p.Hue))
    return i.type !== p.None && (n.r = i.type === p.Number ? i.value / 255 : i.value / 100), r.type !== p.None && (n.g = r.type === p.Number ? r.value / 255 : r.value / 100), a.type !== p.None && (n.b = a.type === p.Number ? a.value / 255 : a.value / 100), o.type !== p.None && (n.alpha = Math.min(
      1,
      Math.max(
        0,
        o.type === p.Number ? o.value : o.value / 100
      )
    )), n;
}
const Mr = (e) => e === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0, kr = (e, t, n) => e + n * (t - e), wr = (e) => {
  let t = [];
  for (let n = 0; n < e.length - 1; n++) {
    let i = e[n], r = e[n + 1];
    i === void 0 && r === void 0 ? t.push(void 0) : i !== void 0 && r !== void 0 ? t.push([i, r]) : t.push(i !== void 0 ? [i, i] : [r, r]);
  }
  return t;
}, $r = (e) => (t) => {
  let n = wr(t);
  return (i) => {
    let r = i * n.length, a = i >= 1 ? n.length - 1 : Math.max(Math.floor(r), 0), o = n[a];
    return o === void 0 ? void 0 : e(o[0], o[1], r - a);
  };
}, c = $r(kr), T = (e) => {
  let t = !1, n = e.map((i) => i !== void 0 ? (t = !0, i) : 1);
  return t ? n : e;
}, he = {
  mode: "rgb",
  channels: ["r", "g", "b", "alpha"],
  parse: [
    yr,
    sr,
    cr,
    ar,
    Mr,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: c,
    g: c,
    b: c,
    alpha: { use: c, fixup: T }
  },
  gamut: !0,
  white: { r: 1, g: 1, b: 1 },
  black: { r: 0, g: 0, b: 0 }
}, bt = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), Cn = (e) => {
  let t = bt(e.r), n = bt(e.g), i = bt(e.b), r = {
    mode: "xyz65",
    x: 0.5766690429101305 * t + 0.1855582379065463 * n + 0.1882286462349947 * i,
    y: 0.297344975250536 * t + 0.6273635662554661 * n + 0.0752914584939979 * i,
    z: 0.0270313613864123 * t + 0.0706888525358272 * n + 0.9913375368376386 * i
  };
  return e.alpha !== void 0 && (r.alpha = e.alpha), r;
}, gt = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), Sn = ({ x: e, y: t, z: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = {
    mode: "a98",
    r: gt(
      e * 2.0415879038107465 - t * 0.5650069742788597 - 0.3447313507783297 * n
    ),
    g: gt(
      e * -0.9692436362808798 + t * 1.8759675015077206 + 0.0415550574071756 * n
    ),
    b: gt(
      e * 0.0134442806320312 - t * 0.1183623922310184 + 1.0151749943912058 * n
    )
  };
  return i !== void 0 && (r.alpha = i), r;
}, mt = (e = 0) => {
  const t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((t + 0.055) / 1.055, 2.4);
}, be = ({ r: e, g: t, b: n, alpha: i }) => {
  let r = {
    mode: "lrgb",
    r: mt(e),
    g: mt(t),
    b: mt(n)
  };
  return i !== void 0 && (r.alpha = i), r;
}, re = (e) => {
  let { r: t, g: n, b: i, alpha: r } = be(e), a = {
    mode: "xyz65",
    x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * i,
    y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * i,
    z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, xt = (e = 0) => {
  const t = Math.abs(e);
  return t > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(t, 1 / 2.4) - 0.055) : e * 12.92;
}, ge = ({ r: e, g: t, b: n, alpha: i }, r = "rgb") => {
  let a = {
    mode: r,
    r: xt(e),
    g: xt(t),
    b: xt(n)
  };
  return i !== void 0 && (a.alpha = i), a;
}, ae = ({ x: e, y: t, z: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = ge({
    r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
    g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
    b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n
  });
  return i !== void 0 && (r.alpha = i), r;
}, zr = {
  ...he,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => Sn(re(e)),
    xyz65: Sn
  },
  toMode: {
    rgb: (e) => ae(Cn(e)),
    xyz65: Cn
  }
}, L = (e) => (e = e % 360) < 0 ? e + 360 : e, _r = (e, t) => e.map((n, i, r) => {
  if (n === void 0)
    return n;
  let a = L(n);
  return i === 0 || e[i - 1] === void 0 ? a : t(a - L(r[i - 1]));
}).reduce((n, i) => !n.length || i === void 0 || n[n.length - 1] === void 0 ? (n.push(i), n) : (n.push(i + n[n.length - 1]), n), []), D = (e) => _r(e, (t) => Math.abs(t) <= 180 ? t : t - 360 * Math.sign(t)), C = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0], Tr = Math.PI / 180, Nr = 180 / Math.PI;
let Ln = C[3] * C[4], Hn = C[1] * C[4], Pn = C[1] * C[2] - C[0] * C[3];
const Cr = ({ r: e, g: t, b: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = (Pn * n + e * Ln - t * Hn) / (Pn + Ln - Hn), a = n - r, o = (C[4] * (t - r) - C[2] * a) / C[3], s = {
    mode: "cubehelix",
    l: r,
    s: r === 0 || r === 1 ? void 0 : Math.sqrt(a * a + o * o) / (C[4] * r * (1 - r))
  };
  return s.s && (s.h = Math.atan2(o, a) * Nr - 120), i !== void 0 && (s.alpha = i), s;
}, Sr = ({ h: e, s: t, l: n, alpha: i }) => {
  let r = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * Tr, n === void 0 && (n = 0);
  let a = t === void 0 ? 0 : t * n * (1 - n), o = Math.cos(e), s = Math.sin(e);
  return r.r = n + a * (C[0] * o + C[1] * s), r.g = n + a * (C[2] * o + C[3] * s), r.b = n + a * (C[4] * o + C[5] * s), i !== void 0 && (r.alpha = i), r;
}, Ke = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.s || !t.s)
    return 0;
  let n = L(e.h), i = L(t.h), r = Math.sin((i - n + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * t.s) * r;
}, Lr = (e, t) => {
  if (e.h === void 0 || t.h === void 0)
    return 0;
  let n = L(e.h), i = L(t.h);
  return Math.abs(i - n) > 180 ? n - (i - 360 * Math.sign(i - n)) : i - n;
}, Ve = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.c || !t.c)
    return 0;
  let n = L(e.h), i = L(t.h), r = Math.sin((i - n + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * t.c) * r;
}, Z = (e) => {
  let t = e.reduce(
    (i, r) => {
      if (r !== void 0) {
        let a = r * Math.PI / 180;
        i.sin += Math.sin(a), i.cos += Math.cos(a);
      }
      return i;
    },
    { sin: 0, cos: 0 }
  ), n = Math.atan2(t.sin, t.cos) * 180 / Math.PI;
  return n < 0 ? 360 + n : n;
}, Hr = {
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
    rgb: Cr
  },
  toMode: {
    rgb: Sr
  },
  interpolate: {
    h: {
      use: c,
      fixup: D
    },
    s: c,
    l: c,
    alpha: {
      use: c,
      fixup: T
    }
  },
  difference: {
    h: Ke
  },
  average: {
    h: Z
  }
}, K = ({ l: e, a: t, b: n, alpha: i }, r = "lch") => {
  t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = Math.sqrt(t * t + n * n), o = { mode: r, l: e, c: a };
  return a && (o.h = L(Math.atan2(n, t) * 180 / Math.PI)), i !== void 0 && (o.alpha = i), o;
}, V = ({ l: e, c: t, h: n, alpha: i }, r = "lab") => {
  n === void 0 && (n = 0);
  let a = {
    mode: r,
    l: e,
    a: t ? t * Math.cos(n / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(n / 180 * Math.PI) : 0
  };
  return i !== void 0 && (a.alpha = i), a;
}, pi = Math.pow(29, 3) / Math.pow(3, 3), ci = Math.pow(6, 3) / Math.pow(29, 3), z = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: (1 - 0.3457 - 0.3585) / 0.3585
}, de = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: (1 - 0.3127 - 0.329) / 0.329
};
let vt = (e) => Math.pow(e, 3) > ci ? Math.pow(e, 3) : (116 * e - 16) / pi;
const fi = ({ l: e, a: t, b: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = (e + 16) / 116, a = t / 500 + r, o = r - n / 200, s = {
    mode: "xyz65",
    x: vt(a) * de.X,
    y: vt(r) * de.Y,
    z: vt(o) * de.Z
  };
  return i !== void 0 && (s.alpha = i), s;
}, Qe = (e) => ae(fi(e)), yt = (e) => e > ci ? Math.cbrt(e) : (pi * e + 16) / 116, ui = ({ x: e, y: t, z: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = yt(e / de.X), a = yt(t / de.Y), o = yt(n / de.Z), s = {
    mode: "lab65",
    l: 116 * a - 16,
    a: 500 * (r - a),
    b: 200 * (a - o)
  };
  return i !== void 0 && (s.alpha = i), s;
}, et = (e) => {
  let t = ui(re(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Be = 1, hi = 1, Ne = 26 / 180 * Math.PI, Ge = Math.cos(Ne), Je = Math.sin(Ne), bi = 100 / Math.log(139 / 100), Bt = ({ l: e, c: t, h: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = {
    mode: "lab65",
    l: (Math.exp(e * Be / bi) - 1) / 39e-4
  }, a = (Math.exp(0.0435 * t * hi * Be) - 1) / 0.075, o = a * Math.cos(n / 180 * Math.PI - Ne), s = a * Math.sin(n / 180 * Math.PI - Ne);
  return r.a = o * Ge - s / 0.83 * Je, r.b = o * Je + s / 0.83 * Ge, i !== void 0 && (r.alpha = i), r;
}, Gt = ({ l: e, a: t, b: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = t * Ge + n * Je, a = 0.83 * (n * Ge - t * Je), o = Math.sqrt(r * r + a * a), s = {
    mode: "dlch",
    l: bi / Be * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * o) / (0.0435 * hi * Be)
  };
  return s.c && (s.h = L((Math.atan2(a, r) + Ne) / Math.PI * 180)), i !== void 0 && (s.alpha = i), s;
}, En = (e) => Bt(K(e, "dlch")), qn = (e) => V(Gt(e), "dlab"), Pr = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: En,
    rgb: (e) => Qe(En(e))
  },
  fromMode: {
    lab65: qn,
    rgb: (e) => qn(et(e))
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-40.09, 45.501],
    b: [-40.469, 44.344]
  },
  interpolate: {
    l: c,
    a: c,
    b: c,
    alpha: {
      use: c,
      fixup: T
    }
  }
}, Er = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: Bt,
    dlab: (e) => V(e, "dlab"),
    rgb: (e) => Qe(Bt(e))
  },
  fromMode: {
    lab65: Gt,
    dlab: (e) => K(e, "dlch"),
    rgb: (e) => Gt(et(e))
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 51.484],
    h: [0, 360]
  },
  interpolate: {
    l: c,
    c,
    h: {
      use: c,
      fixup: D
    },
    alpha: {
      use: c,
      fixup: T
    }
  },
  difference: {
    h: Ve
  },
  average: {
    h: Z
  }
};
function qr({ h: e, s: t, i: n, alpha: i }) {
  e = L(e !== void 0 ? e : 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = Math.abs(e / 60 % 2 - 1), a;
  switch (Math.floor(e / 60)) {
    case 0:
      a = {
        r: n * (1 + t * (3 / (2 - r) - 1)),
        g: n * (1 + t * (3 * (1 - r) / (2 - r) - 1)),
        b: n * (1 - t)
      };
      break;
    case 1:
      a = {
        r: n * (1 + t * (3 * (1 - r) / (2 - r) - 1)),
        g: n * (1 + t * (3 / (2 - r) - 1)),
        b: n * (1 - t)
      };
      break;
    case 2:
      a = {
        r: n * (1 - t),
        g: n * (1 + t * (3 / (2 - r) - 1)),
        b: n * (1 + t * (3 * (1 - r) / (2 - r) - 1))
      };
      break;
    case 3:
      a = {
        r: n * (1 - t),
        g: n * (1 + t * (3 * (1 - r) / (2 - r) - 1)),
        b: n * (1 + t * (3 / (2 - r) - 1))
      };
      break;
    case 4:
      a = {
        r: n * (1 + t * (3 * (1 - r) / (2 - r) - 1)),
        g: n * (1 - t),
        b: n * (1 + t * (3 / (2 - r) - 1))
      };
      break;
    case 5:
      a = {
        r: n * (1 + t * (3 / (2 - r) - 1)),
        g: n * (1 - t),
        b: n * (1 + t * (3 * (1 - r) / (2 - r) - 1))
      };
      break;
    default:
      a = { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t) };
  }
  return a.mode = "rgb", i !== void 0 && (a.alpha = i), a;
}
function Rr({ r: e, g: t, b: n, alpha: i }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = Math.max(e, t, n), a = Math.min(e, t, n), o = {
    mode: "hsi",
    s: e + t + n === 0 ? 0 : 1 - 3 * a / (e + t + n),
    i: (e + t + n) / 3
  };
  return r - a !== 0 && (o.h = (r === e ? (t - n) / (r - a) + (t < n) * 6 : r === t ? (n - e) / (r - a) + 2 : (e - t) / (r - a) + 4) * 60), i !== void 0 && (o.alpha = i), o;
}
const Ar = {
  mode: "hsi",
  toMode: {
    rgb: qr
  },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: {
    rgb: Rr
  },
  channels: ["h", "s", "i", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: c, fixup: D },
    s: c,
    i: c,
    alpha: { use: c, fixup: T }
  },
  difference: {
    h: Ke
  },
  average: {
    h: Z
  }
};
function Ir({ h: e, s: t, l: n, alpha: i }) {
  e = L(e !== void 0 ? e : 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = n + t * (n < 0.5 ? n : 1 - n), a = r - (r - n) * 2 * Math.abs(e / 60 % 2 - 1), o;
  switch (Math.floor(e / 60)) {
    case 0:
      o = { r, g: a, b: 2 * n - r };
      break;
    case 1:
      o = { r: a, g: r, b: 2 * n - r };
      break;
    case 2:
      o = { r: 2 * n - r, g: r, b: a };
      break;
    case 3:
      o = { r: 2 * n - r, g: a, b: r };
      break;
    case 4:
      o = { r: a, g: 2 * n - r, b: r };
      break;
    case 5:
      o = { r, g: 2 * n - r, b: a };
      break;
    default:
      o = { r: 2 * n - r, g: 2 * n - r, b: 2 * n - r };
  }
  return o.mode = "rgb", i !== void 0 && (o.alpha = i), o;
}
function Xr({ r: e, g: t, b: n, alpha: i }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = Math.max(e, t, n), a = Math.min(e, t, n), o = {
    mode: "hsl",
    s: r === a ? 0 : (r - a) / (1 - Math.abs(r + a - 1)),
    l: 0.5 * (r + a)
  };
  return r - a !== 0 && (o.h = (r === e ? (t - n) / (r - a) + (t < n) * 6 : r === t ? (n - e) / (r - a) + 2 : (e - t) / (r - a) + 4) * 60), i !== void 0 && (o.alpha = i), o;
}
const Fr = (e, t) => {
  switch (t) {
    case "deg":
      return +e;
    case "rad":
      return e / Math.PI * 180;
    case "grad":
      return e / 10 * 9;
    case "turn":
      return e * 360;
  }
}, Or = new RegExp(
  `^hsla?\\(\\s*${lr}${ue}${Te}${ue}${Te}\\s*(?:,\\s*${cn}\\s*)?\\)$`
), jr = (e) => {
  let t = e.match(Or);
  if (!t) return;
  let n = { mode: "hsl" };
  return t[3] !== void 0 ? n.h = +t[3] : t[1] !== void 0 && t[2] !== void 0 && (n.h = Fr(t[1], t[2])), t[4] !== void 0 && (n.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (n.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] !== void 0 ? n.alpha = Math.max(0, Math.min(1, t[6] / 100)) : t[7] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[7]))), n;
};
function Yr(e, t) {
  if (!t || t[0] !== "hsl" && t[0] !== "hsla")
    return;
  const n = { mode: "hsl" }, [, i, r, a, o] = t;
  if (i.type !== p.None) {
    if (i.type === p.Percentage)
      return;
    n.h = i.value;
  }
  if (r.type !== p.None) {
    if (r.type === p.Hue)
      return;
    n.s = r.value / 100;
  }
  if (a.type !== p.None) {
    if (a.type === p.Hue)
      return;
    n.l = a.value / 100;
  }
  return o.type !== p.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === p.Number ? o.value : o.value / 100
    )
  )), n;
}
const gi = {
  mode: "hsl",
  toMode: {
    rgb: Ir
  },
  fromMode: {
    rgb: Xr
  },
  channels: ["h", "s", "l", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Yr, jr],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: c, fixup: D },
    s: c,
    l: c,
    alpha: { use: c, fixup: T }
  },
  difference: {
    h: Ke
  },
  average: {
    h: Z
  }
};
function mi({ h: e, s: t, v: n, alpha: i }) {
  e = L(e !== void 0 ? e : 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = Math.abs(e / 60 % 2 - 1), a;
  switch (Math.floor(e / 60)) {
    case 0:
      a = { r: n, g: n * (1 - t * r), b: n * (1 - t) };
      break;
    case 1:
      a = { r: n * (1 - t * r), g: n, b: n * (1 - t) };
      break;
    case 2:
      a = { r: n * (1 - t), g: n, b: n * (1 - t * r) };
      break;
    case 3:
      a = { r: n * (1 - t), g: n * (1 - t * r), b: n };
      break;
    case 4:
      a = { r: n * (1 - t * r), g: n * (1 - t), b: n };
      break;
    case 5:
      a = { r: n, g: n * (1 - t), b: n * (1 - t * r) };
      break;
    default:
      a = { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t) };
  }
  return a.mode = "rgb", i !== void 0 && (a.alpha = i), a;
}
function xi({ r: e, g: t, b: n, alpha: i }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = Math.max(e, t, n), a = Math.min(e, t, n), o = {
    mode: "hsv",
    s: r === 0 ? 0 : 1 - a / r,
    v: r
  };
  return r - a !== 0 && (o.h = (r === e ? (t - n) / (r - a) + (t < n) * 6 : r === t ? (n - e) / (r - a) + 2 : (e - t) / (r - a) + 4) * 60), i !== void 0 && (o.alpha = i), o;
}
const vi = {
  mode: "hsv",
  toMode: {
    rgb: mi
  },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: {
    rgb: xi
  },
  channels: ["h", "s", "v", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: c, fixup: D },
    s: c,
    v: c,
    alpha: { use: c, fixup: T }
  },
  difference: {
    h: Ke
  },
  average: {
    h: Z
  }
};
function Dr({ h: e, w: t, b: n, alpha: i }) {
  if (t === void 0 && (t = 0), n === void 0 && (n = 0), t + n > 1) {
    let r = t + n;
    t /= r, n /= r;
  }
  return mi({
    h: e,
    s: n === 1 ? 1 : 1 - t / (1 - n),
    v: 1 - n,
    alpha: i
  });
}
function Zr(e) {
  let t = xi(e);
  if (t === void 0) return;
  let n = t.s !== void 0 ? t.s : 0, i = t.v !== void 0 ? t.v : 0, r = {
    mode: "hwb",
    w: (1 - n) * i,
    b: 1 - i
  };
  return t.h !== void 0 && (r.h = t.h), t.alpha !== void 0 && (r.alpha = t.alpha), r;
}
function Br(e, t) {
  if (!t || t[0] !== "hwb")
    return;
  const n = { mode: "hwb" }, [, i, r, a, o] = t;
  if (i.type !== p.None) {
    if (i.type === p.Percentage)
      return;
    n.h = i.value;
  }
  if (r.type !== p.None) {
    if (r.type === p.Hue)
      return;
    n.w = r.value / 100;
  }
  if (a.type !== p.None) {
    if (a.type === p.Hue)
      return;
    n.b = a.value / 100;
  }
  return o.type !== p.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === p.Number ? o.value : o.value / 100
    )
  )), n;
}
const Gr = {
  mode: "hwb",
  toMode: {
    rgb: Dr
  },
  fromMode: {
    rgb: Zr
  },
  channels: ["h", "w", "b", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Br],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: c, fixup: D },
    w: c,
    b: c,
    alpha: { use: c, fixup: T }
  },
  difference: {
    h: Lr
  },
  average: {
    h: Z
  }
}, yi = 203, tt = 0.1593017578125, Mi = 78.84375, nt = 0.8359375, it = 18.8515625, rt = 18.6875;
function Mt(e) {
  if (e < 0) return 0;
  const t = Math.pow(e, 1 / Mi);
  return 1e4 * Math.pow(Math.max(0, t - nt) / (it - rt * t), 1 / tt);
}
function kt(e) {
  if (e < 0) return 0;
  const t = Math.pow(e / 1e4, tt);
  return Math.pow((nt + it * t) / (1 + rt * t), Mi);
}
const wt = (e) => Math.max(e / yi, 0), Rn = ({ i: e, t, p: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const r = Mt(
    e + 0.008609037037932761 * t + 0.11102962500302593 * n
  ), a = Mt(
    e - 0.00860903703793275 * t - 0.11102962500302599 * n
  ), o = Mt(
    e + 0.5600313357106791 * t - 0.32062717498731885 * n
  ), s = {
    mode: "xyz65",
    x: wt(
      2.070152218389422 * r - 1.3263473389671556 * a + 0.2066510476294051 * o
    ),
    y: wt(
      0.3647385209748074 * r + 0.680566024947227 * a - 0.0453045459220346 * o
    ),
    z: wt(
      -0.049747207535812 * r - 0.0492609666966138 * a + 1.1880659249923042 * o
    )
  };
  return i !== void 0 && (s.alpha = i), s;
}, $t = (e = 0) => Math.max(e * yi, 0), An = ({ x: e, y: t, z: n, alpha: i }) => {
  const r = $t(e), a = $t(t), o = $t(n), s = kt(
    0.3592832590121217 * r + 0.6976051147779502 * a - 0.0358915932320289 * o
  ), f = kt(
    -0.1920808463704995 * r + 1.1004767970374323 * a + 0.0753748658519118 * o
  ), h = kt(
    0.0070797844607477 * r + 0.0748396662186366 * a + 0.8433265453898765 * o
  ), g = 0.5 * s + 0.5 * f, m = 1.61376953125 * s - 3.323486328125 * f + 1.709716796875 * h, x = 4.378173828125 * s - 4.24560546875 * f - 0.132568359375 * h, k = { mode: "itp", i: g, t: m, p: x };
  return i !== void 0 && (k.alpha = i), k;
}, Jr = {
  mode: "itp",
  channels: ["i", "t", "p", "alpha"],
  parse: ["--ictcp"],
  serialize: "--ictcp",
  toMode: {
    xyz65: Rn,
    rgb: (e) => ae(Rn(e))
  },
  fromMode: {
    xyz65: An,
    rgb: (e) => An(re(e))
  },
  ranges: {
    i: [0, 0.581],
    t: [-0.369, 0.272],
    p: [-0.164, 0.331]
  },
  interpolate: {
    i: c,
    t: c,
    p: c,
    alpha: { use: c, fixup: T }
  }
}, Ur = 134.03437499999998, Wr = 16295499532821565e-27, zt = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e / 1e4, tt);
  return Math.pow((nt + it * t) / (1 + rt * t), Ur);
}, _t = (e = 0) => Math.max(e * 203, 0), ki = ({ x: e, y: t, z: n, alpha: i }) => {
  e = _t(e), t = _t(t), n = _t(n);
  let r = 1.15 * e - 0.15 * n, a = 0.66 * t + 0.34 * e, o = zt(0.41478972 * r + 0.579999 * a + 0.014648 * n), s = zt(-0.20151 * r + 1.120649 * a + 0.0531008 * n), f = zt(-0.0166008 * r + 0.2648 * a + 0.6684799 * n), h = (o + s) / 2, g = {
    mode: "jab",
    j: 0.44 * h / (1 - 0.56 * h) - Wr,
    a: 3.524 * o - 4.066708 * s + 0.542708 * f,
    b: 0.199076 * o + 1.096799 * s - 1.295875 * f
  };
  return i !== void 0 && (g.alpha = i), g;
}, Kr = 134.03437499999998, In = 16295499532821565e-27, Tt = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e, 1 / Kr);
  return 1e4 * Math.pow((nt - t) / (rt * t - it), 1 / tt);
}, Nt = (e) => e / 203, wi = ({ j: e, a: t, b: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = (e + In) / (0.44 + 0.56 * (e + In)), a = Tt(r + 0.13860504 * t + 0.058047316 * n), o = Tt(r - 0.13860504 * t - 0.058047316 * n), s = Tt(r - 0.096019242 * t - 0.8118919 * n), f = {
    mode: "xyz65",
    x: Nt(
      1.661373024652174 * a - 0.914523081304348 * o + 0.23136208173913045 * s
    ),
    y: Nt(
      -0.3250758611844533 * a + 1.571847026732543 * o - 0.21825383453227928 * s
    ),
    z: Nt(-0.090982811 * a - 0.31272829 * o + 1.5227666 * s)
  };
  return i !== void 0 && (f.alpha = i), f;
}, $i = (e) => {
  let t = ki(re(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, zi = (e) => ae(wi(e)), Vr = {
  mode: "jab",
  channels: ["j", "a", "b", "alpha"],
  parse: ["--jzazbz"],
  serialize: "--jzazbz",
  fromMode: {
    rgb: $i,
    xyz65: ki
  },
  toMode: {
    rgb: zi,
    xyz65: wi
  },
  ranges: {
    j: [0, 0.222],
    a: [-0.109, 0.129],
    b: [-0.185, 0.134]
  },
  interpolate: {
    j: c,
    a: c,
    b: c,
    alpha: { use: c, fixup: T }
  }
}, Xn = ({ j: e, a: t, b: n, alpha: i }) => {
  t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = Math.sqrt(t * t + n * n), a = {
    mode: "jch",
    j: e,
    c: r
  };
  return r && (a.h = L(Math.atan2(n, t) * 180 / Math.PI)), i !== void 0 && (a.alpha = i), a;
}, Fn = ({ j: e, c: t, h: n, alpha: i }) => {
  n === void 0 && (n = 0);
  let r = {
    mode: "jab",
    j: e,
    a: t ? t * Math.cos(n / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(n / 180 * Math.PI) : 0
  };
  return i !== void 0 && (r.alpha = i), r;
}, Qr = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: Fn,
    rgb: (e) => zi(Fn(e))
  },
  fromMode: {
    rgb: (e) => Xn($i(e)),
    jab: Xn
  },
  channels: ["j", "c", "h", "alpha"],
  ranges: {
    j: [0, 0.221],
    c: [0, 0.19],
    h: [0, 360]
  },
  interpolate: {
    h: { use: c, fixup: D },
    c,
    j: c,
    alpha: { use: c, fixup: T }
  },
  difference: {
    h: Ve
  },
  average: {
    h: Z
  }
}, at = Math.pow(29, 3) / Math.pow(3, 3), fn = Math.pow(6, 3) / Math.pow(29, 3);
let Ct = (e) => Math.pow(e, 3) > fn ? Math.pow(e, 3) : (116 * e - 16) / at;
const un = ({ l: e, a: t, b: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = (e + 16) / 116, a = t / 500 + r, o = r - n / 200, s = {
    mode: "xyz50",
    x: Ct(a) * z.X,
    y: Ct(r) * z.Y,
    z: Ct(o) * z.Z
  };
  return i !== void 0 && (s.alpha = i), s;
}, qe = ({ x: e, y: t, z: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = ge({
    r: e * 3.1341359569958707 - t * 1.6173863321612538 - 0.4906619460083532 * n,
    g: e * -0.978795502912089 + t * 1.916254567259524 + 0.03344273116131949 * n,
    b: e * 0.07195537988411677 - t * 0.2289768264158322 + 1.405386058324125 * n
  });
  return i !== void 0 && (r.alpha = i), r;
}, _i = (e) => qe(un(e)), Re = (e) => {
  let { r: t, g: n, b: i, alpha: r } = be(e), a = {
    mode: "xyz50",
    x: 0.436065742824811 * t + 0.3851514688337912 * n + 0.14307845442264197 * i,
    y: 0.22249319175623702 * t + 0.7168870538238823 * n + 0.06061979053616537 * i,
    z: 0.013923904500943465 * t + 0.09708128566574634 * n + 0.7140993584005155 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, St = (e) => e > fn ? Math.cbrt(e) : (at * e + 16) / 116, hn = ({ x: e, y: t, z: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = St(e / z.X), a = St(t / z.Y), o = St(n / z.Z), s = {
    mode: "lab",
    l: 116 * a - 16,
    a: 500 * (r - a),
    b: 200 * (a - o)
  };
  return i !== void 0 && (s.alpha = i), s;
}, Ti = (e) => {
  let t = hn(Re(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
};
function ea(e, t) {
  if (!t || t[0] !== "lab")
    return;
  const n = { mode: "lab" }, [, i, r, a, o] = t;
  if (!(i.type === p.Hue || r.type === p.Hue || a.type === p.Hue))
    return i.type !== p.None && (n.l = Math.min(Math.max(0, i.value), 100)), r.type !== p.None && (n.a = r.type === p.Number ? r.value : r.value * 125 / 100), a.type !== p.None && (n.b = a.type === p.Number ? a.value : a.value * 125 / 100), o.type !== p.None && (n.alpha = Math.min(
      1,
      Math.max(
        0,
        o.type === p.Number ? o.value : o.value / 100
      )
    )), n;
}
const bn = {
  mode: "lab",
  toMode: {
    xyz50: un,
    rgb: _i
  },
  fromMode: {
    xyz50: hn,
    rgb: Ti
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  },
  parse: [ea],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: c,
    a: c,
    b: c,
    alpha: { use: c, fixup: T }
  }
}, ta = {
  ...bn,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: fi,
    rgb: Qe
  },
  fromMode: {
    xyz65: ui,
    rgb: et
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function na(e, t) {
  if (!t || t[0] !== "lch")
    return;
  const n = { mode: "lch" }, [, i, r, a, o] = t;
  if (i.type !== p.None) {
    if (i.type === p.Hue)
      return;
    n.l = Math.min(Math.max(0, i.value), 100);
  }
  if (r.type !== p.None && (n.c = Math.max(
    0,
    r.type === p.Number ? r.value : r.value * 150 / 100
  )), a.type !== p.None) {
    if (a.type === p.Percentage)
      return;
    n.h = a.value;
  }
  return o.type !== p.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === p.Number ? o.value : o.value / 100
    )
  )), n;
}
const gn = {
  mode: "lch",
  toMode: {
    lab: V,
    rgb: (e) => _i(V(e))
  },
  fromMode: {
    rgb: (e) => K(Ti(e)),
    lab: K
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  },
  parse: [na],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: c, fixup: D },
    c,
    l: c,
    alpha: { use: c, fixup: T }
  },
  difference: {
    h: Ve
  },
  average: {
    h: Z
  }
}, ia = {
  ...gn,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => V(e, "lab65"),
    rgb: (e) => Qe(V(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => K(et(e), "lch65"),
    lab65: (e) => K(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, Ni = ({ l: e, u: t, v: n, alpha: i }) => {
  t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = Math.sqrt(t * t + n * n), a = {
    mode: "lchuv",
    l: e,
    c: r
  };
  return r && (a.h = L(Math.atan2(n, t) * 180 / Math.PI)), i !== void 0 && (a.alpha = i), a;
}, Ci = ({ l: e, c: t, h: n, alpha: i }) => {
  n === void 0 && (n = 0);
  let r = {
    mode: "luv",
    l: e,
    u: t ? t * Math.cos(n / 180 * Math.PI) : 0,
    v: t ? t * Math.sin(n / 180 * Math.PI) : 0
  };
  return i !== void 0 && (r.alpha = i), r;
}, Si = (e, t, n) => 4 * e / (e + 15 * t + 3 * n), Li = (e, t, n) => 9 * t / (e + 15 * t + 3 * n), ra = Si(z.X, z.Y, z.Z), aa = Li(z.X, z.Y, z.Z), oa = (e) => e <= fn ? at * e : 116 * Math.cbrt(e) - 16, Jt = ({ x: e, y: t, z: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = oa(t / z.Y), a = Si(e, t, n), o = Li(e, t, n);
  !isFinite(a) || !isFinite(o) ? r = a = o = 0 : (a = 13 * r * (a - ra), o = 13 * r * (o - aa));
  let s = {
    mode: "luv",
    l: r,
    u: a,
    v: o
  };
  return i !== void 0 && (s.alpha = i), s;
}, sa = (e, t, n) => 4 * e / (e + 15 * t + 3 * n), la = (e, t, n) => 9 * t / (e + 15 * t + 3 * n), da = sa(z.X, z.Y, z.Z), pa = la(z.X, z.Y, z.Z), Ut = ({ l: e, u: t, v: n, alpha: i }) => {
  if (e === void 0 && (e = 0), e === 0)
    return { mode: "xyz50", x: 0, y: 0, z: 0 };
  t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = t / (13 * e) + da, a = n / (13 * e) + pa, o = z.Y * (e <= 8 ? e / at : Math.pow((e + 16) / 116, 3)), s = o * (9 * r) / (4 * a), f = o * (12 - 3 * r - 20 * a) / (4 * a), h = { mode: "xyz50", x: s, y: o, z: f };
  return i !== void 0 && (h.alpha = i), h;
}, ca = (e) => Ni(Jt(Re(e))), fa = (e) => qe(Ut(Ci(e))), ua = {
  mode: "lchuv",
  toMode: {
    luv: Ci,
    rgb: fa
  },
  fromMode: {
    rgb: ca,
    luv: Ni
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
    h: { use: c, fixup: D },
    c,
    l: c,
    alpha: { use: c, fixup: T }
  },
  difference: {
    h: Ve
  },
  average: {
    h: Z
  }
}, ha = {
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
}, ba = {
  mode: "luv",
  toMode: {
    xyz50: Ut,
    rgb: (e) => qe(Ut(e))
  },
  fromMode: {
    xyz50: Jt,
    rgb: (e) => Jt(Re(e))
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
    l: c,
    u: c,
    v: c,
    alpha: { use: c, fixup: T }
  }
}, Hi = ({ r: e, g: t, b: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = Math.cbrt(
    0.412221469470763 * e + 0.5363325372617348 * t + 0.0514459932675022 * n
  ), a = Math.cbrt(
    0.2119034958178252 * e + 0.6806995506452344 * t + 0.1073969535369406 * n
  ), o = Math.cbrt(
    0.0883024591900564 * e + 0.2817188391361215 * t + 0.6299787016738222 * n
  ), s = {
    mode: "oklab",
    l: 0.210454268309314 * r + 0.7936177747023054 * a - 0.0040720430116193 * o,
    a: 1.9779985324311684 * r - 2.42859224204858 * a + 0.450593709617411 * o,
    b: 0.0259040424655478 * r + 0.7827717124575296 * a - 0.8086757549230774 * o
  };
  return i !== void 0 && (s.alpha = i), s;
}, ot = (e) => {
  let t = Hi(be(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Ae = ({ l: e, a: t, b: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = Math.pow(e + 0.3963377773761749 * t + 0.2158037573099136 * n, 3), a = Math.pow(e - 0.1055613458156586 * t - 0.0638541728258133 * n, 3), o = Math.pow(e - 0.0894841775298119 * t - 1.2914855480194092 * n, 3), s = {
    mode: "lrgb",
    r: 4.076741636075957 * r - 3.3077115392580616 * a + 0.2309699031821044 * o,
    g: -1.2684379732850317 * r + 2.6097573492876887 * a - 0.3413193760026573 * o,
    b: -0.0041960761386756 * r - 0.7034186179359362 * a + 1.7076146940746117 * o
  };
  return i !== void 0 && (s.alpha = i), s;
}, st = (e) => ge(Ae(e));
function Wt(e) {
  const i = 1.170873786407767;
  return 0.5 * (i * e - 0.206 + Math.sqrt((i * e - 0.206) * (i * e - 0.206) + 4 * 0.03 * i * e));
}
function Ue(e) {
  return (e * e + 0.206 * e) / (1.170873786407767 * (e + 0.03));
}
function ga(e, t) {
  let n, i, r, a, o, s, f, h;
  -1.88170328 * e - 0.80936493 * t > 1 ? (n = 1.19086277, i = 1.76576728, r = 0.59662641, a = 0.75515197, o = 0.56771245, s = 4.0767416621, f = -3.3077115913, h = 0.2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (n = 0.73956515, i = -0.45954404, r = 0.08285427, a = 0.1254107, o = 0.14503204, s = -1.2684380046, f = 2.6097574011, h = -0.3413193965) : (n = 1.35733652, i = -915799e-8, r = -1.1513021, a = -0.50559606, o = 692167e-8, s = -0.0041960863, f = -0.7034186147, h = 1.707614701);
  let g = n + i * e + r * t + a * e * e + o * e * t, m = 0.3963377774 * e + 0.2158037573 * t, x = -0.1055613458 * e - 0.0638541728 * t, k = -0.0894841775 * e - 1.291485548 * t;
  {
    let _ = 1 + g * m, S = 1 + g * x, N = 1 + g * k, P = _ * _ * _, H = S * S * S, B = N * N * N, me = 3 * m * _ * _, xe = 3 * x * S * S, ve = 3 * k * N * N, ye = 6 * m * m * _, Me = 6 * x * x * S, ke = 6 * k * k * N, oe = s * P + f * H + h * B, Q = s * me + f * xe + h * ve, we = s * ye + f * Me + h * ke;
    g = g - oe * Q / (Q * Q - 0.5 * oe * we);
  }
  return g;
}
function mn(e, t) {
  let n = ga(e, t), i = Ae({ l: 1, a: n * e, b: n * t }), r = Math.cbrt(1 / Math.max(i.r, i.g, i.b)), a = r * n;
  return [r, a];
}
function ma(e, t, n, i, r, a = null) {
  a || (a = mn(e, t));
  let o;
  if ((n - r) * a[1] - (a[0] - r) * i <= 0)
    o = a[1] * r / (i * a[0] + a[1] * (r - n));
  else {
    o = a[1] * (r - 1) / (i * (a[0] - 1) + a[1] * (r - n));
    {
      let s = n - r, f = i, h = 0.3963377774 * e + 0.2158037573 * t, g = -0.1055613458 * e - 0.0638541728 * t, m = -0.0894841775 * e - 1.291485548 * t, x = s + f * h, k = s + f * g, _ = s + f * m;
      {
        let S = r * (1 - o) + o * n, N = o * i, P = S + N * h, H = S + N * g, B = S + N * m, me = P * P * P, xe = H * H * H, ve = B * B * B, ye = 3 * x * P * P, Me = 3 * k * H * H, ke = 3 * _ * B * B, oe = 6 * x * x * P, Q = 6 * k * k * H, we = 6 * _ * _ * B, kn = 4.0767416621 * me - 3.3077115913 * xe + 0.2309699292 * ve - 1, lt = 4.0767416621 * ye - 3.3077115913 * Me + 0.2309699292 * ke, er = 4.0767416621 * oe - 3.3077115913 * Q + 0.2309699292 * we, wn = lt / (lt * lt - 0.5 * kn * er), dt = -kn * wn, $n = -1.2684380046 * me + 2.6097574011 * xe - 0.3413193965 * ve - 1, pt = -1.2684380046 * ye + 2.6097574011 * Me - 0.3413193965 * ke, tr = -1.2684380046 * oe + 2.6097574011 * Q - 0.3413193965 * we, zn = pt / (pt * pt - 0.5 * $n * tr), ct = -$n * zn, _n = -0.0041960863 * me - 0.7034186147 * xe + 1.707614701 * ve - 1, ft = -0.0041960863 * ye - 0.7034186147 * Me + 1.707614701 * ke, nr = -0.0041960863 * oe - 0.7034186147 * Q + 1.707614701 * we, Tn = ft / (ft * ft - 0.5 * _n * nr), ut = -_n * Tn;
        dt = wn >= 0 ? dt : 1e6, ct = zn >= 0 ? ct : 1e6, ut = Tn >= 0 ? ut : 1e6, o += Math.min(dt, Math.min(ct, ut));
      }
    }
  }
  return o;
}
function xn(e, t, n = null) {
  n || (n = mn(e, t));
  let i = n[0], r = n[1];
  return [r / i, r / (1 - i)];
}
function Pi(e, t, n) {
  let i = mn(t, n), r = ma(t, n, e, 1, e, i), a = xn(t, n, i), o = 0.11516993 + 1 / (7.4477897 + 4.1590124 * n + t * (-2.19557347 + 1.75198401 * n + t * (-2.13704948 - 10.02301043 * n + t * (-4.24894561 + 5.38770819 * n + 4.69891013 * t)))), s = 0.11239642 + 1 / (1.6132032 - 0.68124379 * n + t * (0.40370612 + 0.90148123 * n + t * (-0.27087943 + 0.6122399 * n + t * (299215e-8 - 0.45399568 * n - 0.14661872 * t)))), f = r / Math.min(e * a[0], (1 - e) * a[1]), h = e * o, g = (1 - e) * s, m = 0.9 * f * Math.sqrt(
    Math.sqrt(
      1 / (1 / (h * h * h * h) + 1 / (g * g * g * g))
    )
  );
  return h = e * 0.4, g = (1 - e) * 0.8, [Math.sqrt(1 / (1 / (h * h) + 1 / (g * g))), m, r];
}
function On(e) {
  const t = e.l !== void 0 ? e.l : 0, n = e.a !== void 0 ? e.a : 0, i = e.b !== void 0 ? e.b : 0, r = { mode: "okhsl", l: Wt(t) };
  e.alpha !== void 0 && (r.alpha = e.alpha);
  let a = Math.sqrt(n * n + i * i);
  if (!a)
    return r.s = 0, r;
  let [o, s, f] = Pi(t, n / a, i / a), h;
  if (a < s) {
    let g = 0, m = 0.8 * o, x = 1 - m / s;
    h = (a - g) / (m + x * (a - g)) * 0.8;
  } else {
    let g = s, m = 0.2 * s * s * 1.25 * 1.25 / o, x = 1 - m / (f - s);
    h = 0.8 + 0.2 * ((a - g) / (m + x * (a - g)));
  }
  return h && (r.s = h, r.h = L(Math.atan2(i, n) * 180 / Math.PI)), r;
}
function jn(e) {
  let t = e.h !== void 0 ? e.h : 0, n = e.s !== void 0 ? e.s : 0, i = e.l !== void 0 ? e.l : 0;
  const r = { mode: "oklab", l: Ue(i) };
  if (e.alpha !== void 0 && (r.alpha = e.alpha), !n || i === 1)
    return r.a = r.b = 0, r;
  let a = Math.cos(t / 180 * Math.PI), o = Math.sin(t / 180 * Math.PI), [s, f, h] = Pi(r.l, a, o), g, m, x, k;
  n < 0.8 ? (g = 1.25 * n, m = 0, x = 0.8 * s, k = 1 - x / f) : (g = 5 * (n - 0.8), m = f, x = 0.2 * f * f * 1.25 * 1.25 / s, k = 1 - x / (h - f));
  let _ = m + g * x / (1 - k * g);
  return r.a = _ * a, r.b = _ * o, r;
}
const xa = {
  ...gi,
  mode: "okhsl",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--okhsl"],
  serialize: "--okhsl",
  fromMode: {
    oklab: On,
    rgb: (e) => On(ot(e))
  },
  toMode: {
    oklab: jn,
    rgb: (e) => st(jn(e))
  }
};
function Yn(e) {
  let t = e.l !== void 0 ? e.l : 0, n = e.a !== void 0 ? e.a : 0, i = e.b !== void 0 ? e.b : 0, r = Math.sqrt(n * n + i * i), a = r ? n / r : 1, o = r ? i / r : 1, [s, f] = xn(a, o), h = 0.5, g = 1 - h / s, m = f / (r + t * f), x = m * t, k = m * r, _ = Ue(x), S = k * _ / x, N = Ae({ l: _, a: a * S, b: o * S }), P = Math.cbrt(
    1 / Math.max(N.r, N.g, N.b, 0)
  );
  t = t / P, r = r / P * Wt(t) / t, t = Wt(t);
  const H = {
    mode: "okhsv",
    s: r ? (h + f) * k / (f * h + f * g * k) : 0,
    v: t ? t / x : 0
  };
  return H.s && (H.h = L(Math.atan2(i, n) * 180 / Math.PI)), e.alpha !== void 0 && (H.alpha = e.alpha), H;
}
function Dn(e) {
  const t = { mode: "oklab" };
  e.alpha !== void 0 && (t.alpha = e.alpha);
  const n = e.h !== void 0 ? e.h : 0, i = e.s !== void 0 ? e.s : 0, r = e.v !== void 0 ? e.v : 0, a = Math.cos(n / 180 * Math.PI), o = Math.sin(n / 180 * Math.PI), [s, f] = xn(a, o), h = 0.5, g = 1 - h / s, m = 1 - i * h / (h + f - f * g * i), x = i * f * h / (h + f - f * g * i), k = Ue(m), _ = x * k / m, S = Ae({
    l: k,
    a: a * _,
    b: o * _
  }), N = Math.cbrt(
    1 / Math.max(S.r, S.g, S.b, 0)
  ), P = Ue(r * m), H = x * P / m;
  return t.l = P * N, t.a = H * a * N, t.b = H * o * N, t;
}
const va = {
  ...vi,
  mode: "okhsv",
  channels: ["h", "s", "v", "alpha"],
  parse: ["--okhsv"],
  serialize: "--okhsv",
  fromMode: {
    oklab: Yn,
    rgb: (e) => Yn(ot(e))
  },
  toMode: {
    oklab: Dn,
    rgb: (e) => st(Dn(e))
  }
};
function ya(e, t) {
  if (!t || t[0] !== "oklab")
    return;
  const n = { mode: "oklab" }, [, i, r, a, o] = t;
  if (!(i.type === p.Hue || r.type === p.Hue || a.type === p.Hue))
    return i.type !== p.None && (n.l = Math.min(
      Math.max(0, i.type === p.Number ? i.value : i.value / 100),
      1
    )), r.type !== p.None && (n.a = r.type === p.Number ? r.value : r.value * 0.4 / 100), a.type !== p.None && (n.b = a.type === p.Number ? a.value : a.value * 0.4 / 100), o.type !== p.None && (n.alpha = Math.min(
      1,
      Math.max(
        0,
        o.type === p.Number ? o.value : o.value / 100
      )
    )), n;
}
const Ma = {
  ...bn,
  mode: "oklab",
  toMode: {
    lrgb: Ae,
    rgb: st
  },
  fromMode: {
    lrgb: Hi,
    rgb: ot
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [ya],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function ka(e, t) {
  if (!t || t[0] !== "oklch")
    return;
  const n = { mode: "oklch" }, [, i, r, a, o] = t;
  if (i.type !== p.None) {
    if (i.type === p.Hue)
      return;
    n.l = Math.min(
      Math.max(0, i.type === p.Number ? i.value : i.value / 100),
      1
    );
  }
  if (r.type !== p.None && (n.c = Math.max(
    0,
    r.type === p.Number ? r.value : r.value * 0.4 / 100
  )), a.type !== p.None) {
    if (a.type === p.Percentage)
      return;
    n.h = a.value;
  }
  return o.type !== p.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === p.Number ? o.value : o.value / 100
    )
  )), n;
}
const wa = {
  ...gn,
  mode: "oklch",
  toMode: {
    oklab: (e) => V(e, "oklab"),
    rgb: (e) => st(V(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => K(ot(e), "oklch"),
    oklab: (e) => K(e, "oklch")
  },
  parse: [ka],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, Zn = (e) => {
  let { r: t, g: n, b: i, alpha: r } = be(e), a = {
    mode: "xyz65",
    x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * i,
    y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * i,
    z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, Bn = ({ x: e, y: t, z: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = ge(
    {
      r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
      g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
      b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n
    },
    "p3"
  );
  return i !== void 0 && (r.alpha = i), r;
}, $a = {
  ...he,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => Bn(re(e)),
    xyz65: Bn
  },
  toMode: {
    rgb: (e) => ae(Zn(e)),
    xyz65: Zn
  }
}, Lt = (e) => {
  let t = Math.abs(e);
  return t >= 1 / 512 ? Math.sign(e) * Math.pow(t, 1 / 1.8) : 16 * e;
}, Gn = ({ x: e, y: t, z: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = {
    mode: "prophoto",
    r: Lt(
      e * 1.3457868816471585 - t * 0.2555720873797946 - 0.0511018649755453 * n
    ),
    g: Lt(
      e * -0.5446307051249019 + t * 1.5082477428451466 + 0.0205274474364214 * n
    ),
    b: Lt(e * 0 + t * 0 + 1.2119675456389452 * n)
  };
  return i !== void 0 && (r.alpha = i), r;
}, Ht = (e = 0) => {
  let t = Math.abs(e);
  return t >= 16 / 512 ? Math.sign(e) * Math.pow(t, 1.8) : e / 16;
}, Jn = (e) => {
  let t = Ht(e.r), n = Ht(e.g), i = Ht(e.b), r = {
    mode: "xyz50",
    x: 0.7977666449006423 * t + 0.1351812974005331 * n + 0.0313477341283922 * i,
    y: 0.2880748288194013 * t + 0.7118352342418731 * n + 899369387256e-16 * i,
    z: 0 * t + 0 * n + 0.8251046025104602 * i
  };
  return e.alpha !== void 0 && (r.alpha = e.alpha), r;
}, za = {
  ...he,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: Gn,
    rgb: (e) => Gn(Re(e))
  },
  toMode: {
    xyz50: Jn,
    rgb: (e) => qe(Jn(e))
  }
}, Un = 1.09929682680944, _a = 0.018053968510807, Pt = (e) => {
  const t = Math.abs(e);
  return t > _a ? (Math.sign(e) || 1) * (Un * Math.pow(t, 0.45) - (Un - 1)) : 4.5 * e;
}, Wn = ({ x: e, y: t, z: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = {
    mode: "rec2020",
    r: Pt(
      e * 1.7166511879712683 - t * 0.3556707837763925 - 0.2533662813736599 * n
    ),
    g: Pt(
      e * -0.6666843518324893 + t * 1.6164812366349395 + 0.0157685458139111 * n
    ),
    b: Pt(
      e * 0.0176398574453108 - t * 0.0427706132578085 + 0.9421031212354739 * n
    )
  };
  return i !== void 0 && (r.alpha = i), r;
}, Kn = 1.09929682680944, Ta = 0.018053968510807, Et = (e = 0) => {
  let t = Math.abs(e);
  return t < Ta * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((t + Kn - 1) / Kn, 1 / 0.45);
}, Vn = (e) => {
  let t = Et(e.r), n = Et(e.g), i = Et(e.b), r = {
    mode: "xyz65",
    x: 0.6369580483012911 * t + 0.1446169035862083 * n + 0.1688809751641721 * i,
    y: 0.262700212011267 * t + 0.6779980715188708 * n + 0.059301716469862 * i,
    z: 0 * t + 0.0280726930490874 * n + 1.0609850577107909 * i
  };
  return e.alpha !== void 0 && (r.alpha = e.alpha), r;
}, Na = {
  ...he,
  mode: "rec2020",
  fromMode: {
    xyz65: Wn,
    rgb: (e) => Wn(re(e))
  },
  toMode: {
    xyz65: Vn,
    rgb: (e) => ae(Vn(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, ie = 0.0037930732552754493, Ei = Math.cbrt(ie), qt = (e) => Math.cbrt(e) - Ei, Ca = (e) => {
  const { r: t, g: n, b: i, alpha: r } = be(e), a = qt(0.3 * t + 0.622 * n + 0.078 * i + ie), o = qt(0.23 * t + 0.692 * n + 0.078 * i + ie), s = qt(
    0.2434226892454782 * t + 0.2047674442449682 * n + 0.5518098665095535 * i + ie
  ), f = {
    mode: "xyb",
    x: (a - o) / 2,
    y: (a + o) / 2,
    /* Apply default chroma from luma (subtract Y from B) */
    b: s - (a + o) / 2
  };
  return r !== void 0 && (f.alpha = r), f;
}, Rt = (e) => Math.pow(e + Ei, 3), Sa = ({ x: e, y: t, b: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const r = Rt(e + t) - ie, a = Rt(t - e) - ie, o = Rt(n + t) - ie, s = ge({
    r: 11.031566904639861 * r - 9.866943908131562 * a - 0.16462299650829934 * o,
    g: -3.2541473810744237 * r + 4.418770377582723 * a - 0.16462299650829934 * o,
    b: -3.6588512867136815 * r + 2.7129230459360922 * a + 1.9459282407775895 * o
  });
  return i !== void 0 && (s.alpha = i), s;
}, La = {
  mode: "xyb",
  channels: ["x", "y", "b", "alpha"],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: {
    rgb: Sa
  },
  fromMode: {
    rgb: Ca
  },
  ranges: {
    x: [-0.0154, 0.0281],
    y: [0, 0.8453],
    b: [-0.2778, 0.388]
  },
  interpolate: {
    x: c,
    y: c,
    b: c,
    alpha: { use: c, fixup: T }
  }
}, Ha = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: qe,
    lab: hn
  },
  fromMode: {
    rgb: Re,
    lab: un
  },
  channels: ["x", "y", "z", "alpha"],
  ranges: {
    x: [0, 0.964],
    y: [0, 0.999],
    z: [0, 0.825]
  },
  interpolate: {
    x: c,
    y: c,
    z: c,
    alpha: { use: c, fixup: T }
  }
}, Pa = (e) => {
  let { x: t, y: n, z: i, alpha: r } = e;
  t === void 0 && (t = 0), n === void 0 && (n = 0), i === void 0 && (i = 0);
  let a = {
    mode: "xyz50",
    x: 1.0479298208405488 * t + 0.0229467933410191 * n - 0.0501922295431356 * i,
    y: 0.0296278156881593 * t + 0.990434484573249 * n - 0.0170738250293851 * i,
    z: -0.0092430581525912 * t + 0.0150551448965779 * n + 0.7518742899580008 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, Ea = (e) => {
  let { x: t, y: n, z: i, alpha: r } = e;
  t === void 0 && (t = 0), n === void 0 && (n = 0), i === void 0 && (i = 0);
  let a = {
    mode: "xyz65",
    x: 0.9554734527042182 * t - 0.0230985368742614 * n + 0.0632593086610217 * i,
    y: -0.0283697069632081 * t + 1.0099954580058226 * n + 0.021041398966943 * i,
    z: 0.0123140016883199 * t - 0.0205076964334779 * n + 1.3303659366080753 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, qa = {
  mode: "xyz65",
  toMode: {
    rgb: ae,
    xyz50: Pa
  },
  fromMode: {
    rgb: re,
    xyz50: Ea
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
    x: c,
    y: c,
    z: c,
    alpha: { use: c, fixup: T }
  }
}, Ra = ({ r: e, g: t, b: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const r = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * t + 0.11448223 * n,
    i: 0.59597799 * e - 0.2741761 * t - 0.32180189 * n,
    q: 0.21147017 * e - 0.52261711 * t + 0.31114694 * n
  };
  return i !== void 0 && (r.alpha = i), r;
}, Aa = ({ y: e, i: t, q: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const r = {
    mode: "rgb",
    r: e + 0.95608445 * t + 0.6208885 * n,
    g: e - 0.27137664 * t - 0.6486059 * n,
    b: e - 1.10561724 * t + 1.70250126 * n
  };
  return i !== void 0 && (r.alpha = i), r;
}, Ia = {
  mode: "yiq",
  toMode: {
    rgb: Aa
  },
  fromMode: {
    rgb: Ra
  },
  channels: ["y", "i", "q", "alpha"],
  parse: ["--yiq"],
  serialize: "--yiq",
  ranges: {
    i: [-0.595, 0.595],
    q: [-0.522, 0.522]
  },
  interpolate: {
    y: c,
    i: c,
    q: c,
    alpha: { use: c, fixup: T }
  }
}, Xa = (e) => Math.max(0, Math.min(1, e || 0)), At = (e) => Math.round(Xa(e) * 255), Fa = E("rgb"), Oa = (e) => {
  if (e === void 0)
    return;
  let t = At(e.r), n = At(e.g), i = At(e.b);
  return "#" + (1 << 24 | t << 16 | n << 8 | i).toString(16).slice(1);
}, ja = (e) => Oa(Fa(e)), qi = E("rgb"), Ri = (e) => {
  const t = {
    mode: e.mode,
    r: Math.max(0, Math.min(e.r !== void 0 ? e.r : 0, 1)),
    g: Math.max(0, Math.min(e.g !== void 0 ? e.g : 0, 1)),
    b: Math.max(0, Math.min(e.b !== void 0 ? e.b : 0, 1))
  };
  return e.alpha !== void 0 && (t.alpha = e.alpha), t;
}, Ya = (e) => Ri(qi(e)), Ai = (e) => e !== void 0 && (e.r === void 0 || e.r >= 0 && e.r <= 1) && (e.g === void 0 || e.g >= 0 && e.g <= 1) && (e.b === void 0 || e.b >= 0 && e.b <= 1);
function Da(e) {
  return Ai(qi(e));
}
function Ii(e = "rgb") {
  const { gamut: t } = We(e);
  if (!t)
    return (i) => !0;
  const n = E(typeof t == "string" ? t : e);
  return (i) => Ai(n(i));
}
function Za(e = "rgb") {
  const { gamut: t } = We(e);
  if (!t)
    return (a) => Ye(a);
  const n = typeof t == "string" ? t : e, i = E(n), r = Ii(n);
  return (a) => {
    const o = Ye(a);
    if (!o)
      return;
    const s = i(o);
    if (r(s))
      return o;
    const f = Ri(s);
    return o.mode === f.mode ? f : E(o.mode)(f);
  };
}
function Ba(e, t = "lch", n = "rgb") {
  e = Ye(e);
  let i = n === "rgb" ? Da : Ii(n), r = n === "rgb" ? Ya : Za(n);
  if (e === void 0 || i(e)) return e;
  let a = E(e.mode);
  e = E(t)(e);
  let o = { ...e, c: 0 };
  if (!i(o))
    return a(r(o));
  let s = 0, f = e.c !== void 0 ? e.c : 0, h = We(t).ranges.c, g = (h[1] - h[0]) / Math.pow(2, 13), m = o.c;
  for (; f - s > g; )
    o.c = s + (f - s) * 0.5, i(o) ? (m = o.c, s = o.c) : f = o.c;
  return a(
    i(o) ? o : { ...o, c: m }
  );
}
y(zr);
y(Hr);
y(Pr);
y(Er);
y(Ar);
y(gi);
y(vi);
y(Gr);
y(Jr);
y(Vr);
y(Qr);
y(bn);
y(ta);
y(gn);
y(ia);
y(ua);
y(ha);
y(ba);
y(xa);
y(va);
y(Ma);
const vn = y(wa);
y($a);
y(za);
y(Na);
y(he);
y(La);
y(Ha);
y(qa);
y(Ia);
const Ga = E("rgb");
function Ja(e, t) {
  const n = e.getContext("2d", { willReadFrequently: !0 });
  if (!n) return;
  const { width: i, height: r } = e, a = n.createImageData(i, r), o = a.data;
  for (let s = 0; s < r; s++) {
    const f = 1 - s / (r - 1 || 1);
    for (let h = 0; h < i; h++) {
      const g = h / (i - 1 || 1), m = Ga({ mode: "hsv", h: t, s: g, v: f, alpha: 1 }), x = (s * i + h) * 4;
      if (!m) {
        o[x] = o[x + 1] = o[x + 2] = 0, o[x + 3] = 255;
        continue;
      }
      o[x] = Math.round(It((m.r ?? 0) * 255)), o[x + 1] = Math.round(It((m.g ?? 0) * 255)), o[x + 2] = Math.round(It((m.b ?? 0) * 255)), o[x + 3] = 255;
    }
  }
  n.putImageData(a, 0, 0);
}
function It(e) {
  return Math.min(255, Math.max(0, e));
}
const Ie = E("rgb"), yn = E("hsv"), Ua = E("hsl");
function X(e) {
  const t = Se(e.l ?? 0), n = Math.max(0, e.c ?? 0), i = Qa(e.h ?? 0), r = Se(e.alpha ?? 1), a = Ba({ mode: "oklch", l: t, c: n, h: i, alpha: r }, "rgb");
  return {
    l: a.l ?? t,
    c: a.c ?? 0,
    h: a.h ?? i,
    alpha: a.alpha ?? r
  };
}
function pe(e) {
  const t = di(e.trim());
  if (!t) return null;
  const n = vn(t);
  return (n == null ? void 0 : n.l) == null ? null : X({
    l: n.l,
    c: n.c ?? 0,
    h: n.h ?? 0,
    alpha: n.alpha ?? 1
  });
}
function Qn(e) {
  const { l: t, c: n, h: i, alpha: r } = e;
  return r >= 1 ? `oklch(${(t * 100).toFixed(1)}% ${n.toFixed(4)} ${i.toFixed(1)})` : `oklch(${(t * 100).toFixed(1)}% ${n.toFixed(4)} ${i.toFixed(1)} / ${Math.round(r * 100)}%)`;
}
function Ce(e) {
  return ja(Ie({ mode: "oklch", ...e })) ?? "#000000";
}
function p0(e) {
  const { r: t, g: n, b: i } = Mn(e);
  return e.alpha < 1 ? `rgba(${t}, ${n}, ${i}, ${e.alpha.toFixed(2)})` : `rgb(${t}, ${n}, ${i})`;
}
function Mn(e) {
  const t = Ie({ mode: "oklch", ...e, alpha: 1 });
  return t ? {
    r: Math.round((t.r ?? 0) * 255),
    g: Math.round((t.g ?? 0) * 255),
    b: Math.round((t.b ?? 0) * 255)
  } : { r: 0, g: 0, b: 0 };
}
function Wa(e) {
  const { r: t, g: n, b: i } = Mn(e);
  return `linear-gradient(to right, rgba(${t}, ${n}, ${i}, 0), rgb(${t}, ${n}, ${i}))`;
}
function Xt(e) {
  const t = yn({ mode: "oklch", ...e, alpha: 1 });
  return (t == null ? void 0 : t.h) ?? e.h;
}
function Ka(e, t) {
  const n = yn({ mode: "oklch", ...e, alpha: 1 }), i = vn(Ie({ mode: "hsv", h: t, s: (n == null ? void 0 : n.s) ?? 0, v: (n == null ? void 0 : n.v) ?? 1, alpha: 1 }) ?? { mode: "hsv", h: t, s: (n == null ? void 0 : n.s) ?? 0, v: (n == null ? void 0 : n.v) ?? 1 });
  return (i == null ? void 0 : i.l) == null ? X({ ...e, h: t }) : X({
    l: i.l,
    c: i.c ?? 0,
    h: i.h ?? t,
    alpha: e.alpha
  });
}
function ei(e, t) {
  switch (t) {
    case "hex":
      return [{ key: "hex", label: "HEX CODE", value: Ce(e).replace("#", "").toUpperCase() }];
    case "rgb": {
      const n = Ie({ mode: "oklch", ...e });
      return [
        { key: "r", label: "R", value: String(Math.round((n.r ?? 0) * 255)), min: 0, max: 255 },
        { key: "g", label: "G", value: String(Math.round((n.g ?? 0) * 255)), min: 0, max: 255 },
        { key: "b", label: "B", value: String(Math.round((n.b ?? 0) * 255)), min: 0, max: 255 }
      ];
    }
    case "hsl": {
      const n = Ua({ mode: "oklch", ...e });
      return [
        { key: "h", label: "H", value: String(Math.round((n == null ? void 0 : n.h) ?? 0)), min: 0, max: 360 },
        {
          key: "s",
          label: "S",
          value: String(Math.round(((n == null ? void 0 : n.s) ?? 0) * 100)),
          min: 0,
          max: 100,
          suffix: "%"
        },
        {
          key: "l",
          label: "L",
          value: String(Math.round(((n == null ? void 0 : n.l) ?? 0) * 100)),
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
function Va(e, t, n) {
  switch (e) {
    case "hex": {
      const i = (t.hex ?? "").trim().replace(/^#/, "");
      if (!/^[0-9a-fA-F]{3,8}$/.test(i)) return null;
      const r = pe(`#${i}`);
      return r ? Ft(r, n.alpha) : null;
    }
    case "rgb": {
      const i = Number(t.r), r = Number(t.g), a = Number(t.b);
      if ([i, r, a].some((s) => Number.isNaN(s))) return null;
      const o = pe(`rgb(${Ot(i)}, ${Ot(r)}, ${Ot(a)})`);
      return o ? Ft(o, n.alpha) : null;
    }
    case "hsl": {
      const i = jt(t.h), r = jt(t.s), a = jt(t.l);
      if ([i, r, a].some((s) => Number.isNaN(s))) return null;
      const o = pe(`hsl(${i}, ${ti(r)}%, ${ti(a)}%)`);
      return o ? Ft(o, n.alpha) : null;
    }
    case "oklch": {
      const i = Number(t.l), r = Number(t.c), a = Number(t.h);
      return [i, r, a].some((o) => Number.isNaN(o)) ? null : X({ l: i / 100, c: r, h: a, alpha: n.alpha });
    }
  }
}
function Ft(e, t) {
  return { ...e, alpha: Se(t) };
}
function Se(e) {
  return Math.min(1, Math.max(0, e));
}
function Ot(e) {
  return Math.min(255, Math.max(0, Math.round(e)));
}
function ti(e) {
  return Math.min(100, Math.max(0, e));
}
function jt(e) {
  return Number(e.replace(/%/g, "").trim());
}
function Qa(e) {
  const t = e % 360;
  return t < 0 ? t + 360 : t;
}
function e0(e) {
  const t = yn({ mode: "oklch", ...e, alpha: 1 });
  return { x: (t == null ? void 0 : t.s) ?? 0, y: 1 - ((t == null ? void 0 : t.v) ?? 0) };
}
function t0(e, t, n, i) {
  const r = Se(e), a = Se(t), o = vn(
    Ie({ mode: "hsv", h: n, s: r, v: 1 - a, alpha: 1 }) ?? {
      mode: "hsv",
      h: n,
      s: r,
      v: 1 - a
    }
  );
  return (o == null ? void 0 : o.l) != null ? X({
    l: o.l,
    c: o.c ?? 0,
    h: o.h ?? n,
    alpha: i
  }) : X({ l: 0.5, c: 0, h: n, alpha: i });
}
const n0 = {
  l: 0.62,
  c: 0.24,
  h: 303,
  alpha: 0.8
}, Xi = "pretty-color-picker-history", Fi = 16;
function Oi(e, t) {
  return Ce(e) === Ce(t) && e.alpha === t.alpha;
}
function i0() {
  try {
    const e = localStorage.getItem(Xi);
    if (!e) return [];
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.slice(0, Fi) : [];
  } catch {
    return [];
  }
}
function r0(e, t) {
  const n = t.filter((r) => !Oi(r, e)), i = [e, ...n].slice(0, Fi);
  try {
    localStorage.setItem(Xi, JSON.stringify(i));
  } catch {
  }
  return i;
}
function ni(e, t) {
  const n = t.getBoundingClientRect(), i = ii((e.clientX - n.left) / n.width), r = ii((e.clientY - n.top) / n.height);
  return { x: i, y: r };
}
function Yt(e, t, n, i) {
  let r = !1;
  const a = (f) => {
    if (!r) return;
    const { x: h, y: g } = ni(f, e);
    t(h, g);
  }, o = (f) => {
    if (r) {
      if (r = !1, (f == null ? void 0 : f.pointerId) != null)
        try {
          e.releasePointerCapture(f.pointerId);
        } catch {
        }
      window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", o), n == null || n();
    }
  }, s = (f) => {
    if (f.button !== 0) return;
    r = !0, e.setPointerCapture(f.pointerId), i == null || i();
    const { x: h, y: g } = ni(f, e);
    t(h, g), window.addEventListener("pointermove", a), window.addEventListener("pointerup", o), window.addEventListener("pointercancel", o);
  };
  return e.addEventListener("pointerdown", s), () => {
    e.removeEventListener("pointerdown", s), window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", o);
  };
}
function ii(e) {
  return Math.min(1, Math.max(0, e));
}
const ri = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
  <circle cx="8" cy="8" r="3.25" stroke="currentColor" stroke-width="1.5" />
  <path
    d="M8 2.25v1.75M8 12v1.75M2.25 8h1.75M12 8h1.75M4.1 4.1l1.24 1.24M10.66 10.66l1.24 1.24M4.1 11.9l1.24-1.24M10.66 5.34l1.24-1.24"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
</svg>`, a0 = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
  <path
    d="M12.38 10.25a4.75 4.75 0 1 1-3.63-8.13 5.5 5.5 0 1 0 3.63 8.13z"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linejoin="round"
  />
</svg>`, o0 = ["hex", "rgb", "hsl", "oklch"], s0 = {
  hex: "HEX",
  rgb: "RGB",
  hsl: "HSL",
  oklch: "OKLCH"
};
var $, v, R, G, ce, A, Le, He, J, F, q, O, Pe, j, fe, te, Ee, Y, ne, U, d, ji, Yi, Di, se, Kt, Zi, Oe, Vt, ze, Bi, Gi, Ji, Ui, Qt, en, ee, _e, tn, nn, je, rn, an, Wi, Ki, on, Vi, sn, ln, dn, pn, le, Qi;
class l0 extends HTMLElement {
  constructor() {
    super();
    w(this, d);
    w(this, $);
    w(this, v, { ...n0 });
    w(this, R, "hsl");
    w(this, G, i0());
    w(this, ce, null);
    w(this, A, []);
    w(this, Le);
    w(this, He);
    w(this, J);
    w(this, F);
    w(this, q);
    w(this, O);
    w(this, Pe);
    w(this, j);
    w(this, fe);
    w(this, te);
    w(this, Ee);
    w(this, Y);
    w(this, ne);
    w(this, U, null);
    M(this, $, this.attachShadow({ mode: "open" }));
  }
  static get observedAttributes() {
    return ["value", "theme", "header-action"];
  }
  connectedCallback() {
    u(this, d, Yi).call(this), u(this, d, Di).call(this), u(this, d, ji).call(this), u(this, d, _e).call(this);
  }
  disconnectedCallback() {
    l(this, A).forEach((n) => n()), M(this, A, []);
  }
  attributeChangedCallback(n, i, r) {
    if (this.isConnected) {
      if (n === "value" && r != null) {
        const a = pe(r);
        a && (M(this, v, a), u(this, d, _e).call(this, !1));
        return;
      }
      n === "theme" && u(this, d, Oe).call(this);
    }
  }
  get value() {
    return Qn(l(this, v));
  }
  set value(n) {
    const i = pe(n);
    i && (M(this, v, i), u(this, d, _e).call(this));
  }
  get color() {
    return { ...l(this, v) };
  }
  set color(n) {
    M(this, v, X(n)), u(this, d, _e).call(this);
  }
  get theme() {
    const n = this.getAttribute("theme");
    return n === "light" || n === "system" ? n : "dark";
  }
  set theme(n) {
    this.setAttribute("theme", n);
  }
  get headerAction() {
    return this.getAttribute("header-action") === "theme" ? "theme" : "close";
  }
  set headerAction(n) {
    this.setAttribute("header-action", n);
  }
}
$ = new WeakMap(), v = new WeakMap(), R = new WeakMap(), G = new WeakMap(), ce = new WeakMap(), A = new WeakMap(), Le = new WeakMap(), He = new WeakMap(), J = new WeakMap(), F = new WeakMap(), q = new WeakMap(), O = new WeakMap(), Pe = new WeakMap(), j = new WeakMap(), fe = new WeakMap(), te = new WeakMap(), Ee = new WeakMap(), Y = new WeakMap(), ne = new WeakMap(), U = new WeakMap(), d = new WeakSet(), ji = function() {
  const n = this.getAttribute("value");
  if (n) {
    const i = pe(n);
    i && M(this, v, i);
  }
}, Yi = function() {
  const n = this.headerAction === "theme" ? `<button type="button" class="pcp-header-btn pcp-theme-toggle" aria-label="Switch to light mode">${ri}</button>` : `<button type="button" class="pcp-header-btn pcp-close" aria-label="Close">
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
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap" />
      <style>${ir}</style>
      <div class="pcp" part="container">
        <header class="pcp-header">
          <h2 class="pcp-title">Pretty Color Picker</h2>
          ${n}
        </header>
        <div class="pcp-plane-wrap pcp-clip">
          <canvas class="pcp-plane" width="256" height="192" aria-label="Color plane"></canvas>
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
          ${o0.map((i) => `<button type="button" class="pcp-tab" role="tab" data-format="${i}">${s0[i]}</button>`).join("")}
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
    `, M(this, Le, l(this, $).querySelector(".pcp-plane")), M(this, He, l(this, $).querySelector(".pcp-plane-wrap")), M(this, J, l(this, $).querySelector(".pcp-cursor")), M(this, F, l(this, $).querySelector(".pcp-hue-row")), M(this, q, l(this, F).querySelector(".pcp-slider-handle")), M(this, O, l(this, $).querySelector(".pcp-alpha-row")), M(this, Pe, l(this, $).querySelector(".pcp-slider-fill-alpha")), M(this, j, l(this, O).querySelector(".pcp-slider-handle")), M(this, fe, l(this, $).querySelector(".pcp-tabs-pill")), M(this, te, l(this, $).querySelector(".pcp-fields")), M(this, Ee, l(this, $).querySelector(".pcp-swatch-fill")), M(this, Y, l(this, $).querySelector(".pcp-alpha-input")), M(this, ne, l(this, $).querySelector(".pcp-history")), M(this, U, l(this, $).querySelector(".pcp-theme-toggle")), u(this, d, Oe).call(this);
}, Di = function() {
  var i;
  const n = l(this, $).querySelector(".pcp-close");
  n == null || n.addEventListener("click", () => {
    this.dispatchEvent(new CustomEvent("close", { bubbles: !0, composed: !0 }));
  }), (i = l(this, U)) == null || i.addEventListener("click", () => u(this, d, Zi).call(this)), l(this, A).push(
    Yt(
      l(this, He),
      (r, a) => u(this, d, Bi).call(this, r, a),
      () => u(this, d, le).call(this),
      () => u(this, d, se).call(this)
    )
  ), l(this, A).push(
    Yt(
      l(this, F),
      (r) => u(this, d, Gi).call(this, r),
      () => u(this, d, le).call(this),
      () => u(this, d, se).call(this)
    )
  ), l(this, A).push(
    Yt(
      l(this, O),
      (r) => u(this, d, Ji).call(this, r),
      () => u(this, d, le).call(this),
      () => u(this, d, se).call(this)
    )
  ), l(this, A).push(u(this, d, Vt).call(this, l(this, F))), l(this, A).push(u(this, d, Vt).call(this, l(this, O))), l(this, $).querySelectorAll(".pcp-tab").forEach((r) => {
    r.addEventListener("click", () => {
      const a = r.dataset.format;
      a && a !== l(this, R) && (M(this, R, a), u(this, d, je).call(this), u(this, d, dn).call(this), u(this, d, ln).call(this), u(this, d, rn).call(this));
    });
  }), l(this, Y).addEventListener("focus", () => u(this, d, se).call(this)), l(this, Y).addEventListener("change", () => u(this, d, Qt).call(this)), l(this, Y).addEventListener("keydown", (r) => {
    r.key === "Enter" && u(this, d, Qt).call(this);
  });
}, se = function() {
  M(this, ce, { ...l(this, v) });
}, Kt = function() {
  return this.theme === "light" ? "light" : this.theme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}, Zi = function() {
  const n = u(this, d, Kt).call(this) === "light" ? "dark" : "light";
  this.theme = n, u(this, d, Oe).call(this);
  const i = { theme: n };
  this.dispatchEvent(
    new CustomEvent("themechange", {
      detail: i,
      bubbles: !0,
      composed: !0
    })
  );
}, Oe = function() {
  if (!l(this, U)) return;
  const n = u(this, d, Kt).call(this) === "light";
  l(this, U).innerHTML = n ? a0 : ri, l(this, U).setAttribute(
    "aria-label",
    n ? "Switch to dark mode" : "Switch to light mode"
  );
}, Vt = function(n) {
  const i = () => {
    n.dataset.active = "true";
  }, r = () => {
    const a = n.querySelector(".pcp-slider-handle");
    a != null && a.hasAttribute("data-dragging") || delete n.dataset.active;
  };
  return n.addEventListener("pointerenter", i), n.addEventListener("pointerleave", r), () => {
    n.removeEventListener("pointerenter", i), n.removeEventListener("pointerleave", r);
  };
}, ze = function(n, i) {
  const r = Math.max(0, Math.min(1, i)) * 100;
  n.style.left = `max(1px, calc(${r}% - 1.5px))`;
}, Bi = function(n, i) {
  l(this, J).dataset.dragging = "true";
  const r = u(this, d, nn).call(this);
  u(this, d, ee).call(this, t0(n, i, r, l(this, v).alpha), !0), u(this, d, an).call(this, n, i);
}, Gi = function(n) {
  l(this, F).dataset.active = "true", l(this, q).dataset.dragging = "true", u(this, d, ze).call(this, l(this, q), n);
  const i = n * 360;
  u(this, d, ee).call(this, Ka(l(this, v), i), !0);
}, Ji = function(n) {
  l(this, O).dataset.active = "true", l(this, j).dataset.dragging = "true", u(this, d, ee).call(this, X({ ...l(this, v), alpha: n }), !0), u(this, d, ze).call(this, l(this, j), n);
}, Ui = function() {
  const i = l(this, q).style.left.match(/calc\(([\d.]+)%/);
  return i ? parseFloat(i[1]) / 100 * 360 : Xt(l(this, v));
}, Qt = function() {
  const n = l(this, Y).value.replace(/%/g, "").trim(), i = Number(n);
  if (Number.isNaN(i)) {
    u(this, d, sn).call(this);
    return;
  }
  u(this, d, ee).call(this, X({ ...l(this, v), alpha: i / 100 }), !0), u(this, d, le).call(this);
}, en = function(n, i) {
  const r = {};
  ei(l(this, v), l(this, R)).forEach((o) => {
    r[o.key] = o.key === n ? i : o.value;
  });
  const a = Va(l(this, R), r, l(this, v));
  a && (u(this, d, ee).call(this, a, !0), u(this, d, le).call(this));
}, ee = function(n, i = !0, r) {
  M(this, v, X(n)), u(this, d, tn).call(this, i, r);
}, _e = function(n = !0) {
  u(this, d, je).call(this), u(this, d, dn).call(this), u(this, d, tn).call(this, n), u(this, d, pn).call(this);
}, tn = function(n, i) {
  (i == null ? void 0 : i.refreshFields) !== !1 && u(this, d, ln).call(this), u(this, d, Vi).call(this), u(this, d, Wi).call(this), u(this, d, rn).call(this), u(this, d, je).call(this), n && u(this, d, Qi).call(this);
}, nn = function() {
  return l(this, q).hasAttribute("data-dragging") ? u(this, d, Ui).call(this) : Xt(l(this, v));
}, je = function() {
  Ja(l(this, Le), u(this, d, nn).call(this));
}, rn = function() {
  const { x: n, y: i } = e0(l(this, v));
  u(this, d, an).call(this, n, i);
}, an = function(n, i) {
  l(this, J).style.left = `${n * 100}%`, l(this, J).style.top = `${i * 100}%`;
}, Wi = function() {
  const n = Xt(l(this, v));
  l(this, q).hasAttribute("data-dragging") || u(this, d, ze).call(this, l(this, q), n / 360), l(this, j).hasAttribute("data-dragging") || u(this, d, ze).call(this, l(this, j), l(this, v).alpha), u(this, d, Ki).call(this);
}, Ki = function() {
  l(this, Pe).style.setProperty("--pcp-alpha-gradient", Wa(l(this, v)));
}, on = function(n, i) {
  const { r, g: a, b: o } = Mn(i);
  n.style.setProperty("--swatch-solid", `rgb(${r}, ${a}, ${o})`), n.style.setProperty("--swatch-alpha", `rgba(${r}, ${a}, ${o}, ${i.alpha})`);
}, Vi = function() {
  u(this, d, on).call(this, l(this, Ee), l(this, v));
}, sn = function() {
  l(this, Y).value = `${Math.round(l(this, v).alpha * 100)}%`;
}, ln = function() {
  const n = ei(l(this, v), l(this, R));
  l(this, te).dataset.format = l(this, R), l(this, te).innerHTML = n.map(
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
  ).join(""), l(this, te).querySelectorAll(".pcp-field-input").forEach((i) => {
    const r = i, a = r.dataset.key;
    r.addEventListener("focus", () => u(this, d, se).call(this)), r.addEventListener("change", () => u(this, d, en).call(this, a, r.value)), r.addEventListener("keydown", (o) => {
      o.key === "Enter" && u(this, d, en).call(this, a, r.value);
    });
  }), u(this, d, sn).call(this);
}, dn = function() {
  const n = l(this, $).querySelectorAll(".pcp-tab");
  let i = null;
  if (n.forEach((r) => {
    const a = r.dataset.format === l(this, R);
    r.setAttribute("data-active", String(a)), r.setAttribute("aria-selected", String(a)), a && (i = r);
  }), i) {
    const r = i, a = r.offsetLeft, o = r.offsetWidth;
    l(this, fe).style.left = `${a}px`, l(this, fe).style.width = `${o}px`;
  }
}, pn = function() {
  l(this, ne).innerHTML = l(this, G).map((n, i) => `
          <button type="button" class="pcp-history-swatch pcp-clip" data-index="${i}" aria-label="Color ${Ce(n)}">
            <span class="pcp-swatch-fill" data-history-fill="${i}"></span>
          </button>
        `).join(""), l(this, ne).querySelectorAll("[data-history-fill]").forEach((n) => {
    const i = Number(n.dataset.historyFill), r = l(this, G)[i];
    r && u(this, d, on).call(this, n, r);
  }), l(this, ne).querySelectorAll(".pcp-history-swatch").forEach((n) => {
    n.addEventListener("click", () => {
      const i = Number(n.dataset.index), r = l(this, G)[i];
      r && u(this, d, ee).call(this, { ...r }, !0, { refreshFields: !0 });
    });
  });
}, le = function() {
  delete l(this, J).dataset.dragging, delete l(this, q).dataset.dragging, delete l(this, j).dataset.dragging, delete l(this, F).dataset.active, delete l(this, O).dataset.active;
  const n = l(this, ce);
  M(this, ce, null), n && !Oi(n, l(this, v)) && M(this, G, r0(n, l(this, G))), u(this, d, pn).call(this);
}, Qi = function() {
  const n = {
    color: { ...l(this, v) },
    css: Qn(l(this, v)),
    hex: Ce(l(this, v))
  };
  this.dispatchEvent(
    new CustomEvent("change", {
      detail: n,
      bubbles: !0,
      composed: !0
    })
  );
};
customElements.get("pretty-color-picker") || customElements.define("pretty-color-picker", l0);
export {
  n0 as DEFAULT_COLOR,
  l0 as PrettyColorPicker,
  ei as formatFieldsFor,
  X as normalizeOklch,
  pe as oklchFromCss,
  Qn as oklchToCss,
  Ce as oklchToHex,
  p0 as oklchToRgbString,
  Va as parseFormatFields
};
