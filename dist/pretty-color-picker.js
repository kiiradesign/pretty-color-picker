var kn = (e) => {
  throw TypeError(e);
};
var bt = (e, t, n) => t.has(e) || kn("Cannot " + n);
var l = (e, t, n) => (bt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), w = (e, t, n) => t.has(e) ? kn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), M = (e, t, n, a) => (bt(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n), h = (e, t, n) => (bt(e, t, "access private method"), n);
const Ba = ':host{--pcp-bg: #1a1a1a;--pcp-border: #2e2e2e;--pcp-surface: #1f1f1f;--pcp-surface-hover: #292929;--pcp-surface-active: #292929;--pcp-surface-subtle: #2e2e2e;--pcp-text-primary: #ededed;--pcp-text-label: #a0a0a0;--pcp-text-tertiary: #8f8f8f;--pcp-radius: 8px;--pcp-radius-lg: 12px;--pcp-row-height: 36px;--pcp-ease-out: cubic-bezier(.23, 1, .32, 1);--pcp-font: "Geist", system-ui, -apple-system, "SF Pro Display", sans-serif;--pcp-mono: "Geist Mono", ui-monospace, monospace;--pcp-focus-ring: #47a8ff;display:inline-block;font-family:var(--pcp-font);-webkit-font-smoothing:antialiased;color:var(--pcp-text-primary)}*,*:before,*:after{box-sizing:border-box}.pcp{width:280px;background:var(--pcp-bg);border:1px solid var(--pcp-border);border-radius:var(--pcp-radius-lg);padding:12px;-webkit-user-select:none;user-select:none}.pcp-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;min-height:28px}.pcp-title{font-size:14px;font-weight:500;color:var(--pcp-text-primary);margin:0}.pcp-close{display:flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;border:none;border-radius:6px;background:transparent;color:var(--pcp-text-label);cursor:pointer;font-size:18px;line-height:1;transition:background .15s var(--pcp-ease-out),color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-close:hover{background:var(--pcp-surface-hover);color:var(--pcp-text-primary)}}.pcp-close:active{transform:scale(.97)}.pcp-plane-wrap{position:relative;width:100%;aspect-ratio:4 / 3;border-radius:var(--pcp-radius);overflow:hidden;margin-bottom:8px;cursor:crosshair;touch-action:none}.pcp-plane{display:block;width:100%;height:100%;transition:opacity .18s var(--pcp-ease-out)}.pcp-plane[data-switching=true]{opacity:.85}.pcp-cursor{position:absolute;width:16px;height:16px;margin:-8px 0 0 -8px;border:2px solid #fff;border-radius:50%;box-shadow:0 0 0 1px #00000059,inset 0 0 0 1px #00000026;pointer-events:none;transition:left 80ms linear,top 80ms linear;will-change:left,top}.pcp-cursor[data-dragging=true]{transition:none}.pcp-slider-wrapper{position:relative;height:var(--pcp-row-height);margin-bottom:8px}.pcp-slider{position:absolute;top:0;right:0;bottom:0;left:0;cursor:pointer;-webkit-user-select:none;user-select:none;overflow:hidden;background:var(--pcp-surface);border-radius:var(--pcp-radius);touch-action:none}.pcp-slider-track{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.pcp-slider-checker{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#fff;background-image:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:8px 8px;background-position:0 0,0 4px,4px -4px,-4px 0}.pcp-slider-hue{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to right,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.pcp-slider-alpha{position:absolute;top:0;right:0;bottom:0;left:0}.pcp-slider-handle{position:absolute;top:50%;width:3px;height:20px;border-radius:999px;background:var(--pcp-text-primary);pointer-events:none;transform:translate(-50%,-50%);box-shadow:0 0 0 1px #00000059;transition:left 80ms linear}.pcp-slider-handle[data-dragging=true]{transition:none}.pcp-slider[data-active=true] .pcp-slider-handle{box-shadow:0 0 0 1px #00000080}.pcp-tabs{position:relative;display:flex;padding:2px;margin-bottom:10px;background:var(--pcp-surface-subtle);border-radius:var(--pcp-radius)}.pcp-tabs-pill{position:absolute;top:2px;bottom:2px;background:var(--pcp-surface-active);border-radius:6px;z-index:0;pointer-events:none;transition:left .2s var(--pcp-ease-out),width .2s var(--pcp-ease-out)}.pcp-tab{position:relative;z-index:1;flex:1;padding:6px 4px;font-family:inherit;font-size:13px;font-weight:500;text-align:center;background:transparent;border:none;color:var(--pcp-text-label);cursor:pointer;transition:color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-tab[data-active=true]{color:var(--pcp-text-primary)}.pcp-tab:active{transform:scale(.97)}.pcp-inputs{display:flex;align-items:center;gap:8px;margin-bottom:14px}.pcp-swatch{flex-shrink:0;width:36px;height:36px;border-radius:6px;border:1px solid var(--pcp-border);overflow:hidden;position:relative}.pcp-swatch-solid{position:absolute;top:0;right:0;bottom:0;left:0;width:50%}.pcp-swatch-alpha{position:absolute;top:0;right:0;bottom:0;left:50%;width:50%}.pcp-swatch-checker{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#fff;background-image:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:6px 6px;background-position:0 0,0 3px,3px -3px,-3px 0}.pcp-swatch-alpha-color{position:absolute;top:0;right:0;bottom:0;left:0}.pcp-fields{display:flex;flex:1;gap:6px;min-width:0}.pcp-field{flex:1;min-width:0}.pcp-field-label{display:block;font-size:11px;font-weight:500;color:var(--pcp-text-tertiary);margin-bottom:2px;text-align:center}.pcp-field-input{width:100%;height:28px;padding:0 6px;font-family:var(--pcp-mono);font-size:12px;font-variant-numeric:tabular-nums;text-align:center;color:var(--pcp-text-primary);background:var(--pcp-surface);border:1px solid var(--pcp-border);border-radius:6px;outline:none;transition:border-color .15s var(--pcp-ease-out),box-shadow .15s var(--pcp-ease-out)}.pcp-field-input:focus{border-color:var(--pcp-focus-ring);box-shadow:0 0 0 2px #47a8ff40}.pcp-alpha-field{flex:0 0 52px}.pcp-history-label{font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--pcp-text-tertiary);margin:0 0 8px}.pcp-history{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:6px}.pcp-history-swatch{-moz-appearance:none;appearance:none;-webkit-appearance:none;width:100%;aspect-ratio:1;height:auto;padding:0;border:none;background:none;border-radius:5px;overflow:hidden;cursor:pointer;transition:opacity .15s var(--pcp-ease-out)}.pcp-history-swatch-fill{display:block;width:100%;height:100%;border-radius:inherit;background-color:#b0b0b0;background-image:linear-gradient(to right,var(--swatch-solid) 50%,transparent 50%),linear-gradient(to right,transparent 50%,var(--swatch-alpha) 50%),linear-gradient(45deg,#999 25%,transparent 25%),linear-gradient(-45deg,#999 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#999 75%),linear-gradient(-45deg,transparent 75%,#999 75%);background-size:100% 100%,100% 100%,5px 5px,5px 5px,5px 5px,5px 5px;background-position:0 0,0 0,0 0,0 2.5px,2.5px -2.5px,-2.5px 0}@media(hover:hover)and (pointer:fine){.pcp-history-swatch:hover{opacity:.85}}.pcp-history-swatch:active{opacity:.7}@media(prefers-reduced-motion:reduce){.pcp-close,.pcp-tab,.pcp-tabs-pill,.pcp-plane,.pcp-cursor,.pcp-slider-handle,.pcp-history-swatch{transition:none}.pcp-tab:active,.pcp-close:active{transform:none}}', Qn = (e, t) => {
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
}, Wa = {
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
}, Ua = (e) => Qn(Wa[e.toLowerCase()], 6), Ka = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, Va = (e) => {
  let t;
  return (t = e.match(Ka)) ? Qn(parseInt(t[1], 16), t[1].length) : void 0;
}, W = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", _e = `${W}%`, on = `(?:${W}%|${W})`, Qa = `(?:${W}(deg|grad|rad|turn)|${W})`, ce = "\\s*,\\s*", ei = new RegExp(
  `^rgba?\\(\\s*${W}${ce}${W}${ce}${W}\\s*(?:,\\s*${on}\\s*)?\\)$`
), ti = new RegExp(
  `^rgba?\\(\\s*${_e}${ce}${_e}${ce}${_e}\\s*(?:,\\s*${on}\\s*)?\\)$`
), ni = (e) => {
  let t = { mode: "rgb" }, n;
  if (n = e.match(ei))
    n[1] !== void 0 && (t.r = n[1] / 255), n[2] !== void 0 && (t.g = n[2] / 255), n[3] !== void 0 && (t.b = n[3] / 255);
  else if (n = e.match(ti))
    n[1] !== void 0 && (t.r = n[1] / 100), n[2] !== void 0 && (t.g = n[2] / 100), n[3] !== void 0 && (t.b = n[3] / 100);
  else
    return;
  return n[4] !== void 0 ? t.alpha = Math.max(0, Math.min(1, n[4] / 100)) : n[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[5]))), t;
}, De = (e, t) => e === void 0 ? void 0 : typeof e != "object" ? aa(e) : e.mode !== void 0 ? e : t ? { ...e, mode: t } : void 0, q = (e = "rgb") => (t) => (t = De(t, e)) !== void 0 ? (
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
) : void 0, I = {}, ea = {}, Ye = [], ta = {}, ai = (e) => e, v = (e) => (I[e.mode] = {
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
}), q(e.mode)), Ke = (e) => ea[e], ii = (e, t) => {
  if (typeof e == "string") {
    if (!t)
      throw new Error("'mode' required when 'parser' is a string");
    ta[e] = t;
  } else typeof e == "function" && Ye.indexOf(e) < 0 && Ye.push(e);
}, Dt = /[^\x00-\x7F]|[a-zA-Z_]/, ri = /[^\x00-\x7F]|[-\w]/, d = {
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
function Yt(e) {
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
const oi = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function $e(e) {
  let t = "";
  if ((e[b] === "-" || e[b] === "+") && (t += e[b++]), t += Ae(e), e[b] === "." && /\d/.test(e[b + 1]) && (t += e[b++] + Ae(e)), (e[b] === "e" || e[b] === "E") && ((e[b + 1] === "-" || e[b + 1] === "+") && /\d/.test(e[b + 2]) ? t += e[b++] + e[b++] + Ae(e) : /\d/.test(e[b + 1]) && (t += e[b++] + Ae(e))), Yt(e)) {
    let n = Ze(e);
    return n === "deg" || n === "rad" || n === "turn" || n === "grad" ? { type: d.Hue, value: t * oi[n] } : void 0;
  }
  return e[b] === "%" ? (b++, { type: d.Percentage, value: +t }) : { type: d.Number, value: +t };
}
function Ae(e) {
  let t = "";
  for (; /\d/.test(e[b]); )
    t += e[b++];
  return t;
}
function Ze(e) {
  let t = "";
  for (; b < e.length && ri.test(e[b]); )
    t += e[b++];
  return t;
}
function si(e) {
  let t = Ze(e);
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
        n.push($e(t));
        continue;
      }
      return;
    }
    if (a === "-") {
      if (b--, Ee(t)) {
        n.push($e(t));
        continue;
      }
      if (Yt(t)) {
        n.push({ type: d.Ident, value: Ze(t) });
        continue;
      }
      return;
    }
    if (a === ".") {
      if (b--, Ee(t)) {
        n.push($e(t));
        continue;
      }
      return;
    }
    if (a === "/") {
      for (; b < t.length && (t[b] === `
` || t[b] === "	" || t[b] === " "); )
        b++;
      let i;
      if (Ee(t) && (i = $e(t), i.type !== d.Hue)) {
        n.push({ type: d.Alpha, value: i });
        continue;
      }
      if (Yt(t) && Ze(t) === "none") {
        n.push({
          type: d.Alpha,
          value: { type: d.None, value: void 0 }
        });
        continue;
      }
      return;
    }
    if (/\d/.test(a)) {
      b--, n.push($e(t));
      continue;
    }
    if (Dt.test(a)) {
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
  const r = Ke(n).channels;
  for (let o = 0, s, c; o < r.length; o++)
    s = i[o], c = r[o], s.type !== d.None && (a[c] = s.type === d.Number ? s.value : s.value / 100, c === "alpha" && (a[c] = Math.max(0, Math.min(1, a[c]))));
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
  let a, i = 0, r = Ye.length;
  for (; i < r; )
    if ((a = Ye[i++](e, n)) !== void 0)
      return a;
  return t ? di(t) : void 0;
};
function ui(e, t) {
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
const ci = (e) => e === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0, pi = (e, t, n) => e + n * (t - e), hi = (e) => {
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
}, f = bi(pi), T = (e) => {
  let t = !1, n = e.map((a) => a !== void 0 ? (t = !0, a) : 1);
  return t ? n : e;
}, he = {
  mode: "rgb",
  channels: ["r", "g", "b", "alpha"],
  parse: [
    ui,
    Va,
    ni,
    Ua,
    ci,
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
}, gt = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), wn = (e) => {
  let t = gt(e.r), n = gt(e.g), a = gt(e.b), i = {
    mode: "xyz65",
    x: 0.5766690429101305 * t + 0.1855582379065463 * n + 0.1882286462349947 * a,
    y: 0.297344975250536 * t + 0.6273635662554661 * n + 0.0752914584939979 * a,
    z: 0.0270313613864123 * t + 0.0706888525358272 * n + 0.9913375368376386 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, mt = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), $n = ({ x: e, y: t, z: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = {
    mode: "a98",
    r: mt(
      e * 2.0415879038107465 - t * 0.5650069742788597 - 0.3447313507783297 * n
    ),
    g: mt(
      e * -0.9692436362808798 + t * 1.8759675015077206 + 0.0415550574071756 * n
    ),
    b: mt(
      e * 0.0134442806320312 - t * 0.1183623922310184 + 1.0151749943912058 * n
    )
  };
  return a !== void 0 && (i.alpha = a), i;
}, xt = (e = 0) => {
  const t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((t + 0.055) / 1.055, 2.4);
}, be = ({ r: e, g: t, b: n, alpha: a }) => {
  let i = {
    mode: "lrgb",
    r: xt(e),
    g: xt(t),
    b: xt(n)
  };
  return a !== void 0 && (i.alpha = a), i;
}, ae = (e) => {
  let { r: t, g: n, b: a, alpha: i } = be(e), r = {
    mode: "xyz65",
    x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * a,
    y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * a,
    z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * a
  };
  return i !== void 0 && (r.alpha = i), r;
}, vt = (e = 0) => {
  const t = Math.abs(e);
  return t > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(t, 1 / 2.4) - 0.055) : e * 12.92;
}, ge = ({ r: e, g: t, b: n, alpha: a }, i = "rgb") => {
  let r = {
    mode: i,
    r: vt(e),
    g: vt(t),
    b: vt(n)
  };
  return a !== void 0 && (r.alpha = a), r;
}, ie = ({ x: e, y: t, z: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = ge({
    r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
    g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
    b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n
  });
  return a !== void 0 && (i.alpha = a), i;
}, gi = {
  ...he,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => $n(ae(e)),
    xyz65: $n
  },
  toMode: {
    rgb: (e) => ie(wn(e)),
    xyz65: wn
  }
}, H = (e) => (e = e % 360) < 0 ? e + 360 : e, mi = (e, t) => e.map((n, a, i) => {
  if (n === void 0)
    return n;
  let r = H(n);
  return a === 0 || e[a - 1] === void 0 ? r : t(r - H(i[a - 1]));
}).reduce((n, a) => !n.length || a === void 0 || n[n.length - 1] === void 0 ? (n.push(a), n) : (n.push(a + n[n.length - 1]), n), []), D = (e) => mi(e, (t) => Math.abs(t) <= 180 ? t : t - 360 * Math.sign(t)), S = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0], xi = Math.PI / 180, vi = 180 / Math.PI;
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
}, Ve = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.s || !t.s)
    return 0;
  let n = H(e.h), a = H(t.h), i = Math.sin((a - n + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * t.s) * i;
}, ki = (e, t) => {
  if (e.h === void 0 || t.h === void 0)
    return 0;
  let n = H(e.h), a = H(t.h);
  return Math.abs(a - n) > 180 ? n - (a - 360 * Math.sign(a - n)) : a - n;
}, Qe = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.c || !t.c)
    return 0;
  let n = H(e.h), a = H(t.h), i = Math.sin((a - n + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * t.c) * i;
}, Y = (e) => {
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
      use: f,
      fixup: D
    },
    s: f,
    l: f,
    alpha: {
      use: f,
      fixup: T
    }
  },
  difference: {
    h: Ve
  },
  average: {
    h: Y
  }
}, U = ({ l: e, a: t, b: n, alpha: a }, i = "lch") => {
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
}, ia = Math.pow(29, 3) / Math.pow(3, 3), ra = Math.pow(6, 3) / Math.pow(29, 3), z = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: (1 - 0.3457 - 0.3585) / 0.3585
}, se = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: (1 - 0.3127 - 0.329) / 0.329
};
let yt = (e) => Math.pow(e, 3) > ra ? Math.pow(e, 3) : (116 * e - 16) / ia;
const oa = ({ l: e, a: t, b: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = (e + 16) / 116, r = t / 500 + i, o = i - n / 200, s = {
    mode: "xyz65",
    x: yt(r) * se.X,
    y: yt(i) * se.Y,
    z: yt(o) * se.Z
  };
  return a !== void 0 && (s.alpha = a), s;
}, et = (e) => ie(oa(e)), Mt = (e) => e > ra ? Math.cbrt(e) : (ia * e + 16) / 116, sa = ({ x: e, y: t, z: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = Mt(e / se.X), r = Mt(t / se.Y), o = Mt(n / se.Z), s = {
    mode: "lab65",
    l: 116 * r - 16,
    a: 500 * (i - r),
    b: 200 * (r - o)
  };
  return a !== void 0 && (s.alpha = a), s;
}, tt = (e) => {
  let t = sa(ae(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Ge = 1, la = 1, Te = 26 / 180 * Math.PI, Je = Math.cos(Te), Be = Math.sin(Te), da = 100 / Math.log(139 / 100), Zt = ({ l: e, c: t, h: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = {
    mode: "lab65",
    l: (Math.exp(e * Ge / da) - 1) / 39e-4
  }, r = (Math.exp(0.0435 * t * la * Ge) - 1) / 0.075, o = r * Math.cos(n / 180 * Math.PI - Te), s = r * Math.sin(n / 180 * Math.PI - Te);
  return i.a = o * Je - s / 0.83 * Be, i.b = o * Be + s / 0.83 * Je, a !== void 0 && (i.alpha = a), i;
}, Gt = ({ l: e, a: t, b: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = t * Je + n * Be, r = 0.83 * (n * Je - t * Be), o = Math.sqrt(i * i + r * r), s = {
    mode: "dlch",
    l: da / Ge * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * o) / (0.0435 * la * Ge)
  };
  return s.c && (s.h = H((Math.atan2(r, i) + Te) / Math.PI * 180)), a !== void 0 && (s.alpha = a), s;
}, Nn = (e) => Zt(U(e, "dlch")), Sn = (e) => K(Gt(e), "dlab"), $i = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: Nn,
    rgb: (e) => et(Nn(e))
  },
  fromMode: {
    lab65: Sn,
    rgb: (e) => Sn(tt(e))
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
}, zi = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: Zt,
    dlab: (e) => K(e, "dlab"),
    rgb: (e) => et(Zt(e))
  },
  fromMode: {
    lab65: Gt,
    dlab: (e) => U(e, "dlch"),
    rgb: (e) => Gt(tt(e))
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
      fixup: D
    },
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
    h: { use: f, fixup: D },
    s: f,
    i: f,
    alpha: { use: f, fixup: T }
  },
  difference: {
    h: Ve
  },
  average: {
    h: Y
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
function Ci({ r: e, g: t, b: n, alpha: a }) {
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
}, Pi = new RegExp(
  `^hsla?\\(\\s*${Qa}${ce}${_e}${ce}${_e}\\s*(?:,\\s*${on}\\s*)?\\)$`
), Li = (e) => {
  let t = e.match(Pi);
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
    rgb: Ci
  },
  channels: ["h", "s", "l", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [qi, Li],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: f, fixup: D },
    s: f,
    l: f,
    alpha: { use: f, fixup: T }
  },
  difference: {
    h: Ve
  },
  average: {
    h: Y
  }
};
function ua({ h: e, s: t, v: n, alpha: a }) {
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
function ca({ r: e, g: t, b: n, alpha: a }) {
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
    rgb: ua
  },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: {
    rgb: ca
  },
  channels: ["h", "s", "v", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: f, fixup: D },
    s: f,
    v: f,
    alpha: { use: f, fixup: T }
  },
  difference: {
    h: Ve
  },
  average: {
    h: Y
  }
};
function Ri({ h: e, w: t, b: n, alpha: a }) {
  if (t === void 0 && (t = 0), n === void 0 && (n = 0), t + n > 1) {
    let i = t + n;
    t /= i, n /= i;
  }
  return ua({
    h: e,
    s: n === 1 ? 1 : 1 - t / (1 - n),
    v: 1 - n,
    alpha: a
  });
}
function Ii(e) {
  let t = ca(e);
  if (t === void 0) return;
  let n = t.s !== void 0 ? t.s : 0, a = t.v !== void 0 ? t.v : 0, i = {
    mode: "hwb",
    w: (1 - n) * a,
    b: 1 - a
  };
  return t.h !== void 0 && (i.h = t.h), t.alpha !== void 0 && (i.alpha = t.alpha), i;
}
function Ei(e, t) {
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
const Ai = {
  mode: "hwb",
  toMode: {
    rgb: Ri
  },
  fromMode: {
    rgb: Ii
  },
  channels: ["h", "w", "b", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Ei],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: f, fixup: D },
    w: f,
    b: f,
    alpha: { use: f, fixup: T }
  },
  difference: {
    h: ki
  },
  average: {
    h: Y
  }
}, ha = 203, nt = 0.1593017578125, ba = 78.84375, at = 0.8359375, it = 18.8515625, rt = 18.6875;
function kt(e) {
  if (e < 0) return 0;
  const t = Math.pow(e, 1 / ba);
  return 1e4 * Math.pow(Math.max(0, t - at) / (it - rt * t), 1 / nt);
}
function wt(e) {
  if (e < 0) return 0;
  const t = Math.pow(e / 1e4, nt);
  return Math.pow((at + it * t) / (1 + rt * t), ba);
}
const $t = (e) => Math.max(e / ha, 0), Cn = ({ i: e, t, p: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const i = kt(
    e + 0.008609037037932761 * t + 0.11102962500302593 * n
  ), r = kt(
    e - 0.00860903703793275 * t - 0.11102962500302599 * n
  ), o = kt(
    e + 0.5600313357106791 * t - 0.32062717498731885 * n
  ), s = {
    mode: "xyz65",
    x: $t(
      2.070152218389422 * i - 1.3263473389671556 * r + 0.2066510476294051 * o
    ),
    y: $t(
      0.3647385209748074 * i + 0.680566024947227 * r - 0.0453045459220346 * o
    ),
    z: $t(
      -0.049747207535812 * i - 0.0492609666966138 * r + 1.1880659249923042 * o
    )
  };
  return a !== void 0 && (s.alpha = a), s;
}, zt = (e = 0) => Math.max(e * ha, 0), Hn = ({ x: e, y: t, z: n, alpha: a }) => {
  const i = zt(e), r = zt(t), o = zt(n), s = wt(
    0.3592832590121217 * i + 0.6976051147779502 * r - 0.0358915932320289 * o
  ), c = wt(
    -0.1920808463704995 * i + 1.1004767970374323 * r + 0.0753748658519118 * o
  ), p = wt(
    0.0070797844607477 * i + 0.0748396662186366 * r + 0.8433265453898765 * o
  ), g = 0.5 * s + 0.5 * c, m = 1.61376953125 * s - 3.323486328125 * c + 1.709716796875 * p, x = 4.378173828125 * s - 4.24560546875 * c - 0.132568359375 * p, k = { mode: "itp", i: g, t: m, p: x };
  return a !== void 0 && (k.alpha = a), k;
}, Xi = {
  mode: "itp",
  channels: ["i", "t", "p", "alpha"],
  parse: ["--ictcp"],
  serialize: "--ictcp",
  toMode: {
    xyz65: Cn,
    rgb: (e) => ie(Cn(e))
  },
  fromMode: {
    xyz65: Hn,
    rgb: (e) => Hn(ae(e))
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
}, Fi = 134.03437499999998, Oi = 16295499532821565e-27, _t = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e / 1e4, nt);
  return Math.pow((at + it * t) / (1 + rt * t), Fi);
}, Tt = (e = 0) => Math.max(e * 203, 0), ga = ({ x: e, y: t, z: n, alpha: a }) => {
  e = Tt(e), t = Tt(t), n = Tt(n);
  let i = 1.15 * e - 0.15 * n, r = 0.66 * t + 0.34 * e, o = _t(0.41478972 * i + 0.579999 * r + 0.014648 * n), s = _t(-0.20151 * i + 1.120649 * r + 0.0531008 * n), c = _t(-0.0166008 * i + 0.2648 * r + 0.6684799 * n), p = (o + s) / 2, g = {
    mode: "jab",
    j: 0.44 * p / (1 - 0.56 * p) - Oi,
    a: 3.524 * o - 4.066708 * s + 0.542708 * c,
    b: 0.199076 * o + 1.096799 * s - 1.295875 * c
  };
  return a !== void 0 && (g.alpha = a), g;
}, ji = 134.03437499999998, Pn = 16295499532821565e-27, Nt = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e, 1 / ji);
  return 1e4 * Math.pow((at - t) / (rt * t - it), 1 / nt);
}, St = (e) => e / 203, ma = ({ j: e, a: t, b: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = (e + Pn) / (0.44 + 0.56 * (e + Pn)), r = Nt(i + 0.13860504 * t + 0.058047316 * n), o = Nt(i - 0.13860504 * t - 0.058047316 * n), s = Nt(i - 0.096019242 * t - 0.8118919 * n), c = {
    mode: "xyz65",
    x: St(
      1.661373024652174 * r - 0.914523081304348 * o + 0.23136208173913045 * s
    ),
    y: St(
      -0.3250758611844533 * r + 1.571847026732543 * o - 0.21825383453227928 * s
    ),
    z: St(-0.090982811 * r - 0.31272829 * o + 1.5227666 * s)
  };
  return a !== void 0 && (c.alpha = a), c;
}, xa = (e) => {
  let t = ga(ae(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, va = (e) => ie(ma(e)), Di = {
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
    j: f,
    a: f,
    b: f,
    alpha: { use: f, fixup: T }
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
}, Yi = {
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
    h: { use: f, fixup: D },
    c: f,
    j: f,
    alpha: { use: f, fixup: T }
  },
  difference: {
    h: Qe
  },
  average: {
    h: Y
  }
}, ot = Math.pow(29, 3) / Math.pow(3, 3), sn = Math.pow(6, 3) / Math.pow(29, 3);
let Ct = (e) => Math.pow(e, 3) > sn ? Math.pow(e, 3) : (116 * e - 16) / ot;
const ln = ({ l: e, a: t, b: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = (e + 16) / 116, r = t / 500 + i, o = i - n / 200, s = {
    mode: "xyz50",
    x: Ct(r) * z.X,
    y: Ct(i) * z.Y,
    z: Ct(o) * z.Z
  };
  return a !== void 0 && (s.alpha = a), s;
}, qe = ({ x: e, y: t, z: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = ge({
    r: e * 3.1341359569958707 - t * 1.6173863321612538 - 0.4906619460083532 * n,
    g: e * -0.978795502912089 + t * 1.916254567259524 + 0.03344273116131949 * n,
    b: e * 0.07195537988411677 - t * 0.2289768264158322 + 1.405386058324125 * n
  });
  return a !== void 0 && (i.alpha = a), i;
}, ya = (e) => qe(ln(e)), Re = (e) => {
  let { r: t, g: n, b: a, alpha: i } = be(e), r = {
    mode: "xyz50",
    x: 0.436065742824811 * t + 0.3851514688337912 * n + 0.14307845442264197 * a,
    y: 0.22249319175623702 * t + 0.7168870538238823 * n + 0.06061979053616537 * a,
    z: 0.013923904500943465 * t + 0.09708128566574634 * n + 0.7140993584005155 * a
  };
  return i !== void 0 && (r.alpha = i), r;
}, Ht = (e) => e > sn ? Math.cbrt(e) : (ot * e + 16) / 116, dn = ({ x: e, y: t, z: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = Ht(e / z.X), r = Ht(t / z.Y), o = Ht(n / z.Z), s = {
    mode: "lab",
    l: 116 * r - 16,
    a: 500 * (i - r),
    b: 200 * (r - o)
  };
  return a !== void 0 && (s.alpha = a), s;
}, Ma = (e) => {
  let t = dn(Re(e));
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
const fn = {
  mode: "lab",
  toMode: {
    xyz50: ln,
    rgb: ya
  },
  fromMode: {
    xyz50: dn,
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
    l: f,
    a: f,
    b: f,
    alpha: { use: f, fixup: T }
  }
}, Gi = {
  ...fn,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: oa,
    rgb: et
  },
  fromMode: {
    xyz65: sa,
    rgb: tt
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
const un = {
  mode: "lch",
  toMode: {
    lab: K,
    rgb: (e) => ya(K(e))
  },
  fromMode: {
    rgb: (e) => U(Ma(e)),
    lab: U
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
    h: { use: f, fixup: D },
    c: f,
    l: f,
    alpha: { use: f, fixup: T }
  },
  difference: {
    h: Qe
  },
  average: {
    h: Y
  }
}, Bi = {
  ...un,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => K(e, "lab65"),
    rgb: (e) => et(K(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => U(tt(e), "lch65"),
    lab65: (e) => U(e, "lch65")
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
}, $a = (e, t, n) => 4 * e / (e + 15 * t + 3 * n), za = (e, t, n) => 9 * t / (e + 15 * t + 3 * n), Wi = $a(z.X, z.Y, z.Z), Ui = za(z.X, z.Y, z.Z), Ki = (e) => e <= sn ? ot * e : 116 * Math.cbrt(e) - 16, Jt = ({ x: e, y: t, z: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = Ki(t / z.Y), r = $a(e, t, n), o = za(e, t, n);
  !isFinite(r) || !isFinite(o) ? i = r = o = 0 : (r = 13 * i * (r - Wi), o = 13 * i * (o - Ui));
  let s = {
    mode: "luv",
    l: i,
    u: r,
    v: o
  };
  return a !== void 0 && (s.alpha = a), s;
}, Vi = (e, t, n) => 4 * e / (e + 15 * t + 3 * n), Qi = (e, t, n) => 9 * t / (e + 15 * t + 3 * n), e0 = Vi(z.X, z.Y, z.Z), t0 = Qi(z.X, z.Y, z.Z), Bt = ({ l: e, u: t, v: n, alpha: a }) => {
  if (e === void 0 && (e = 0), e === 0)
    return { mode: "xyz50", x: 0, y: 0, z: 0 };
  t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = t / (13 * e) + e0, r = n / (13 * e) + t0, o = z.Y * (e <= 8 ? e / ot : Math.pow((e + 16) / 116, 3)), s = o * (9 * i) / (4 * r), c = o * (12 - 3 * i - 20 * r) / (4 * r), p = { mode: "xyz50", x: s, y: o, z: c };
  return a !== void 0 && (p.alpha = a), p;
}, n0 = (e) => ka(Jt(Re(e))), a0 = (e) => qe(Bt(wa(e))), i0 = {
  mode: "lchuv",
  toMode: {
    luv: wa,
    rgb: a0
  },
  fromMode: {
    rgb: n0,
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
    h: { use: f, fixup: D },
    c: f,
    l: f,
    alpha: { use: f, fixup: T }
  },
  difference: {
    h: Qe
  },
  average: {
    h: Y
  }
}, r0 = {
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
}, o0 = {
  mode: "luv",
  toMode: {
    xyz50: Bt,
    rgb: (e) => qe(Bt(e))
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
    l: f,
    u: f,
    v: f,
    alpha: { use: f, fixup: T }
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
}, st = (e) => {
  let t = _a(be(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Ie = ({ l: e, a: t, b: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = Math.pow(e + 0.3963377773761749 * t + 0.2158037573099136 * n, 3), r = Math.pow(e - 0.1055613458156586 * t - 0.0638541728258133 * n, 3), o = Math.pow(e - 0.0894841775298119 * t - 1.2914855480194092 * n, 3), s = {
    mode: "lrgb",
    r: 4.076741636075957 * i - 3.3077115392580616 * r + 0.2309699031821044 * o,
    g: -1.2684379732850317 * i + 2.6097573492876887 * r - 0.3413193760026573 * o,
    b: -0.0041960761386756 * i - 0.7034186179359362 * r + 1.7076146940746117 * o
  };
  return a !== void 0 && (s.alpha = a), s;
}, lt = (e) => ge(Ie(e));
function Wt(e) {
  const a = 1.170873786407767;
  return 0.5 * (a * e - 0.206 + Math.sqrt((a * e - 0.206) * (a * e - 0.206) + 4 * 0.03 * a * e));
}
function We(e) {
  return (e * e + 0.206 * e) / (1.170873786407767 * (e + 0.03));
}
function s0(e, t) {
  let n, a, i, r, o, s, c, p;
  -1.88170328 * e - 0.80936493 * t > 1 ? (n = 1.19086277, a = 1.76576728, i = 0.59662641, r = 0.75515197, o = 0.56771245, s = 4.0767416621, c = -3.3077115913, p = 0.2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (n = 0.73956515, a = -0.45954404, i = 0.08285427, r = 0.1254107, o = 0.14503204, s = -1.2684380046, c = 2.6097574011, p = -0.3413193965) : (n = 1.35733652, a = -915799e-8, i = -1.1513021, r = -0.50559606, o = 692167e-8, s = -0.0041960863, c = -0.7034186147, p = 1.707614701);
  let g = n + a * e + i * t + r * e * e + o * e * t, m = 0.3963377774 * e + 0.2158037573 * t, x = -0.1055613458 * e - 0.0638541728 * t, k = -0.0894841775 * e - 1.291485548 * t;
  {
    let _ = 1 + g * m, C = 1 + g * x, N = 1 + g * k, L = _ * _ * _, P = C * C * C, Z = N * N * N, me = 3 * m * _ * _, xe = 3 * x * C * C, ve = 3 * k * N * N, ye = 6 * m * m * _, Me = 6 * x * x * C, ke = 6 * k * k * N, re = s * L + c * P + p * Z, V = s * me + c * xe + p * ve, we = s * ye + c * Me + p * ke;
    g = g - re * V / (V * V - 0.5 * re * we);
  }
  return g;
}
function cn(e, t) {
  let n = s0(e, t), a = Ie({ l: 1, a: n * e, b: n * t }), i = Math.cbrt(1 / Math.max(a.r, a.g, a.b)), r = i * n;
  return [i, r];
}
function l0(e, t, n, a, i, r = null) {
  r || (r = cn(e, t));
  let o;
  if ((n - i) * r[1] - (r[0] - i) * a <= 0)
    o = r[1] * i / (a * r[0] + r[1] * (i - n));
  else {
    o = r[1] * (i - 1) / (a * (r[0] - 1) + r[1] * (i - n));
    {
      let s = n - i, c = a, p = 0.3963377774 * e + 0.2158037573 * t, g = -0.1055613458 * e - 0.0638541728 * t, m = -0.0894841775 * e - 1.291485548 * t, x = s + c * p, k = s + c * g, _ = s + c * m;
      {
        let C = i * (1 - o) + o * n, N = o * a, L = C + N * p, P = C + N * g, Z = C + N * m, me = L * L * L, xe = P * P * P, ve = Z * Z * Z, ye = 3 * x * L * L, Me = 3 * k * P * P, ke = 3 * _ * Z * Z, re = 6 * x * x * L, V = 6 * k * k * P, we = 6 * _ * _ * Z, gn = 4.0767416621 * me - 3.3077115913 * xe + 0.2309699292 * ve - 1, dt = 4.0767416621 * ye - 3.3077115913 * Me + 0.2309699292 * ke, Za = 4.0767416621 * re - 3.3077115913 * V + 0.2309699292 * we, mn = dt / (dt * dt - 0.5 * gn * Za), ft = -gn * mn, xn = -1.2684380046 * me + 2.6097574011 * xe - 0.3413193965 * ve - 1, ut = -1.2684380046 * ye + 2.6097574011 * Me - 0.3413193965 * ke, Ga = -1.2684380046 * re + 2.6097574011 * V - 0.3413193965 * we, vn = ut / (ut * ut - 0.5 * xn * Ga), ct = -xn * vn, yn = -0.0041960863 * me - 0.7034186147 * xe + 1.707614701 * ve - 1, pt = -0.0041960863 * ye - 0.7034186147 * Me + 1.707614701 * ke, Ja = -0.0041960863 * re - 0.7034186147 * V + 1.707614701 * we, Mn = pt / (pt * pt - 0.5 * yn * Ja), ht = -yn * Mn;
        ft = mn >= 0 ? ft : 1e6, ct = vn >= 0 ? ct : 1e6, ht = Mn >= 0 ? ht : 1e6, o += Math.min(ft, Math.min(ct, ht));
      }
    }
  }
  return o;
}
function pn(e, t, n = null) {
  n || (n = cn(e, t));
  let a = n[0], i = n[1];
  return [i / a, i / (1 - a)];
}
function Ta(e, t, n) {
  let a = cn(t, n), i = l0(t, n, e, 1, e, a), r = pn(t, n, a), o = 0.11516993 + 1 / (7.4477897 + 4.1590124 * n + t * (-2.19557347 + 1.75198401 * n + t * (-2.13704948 - 10.02301043 * n + t * (-4.24894561 + 5.38770819 * n + 4.69891013 * t)))), s = 0.11239642 + 1 / (1.6132032 - 0.68124379 * n + t * (0.40370612 + 0.90148123 * n + t * (-0.27087943 + 0.6122399 * n + t * (299215e-8 - 0.45399568 * n - 0.14661872 * t)))), c = i / Math.min(e * r[0], (1 - e) * r[1]), p = e * o, g = (1 - e) * s, m = 0.9 * c * Math.sqrt(
    Math.sqrt(
      1 / (1 / (p * p * p * p) + 1 / (g * g * g * g))
    )
  );
  return p = e * 0.4, g = (1 - e) * 0.8, [Math.sqrt(1 / (1 / (p * p) + 1 / (g * g))), m, i];
}
function Rn(e) {
  const t = e.l !== void 0 ? e.l : 0, n = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = { mode: "okhsl", l: Wt(t) };
  e.alpha !== void 0 && (i.alpha = e.alpha);
  let r = Math.sqrt(n * n + a * a);
  if (!r)
    return i.s = 0, i;
  let [o, s, c] = Ta(t, n / r, a / r), p;
  if (r < s) {
    let g = 0, m = 0.8 * o, x = 1 - m / s;
    p = (r - g) / (m + x * (r - g)) * 0.8;
  } else {
    let g = s, m = 0.2 * s * s * 1.25 * 1.25 / o, x = 1 - m / (c - s);
    p = 0.8 + 0.2 * ((r - g) / (m + x * (r - g)));
  }
  return p && (i.s = p, i.h = H(Math.atan2(a, n) * 180 / Math.PI)), i;
}
function In(e) {
  let t = e.h !== void 0 ? e.h : 0, n = e.s !== void 0 ? e.s : 0, a = e.l !== void 0 ? e.l : 0;
  const i = { mode: "oklab", l: We(a) };
  if (e.alpha !== void 0 && (i.alpha = e.alpha), !n || a === 1)
    return i.a = i.b = 0, i;
  let r = Math.cos(t / 180 * Math.PI), o = Math.sin(t / 180 * Math.PI), [s, c, p] = Ta(i.l, r, o), g, m, x, k;
  n < 0.8 ? (g = 1.25 * n, m = 0, x = 0.8 * s, k = 1 - x / c) : (g = 5 * (n - 0.8), m = c, x = 0.2 * c * c * 1.25 * 1.25 / s, k = 1 - x / (p - c));
  let _ = m + g * x / (1 - k * g);
  return i.a = _ * r, i.b = _ * o, i;
}
const d0 = {
  ...fa,
  mode: "okhsl",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--okhsl"],
  serialize: "--okhsl",
  fromMode: {
    oklab: Rn,
    rgb: (e) => Rn(st(e))
  },
  toMode: {
    oklab: In,
    rgb: (e) => lt(In(e))
  }
};
function En(e) {
  let t = e.l !== void 0 ? e.l : 0, n = e.a !== void 0 ? e.a : 0, a = e.b !== void 0 ? e.b : 0, i = Math.sqrt(n * n + a * a), r = i ? n / i : 1, o = i ? a / i : 1, [s, c] = pn(r, o), p = 0.5, g = 1 - p / s, m = c / (i + t * c), x = m * t, k = m * i, _ = We(x), C = k * _ / x, N = Ie({ l: _, a: r * C, b: o * C }), L = Math.cbrt(
    1 / Math.max(N.r, N.g, N.b, 0)
  );
  t = t / L, i = i / L * Wt(t) / t, t = Wt(t);
  const P = {
    mode: "okhsv",
    s: i ? (p + c) * k / (c * p + c * g * k) : 0,
    v: t ? t / x : 0
  };
  return P.s && (P.h = H(Math.atan2(a, n) * 180 / Math.PI)), e.alpha !== void 0 && (P.alpha = e.alpha), P;
}
function An(e) {
  const t = { mode: "oklab" };
  e.alpha !== void 0 && (t.alpha = e.alpha);
  const n = e.h !== void 0 ? e.h : 0, a = e.s !== void 0 ? e.s : 0, i = e.v !== void 0 ? e.v : 0, r = Math.cos(n / 180 * Math.PI), o = Math.sin(n / 180 * Math.PI), [s, c] = pn(r, o), p = 0.5, g = 1 - p / s, m = 1 - a * p / (p + c - c * g * a), x = a * c * p / (p + c - c * g * a), k = We(m), _ = x * k / m, C = Ie({
    l: k,
    a: r * _,
    b: o * _
  }), N = Math.cbrt(
    1 / Math.max(C.r, C.g, C.b, 0)
  ), L = We(i * m), P = x * L / m;
  return t.l = L * N, t.a = P * r * N, t.b = P * o * N, t;
}
const f0 = {
  ...pa,
  mode: "okhsv",
  channels: ["h", "s", "v", "alpha"],
  parse: ["--okhsv"],
  serialize: "--okhsv",
  fromMode: {
    oklab: En,
    rgb: (e) => En(st(e))
  },
  toMode: {
    oklab: An,
    rgb: (e) => lt(An(e))
  }
};
function u0(e, t) {
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
const c0 = {
  ...fn,
  mode: "oklab",
  toMode: {
    lrgb: Ie,
    rgb: lt
  },
  fromMode: {
    lrgb: _a,
    rgb: st
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [u0],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function p0(e, t) {
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
const h0 = {
  ...un,
  mode: "oklch",
  toMode: {
    oklab: (e) => K(e, "oklab"),
    rgb: (e) => lt(K(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => U(st(e), "oklch"),
    oklab: (e) => U(e, "oklch")
  },
  parse: [p0],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, Xn = (e) => {
  let { r: t, g: n, b: a, alpha: i } = be(e), r = {
    mode: "xyz65",
    x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * a,
    y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * a,
    z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * a
  };
  return i !== void 0 && (r.alpha = i), r;
}, Fn = ({ x: e, y: t, z: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = ge(
    {
      r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
      g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
      b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n
    },
    "p3"
  );
  return a !== void 0 && (i.alpha = a), i;
}, b0 = {
  ...he,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => Fn(ae(e)),
    xyz65: Fn
  },
  toMode: {
    rgb: (e) => ie(Xn(e)),
    xyz65: Xn
  }
}, Pt = (e) => {
  let t = Math.abs(e);
  return t >= 1 / 512 ? Math.sign(e) * Math.pow(t, 1 / 1.8) : 16 * e;
}, On = ({ x: e, y: t, z: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = {
    mode: "prophoto",
    r: Pt(
      e * 1.3457868816471585 - t * 0.2555720873797946 - 0.0511018649755453 * n
    ),
    g: Pt(
      e * -0.5446307051249019 + t * 1.5082477428451466 + 0.0205274474364214 * n
    ),
    b: Pt(e * 0 + t * 0 + 1.2119675456389452 * n)
  };
  return a !== void 0 && (i.alpha = a), i;
}, Lt = (e = 0) => {
  let t = Math.abs(e);
  return t >= 16 / 512 ? Math.sign(e) * Math.pow(t, 1.8) : e / 16;
}, jn = (e) => {
  let t = Lt(e.r), n = Lt(e.g), a = Lt(e.b), i = {
    mode: "xyz50",
    x: 0.7977666449006423 * t + 0.1351812974005331 * n + 0.0313477341283922 * a,
    y: 0.2880748288194013 * t + 0.7118352342418731 * n + 899369387256e-16 * a,
    z: 0 * t + 0 * n + 0.8251046025104602 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, g0 = {
  ...he,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: On,
    rgb: (e) => On(Re(e))
  },
  toMode: {
    xyz50: jn,
    rgb: (e) => qe(jn(e))
  }
}, Dn = 1.09929682680944, m0 = 0.018053968510807, qt = (e) => {
  const t = Math.abs(e);
  return t > m0 ? (Math.sign(e) || 1) * (Dn * Math.pow(t, 0.45) - (Dn - 1)) : 4.5 * e;
}, Yn = ({ x: e, y: t, z: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let i = {
    mode: "rec2020",
    r: qt(
      e * 1.7166511879712683 - t * 0.3556707837763925 - 0.2533662813736599 * n
    ),
    g: qt(
      e * -0.6666843518324893 + t * 1.6164812366349395 + 0.0157685458139111 * n
    ),
    b: qt(
      e * 0.0176398574453108 - t * 0.0427706132578085 + 0.9421031212354739 * n
    )
  };
  return a !== void 0 && (i.alpha = a), i;
}, Zn = 1.09929682680944, x0 = 0.018053968510807, Rt = (e = 0) => {
  let t = Math.abs(e);
  return t < x0 * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((t + Zn - 1) / Zn, 1 / 0.45);
}, Gn = (e) => {
  let t = Rt(e.r), n = Rt(e.g), a = Rt(e.b), i = {
    mode: "xyz65",
    x: 0.6369580483012911 * t + 0.1446169035862083 * n + 0.1688809751641721 * a,
    y: 0.262700212011267 * t + 0.6779980715188708 * n + 0.059301716469862 * a,
    z: 0 * t + 0.0280726930490874 * n + 1.0609850577107909 * a
  };
  return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, v0 = {
  ...he,
  mode: "rec2020",
  fromMode: {
    xyz65: Yn,
    rgb: (e) => Yn(ae(e))
  },
  toMode: {
    xyz65: Gn,
    rgb: (e) => ie(Gn(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, ne = 0.0037930732552754493, Na = Math.cbrt(ne), It = (e) => Math.cbrt(e) - Na, y0 = (e) => {
  const { r: t, g: n, b: a, alpha: i } = be(e), r = It(0.3 * t + 0.622 * n + 0.078 * a + ne), o = It(0.23 * t + 0.692 * n + 0.078 * a + ne), s = It(
    0.2434226892454782 * t + 0.2047674442449682 * n + 0.5518098665095535 * a + ne
  ), c = {
    mode: "xyb",
    x: (r - o) / 2,
    y: (r + o) / 2,
    /* Apply default chroma from luma (subtract Y from B) */
    b: s - (r + o) / 2
  };
  return i !== void 0 && (c.alpha = i), c;
}, Et = (e) => Math.pow(e + Na, 3), M0 = ({ x: e, y: t, b: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const i = Et(e + t) - ne, r = Et(t - e) - ne, o = Et(n + t) - ne, s = ge({
    r: 11.031566904639861 * i - 9.866943908131562 * r - 0.16462299650829934 * o,
    g: -3.2541473810744237 * i + 4.418770377582723 * r - 0.16462299650829934 * o,
    b: -3.6588512867136815 * i + 2.7129230459360922 * r + 1.9459282407775895 * o
  });
  return a !== void 0 && (s.alpha = a), s;
}, k0 = {
  mode: "xyb",
  channels: ["x", "y", "b", "alpha"],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: {
    rgb: M0
  },
  fromMode: {
    rgb: y0
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
}, w0 = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: qe,
    lab: dn
  },
  fromMode: {
    rgb: Re,
    lab: ln
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
}, $0 = (e) => {
  let { x: t, y: n, z: a, alpha: i } = e;
  t === void 0 && (t = 0), n === void 0 && (n = 0), a === void 0 && (a = 0);
  let r = {
    mode: "xyz50",
    x: 1.0479298208405488 * t + 0.0229467933410191 * n - 0.0501922295431356 * a,
    y: 0.0296278156881593 * t + 0.990434484573249 * n - 0.0170738250293851 * a,
    z: -0.0092430581525912 * t + 0.0150551448965779 * n + 0.7518742899580008 * a
  };
  return i !== void 0 && (r.alpha = i), r;
}, z0 = (e) => {
  let { x: t, y: n, z: a, alpha: i } = e;
  t === void 0 && (t = 0), n === void 0 && (n = 0), a === void 0 && (a = 0);
  let r = {
    mode: "xyz65",
    x: 0.9554734527042182 * t - 0.0230985368742614 * n + 0.0632593086610217 * a,
    y: -0.0283697069632081 * t + 1.0099954580058226 * n + 0.021041398966943 * a,
    z: 0.0123140016883199 * t - 0.0205076964334779 * n + 1.3303659366080753 * a
  };
  return i !== void 0 && (r.alpha = i), r;
}, _0 = {
  mode: "xyz65",
  toMode: {
    rgb: ie,
    xyz50: $0
  },
  fromMode: {
    rgb: ae,
    xyz50: z0
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
}, T0 = ({ r: e, g: t, b: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const i = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * t + 0.11448223 * n,
    i: 0.59597799 * e - 0.2741761 * t - 0.32180189 * n,
    q: 0.21147017 * e - 0.52261711 * t + 0.31114694 * n
  };
  return a !== void 0 && (i.alpha = a), i;
}, N0 = ({ y: e, i: t, q: n, alpha: a }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const i = {
    mode: "rgb",
    r: e + 0.95608445 * t + 0.6208885 * n,
    g: e - 0.27137664 * t - 0.6486059 * n,
    b: e - 1.10561724 * t + 1.70250126 * n
  };
  return a !== void 0 && (i.alpha = a), i;
}, S0 = {
  mode: "yiq",
  toMode: {
    rgb: N0
  },
  fromMode: {
    rgb: T0
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
}, C0 = (e, t) => Math.round(e * (t = Math.pow(10, t))) / t, H0 = (e = 4) => (t) => typeof t == "number" ? C0(t, e) : t;
let Xe = H0(2);
const Fe = (e) => Math.max(0, Math.min(1, e || 0)), At = (e) => Math.round(Fe(e) * 255), P0 = q("rgb"), L0 = q("hsl"), q0 = (e) => {
  if (e === void 0)
    return;
  let t = At(e.r), n = At(e.g), a = At(e.b);
  return "#" + (1 << 24 | t << 16 | n << 8 | a).toString(16).slice(1);
}, R0 = (e) => {
  if (e === void 0)
    return;
  const t = Xe(e.h || 0), n = Xe(Fe(e.s) * 100) + "%", a = Xe(Fe(e.l) * 100) + "%";
  return e.alpha === void 0 || e.alpha === 1 ? `hsl(${t}, ${n}, ${a})` : `hsla(${t}, ${n}, ${a}, ${Xe(Fe(e.alpha))})`;
}, I0 = (e) => q0(P0(e)), E0 = (e) => R0(L0(e)), Sa = q("rgb"), Ca = (e) => {
  const t = {
    mode: e.mode,
    r: Math.max(0, Math.min(e.r !== void 0 ? e.r : 0, 1)),
    g: Math.max(0, Math.min(e.g !== void 0 ? e.g : 0, 1)),
    b: Math.max(0, Math.min(e.b !== void 0 ? e.b : 0, 1))
  };
  return e.alpha !== void 0 && (t.alpha = e.alpha), t;
}, A0 = (e) => Ca(Sa(e)), Ha = (e) => e !== void 0 && (e.r === void 0 || e.r >= 0 && e.r <= 1) && (e.g === void 0 || e.g >= 0 && e.g <= 1) && (e.b === void 0 || e.b >= 0 && e.b <= 1);
function X0(e) {
  return Ha(Sa(e));
}
function Pa(e = "rgb") {
  const { gamut: t } = Ke(e);
  if (!t)
    return (a) => !0;
  const n = q(typeof t == "string" ? t : e);
  return (a) => Ha(n(a));
}
function F0(e = "rgb") {
  const { gamut: t } = Ke(e);
  if (!t)
    return (r) => De(r);
  const n = typeof t == "string" ? t : e, a = q(n), i = Pa(n);
  return (r) => {
    const o = De(r);
    if (!o)
      return;
    const s = a(o);
    if (i(s))
      return o;
    const c = Ca(s);
    return o.mode === c.mode ? c : q(o.mode)(c);
  };
}
function O0(e, t = "lch", n = "rgb") {
  e = De(e);
  let a = n === "rgb" ? X0 : Pa(n), i = n === "rgb" ? A0 : F0(n);
  if (e === void 0 || a(e)) return e;
  let r = q(e.mode);
  e = q(t)(e);
  let o = { ...e, c: 0 };
  if (!a(o))
    return r(i(o));
  let s = 0, c = e.c !== void 0 ? e.c : 0, p = Ke(t).ranges.c, g = (p[1] - p[0]) / Math.pow(2, 13), m = o.c;
  for (; c - s > g; )
    o.c = s + (c - s) * 0.5, a(o) ? (m = o.c, s = o.c) : c = o.c;
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
v(Ai);
v(Xi);
v(Di);
v(Yi);
v(fn);
v(Gi);
v(un);
v(Bi);
v(i0);
v(r0);
v(o0);
v(d0);
v(f0);
v(c0);
const hn = v(h0);
v(b0);
v(g0);
v(v0);
v(he);
v(k0);
v(w0);
v(_0);
v(S0);
const j0 = q("rgb");
function D0(e, t) {
  const n = e.getContext("2d", { willReadFrequently: !0 });
  if (!n) return;
  const { width: a, height: i } = e, r = n.createImageData(a, i), o = r.data;
  for (let s = 0; s < i; s++) {
    const c = 1 - s / (i - 1 || 1);
    for (let p = 0; p < a; p++) {
      const g = p / (a - 1 || 1), m = j0({ mode: "hsv", h: t, s: g, v: c, alpha: 1 }), x = (s * a + p) * 4;
      if (!m) {
        o[x] = o[x + 1] = o[x + 2] = 0, o[x + 3] = 255;
        continue;
      }
      o[x] = Math.round(Xt((m.r ?? 0) * 255)), o[x + 1] = Math.round(Xt((m.g ?? 0) * 255)), o[x + 2] = Math.round(Xt((m.b ?? 0) * 255)), o[x + 3] = 255;
    }
  }
  n.putImageData(r, 0, 0);
}
function Xt(e) {
  return Math.min(255, Math.max(0, e));
}
const pe = q("rgb"), bn = q("hsv");
function E(e) {
  const t = Se(e.l ?? 0), n = Math.max(0, e.c ?? 0), a = J0(e.h ?? 0), i = Se(e.alpha ?? 1), r = O0({ mode: "oklch", l: t, c: n, h: a, alpha: i }, "rgb");
  return {
    l: r.l ?? t,
    c: r.c ?? 0,
    h: r.h ?? a,
    alpha: r.alpha ?? i
  };
}
function le(e) {
  const t = aa(e.trim());
  if (!t) return null;
  const n = hn(t);
  return (n == null ? void 0 : n.l) == null ? null : E({
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
function Ne(e) {
  return I0(pe({ mode: "oklch", ...e })) ?? "#000000";
}
function ar(e) {
  const { r: t, g: n, b: a } = Ue(e);
  return e.alpha < 1 ? `rgba(${t}, ${n}, ${a}, ${e.alpha.toFixed(2)})` : `rgb(${t}, ${n}, ${a})`;
}
function Ue(e) {
  const t = pe({ mode: "oklch", ...e, alpha: 1 });
  return t ? {
    r: Math.round((t.r ?? 0) * 255),
    g: Math.round((t.g ?? 0) * 255),
    b: Math.round((t.b ?? 0) * 255)
  } : { r: 0, g: 0, b: 0 };
}
function Y0(e) {
  const { r: t, g: n, b: a } = Ue(e);
  return `linear-gradient(to right, rgba(${t}, ${n}, ${a}, 0), rgb(${t}, ${n}, ${a}))`;
}
function Bn(e) {
  const t = bn({ mode: "oklch", ...e, alpha: 1 });
  return (t == null ? void 0 : t.h) ?? e.h;
}
function Z0(e, t) {
  const n = bn({ mode: "oklch", ...e, alpha: 1 }), a = hn(pe({ mode: "hsv", h: t, s: (n == null ? void 0 : n.s) ?? 0, v: (n == null ? void 0 : n.v) ?? 1, alpha: 1 }) ?? { mode: "hsv", h: t, s: (n == null ? void 0 : n.s) ?? 0, v: (n == null ? void 0 : n.v) ?? 1 });
  return (a == null ? void 0 : a.l) == null ? E({ ...e, h: t }) : E({
    l: a.l,
    c: a.c ?? 0,
    h: a.h ?? t,
    alpha: e.alpha
  });
}
function Wn(e, t) {
  switch (t) {
    case "hex":
      return [{ key: "hex", label: "Hex", value: Ne(e).replace("#", "").toUpperCase() }];
    case "rgb": {
      const n = pe({ mode: "oklch", ...e });
      return [
        { key: "r", label: "R", value: String(Math.round((n.r ?? 0) * 255)), min: 0, max: 255 },
        { key: "g", label: "G", value: String(Math.round((n.g ?? 0) * 255)), min: 0, max: 255 },
        { key: "b", label: "B", value: String(Math.round((n.b ?? 0) * 255)), min: 0, max: 255 }
      ];
    }
    case "hsl": {
      const n = E0(pe({ mode: "oklch", ...e })), a = n == null ? void 0 : n.match(/hsl\(([\d.]+),\s*([\d.]+)%,\s*([\d.]+)%\)/);
      return [
        { key: "h", label: "H", value: String(Math.round(Number((a == null ? void 0 : a[1]) ?? 0))), min: 0, max: 360 },
        { key: "s", label: "S", value: String(Math.round(Number((a == null ? void 0 : a[2]) ?? 0))), min: 0, max: 100, suffix: "%" },
        { key: "l", label: "L", value: String(Math.round(Number((a == null ? void 0 : a[3]) ?? 0))), min: 0, max: 100, suffix: "%" }
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
function G0(e, t, n) {
  switch (e) {
    case "hex": {
      const a = (t.hex ?? "").trim().replace(/^#/, "");
      if (!/^[0-9a-fA-F]{3,8}$/.test(a)) return null;
      const i = le(`#${a}`);
      return i ? Ft(i, n.alpha) : null;
    }
    case "rgb": {
      const a = Number(t.r), i = Number(t.g), r = Number(t.b);
      if ([a, i, r].some((s) => Number.isNaN(s))) return null;
      const o = le(`rgb(${Ot(a)}, ${Ot(i)}, ${Ot(r)})`);
      return o ? Ft(o, n.alpha) : null;
    }
    case "hsl": {
      const a = Number(t.h), i = Number(t.s), r = Number(t.l);
      if ([a, i, r].some((s) => Number.isNaN(s))) return null;
      const o = le(`hsl(${a}, ${Un(i)}%, ${Un(r)}%)`);
      return o ? Ft(o, n.alpha) : null;
    }
    case "oklch": {
      const a = Number(t.l), i = Number(t.c), r = Number(t.h);
      return [a, i, r].some((o) => Number.isNaN(o)) ? null : E({ l: a / 100, c: i, h: r, alpha: n.alpha });
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
function Un(e) {
  return Math.min(100, Math.max(0, e));
}
function J0(e) {
  const t = e % 360;
  return t < 0 ? t + 360 : t;
}
function B0(e) {
  const t = bn({ mode: "oklch", ...e, alpha: 1 });
  return { x: (t == null ? void 0 : t.s) ?? 0, y: 1 - ((t == null ? void 0 : t.v) ?? 0) };
}
function W0(e, t, n, a) {
  const i = Se(e), r = Se(t), o = hn(
    pe({ mode: "hsv", h: n, s: i, v: 1 - r, alpha: 1 }) ?? {
      mode: "hsv",
      h: n,
      s: i,
      v: 1 - r
    }
  );
  return (o == null ? void 0 : o.l) != null ? E({
    l: o.l,
    c: o.c ?? 0,
    h: o.h ?? n,
    alpha: a
  }) : E({ l: 0.5, c: 0, h: n, alpha: a });
}
const U0 = {
  l: 0.62,
  c: 0.24,
  h: 303,
  alpha: 0.8
}, La = "pretty-color-picker-history", qa = 16;
function K0() {
  try {
    const e = localStorage.getItem(La);
    if (!e) return [];
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.slice(0, qa) : [];
  } catch {
    return [];
  }
}
function V0(e, t) {
  const n = Ne(e), a = t.filter((r) => Ne(r) !== n || r.alpha !== e.alpha), i = [e, ...a].slice(0, qa);
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
function jt(e, t, n) {
  let a = !1;
  const i = (s) => {
    if (!a) return;
    const { x: c, y: p } = Kn(s, e);
    t(c, p);
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
    const { x: c, y: p } = Kn(s, e);
    t(c, p), window.addEventListener("pointermove", i), window.addEventListener("pointerup", r), window.addEventListener("pointercancel", r);
  };
  return e.addEventListener("pointerdown", o), () => {
    e.removeEventListener("pointerdown", o), window.removeEventListener("pointermove", i), window.removeEventListener("pointerup", r), window.removeEventListener("pointercancel", r);
  };
}
function Vn(e) {
  return Math.min(1, Math.max(0, e));
}
const Q0 = ["hex", "rgb", "hsl", "oklch"], er = {
  hex: "Hex",
  rgb: "RGB",
  hsl: "HSL",
  oklch: "OKLCH"
};
var $, y, A, ee, G, J, te, Ce, X, F, R, O, He, j, de, fe, Pe, Le, B, ue, u, Ra, Ia, Ea, Aa, Xa, Fa, Ut, Kt, Vt, Q, ze, Qt, Oe, je, en, Oa, ja, Da, tn, nn, an, rn, oe, Ya;
class tr extends HTMLElement {
  constructor() {
    super();
    w(this, u);
    w(this, $);
    w(this, y, { ...U0 });
    w(this, A, "hsl");
    w(this, ee, K0());
    w(this, G, []);
    w(this, J, null);
    w(this, te);
    w(this, Ce);
    w(this, X);
    w(this, F);
    w(this, R);
    w(this, O);
    w(this, He);
    w(this, j);
    w(this, de);
    w(this, fe);
    w(this, Pe);
    w(this, Le);
    w(this, B);
    w(this, ue);
    M(this, $, this.attachShadow({ mode: "open" }));
  }
  static get observedAttributes() {
    return ["value"];
  }
  connectedCallback() {
    h(this, u, Ia).call(this), h(this, u, Ea).call(this), h(this, u, Ra).call(this), h(this, u, ze).call(this);
  }
  disconnectedCallback() {
    l(this, G).forEach((n) => n()), M(this, G, []), l(this, J) && clearTimeout(l(this, J));
  }
  attributeChangedCallback(n, a, i) {
    if (!this.isConnected || n !== "value" || i == null) return;
    const r = le(i);
    r && (M(this, y, r), h(this, u, ze).call(this, !1));
  }
  get value() {
    return Jn(l(this, y));
  }
  set value(n) {
    const a = le(n);
    a && (M(this, y, a), h(this, u, ze).call(this));
  }
  get color() {
    return { ...l(this, y) };
  }
  set color(n) {
    M(this, y, E(n)), h(this, u, ze).call(this);
  }
}
$ = new WeakMap(), y = new WeakMap(), A = new WeakMap(), ee = new WeakMap(), G = new WeakMap(), J = new WeakMap(), te = new WeakMap(), Ce = new WeakMap(), X = new WeakMap(), F = new WeakMap(), R = new WeakMap(), O = new WeakMap(), He = new WeakMap(), j = new WeakMap(), de = new WeakMap(), fe = new WeakMap(), Pe = new WeakMap(), Le = new WeakMap(), B = new WeakMap(), ue = new WeakMap(), u = new WeakSet(), Ra = function() {
  const n = this.getAttribute("value");
  if (n) {
    const a = le(n);
    a && M(this, y, a);
  }
}, Ia = function() {
  l(this, $).innerHTML = `
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap" />
      <style>${Ba}</style>
      <div class="pcp" part="container">
        <header class="pcp-header">
          <h2 class="pcp-title">Color Picker</h2>
          <button type="button" class="pcp-close" aria-label="Close">×</button>
        </header>
        <div class="pcp-plane-wrap">
          <canvas class="pcp-plane" width="320" height="240" aria-label="Color plane"></canvas>
          <div class="pcp-cursor" aria-hidden="true"></div>
        </div>
        <div class="pcp-slider-wrapper">
          <div class="pcp-slider pcp-hue-row" aria-label="Hue">
            <div class="pcp-slider-track">
              <div class="pcp-slider-hue"></div>
            </div>
            <div class="pcp-slider-handle"></div>
          </div>
        </div>
        <div class="pcp-slider-wrapper">
          <div class="pcp-slider pcp-alpha-row" aria-label="Opacity">
            <div class="pcp-slider-track">
              <div class="pcp-slider-checker"></div>
              <div class="pcp-slider-alpha"></div>
            </div>
            <div class="pcp-slider-handle"></div>
          </div>
        </div>
        <div class="pcp-tabs" role="tablist">
          <div class="pcp-tabs-pill"></div>
          ${Q0.map((n) => `<button type="button" class="pcp-tab" role="tab" data-format="${n}">${er[n]}</button>`).join("")}
        </div>
        <div class="pcp-inputs">
          <div class="pcp-swatch" aria-hidden="true">
            <div class="pcp-swatch-solid"></div>
            <div class="pcp-swatch-alpha">
              <div class="pcp-swatch-checker"></div>
              <div class="pcp-swatch-alpha-color"></div>
            </div>
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
    `, M(this, te, l(this, $).querySelector(".pcp-plane")), M(this, Ce, l(this, $).querySelector(".pcp-plane-wrap")), M(this, X, l(this, $).querySelector(".pcp-cursor")), M(this, F, l(this, $).querySelector(".pcp-hue-row")), M(this, R, l(this, F).querySelector(".pcp-slider-handle")), M(this, O, l(this, $).querySelector(".pcp-alpha-row")), M(this, He, l(this, $).querySelector(".pcp-slider-alpha")), M(this, j, l(this, O).querySelector(".pcp-slider-handle")), M(this, de, l(this, $).querySelector(".pcp-tabs-pill")), M(this, fe, l(this, $).querySelector(".pcp-fields")), M(this, Pe, l(this, $).querySelector(".pcp-swatch-solid")), M(this, Le, l(this, $).querySelector(".pcp-swatch-alpha-color")), M(this, B, l(this, $).querySelector(".pcp-alpha-input")), M(this, ue, l(this, $).querySelector(".pcp-history"));
}, Ea = function() {
  l(this, $).querySelector(".pcp-close").addEventListener("click", () => {
    this.dispatchEvent(new CustomEvent("close", { bubbles: !0, composed: !0 }));
  }), l(this, G).push(
    jt(
      l(this, Ce),
      (a, i) => h(this, u, Aa).call(this, a, i),
      () => h(this, u, oe).call(this)
    )
  ), l(this, G).push(
    jt(
      l(this, F),
      (a) => h(this, u, Xa).call(this, a),
      () => h(this, u, oe).call(this)
    )
  ), l(this, G).push(
    jt(
      l(this, O),
      (a) => h(this, u, Fa).call(this, a),
      () => h(this, u, oe).call(this)
    )
  ), l(this, $).querySelectorAll(".pcp-tab").forEach((a) => {
    a.addEventListener("click", () => {
      const i = a.dataset.format;
      i && i !== l(this, A) && (M(this, A, i), h(this, u, Oe).call(this, !0), h(this, u, an).call(this), h(this, u, nn).call(this), h(this, u, je).call(this));
    });
  }), l(this, B).addEventListener("change", () => h(this, u, Kt).call(this)), l(this, B).addEventListener("keydown", (a) => {
    a.key === "Enter" && h(this, u, Kt).call(this);
  });
}, Aa = function(n, a) {
  l(this, X).dataset.dragging = "true";
  const i = h(this, u, Ut).call(this);
  h(this, u, Q).call(this, W0(n, a, i, l(this, y).alpha), !1), h(this, u, en).call(this, n, a);
}, Xa = function(n) {
  l(this, F).dataset.active = "true", l(this, R).dataset.dragging = "true";
  const a = n * 360;
  h(this, u, Q).call(this, Z0(l(this, y), a), !1), l(this, R).style.left = `${n * 100}%`, h(this, u, Oe).call(this, !1), h(this, u, je).call(this);
}, Fa = function(n) {
  l(this, O).dataset.active = "true", l(this, j).dataset.dragging = "true", h(this, u, Q).call(this, E({ ...l(this, y), alpha: n }), !1), l(this, j).style.left = `${n * 100}%`;
}, Ut = function() {
  const n = l(this, R).style.left;
  return n.endsWith("%") ? parseFloat(n) / 100 * 360 : Bn(l(this, y));
}, Kt = function() {
  const n = l(this, B).value.replace(/%/g, "").trim(), a = Number(n);
  if (Number.isNaN(a)) {
    h(this, u, tn).call(this);
    return;
  }
  h(this, u, Q).call(this, E({ ...l(this, y), alpha: a / 100 })), h(this, u, oe).call(this);
}, Vt = function(n, a) {
  const i = {};
  Wn(l(this, y), l(this, A)).forEach((o) => {
    i[o.key] = o.key === n ? a : o.value;
  });
  const r = G0(l(this, A), i, l(this, y));
  r && (h(this, u, Q).call(this, r), h(this, u, oe).call(this));
}, Q = function(n, a = !0) {
  M(this, y, E(n)), h(this, u, Qt).call(this, a);
}, ze = function(n = !0) {
  h(this, u, Oe).call(this, !1), h(this, u, an).call(this), h(this, u, Qt).call(this, n), h(this, u, rn).call(this);
}, Qt = function(n) {
  h(this, u, nn).call(this), h(this, u, Da).call(this), h(this, u, Oa).call(this), h(this, u, je).call(this), n && h(this, u, Ya).call(this);
}, Oe = function(n) {
  n && (l(this, te).dataset.switching = "true", l(this, J) && clearTimeout(l(this, J)), M(this, J, setTimeout(() => {
    delete l(this, te).dataset.switching;
  }, 200)));
  const a = h(this, u, Ut).call(this);
  D0(l(this, te), a);
}, je = function() {
  const { x: n, y: a } = B0(l(this, y));
  h(this, u, en).call(this, n, a), delete l(this, X).dataset.dragging;
}, en = function(n, a) {
  l(this, X).style.left = `${n * 100}%`, l(this, X).style.top = `${a * 100}%`;
}, Oa = function() {
  const n = Bn(l(this, y));
  l(this, R).style.left = `${n / 360 * 100}%`, delete l(this, R).dataset.dragging, delete l(this, F).dataset.active, l(this, j).style.left = `${l(this, y).alpha * 100}%`, delete l(this, j).dataset.dragging, delete l(this, O).dataset.active, h(this, u, ja).call(this);
}, ja = function() {
  l(this, He).style.background = Y0(l(this, y));
}, Da = function() {
  const { r: n, g: a, b: i } = Ue(l(this, y));
  l(this, Pe).style.background = `rgb(${n}, ${a}, ${i})`, l(this, Le).style.background = `rgba(${n}, ${a}, ${i}, ${l(this, y).alpha})`;
}, tn = function() {
  l(this, B).value = `${Math.round(l(this, y).alpha * 100)}%`;
}, nn = function() {
  const n = Wn(l(this, y), l(this, A));
  l(this, fe).innerHTML = n.map(
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
  ).join(""), l(this, fe).querySelectorAll(".pcp-field-input").forEach((a) => {
    const i = a, r = i.dataset.key;
    i.addEventListener("change", () => h(this, u, Vt).call(this, r, i.value)), i.addEventListener("keydown", (o) => {
      o.key === "Enter" && h(this, u, Vt).call(this, r, i.value);
    });
  }), h(this, u, tn).call(this);
}, an = function() {
  const n = l(this, $).querySelectorAll(".pcp-tab");
  let a = null;
  if (n.forEach((i) => {
    const r = i.dataset.format === l(this, A);
    i.setAttribute("data-active", String(r)), i.setAttribute("aria-selected", String(r)), r && (a = i);
  }), a) {
    const i = a, r = i.offsetLeft, o = i.offsetWidth;
    l(this, de).style.left = `${r}px`, l(this, de).style.width = `${o}px`;
  }
}, rn = function() {
  l(this, ue).innerHTML = l(this, ee).map((n, a) => {
    const { r: i, g: r, b: o } = Ue(n), s = `rgb(${i}, ${r}, ${o})`, c = `rgba(${i}, ${r}, ${o}, ${n.alpha})`;
    return `
          <button type="button" class="pcp-history-swatch" data-index="${a}" aria-label="Color ${Ne(n)}">
            <span
              class="pcp-history-swatch-fill"
              style="--swatch-solid:${s};--swatch-alpha:${c}"
            ></span>
          </button>
        `;
  }).join(""), l(this, ue).querySelectorAll(".pcp-history-swatch").forEach((n) => {
    n.addEventListener("click", () => {
      const a = Number(n.dataset.index), i = l(this, ee)[a];
      i && h(this, u, Q).call(this, { ...i });
    });
  });
}, oe = function() {
  delete l(this, X).dataset.dragging, delete l(this, R).dataset.dragging, delete l(this, j).dataset.dragging, delete l(this, F).dataset.active, delete l(this, O).dataset.active, M(this, ee, V0(l(this, y), l(this, ee))), h(this, u, rn).call(this);
}, Ya = function() {
  const n = {
    color: { ...l(this, y) },
    css: Jn(l(this, y)),
    hex: Ne(l(this, y))
  };
  this.dispatchEvent(
    new CustomEvent("change", {
      detail: n,
      bubbles: !0,
      composed: !0
    })
  );
};
customElements.get("pretty-color-picker") || customElements.define("pretty-color-picker", tr);
export {
  U0 as DEFAULT_COLOR,
  tr as PrettyColorPicker,
  Wn as formatFieldsFor,
  E as normalizeOklch,
  le as oklchFromCss,
  Jn as oklchToCss,
  Ne as oklchToHex,
  ar as oklchToRgbString,
  G0 as parseFormatFields
};
