var kn = (e) => {
  throw TypeError(e);
};
var ct = (e, t, n) => t.has(e) || kn("Cannot " + n);
var l = (e, t, n) => (ct(e, t, "read from private field"), n ? n.call(e) : t.get(e)), w = (e, t, n) => t.has(e) ? kn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), k = (e, t, n, a) => (ct(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n), p = (e, t, n) => (ct(e, t, "access private method"), n);
const Ba = ':host{--pcp-bg: #1a1a1a;--pcp-border: #2e2e2e;--pcp-border-hover: #454545;--pcp-surface: #1f1f1f;--pcp-surface-hover: #292929;--pcp-surface-active: #292929;--pcp-surface-subtle: #2e2e2e;--pcp-tab-pill: #292929;--pcp-text-primary: #ededed;--pcp-text-label: #a0a0a0;--pcp-text-tertiary: #8f8f8f;--pcp-text-focus: #ffffff;--pcp-checker-base: #999;--pcp-checker-tone: #888;--pcp-radius-sm: 6px;--pcp-radius: 8px;--pcp-radius-lg: 12px;--pcp-control-height: 28px;--pcp-tab-row-height: 36px;--pcp-field-label-size: 11px;--pcp-field-label-line: 13px;--pcp-field-label-gap: 4px;--pcp-field-value-size: 13px;--pcp-field-value-line: 18px;--pcp-field-input-height: 21px;--pcp-input-panel-height: calc( var(--pcp-field-label-line) + var(--pcp-field-label-gap) + var(--pcp-field-input-height) );--pcp-input-row-padding: 8px;--pcp-ease-out: cubic-bezier(.175, .885, .32, 1.1);--pcp-font: "Geist", system-ui, -apple-system, "SF Pro Display", sans-serif;--pcp-mono: "Geist Mono", ui-monospace, monospace;display:inline-block;font-family:var(--pcp-font);-webkit-font-smoothing:antialiased;color:var(--pcp-text-primary)}*,*:before,*:after{box-sizing:border-box}.pcp-clip{overflow:hidden;isolation:isolate;transform:translateZ(0)}.pcp-swatch-fill{display:block;width:100%;height:100%;border-radius:inherit;background-color:var(--pcp-checker-base);background-image:linear-gradient(to right,var(--swatch-solid, #000) 50%,transparent 50%),linear-gradient(to right,transparent 50%,var(--swatch-alpha, rgba(0, 0, 0, .5)) 50%),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,100% 100%,5px 5px,5px 5px,5px 5px,5px 5px;background-position:0 0,0 0,0 0,0 2.5px,2.5px -2.5px,-2.5px 0}.pcp{width:280px;background:var(--pcp-bg);border:1px solid var(--pcp-border);border-radius:var(--pcp-radius-lg);padding:12px;-webkit-user-select:none;user-select:none}.pcp-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;min-height:28px}.pcp-title{font-size:14px;font-weight:500;color:var(--pcp-text-primary);margin:0}.pcp-close{display:flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;border:none;border-radius:6px;background:transparent;color:var(--pcp-text-label);cursor:pointer;font-size:18px;line-height:1;transition:background .15s var(--pcp-ease-out),color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-close:hover{background:var(--pcp-surface-hover);color:var(--pcp-text-primary)}}.pcp-close:active{transform:scale(.97)}.pcp-plane-wrap{position:relative;width:100%;aspect-ratio:4 / 3;border-radius:var(--pcp-radius-sm);margin-bottom:8px;cursor:crosshair;touch-action:none}.pcp-plane{display:block;width:100%;height:100%}.pcp-cursor{position:absolute;width:16px;height:16px;margin:-8px 0 0 -8px;border:2px solid #fff;border-radius:50%;box-shadow:0 0 0 1px #00000059,inset 0 0 0 1px #00000026;pointer-events:none}.pcp-cursor[data-dragging=true]{transition:none}.pcp-slider-wrapper{position:relative;height:var(--pcp-control-height);margin-bottom:8px}.pcp-slider{position:absolute;top:0;right:0;bottom:0;left:0;cursor:pointer;-webkit-user-select:none;user-select:none;border-radius:var(--pcp-radius-sm);background:transparent;touch-action:none}.pcp-slider-fill{position:absolute;top:-1px;right:-1px;bottom:-1px;left:-1px;border-radius:var(--pcp-radius-sm);pointer-events:none}.pcp-slider-fill-hue{background:linear-gradient(to right,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.pcp-slider-fill-alpha{--pcp-alpha-gradient: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));background-color:var(--pcp-checker-base);background-image:var(--pcp-alpha-gradient),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,6px 6px,6px 6px,6px 6px,6px 6px;background-position:0 0,0 0,0 3px,3px -3px,-3px 0}.pcp-slider-handle{position:absolute;top:50%;left:0;z-index:1;width:3px;height:20px;border:none;outline:none;border-radius:999px;background:var(--pcp-text-primary);pointer-events:none;transform:translateY(-50%) scaleX(.25);transform-origin:center center;opacity:0;box-shadow:none;filter:none;transition:transform .25s cubic-bezier(.34,1.15,.64,1),opacity .15s ease}.pcp-slider:hover .pcp-slider-handle,.pcp-slider[data-active=true] .pcp-slider-handle{transform:translateY(-50%) scaleX(1);opacity:.5}.pcp-slider-handle[data-dragging=true]{transform:translateY(-50%) scaleX(1);opacity:.9;transition:opacity .15s ease}@media(hover:hover)and (pointer:fine){.pcp-slider:hover .pcp-slider-handle:not([data-dragging=true]){transform:translateY(-50%) scaleX(1);opacity:.5}}.pcp-tabs{position:relative;display:flex;align-items:center;height:var(--pcp-tab-row-height);box-sizing:border-box;padding:2px;margin-bottom:10px;background:transparent;border-radius:var(--pcp-radius)}.pcp-tabs-pill{position:absolute;top:2px;bottom:2px;background:var(--pcp-tab-pill);border-radius:6px;z-index:0;pointer-events:none;transition:left .2s var(--pcp-ease-out),width .2s var(--pcp-ease-out)}.pcp-tab{position:relative;z-index:1;flex:1;display:flex;align-items:center;justify-content:center;height:100%;padding:0 4px;font-family:inherit;font-size:13px;font-weight:500;line-height:1;text-align:center;background:transparent;border:none;color:var(--pcp-text-label);cursor:pointer;transition:color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-tab[data-active=true]{color:var(--pcp-text-primary)}.pcp-tab:active{transform:scale(.97)}.pcp-inputs{display:flex;align-items:center;gap:8px;margin-bottom:14px;padding:var(--pcp-input-row-padding);background:var(--pcp-surface);border-radius:var(--pcp-radius-sm)}.pcp-swatch{flex-shrink:0;width:var(--pcp-input-panel-height);height:var(--pcp-input-panel-height);border-radius:var(--pcp-radius-sm);position:relative}.pcp-fields{display:flex;flex:1;gap:4px;min-width:0;align-items:center}.pcp-field{flex:1;min-width:0;display:flex;flex-direction:column;align-items:stretch;justify-content:center;gap:var(--pcp-field-label-gap)}.pcp-field-label{display:block;font-size:var(--pcp-field-label-size);font-weight:500;line-height:var(--pcp-field-label-line);color:var(--pcp-text-tertiary);margin:0;text-align:center}.pcp-field-input{width:100%;height:var(--pcp-field-input-height);padding:0 2px;font-family:var(--pcp-mono);font-size:var(--pcp-field-value-size);font-weight:500;line-height:var(--pcp-field-input-height);font-variant-numeric:tabular-nums;text-align:center;color:var(--pcp-text-label);background:transparent;border:none;border-radius:3px;outline:none;box-shadow:none;transition:color .15s var(--pcp-ease-out),background .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-field-input:hover{background:var(--pcp-surface-hover)}}.pcp-field-input:focus{color:var(--pcp-text-focus);background:transparent;box-shadow:none;outline:none}.pcp-alpha-field{flex:0 0 52px}.pcp-history-label{font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--pcp-text-tertiary);margin:0 0 8px}.pcp-history{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:6px}.pcp-history-swatch{-moz-appearance:none;appearance:none;-webkit-appearance:none;width:100%;aspect-ratio:1;height:auto;padding:0;border:none;background:none;border-radius:5px;cursor:pointer;transition:opacity .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-history-swatch:hover{opacity:.85}}.pcp-history-swatch:active{opacity:.7}@media(prefers-reduced-motion:reduce){.pcp-close,.pcp-tab,.pcp-tabs-pill,.pcp-cursor,.pcp-slider-handle,.pcp-history-swatch{transition:none}.pcp-tab:active,.pcp-close:active{transform:none}}', Qn = (e, t) => {
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
}, Ua = {
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
}, Wa = (e) => Qn(Ua[e.toLowerCase()], 6), Ka = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, Va = (e) => {
  let t;
  return (t = e.match(Ka)) ? Qn(parseInt(t[1], 16), t[1].length) : void 0;
}, U = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", $e = `${U}%`, rn = `(?:${U}%|${U})`, Qa = `(?:${U}(deg|grad|rad|turn)|${U})`, fe = "\\s*,\\s*", ei = new RegExp(
  `^rgba?\\(\\s*${U}${fe}${U}${fe}${U}\\s*(?:,\\s*${rn}\\s*)?\\)$`
), ti = new RegExp(
  `^rgba?\\(\\s*${$e}${fe}${$e}${fe}${$e}\\s*(?:,\\s*${rn}\\s*)?\\)$`
), ni = (e) => {
  let t = { mode: "rgb" }, n;
  if (n = e.match(ei))
    n[1] !== void 0 && (t.r = n[1] / 255), n[2] !== void 0 && (t.g = n[2] / 255), n[3] !== void 0 && (t.b = n[3] / 255);
  else if (n = e.match(ti))
    n[1] !== void 0 && (t.r = n[1] / 100), n[2] !== void 0 && (t.g = n[2] / 100), n[3] !== void 0 && (t.b = n[3] / 100);
  else
    return;
  return n[4] !== void 0 ? t.alpha = Math.max(0, Math.min(1, n[4] / 100)) : n[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[5]))), t;
}, Fe = (e, t) => e === void 0 ? void 0 : typeof e != "object" ? aa(e) : e.mode !== void 0 ? e : t ? { ...e, mode: t } : void 0, q = (e = "rgb") => (t) => (t = Fe(t, e)) !== void 0 ? (
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
) : void 0, I = {}, ea = {}, Oe = [], ta = {}, ai = (e) => e, v = (e) => (I[e.mode] = {
  ...I[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
  I[t] || (I[t] = {}), I[t][e.mode] = e.fromMode[t];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((t) => {
  if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t])
    throw new Error(`Missing interpolator for: ${t}`);
  typeof e.interpolate[t] == "function" && (e.interpolate[t] = {
    use: e.interpolate[t]
  }), e.interpolate[t].fixup || (e.interpolate[t].fixup = ai);
}), ea[e.mode] = e, (e.parse || []).forEach((t) => {
  ii(t, e.mode);
}), q(e.mode)), Je = (e) => ea[e], ii = (e, t) => {
  if (typeof e == "string") {
    if (!t)
      throw new Error("'mode' required when 'parser' is a string");
    ta[e] = t;
  } else typeof e == "function" && Oe.indexOf(e) < 0 && Oe.push(e);
}, Ft = /[^\x00-\x7F]|[a-zA-Z_]/, ri = /[^\x00-\x7F]|[-\w]/, d = {
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
function Ee(e) {
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
const oi = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function Me(e) {
  let t = "";
  if ((e[b] === "-" || e[b] === "+") && (t += e[b++]), t += Ie(e), e[b] === "." && /\d/.test(e[b + 1]) && (t += e[b++] + Ie(e)), (e[b] === "e" || e[b] === "E") && ((e[b + 1] === "-" || e[b + 1] === "+") && /\d/.test(e[b + 2]) ? t += e[b++] + e[b++] + Ie(e) : /\d/.test(e[b + 1]) && (t += e[b++] + Ie(e))), Ot(e)) {
    let n = je(e);
    return n === "deg" || n === "rad" || n === "turn" || n === "grad" ? { type: d.Hue, value: t * oi[n] } : void 0;
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
  for (; b < e.length && ri.test(e[b]); )
    t += e[b++];
  return t;
}
function si(e) {
  let t = je(e);
  return e[b] === "(" ? (b++, { type: d.Function, value: t }) : t === "none" ? { type: d.None, value: void 0 } : { type: d.Ident, value: t };
}
function li(e = "") {
  let t = e.trim(), n = [], a;
  for (b = 0; b < t.length; ) {
    if (a = t[b++], a === `
` || a === "	" || a === " ") {
      for (; b < t.length && (t[b] === `
` || t[b] === "	" || t[b] === " "); )
        b++;
      continue;
    }
    if (a === ",")
      return;
    if (a === ")") {
      n.push({ type: d.ParenClose });
      continue;
    }
    if (a === "+") {
      if (b--, Ee(t)) {
        n.push(Me(t));
        continue;
      }
      return;
    }
    if (a === "-") {
      if (b--, Ee(t)) {
        n.push(Me(t));
        continue;
      }
      if (Ot(t)) {
        n.push({ type: d.Ident, value: je(t) });
        continue;
      }
      return;
    }
    if (a === ".") {
      if (b--, Ee(t)) {
        n.push(Me(t));
        continue;
      }
      return;
    }
    if (a === "/") {
      for (; b < t.length && (t[b] === `
` || t[b] === "	" || t[b] === " "); )
        b++;
      let i;
      if (Ee(t) && (i = Me(t), i.type !== d.Hue)) {
        n.push({ type: d.Alpha, value: i });
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
    if (/\d/.test(a)) {
      b--, n.push(Me(t));
      continue;
    }
    if (Ft.test(a)) {
      b--, n.push(si(t));
      continue;
    }
    return;
  }
  return n;
}
function di(e) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== d.Function || t.value !== "color" || (t = e[e._i++], t.type !== d.Ident))
    return;
  const n = ta[t.value];
  if (!n)
    return;
  const a = { mode: n }, i = na(e, !1);
  if (!i)
    return;
  const r = Je(n).channels;
  for (let o = 0, s, u; o < r.length; o++)
    s = i[o], u = r[o], s.type !== d.None && (a[u] = s.type === d.Number ? s.value : s.value / 100, u === "alpha" && (a[u] = Math.max(0, Math.min(1, a[u]))));
  return a;
}
function na(e, t) {
  const n = [];
  let a;
  for (; e._i < e.length; ) {
    if (a = e[e._i++], a.type === d.None || a.type === d.Number || a.type === d.Alpha || a.type === d.Percentage || t && a.type === d.Hue) {
      n.push(a);
      continue;
    }
    if (a.type === d.ParenClose) {
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
    return n.length === 3 && n.push({ type: d.None, value: void 0 }), n.every((i) => i.type !== d.Alpha) ? n : void 0;
  }
}
function fi(e, t) {
  e._i = 0;
  let n = e[e._i++];
  if (!n || n.type !== d.Function)
    return;
  let a = na(e, t);
  if (a)
    return a.unshift(n.value), a;
}
const aa = (e) => {
  if (typeof e != "string")
    return;
  const t = li(e), n = t ? fi(t, !0) : void 0;
  let a, i = 0, r = Oe.length;
  for (; i < r; )
    if ((a = Oe[i++](e, n)) !== void 0)
      return a;
  return t ? di(t) : void 0;
};
function ci(e, t) {
  if (!t || t[0] !== "rgb" && t[0] !== "rgba")
    return;
  const n = { mode: "rgb" }, [, a, i, r, o] = t;
  if (!(a.type === d.Hue || i.type === d.Hue || r.type === d.Hue))
    return a.type !== d.None && (n.r = a.type === d.Number ? a.value / 255 : a.value / 100), i.type !== d.None && (n.g = i.type === d.Number ? i.value / 255 : i.value / 100), r.type !== d.None && (n.b = r.type === d.Number ? r.value / 255 : r.value / 100), o.type !== d.None && (n.alpha = Math.min(
      1,
      Math.max(
        0,
        o.type === d.Number ? o.value : o.value / 100
      )
    )), n;
}
const ui = (e) => e === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0, pi = (e, t, n) => e + n * (t - e), hi = (e) => {
  let t = [];
  for (let n = 0; n < e.length - 1; n++) {
    let a = e[n], i = e[n + 1];
    a === void 0 && i === void 0 ? t.push(void 0) : a !== void 0 && i !== void 0 ? t.push([a, i]) : t.push(a !== void 0 ? [a, a] : [i, i]);
  }
  return t;
}, bi = (e) => (t) => {
  let n = hi(t);
  return (a) => {
    let i = a * n.length, r = a >= 1 ? n.length - 1 : Math.max(Math.floor(i), 0), o = n[r];
    return o === void 0 ? void 0 : e(o[0], o[1], i - r);
  };
}, c = bi(pi), T = (e) => {
  let t = !1, n = e.map((a) => a !== void 0 ? (t = !0, a) : 1);
  return t ? n : e;
}, ce = {
  mode: "rgb",
  channels: ["r", "g", "b", "alpha"],
  parse: [
    ci,
    Va,
    ni,
    Wa,
    ui,
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
}, ut = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), wn = (e) => {
  let t = ut(e.r), n = ut(e.g), a = ut(e.b), i = {
    mode: "xyz65",
    x: 0.5766690429101305 * t + 0.1855582379065463 * n + 0.1882286462349947 * a,
    y: 0.297344975250536 * t + 0.6273635662554661 * n + 0.0752914584939979 * a,
    z: 0.0270313613864123 * t + 0.0706888525358272 * n + 0.9913375368376386 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, pt = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), $n = ({ x: e, y: t, z: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = {
    mode: "a98",
    r: pt(
      e * 2.0415879038107465 - t * 0.5650069742788597 - 0.3447313507783297 * n
    ),
    g: pt(
      e * -0.9692436362808798 + t * 1.8759675015077206 + 0.0415550574071756 * n
    ),
    b: pt(
      e * 0.0134442806320312 - t * 0.1183623922310184 + 1.0151749943912058 * n
    )
  };
  return a !== void 0 && (i.alpha = a), i;
}, ht = (e = 0) => {
  const t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((t + 0.055) / 1.055, 2.4);
}, ue = ({ r: e, g: t, b: n, alpha: a }) => {
  let i = {
    mode: "lrgb",
    r: ht(e),
    g: ht(t),
    b: ht(n)
  };
  return a !== void 0 && (i.alpha = a), i;
}, ne = (e) => {
  let { r: t, g: n, b: a, alpha: i } = ue(e), r = {
    mode: "xyz65",
    x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * a,
    y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * a,
    z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * a
  };
  return i !== void 0 && (r.alpha = i), r;
}, bt = (e = 0) => {
  const t = Math.abs(e);
  return t > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(t, 1 / 2.4) - 0.055) : e * 12.92;
}, pe = ({ r: e, g: t, b: n, alpha: a }, i = "rgb") => {
  let r = {
    mode: i,
    r: bt(e),
    g: bt(t),
    b: bt(n)
  };
  return a !== void 0 && (r.alpha = a), r;
}, ae = ({ x: e, y: t, z: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = pe({
    r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
    g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
    b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n
  });
  return a !== void 0 && (i.alpha = a), i;
}, gi = {
  ...ce,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => $n(ne(e)),
    xyz65: $n
  },
  toMode: {
    rgb: (e) => ae(wn(e)),
    xyz65: wn
  }
}, H = (e) => (e = e % 360) < 0 ? e + 360 : e, mi = (e, t) => e.map((n, a, i) => {
  if (n === void 0)
    return n;
  let r = H(n);
  return a === 0 || e[a - 1] === void 0 ? r : t(r - H(i[a - 1]));
}).reduce((n, a) => !n.length || a === void 0 || n[n.length - 1] === void 0 ? (n.push(a), n) : (n.push(a + n[n.length - 1]), n), []), Y = (e) => mi(e, (t) => Math.abs(t) <= 180 ? t : t - 360 * Math.sign(t)), S = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0], xi = Math.PI / 180, vi = 180 / Math.PI;
let zn = S[3] * S[4], _n = S[1] * S[4], Tn = S[1] * S[2] - S[0] * S[3];
const yi = ({ r: e, g: t, b: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = (Tn * n + e * zn - t * _n) / (Tn + zn - _n), r = n - i, o = (S[4] * (t - i) - S[2] * r) / S[3], s = {
    mode: "cubehelix",
    l: i,
    s: i === 0 || i === 1 ? void 0 : Math.sqrt(r * r + o * o) / (S[4] * i * (1 - i))
  };
  return s.s && (s.h = Math.atan2(o, r) * vi - 120), a !== void 0 && (s.alpha = a), s;
}, Mi = ({ h: e, s: t, l: n, alpha: a }) => {
  let i = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * xi, n === void 0 && (n = 0);
  let r = t === void 0 ? 0 : t * n * (1 - n), o = Math.cos(e), s = Math.sin(e);
  return i.r = n + r * (S[0] * o + S[1] * s), i.g = n + r * (S[2] * o + S[3] * s), i.b = n + r * (S[4] * o + S[5] * s), a !== void 0 && (i.alpha = a), i;
}, Be = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.s || !t.s)
    return 0;
  let n = H(e.h), a = H(t.h), i = Math.sin((a - n + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * t.s) * i;
}, ki = (e, t) => {
  if (e.h === void 0 || t.h === void 0)
    return 0;
  let n = H(e.h), a = H(t.h);
  return Math.abs(a - n) > 180 ? n - (a - 360 * Math.sign(a - n)) : a - n;
}, Ue = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.c || !t.c)
    return 0;
  let n = H(e.h), a = H(t.h), i = Math.sin((a - n + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * t.c) * i;
}, D = (e) => {
  let t = e.reduce(
    (a, i) => {
      if (i !== void 0) {
        let r = i * Math.PI / 180;
        a.sin += Math.sin(r), a.cos += Math.cos(r);
      }
      return a;
    },
    { sin: 0, cos: 0 }
  ), n = Math.atan2(t.sin, t.cos) * 180 / Math.PI;
  return n < 0 ? 360 + n : n;
}, wi = {
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
    rgb: yi
  },
  toMode: {
    rgb: Mi
  },
  interpolate: {
    h: {
      use: c,
      fixup: Y
    },
    s: c,
    l: c,
    alpha: {
      use: c,
      fixup: T
    }
  },
  difference: {
    h: Be
  },
  average: {
    h: D
  }
}, W = ({ l: e, a: t, b: n, alpha: a }, i = "lch") => {
  t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = Math.sqrt(t * t + n * n), o = { mode: i, l: e, c: r };
  return r && (o.h = H(Math.atan2(n, t) * 180 / Math.PI)), a !== void 0 && (o.alpha = a), o;
}, K = ({ l: e, c: t, h: n, alpha: a }, i = "lab") => {
  n === void 0 && (n = 0);
  let r = {
    mode: i,
    l: e,
    a: t ? t * Math.cos(n / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(n / 180 * Math.PI) : 0
  };
  return a !== void 0 && (r.alpha = a), r;
}, ia = Math.pow(29, 3) / Math.pow(3, 3), ra = Math.pow(6, 3) / Math.pow(29, 3), $ = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: (1 - 0.3457 - 0.3585) / 0.3585
}, oe = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: (1 - 0.3127 - 0.329) / 0.329
};
let gt = (e) => Math.pow(e, 3) > ra ? Math.pow(e, 3) : (116 * e - 16) / ia;
const oa = ({ l: e, a: t, b: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = (e + 16) / 116, r = t / 500 + i, o = i - n / 200, s = {
    mode: "xyz65",
    x: gt(r) * oe.X,
    y: gt(i) * oe.Y,
    z: gt(o) * oe.Z
  };
  return a !== void 0 && (s.alpha = a), s;
}, We = (e) => ae(oa(e)), mt = (e) => e > ra ? Math.cbrt(e) : (ia * e + 16) / 116, sa = ({ x: e, y: t, z: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = mt(e / oe.X), r = mt(t / oe.Y), o = mt(n / oe.Z), s = {
    mode: "lab65",
    l: 116 * r - 16,
    a: 500 * (i - r),
    b: 200 * (r - o)
  };
  return a !== void 0 && (s.alpha = a), s;
}, Ke = (e) => {
  let t = sa(ne(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Ye = 1, la = 1, ze = 26 / 180 * Math.PI, De = Math.cos(ze), Ze = Math.sin(ze), da = 100 / Math.log(139 / 100), jt = ({ l: e, c: t, h: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = {
    mode: "lab65",
    l: (Math.exp(e * Ye / da) - 1) / 39e-4
  }, r = (Math.exp(0.0435 * t * la * Ye) - 1) / 0.075, o = r * Math.cos(n / 180 * Math.PI - ze), s = r * Math.sin(n / 180 * Math.PI - ze);
  return i.a = o * De - s / 0.83 * Ze, i.b = o * Ze + s / 0.83 * De, a !== void 0 && (i.alpha = a), i;
}, Yt = ({ l: e, a: t, b: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = t * De + n * Ze, r = 0.83 * (n * De - t * Ze), o = Math.sqrt(i * i + r * r), s = {
    mode: "dlch",
    l: da / Ye * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * o) / (0.0435 * la * Ye)
  };
  return s.c && (s.h = H((Math.atan2(r, i) + ze) / Math.PI * 180)), a !== void 0 && (s.alpha = a), s;
}, Nn = (e) => jt(W(e, "dlch")), Sn = (e) => K(Yt(e), "dlab"), $i = {
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
    l: c,
    a: c,
    b: c,
    alpha: {
      use: c,
      fixup: T
    }
  }
}, zi = {
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
    l: c,
    c,
    h: {
      use: c,
      fixup: Y
    },
    alpha: {
      use: c,
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
function _i({ h: e, s: t, i: n, alpha: a }) {
  e = H(e !== void 0 ? e : 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = Math.abs(e / 60 % 2 - 1), r;
  switch (Math.floor(e / 60)) {
    case 0:
      r = {
        r: n * (1 + t * (3 / (2 - i) - 1)),
        g: n * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
        b: n * (1 - t)
      };
      break;
    case 1:
      r = {
        r: n * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
        g: n * (1 + t * (3 / (2 - i) - 1)),
        b: n * (1 - t)
      };
      break;
    case 2:
      r = {
        r: n * (1 - t),
        g: n * (1 + t * (3 / (2 - i) - 1)),
        b: n * (1 + t * (3 * (1 - i) / (2 - i) - 1))
      };
      break;
    case 3:
      r = {
        r: n * (1 - t),
        g: n * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
        b: n * (1 + t * (3 / (2 - i) - 1))
      };
      break;
    case 4:
      r = {
        r: n * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
        g: n * (1 - t),
        b: n * (1 + t * (3 / (2 - i) - 1))
      };
      break;
    case 5:
      r = {
        r: n * (1 + t * (3 / (2 - i) - 1)),
        g: n * (1 - t),
        b: n * (1 + t * (3 * (1 - i) / (2 - i) - 1))
      };
      break;
    default:
      r = { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t) };
  }
  return r.mode = "rgb", a !== void 0 && (r.alpha = a), r;
}
function Ti({ r: e, g: t, b: n, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = Math.max(e, t, n), r = Math.min(e, t, n), o = {
    mode: "hsi",
    s: e + t + n === 0 ? 0 : 1 - 3 * r / (e + t + n),
    i: (e + t + n) / 3
  };
  return i - r !== 0 && (o.h = (i === e ? (t - n) / (i - r) + (t < n) * 6 : i === t ? (n - e) / (i - r) + 2 : (e - t) / (i - r) + 4) * 60), a !== void 0 && (o.alpha = a), o;
}
const Ni = {
  mode: "hsi",
  toMode: {
    rgb: _i
  },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: {
    rgb: Ti
  },
  channels: ["h", "s", "i", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: c, fixup: Y },
    s: c,
    i: c,
    alpha: { use: c, fixup: T }
  },
  difference: {
    h: Be
  },
  average: {
    h: D
  }
};
function Si({ h: e, s: t, l: n, alpha: a }) {
  e = H(e !== void 0 ? e : 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = n + t * (n < 0.5 ? n : 1 - n), r = i - (i - n) * 2 * Math.abs(e / 60 % 2 - 1), o;
  switch (Math.floor(e / 60)) {
    case 0:
      o = { r: i, g: r, b: 2 * n - i };
      break;
    case 1:
      o = { r, g: i, b: 2 * n - i };
      break;
    case 2:
      o = { r: 2 * n - i, g: i, b: r };
      break;
    case 3:
      o = { r: 2 * n - i, g: r, b: i };
      break;
    case 4:
      o = { r, g: 2 * n - i, b: i };
      break;
    case 5:
      o = { r: i, g: 2 * n - i, b: r };
      break;
    default:
      o = { r: 2 * n - i, g: 2 * n - i, b: 2 * n - i };
  }
  return o.mode = "rgb", a !== void 0 && (o.alpha = a), o;
}
function Pi({ r: e, g: t, b: n, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = Math.max(e, t, n), r = Math.min(e, t, n), o = {
    mode: "hsl",
    s: i === r ? 0 : (i - r) / (1 - Math.abs(i + r - 1)),
    l: 0.5 * (i + r)
  };
  return i - r !== 0 && (o.h = (i === e ? (t - n) / (i - r) + (t < n) * 6 : i === t ? (n - e) / (i - r) + 2 : (e - t) / (i - r) + 4) * 60), a !== void 0 && (o.alpha = a), o;
}
const Hi = (e, t) => {
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
}, Ci = new RegExp(
  `^hsla?\\(\\s*${Qa}${fe}${$e}${fe}${$e}\\s*(?:,\\s*${rn}\\s*)?\\)$`
), Li = (e) => {
  let t = e.match(Ci);
  if (!t) return;
  let n = { mode: "hsl" };
  return t[3] !== void 0 ? n.h = +t[3] : t[1] !== void 0 && t[2] !== void 0 && (n.h = Hi(t[1], t[2])), t[4] !== void 0 && (n.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (n.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] !== void 0 ? n.alpha = Math.max(0, Math.min(1, t[6] / 100)) : t[7] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[7]))), n;
};
function qi(e, t) {
  if (!t || t[0] !== "hsl" && t[0] !== "hsla")
    return;
  const n = { mode: "hsl" }, [, a, i, r, o] = t;
  if (a.type !== d.None) {
    if (a.type === d.Percentage)
      return;
    n.h = a.value;
  }
  if (i.type !== d.None) {
    if (i.type === d.Hue)
      return;
    n.s = i.value / 100;
  }
  if (r.type !== d.None) {
    if (r.type === d.Hue)
      return;
    n.l = r.value / 100;
  }
  return o.type !== d.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === d.Number ? o.value : o.value / 100
    )
  )), n;
}
const fa = {
  mode: "hsl",
  toMode: {
    rgb: Si
  },
  fromMode: {
    rgb: Pi
  },
  channels: ["h", "s", "l", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [qi, Li],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: c, fixup: Y },
    s: c,
    l: c,
    alpha: { use: c, fixup: T }
  },
  difference: {
    h: Be
  },
  average: {
    h: D
  }
};
function ca({ h: e, s: t, v: n, alpha: a }) {
  e = H(e !== void 0 ? e : 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = Math.abs(e / 60 % 2 - 1), r;
  switch (Math.floor(e / 60)) {
    case 0:
      r = { r: n, g: n * (1 - t * i), b: n * (1 - t) };
      break;
    case 1:
      r = { r: n * (1 - t * i), g: n, b: n * (1 - t) };
      break;
    case 2:
      r = { r: n * (1 - t), g: n, b: n * (1 - t * i) };
      break;
    case 3:
      r = { r: n * (1 - t), g: n * (1 - t * i), b: n };
      break;
    case 4:
      r = { r: n * (1 - t * i), g: n * (1 - t), b: n };
      break;
    case 5:
      r = { r: n, g: n * (1 - t), b: n * (1 - t * i) };
      break;
    default:
      r = { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t) };
  }
  return r.mode = "rgb", a !== void 0 && (r.alpha = a), r;
}
function ua({ r: e, g: t, b: n, alpha: a }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = Math.max(e, t, n), r = Math.min(e, t, n), o = {
    mode: "hsv",
    s: i === 0 ? 0 : 1 - r / i,
    v: i
  };
  return i - r !== 0 && (o.h = (i === e ? (t - n) / (i - r) + (t < n) * 6 : i === t ? (n - e) / (i - r) + 2 : (e - t) / (i - r) + 4) * 60), a !== void 0 && (o.alpha = a), o;
}
const pa = {
  mode: "hsv",
  toMode: {
    rgb: ca
  },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: {
    rgb: ua
  },
  channels: ["h", "s", "v", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: c, fixup: Y },
    s: c,
    v: c,
    alpha: { use: c, fixup: T }
  },
  difference: {
    h: Be
  },
  average: {
    h: D
  }
};
function Ri({ h: e, w: t, b: n, alpha: a }) {
  if (t === void 0 && (t = 0), n === void 0 && (n = 0), t + n > 1) {
    let i = t + n;
    t /= i, n /= i;
  }
  return ca({
    h: e,
    s: n === 1 ? 1 : 1 - t / (1 - n),
    v: 1 - n,
    alpha: a
  });
}
function Ei(e) {
  let t = ua(e);
  if (t === void 0) return;
  let n = t.s !== void 0 ? t.s : 0, a = t.v !== void 0 ? t.v : 0, i = {
    mode: "hwb",
    w: (1 - n) * a,
    b: 1 - a
  };
  return t.h !== void 0 && (i.h = t.h), t.alpha !== void 0 && (i.alpha = t.alpha), i;
}
function Ii(e, t) {
  if (!t || t[0] !== "hwb")
    return;
  const n = { mode: "hwb" }, [, a, i, r, o] = t;
  if (a.type !== d.None) {
    if (a.type === d.Percentage)
      return;
    n.h = a.value;
  }
  if (i.type !== d.None) {
    if (i.type === d.Hue)
      return;
    n.w = i.value / 100;
  }
  if (r.type !== d.None) {
    if (r.type === d.Hue)
      return;
    n.b = r.value / 100;
  }
  return o.type !== d.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === d.Number ? o.value : o.value / 100
    )
  )), n;
}
const Xi = {
  mode: "hwb",
  toMode: {
    rgb: Ri
  },
  fromMode: {
    rgb: Ei
  },
  channels: ["h", "w", "b", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Ii],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: c, fixup: Y },
    w: c,
    b: c,
    alpha: { use: c, fixup: T }
  },
  difference: {
    h: ki
  },
  average: {
    h: D
  }
}, ha = 203, Ve = 0.1593017578125, ba = 78.84375, Qe = 0.8359375, et = 18.8515625, tt = 18.6875;
function xt(e) {
  if (e < 0) return 0;
  const t = Math.pow(e, 1 / ba);
  return 1e4 * Math.pow(Math.max(0, t - Qe) / (et - tt * t), 1 / Ve);
}
function vt(e) {
  if (e < 0) return 0;
  const t = Math.pow(e / 1e4, Ve);
  return Math.pow((Qe + et * t) / (1 + tt * t), ba);
}
const yt = (e) => Math.max(e / ha, 0), Pn = ({ i: e, t, p: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const i = xt(
    e + 0.008609037037932761 * t + 0.11102962500302593 * n
  ), r = xt(
    e - 0.00860903703793275 * t - 0.11102962500302599 * n
  ), o = xt(
    e + 0.5600313357106791 * t - 0.32062717498731885 * n
  ), s = {
    mode: "xyz65",
    x: yt(
      2.070152218389422 * i - 1.3263473389671556 * r + 0.2066510476294051 * o
    ),
    y: yt(
      0.3647385209748074 * i + 0.680566024947227 * r - 0.0453045459220346 * o
    ),
    z: yt(
      -0.049747207535812 * i - 0.0492609666966138 * r + 1.1880659249923042 * o
    )
  };
  return a !== void 0 && (s.alpha = a), s;
}, Mt = (e = 0) => Math.max(e * ha, 0), Hn = ({ x: e, y: t, z: n, alpha: a }) => {
  const i = Mt(e), r = Mt(t), o = Mt(n), s = vt(
    0.3592832590121217 * i + 0.6976051147779502 * r - 0.0358915932320289 * o
  ), u = vt(
    -0.1920808463704995 * i + 1.1004767970374323 * r + 0.0753748658519118 * o
  ), h = vt(
    0.0070797844607477 * i + 0.0748396662186366 * r + 0.8433265453898765 * o
  ), g = 0.5 * s + 0.5 * u, m = 1.61376953125 * s - 3.323486328125 * u + 1.709716796875 * h, x = 4.378173828125 * s - 4.24560546875 * u - 0.132568359375 * h, M = { mode: "itp", i: g, t: m, p: x };
  return a !== void 0 && (M.alpha = a), M;
}, Ai = {
  mode: "itp",
  channels: ["i", "t", "p", "alpha"],
  parse: ["--ictcp"],
  serialize: "--ictcp",
  toMode: {
    xyz65: Pn,
    rgb: (e) => ae(Pn(e))
  },
  fromMode: {
    xyz65: Hn,
    rgb: (e) => Hn(ne(e))
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
}, Fi = 134.03437499999998, Oi = 16295499532821565e-27, kt = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e / 1e4, Ve);
  return Math.pow((Qe + et * t) / (1 + tt * t), Fi);
}, wt = (e = 0) => Math.max(e * 203, 0), ga = ({ x: e, y: t, z: n, alpha: a }) => {
  e = wt(e), t = wt(t), n = wt(n);
  let i = 1.15 * e - 0.15 * n, r = 0.66 * t + 0.34 * e, o = kt(0.41478972 * i + 0.579999 * r + 0.014648 * n), s = kt(-0.20151 * i + 1.120649 * r + 0.0531008 * n), u = kt(-0.0166008 * i + 0.2648 * r + 0.6684799 * n), h = (o + s) / 2, g = {
    mode: "jab",
    j: 0.44 * h / (1 - 0.56 * h) - Oi,
    a: 3.524 * o - 4.066708 * s + 0.542708 * u,
    b: 0.199076 * o + 1.096799 * s - 1.295875 * u
  };
  return a !== void 0 && (g.alpha = a), g;
}, ji = 134.03437499999998, Cn = 16295499532821565e-27, $t = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e, 1 / ji);
  return 1e4 * Math.pow((Qe - t) / (tt * t - et), 1 / Ve);
}, zt = (e) => e / 203, ma = ({ j: e, a: t, b: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = (e + Cn) / (0.44 + 0.56 * (e + Cn)), r = $t(i + 0.13860504 * t + 0.058047316 * n), o = $t(i - 0.13860504 * t - 0.058047316 * n), s = $t(i - 0.096019242 * t - 0.8118919 * n), u = {
    mode: "xyz65",
    x: zt(
      1.661373024652174 * r - 0.914523081304348 * o + 0.23136208173913045 * s
    ),
    y: zt(
      -0.3250758611844533 * r + 1.571847026732543 * o - 0.21825383453227928 * s
    ),
    z: zt(-0.090982811 * r - 0.31272829 * o + 1.5227666 * s)
  };
  return a !== void 0 && (u.alpha = a), u;
}, xa = (e) => {
  let t = ga(ne(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, va = (e) => ae(ma(e)), Yi = {
  mode: "jab",
  channels: ["j", "a", "b", "alpha"],
  parse: ["--jzazbz"],
  serialize: "--jzazbz",
  fromMode: {
    rgb: xa,
    xyz65: ga
  },
  toMode: {
    rgb: va,
    xyz65: ma
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
}, Ln = ({ j: e, a: t, b: n, alpha: a }) => {
  t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = Math.sqrt(t * t + n * n), r = {
    mode: "jch",
    j: e,
    c: i
  };
  return i && (r.h = H(Math.atan2(n, t) * 180 / Math.PI)), a !== void 0 && (r.alpha = a), r;
}, qn = ({ j: e, c: t, h: n, alpha: a }) => {
  n === void 0 && (n = 0);
  let i = {
    mode: "jab",
    j: e,
    a: t ? t * Math.cos(n / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(n / 180 * Math.PI) : 0
  };
  return a !== void 0 && (i.alpha = a), i;
}, Di = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: qn,
    rgb: (e) => va(qn(e))
  },
  fromMode: {
    rgb: (e) => Ln(xa(e)),
    jab: Ln
  },
  channels: ["j", "c", "h", "alpha"],
  ranges: {
    j: [0, 0.221],
    c: [0, 0.19],
    h: [0, 360]
  },
  interpolate: {
    h: { use: c, fixup: Y },
    c,
    j: c,
    alpha: { use: c, fixup: T }
  },
  difference: {
    h: Ue
  },
  average: {
    h: D
  }
}, nt = Math.pow(29, 3) / Math.pow(3, 3), on = Math.pow(6, 3) / Math.pow(29, 3);
let _t = (e) => Math.pow(e, 3) > on ? Math.pow(e, 3) : (116 * e - 16) / nt;
const sn = ({ l: e, a: t, b: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = (e + 16) / 116, r = t / 500 + i, o = i - n / 200, s = {
    mode: "xyz50",
    x: _t(r) * $.X,
    y: _t(i) * $.Y,
    z: _t(o) * $.Z
  };
  return a !== void 0 && (s.alpha = a), s;
}, Ce = ({ x: e, y: t, z: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = pe({
    r: e * 3.1341359569958707 - t * 1.6173863321612538 - 0.4906619460083532 * n,
    g: e * -0.978795502912089 + t * 1.916254567259524 + 0.03344273116131949 * n,
    b: e * 0.07195537988411677 - t * 0.2289768264158322 + 1.405386058324125 * n
  });
  return a !== void 0 && (i.alpha = a), i;
}, ya = (e) => Ce(sn(e)), Le = (e) => {
  let { r: t, g: n, b: a, alpha: i } = ue(e), r = {
    mode: "xyz50",
    x: 0.436065742824811 * t + 0.3851514688337912 * n + 0.14307845442264197 * a,
    y: 0.22249319175623702 * t + 0.7168870538238823 * n + 0.06061979053616537 * a,
    z: 0.013923904500943465 * t + 0.09708128566574634 * n + 0.7140993584005155 * a
  };
  return i !== void 0 && (r.alpha = i), r;
}, Tt = (e) => e > on ? Math.cbrt(e) : (nt * e + 16) / 116, ln = ({ x: e, y: t, z: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = Tt(e / $.X), r = Tt(t / $.Y), o = Tt(n / $.Z), s = {
    mode: "lab",
    l: 116 * r - 16,
    a: 500 * (i - r),
    b: 200 * (r - o)
  };
  return a !== void 0 && (s.alpha = a), s;
}, Ma = (e) => {
  let t = ln(Le(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
};
function Zi(e, t) {
  if (!t || t[0] !== "lab")
    return;
  const n = { mode: "lab" }, [, a, i, r, o] = t;
  if (!(a.type === d.Hue || i.type === d.Hue || r.type === d.Hue))
    return a.type !== d.None && (n.l = Math.min(Math.max(0, a.value), 100)), i.type !== d.None && (n.a = i.type === d.Number ? i.value : i.value * 125 / 100), r.type !== d.None && (n.b = r.type === d.Number ? r.value : r.value * 125 / 100), o.type !== d.None && (n.alpha = Math.min(
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
    rgb: ya
  },
  fromMode: {
    xyz50: ln,
    rgb: Ma
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  },
  parse: [Zi],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: c,
    a: c,
    b: c,
    alpha: { use: c, fixup: T }
  }
}, Gi = {
  ...dn,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: oa,
    rgb: We
  },
  fromMode: {
    xyz65: sa,
    rgb: Ke
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function Ji(e, t) {
  if (!t || t[0] !== "lch")
    return;
  const n = { mode: "lch" }, [, a, i, r, o] = t;
  if (a.type !== d.None) {
    if (a.type === d.Hue)
      return;
    n.l = Math.min(Math.max(0, a.value), 100);
  }
  if (i.type !== d.None && (n.c = Math.max(
    0,
    i.type === d.Number ? i.value : i.value * 150 / 100
  )), r.type !== d.None) {
    if (r.type === d.Percentage)
      return;
    n.h = r.value;
  }
  return o.type !== d.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === d.Number ? o.value : o.value / 100
    )
  )), n;
}
const fn = {
  mode: "lch",
  toMode: {
    lab: K,
    rgb: (e) => ya(K(e))
  },
  fromMode: {
    rgb: (e) => W(Ma(e)),
    lab: W
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  },
  parse: [Ji],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: c, fixup: Y },
    c,
    l: c,
    alpha: { use: c, fixup: T }
  },
  difference: {
    h: Ue
  },
  average: {
    h: D
  }
}, Bi = {
  ...fn,
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
}, ka = ({ l: e, u: t, v: n, alpha: a }) => {
  t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = Math.sqrt(t * t + n * n), r = {
    mode: "lchuv",
    l: e,
    c: i
  };
  return i && (r.h = H(Math.atan2(n, t) * 180 / Math.PI)), a !== void 0 && (r.alpha = a), r;
}, wa = ({ l: e, c: t, h: n, alpha: a }) => {
  n === void 0 && (n = 0);
  let i = {
    mode: "luv",
    l: e,
    u: t ? t * Math.cos(n / 180 * Math.PI) : 0,
    v: t ? t * Math.sin(n / 180 * Math.PI) : 0
  };
  return a !== void 0 && (i.alpha = a), i;
}, $a = (e, t, n) => 4 * e / (e + 15 * t + 3 * n), za = (e, t, n) => 9 * t / (e + 15 * t + 3 * n), Ui = $a($.X, $.Y, $.Z), Wi = za($.X, $.Y, $.Z), Ki = (e) => e <= on ? nt * e : 116 * Math.cbrt(e) - 16, Dt = ({ x: e, y: t, z: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = Ki(t / $.Y), r = $a(e, t, n), o = za(e, t, n);
  !isFinite(r) || !isFinite(o) ? i = r = o = 0 : (r = 13 * i * (r - Ui), o = 13 * i * (o - Wi));
  let s = {
    mode: "luv",
    l: i,
    u: r,
    v: o
  };
  return a !== void 0 && (s.alpha = a), s;
}, Vi = (e, t, n) => 4 * e / (e + 15 * t + 3 * n), Qi = (e, t, n) => 9 * t / (e + 15 * t + 3 * n), er = Vi($.X, $.Y, $.Z), tr = Qi($.X, $.Y, $.Z), Zt = ({ l: e, u: t, v: n, alpha: a }) => {
  if (e === void 0 && (e = 0), e === 0)
    return { mode: "xyz50", x: 0, y: 0, z: 0 };
  t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = t / (13 * e) + er, r = n / (13 * e) + tr, o = $.Y * (e <= 8 ? e / nt : Math.pow((e + 16) / 116, 3)), s = o * (9 * i) / (4 * r), u = o * (12 - 3 * i - 20 * r) / (4 * r), h = { mode: "xyz50", x: s, y: o, z: u };
  return a !== void 0 && (h.alpha = a), h;
}, nr = (e) => ka(Dt(Le(e))), ar = (e) => Ce(Zt(wa(e))), ir = {
  mode: "lchuv",
  toMode: {
    luv: wa,
    rgb: ar
  },
  fromMode: {
    rgb: nr,
    luv: ka
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
    h: { use: c, fixup: Y },
    c,
    l: c,
    alpha: { use: c, fixup: T }
  },
  difference: {
    h: Ue
  },
  average: {
    h: D
  }
}, rr = {
  ...ce,
  mode: "lrgb",
  toMode: {
    rgb: pe
  },
  fromMode: {
    rgb: ue
  },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, or = {
  mode: "luv",
  toMode: {
    xyz50: Zt,
    rgb: (e) => Ce(Zt(e))
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
    l: c,
    u: c,
    v: c,
    alpha: { use: c, fixup: T }
  }
}, _a = ({ r: e, g: t, b: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = Math.cbrt(
    0.412221469470763 * e + 0.5363325372617348 * t + 0.0514459932675022 * n
  ), r = Math.cbrt(
    0.2119034958178252 * e + 0.6806995506452344 * t + 0.1073969535369406 * n
  ), o = Math.cbrt(
    0.0883024591900564 * e + 0.2817188391361215 * t + 0.6299787016738222 * n
  ), s = {
    mode: "oklab",
    l: 0.210454268309314 * i + 0.7936177747023054 * r - 0.0040720430116193 * o,
    a: 1.9779985324311684 * i - 2.42859224204858 * r + 0.450593709617411 * o,
    b: 0.0259040424655478 * i + 0.7827717124575296 * r - 0.8086757549230774 * o
  };
  return a !== void 0 && (s.alpha = a), s;
}, at = (e) => {
  let t = _a(ue(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, qe = ({ l: e, a: t, b: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = Math.pow(e + 0.3963377773761749 * t + 0.2158037573099136 * n, 3), r = Math.pow(e - 0.1055613458156586 * t - 0.0638541728258133 * n, 3), o = Math.pow(e - 0.0894841775298119 * t - 1.2914855480194092 * n, 3), s = {
    mode: "lrgb",
    r: 4.076741636075957 * i - 3.3077115392580616 * r + 0.2309699031821044 * o,
    g: -1.2684379732850317 * i + 2.6097573492876887 * r - 0.3413193760026573 * o,
    b: -0.0041960761386756 * i - 0.7034186179359362 * r + 1.7076146940746117 * o
  };
  return a !== void 0 && (s.alpha = a), s;
}, it = (e) => pe(qe(e));
function Gt(e) {
  const a = 1.170873786407767;
  return 0.5 * (a * e - 0.206 + Math.sqrt((a * e - 0.206) * (a * e - 0.206) + 4 * 0.03 * a * e));
}
function Ge(e) {
  return (e * e + 0.206 * e) / (1.170873786407767 * (e + 0.03));
}
function sr(e, t) {
  let n, a, i, r, o, s, u, h;
  -1.88170328 * e - 0.80936493 * t > 1 ? (n = 1.19086277, a = 1.76576728, i = 0.59662641, r = 0.75515197, o = 0.56771245, s = 4.0767416621, u = -3.3077115913, h = 0.2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (n = 0.73956515, a = -0.45954404, i = 0.08285427, r = 0.1254107, o = 0.14503204, s = -1.2684380046, u = 2.6097574011, h = -0.3413193965) : (n = 1.35733652, a = -915799e-8, i = -1.1513021, r = -0.50559606, o = 692167e-8, s = -0.0041960863, u = -0.7034186147, h = 1.707614701);
  let g = n + a * e + i * t + r * e * e + o * e * t, m = 0.3963377774 * e + 0.2158037573 * t, x = -0.1055613458 * e - 0.0638541728 * t, M = -0.0894841775 * e - 1.291485548 * t;
  {
    let z = 1 + g * m, P = 1 + g * x, N = 1 + g * M, L = z * z * z, C = P * P * P, Z = N * N * N, he = 3 * m * z * z, be = 3 * x * P * P, ge = 3 * M * N * N, me = 6 * m * m * z, xe = 6 * x * x * P, ve = 6 * M * M * N, ie = s * L + u * C + h * Z, V = s * he + u * be + h * ge, ye = s * me + u * xe + h * ve;
    g = g - ie * V / (V * V - 0.5 * ie * ye);
  }
  return g;
}
function cn(e, t) {
  let n = sr(e, t), a = qe({ l: 1, a: n * e, b: n * t }), i = Math.cbrt(1 / Math.max(a.r, a.g, a.b)), r = i * n;
  return [i, r];
}
function lr(e, t, n, a, i, r = null) {
  r || (r = cn(e, t));
  let o;
  if ((n - i) * r[1] - (r[0] - i) * a <= 0)
    o = r[1] * i / (a * r[0] + r[1] * (i - n));
  else {
    o = r[1] * (i - 1) / (a * (r[0] - 1) + r[1] * (i - n));
    {
      let s = n - i, u = a, h = 0.3963377774 * e + 0.2158037573 * t, g = -0.1055613458 * e - 0.0638541728 * t, m = -0.0894841775 * e - 1.291485548 * t, x = s + u * h, M = s + u * g, z = s + u * m;
      {
        let P = i * (1 - o) + o * n, N = o * a, L = P + N * h, C = P + N * g, Z = P + N * m, he = L * L * L, be = C * C * C, ge = Z * Z * Z, me = 3 * x * L * L, xe = 3 * M * C * C, ve = 3 * z * Z * Z, ie = 6 * x * x * L, V = 6 * M * M * C, ye = 6 * z * z * Z, gn = 4.0767416621 * he - 3.3077115913 * be + 0.2309699292 * ge - 1, rt = 4.0767416621 * me - 3.3077115913 * xe + 0.2309699292 * ve, Za = 4.0767416621 * ie - 3.3077115913 * V + 0.2309699292 * ye, mn = rt / (rt * rt - 0.5 * gn * Za), ot = -gn * mn, xn = -1.2684380046 * he + 2.6097574011 * be - 0.3413193965 * ge - 1, st = -1.2684380046 * me + 2.6097574011 * xe - 0.3413193965 * ve, Ga = -1.2684380046 * ie + 2.6097574011 * V - 0.3413193965 * ye, vn = st / (st * st - 0.5 * xn * Ga), lt = -xn * vn, yn = -0.0041960863 * he - 0.7034186147 * be + 1.707614701 * ge - 1, dt = -0.0041960863 * me - 0.7034186147 * xe + 1.707614701 * ve, Ja = -0.0041960863 * ie - 0.7034186147 * V + 1.707614701 * ye, Mn = dt / (dt * dt - 0.5 * yn * Ja), ft = -yn * Mn;
        ot = mn >= 0 ? ot : 1e6, lt = vn >= 0 ? lt : 1e6, ft = Mn >= 0 ? ft : 1e6, o += Math.min(ot, Math.min(lt, ft));
      }
    }
  }
  return o;
}
function un(e, t, n = null) {
  n || (n = cn(e, t));
  let a = n[0], i = n[1];
  return [i / a, i / (1 - a)];
}
function Ta(e, t, n) {
  let a = cn(t, n), i = lr(t, n, e, 1, e, a), r = un(t, n, a), o = 0.11516993 + 1 / (7.4477897 + 4.1590124 * n + t * (-2.19557347 + 1.75198401 * n + t * (-2.13704948 - 10.02301043 * n + t * (-4.24894561 + 5.38770819 * n + 4.69891013 * t)))), s = 0.11239642 + 1 / (1.6132032 - 0.68124379 * n + t * (0.40370612 + 0.90148123 * n + t * (-0.27087943 + 0.6122399 * n + t * (299215e-8 - 0.45399568 * n - 0.14661872 * t)))), u = i / Math.min(e * r[0], (1 - e) * r[1]), h = e * o, g = (1 - e) * s, m = 0.9 * u * Math.sqrt(
    Math.sqrt(
      1 / (1 / (h * h * h * h) + 1 / (g * g * g * g))
    )
  );
  return h = e * 0.4, g = (1 - e) * 0.8, [Math.sqrt(1 / (1 / (h * h) + 1 / (g * g))), m, i];
}
function Rn(e) {
  const t = e.l !== void 0 ? e.l : 0, n = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = { mode: "okhsl", l: Gt(t) };
  e.alpha !== void 0 && (i.alpha = e.alpha);
  let r = Math.sqrt(n * n + a * a);
  if (!r)
    return i.s = 0, i;
  let [o, s, u] = Ta(t, n / r, a / r), h;
  if (r < s) {
    let g = 0, m = 0.8 * o, x = 1 - m / s;
    h = (r - g) / (m + x * (r - g)) * 0.8;
  } else {
    let g = s, m = 0.2 * s * s * 1.25 * 1.25 / o, x = 1 - m / (u - s);
    h = 0.8 + 0.2 * ((r - g) / (m + x * (r - g)));
  }
  return h && (i.s = h, i.h = H(Math.atan2(a, n) * 180 / Math.PI)), i;
}
function En(e) {
  let t = e.h !== void 0 ? e.h : 0, n = e.s !== void 0 ? e.s : 0, a = e.l !== void 0 ? e.l : 0;
  const i = { mode: "oklab", l: Ge(a) };
  if (e.alpha !== void 0 && (i.alpha = e.alpha), !n || a === 1)
    return i.a = i.b = 0, i;
  let r = Math.cos(t / 180 * Math.PI), o = Math.sin(t / 180 * Math.PI), [s, u, h] = Ta(i.l, r, o), g, m, x, M;
  n < 0.8 ? (g = 1.25 * n, m = 0, x = 0.8 * s, M = 1 - x / u) : (g = 5 * (n - 0.8), m = u, x = 0.2 * u * u * 1.25 * 1.25 / s, M = 1 - x / (h - u));
  let z = m + g * x / (1 - M * g);
  return i.a = z * r, i.b = z * o, i;
}
const dr = {
  ...fa,
  mode: "okhsl",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--okhsl"],
  serialize: "--okhsl",
  fromMode: {
    oklab: Rn,
    rgb: (e) => Rn(at(e))
  },
  toMode: {
    oklab: En,
    rgb: (e) => it(En(e))
  }
};
function In(e) {
  let t = e.l !== void 0 ? e.l : 0, n = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = Math.sqrt(n * n + a * a), r = i ? n / i : 1, o = i ? a / i : 1, [s, u] = un(r, o), h = 0.5, g = 1 - h / s, m = u / (i + t * u), x = m * t, M = m * i, z = Ge(x), P = M * z / x, N = qe({ l: z, a: r * P, b: o * P }), L = Math.cbrt(
    1 / Math.max(N.r, N.g, N.b, 0)
  );
  t = t / L, i = i / L * Gt(t) / t, t = Gt(t);
  const C = {
    mode: "okhsv",
    s: i ? (h + u) * M / (u * h + u * g * M) : 0,
    v: t ? t / x : 0
  };
  return C.s && (C.h = H(Math.atan2(a, n) * 180 / Math.PI)), e.alpha !== void 0 && (C.alpha = e.alpha), C;
}
function Xn(e) {
  const t = { mode: "oklab" };
  e.alpha !== void 0 && (t.alpha = e.alpha);
  const n = e.h !== void 0 ? e.h : 0, a = e.s !== void 0 ? e.s : 0, i = e.v !== void 0 ? e.v : 0, r = Math.cos(n / 180 * Math.PI), o = Math.sin(n / 180 * Math.PI), [s, u] = un(r, o), h = 0.5, g = 1 - h / s, m = 1 - a * h / (h + u - u * g * a), x = a * u * h / (h + u - u * g * a), M = Ge(m), z = x * M / m, P = qe({
    l: M,
    a: r * z,
    b: o * z
  }), N = Math.cbrt(
    1 / Math.max(P.r, P.g, P.b, 0)
  ), L = Ge(i * m), C = x * L / m;
  return t.l = L * N, t.a = C * r * N, t.b = C * o * N, t;
}
const fr = {
  ...pa,
  mode: "okhsv",
  channels: ["h", "s", "v", "alpha"],
  parse: ["--okhsv"],
  serialize: "--okhsv",
  fromMode: {
    oklab: In,
    rgb: (e) => In(at(e))
  },
  toMode: {
    oklab: Xn,
    rgb: (e) => it(Xn(e))
  }
};
function cr(e, t) {
  if (!t || t[0] !== "oklab")
    return;
  const n = { mode: "oklab" }, [, a, i, r, o] = t;
  if (!(a.type === d.Hue || i.type === d.Hue || r.type === d.Hue))
    return a.type !== d.None && (n.l = Math.min(
      Math.max(0, a.type === d.Number ? a.value : a.value / 100),
      1
    )), i.type !== d.None && (n.a = i.type === d.Number ? i.value : i.value * 0.4 / 100), r.type !== d.None && (n.b = r.type === d.Number ? r.value : r.value * 0.4 / 100), o.type !== d.None && (n.alpha = Math.min(
      1,
      Math.max(
        0,
        o.type === d.Number ? o.value : o.value / 100
      )
    )), n;
}
const ur = {
  ...dn,
  mode: "oklab",
  toMode: {
    lrgb: qe,
    rgb: it
  },
  fromMode: {
    lrgb: _a,
    rgb: at
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [cr],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function pr(e, t) {
  if (!t || t[0] !== "oklch")
    return;
  const n = { mode: "oklch" }, [, a, i, r, o] = t;
  if (a.type !== d.None) {
    if (a.type === d.Hue)
      return;
    n.l = Math.min(
      Math.max(0, a.type === d.Number ? a.value : a.value / 100),
      1
    );
  }
  if (i.type !== d.None && (n.c = Math.max(
    0,
    i.type === d.Number ? i.value : i.value * 0.4 / 100
  )), r.type !== d.None) {
    if (r.type === d.Percentage)
      return;
    n.h = r.value;
  }
  return o.type !== d.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      o.type === d.Number ? o.value : o.value / 100
    )
  )), n;
}
const hr = {
  ...fn,
  mode: "oklch",
  toMode: {
    oklab: (e) => K(e, "oklab"),
    rgb: (e) => it(K(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => W(at(e), "oklch"),
    oklab: (e) => W(e, "oklch")
  },
  parse: [pr],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, An = (e) => {
  let { r: t, g: n, b: a, alpha: i } = ue(e), r = {
    mode: "xyz65",
    x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * a,
    y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * a,
    z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * a
  };
  return i !== void 0 && (r.alpha = i), r;
}, Fn = ({ x: e, y: t, z: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = pe(
    {
      r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
      g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
      b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n
    },
    "p3"
  );
  return a !== void 0 && (i.alpha = a), i;
}, br = {
  ...ce,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => Fn(ne(e)),
    xyz65: Fn
  },
  toMode: {
    rgb: (e) => ae(An(e)),
    xyz65: An
  }
}, Nt = (e) => {
  let t = Math.abs(e);
  return t >= 1 / 512 ? Math.sign(e) * Math.pow(t, 1 / 1.8) : 16 * e;
}, On = ({ x: e, y: t, z: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = {
    mode: "prophoto",
    r: Nt(
      e * 1.3457868816471585 - t * 0.2555720873797946 - 0.0511018649755453 * n
    ),
    g: Nt(
      e * -0.5446307051249019 + t * 1.5082477428451466 + 0.0205274474364214 * n
    ),
    b: Nt(e * 0 + t * 0 + 1.2119675456389452 * n)
  };
  return a !== void 0 && (i.alpha = a), i;
}, St = (e = 0) => {
  let t = Math.abs(e);
  return t >= 16 / 512 ? Math.sign(e) * Math.pow(t, 1.8) : e / 16;
}, jn = (e) => {
  let t = St(e.r), n = St(e.g), a = St(e.b), i = {
    mode: "xyz50",
    x: 0.7977666449006423 * t + 0.1351812974005331 * n + 0.0313477341283922 * a,
    y: 0.2880748288194013 * t + 0.7118352342418731 * n + 899369387256e-16 * a,
    z: 0 * t + 0 * n + 0.8251046025104602 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, gr = {
  ...ce,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: On,
    rgb: (e) => On(Le(e))
  },
  toMode: {
    xyz50: jn,
    rgb: (e) => Ce(jn(e))
  }
}, Yn = 1.09929682680944, mr = 0.018053968510807, Pt = (e) => {
  const t = Math.abs(e);
  return t > mr ? (Math.sign(e) || 1) * (Yn * Math.pow(t, 0.45) - (Yn - 1)) : 4.5 * e;
}, Dn = ({ x: e, y: t, z: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = {
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
  return a !== void 0 && (i.alpha = a), i;
}, Zn = 1.09929682680944, xr = 0.018053968510807, Ht = (e = 0) => {
  let t = Math.abs(e);
  return t < xr * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((t + Zn - 1) / Zn, 1 / 0.45);
}, Gn = (e) => {
  let t = Ht(e.r), n = Ht(e.g), a = Ht(e.b), i = {
    mode: "xyz65",
    x: 0.6369580483012911 * t + 0.1446169035862083 * n + 0.1688809751641721 * a,
    y: 0.262700212011267 * t + 0.6779980715188708 * n + 0.059301716469862 * a,
    z: 0 * t + 0.0280726930490874 * n + 1.0609850577107909 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, vr = {
  ...ce,
  mode: "rec2020",
  fromMode: {
    xyz65: Dn,
    rgb: (e) => Dn(ne(e))
  },
  toMode: {
    xyz65: Gn,
    rgb: (e) => ae(Gn(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, te = 0.0037930732552754493, Na = Math.cbrt(te), Ct = (e) => Math.cbrt(e) - Na, yr = (e) => {
  const { r: t, g: n, b: a, alpha: i } = ue(e), r = Ct(0.3 * t + 0.622 * n + 0.078 * a + te), o = Ct(0.23 * t + 0.692 * n + 0.078 * a + te), s = Ct(
    0.2434226892454782 * t + 0.2047674442449682 * n + 0.5518098665095535 * a + te
  ), u = {
    mode: "xyb",
    x: (r - o) / 2,
    y: (r + o) / 2,
    /* Apply default chroma from luma (subtract Y from B) */
    b: s - (r + o) / 2
  };
  return i !== void 0 && (u.alpha = i), u;
}, Lt = (e) => Math.pow(e + Na, 3), Mr = ({ x: e, y: t, b: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const i = Lt(e + t) - te, r = Lt(t - e) - te, o = Lt(n + t) - te, s = pe({
    r: 11.031566904639861 * i - 9.866943908131562 * r - 0.16462299650829934 * o,
    g: -3.2541473810744237 * i + 4.418770377582723 * r - 0.16462299650829934 * o,
    b: -3.6588512867136815 * i + 2.7129230459360922 * r + 1.9459282407775895 * o
  });
  return a !== void 0 && (s.alpha = a), s;
}, kr = {
  mode: "xyb",
  channels: ["x", "y", "b", "alpha"],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: {
    rgb: Mr
  },
  fromMode: {
    rgb: yr
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
}, wr = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: Ce,
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
    x: c,
    y: c,
    z: c,
    alpha: { use: c, fixup: T }
  }
}, $r = (e) => {
  let { x: t, y: n, z: a, alpha: i } = e;
  t === void 0 && (t = 0), n === void 0 && (n = 0), a === void 0 && (a = 0);
  let r = {
    mode: "xyz50",
    x: 1.0479298208405488 * t + 0.0229467933410191 * n - 0.0501922295431356 * a,
    y: 0.0296278156881593 * t + 0.990434484573249 * n - 0.0170738250293851 * a,
    z: -0.0092430581525912 * t + 0.0150551448965779 * n + 0.7518742899580008 * a
  };
  return i !== void 0 && (r.alpha = i), r;
}, zr = (e) => {
  let { x: t, y: n, z: a, alpha: i } = e;
  t === void 0 && (t = 0), n === void 0 && (n = 0), a === void 0 && (a = 0);
  let r = {
    mode: "xyz65",
    x: 0.9554734527042182 * t - 0.0230985368742614 * n + 0.0632593086610217 * a,
    y: -0.0283697069632081 * t + 1.0099954580058226 * n + 0.021041398966943 * a,
    z: 0.0123140016883199 * t - 0.0205076964334779 * n + 1.3303659366080753 * a
  };
  return i !== void 0 && (r.alpha = i), r;
}, _r = {
  mode: "xyz65",
  toMode: {
    rgb: ae,
    xyz50: $r
  },
  fromMode: {
    rgb: ne,
    xyz50: zr
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
}, Tr = ({ r: e, g: t, b: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const i = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * t + 0.11448223 * n,
    i: 0.59597799 * e - 0.2741761 * t - 0.32180189 * n,
    q: 0.21147017 * e - 0.52261711 * t + 0.31114694 * n
  };
  return a !== void 0 && (i.alpha = a), i;
}, Nr = ({ y: e, i: t, q: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const i = {
    mode: "rgb",
    r: e + 0.95608445 * t + 0.6208885 * n,
    g: e - 0.27137664 * t - 0.6486059 * n,
    b: e - 1.10561724 * t + 1.70250126 * n
  };
  return a !== void 0 && (i.alpha = a), i;
}, Sr = {
  mode: "yiq",
  toMode: {
    rgb: Nr
  },
  fromMode: {
    rgb: Tr
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
}, Pr = (e) => Math.max(0, Math.min(1, e || 0)), qt = (e) => Math.round(Pr(e) * 255), Hr = q("rgb"), Cr = (e) => {
  if (e === void 0)
    return;
  let t = qt(e.r), n = qt(e.g), a = qt(e.b);
  return "#" + (1 << 24 | t << 16 | n << 8 | a).toString(16).slice(1);
}, Lr = (e) => Cr(Hr(e)), Sa = q("rgb"), Pa = (e) => {
  const t = {
    mode: e.mode,
    r: Math.max(0, Math.min(e.r !== void 0 ? e.r : 0, 1)),
    g: Math.max(0, Math.min(e.g !== void 0 ? e.g : 0, 1)),
    b: Math.max(0, Math.min(e.b !== void 0 ? e.b : 0, 1))
  };
  return e.alpha !== void 0 && (t.alpha = e.alpha), t;
}, qr = (e) => Pa(Sa(e)), Ha = (e) => e !== void 0 && (e.r === void 0 || e.r >= 0 && e.r <= 1) && (e.g === void 0 || e.g >= 0 && e.g <= 1) && (e.b === void 0 || e.b >= 0 && e.b <= 1);
function Rr(e) {
  return Ha(Sa(e));
}
function Ca(e = "rgb") {
  const { gamut: t } = Je(e);
  if (!t)
    return (a) => !0;
  const n = q(typeof t == "string" ? t : e);
  return (a) => Ha(n(a));
}
function Er(e = "rgb") {
  const { gamut: t } = Je(e);
  if (!t)
    return (r) => Fe(r);
  const n = typeof t == "string" ? t : e, a = q(n), i = Ca(n);
  return (r) => {
    const o = Fe(r);
    if (!o)
      return;
    const s = a(o);
    if (i(s))
      return o;
    const u = Pa(s);
    return o.mode === u.mode ? u : q(o.mode)(u);
  };
}
function Ir(e, t = "lch", n = "rgb") {
  e = Fe(e);
  let a = n === "rgb" ? Rr : Ca(n), i = n === "rgb" ? qr : Er(n);
  if (e === void 0 || a(e)) return e;
  let r = q(e.mode);
  e = q(t)(e);
  let o = { ...e, c: 0 };
  if (!a(o))
    return r(i(o));
  let s = 0, u = e.c !== void 0 ? e.c : 0, h = Je(t).ranges.c, g = (h[1] - h[0]) / Math.pow(2, 13), m = o.c;
  for (; u - s > g; )
    o.c = s + (u - s) * 0.5, a(o) ? (m = o.c, s = o.c) : u = o.c;
  return r(
    a(o) ? o : { ...o, c: m }
  );
}
v(gi);
v(wi);
v($i);
v(zi);
v(Ni);
v(fa);
v(pa);
v(Xi);
v(Ai);
v(Yi);
v(Di);
v(dn);
v(Gi);
v(fn);
v(Bi);
v(ir);
v(rr);
v(or);
v(dr);
v(fr);
v(ur);
const pn = v(hr);
v(br);
v(gr);
v(vr);
v(ce);
v(kr);
v(wr);
v(_r);
v(Sr);
const Xr = q("rgb");
function Ar(e, t) {
  const n = e.getContext("2d", { willReadFrequently: !0 });
  if (!n) return;
  const { width: a, height: i } = e, r = n.createImageData(a, i), o = r.data;
  for (let s = 0; s < i; s++) {
    const u = 1 - s / (i - 1 || 1);
    for (let h = 0; h < a; h++) {
      const g = h / (a - 1 || 1), m = Xr({ mode: "hsv", h: t, s: g, v: u, alpha: 1 }), x = (s * a + h) * 4;
      if (!m) {
        o[x] = o[x + 1] = o[x + 2] = 0, o[x + 3] = 255;
        continue;
      }
      o[x] = Math.round(Rt((m.r ?? 0) * 255)), o[x + 1] = Math.round(Rt((m.g ?? 0) * 255)), o[x + 2] = Math.round(Rt((m.b ?? 0) * 255)), o[x + 3] = 255;
    }
  }
  n.putImageData(r, 0, 0);
}
function Rt(e) {
  return Math.min(255, Math.max(0, e));
}
const Re = q("rgb"), hn = q("hsv"), Fr = q("hsl");
function X(e) {
  const t = Te(e.l ?? 0), n = Math.max(0, e.c ?? 0), a = Dr(e.h ?? 0), i = Te(e.alpha ?? 1), r = Ir({ mode: "oklch", l: t, c: n, h: a, alpha: i }, "rgb");
  return {
    l: r.l ?? t,
    c: r.c ?? 0,
    h: r.h ?? a,
    alpha: r.alpha ?? i
  };
}
function se(e) {
  const t = aa(e.trim());
  if (!t) return null;
  const n = pn(t);
  return (n == null ? void 0 : n.l) == null ? null : X({
    l: n.l,
    c: n.c ?? 0,
    h: n.h ?? 0,
    alpha: n.alpha ?? 1
  });
}
function Jn(e) {
  const { l: t, c: n, h: a, alpha: i } = e;
  return i >= 1 ? `oklch(${(t * 100).toFixed(1)}% ${n.toFixed(4)} ${a.toFixed(1)})` : `oklch(${(t * 100).toFixed(1)}% ${n.toFixed(4)} ${a.toFixed(1)} / ${Math.round(i * 100)}%)`;
}
function _e(e) {
  return Lr(Re({ mode: "oklch", ...e })) ?? "#000000";
}
function e0(e) {
  const { r: t, g: n, b: a } = bn(e);
  return e.alpha < 1 ? `rgba(${t}, ${n}, ${a}, ${e.alpha.toFixed(2)})` : `rgb(${t}, ${n}, ${a})`;
}
function bn(e) {
  const t = Re({ mode: "oklch", ...e, alpha: 1 });
  return t ? {
    r: Math.round((t.r ?? 0) * 255),
    g: Math.round((t.g ?? 0) * 255),
    b: Math.round((t.b ?? 0) * 255)
  } : { r: 0, g: 0, b: 0 };
}
function Or(e) {
  const { r: t, g: n, b: a } = bn(e);
  return `linear-gradient(to right, rgba(${t}, ${n}, ${a}, 0), rgb(${t}, ${n}, ${a}))`;
}
function Bn(e) {
  const t = hn({ mode: "oklch", ...e, alpha: 1 });
  return (t == null ? void 0 : t.h) ?? e.h;
}
function jr(e, t) {
  const n = hn({ mode: "oklch", ...e, alpha: 1 }), a = pn(Re({ mode: "hsv", h: t, s: (n == null ? void 0 : n.s) ?? 0, v: (n == null ? void 0 : n.v) ?? 1, alpha: 1 }) ?? { mode: "hsv", h: t, s: (n == null ? void 0 : n.s) ?? 0, v: (n == null ? void 0 : n.v) ?? 1 });
  return (a == null ? void 0 : a.l) == null ? X({ ...e, h: t }) : X({
    l: a.l,
    c: a.c ?? 0,
    h: a.h ?? t,
    alpha: e.alpha
  });
}
function Un(e, t) {
  switch (t) {
    case "hex":
      return [{ key: "hex", label: "Hex Code", value: _e(e).replace("#", "").toUpperCase() }];
    case "rgb": {
      const n = Re({ mode: "oklch", ...e });
      return [
        { key: "r", label: "R", value: String(Math.round((n.r ?? 0) * 255)), min: 0, max: 255 },
        { key: "g", label: "G", value: String(Math.round((n.g ?? 0) * 255)), min: 0, max: 255 },
        { key: "b", label: "B", value: String(Math.round((n.b ?? 0) * 255)), min: 0, max: 255 }
      ];
    }
    case "hsl": {
      const n = Fr({ mode: "oklch", ...e });
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
function Yr(e, t, n) {
  switch (e) {
    case "hex": {
      const a = (t.hex ?? "").trim().replace(/^#/, "");
      if (!/^[0-9a-fA-F]{3,8}$/.test(a)) return null;
      const i = se(`#${a}`);
      return i ? Et(i, n.alpha) : null;
    }
    case "rgb": {
      const a = Number(t.r), i = Number(t.g), r = Number(t.b);
      if ([a, i, r].some((s) => Number.isNaN(s))) return null;
      const o = se(`rgb(${It(a)}, ${It(i)}, ${It(r)})`);
      return o ? Et(o, n.alpha) : null;
    }
    case "hsl": {
      const a = Xt(t.h), i = Xt(t.s), r = Xt(t.l);
      if ([a, i, r].some((s) => Number.isNaN(s))) return null;
      const o = se(`hsl(${a}, ${Wn(i)}%, ${Wn(r)}%)`);
      return o ? Et(o, n.alpha) : null;
    }
    case "oklch": {
      const a = Number(t.l), i = Number(t.c), r = Number(t.h);
      return [a, i, r].some((o) => Number.isNaN(o)) ? null : X({ l: a / 100, c: i, h: r, alpha: n.alpha });
    }
  }
}
function Et(e, t) {
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
function Dr(e) {
  const t = e % 360;
  return t < 0 ? t + 360 : t;
}
function Zr(e) {
  const t = hn({ mode: "oklch", ...e, alpha: 1 });
  return { x: (t == null ? void 0 : t.s) ?? 0, y: 1 - ((t == null ? void 0 : t.v) ?? 0) };
}
function Gr(e, t, n, a) {
  const i = Te(e), r = Te(t), o = pn(
    Re({ mode: "hsv", h: n, s: i, v: 1 - r, alpha: 1 }) ?? {
      mode: "hsv",
      h: n,
      s: i,
      v: 1 - r
    }
  );
  return (o == null ? void 0 : o.l) != null ? X({
    l: o.l,
    c: o.c ?? 0,
    h: o.h ?? n,
    alpha: a
  }) : X({ l: 0.5, c: 0, h: n, alpha: a });
}
const Jr = {
  l: 0.62,
  c: 0.24,
  h: 303,
  alpha: 0.8
}, La = "pretty-color-picker-history", qa = 16;
function Br() {
  try {
    const e = localStorage.getItem(La);
    if (!e) return [];
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.slice(0, qa) : [];
  } catch {
    return [];
  }
}
function Ur(e, t) {
  const n = _e(e), a = t.filter((r) => _e(r) !== n || r.alpha !== e.alpha), i = [e, ...a].slice(0, qa);
  try {
    localStorage.setItem(La, JSON.stringify(i));
  } catch {
  }
  return i;
}
function Kn(e, t) {
  const n = t.getBoundingClientRect(), a = Vn((e.clientX - n.left) / n.width), i = Vn((e.clientY - n.top) / n.height);
  return { x: a, y: i };
}
function At(e, t, n) {
  let a = !1;
  const i = (s) => {
    if (!a) return;
    const { x: u, y: h } = Kn(s, e);
    t(u, h);
  }, r = (s) => {
    if (a) {
      if (a = !1, (s == null ? void 0 : s.pointerId) != null)
        try {
          e.releasePointerCapture(s.pointerId);
        } catch {
        }
      window.removeEventListener("pointermove", i), window.removeEventListener("pointerup", r), window.removeEventListener("pointercancel", r), n == null || n();
    }
  }, o = (s) => {
    if (s.button !== 0) return;
    a = !0, e.setPointerCapture(s.pointerId);
    const { x: u, y: h } = Kn(s, e);
    t(u, h), window.addEventListener("pointermove", i), window.addEventListener("pointerup", r), window.addEventListener("pointercancel", r);
  };
  return e.addEventListener("pointerdown", o), () => {
    e.removeEventListener("pointerdown", o), window.removeEventListener("pointermove", i), window.removeEventListener("pointerup", r), window.removeEventListener("pointercancel", r);
  };
}
function Vn(e) {
  return Math.min(1, Math.max(0, e));
}
const Wr = ["hex", "rgb", "hsl", "oklch"], Kr = {
  hex: "Hex",
  rgb: "RGB",
  hsl: "HSL",
  oklch: "OKLCH"
};
var _, y, A, G, R, Ne, Se, J, F, E, O, Pe, j, le, de, He, B, ee, f, Ra, Ea, Ia, Jt, ke, Xa, Aa, Fa, Bt, Ut, Wt, Q, we, Kt, Xe, Ae, Vt, Oa, ja, Qt, Ya, en, tn, nn, an, re, Da;
class Vr extends HTMLElement {
  constructor() {
    super();
    w(this, f);
    w(this, _);
    w(this, y, { ...Jr });
    w(this, A, "hsl");
    w(this, G, Br());
    w(this, R, []);
    w(this, Ne);
    w(this, Se);
    w(this, J);
    w(this, F);
    w(this, E);
    w(this, O);
    w(this, Pe);
    w(this, j);
    w(this, le);
    w(this, de);
    w(this, He);
    w(this, B);
    w(this, ee);
    k(this, _, this.attachShadow({ mode: "open" }));
  }
  static get observedAttributes() {
    return ["value"];
  }
  connectedCallback() {
    p(this, f, Ea).call(this), p(this, f, Ia).call(this), p(this, f, Ra).call(this), p(this, f, we).call(this);
  }
  disconnectedCallback() {
    l(this, R).forEach((n) => n()), k(this, R, []);
  }
  attributeChangedCallback(n, a, i) {
    if (!this.isConnected || n !== "value" || i == null) return;
    const r = se(i);
    r && (k(this, y, r), p(this, f, we).call(this, !1));
  }
  get value() {
    return Jn(l(this, y));
  }
  set value(n) {
    const a = se(n);
    a && (k(this, y, a), p(this, f, we).call(this));
  }
  get color() {
    return { ...l(this, y) };
  }
  set color(n) {
    k(this, y, X(n)), p(this, f, we).call(this);
  }
}
_ = new WeakMap(), y = new WeakMap(), A = new WeakMap(), G = new WeakMap(), R = new WeakMap(), Ne = new WeakMap(), Se = new WeakMap(), J = new WeakMap(), F = new WeakMap(), E = new WeakMap(), O = new WeakMap(), Pe = new WeakMap(), j = new WeakMap(), le = new WeakMap(), de = new WeakMap(), He = new WeakMap(), B = new WeakMap(), ee = new WeakMap(), f = new WeakSet(), Ra = function() {
  const n = this.getAttribute("value");
  if (n) {
    const a = se(n);
    a && k(this, y, a);
  }
}, Ea = function() {
  l(this, _).innerHTML = `
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap" />
      <style>${Ba}</style>
      <div class="pcp" part="container">
        <header class="pcp-header">
          <h2 class="pcp-title">Color Picker</h2>
          <button type="button" class="pcp-close" aria-label="Close">×</button>
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
          ${Wr.map((n) => `<button type="button" class="pcp-tab" role="tab" data-format="${n}">${Kr[n]}</button>`).join("")}
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
    `, k(this, Ne, l(this, _).querySelector(".pcp-plane")), k(this, Se, l(this, _).querySelector(".pcp-plane-wrap")), k(this, J, l(this, _).querySelector(".pcp-cursor")), k(this, F, l(this, _).querySelector(".pcp-hue-row")), k(this, E, l(this, F).querySelector(".pcp-slider-handle")), k(this, O, l(this, _).querySelector(".pcp-alpha-row")), k(this, Pe, l(this, _).querySelector(".pcp-slider-fill-alpha")), k(this, j, l(this, O).querySelector(".pcp-slider-handle")), k(this, le, l(this, _).querySelector(".pcp-tabs-pill")), k(this, de, l(this, _).querySelector(".pcp-fields")), k(this, He, l(this, _).querySelector(".pcp-swatch-fill")), k(this, B, l(this, _).querySelector(".pcp-alpha-input")), k(this, ee, l(this, _).querySelector(".pcp-history"));
}, Ia = function() {
  l(this, _).querySelector(".pcp-close").addEventListener("click", () => {
    this.dispatchEvent(new CustomEvent("close", { bubbles: !0, composed: !0 }));
  }), l(this, R).push(
    At(
      l(this, Se),
      (a, i) => p(this, f, Xa).call(this, a, i),
      () => p(this, f, re).call(this)
    )
  ), l(this, R).push(
    At(
      l(this, F),
      (a) => p(this, f, Aa).call(this, a),
      () => p(this, f, re).call(this)
    )
  ), l(this, R).push(
    At(
      l(this, O),
      (a) => p(this, f, Fa).call(this, a),
      () => p(this, f, re).call(this)
    )
  ), l(this, R).push(p(this, f, Jt).call(this, l(this, F))), l(this, R).push(p(this, f, Jt).call(this, l(this, O))), l(this, _).querySelectorAll(".pcp-tab").forEach((a) => {
    a.addEventListener("click", () => {
      const i = a.dataset.format;
      i && i !== l(this, A) && (k(this, A, i), p(this, f, Xe).call(this), p(this, f, nn).call(this), p(this, f, tn).call(this), p(this, f, Ae).call(this));
    });
  }), l(this, B).addEventListener("change", () => p(this, f, Ut).call(this)), l(this, B).addEventListener("keydown", (a) => {
    a.key === "Enter" && p(this, f, Ut).call(this);
  });
}, Jt = function(n) {
  const a = () => {
    n.dataset.active = "true";
  }, i = () => {
    const r = n.querySelector(".pcp-slider-handle");
    r != null && r.hasAttribute("data-dragging") || delete n.dataset.active;
  };
  return n.addEventListener("pointerenter", a), n.addEventListener("pointerleave", i), () => {
    n.removeEventListener("pointerenter", a), n.removeEventListener("pointerleave", i);
  };
}, ke = function(n, a) {
  const i = Math.max(0, Math.min(1, a)) * 100;
  n.style.left = `max(1px, calc(${i}% - 1.5px))`;
}, Xa = function(n, a) {
  l(this, J).dataset.dragging = "true";
  const i = p(this, f, Bt).call(this);
  p(this, f, Q).call(this, Gr(n, a, i, l(this, y).alpha), !1), p(this, f, Vt).call(this, n, a);
}, Aa = function(n) {
  l(this, F).dataset.active = "true", l(this, E).dataset.dragging = "true";
  const a = n * 360;
  p(this, f, Q).call(this, jr(l(this, y), a), !1), p(this, f, ke).call(this, l(this, E), n), p(this, f, Xe).call(this), p(this, f, Ae).call(this);
}, Fa = function(n) {
  l(this, O).dataset.active = "true", l(this, j).dataset.dragging = "true", p(this, f, Q).call(this, X({ ...l(this, y), alpha: n }), !1), p(this, f, ke).call(this, l(this, j), n);
}, Bt = function() {
  const a = l(this, E).style.left.match(/calc\(([\d.]+)%/);
  return a ? parseFloat(a[1]) / 100 * 360 : Bn(l(this, y));
}, Ut = function() {
  const n = l(this, B).value.replace(/%/g, "").trim(), a = Number(n);
  if (Number.isNaN(a)) {
    p(this, f, en).call(this);
    return;
  }
  p(this, f, Q).call(this, X({ ...l(this, y), alpha: a / 100 })), p(this, f, re).call(this);
}, Wt = function(n, a) {
  const i = {};
  Un(l(this, y), l(this, A)).forEach((o) => {
    i[o.key] = o.key === n ? a : o.value;
  });
  const r = Yr(l(this, A), i, l(this, y));
  r && (p(this, f, Q).call(this, r), p(this, f, re).call(this));
}, Q = function(n, a = !0) {
  k(this, y, X(n)), p(this, f, Kt).call(this, a);
}, we = function(n = !0) {
  p(this, f, Xe).call(this), p(this, f, nn).call(this), p(this, f, Kt).call(this, n), p(this, f, an).call(this);
}, Kt = function(n) {
  p(this, f, tn).call(this), p(this, f, Ya).call(this), p(this, f, Oa).call(this), p(this, f, Ae).call(this), n && p(this, f, Da).call(this);
}, Xe = function() {
  const n = p(this, f, Bt).call(this);
  Ar(l(this, Ne), n);
}, Ae = function() {
  const { x: n, y: a } = Zr(l(this, y));
  p(this, f, Vt).call(this, n, a);
}, Vt = function(n, a) {
  l(this, J).style.left = `${n * 100}%`, l(this, J).style.top = `${a * 100}%`;
}, Oa = function() {
  const n = Bn(l(this, y));
  l(this, E).hasAttribute("data-dragging") || p(this, f, ke).call(this, l(this, E), n / 360), l(this, j).hasAttribute("data-dragging") || p(this, f, ke).call(this, l(this, j), l(this, y).alpha), p(this, f, ja).call(this);
}, ja = function() {
  l(this, Pe).style.setProperty("--pcp-alpha-gradient", Or(l(this, y)));
}, Qt = function(n, a) {
  const { r: i, g: r, b: o } = bn(a);
  n.style.setProperty("--swatch-solid", `rgb(${i}, ${r}, ${o})`), n.style.setProperty("--swatch-alpha", `rgba(${i}, ${r}, ${o}, ${a.alpha})`);
}, Ya = function() {
  p(this, f, Qt).call(this, l(this, He), l(this, y));
}, en = function() {
  l(this, B).value = `${Math.round(l(this, y).alpha * 100)}%`;
}, tn = function() {
  const n = Un(l(this, y), l(this, A));
  l(this, de).innerHTML = n.map(
    (a) => `
        <div class="pcp-field">
          <span class="pcp-field-label">${a.label}</span>
          <input
            class="pcp-field-input"
            type="text"
            data-key="${a.key}"
            value="${a.value}"
            aria-label="${a.label}"
          />
        </div>
      `
  ).join(""), l(this, de).querySelectorAll(".pcp-field-input").forEach((a) => {
    const i = a, r = i.dataset.key;
    i.addEventListener("change", () => p(this, f, Wt).call(this, r, i.value)), i.addEventListener("keydown", (o) => {
      o.key === "Enter" && p(this, f, Wt).call(this, r, i.value);
    });
  }), p(this, f, en).call(this);
}, nn = function() {
  const n = l(this, _).querySelectorAll(".pcp-tab");
  let a = null;
  if (n.forEach((i) => {
    const r = i.dataset.format === l(this, A);
    i.setAttribute("data-active", String(r)), i.setAttribute("aria-selected", String(r)), r && (a = i);
  }), a) {
    const i = a, r = i.offsetLeft, o = i.offsetWidth;
    l(this, le).style.left = `${r}px`, l(this, le).style.width = `${o}px`;
  }
}, an = function() {
  l(this, ee).innerHTML = l(this, G).map((n, a) => `
          <button type="button" class="pcp-history-swatch pcp-clip" data-index="${a}" aria-label="Color ${_e(n)}">
            <span class="pcp-swatch-fill" data-history-fill="${a}"></span>
          </button>
        `).join(""), l(this, ee).querySelectorAll("[data-history-fill]").forEach((n) => {
    const a = Number(n.dataset.historyFill), i = l(this, G)[a];
    i && p(this, f, Qt).call(this, n, i);
  }), l(this, ee).querySelectorAll(".pcp-history-swatch").forEach((n) => {
    n.addEventListener("click", () => {
      const a = Number(n.dataset.index), i = l(this, G)[a];
      i && p(this, f, Q).call(this, { ...i });
    });
  });
}, re = function() {
  delete l(this, J).dataset.dragging, delete l(this, E).dataset.dragging, delete l(this, j).dataset.dragging, delete l(this, F).dataset.active, delete l(this, O).dataset.active, k(this, G, Ur(l(this, y), l(this, G))), p(this, f, an).call(this);
}, Da = function() {
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
customElements.get("pretty-color-picker") || customElements.define("pretty-color-picker", Vr);
export {
  Jr as DEFAULT_COLOR,
  Vr as PrettyColorPicker,
  Un as formatFieldsFor,
  X as normalizeOklch,
  se as oklchFromCss,
  Jn as oklchToCss,
  _e as oklchToHex,
  e0 as oklchToRgbString,
  Yr as parseFormatFields
};
