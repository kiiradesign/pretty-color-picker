var kn = (e) => {
  throw TypeError(e);
};
var pt = (e, t, n) => t.has(e) || kn("Cannot " + n);
var l = (e, t, n) => (pt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), w = (e, t, n) => t.has(e) ? kn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), k = (e, t, n, r) => (pt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), u = (e, t, n) => (pt(e, t, "access private method"), n);
const Br = ':host{--pcp-radius-sm: 6px;--pcp-radius: 8px;--pcp-radius-lg: 12px;--pcp-control-height: 28px;--pcp-tab-row-height: 36px;--pcp-field-label-size: 11px;--pcp-field-label-line: 13px;--pcp-field-label-gap: 4px;--pcp-field-value-size: 13px;--pcp-field-value-line: 18px;--pcp-field-input-height: 21px;--pcp-input-panel-height: calc( var(--pcp-field-label-line) + var(--pcp-field-label-gap) + var(--pcp-field-input-height) );--pcp-input-row-padding: 8px;--pcp-field-input-radius: var(--pcp-radius-sm);--pcp-icon-button-size: 32px;--pcp-icon-button-radius: var(--pcp-radius-sm);--pcp-title-size: 14px;--pcp-title-line: 20px;--pcp-title-weight: 600;--pcp-title-tracking: -.28px;--pcp-ease-out: cubic-bezier(.175, .885, .32, 1.1);--pcp-font: "Geist", system-ui, -apple-system, "SF Pro Display", sans-serif;--pcp-mono: "Geist Mono", ui-monospace, monospace;display:inline-block;font-family:var(--pcp-font);-webkit-font-smoothing:antialiased;color:var(--pcp-text-primary)}:host,:host([theme="dark"]){color-scheme:dark;--pcp-bg: #1a1a1a;--pcp-border: #2e2e2e;--pcp-border-hover: #454545;--pcp-surface: #1f1f1f;--pcp-surface-hover: #292929;--pcp-surface-active: #292929;--pcp-surface-subtle: #2e2e2e;--pcp-tab-pill: #292929;--pcp-text-primary: #ededed;--pcp-text-label: #a0a0a0;--pcp-text-tertiary: #8f8f8f;--pcp-text-focus: #ffffff;--pcp-checker-base: #999999;--pcp-checker-tone: #888888;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: none}:host([theme="light"]){color-scheme:light;--pcp-bg: #ffffff;--pcp-border: #eaeaea;--pcp-border-hover: #c9c9c9;--pcp-surface: #f2f2f2;--pcp-surface-hover: #ebebeb;--pcp-surface-active: #e6e6e6;--pcp-surface-subtle: #eaeaea;--pcp-tab-pill: #ebebeb;--pcp-text-primary: #171717;--pcp-text-label: #4d4d4d;--pcp-text-tertiary: #8f8f8f;--pcp-text-focus: #171717;--pcp-checker-base: #ffffff;--pcp-checker-tone: #e6e6e6;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 2px 2px rgba(0, 0, 0, .04)}@media(prefers-color-scheme:dark){:host([theme="system"]){color-scheme:dark;--pcp-bg: #1a1a1a;--pcp-border: #2e2e2e;--pcp-border-hover: #454545;--pcp-surface: #1f1f1f;--pcp-surface-hover: #292929;--pcp-surface-active: #292929;--pcp-surface-subtle: #2e2e2e;--pcp-tab-pill: #292929;--pcp-text-primary: #ededed;--pcp-text-label: #a0a0a0;--pcp-text-tertiary: #8f8f8f;--pcp-text-focus: #ffffff;--pcp-checker-base: #999999;--pcp-checker-tone: #888888;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: none}}@media(prefers-color-scheme:light){:host([theme="system"]){color-scheme:light;--pcp-bg: #ffffff;--pcp-border: #eaeaea;--pcp-border-hover: #c9c9c9;--pcp-surface: #f2f2f2;--pcp-surface-hover: #ebebeb;--pcp-surface-active: #e6e6e6;--pcp-surface-subtle: #eaeaea;--pcp-tab-pill: #ebebeb;--pcp-text-primary: #171717;--pcp-text-label: #4d4d4d;--pcp-text-tertiary: #8f8f8f;--pcp-text-focus: #171717;--pcp-checker-base: #ffffff;--pcp-checker-tone: #e6e6e6;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 2px 2px rgba(0, 0, 0, .04)}}*,*:before,*:after{box-sizing:border-box}.pcp-clip{overflow:hidden;isolation:isolate;transform:translateZ(0)}.pcp-swatch-fill{display:block;width:100%;height:100%;border-radius:inherit;background-color:var(--pcp-checker-base);background-image:linear-gradient(to right,var(--swatch-solid, #000) 50%,transparent 50%),linear-gradient(to right,transparent 50%,var(--swatch-alpha, rgba(0, 0, 0, .5)) 50%),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,100% 100%,5px 5px,5px 5px,5px 5px,5px 5px;background-position:0 0,0 0,0 0,0 2.5px,2.5px -2.5px,-2.5px 0}.pcp{width:280px;background:var(--pcp-bg);border:1px solid var(--pcp-border);border-radius:var(--pcp-radius-lg);box-shadow:var(--pcp-elevation);padding:12px;-webkit-user-select:none;user-select:none}.pcp-header{display:flex;align-items:center;justify-content:space-between;gap:8px;padding-bottom:6px;margin-bottom:12px;min-height:var(--pcp-icon-button-size);border-bottom:1px solid var(--pcp-surface-subtle)}.pcp-title{flex:1;min-width:0;font-family:var(--pcp-font);font-size:var(--pcp-title-size);font-weight:var(--pcp-title-weight);line-height:var(--pcp-title-line);letter-spacing:var(--pcp-title-tracking);color:var(--pcp-text-primary);margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pcp-close{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--pcp-icon-button-size);height:var(--pcp-icon-button-size);padding:0;border:none;border-radius:var(--pcp-icon-button-radius);background:transparent;color:var(--pcp-text-label);cursor:pointer;transition:background .15s var(--pcp-ease-out),color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-close svg{width:16px;height:16px;flex-shrink:0}@media(hover:hover)and (pointer:fine){.pcp-close:hover{background:var(--pcp-surface-hover);color:var(--pcp-text-primary)}}.pcp-close:active{background:var(--pcp-surface-active);transform:scale(.97)}.pcp-close:focus{outline:none}.pcp-close:focus-visible{box-shadow:0 0 0 2px var(--pcp-bg),0 0 0 4px var(--pcp-focus-ring)}.pcp-plane-wrap{position:relative;width:100%;aspect-ratio:4 / 3;border-radius:var(--pcp-radius-sm);margin-bottom:8px;cursor:crosshair;touch-action:none}.pcp-plane{display:block;width:100%;height:100%}.pcp-cursor{position:absolute;width:16px;height:16px;margin:-8px 0 0 -8px;border:2px solid var(--pcp-cursor-ring);border-radius:50%;box-shadow:0 0 0 1px var(--pcp-cursor-outline),inset 0 0 0 1px #0000001f;pointer-events:none}.pcp-cursor[data-dragging=true]{transition:none}.pcp-slider-wrapper{position:relative;height:var(--pcp-control-height);margin-bottom:8px}.pcp-slider{position:absolute;top:0;right:0;bottom:0;left:0;cursor:pointer;-webkit-user-select:none;user-select:none;border-radius:var(--pcp-radius-sm);background:transparent;touch-action:none}.pcp-slider-fill{position:absolute;top:-1px;right:-1px;bottom:-1px;left:-1px;border-radius:var(--pcp-radius-sm);pointer-events:none}.pcp-slider-fill-hue{background:linear-gradient(to right,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.pcp-slider-fill-alpha{--pcp-alpha-gradient: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));background-color:var(--pcp-checker-base);background-image:var(--pcp-alpha-gradient),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,6px 6px,6px 6px,6px 6px,6px 6px;background-position:0 0,0 0,0 3px,3px -3px,-3px 0}.pcp-slider-handle{position:absolute;top:50%;left:0;z-index:1;width:3px;height:20px;border:none;outline:none;border-radius:999px;background:var(--pcp-text-primary);pointer-events:none;transform:translateY(-50%) scaleX(.25);transform-origin:center center;opacity:0;box-shadow:none;filter:none;transition:transform .25s cubic-bezier(.34,1.15,.64,1),opacity .15s ease}.pcp-slider:hover .pcp-slider-handle,.pcp-slider[data-active=true] .pcp-slider-handle{transform:translateY(-50%) scaleX(1);opacity:.5}.pcp-slider-handle[data-dragging=true]{transform:translateY(-50%) scaleX(1);opacity:.9;transition:opacity .15s ease}@media(hover:hover)and (pointer:fine){.pcp-slider:hover .pcp-slider-handle:not([data-dragging=true]){transform:translateY(-50%) scaleX(1);opacity:.5}}.pcp-tabs{position:relative;display:flex;align-items:center;height:var(--pcp-tab-row-height);box-sizing:border-box;padding:2px;margin-bottom:10px;background:transparent;border-radius:var(--pcp-radius)}.pcp-tabs-pill{position:absolute;top:2px;bottom:2px;background:var(--pcp-tab-pill);border-radius:6px;z-index:0;pointer-events:none;transition:left .2s var(--pcp-ease-out),width .2s var(--pcp-ease-out)}.pcp-tab{position:relative;z-index:1;flex:1;display:flex;align-items:center;justify-content:center;height:100%;padding:0 4px;font-family:inherit;font-size:13px;font-weight:500;line-height:1;text-align:center;background:transparent;border:none;color:var(--pcp-text-label);cursor:pointer;transition:color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-tab[data-active=true]{color:var(--pcp-text-primary)}.pcp-tab:active{transform:scale(.97)}.pcp-inputs{display:flex;align-items:center;gap:8px;margin-bottom:14px;padding:var(--pcp-input-row-padding);background:var(--pcp-surface);border-radius:var(--pcp-radius-sm)}.pcp-swatch{flex-shrink:0;width:var(--pcp-input-panel-height);height:var(--pcp-input-panel-height);border-radius:var(--pcp-radius-sm);position:relative}.pcp-fields{display:flex;flex:1;gap:4px;min-width:0;align-items:center}.pcp-field{flex:1;min-width:0;display:flex;flex-direction:column;align-items:stretch;justify-content:center;gap:var(--pcp-field-label-gap)}.pcp-field-label{display:block;font-size:var(--pcp-field-label-size);font-weight:500;line-height:var(--pcp-field-label-line);color:var(--pcp-text-tertiary);margin:0;text-align:center}.pcp-field-input{width:100%;height:var(--pcp-field-input-height);padding:0 2px;font-family:var(--pcp-mono);font-size:var(--pcp-field-value-size);font-weight:500;line-height:var(--pcp-field-input-height);font-variant-numeric:tabular-nums;text-align:center;color:var(--pcp-text-label);background:transparent;border:none;border-radius:var(--pcp-field-input-radius);outline:none;box-shadow:none;transition:color .15s var(--pcp-ease-out),background .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-field-input:hover{background:var(--pcp-surface-hover)}}.pcp-field-input:focus{color:var(--pcp-text-focus);background:transparent;border-radius:var(--pcp-field-input-radius);box-shadow:none;outline:none}.pcp-field-input:active{background:var(--pcp-surface-active)}.pcp-alpha-field{flex:0 0 52px}.pcp-history-label{font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--pcp-text-tertiary);margin:0 0 8px}.pcp-history{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:6px}.pcp-history-swatch{-moz-appearance:none;appearance:none;-webkit-appearance:none;width:100%;aspect-ratio:1;height:auto;padding:0;border:none;background:none;border-radius:5px;cursor:pointer;transition:opacity .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-history-swatch:hover{opacity:.85}}.pcp-history-swatch:active{opacity:.7}@media(prefers-reduced-motion:reduce){.pcp-close,.pcp-tab,.pcp-tabs-pill,.pcp-cursor,.pcp-slider-handle,.pcp-history-swatch{transition:none}.pcp-tab:active,.pcp-close:active{transform:none}}', Qn = (e, t) => {
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
}, Ur = {
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
}, Wr = (e) => Qn(Ur[e.toLowerCase()], 6), Kr = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, Vr = (e) => {
  let t;
  return (t = e.match(Kr)) ? Qn(parseInt(t[1], 16), t[1].length) : void 0;
}, U = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", $e = `${U}%`, an = `(?:${U}%|${U})`, Qr = `(?:${U}(deg|grad|rad|turn)|${U})`, ce = "\\s*,\\s*", ea = new RegExp(
  `^rgba?\\(\\s*${U}${ce}${U}${ce}${U}\\s*(?:,\\s*${an}\\s*)?\\)$`
), ta = new RegExp(
  `^rgba?\\(\\s*${$e}${ce}${$e}${ce}${$e}\\s*(?:,\\s*${an}\\s*)?\\)$`
), na = (e) => {
  let t = { mode: "rgb" }, n;
  if (n = e.match(ea))
    n[1] !== void 0 && (t.r = n[1] / 255), n[2] !== void 0 && (t.g = n[2] / 255), n[3] !== void 0 && (t.b = n[3] / 255);
  else if (n = e.match(ta))
    n[1] !== void 0 && (t.r = n[1] / 100), n[2] !== void 0 && (t.g = n[2] / 100), n[3] !== void 0 && (t.b = n[3] / 100);
  else
    return;
  return n[4] !== void 0 ? t.alpha = Math.max(0, Math.min(1, n[4] / 100)) : n[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[5]))), t;
}, Fe = (e, t) => e === void 0 ? void 0 : typeof e != "object" ? rr(e) : e.mode !== void 0 ? e : t ? { ...e, mode: t } : void 0, E = (e = "rgb") => (t) => (t = Fe(t, e)) !== void 0 ? (
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
) : void 0, I = {}, er = {}, Oe = [], tr = {}, ra = (e) => e, v = (e) => (I[e.mode] = {
  ...I[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
  I[t] || (I[t] = {}), I[t][e.mode] = e.fromMode[t];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((t) => {
  if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t])
    throw new Error(`Missing interpolator for: ${t}`);
  typeof e.interpolate[t] == "function" && (e.interpolate[t] = {
    use: e.interpolate[t]
  }), e.interpolate[t].fixup || (e.interpolate[t].fixup = ra);
}), er[e.mode] = e, (e.parse || []).forEach((t) => {
  aa(t, e.mode);
}), E(e.mode)), Je = (e) => er[e], aa = (e, t) => {
  if (typeof e == "string") {
    if (!t)
      throw new Error("'mode' required when 'parser' is a string");
    tr[e] = t;
  } else typeof e == "function" && Oe.indexOf(e) < 0 && Oe.push(e);
}, Ft = /[^\x00-\x7F]|[a-zA-Z_]/, ia = /[^\x00-\x7F]|[-\w]/, d = {
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
function Re(e) {
  let t = e[b], n = e[b + 1];
  return t === "-" || t === "+" ? /\d/.test(n) || n === "." && /\d/.test(e[b + 2]) : t === "." ? /\d/.test(n) : /\d/.test(t);
}
function Ot(e) {
  if (b >= e.length)
    return !1;
  let t = e[b];
  if (Ft.test(t))
    return !0;
  if (t === "-") {
    if (e.length - b < 2)
      return !1;
    let n = e[b + 1];
    return !!(n === "-" || Ft.test(n));
  }
  return !1;
}
const oa = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function Me(e) {
  let t = "";
  if ((e[b] === "-" || e[b] === "+") && (t += e[b++]), t += Ie(e), e[b] === "." && /\d/.test(e[b + 1]) && (t += e[b++] + Ie(e)), (e[b] === "e" || e[b] === "E") && ((e[b + 1] === "-" || e[b + 1] === "+") && /\d/.test(e[b + 2]) ? t += e[b++] + e[b++] + Ie(e) : /\d/.test(e[b + 1]) && (t += e[b++] + Ie(e))), Ot(e)) {
    let n = je(e);
    return n === "deg" || n === "rad" || n === "turn" || n === "grad" ? { type: d.Hue, value: t * oa[n] } : void 0;
  }
  return e[b] === "%" ? (b++, { type: d.Percentage, value: +t }) : { type: d.Number, value: +t };
}
function Ie(e) {
  let t = "";
  for (; /\d/.test(e[b]); )
    t += e[b++];
  return t;
}
function je(e) {
  let t = "";
  for (; b < e.length && ia.test(e[b]); )
    t += e[b++];
  return t;
}
function sa(e) {
  let t = je(e);
  return e[b] === "(" ? (b++, { type: d.Function, value: t }) : t === "none" ? { type: d.None, value: void 0 } : { type: d.Ident, value: t };
}
function la(e = "") {
  let t = e.trim(), n = [], r;
  for (b = 0; b < t.length; ) {
    if (r = t[b++], r === `
` || r === "	" || r === " ") {
      for (; b < t.length && (t[b] === `
` || t[b] === "	" || t[b] === " "); )
        b++;
      continue;
    }
    if (r === ",")
      return;
    if (r === ")") {
      n.push({ type: d.ParenClose });
      continue;
    }
    if (r === "+") {
      if (b--, Re(t)) {
        n.push(Me(t));
        continue;
      }
      return;
    }
    if (r === "-") {
      if (b--, Re(t)) {
        n.push(Me(t));
        continue;
      }
      if (Ot(t)) {
        n.push({ type: d.Ident, value: je(t) });
        continue;
      }
      return;
    }
    if (r === ".") {
      if (b--, Re(t)) {
        n.push(Me(t));
        continue;
      }
      return;
    }
    if (r === "/") {
      for (; b < t.length && (t[b] === `
` || t[b] === "	" || t[b] === " "); )
        b++;
      let a;
      if (Re(t) && (a = Me(t), a.type !== d.Hue)) {
        n.push({ type: d.Alpha, value: a });
        continue;
      }
      if (Ot(t) && je(t) === "none") {
        n.push({
          type: d.Alpha,
          value: { type: d.None, value: void 0 }
        });
        continue;
      }
      return;
    }
    if (/\d/.test(r)) {
      b--, n.push(Me(t));
      continue;
    }
    if (Ft.test(r)) {
      b--, n.push(sa(t));
      continue;
    }
    return;
  }
  return n;
}
function da(e) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== d.Function || t.value !== "color" || (t = e[e._i++], t.type !== d.Ident))
    return;
  const n = tr[t.value];
  if (!n)
    return;
  const r = { mode: n }, a = nr(e, !1);
  if (!a)
    return;
  const i = Je(n).channels;
  for (let o = 0, s, f; o < i.length; o++)
    s = a[o], f = i[o], s.type !== d.None && (r[f] = s.type === d.Number ? s.value : s.value / 100, f === "alpha" && (r[f] = Math.max(0, Math.min(1, r[f]))));
  return r;
}
function nr(e, t) {
  const n = [];
  let r;
  for (; e._i < e.length; ) {
    if (r = e[e._i++], r.type === d.None || r.type === d.Number || r.type === d.Alpha || r.type === d.Percentage || t && r.type === d.Hue) {
      n.push(r);
      continue;
    }
    if (r.type === d.ParenClose) {
      if (e._i < e.length)
        return;
      continue;
    }
    return;
  }
  if (!(n.length < 3 || n.length > 4)) {
    if (n.length === 4) {
      if (n[3].type !== d.Alpha)
        return;
      n[3] = n[3].value;
    }
    return n.length === 3 && n.push({ type: d.None, value: void 0 }), n.every((a) => a.type !== d.Alpha) ? n : void 0;
  }
}
function ca(e, t) {
  e._i = 0;
  let n = e[e._i++];
  if (!n || n.type !== d.Function)
    return;
  let r = nr(e, t);
  if (r)
    return r.unshift(n.value), r;
}
const rr = (e) => {
  if (typeof e != "string")
    return;
  const t = la(e), n = t ? ca(t, !0) : void 0;
  let r, a = 0, i = Oe.length;
  for (; a < i; )
    if ((r = Oe[a++](e, n)) !== void 0)
      return r;
  return t ? da(t) : void 0;
};
function pa(e, t) {
  if (!t || t[0] !== "rgb" && t[0] !== "rgba")
    return;
  const n = { mode: "rgb" }, [, r, a, i, o] = t;
  if (!(r.type === d.Hue || a.type === d.Hue || i.type === d.Hue))
    return r.type !== d.None && (n.r = r.type === d.Number ? r.value / 255 : r.value / 100), a.type !== d.None && (n.g = a.type === d.Number ? a.value / 255 : a.value / 100), i.type !== d.None && (n.b = i.type === d.Number ? i.value / 255 : i.value / 100), o.type !== d.None && (n.alpha = Math.min(
      1,
      Math.max(
        0,
        o.type === d.Number ? o.value : o.value / 100
      )
    )), n;
}
const fa = (e) => e === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0, ua = (e, t, n) => e + n * (t - e), ha = (e) => {
  let t = [];
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n], a = e[n + 1];
    r === void 0 && a === void 0 ? t.push(void 0) : r !== void 0 && a !== void 0 ? t.push([r, a]) : t.push(r !== void 0 ? [r, r] : [a, a]);
  }
  return t;
}, ba = (e) => (t) => {
  let n = ha(t);
  return (r) => {
    let a = r * n.length, i = r >= 1 ? n.length - 1 : Math.max(Math.floor(a), 0), o = n[i];
    return o === void 0 ? void 0 : e(o[0], o[1], a - i);
  };
}, p = ba(ua), T = (e) => {
  let t = !1, n = e.map((r) => r !== void 0 ? (t = !0, r) : 1);
  return t ? n : e;
}, pe = {
  mode: "rgb",
  channels: ["r", "g", "b", "alpha"],
  parse: [
    pa,
    Vr,
    na,
    Wr,
    fa,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: p,
    g: p,
    b: p,
    alpha: { use: p, fixup: T }
  },
  gamut: !0,
  white: { r: 1, g: 1, b: 1 },
  black: { r: 0, g: 0, b: 0 }
}, ft = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), wn = (e) => {
  let t = ft(e.r), n = ft(e.g), r = ft(e.b), a = {
    mode: "xyz65",
    x: 0.5766690429101305 * t + 0.1855582379065463 * n + 0.1882286462349947 * r,
    y: 0.297344975250536 * t + 0.6273635662554661 * n + 0.0752914584939979 * r,
    z: 0.0270313613864123 * t + 0.0706888525358272 * n + 0.9913375368376386 * r
  };
  return e.alpha !== void 0 && (a.alpha = e.alpha), a;
}, ut = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), $n = ({ x: e, y: t, z: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = {
    mode: "a98",
    r: ut(
      e * 2.0415879038107465 - t * 0.5650069742788597 - 0.3447313507783297 * n
    ),
    g: ut(
      e * -0.9692436362808798 + t * 1.8759675015077206 + 0.0415550574071756 * n
    ),
    b: ut(
      e * 0.0134442806320312 - t * 0.1183623922310184 + 1.0151749943912058 * n
    )
  };
  return r !== void 0 && (a.alpha = r), a;
}, ht = (e = 0) => {
  const t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((t + 0.055) / 1.055, 2.4);
}, fe = ({ r: e, g: t, b: n, alpha: r }) => {
  let a = {
    mode: "lrgb",
    r: ht(e),
    g: ht(t),
    b: ht(n)
  };
  return r !== void 0 && (a.alpha = r), a;
}, ne = (e) => {
  let { r: t, g: n, b: r, alpha: a } = fe(e), i = {
    mode: "xyz65",
    x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
    y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
    z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, bt = (e = 0) => {
  const t = Math.abs(e);
  return t > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(t, 1 / 2.4) - 0.055) : e * 12.92;
}, ue = ({ r: e, g: t, b: n, alpha: r }, a = "rgb") => {
  let i = {
    mode: a,
    r: bt(e),
    g: bt(t),
    b: bt(n)
  };
  return r !== void 0 && (i.alpha = r), i;
}, re = ({ x: e, y: t, z: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = ue({
    r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
    g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
    b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n
  });
  return r !== void 0 && (a.alpha = r), a;
}, ga = {
  ...pe,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => $n(ne(e)),
    xyz65: $n
  },
  toMode: {
    rgb: (e) => re(wn(e)),
    xyz65: wn
  }
}, C = (e) => (e = e % 360) < 0 ? e + 360 : e, ma = (e, t) => e.map((n, r, a) => {
  if (n === void 0)
    return n;
  let i = C(n);
  return r === 0 || e[r - 1] === void 0 ? i : t(i - C(a[r - 1]));
}).reduce((n, r) => !n.length || r === void 0 || n[n.length - 1] === void 0 ? (n.push(r), n) : (n.push(r + n[n.length - 1]), n), []), Y = (e) => ma(e, (t) => Math.abs(t) <= 180 ? t : t - 360 * Math.sign(t)), S = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0], xa = Math.PI / 180, va = 180 / Math.PI;
let zn = S[3] * S[4], _n = S[1] * S[4], Tn = S[1] * S[2] - S[0] * S[3];
const ya = ({ r: e, g: t, b: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = (Tn * n + e * zn - t * _n) / (Tn + zn - _n), i = n - a, o = (S[4] * (t - a) - S[2] * i) / S[3], s = {
    mode: "cubehelix",
    l: a,
    s: a === 0 || a === 1 ? void 0 : Math.sqrt(i * i + o * o) / (S[4] * a * (1 - a))
  };
  return s.s && (s.h = Math.atan2(o, i) * va - 120), r !== void 0 && (s.alpha = r), s;
}, Ma = ({ h: e, s: t, l: n, alpha: r }) => {
  let a = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * xa, n === void 0 && (n = 0);
  let i = t === void 0 ? 0 : t * n * (1 - n), o = Math.cos(e), s = Math.sin(e);
  return a.r = n + i * (S[0] * o + S[1] * s), a.g = n + i * (S[2] * o + S[3] * s), a.b = n + i * (S[4] * o + S[5] * s), r !== void 0 && (a.alpha = r), a;
}, Be = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.s || !t.s)
    return 0;
  let n = C(e.h), r = C(t.h), a = Math.sin((r - n + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * t.s) * a;
}, ka = (e, t) => {
  if (e.h === void 0 || t.h === void 0)
    return 0;
  let n = C(e.h), r = C(t.h);
  return Math.abs(r - n) > 180 ? n - (r - 360 * Math.sign(r - n)) : r - n;
}, Ue = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.c || !t.c)
    return 0;
  let n = C(e.h), r = C(t.h), a = Math.sin((r - n + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * t.c) * a;
}, D = (e) => {
  let t = e.reduce(
    (r, a) => {
      if (a !== void 0) {
        let i = a * Math.PI / 180;
        r.sin += Math.sin(i), r.cos += Math.cos(i);
      }
      return r;
    },
    { sin: 0, cos: 0 }
  ), n = Math.atan2(t.sin, t.cos) * 180 / Math.PI;
  return n < 0 ? 360 + n : n;
}, wa = {
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
    rgb: ya
  },
  toMode: {
    rgb: Ma
  },
  interpolate: {
    h: {
      use: p,
      fixup: Y
    },
    s: p,
    l: p,
    alpha: {
      use: p,
      fixup: T
    }
  },
  difference: {
    h: Be
  },
  average: {
    h: D
  }
}, W = ({ l: e, a: t, b: n, alpha: r }, a = "lch") => {
  t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = Math.sqrt(t * t + n * n), o = { mode: a, l: e, c: i };
  return i && (o.h = C(Math.atan2(n, t) * 180 / Math.PI)), r !== void 0 && (o.alpha = r), o;
}, K = ({ l: e, c: t, h: n, alpha: r }, a = "lab") => {
  n === void 0 && (n = 0);
  let i = {
    mode: a,
    l: e,
    a: t ? t * Math.cos(n / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(n / 180 * Math.PI) : 0
  };
  return r !== void 0 && (i.alpha = r), i;
}, ar = Math.pow(29, 3) / Math.pow(3, 3), ir = Math.pow(6, 3) / Math.pow(29, 3), $ = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: (1 - 0.3457 - 0.3585) / 0.3585
}, oe = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: (1 - 0.3127 - 0.329) / 0.329
};
let gt = (e) => Math.pow(e, 3) > ir ? Math.pow(e, 3) : (116 * e - 16) / ar;
const or = ({ l: e, a: t, b: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = (e + 16) / 116, i = t / 500 + a, o = a - n / 200, s = {
    mode: "xyz65",
    x: gt(i) * oe.X,
    y: gt(a) * oe.Y,
    z: gt(o) * oe.Z
  };
  return r !== void 0 && (s.alpha = r), s;
}, We = (e) => re(or(e)), mt = (e) => e > ir ? Math.cbrt(e) : (ar * e + 16) / 116, sr = ({ x: e, y: t, z: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = mt(e / oe.X), i = mt(t / oe.Y), o = mt(n / oe.Z), s = {
    mode: "lab65",
    l: 116 * i - 16,
    a: 500 * (a - i),
    b: 200 * (i - o)
  };
  return r !== void 0 && (s.alpha = r), s;
}, Ke = (e) => {
  let t = sr(ne(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Ye = 1, lr = 1, ze = 26 / 180 * Math.PI, De = Math.cos(ze), Ze = Math.sin(ze), dr = 100 / Math.log(139 / 100), jt = ({ l: e, c: t, h: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = {
    mode: "lab65",
    l: (Math.exp(e * Ye / dr) - 1) / 39e-4
  }, i = (Math.exp(0.0435 * t * lr * Ye) - 1) / 0.075, o = i * Math.cos(n / 180 * Math.PI - ze), s = i * Math.sin(n / 180 * Math.PI - ze);
  return a.a = o * De - s / 0.83 * Ze, a.b = o * Ze + s / 0.83 * De, r !== void 0 && (a.alpha = r), a;
}, Yt = ({ l: e, a: t, b: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = t * De + n * Ze, i = 0.83 * (n * De - t * Ze), o = Math.sqrt(a * a + i * i), s = {
    mode: "dlch",
    l: dr / Ye * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * o) / (0.0435 * lr * Ye)
  };
  return s.c && (s.h = C((Math.atan2(i, a) + ze) / Math.PI * 180)), r !== void 0 && (s.alpha = r), s;
}, Nn = (e) => jt(W(e, "dlch")), Sn = (e) => K(Yt(e), "dlab"), $a = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: Nn,
    rgb: (e) => We(Nn(e))
  },
  fromMode: {
    lab65: Sn,
    rgb: (e) => Sn(Ke(e))
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-40.09, 45.501],
    b: [-40.469, 44.344]
  },
  interpolate: {
    l: p,
    a: p,
    b: p,
    alpha: {
      use: p,
      fixup: T
    }
  }
}, za = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: jt,
    dlab: (e) => K(e, "dlab"),
    rgb: (e) => We(jt(e))
  },
  fromMode: {
    lab65: Yt,
    dlab: (e) => W(e, "dlch"),
    rgb: (e) => Yt(Ke(e))
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 51.484],
    h: [0, 360]
  },
  interpolate: {
    l: p,
    c: p,
    h: {
      use: p,
      fixup: Y
    },
    alpha: {
      use: p,
      fixup: T
    }
  },
  difference: {
    h: Ue
  },
  average: {
    h: D
  }
};
function _a({ h: e, s: t, i: n, alpha: r }) {
  e = C(e !== void 0 ? e : 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = Math.abs(e / 60 % 2 - 1), i;
  switch (Math.floor(e / 60)) {
    case 0:
      i = {
        r: n * (1 + t * (3 / (2 - a) - 1)),
        g: n * (1 + t * (3 * (1 - a) / (2 - a) - 1)),
        b: n * (1 - t)
      };
      break;
    case 1:
      i = {
        r: n * (1 + t * (3 * (1 - a) / (2 - a) - 1)),
        g: n * (1 + t * (3 / (2 - a) - 1)),
        b: n * (1 - t)
      };
      break;
    case 2:
      i = {
        r: n * (1 - t),
        g: n * (1 + t * (3 / (2 - a) - 1)),
        b: n * (1 + t * (3 * (1 - a) / (2 - a) - 1))
      };
      break;
    case 3:
      i = {
        r: n * (1 - t),
        g: n * (1 + t * (3 * (1 - a) / (2 - a) - 1)),
        b: n * (1 + t * (3 / (2 - a) - 1))
      };
      break;
    case 4:
      i = {
        r: n * (1 + t * (3 * (1 - a) / (2 - a) - 1)),
        g: n * (1 - t),
        b: n * (1 + t * (3 / (2 - a) - 1))
      };
      break;
    case 5:
      i = {
        r: n * (1 + t * (3 / (2 - a) - 1)),
        g: n * (1 - t),
        b: n * (1 + t * (3 * (1 - a) / (2 - a) - 1))
      };
      break;
    default:
      i = { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t) };
  }
  return i.mode = "rgb", r !== void 0 && (i.alpha = r), i;
}
function Ta({ r: e, g: t, b: n, alpha: r }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = Math.max(e, t, n), i = Math.min(e, t, n), o = {
    mode: "hsi",
    s: e + t + n === 0 ? 0 : 1 - 3 * i / (e + t + n),
    i: (e + t + n) / 3
  };
  return a - i !== 0 && (o.h = (a === e ? (t - n) / (a - i) + (t < n) * 6 : a === t ? (n - e) / (a - i) + 2 : (e - t) / (a - i) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
const Na = {
  mode: "hsi",
  toMode: {
    rgb: _a
  },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: {
    rgb: Ta
  },
  channels: ["h", "s", "i", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: p, fixup: Y },
    s: p,
    i: p,
    alpha: { use: p, fixup: T }
  },
  difference: {
    h: Be
  },
  average: {
    h: D
  }
};
function Sa({ h: e, s: t, l: n, alpha: r }) {
  e = C(e !== void 0 ? e : 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = n + t * (n < 0.5 ? n : 1 - n), i = a - (a - n) * 2 * Math.abs(e / 60 % 2 - 1), o;
  switch (Math.floor(e / 60)) {
    case 0:
      o = { r: a, g: i, b: 2 * n - a };
      break;
    case 1:
      o = { r: i, g: a, b: 2 * n - a };
      break;
    case 2:
      o = { r: 2 * n - a, g: a, b: i };
      break;
    case 3:
      o = { r: 2 * n - a, g: i, b: a };
      break;
    case 4:
      o = { r: i, g: 2 * n - a, b: a };
      break;
    case 5:
      o = { r: a, g: 2 * n - a, b: i };
      break;
    default:
      o = { r: 2 * n - a, g: 2 * n - a, b: 2 * n - a };
  }
  return o.mode = "rgb", r !== void 0 && (o.alpha = r), o;
}
function Pa({ r: e, g: t, b: n, alpha: r }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = Math.max(e, t, n), i = Math.min(e, t, n), o = {
    mode: "hsl",
    s: a === i ? 0 : (a - i) / (1 - Math.abs(a + i - 1)),
    l: 0.5 * (a + i)
  };
  return a - i !== 0 && (o.h = (a === e ? (t - n) / (a - i) + (t < n) * 6 : a === t ? (n - e) / (a - i) + 2 : (e - t) / (a - i) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
const Ca = (e, t) => {
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
}, Ha = new RegExp(
  `^hsla?\\(\\s*${Qr}${ce}${$e}${ce}${$e}\\s*(?:,\\s*${an}\\s*)?\\)$`
), La = (e) => {
  let t = e.match(Ha);
  if (!t) return;
  let n = { mode: "hsl" };
  return t[3] !== void 0 ? n.h = +t[3] : t[1] !== void 0 && t[2] !== void 0 && (n.h = Ca(t[1], t[2])), t[4] !== void 0 && (n.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (n.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] !== void 0 ? n.alpha = Math.max(0, Math.min(1, t[6] / 100)) : t[7] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[7]))), n;
};
function Ea(e, t) {
  if (!t || t[0] !== "hsl" && t[0] !== "hsla")
    return;
  const n = { mode: "hsl" }, [, r, a, i, o] = t;
  if (r.type !== d.None) {
    if (r.type === d.Percentage)
      return;
    n.h = r.value;
  }
  if (a.type !== d.None) {
    if (a.type === d.Hue)
      return;
    n.s = a.value / 100;
  }
  if (i.type !== d.None) {
    if (i.type === d.Hue)
      return;
    n.l = i.value / 100;
  }
  return o.type !== d.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === d.Number ? o.value : o.value / 100
    )
  )), n;
}
const cr = {
  mode: "hsl",
  toMode: {
    rgb: Sa
  },
  fromMode: {
    rgb: Pa
  },
  channels: ["h", "s", "l", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Ea, La],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: p, fixup: Y },
    s: p,
    l: p,
    alpha: { use: p, fixup: T }
  },
  difference: {
    h: Be
  },
  average: {
    h: D
  }
};
function pr({ h: e, s: t, v: n, alpha: r }) {
  e = C(e !== void 0 ? e : 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = Math.abs(e / 60 % 2 - 1), i;
  switch (Math.floor(e / 60)) {
    case 0:
      i = { r: n, g: n * (1 - t * a), b: n * (1 - t) };
      break;
    case 1:
      i = { r: n * (1 - t * a), g: n, b: n * (1 - t) };
      break;
    case 2:
      i = { r: n * (1 - t), g: n, b: n * (1 - t * a) };
      break;
    case 3:
      i = { r: n * (1 - t), g: n * (1 - t * a), b: n };
      break;
    case 4:
      i = { r: n * (1 - t * a), g: n * (1 - t), b: n };
      break;
    case 5:
      i = { r: n, g: n * (1 - t), b: n * (1 - t * a) };
      break;
    default:
      i = { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t) };
  }
  return i.mode = "rgb", r !== void 0 && (i.alpha = r), i;
}
function fr({ r: e, g: t, b: n, alpha: r }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = Math.max(e, t, n), i = Math.min(e, t, n), o = {
    mode: "hsv",
    s: a === 0 ? 0 : 1 - i / a,
    v: a
  };
  return a - i !== 0 && (o.h = (a === e ? (t - n) / (a - i) + (t < n) * 6 : a === t ? (n - e) / (a - i) + 2 : (e - t) / (a - i) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
const ur = {
  mode: "hsv",
  toMode: {
    rgb: pr
  },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: {
    rgb: fr
  },
  channels: ["h", "s", "v", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: p, fixup: Y },
    s: p,
    v: p,
    alpha: { use: p, fixup: T }
  },
  difference: {
    h: Be
  },
  average: {
    h: D
  }
};
function qa({ h: e, w: t, b: n, alpha: r }) {
  if (t === void 0 && (t = 0), n === void 0 && (n = 0), t + n > 1) {
    let a = t + n;
    t /= a, n /= a;
  }
  return pr({
    h: e,
    s: n === 1 ? 1 : 1 - t / (1 - n),
    v: 1 - n,
    alpha: r
  });
}
function Ra(e) {
  let t = fr(e);
  if (t === void 0) return;
  let n = t.s !== void 0 ? t.s : 0, r = t.v !== void 0 ? t.v : 0, a = {
    mode: "hwb",
    w: (1 - n) * r,
    b: 1 - r
  };
  return t.h !== void 0 && (a.h = t.h), t.alpha !== void 0 && (a.alpha = t.alpha), a;
}
function Ia(e, t) {
  if (!t || t[0] !== "hwb")
    return;
  const n = { mode: "hwb" }, [, r, a, i, o] = t;
  if (r.type !== d.None) {
    if (r.type === d.Percentage)
      return;
    n.h = r.value;
  }
  if (a.type !== d.None) {
    if (a.type === d.Hue)
      return;
    n.w = a.value / 100;
  }
  if (i.type !== d.None) {
    if (i.type === d.Hue)
      return;
    n.b = i.value / 100;
  }
  return o.type !== d.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === d.Number ? o.value : o.value / 100
    )
  )), n;
}
const Xa = {
  mode: "hwb",
  toMode: {
    rgb: qa
  },
  fromMode: {
    rgb: Ra
  },
  channels: ["h", "w", "b", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Ia],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: p, fixup: Y },
    w: p,
    b: p,
    alpha: { use: p, fixup: T }
  },
  difference: {
    h: ka
  },
  average: {
    h: D
  }
}, hr = 203, Ve = 0.1593017578125, br = 78.84375, Qe = 0.8359375, et = 18.8515625, tt = 18.6875;
function xt(e) {
  if (e < 0) return 0;
  const t = Math.pow(e, 1 / br);
  return 1e4 * Math.pow(Math.max(0, t - Qe) / (et - tt * t), 1 / Ve);
}
function vt(e) {
  if (e < 0) return 0;
  const t = Math.pow(e / 1e4, Ve);
  return Math.pow((Qe + et * t) / (1 + tt * t), br);
}
const yt = (e) => Math.max(e / hr, 0), Pn = ({ i: e, t, p: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const a = xt(
    e + 0.008609037037932761 * t + 0.11102962500302593 * n
  ), i = xt(
    e - 0.00860903703793275 * t - 0.11102962500302599 * n
  ), o = xt(
    e + 0.5600313357106791 * t - 0.32062717498731885 * n
  ), s = {
    mode: "xyz65",
    x: yt(
      2.070152218389422 * a - 1.3263473389671556 * i + 0.2066510476294051 * o
    ),
    y: yt(
      0.3647385209748074 * a + 0.680566024947227 * i - 0.0453045459220346 * o
    ),
    z: yt(
      -0.049747207535812 * a - 0.0492609666966138 * i + 1.1880659249923042 * o
    )
  };
  return r !== void 0 && (s.alpha = r), s;
}, Mt = (e = 0) => Math.max(e * hr, 0), Cn = ({ x: e, y: t, z: n, alpha: r }) => {
  const a = Mt(e), i = Mt(t), o = Mt(n), s = vt(
    0.3592832590121217 * a + 0.6976051147779502 * i - 0.0358915932320289 * o
  ), f = vt(
    -0.1920808463704995 * a + 1.1004767970374323 * i + 0.0753748658519118 * o
  ), h = vt(
    0.0070797844607477 * a + 0.0748396662186366 * i + 0.8433265453898765 * o
  ), g = 0.5 * s + 0.5 * f, m = 1.61376953125 * s - 3.323486328125 * f + 1.709716796875 * h, x = 4.378173828125 * s - 4.24560546875 * f - 0.132568359375 * h, M = { mode: "itp", i: g, t: m, p: x };
  return r !== void 0 && (M.alpha = r), M;
}, Aa = {
  mode: "itp",
  channels: ["i", "t", "p", "alpha"],
  parse: ["--ictcp"],
  serialize: "--ictcp",
  toMode: {
    xyz65: Pn,
    rgb: (e) => re(Pn(e))
  },
  fromMode: {
    xyz65: Cn,
    rgb: (e) => Cn(ne(e))
  },
  ranges: {
    i: [0, 0.581],
    t: [-0.369, 0.272],
    p: [-0.164, 0.331]
  },
  interpolate: {
    i: p,
    t: p,
    p,
    alpha: { use: p, fixup: T }
  }
}, Fa = 134.03437499999998, Oa = 16295499532821565e-27, kt = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e / 1e4, Ve);
  return Math.pow((Qe + et * t) / (1 + tt * t), Fa);
}, wt = (e = 0) => Math.max(e * 203, 0), gr = ({ x: e, y: t, z: n, alpha: r }) => {
  e = wt(e), t = wt(t), n = wt(n);
  let a = 1.15 * e - 0.15 * n, i = 0.66 * t + 0.34 * e, o = kt(0.41478972 * a + 0.579999 * i + 0.014648 * n), s = kt(-0.20151 * a + 1.120649 * i + 0.0531008 * n), f = kt(-0.0166008 * a + 0.2648 * i + 0.6684799 * n), h = (o + s) / 2, g = {
    mode: "jab",
    j: 0.44 * h / (1 - 0.56 * h) - Oa,
    a: 3.524 * o - 4.066708 * s + 0.542708 * f,
    b: 0.199076 * o + 1.096799 * s - 1.295875 * f
  };
  return r !== void 0 && (g.alpha = r), g;
}, ja = 134.03437499999998, Hn = 16295499532821565e-27, $t = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e, 1 / ja);
  return 1e4 * Math.pow((Qe - t) / (tt * t - et), 1 / Ve);
}, zt = (e) => e / 203, mr = ({ j: e, a: t, b: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = (e + Hn) / (0.44 + 0.56 * (e + Hn)), i = $t(a + 0.13860504 * t + 0.058047316 * n), o = $t(a - 0.13860504 * t - 0.058047316 * n), s = $t(a - 0.096019242 * t - 0.8118919 * n), f = {
    mode: "xyz65",
    x: zt(
      1.661373024652174 * i - 0.914523081304348 * o + 0.23136208173913045 * s
    ),
    y: zt(
      -0.3250758611844533 * i + 1.571847026732543 * o - 0.21825383453227928 * s
    ),
    z: zt(-0.090982811 * i - 0.31272829 * o + 1.5227666 * s)
  };
  return r !== void 0 && (f.alpha = r), f;
}, xr = (e) => {
  let t = gr(ne(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, vr = (e) => re(mr(e)), Ya = {
  mode: "jab",
  channels: ["j", "a", "b", "alpha"],
  parse: ["--jzazbz"],
  serialize: "--jzazbz",
  fromMode: {
    rgb: xr,
    xyz65: gr
  },
  toMode: {
    rgb: vr,
    xyz65: mr
  },
  ranges: {
    j: [0, 0.222],
    a: [-0.109, 0.129],
    b: [-0.185, 0.134]
  },
  interpolate: {
    j: p,
    a: p,
    b: p,
    alpha: { use: p, fixup: T }
  }
}, Ln = ({ j: e, a: t, b: n, alpha: r }) => {
  t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = Math.sqrt(t * t + n * n), i = {
    mode: "jch",
    j: e,
    c: a
  };
  return a && (i.h = C(Math.atan2(n, t) * 180 / Math.PI)), r !== void 0 && (i.alpha = r), i;
}, En = ({ j: e, c: t, h: n, alpha: r }) => {
  n === void 0 && (n = 0);
  let a = {
    mode: "jab",
    j: e,
    a: t ? t * Math.cos(n / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(n / 180 * Math.PI) : 0
  };
  return r !== void 0 && (a.alpha = r), a;
}, Da = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: En,
    rgb: (e) => vr(En(e))
  },
  fromMode: {
    rgb: (e) => Ln(xr(e)),
    jab: Ln
  },
  channels: ["j", "c", "h", "alpha"],
  ranges: {
    j: [0, 0.221],
    c: [0, 0.19],
    h: [0, 360]
  },
  interpolate: {
    h: { use: p, fixup: Y },
    c: p,
    j: p,
    alpha: { use: p, fixup: T }
  },
  difference: {
    h: Ue
  },
  average: {
    h: D
  }
}, nt = Math.pow(29, 3) / Math.pow(3, 3), on = Math.pow(6, 3) / Math.pow(29, 3);
let _t = (e) => Math.pow(e, 3) > on ? Math.pow(e, 3) : (116 * e - 16) / nt;
const sn = ({ l: e, a: t, b: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = (e + 16) / 116, i = t / 500 + a, o = a - n / 200, s = {
    mode: "xyz50",
    x: _t(i) * $.X,
    y: _t(a) * $.Y,
    z: _t(o) * $.Z
  };
  return r !== void 0 && (s.alpha = r), s;
}, He = ({ x: e, y: t, z: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = ue({
    r: e * 3.1341359569958707 - t * 1.6173863321612538 - 0.4906619460083532 * n,
    g: e * -0.978795502912089 + t * 1.916254567259524 + 0.03344273116131949 * n,
    b: e * 0.07195537988411677 - t * 0.2289768264158322 + 1.405386058324125 * n
  });
  return r !== void 0 && (a.alpha = r), a;
}, yr = (e) => He(sn(e)), Le = (e) => {
  let { r: t, g: n, b: r, alpha: a } = fe(e), i = {
    mode: "xyz50",
    x: 0.436065742824811 * t + 0.3851514688337912 * n + 0.14307845442264197 * r,
    y: 0.22249319175623702 * t + 0.7168870538238823 * n + 0.06061979053616537 * r,
    z: 0.013923904500943465 * t + 0.09708128566574634 * n + 0.7140993584005155 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, Tt = (e) => e > on ? Math.cbrt(e) : (nt * e + 16) / 116, ln = ({ x: e, y: t, z: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = Tt(e / $.X), i = Tt(t / $.Y), o = Tt(n / $.Z), s = {
    mode: "lab",
    l: 116 * i - 16,
    a: 500 * (a - i),
    b: 200 * (i - o)
  };
  return r !== void 0 && (s.alpha = r), s;
}, Mr = (e) => {
  let t = ln(Le(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
};
function Za(e, t) {
  if (!t || t[0] !== "lab")
    return;
  const n = { mode: "lab" }, [, r, a, i, o] = t;
  if (!(r.type === d.Hue || a.type === d.Hue || i.type === d.Hue))
    return r.type !== d.None && (n.l = Math.min(Math.max(0, r.value), 100)), a.type !== d.None && (n.a = a.type === d.Number ? a.value : a.value * 125 / 100), i.type !== d.None && (n.b = i.type === d.Number ? i.value : i.value * 125 / 100), o.type !== d.None && (n.alpha = Math.min(
      1,
      Math.max(
        0,
        o.type === d.Number ? o.value : o.value / 100
      )
    )), n;
}
const dn = {
  mode: "lab",
  toMode: {
    xyz50: sn,
    rgb: yr
  },
  fromMode: {
    xyz50: ln,
    rgb: Mr
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  },
  parse: [Za],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: p,
    a: p,
    b: p,
    alpha: { use: p, fixup: T }
  }
}, Ga = {
  ...dn,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: or,
    rgb: We
  },
  fromMode: {
    xyz65: sr,
    rgb: Ke
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function Ja(e, t) {
  if (!t || t[0] !== "lch")
    return;
  const n = { mode: "lch" }, [, r, a, i, o] = t;
  if (r.type !== d.None) {
    if (r.type === d.Hue)
      return;
    n.l = Math.min(Math.max(0, r.value), 100);
  }
  if (a.type !== d.None && (n.c = Math.max(
    0,
    a.type === d.Number ? a.value : a.value * 150 / 100
  )), i.type !== d.None) {
    if (i.type === d.Percentage)
      return;
    n.h = i.value;
  }
  return o.type !== d.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === d.Number ? o.value : o.value / 100
    )
  )), n;
}
const cn = {
  mode: "lch",
  toMode: {
    lab: K,
    rgb: (e) => yr(K(e))
  },
  fromMode: {
    rgb: (e) => W(Mr(e)),
    lab: W
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  },
  parse: [Ja],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: p, fixup: Y },
    c: p,
    l: p,
    alpha: { use: p, fixup: T }
  },
  difference: {
    h: Ue
  },
  average: {
    h: D
  }
}, Ba = {
  ...cn,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => K(e, "lab65"),
    rgb: (e) => We(K(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => W(Ke(e), "lch65"),
    lab65: (e) => W(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, kr = ({ l: e, u: t, v: n, alpha: r }) => {
  t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = Math.sqrt(t * t + n * n), i = {
    mode: "lchuv",
    l: e,
    c: a
  };
  return a && (i.h = C(Math.atan2(n, t) * 180 / Math.PI)), r !== void 0 && (i.alpha = r), i;
}, wr = ({ l: e, c: t, h: n, alpha: r }) => {
  n === void 0 && (n = 0);
  let a = {
    mode: "luv",
    l: e,
    u: t ? t * Math.cos(n / 180 * Math.PI) : 0,
    v: t ? t * Math.sin(n / 180 * Math.PI) : 0
  };
  return r !== void 0 && (a.alpha = r), a;
}, $r = (e, t, n) => 4 * e / (e + 15 * t + 3 * n), zr = (e, t, n) => 9 * t / (e + 15 * t + 3 * n), Ua = $r($.X, $.Y, $.Z), Wa = zr($.X, $.Y, $.Z), Ka = (e) => e <= on ? nt * e : 116 * Math.cbrt(e) - 16, Dt = ({ x: e, y: t, z: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = Ka(t / $.Y), i = $r(e, t, n), o = zr(e, t, n);
  !isFinite(i) || !isFinite(o) ? a = i = o = 0 : (i = 13 * a * (i - Ua), o = 13 * a * (o - Wa));
  let s = {
    mode: "luv",
    l: a,
    u: i,
    v: o
  };
  return r !== void 0 && (s.alpha = r), s;
}, Va = (e, t, n) => 4 * e / (e + 15 * t + 3 * n), Qa = (e, t, n) => 9 * t / (e + 15 * t + 3 * n), ei = Va($.X, $.Y, $.Z), ti = Qa($.X, $.Y, $.Z), Zt = ({ l: e, u: t, v: n, alpha: r }) => {
  if (e === void 0 && (e = 0), e === 0)
    return { mode: "xyz50", x: 0, y: 0, z: 0 };
  t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = t / (13 * e) + ei, i = n / (13 * e) + ti, o = $.Y * (e <= 8 ? e / nt : Math.pow((e + 16) / 116, 3)), s = o * (9 * a) / (4 * i), f = o * (12 - 3 * a - 20 * i) / (4 * i), h = { mode: "xyz50", x: s, y: o, z: f };
  return r !== void 0 && (h.alpha = r), h;
}, ni = (e) => kr(Dt(Le(e))), ri = (e) => He(Zt(wr(e))), ai = {
  mode: "lchuv",
  toMode: {
    luv: wr,
    rgb: ri
  },
  fromMode: {
    rgb: ni,
    luv: kr
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
    h: { use: p, fixup: Y },
    c: p,
    l: p,
    alpha: { use: p, fixup: T }
  },
  difference: {
    h: Ue
  },
  average: {
    h: D
  }
}, ii = {
  ...pe,
  mode: "lrgb",
  toMode: {
    rgb: ue
  },
  fromMode: {
    rgb: fe
  },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, oi = {
  mode: "luv",
  toMode: {
    xyz50: Zt,
    rgb: (e) => He(Zt(e))
  },
  fromMode: {
    xyz50: Dt,
    rgb: (e) => Dt(Le(e))
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
    l: p,
    u: p,
    v: p,
    alpha: { use: p, fixup: T }
  }
}, _r = ({ r: e, g: t, b: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = Math.cbrt(
    0.412221469470763 * e + 0.5363325372617348 * t + 0.0514459932675022 * n
  ), i = Math.cbrt(
    0.2119034958178252 * e + 0.6806995506452344 * t + 0.1073969535369406 * n
  ), o = Math.cbrt(
    0.0883024591900564 * e + 0.2817188391361215 * t + 0.6299787016738222 * n
  ), s = {
    mode: "oklab",
    l: 0.210454268309314 * a + 0.7936177747023054 * i - 0.0040720430116193 * o,
    a: 1.9779985324311684 * a - 2.42859224204858 * i + 0.450593709617411 * o,
    b: 0.0259040424655478 * a + 0.7827717124575296 * i - 0.8086757549230774 * o
  };
  return r !== void 0 && (s.alpha = r), s;
}, rt = (e) => {
  let t = _r(fe(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Ee = ({ l: e, a: t, b: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = Math.pow(e + 0.3963377773761749 * t + 0.2158037573099136 * n, 3), i = Math.pow(e - 0.1055613458156586 * t - 0.0638541728258133 * n, 3), o = Math.pow(e - 0.0894841775298119 * t - 1.2914855480194092 * n, 3), s = {
    mode: "lrgb",
    r: 4.076741636075957 * a - 3.3077115392580616 * i + 0.2309699031821044 * o,
    g: -1.2684379732850317 * a + 2.6097573492876887 * i - 0.3413193760026573 * o,
    b: -0.0041960761386756 * a - 0.7034186179359362 * i + 1.7076146940746117 * o
  };
  return r !== void 0 && (s.alpha = r), s;
}, at = (e) => ue(Ee(e));
function Gt(e) {
  const r = 1.170873786407767;
  return 0.5 * (r * e - 0.206 + Math.sqrt((r * e - 0.206) * (r * e - 0.206) + 4 * 0.03 * r * e));
}
function Ge(e) {
  return (e * e + 0.206 * e) / (1.170873786407767 * (e + 0.03));
}
function si(e, t) {
  let n, r, a, i, o, s, f, h;
  -1.88170328 * e - 0.80936493 * t > 1 ? (n = 1.19086277, r = 1.76576728, a = 0.59662641, i = 0.75515197, o = 0.56771245, s = 4.0767416621, f = -3.3077115913, h = 0.2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (n = 0.73956515, r = -0.45954404, a = 0.08285427, i = 0.1254107, o = 0.14503204, s = -1.2684380046, f = 2.6097574011, h = -0.3413193965) : (n = 1.35733652, r = -915799e-8, a = -1.1513021, i = -0.50559606, o = 692167e-8, s = -0.0041960863, f = -0.7034186147, h = 1.707614701);
  let g = n + r * e + a * t + i * e * e + o * e * t, m = 0.3963377774 * e + 0.2158037573 * t, x = -0.1055613458 * e - 0.0638541728 * t, M = -0.0894841775 * e - 1.291485548 * t;
  {
    let z = 1 + g * m, P = 1 + g * x, N = 1 + g * M, L = z * z * z, H = P * P * P, Z = N * N * N, he = 3 * m * z * z, be = 3 * x * P * P, ge = 3 * M * N * N, me = 6 * m * m * z, xe = 6 * x * x * P, ve = 6 * M * M * N, ae = s * L + f * H + h * Z, V = s * he + f * be + h * ge, ye = s * me + f * xe + h * ve;
    g = g - ae * V / (V * V - 0.5 * ae * ye);
  }
  return g;
}
function pn(e, t) {
  let n = si(e, t), r = Ee({ l: 1, a: n * e, b: n * t }), a = Math.cbrt(1 / Math.max(r.r, r.g, r.b)), i = a * n;
  return [a, i];
}
function li(e, t, n, r, a, i = null) {
  i || (i = pn(e, t));
  let o;
  if ((n - a) * i[1] - (i[0] - a) * r <= 0)
    o = i[1] * a / (r * i[0] + i[1] * (a - n));
  else {
    o = i[1] * (a - 1) / (r * (i[0] - 1) + i[1] * (a - n));
    {
      let s = n - a, f = r, h = 0.3963377774 * e + 0.2158037573 * t, g = -0.1055613458 * e - 0.0638541728 * t, m = -0.0894841775 * e - 1.291485548 * t, x = s + f * h, M = s + f * g, z = s + f * m;
      {
        let P = a * (1 - o) + o * n, N = o * r, L = P + N * h, H = P + N * g, Z = P + N * m, he = L * L * L, be = H * H * H, ge = Z * Z * Z, me = 3 * x * L * L, xe = 3 * M * H * H, ve = 3 * z * Z * Z, ae = 6 * x * x * L, V = 6 * M * M * H, ye = 6 * z * z * Z, gn = 4.0767416621 * he - 3.3077115913 * be + 0.2309699292 * ge - 1, it = 4.0767416621 * me - 3.3077115913 * xe + 0.2309699292 * ve, Zr = 4.0767416621 * ae - 3.3077115913 * V + 0.2309699292 * ye, mn = it / (it * it - 0.5 * gn * Zr), ot = -gn * mn, xn = -1.2684380046 * he + 2.6097574011 * be - 0.3413193965 * ge - 1, st = -1.2684380046 * me + 2.6097574011 * xe - 0.3413193965 * ve, Gr = -1.2684380046 * ae + 2.6097574011 * V - 0.3413193965 * ye, vn = st / (st * st - 0.5 * xn * Gr), lt = -xn * vn, yn = -0.0041960863 * he - 0.7034186147 * be + 1.707614701 * ge - 1, dt = -0.0041960863 * me - 0.7034186147 * xe + 1.707614701 * ve, Jr = -0.0041960863 * ae - 0.7034186147 * V + 1.707614701 * ye, Mn = dt / (dt * dt - 0.5 * yn * Jr), ct = -yn * Mn;
        ot = mn >= 0 ? ot : 1e6, lt = vn >= 0 ? lt : 1e6, ct = Mn >= 0 ? ct : 1e6, o += Math.min(ot, Math.min(lt, ct));
      }
    }
  }
  return o;
}
function fn(e, t, n = null) {
  n || (n = pn(e, t));
  let r = n[0], a = n[1];
  return [a / r, a / (1 - r)];
}
function Tr(e, t, n) {
  let r = pn(t, n), a = li(t, n, e, 1, e, r), i = fn(t, n, r), o = 0.11516993 + 1 / (7.4477897 + 4.1590124 * n + t * (-2.19557347 + 1.75198401 * n + t * (-2.13704948 - 10.02301043 * n + t * (-4.24894561 + 5.38770819 * n + 4.69891013 * t)))), s = 0.11239642 + 1 / (1.6132032 - 0.68124379 * n + t * (0.40370612 + 0.90148123 * n + t * (-0.27087943 + 0.6122399 * n + t * (299215e-8 - 0.45399568 * n - 0.14661872 * t)))), f = a / Math.min(e * i[0], (1 - e) * i[1]), h = e * o, g = (1 - e) * s, m = 0.9 * f * Math.sqrt(
    Math.sqrt(
      1 / (1 / (h * h * h * h) + 1 / (g * g * g * g))
    )
  );
  return h = e * 0.4, g = (1 - e) * 0.8, [Math.sqrt(1 / (1 / (h * h) + 1 / (g * g))), m, a];
}
function qn(e) {
  const t = e.l !== void 0 ? e.l : 0, n = e.a !== void 0 ? e.a : 0, r = e.b !== void 0 ? e.b : 0, a = { mode: "okhsl", l: Gt(t) };
  e.alpha !== void 0 && (a.alpha = e.alpha);
  let i = Math.sqrt(n * n + r * r);
  if (!i)
    return a.s = 0, a;
  let [o, s, f] = Tr(t, n / i, r / i), h;
  if (i < s) {
    let g = 0, m = 0.8 * o, x = 1 - m / s;
    h = (i - g) / (m + x * (i - g)) * 0.8;
  } else {
    let g = s, m = 0.2 * s * s * 1.25 * 1.25 / o, x = 1 - m / (f - s);
    h = 0.8 + 0.2 * ((i - g) / (m + x * (i - g)));
  }
  return h && (a.s = h, a.h = C(Math.atan2(r, n) * 180 / Math.PI)), a;
}
function Rn(e) {
  let t = e.h !== void 0 ? e.h : 0, n = e.s !== void 0 ? e.s : 0, r = e.l !== void 0 ? e.l : 0;
  const a = { mode: "oklab", l: Ge(r) };
  if (e.alpha !== void 0 && (a.alpha = e.alpha), !n || r === 1)
    return a.a = a.b = 0, a;
  let i = Math.cos(t / 180 * Math.PI), o = Math.sin(t / 180 * Math.PI), [s, f, h] = Tr(a.l, i, o), g, m, x, M;
  n < 0.8 ? (g = 1.25 * n, m = 0, x = 0.8 * s, M = 1 - x / f) : (g = 5 * (n - 0.8), m = f, x = 0.2 * f * f * 1.25 * 1.25 / s, M = 1 - x / (h - f));
  let z = m + g * x / (1 - M * g);
  return a.a = z * i, a.b = z * o, a;
}
const di = {
  ...cr,
  mode: "okhsl",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--okhsl"],
  serialize: "--okhsl",
  fromMode: {
    oklab: qn,
    rgb: (e) => qn(rt(e))
  },
  toMode: {
    oklab: Rn,
    rgb: (e) => at(Rn(e))
  }
};
function In(e) {
  let t = e.l !== void 0 ? e.l : 0, n = e.a !== void 0 ? e.a : 0, r = e.b !== void 0 ? e.b : 0, a = Math.sqrt(n * n + r * r), i = a ? n / a : 1, o = a ? r / a : 1, [s, f] = fn(i, o), h = 0.5, g = 1 - h / s, m = f / (a + t * f), x = m * t, M = m * a, z = Ge(x), P = M * z / x, N = Ee({ l: z, a: i * P, b: o * P }), L = Math.cbrt(
    1 / Math.max(N.r, N.g, N.b, 0)
  );
  t = t / L, a = a / L * Gt(t) / t, t = Gt(t);
  const H = {
    mode: "okhsv",
    s: a ? (h + f) * M / (f * h + f * g * M) : 0,
    v: t ? t / x : 0
  };
  return H.s && (H.h = C(Math.atan2(r, n) * 180 / Math.PI)), e.alpha !== void 0 && (H.alpha = e.alpha), H;
}
function Xn(e) {
  const t = { mode: "oklab" };
  e.alpha !== void 0 && (t.alpha = e.alpha);
  const n = e.h !== void 0 ? e.h : 0, r = e.s !== void 0 ? e.s : 0, a = e.v !== void 0 ? e.v : 0, i = Math.cos(n / 180 * Math.PI), o = Math.sin(n / 180 * Math.PI), [s, f] = fn(i, o), h = 0.5, g = 1 - h / s, m = 1 - r * h / (h + f - f * g * r), x = r * f * h / (h + f - f * g * r), M = Ge(m), z = x * M / m, P = Ee({
    l: M,
    a: i * z,
    b: o * z
  }), N = Math.cbrt(
    1 / Math.max(P.r, P.g, P.b, 0)
  ), L = Ge(a * m), H = x * L / m;
  return t.l = L * N, t.a = H * i * N, t.b = H * o * N, t;
}
const ci = {
  ...ur,
  mode: "okhsv",
  channels: ["h", "s", "v", "alpha"],
  parse: ["--okhsv"],
  serialize: "--okhsv",
  fromMode: {
    oklab: In,
    rgb: (e) => In(rt(e))
  },
  toMode: {
    oklab: Xn,
    rgb: (e) => at(Xn(e))
  }
};
function pi(e, t) {
  if (!t || t[0] !== "oklab")
    return;
  const n = { mode: "oklab" }, [, r, a, i, o] = t;
  if (!(r.type === d.Hue || a.type === d.Hue || i.type === d.Hue))
    return r.type !== d.None && (n.l = Math.min(
      Math.max(0, r.type === d.Number ? r.value : r.value / 100),
      1
    )), a.type !== d.None && (n.a = a.type === d.Number ? a.value : a.value * 0.4 / 100), i.type !== d.None && (n.b = i.type === d.Number ? i.value : i.value * 0.4 / 100), o.type !== d.None && (n.alpha = Math.min(
      1,
      Math.max(
        0,
        o.type === d.Number ? o.value : o.value / 100
      )
    )), n;
}
const fi = {
  ...dn,
  mode: "oklab",
  toMode: {
    lrgb: Ee,
    rgb: at
  },
  fromMode: {
    lrgb: _r,
    rgb: rt
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [pi],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function ui(e, t) {
  if (!t || t[0] !== "oklch")
    return;
  const n = { mode: "oklch" }, [, r, a, i, o] = t;
  if (r.type !== d.None) {
    if (r.type === d.Hue)
      return;
    n.l = Math.min(
      Math.max(0, r.type === d.Number ? r.value : r.value / 100),
      1
    );
  }
  if (a.type !== d.None && (n.c = Math.max(
    0,
    a.type === d.Number ? a.value : a.value * 0.4 / 100
  )), i.type !== d.None) {
    if (i.type === d.Percentage)
      return;
    n.h = i.value;
  }
  return o.type !== d.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === d.Number ? o.value : o.value / 100
    )
  )), n;
}
const hi = {
  ...cn,
  mode: "oklch",
  toMode: {
    oklab: (e) => K(e, "oklab"),
    rgb: (e) => at(K(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => W(rt(e), "oklch"),
    oklab: (e) => W(e, "oklch")
  },
  parse: [ui],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, An = (e) => {
  let { r: t, g: n, b: r, alpha: a } = fe(e), i = {
    mode: "xyz65",
    x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
    y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
    z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, Fn = ({ x: e, y: t, z: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = ue(
    {
      r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
      g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
      b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n
    },
    "p3"
  );
  return r !== void 0 && (a.alpha = r), a;
}, bi = {
  ...pe,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => Fn(ne(e)),
    xyz65: Fn
  },
  toMode: {
    rgb: (e) => re(An(e)),
    xyz65: An
  }
}, Nt = (e) => {
  let t = Math.abs(e);
  return t >= 1 / 512 ? Math.sign(e) * Math.pow(t, 1 / 1.8) : 16 * e;
}, On = ({ x: e, y: t, z: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = {
    mode: "prophoto",
    r: Nt(
      e * 1.3457868816471585 - t * 0.2555720873797946 - 0.0511018649755453 * n
    ),
    g: Nt(
      e * -0.5446307051249019 + t * 1.5082477428451466 + 0.0205274474364214 * n
    ),
    b: Nt(e * 0 + t * 0 + 1.2119675456389452 * n)
  };
  return r !== void 0 && (a.alpha = r), a;
}, St = (e = 0) => {
  let t = Math.abs(e);
  return t >= 16 / 512 ? Math.sign(e) * Math.pow(t, 1.8) : e / 16;
}, jn = (e) => {
  let t = St(e.r), n = St(e.g), r = St(e.b), a = {
    mode: "xyz50",
    x: 0.7977666449006423 * t + 0.1351812974005331 * n + 0.0313477341283922 * r,
    y: 0.2880748288194013 * t + 0.7118352342418731 * n + 899369387256e-16 * r,
    z: 0 * t + 0 * n + 0.8251046025104602 * r
  };
  return e.alpha !== void 0 && (a.alpha = e.alpha), a;
}, gi = {
  ...pe,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: On,
    rgb: (e) => On(Le(e))
  },
  toMode: {
    xyz50: jn,
    rgb: (e) => He(jn(e))
  }
}, Yn = 1.09929682680944, mi = 0.018053968510807, Pt = (e) => {
  const t = Math.abs(e);
  return t > mi ? (Math.sign(e) || 1) * (Yn * Math.pow(t, 0.45) - (Yn - 1)) : 4.5 * e;
}, Dn = ({ x: e, y: t, z: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let a = {
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
  return r !== void 0 && (a.alpha = r), a;
}, Zn = 1.09929682680944, xi = 0.018053968510807, Ct = (e = 0) => {
  let t = Math.abs(e);
  return t < xi * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((t + Zn - 1) / Zn, 1 / 0.45);
}, Gn = (e) => {
  let t = Ct(e.r), n = Ct(e.g), r = Ct(e.b), a = {
    mode: "xyz65",
    x: 0.6369580483012911 * t + 0.1446169035862083 * n + 0.1688809751641721 * r,
    y: 0.262700212011267 * t + 0.6779980715188708 * n + 0.059301716469862 * r,
    z: 0 * t + 0.0280726930490874 * n + 1.0609850577107909 * r
  };
  return e.alpha !== void 0 && (a.alpha = e.alpha), a;
}, vi = {
  ...pe,
  mode: "rec2020",
  fromMode: {
    xyz65: Dn,
    rgb: (e) => Dn(ne(e))
  },
  toMode: {
    xyz65: Gn,
    rgb: (e) => re(Gn(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, te = 0.0037930732552754493, Nr = Math.cbrt(te), Ht = (e) => Math.cbrt(e) - Nr, yi = (e) => {
  const { r: t, g: n, b: r, alpha: a } = fe(e), i = Ht(0.3 * t + 0.622 * n + 0.078 * r + te), o = Ht(0.23 * t + 0.692 * n + 0.078 * r + te), s = Ht(
    0.2434226892454782 * t + 0.2047674442449682 * n + 0.5518098665095535 * r + te
  ), f = {
    mode: "xyb",
    x: (i - o) / 2,
    y: (i + o) / 2,
    /* Apply default chroma from luma (subtract Y from B) */
    b: s - (i + o) / 2
  };
  return a !== void 0 && (f.alpha = a), f;
}, Lt = (e) => Math.pow(e + Nr, 3), Mi = ({ x: e, y: t, b: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const a = Lt(e + t) - te, i = Lt(t - e) - te, o = Lt(n + t) - te, s = ue({
    r: 11.031566904639861 * a - 9.866943908131562 * i - 0.16462299650829934 * o,
    g: -3.2541473810744237 * a + 4.418770377582723 * i - 0.16462299650829934 * o,
    b: -3.6588512867136815 * a + 2.7129230459360922 * i + 1.9459282407775895 * o
  });
  return r !== void 0 && (s.alpha = r), s;
}, ki = {
  mode: "xyb",
  channels: ["x", "y", "b", "alpha"],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: {
    rgb: Mi
  },
  fromMode: {
    rgb: yi
  },
  ranges: {
    x: [-0.0154, 0.0281],
    y: [0, 0.8453],
    b: [-0.2778, 0.388]
  },
  interpolate: {
    x: p,
    y: p,
    b: p,
    alpha: { use: p, fixup: T }
  }
}, wi = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: He,
    lab: ln
  },
  fromMode: {
    rgb: Le,
    lab: sn
  },
  channels: ["x", "y", "z", "alpha"],
  ranges: {
    x: [0, 0.964],
    y: [0, 0.999],
    z: [0, 0.825]
  },
  interpolate: {
    x: p,
    y: p,
    z: p,
    alpha: { use: p, fixup: T }
  }
}, $i = (e) => {
  let { x: t, y: n, z: r, alpha: a } = e;
  t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 0);
  let i = {
    mode: "xyz50",
    x: 1.0479298208405488 * t + 0.0229467933410191 * n - 0.0501922295431356 * r,
    y: 0.0296278156881593 * t + 0.990434484573249 * n - 0.0170738250293851 * r,
    z: -0.0092430581525912 * t + 0.0150551448965779 * n + 0.7518742899580008 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, zi = (e) => {
  let { x: t, y: n, z: r, alpha: a } = e;
  t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 0);
  let i = {
    mode: "xyz65",
    x: 0.9554734527042182 * t - 0.0230985368742614 * n + 0.0632593086610217 * r,
    y: -0.0283697069632081 * t + 1.0099954580058226 * n + 0.021041398966943 * r,
    z: 0.0123140016883199 * t - 0.0205076964334779 * n + 1.3303659366080753 * r
  };
  return a !== void 0 && (i.alpha = a), i;
}, _i = {
  mode: "xyz65",
  toMode: {
    rgb: re,
    xyz50: $i
  },
  fromMode: {
    rgb: ne,
    xyz50: zi
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
    x: p,
    y: p,
    z: p,
    alpha: { use: p, fixup: T }
  }
}, Ti = ({ r: e, g: t, b: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const a = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * t + 0.11448223 * n,
    i: 0.59597799 * e - 0.2741761 * t - 0.32180189 * n,
    q: 0.21147017 * e - 0.52261711 * t + 0.31114694 * n
  };
  return r !== void 0 && (a.alpha = r), a;
}, Ni = ({ y: e, i: t, q: n, alpha: r }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const a = {
    mode: "rgb",
    r: e + 0.95608445 * t + 0.6208885 * n,
    g: e - 0.27137664 * t - 0.6486059 * n,
    b: e - 1.10561724 * t + 1.70250126 * n
  };
  return r !== void 0 && (a.alpha = r), a;
}, Si = {
  mode: "yiq",
  toMode: {
    rgb: Ni
  },
  fromMode: {
    rgb: Ti
  },
  channels: ["y", "i", "q", "alpha"],
  parse: ["--yiq"],
  serialize: "--yiq",
  ranges: {
    i: [-0.595, 0.595],
    q: [-0.522, 0.522]
  },
  interpolate: {
    y: p,
    i: p,
    q: p,
    alpha: { use: p, fixup: T }
  }
}, Pi = (e) => Math.max(0, Math.min(1, e || 0)), Et = (e) => Math.round(Pi(e) * 255), Ci = E("rgb"), Hi = (e) => {
  if (e === void 0)
    return;
  let t = Et(e.r), n = Et(e.g), r = Et(e.b);
  return "#" + (1 << 24 | t << 16 | n << 8 | r).toString(16).slice(1);
}, Li = (e) => Hi(Ci(e)), Sr = E("rgb"), Pr = (e) => {
  const t = {
    mode: e.mode,
    r: Math.max(0, Math.min(e.r !== void 0 ? e.r : 0, 1)),
    g: Math.max(0, Math.min(e.g !== void 0 ? e.g : 0, 1)),
    b: Math.max(0, Math.min(e.b !== void 0 ? e.b : 0, 1))
  };
  return e.alpha !== void 0 && (t.alpha = e.alpha), t;
}, Ei = (e) => Pr(Sr(e)), Cr = (e) => e !== void 0 && (e.r === void 0 || e.r >= 0 && e.r <= 1) && (e.g === void 0 || e.g >= 0 && e.g <= 1) && (e.b === void 0 || e.b >= 0 && e.b <= 1);
function qi(e) {
  return Cr(Sr(e));
}
function Hr(e = "rgb") {
  const { gamut: t } = Je(e);
  if (!t)
    return (r) => !0;
  const n = E(typeof t == "string" ? t : e);
  return (r) => Cr(n(r));
}
function Ri(e = "rgb") {
  const { gamut: t } = Je(e);
  if (!t)
    return (i) => Fe(i);
  const n = typeof t == "string" ? t : e, r = E(n), a = Hr(n);
  return (i) => {
    const o = Fe(i);
    if (!o)
      return;
    const s = r(o);
    if (a(s))
      return o;
    const f = Pr(s);
    return o.mode === f.mode ? f : E(o.mode)(f);
  };
}
function Ii(e, t = "lch", n = "rgb") {
  e = Fe(e);
  let r = n === "rgb" ? qi : Hr(n), a = n === "rgb" ? Ei : Ri(n);
  if (e === void 0 || r(e)) return e;
  let i = E(e.mode);
  e = E(t)(e);
  let o = { ...e, c: 0 };
  if (!r(o))
    return i(a(o));
  let s = 0, f = e.c !== void 0 ? e.c : 0, h = Je(t).ranges.c, g = (h[1] - h[0]) / Math.pow(2, 13), m = o.c;
  for (; f - s > g; )
    o.c = s + (f - s) * 0.5, r(o) ? (m = o.c, s = o.c) : f = o.c;
  return i(
    r(o) ? o : { ...o, c: m }
  );
}
v(ga);
v(wa);
v($a);
v(za);
v(Na);
v(cr);
v(ur);
v(Xa);
v(Aa);
v(Ya);
v(Da);
v(dn);
v(Ga);
v(cn);
v(Ba);
v(ai);
v(ii);
v(oi);
v(di);
v(ci);
v(fi);
const un = v(hi);
v(bi);
v(gi);
v(vi);
v(pe);
v(ki);
v(wi);
v(_i);
v(Si);
const Xi = E("rgb");
function Ai(e, t) {
  const n = e.getContext("2d", { willReadFrequently: !0 });
  if (!n) return;
  const { width: r, height: a } = e, i = n.createImageData(r, a), o = i.data;
  for (let s = 0; s < a; s++) {
    const f = 1 - s / (a - 1 || 1);
    for (let h = 0; h < r; h++) {
      const g = h / (r - 1 || 1), m = Xi({ mode: "hsv", h: t, s: g, v: f, alpha: 1 }), x = (s * r + h) * 4;
      if (!m) {
        o[x] = o[x + 1] = o[x + 2] = 0, o[x + 3] = 255;
        continue;
      }
      o[x] = Math.round(qt((m.r ?? 0) * 255)), o[x + 1] = Math.round(qt((m.g ?? 0) * 255)), o[x + 2] = Math.round(qt((m.b ?? 0) * 255)), o[x + 3] = 255;
    }
  }
  n.putImageData(i, 0, 0);
}
function qt(e) {
  return Math.min(255, Math.max(0, e));
}
const qe = E("rgb"), hn = E("hsv"), Fi = E("hsl");
function X(e) {
  const t = Te(e.l ?? 0), n = Math.max(0, e.c ?? 0), r = Di(e.h ?? 0), a = Te(e.alpha ?? 1), i = Ii({ mode: "oklch", l: t, c: n, h: r, alpha: a }, "rgb");
  return {
    l: i.l ?? t,
    c: i.c ?? 0,
    h: i.h ?? r,
    alpha: i.alpha ?? a
  };
}
function se(e) {
  const t = rr(e.trim());
  if (!t) return null;
  const n = un(t);
  return (n == null ? void 0 : n.l) == null ? null : X({
    l: n.l,
    c: n.c ?? 0,
    h: n.h ?? 0,
    alpha: n.alpha ?? 1
  });
}
function Jn(e) {
  const { l: t, c: n, h: r, alpha: a } = e;
  return a >= 1 ? `oklch(${(t * 100).toFixed(1)}% ${n.toFixed(4)} ${r.toFixed(1)})` : `oklch(${(t * 100).toFixed(1)}% ${n.toFixed(4)} ${r.toFixed(1)} / ${Math.round(a * 100)}%)`;
}
function _e(e) {
  return Li(qe({ mode: "oklch", ...e })) ?? "#000000";
}
function e0(e) {
  const { r: t, g: n, b: r } = bn(e);
  return e.alpha < 1 ? `rgba(${t}, ${n}, ${r}, ${e.alpha.toFixed(2)})` : `rgb(${t}, ${n}, ${r})`;
}
function bn(e) {
  const t = qe({ mode: "oklch", ...e, alpha: 1 });
  return t ? {
    r: Math.round((t.r ?? 0) * 255),
    g: Math.round((t.g ?? 0) * 255),
    b: Math.round((t.b ?? 0) * 255)
  } : { r: 0, g: 0, b: 0 };
}
function Oi(e) {
  const { r: t, g: n, b: r } = bn(e);
  return `linear-gradient(to right, rgba(${t}, ${n}, ${r}, 0), rgb(${t}, ${n}, ${r}))`;
}
function Bn(e) {
  const t = hn({ mode: "oklch", ...e, alpha: 1 });
  return (t == null ? void 0 : t.h) ?? e.h;
}
function ji(e, t) {
  const n = hn({ mode: "oklch", ...e, alpha: 1 }), r = un(qe({ mode: "hsv", h: t, s: (n == null ? void 0 : n.s) ?? 0, v: (n == null ? void 0 : n.v) ?? 1, alpha: 1 }) ?? { mode: "hsv", h: t, s: (n == null ? void 0 : n.s) ?? 0, v: (n == null ? void 0 : n.v) ?? 1 });
  return (r == null ? void 0 : r.l) == null ? X({ ...e, h: t }) : X({
    l: r.l,
    c: r.c ?? 0,
    h: r.h ?? t,
    alpha: e.alpha
  });
}
function Un(e, t) {
  switch (t) {
    case "hex":
      return [{ key: "hex", label: "HEX CODE", value: _e(e).replace("#", "").toUpperCase() }];
    case "rgb": {
      const n = qe({ mode: "oklch", ...e });
      return [
        { key: "r", label: "R", value: String(Math.round((n.r ?? 0) * 255)), min: 0, max: 255 },
        { key: "g", label: "G", value: String(Math.round((n.g ?? 0) * 255)), min: 0, max: 255 },
        { key: "b", label: "B", value: String(Math.round((n.b ?? 0) * 255)), min: 0, max: 255 }
      ];
    }
    case "hsl": {
      const n = Fi({ mode: "oklch", ...e });
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
function Yi(e, t, n) {
  switch (e) {
    case "hex": {
      const r = (t.hex ?? "").trim().replace(/^#/, "");
      if (!/^[0-9a-fA-F]{3,8}$/.test(r)) return null;
      const a = se(`#${r}`);
      return a ? Rt(a, n.alpha) : null;
    }
    case "rgb": {
      const r = Number(t.r), a = Number(t.g), i = Number(t.b);
      if ([r, a, i].some((s) => Number.isNaN(s))) return null;
      const o = se(`rgb(${It(r)}, ${It(a)}, ${It(i)})`);
      return o ? Rt(o, n.alpha) : null;
    }
    case "hsl": {
      const r = Xt(t.h), a = Xt(t.s), i = Xt(t.l);
      if ([r, a, i].some((s) => Number.isNaN(s))) return null;
      const o = se(`hsl(${r}, ${Wn(a)}%, ${Wn(i)}%)`);
      return o ? Rt(o, n.alpha) : null;
    }
    case "oklch": {
      const r = Number(t.l), a = Number(t.c), i = Number(t.h);
      return [r, a, i].some((o) => Number.isNaN(o)) ? null : X({ l: r / 100, c: a, h: i, alpha: n.alpha });
    }
  }
}
function Rt(e, t) {
  return { ...e, alpha: Te(t) };
}
function Te(e) {
  return Math.min(1, Math.max(0, e));
}
function It(e) {
  return Math.min(255, Math.max(0, Math.round(e)));
}
function Wn(e) {
  return Math.min(100, Math.max(0, e));
}
function Xt(e) {
  return Number(e.replace(/%/g, "").trim());
}
function Di(e) {
  const t = e % 360;
  return t < 0 ? t + 360 : t;
}
function Zi(e) {
  const t = hn({ mode: "oklch", ...e, alpha: 1 });
  return { x: (t == null ? void 0 : t.s) ?? 0, y: 1 - ((t == null ? void 0 : t.v) ?? 0) };
}
function Gi(e, t, n, r) {
  const a = Te(e), i = Te(t), o = un(
    qe({ mode: "hsv", h: n, s: a, v: 1 - i, alpha: 1 }) ?? {
      mode: "hsv",
      h: n,
      s: a,
      v: 1 - i
    }
  );
  return (o == null ? void 0 : o.l) != null ? X({
    l: o.l,
    c: o.c ?? 0,
    h: o.h ?? n,
    alpha: r
  }) : X({ l: 0.5, c: 0, h: n, alpha: r });
}
const Ji = {
  l: 0.62,
  c: 0.24,
  h: 303,
  alpha: 0.8
}, Lr = "pretty-color-picker-history", Er = 16;
function Bi() {
  try {
    const e = localStorage.getItem(Lr);
    if (!e) return [];
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.slice(0, Er) : [];
  } catch {
    return [];
  }
}
function Ui(e, t) {
  const n = _e(e), r = t.filter((i) => _e(i) !== n || i.alpha !== e.alpha), a = [e, ...r].slice(0, Er);
  try {
    localStorage.setItem(Lr, JSON.stringify(a));
  } catch {
  }
  return a;
}
function Kn(e, t) {
  const n = t.getBoundingClientRect(), r = Vn((e.clientX - n.left) / n.width), a = Vn((e.clientY - n.top) / n.height);
  return { x: r, y: a };
}
function At(e, t, n) {
  let r = !1;
  const a = (s) => {
    if (!r) return;
    const { x: f, y: h } = Kn(s, e);
    t(f, h);
  }, i = (s) => {
    if (r) {
      if (r = !1, (s == null ? void 0 : s.pointerId) != null)
        try {
          e.releasePointerCapture(s.pointerId);
        } catch {
        }
      window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", i), window.removeEventListener("pointercancel", i), n == null || n();
    }
  }, o = (s) => {
    if (s.button !== 0) return;
    r = !0, e.setPointerCapture(s.pointerId);
    const { x: f, y: h } = Kn(s, e);
    t(f, h), window.addEventListener("pointermove", a), window.addEventListener("pointerup", i), window.addEventListener("pointercancel", i);
  };
  return e.addEventListener("pointerdown", o), () => {
    e.removeEventListener("pointerdown", o), window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", i), window.removeEventListener("pointercancel", i);
  };
}
function Vn(e) {
  return Math.min(1, Math.max(0, e));
}
const Wi = ["hex", "rgb", "hsl", "oklch"], Ki = {
  hex: "HEX",
  rgb: "RGB",
  hsl: "HSL",
  oklch: "OKLCH"
};
var _, y, A, G, q, Ne, Se, J, F, R, O, Pe, j, le, de, Ce, B, ee, c, qr, Rr, Ir, Jt, ke, Xr, Ar, Fr, Bt, Ut, Wt, Q, we, Kt, Xe, Ae, Vt, Or, jr, Qt, Yr, en, tn, nn, rn, ie, Dr;
class Vi extends HTMLElement {
  constructor() {
    super();
    w(this, c);
    w(this, _);
    w(this, y, { ...Ji });
    w(this, A, "hsl");
    w(this, G, Bi());
    w(this, q, []);
    w(this, Ne);
    w(this, Se);
    w(this, J);
    w(this, F);
    w(this, R);
    w(this, O);
    w(this, Pe);
    w(this, j);
    w(this, le);
    w(this, de);
    w(this, Ce);
    w(this, B);
    w(this, ee);
    k(this, _, this.attachShadow({ mode: "open" }));
  }
  static get observedAttributes() {
    return ["value", "theme"];
  }
  connectedCallback() {
    u(this, c, Rr).call(this), u(this, c, Ir).call(this), u(this, c, qr).call(this), u(this, c, we).call(this);
  }
  disconnectedCallback() {
    l(this, q).forEach((n) => n()), k(this, q, []);
  }
  attributeChangedCallback(n, r, a) {
    if (!this.isConnected || n !== "value" || a == null) return;
    const i = se(a);
    i && (k(this, y, i), u(this, c, we).call(this, !1));
  }
  get value() {
    return Jn(l(this, y));
  }
  set value(n) {
    const r = se(n);
    r && (k(this, y, r), u(this, c, we).call(this));
  }
  get color() {
    return { ...l(this, y) };
  }
  set color(n) {
    k(this, y, X(n)), u(this, c, we).call(this);
  }
  get theme() {
    const n = this.getAttribute("theme");
    return n === "light" || n === "system" ? n : "dark";
  }
  set theme(n) {
    this.setAttribute("theme", n);
  }
}
_ = new WeakMap(), y = new WeakMap(), A = new WeakMap(), G = new WeakMap(), q = new WeakMap(), Ne = new WeakMap(), Se = new WeakMap(), J = new WeakMap(), F = new WeakMap(), R = new WeakMap(), O = new WeakMap(), Pe = new WeakMap(), j = new WeakMap(), le = new WeakMap(), de = new WeakMap(), Ce = new WeakMap(), B = new WeakMap(), ee = new WeakMap(), c = new WeakSet(), qr = function() {
  const n = this.getAttribute("value");
  if (n) {
    const r = se(n);
    r && k(this, y, r);
  }
}, Rr = function() {
  l(this, _).innerHTML = `
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap" />
      <style>${Br}</style>
      <div class="pcp" part="container">
        <header class="pcp-header">
          <h2 class="pcp-title">Pretty Color Picker</h2>
          <button type="button" class="pcp-close" aria-label="Close">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M4.25 4.25L11.75 11.75M11.75 4.25L4.25 11.75"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </header>
        <div class="pcp-plane-wrap pcp-clip">
          <canvas class="pcp-plane" width="320" height="240" aria-label="Color plane"></canvas>
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
          ${Wi.map((n) => `<button type="button" class="pcp-tab" role="tab" data-format="${n}">${Ki[n]}</button>`).join("")}
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
    `, k(this, Ne, l(this, _).querySelector(".pcp-plane")), k(this, Se, l(this, _).querySelector(".pcp-plane-wrap")), k(this, J, l(this, _).querySelector(".pcp-cursor")), k(this, F, l(this, _).querySelector(".pcp-hue-row")), k(this, R, l(this, F).querySelector(".pcp-slider-handle")), k(this, O, l(this, _).querySelector(".pcp-alpha-row")), k(this, Pe, l(this, _).querySelector(".pcp-slider-fill-alpha")), k(this, j, l(this, O).querySelector(".pcp-slider-handle")), k(this, le, l(this, _).querySelector(".pcp-tabs-pill")), k(this, de, l(this, _).querySelector(".pcp-fields")), k(this, Ce, l(this, _).querySelector(".pcp-swatch-fill")), k(this, B, l(this, _).querySelector(".pcp-alpha-input")), k(this, ee, l(this, _).querySelector(".pcp-history"));
}, Ir = function() {
  l(this, _).querySelector(".pcp-close").addEventListener("click", () => {
    this.dispatchEvent(new CustomEvent("close", { bubbles: !0, composed: !0 }));
  }), l(this, q).push(
    At(
      l(this, Se),
      (r, a) => u(this, c, Xr).call(this, r, a),
      () => u(this, c, ie).call(this)
    )
  ), l(this, q).push(
    At(
      l(this, F),
      (r) => u(this, c, Ar).call(this, r),
      () => u(this, c, ie).call(this)
    )
  ), l(this, q).push(
    At(
      l(this, O),
      (r) => u(this, c, Fr).call(this, r),
      () => u(this, c, ie).call(this)
    )
  ), l(this, q).push(u(this, c, Jt).call(this, l(this, F))), l(this, q).push(u(this, c, Jt).call(this, l(this, O))), l(this, _).querySelectorAll(".pcp-tab").forEach((r) => {
    r.addEventListener("click", () => {
      const a = r.dataset.format;
      a && a !== l(this, A) && (k(this, A, a), u(this, c, Xe).call(this), u(this, c, nn).call(this), u(this, c, tn).call(this), u(this, c, Ae).call(this));
    });
  }), l(this, B).addEventListener("change", () => u(this, c, Ut).call(this)), l(this, B).addEventListener("keydown", (r) => {
    r.key === "Enter" && u(this, c, Ut).call(this);
  });
}, Jt = function(n) {
  const r = () => {
    n.dataset.active = "true";
  }, a = () => {
    const i = n.querySelector(".pcp-slider-handle");
    i != null && i.hasAttribute("data-dragging") || delete n.dataset.active;
  };
  return n.addEventListener("pointerenter", r), n.addEventListener("pointerleave", a), () => {
    n.removeEventListener("pointerenter", r), n.removeEventListener("pointerleave", a);
  };
}, ke = function(n, r) {
  const a = Math.max(0, Math.min(1, r)) * 100;
  n.style.left = `max(1px, calc(${a}% - 1.5px))`;
}, Xr = function(n, r) {
  l(this, J).dataset.dragging = "true";
  const a = u(this, c, Bt).call(this);
  u(this, c, Q).call(this, Gi(n, r, a, l(this, y).alpha), !1), u(this, c, Vt).call(this, n, r);
}, Ar = function(n) {
  l(this, F).dataset.active = "true", l(this, R).dataset.dragging = "true";
  const r = n * 360;
  u(this, c, Q).call(this, ji(l(this, y), r), !1), u(this, c, ke).call(this, l(this, R), n), u(this, c, Xe).call(this), u(this, c, Ae).call(this);
}, Fr = function(n) {
  l(this, O).dataset.active = "true", l(this, j).dataset.dragging = "true", u(this, c, Q).call(this, X({ ...l(this, y), alpha: n }), !1), u(this, c, ke).call(this, l(this, j), n);
}, Bt = function() {
  const r = l(this, R).style.left.match(/calc\(([\d.]+)%/);
  return r ? parseFloat(r[1]) / 100 * 360 : Bn(l(this, y));
}, Ut = function() {
  const n = l(this, B).value.replace(/%/g, "").trim(), r = Number(n);
  if (Number.isNaN(r)) {
    u(this, c, en).call(this);
    return;
  }
  u(this, c, Q).call(this, X({ ...l(this, y), alpha: r / 100 })), u(this, c, ie).call(this);
}, Wt = function(n, r) {
  const a = {};
  Un(l(this, y), l(this, A)).forEach((o) => {
    a[o.key] = o.key === n ? r : o.value;
  });
  const i = Yi(l(this, A), a, l(this, y));
  i && (u(this, c, Q).call(this, i), u(this, c, ie).call(this));
}, Q = function(n, r = !0) {
  k(this, y, X(n)), u(this, c, Kt).call(this, r);
}, we = function(n = !0) {
  u(this, c, Xe).call(this), u(this, c, nn).call(this), u(this, c, Kt).call(this, n), u(this, c, rn).call(this);
}, Kt = function(n) {
  u(this, c, tn).call(this), u(this, c, Yr).call(this), u(this, c, Or).call(this), u(this, c, Ae).call(this), n && u(this, c, Dr).call(this);
}, Xe = function() {
  const n = u(this, c, Bt).call(this);
  Ai(l(this, Ne), n);
}, Ae = function() {
  const { x: n, y: r } = Zi(l(this, y));
  u(this, c, Vt).call(this, n, r);
}, Vt = function(n, r) {
  l(this, J).style.left = `${n * 100}%`, l(this, J).style.top = `${r * 100}%`;
}, Or = function() {
  const n = Bn(l(this, y));
  l(this, R).hasAttribute("data-dragging") || u(this, c, ke).call(this, l(this, R), n / 360), l(this, j).hasAttribute("data-dragging") || u(this, c, ke).call(this, l(this, j), l(this, y).alpha), u(this, c, jr).call(this);
}, jr = function() {
  l(this, Pe).style.setProperty("--pcp-alpha-gradient", Oi(l(this, y)));
}, Qt = function(n, r) {
  const { r: a, g: i, b: o } = bn(r);
  n.style.setProperty("--swatch-solid", `rgb(${a}, ${i}, ${o})`), n.style.setProperty("--swatch-alpha", `rgba(${a}, ${i}, ${o}, ${r.alpha})`);
}, Yr = function() {
  u(this, c, Qt).call(this, l(this, Ce), l(this, y));
}, en = function() {
  l(this, B).value = `${Math.round(l(this, y).alpha * 100)}%`;
}, tn = function() {
  const n = Un(l(this, y), l(this, A));
  l(this, de).innerHTML = n.map(
    (r) => `
        <div class="pcp-field">
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
  ).join(""), l(this, de).querySelectorAll(".pcp-field-input").forEach((r) => {
    const a = r, i = a.dataset.key;
    a.addEventListener("change", () => u(this, c, Wt).call(this, i, a.value)), a.addEventListener("keydown", (o) => {
      o.key === "Enter" && u(this, c, Wt).call(this, i, a.value);
    });
  }), u(this, c, en).call(this);
}, nn = function() {
  const n = l(this, _).querySelectorAll(".pcp-tab");
  let r = null;
  if (n.forEach((a) => {
    const i = a.dataset.format === l(this, A);
    a.setAttribute("data-active", String(i)), a.setAttribute("aria-selected", String(i)), i && (r = a);
  }), r) {
    const a = r, i = a.offsetLeft, o = a.offsetWidth;
    l(this, le).style.left = `${i}px`, l(this, le).style.width = `${o}px`;
  }
}, rn = function() {
  l(this, ee).innerHTML = l(this, G).map((n, r) => `
          <button type="button" class="pcp-history-swatch pcp-clip" data-index="${r}" aria-label="Color ${_e(n)}">
            <span class="pcp-swatch-fill" data-history-fill="${r}"></span>
          </button>
        `).join(""), l(this, ee).querySelectorAll("[data-history-fill]").forEach((n) => {
    const r = Number(n.dataset.historyFill), a = l(this, G)[r];
    a && u(this, c, Qt).call(this, n, a);
  }), l(this, ee).querySelectorAll(".pcp-history-swatch").forEach((n) => {
    n.addEventListener("click", () => {
      const r = Number(n.dataset.index), a = l(this, G)[r];
      a && u(this, c, Q).call(this, { ...a });
    });
  });
}, ie = function() {
  delete l(this, J).dataset.dragging, delete l(this, R).dataset.dragging, delete l(this, j).dataset.dragging, delete l(this, F).dataset.active, delete l(this, O).dataset.active, k(this, G, Ui(l(this, y), l(this, G))), u(this, c, rn).call(this);
}, Dr = function() {
  const n = {
    color: { ...l(this, y) },
    css: Jn(l(this, y)),
    hex: _e(l(this, y))
  };
  this.dispatchEvent(
    new CustomEvent("change", {
      detail: n,
      bubbles: !0,
      composed: !0
    })
  );
};
customElements.get("pretty-color-picker") || customElements.define("pretty-color-picker", Vi);
export {
  Ji as DEFAULT_COLOR,
  Vi as PrettyColorPicker,
  Un as formatFieldsFor,
  X as normalizeOklch,
  se as oklchFromCss,
  Jn as oklchToCss,
  _e as oklchToHex,
  e0 as oklchToRgbString,
  Yi as parseFormatFields
};
