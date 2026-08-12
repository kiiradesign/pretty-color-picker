var si = (e) => {
  throw TypeError(e);
};
var Zt = (e, n, t) => n.has(e) || si("Cannot " + t);
var l = (e, n, t) => (Zt(e, n, "read from private field"), t ? t.call(e) : n.get(e)), w = (e, n, t) => n.has(e) ? si("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(e) : n.set(e, t), g = (e, n, t, i) => (Zt(e, n, "write to private field"), i ? i.call(e, t) : n.set(e, t), t), d = (e, n, t) => (Zt(e, n, "access private method"), t);
const oi = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z" opacity="0.2"/><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/></svg>', aa = '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z" opacity="0.2"/><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"/></svg>', sa = '@import"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap";:host{--pcp-width: 260px;--pcp-radius-sm: 4px;--pcp-radius: 6px;--pcp-radius-lg: 9px;--pcp-panel-padding: 9px;--pcp-section-gap: 6px;--pcp-history-cols: 8;--pcp-history-swatch-size: calc( (var(--pcp-width) - 2 * var(--pcp-panel-padding) - 7 * var(--pcp-history-gap)) / var(--pcp-history-cols) );--pcp-control-height: var(--pcp-history-swatch-size);--pcp-slider-height: 36px;--pcp-slider-handle-width: 3px;--pcp-slider-handle-height: 20px;--pcp-tabs-radius: 8px;--pcp-tabs-pill-radius: 6px;--pcp-tab-font-size: 11px;--pcp-tab-padding-y: 6px;--pcp-tab-padding-x: 8px;--pcp-field-value-size: 11px;--pcp-field-value-line: 15px;--pcp-field-input-height: 28px;--pcp-input-panel-height: var(--pcp-slider-height);--pcp-input-row-padding-y: 4px;--pcp-input-row-padding-x: 8px;--pcp-alpha-col-width: 4ch;--pcp-value-col-width: minmax(0, 1fr);--pcp-swatch-code-gap: var(--pcp-section-gap);--pcp-history-gap: 6px;--pcp-checker-size: 6px;--pcp-loupe-size: 14px;--pcp-field-input-radius: var(--pcp-radius-sm);--pcp-icon-button-size: 26px;--pcp-icon-button-radius: var(--pcp-radius-sm);--pcp-ease-out: cubic-bezier(.175, .885, .32, 1.1);--pcp-font: "Geist", system-ui, -apple-system, "SF Pro Display", sans-serif;--pcp-mono: "Geist Mono", ui-monospace, monospace;display:inline-block;font-family:var(--pcp-font);-webkit-font-smoothing:antialiased;color:var(--pcp-text-primary)}:host([mode="popover"]),:host([movable]){position:fixed;z-index:1000;margin:0}:host([mode="popover"]:not([open])){display:none}:host([mode="popover"]) .pcp-header,:host([movable]) .pcp-header{cursor:grab;touch-action:none}:host([mode="popover"]) .pcp-header[data-dragging=true],:host([movable]) .pcp-header[data-dragging=true]{cursor:grabbing}:host([mode="popover"]) .pcp-header .pcp-tabs,:host([movable]) .pcp-header .pcp-tabs,:host([mode="popover"]) .pcp-header .pcp-tab,:host([movable]) .pcp-header .pcp-tab,:host([mode="popover"]) .pcp-header .pcp-header-btn,:host([movable]) .pcp-header .pcp-header-btn{cursor:pointer;touch-action:manipulation}:host,:host([theme="dark"]){color-scheme:dark;--pcp-bg: #212121;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: rgba(255, 255, 255, .05);--pcp-surface-hover: rgba(255, 255, 255, .1);--pcp-surface-active: rgba(255, 255, 255, .11);--pcp-tab-pill: rgba(255, 255, 255, .11);--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-root: #ffffff;--pcp-text-section: rgba(255, 255, 255, .7);--pcp-text-primary: rgba(255, 255, 255, .95);--pcp-text-label: rgba(255, 255, 255, .7);--pcp-text-muted: #a0a0a0;--pcp-text-secondary: rgba(255, 255, 255, .6);--pcp-text-tertiary: rgba(255, 255, 255, .4);--pcp-text-focus: #ffffff;--pcp-slider-handle: rgba(255, 255, 255, .95);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: 0 8px 32px rgba(0, 0, 0, .5)}:host([theme="light"]){color-scheme:light;--pcp-bg: #fafafa;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: rgba(0, 0, 0, .04);--pcp-surface-hover: rgba(0, 0, 0, .08);--pcp-surface-active: rgba(0, 0, 0, .1);--pcp-tab-pill: rgba(0, 0, 0, .1);--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-root: #000000;--pcp-text-section: rgba(0, 0, 0, .65);--pcp-text-primary: rgba(0, 0, 0, .9);--pcp-text-label: rgba(0, 0, 0, .6);--pcp-text-muted: #4d4d4d;--pcp-text-secondary: rgba(0, 0, 0, .55);--pcp-text-tertiary: rgba(0, 0, 0, .35);--pcp-text-focus: #000000;--pcp-slider-handle: rgba(0, 0, 0, .9);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 4px 20px rgba(0, 0, 0, .08)}@media(prefers-color-scheme:dark){:host([theme="system"]){color-scheme:dark;--pcp-bg: #212121;--pcp-border: rgba(255, 255, 255, .1);--pcp-border-hover: rgba(255, 255, 255, .15);--pcp-surface: rgba(255, 255, 255, .05);--pcp-surface-hover: rgba(255, 255, 255, .1);--pcp-surface-active: rgba(255, 255, 255, .11);--pcp-tab-pill: rgba(255, 255, 255, .11);--pcp-divider: rgba(255, 255, 255, .06);--pcp-text-root: #ffffff;--pcp-text-section: rgba(255, 255, 255, .7);--pcp-text-primary: rgba(255, 255, 255, .95);--pcp-text-label: rgba(255, 255, 255, .7);--pcp-text-muted: #a0a0a0;--pcp-text-secondary: rgba(255, 255, 255, .6);--pcp-text-tertiary: rgba(255, 255, 255, .4);--pcp-text-focus: #ffffff;--pcp-slider-handle: rgba(255, 255, 255, .95);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #47a8ff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .35);--pcp-elevation: 0 8px 32px rgba(0, 0, 0, .5)}}@media(prefers-color-scheme:light){:host([theme="system"]){color-scheme:light;--pcp-bg: #fafafa;--pcp-border: rgba(0, 0, 0, .1);--pcp-border-hover: rgba(0, 0, 0, .15);--pcp-surface: rgba(0, 0, 0, .04);--pcp-surface-hover: rgba(0, 0, 0, .08);--pcp-surface-active: rgba(0, 0, 0, .1);--pcp-tab-pill: rgba(0, 0, 0, .1);--pcp-divider: rgba(0, 0, 0, .06);--pcp-text-root: #000000;--pcp-text-section: rgba(0, 0, 0, .65);--pcp-text-primary: rgba(0, 0, 0, .9);--pcp-text-label: rgba(0, 0, 0, .6);--pcp-text-muted: #4d4d4d;--pcp-text-secondary: rgba(0, 0, 0, .55);--pcp-text-tertiary: rgba(0, 0, 0, .35);--pcp-text-focus: #000000;--pcp-slider-handle: rgba(0, 0, 0, .9);--pcp-checker-base: #ffffff;--pcp-checker-tone: #cccccc;--pcp-focus-ring: #006bff;--pcp-cursor-ring: #ffffff;--pcp-cursor-outline: rgba(0, 0, 0, .4);--pcp-elevation: 0 4px 20px rgba(0, 0, 0, .08)}}*,*:before,*:after{box-sizing:border-box}.pcp-clip{overflow:hidden;border-radius:var(--pcp-clip-radius, var(--pcp-radius-sm))}.pcp-swatch-fill{display:block;box-sizing:border-box;width:calc(100% + 2px);height:calc(100% + 2px);margin:-1px;border-radius:inherit;background-color:var(--pcp-checker-base);background-image:linear-gradient(to right,var(--swatch-solid, #000) 50%,transparent 50%),linear-gradient(to right,transparent 50%,var(--swatch-alpha, rgba(0, 0, 0, .5)) 50%),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,100% 100%,var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size);background-position:0 0,0 0,0 0,0 calc(var(--pcp-checker-size) / 2),calc(var(--pcp-checker-size) / 2) calc(var(--pcp-checker-size) / -2),calc(var(--pcp-checker-size) / -2) 0}@supports (background: -webkit-named-image(i)){.pcp-clip,.pcp-swatch-fill{clip-path:inset(0 round var(--pcp-clip-radius, var(--pcp-radius-sm)))}}.pcp{display:flex;flex-direction:column;gap:var(--pcp-section-gap);width:var(--pcp-width);background:var(--pcp-bg);border:1px solid var(--pcp-border);border-radius:var(--pcp-radius-lg);box-shadow:var(--pcp-elevation);padding:var(--pcp-panel-padding);-webkit-user-select:none;user-select:none;overflow:visible}.pcp-header{display:flex;align-items:center;justify-content:space-between;gap:6px;padding-bottom:6px;margin-bottom:0;min-height:var(--pcp-icon-button-size);border-bottom:1px solid var(--pcp-divider)}.pcp-header .pcp-tabs{flex:1;min-width:0}.pcp-header-btn{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--pcp-icon-button-size);height:var(--pcp-icon-button-size);padding:0;border:none;border-radius:var(--pcp-icon-button-radius);background:transparent;color:var(--pcp-text-focus);cursor:pointer;transition:background .15s var(--pcp-ease-out),color .15s var(--pcp-ease-out),transform .16s var(--pcp-ease-out)}.pcp-header-btn svg{width:13px;height:13px;flex-shrink:0}@media(hover:hover)and (pointer:fine){.pcp-header-btn:hover{background:var(--pcp-surface-hover);color:var(--pcp-text-primary)}}.pcp-header-btn:active{background:var(--pcp-surface-active);transform:scale(.97)}.pcp-header-btn:focus{outline:none}.pcp-header-btn:focus-visible{box-shadow:0 0 0 2px var(--pcp-bg),0 0 0 4px var(--pcp-focus-ring)}.pcp-plane-wrap{position:relative;width:100%;aspect-ratio:1;margin-bottom:0;cursor:crosshair;touch-action:none;overflow:visible}.pcp-plane-surface{position:absolute;top:0;right:0;bottom:0;left:0;--pcp-clip-radius: var(--pcp-radius-sm)}.pcp-plane{display:block;width:100%;height:100%}.pcp-cursor{position:absolute;z-index:2;width:var(--pcp-loupe-size);height:var(--pcp-loupe-size);margin:calc(var(--pcp-loupe-size) / -2) 0 0 calc(var(--pcp-loupe-size) / -2);border:none;border-radius:50%;background:transparent;box-shadow:0 0 0 1px var(--pcp-cursor-outline),inset 0 0 0 1px var(--pcp-cursor-ring);pointer-events:none}.pcp-cursor[data-dragging=true]{transition:none}.pcp-slider-wrapper{position:relative;height:var(--pcp-slider-height);margin-bottom:0;overflow:visible}.pcp-slider{position:absolute;top:0;right:0;bottom:0;left:0;cursor:pointer;-webkit-user-select:none;user-select:none;background:transparent;touch-action:none;overflow:visible}.pcp-slider-track{position:absolute;top:0;right:0;bottom:0;left:0;--pcp-clip-radius: var(--pcp-radius);pointer-events:none}.pcp-slider-fill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none}.pcp-slider-fill-hue{background:linear-gradient(to right,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.pcp-slider-fill-alpha{--pcp-alpha-gradient: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));background-color:var(--pcp-checker-base);background-image:var(--pcp-alpha-gradient),linear-gradient(45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(-45deg,var(--pcp-checker-tone) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--pcp-checker-tone) 75%),linear-gradient(-45deg,transparent 75%,var(--pcp-checker-tone) 75%);background-size:100% 100%,var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size),var(--pcp-checker-size) var(--pcp-checker-size);background-position:0 0,0 0,0 calc(var(--pcp-checker-size) / 2),calc(var(--pcp-checker-size) / 2) calc(var(--pcp-checker-size) / -2),calc(var(--pcp-checker-size) / -2) 0}.pcp-slider-handle{position:absolute;top:50%;left:0;z-index:2;width:var(--pcp-slider-handle-width);height:var(--pcp-slider-handle-height);border:none;outline:none;border-radius:999px;background-color:var(--pcp-slider-handle);pointer-events:none;transform:translateY(-50%);opacity:1;box-shadow:none;filter:none;transition:background-color .12s ease}.pcp-slider-handle[data-dragging=true]{opacity:1}.pcp-tabs{position:relative;display:flex;align-items:stretch;box-sizing:border-box;padding:2px;margin-bottom:0;background:transparent;border-radius:var(--pcp-tabs-radius)}.pcp-tabs-pill{position:absolute;top:2px;bottom:2px;left:0;width:0;background:var(--pcp-surface-active);border-radius:var(--pcp-tabs-pill-radius);z-index:0;pointer-events:none;transition:left .2s var(--pcp-ease-out),width .2s var(--pcp-ease-out)}.pcp-tab{position:relative;z-index:1;flex:1;display:flex;align-items:center;justify-content:center;padding:var(--pcp-tab-padding-y) var(--pcp-tab-padding-x);font-family:inherit;font-size:var(--pcp-tab-font-size);font-weight:500;line-height:1;letter-spacing:normal;text-transform:none;text-align:center;background:transparent;border:none;color:var(--pcp-text-label);cursor:pointer;transition:color .15s var(--pcp-ease-out)}.pcp-tab[data-active=true]{color:var(--pcp-text-primary)}.pcp-tab:active{transform:scale(.97)}@media(min-width:641px){:host{--pcp-tab-padding-y: 9px}}.pcp-values-row{display:flex;align-items:center;gap:var(--pcp-swatch-code-gap);width:100%;min-width:0}.pcp-swatch{flex-shrink:0;width:var(--pcp-slider-height);height:var(--pcp-slider-height);padding:0;border:none;background:none;position:relative;cursor:pointer}.pcp-swatch-surface{display:block;width:100%;height:100%;position:relative;--pcp-clip-radius: var(--pcp-radius)}.pcp-swatch:focus-visible{outline:2px solid var(--pcp-focus-ring);outline-offset:2px}.pcp-swatch:active .pcp-swatch-surface{transform:scale(.97)}.pcp-swatch-tooltip{position:absolute;left:calc(-1 * var(--pcp-panel-padding));top:calc(100% + var(--pcp-panel-padding) + 6px);z-index:5;padding:5px 8px;border-radius:var(--pcp-radius);border:1px solid var(--pcp-border);background:var(--pcp-bg);color:var(--pcp-text-primary);font-family:var(--pcp-font);font-size:var(--pcp-tab-font-size);font-weight:500;line-height:1.2;letter-spacing:.01em;white-space:nowrap;pointer-events:none;box-shadow:0 2px 10px #00000038;opacity:0;transform:translateY(-2px) scale(.97);transform-origin:left top;transition:opacity 125ms ease-out,transform 125ms ease-out}.pcp-swatch-tooltip.is-visible{opacity:1;transform:translateY(0) scale(1)}.pcp-inputs{display:grid;flex:1;min-width:0;box-sizing:border-box;overflow:hidden;grid-template-columns:var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-value-col-width) var(--pcp-alpha-col-width);column-gap:3px;align-items:center;margin-bottom:0;padding:var(--pcp-input-row-padding-y) var(--pcp-input-row-padding-x);min-height:var(--pcp-slider-height);background:var(--pcp-surface);border-radius:var(--pcp-radius)}.pcp-fields{grid-column:1 / 4;display:grid;min-width:0;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:3px}.pcp-fields[data-format=hex] .pcp-field-hex{grid-column:1 / -1;justify-self:center;width:fit-content;align-items:center}.pcp-fields[data-format=hex] .pcp-field-input{width:8ch;min-width:8ch;padding:0 4px}.pcp-fields[data-format=rgb] .pcp-field-r{grid-column:1}.pcp-fields[data-format=rgb] .pcp-field-g{grid-column:2}.pcp-fields[data-format=rgb] .pcp-field-b{grid-column:3}.pcp-fields[data-format=hsl] .pcp-field-h{grid-column:1}.pcp-fields[data-format=hsl] .pcp-field-s{grid-column:2}.pcp-fields[data-format=hsl] .pcp-field-l{grid-column:3}.pcp-fields[data-format=oklch] .pcp-field-l{grid-column:1}.pcp-fields[data-format=oklch] .pcp-field-c{grid-column:2}.pcp-fields[data-format=oklch] .pcp-field-h{grid-column:3}.pcp-alpha-field{grid-column:4;box-sizing:border-box;width:var(--pcp-alpha-col-width);min-width:var(--pcp-alpha-col-width);max-width:var(--pcp-alpha-col-width);align-items:center}.pcp-alpha-field .pcp-field-input{width:100%;min-width:0;padding:0;box-sizing:border-box}.pcp-field{min-width:0;display:flex;flex-direction:column;align-items:stretch;justify-content:center}.pcp-fields[data-format=oklch] .pcp-field-c .pcp-field-input{letter-spacing:-.02em;padding:0 1px}.pcp-fields:not([data-format=hex]) .pcp-field-input,.pcp-alpha-field .pcp-field-input{cursor:ew-resize;touch-action:none}.pcp-field-input[data-scrubbing=true]{color:var(--pcp-text-focus);cursor:ew-resize}.pcp-field-input{width:100%;min-width:0;min-height:var(--pcp-field-input-height);height:var(--pcp-field-input-height);padding:0 2px;font-family:var(--pcp-mono);font-size:var(--pcp-field-value-size);font-weight:500;line-height:var(--pcp-field-input-height);font-variant-numeric:tabular-nums;text-align:center;color:var(--pcp-text-secondary);background:transparent;border:none;border-radius:var(--pcp-field-input-radius);outline:none;box-shadow:none;transition:color .15s var(--pcp-ease-out),background .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-field-input:hover{background:var(--pcp-surface-hover)}}.pcp-field-input:focus{color:var(--pcp-text-focus);background:transparent;border-radius:var(--pcp-field-input-radius);box-shadow:none;outline:none;cursor:text}.pcp-field-input:active{background:var(--pcp-surface-active)}.pcp-history-section[hidden]{display:none}.pcp-history{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:var(--pcp-history-gap);width:100%}.pcp-history-swatch{-moz-appearance:none;appearance:none;-webkit-appearance:none;display:block;width:100%;aspect-ratio:1;height:auto;flex-shrink:0;padding:0;border:none;background:none;--pcp-clip-radius: 4px;cursor:pointer;transition:opacity .15s var(--pcp-ease-out)}@media(hover:hover)and (pointer:fine){.pcp-history-swatch:hover{opacity:.85}}.pcp-history-swatch:active{opacity:.7}@media(prefers-reduced-motion:reduce){.pcp-header-btn,.pcp-tab,.pcp-tabs-pill,.pcp-cursor,.pcp-slider-handle,.pcp-history-swatch,.pcp-swatch-tooltip{transition:none}.pcp-tab:active,.pcp-header-btn:active,.pcp-swatch:active .pcp-swatch-surface{transform:none}}', Oi = (e, n) => {
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
}, oa = {
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
}, la = (e) => Oi(oa[e.toLowerCase()], 6), ca = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, da = (e) => {
  let n;
  return (n = e.match(ca)) ? Oi(parseInt(n[1], 16), n[1].length) : void 0;
}, he = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", Ue = `${he}%`, Zn = `(?:${he}%|${he})`, pa = `(?:${he}(deg|grad|rad|turn)|${he})`, Pe = "\\s*,\\s*", ha = new RegExp(
  `^rgba?\\(\\s*${he}${Pe}${he}${Pe}${he}\\s*(?:,\\s*${Zn}\\s*)?\\)$`
), ua = new RegExp(
  `^rgba?\\(\\s*${Ue}${Pe}${Ue}${Pe}${Ue}\\s*(?:,\\s*${Zn}\\s*)?\\)$`
), fa = (e) => {
  let n = { mode: "rgb" }, t;
  if (t = e.match(ha))
    t[1] !== void 0 && (n.r = t[1] / 255), t[2] !== void 0 && (n.g = t[2] / 255), t[3] !== void 0 && (n.b = t[3] / 255);
  else if (t = e.match(ua))
    t[1] !== void 0 && (n.r = t[1] / 100), t[2] !== void 0 && (n.g = t[2] / 100), t[3] !== void 0 && (n.b = t[3] / 100);
  else
    return;
  return t[4] !== void 0 ? n.alpha = Math.max(0, Math.min(1, t[4] / 100)) : t[5] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[5]))), n;
}, bt = (e, n) => e === void 0 ? void 0 : typeof e != "object" ? Bi(e) : e.mode !== void 0 ? e : n ? { ...e, mode: n } : void 0, X = (e = "rgb") => (n) => (n = bt(n, e)) !== void 0 ? (
  // if the color's mode corresponds to our target mode
  n.mode === e ? (
    // then just return the color
    n
  ) : (
    // otherwise check to see if we have a dedicated
    // converter for the target mode
    B[n.mode][e] ? (
      // and return its result...
      B[n.mode][e](n)
    ) : (
      // ...otherwise pass through RGB as an intermediary step.
      // if the target mode is RGB...
      e === "rgb" ? (
        // just return the RGB
        B[n.mode].rgb(n)
      ) : (
        // otherwise convert color.mode -> RGB -> target_mode
        B.rgb[e](B[n.mode].rgb(n))
      )
    )
  )
) : void 0, B = {}, ji = {}, gt = [], Yi = {}, ba = (e) => e, k = (e) => (B[e.mode] = {
  ...B[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((n) => {
  B[n] || (B[n] = {}), B[n][e.mode] = e.fromMode[n];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((n) => {
  if (e.ranges[n] === void 0 && (e.ranges[n] = [0, 1]), !e.interpolate[n])
    throw new Error(`Missing interpolator for: ${n}`);
  typeof e.interpolate[n] == "function" && (e.interpolate[n] = {
    use: e.interpolate[n]
  }), e.interpolate[n].fixup || (e.interpolate[n].fixup = ba);
}), ji[e.mode] = e, (e.parse || []).forEach((n) => {
  ga(n, e.mode);
}), X(e.mode)), zt = (e) => ji[e], ga = (e, n) => {
  if (typeof e == "string") {
    if (!n)
      throw new Error("'mode' required when 'parser' is a string");
    Yi[e] = n;
  } else typeof e == "function" && gt.indexOf(e) < 0 && gt.push(e);
}, wn = /[^\x00-\x7F]|[a-zA-Z_]/, ma = /[^\x00-\x7F]|[-\w]/, h = {
  Function: "function",
  Ident: "ident",
  Number: "number",
  Percentage: "percentage",
  ParenClose: ")",
  None: "none",
  Hue: "hue",
  Alpha: "alpha"
};
let v = 0;
function at(e) {
  let n = e[v], t = e[v + 1];
  return n === "-" || n === "+" ? /\d/.test(t) || t === "." && /\d/.test(e[v + 2]) : n === "." ? /\d/.test(t) : /\d/.test(n);
}
function kn(e) {
  if (v >= e.length)
    return !1;
  let n = e[v];
  if (wn.test(n))
    return !0;
  if (n === "-") {
    if (e.length - v < 2)
      return !1;
    let t = e[v + 1];
    return !!(t === "-" || wn.test(t));
  }
  return !1;
}
const va = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function Ze(e) {
  let n = "";
  if ((e[v] === "-" || e[v] === "+") && (n += e[v++]), n += st(e), e[v] === "." && /\d/.test(e[v + 1]) && (n += e[v++] + st(e)), (e[v] === "e" || e[v] === "E") && ((e[v + 1] === "-" || e[v + 1] === "+") && /\d/.test(e[v + 2]) ? n += e[v++] + e[v++] + st(e) : /\d/.test(e[v + 1]) && (n += e[v++] + st(e))), kn(e)) {
    let t = mt(e);
    return t === "deg" || t === "rad" || t === "turn" || t === "grad" ? { type: h.Hue, value: n * va[t] } : void 0;
  }
  return e[v] === "%" ? (v++, { type: h.Percentage, value: +n }) : { type: h.Number, value: +n };
}
function st(e) {
  let n = "";
  for (; /\d/.test(e[v]); )
    n += e[v++];
  return n;
}
function mt(e) {
  let n = "";
  for (; v < e.length && ma.test(e[v]); )
    n += e[v++];
  return n;
}
function xa(e) {
  let n = mt(e);
  return e[v] === "(" ? (v++, { type: h.Function, value: n }) : n === "none" ? { type: h.None, value: void 0 } : { type: h.Ident, value: n };
}
function ya(e = "") {
  let n = e.trim(), t = [], i;
  for (v = 0; v < n.length; ) {
    if (i = n[v++], i === `
` || i === "	" || i === " ") {
      for (; v < n.length && (n[v] === `
` || n[v] === "	" || n[v] === " "); )
        v++;
      continue;
    }
    if (i === ",")
      return;
    if (i === ")") {
      t.push({ type: h.ParenClose });
      continue;
    }
    if (i === "+") {
      if (v--, at(n)) {
        t.push(Ze(n));
        continue;
      }
      return;
    }
    if (i === "-") {
      if (v--, at(n)) {
        t.push(Ze(n));
        continue;
      }
      if (kn(n)) {
        t.push({ type: h.Ident, value: mt(n) });
        continue;
      }
      return;
    }
    if (i === ".") {
      if (v--, at(n)) {
        t.push(Ze(n));
        continue;
      }
      return;
    }
    if (i === "/") {
      for (; v < n.length && (n[v] === `
` || n[v] === "	" || n[v] === " "); )
        v++;
      let r;
      if (at(n) && (r = Ze(n), r.type !== h.Hue)) {
        t.push({ type: h.Alpha, value: r });
        continue;
      }
      if (kn(n) && mt(n) === "none") {
        t.push({
          type: h.Alpha,
          value: { type: h.None, value: void 0 }
        });
        continue;
      }
      return;
    }
    if (/\d/.test(i)) {
      v--, t.push(Ze(n));
      continue;
    }
    if (wn.test(i)) {
      v--, t.push(xa(n));
      continue;
    }
    return;
  }
  return t;
}
function Ma(e) {
  e._i = 0;
  let n = e[e._i++];
  if (!n || n.type !== h.Function || n.value !== "color" || (n = e[e._i++], n.type !== h.Ident))
    return;
  const t = Yi[n.value];
  if (!t)
    return;
  const i = { mode: t }, r = Zi(e, !1);
  if (!r)
    return;
  const a = zt(t).channels;
  for (let s = 0, c, p; s < a.length; s++)
    c = r[s], p = a[s], c.type !== h.None && (i[p] = c.type === h.Number ? c.value : c.value / 100, p === "alpha" && (i[p] = Math.max(0, Math.min(1, i[p]))));
  return i;
}
function Zi(e, n) {
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
function wa(e, n) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== h.Function)
    return;
  let i = Zi(e, n);
  if (i)
    return i.unshift(t.value), i;
}
const Bi = (e) => {
  if (typeof e != "string")
    return;
  const n = ya(e), t = n ? wa(n, !0) : void 0;
  let i, r = 0, a = gt.length;
  for (; r < a; )
    if ((i = gt[r++](e, t)) !== void 0)
      return i;
  return n ? Ma(n) : void 0;
};
function ka(e, n) {
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
const $a = (e) => e === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0, za = (e, n, t) => e + t * (n - e), Aa = (e) => {
  let n = [];
  for (let t = 0; t < e.length - 1; t++) {
    let i = e[t], r = e[t + 1];
    i === void 0 && r === void 0 ? n.push(void 0) : i !== void 0 && r !== void 0 ? n.push([i, r]) : n.push(i !== void 0 ? [i, i] : [r, r]);
  }
  return n;
}, _a = (e) => (n) => {
  let t = Aa(n);
  return (i) => {
    let r = i * t.length, a = i >= 1 ? t.length - 1 : Math.max(Math.floor(r), 0), s = t[a];
    return s === void 0 ? void 0 : e(s[0], s[1], r - a);
  };
}, f = _a(za), S = (e) => {
  let n = !1, t = e.map((i) => i !== void 0 ? (n = !0, i) : 1);
  return n ? t : e;
}, He = {
  mode: "rgb",
  channels: ["r", "g", "b", "alpha"],
  parse: [
    ka,
    da,
    fa,
    la,
    $a,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: f,
    g: f,
    b: f,
    alpha: { use: f, fixup: S }
  },
  gamut: !0,
  white: { r: 1, g: 1, b: 1 },
  black: { r: 0, g: 0, b: 0 }
}, Bt = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), li = (e) => {
  let n = Bt(e.r), t = Bt(e.g), i = Bt(e.b), r = {
    mode: "xyz65",
    x: 0.5766690429101305 * n + 0.1855582379065463 * t + 0.1882286462349947 * i,
    y: 0.297344975250536 * n + 0.6273635662554661 * t + 0.0752914584939979 * i,
    z: 0.0270313613864123 * n + 0.0706888525358272 * t + 0.9913375368376386 * i
  };
  return e.alpha !== void 0 && (r.alpha = e.alpha), r;
}, Vt = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), ci = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = {
    mode: "a98",
    r: Vt(
      e * 2.0415879038107465 - n * 0.5650069742788597 - 0.3447313507783297 * t
    ),
    g: Vt(
      e * -0.9692436362808798 + n * 1.8759675015077206 + 0.0415550574071756 * t
    ),
    b: Vt(
      e * 0.0134442806320312 - n * 0.1183623922310184 + 1.0151749943912058 * t
    )
  };
  return i !== void 0 && (r.alpha = i), r;
}, Gt = (e = 0) => {
  const n = Math.abs(e);
  return n <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((n + 0.055) / 1.055, 2.4);
}, Ne = ({ r: e, g: n, b: t, alpha: i }) => {
  let r = {
    mode: "lrgb",
    r: Gt(e),
    g: Gt(n),
    b: Gt(t)
  };
  return i !== void 0 && (r.alpha = i), r;
}, Me = (e) => {
  let { r: n, g: t, b: i, alpha: r } = Ne(e), a = {
    mode: "xyz65",
    x: 0.4123907992659593 * n + 0.357584339383878 * t + 0.1804807884018343 * i,
    y: 0.2126390058715102 * n + 0.715168678767756 * t + 0.0721923153607337 * i,
    z: 0.0193308187155918 * n + 0.119194779794626 * t + 0.9505321522496607 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, Wt = (e = 0) => {
  const n = Math.abs(e);
  return n > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(n, 1 / 2.4) - 0.055) : e * 12.92;
}, Ie = ({ r: e, g: n, b: t, alpha: i }, r = "rgb") => {
  let a = {
    mode: r,
    r: Wt(e),
    g: Wt(n),
    b: Wt(t)
  };
  return i !== void 0 && (a.alpha = i), a;
}, we = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Ie({
    r: e * 3.2409699419045226 - n * 1.537383177570094 - 0.4986107602930034 * t,
    g: e * -0.9692436362808796 + n * 1.8759675015077204 + 0.0415550574071756 * t,
    b: e * 0.0556300796969936 - n * 0.2039769588889765 + 1.0569715142428784 * t
  });
  return i !== void 0 && (r.alpha = i), r;
}, Ca = {
  ...He,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => ci(Me(e)),
    xyz65: ci
  },
  toMode: {
    rgb: (e) => we(li(e)),
    xyz65: li
  }
}, N = (e) => (e = e % 360) < 0 ? e + 360 : e, La = (e, n) => e.map((t, i, r) => {
  if (t === void 0)
    return t;
  let a = N(t);
  return i === 0 || e[i - 1] === void 0 ? a : n(a - N(r[i - 1]));
}).reduce((t, i) => !t.length || i === void 0 || t[t.length - 1] === void 0 ? (t.push(i), t) : (t.push(i + t[t.length - 1]), t), []), re = (e) => La(e, (n) => Math.abs(n) <= 180 ? n : n - 360 * Math.sign(n)), P = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0], Ta = Math.PI / 180, Sa = 180 / Math.PI;
let di = P[3] * P[4], pi = P[1] * P[4], hi = P[1] * P[2] - P[0] * P[3];
const Ea = ({ r: e, g: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = (hi * t + e * di - n * pi) / (hi + di - pi), a = t - r, s = (P[4] * (n - r) - P[2] * a) / P[3], c = {
    mode: "cubehelix",
    l: r,
    s: r === 0 || r === 1 ? void 0 : Math.sqrt(a * a + s * s) / (P[4] * r * (1 - r))
  };
  return c.s && (c.h = Math.atan2(s, a) * Sa - 120), i !== void 0 && (c.alpha = i), c;
}, Pa = ({ h: e, s: n, l: t, alpha: i }) => {
  let r = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * Ta, t === void 0 && (t = 0);
  let a = n === void 0 ? 0 : n * t * (1 - t), s = Math.cos(e), c = Math.sin(e);
  return r.r = t + a * (P[0] * s + P[1] * c), r.g = t + a * (P[2] * s + P[3] * c), r.b = t + a * (P[4] * s + P[5] * c), i !== void 0 && (r.alpha = i), r;
}, At = (e, n) => {
  if (e.h === void 0 || n.h === void 0 || !e.s || !n.s)
    return 0;
  let t = N(e.h), i = N(n.h), r = Math.sin((i - t + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * n.s) * r;
}, Ha = (e, n) => {
  if (e.h === void 0 || n.h === void 0)
    return 0;
  let t = N(e.h), i = N(n.h);
  return Math.abs(i - t) > 180 ? t - (i - 360 * Math.sign(i - t)) : i - t;
}, _t = (e, n) => {
  if (e.h === void 0 || n.h === void 0 || !e.c || !n.c)
    return 0;
  let t = N(e.h), i = N(n.h), r = Math.sin((i - t + 360) / 2 * Math.PI / 180);
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
}, Na = {
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
    rgb: Ea
  },
  toMode: {
    rgb: Pa
  },
  interpolate: {
    h: {
      use: f,
      fixup: re
    },
    s: f,
    l: f,
    alpha: {
      use: f,
      fixup: S
    }
  },
  difference: {
    h: At
  },
  average: {
    h: ae
  }
}, ue = ({ l: e, a: n, b: t, alpha: i }, r = "lch") => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let a = Math.sqrt(n * n + t * t), s = { mode: r, l: e, c: a };
  return a && (s.h = N(Math.atan2(t, n) * 180 / Math.PI)), i !== void 0 && (s.alpha = i), s;
}, fe = ({ l: e, c: n, h: t, alpha: i }, r = "lab") => {
  t === void 0 && (t = 0);
  let a = {
    mode: r,
    l: e,
    a: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    b: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return i !== void 0 && (a.alpha = i), a;
}, Vi = Math.pow(29, 3) / Math.pow(3, 3), Gi = Math.pow(6, 3) / Math.pow(29, 3), L = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: (1 - 0.3457 - 0.3585) / 0.3585
}, Ae = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: (1 - 0.3127 - 0.329) / 0.329
};
let Jt = (e) => Math.pow(e, 3) > Gi ? Math.pow(e, 3) : (116 * e - 16) / Vi;
const Wi = ({ l: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = (e + 16) / 116, a = n / 500 + r, s = r - t / 200, c = {
    mode: "xyz65",
    x: Jt(a) * Ae.X,
    y: Jt(r) * Ae.Y,
    z: Jt(s) * Ae.Z
  };
  return i !== void 0 && (c.alpha = i), c;
}, Ct = (e) => we(Wi(e)), Ut = (e) => e > Gi ? Math.cbrt(e) : (Vi * e + 16) / 116, Ji = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Ut(e / Ae.X), a = Ut(n / Ae.Y), s = Ut(t / Ae.Z), c = {
    mode: "lab65",
    l: 116 * a - 16,
    a: 500 * (r - a),
    b: 200 * (a - s)
  };
  return i !== void 0 && (c.alpha = i), c;
}, Lt = (e) => {
  let n = Ji(Me(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, vt = 1, Ui = 1, Ke = 26 / 180 * Math.PI, xt = Math.cos(Ke), yt = Math.sin(Ke), Ki = 100 / Math.log(139 / 100), $n = ({ l: e, c: n, h: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = {
    mode: "lab65",
    l: (Math.exp(e * vt / Ki) - 1) / 39e-4
  }, a = (Math.exp(0.0435 * n * Ui * vt) - 1) / 0.075, s = a * Math.cos(t / 180 * Math.PI - Ke), c = a * Math.sin(t / 180 * Math.PI - Ke);
  return r.a = s * xt - c / 0.83 * yt, r.b = s * yt + c / 0.83 * xt, i !== void 0 && (r.alpha = i), r;
}, zn = ({ l: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = n * xt + t * yt, a = 0.83 * (t * xt - n * yt), s = Math.sqrt(r * r + a * a), c = {
    mode: "dlch",
    l: Ki / vt * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * s) / (0.0435 * Ui * vt)
  };
  return c.c && (c.h = N((Math.atan2(a, r) + Ke) / Math.PI * 180)), i !== void 0 && (c.alpha = i), c;
}, ui = (e) => $n(ue(e, "dlch")), fi = (e) => fe(zn(e), "dlab"), Ia = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: ui,
    rgb: (e) => Ct(ui(e))
  },
  fromMode: {
    lab65: fi,
    rgb: (e) => fi(Lt(e))
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
      fixup: S
    }
  }
}, qa = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: $n,
    dlab: (e) => fe(e, "dlab"),
    rgb: (e) => Ct($n(e))
  },
  fromMode: {
    lab65: zn,
    dlab: (e) => ue(e, "dlch"),
    rgb: (e) => zn(Lt(e))
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
      fixup: re
    },
    alpha: {
      use: f,
      fixup: S
    }
  },
  difference: {
    h: _t
  },
  average: {
    h: ae
  }
};
function Ra({ h: e, s: n, i: t, alpha: i }) {
  e = N(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
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
function Fa({ r: e, g: n, b: t, alpha: i }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.max(e, n, t), a = Math.min(e, n, t), s = {
    mode: "hsi",
    s: e + n + t === 0 ? 0 : 1 - 3 * a / (e + n + t),
    i: (e + n + t) / 3
  };
  return r - a !== 0 && (s.h = (r === e ? (n - t) / (r - a) + (n < t) * 6 : r === n ? (t - e) / (r - a) + 2 : (e - n) / (r - a) + 4) * 60), i !== void 0 && (s.alpha = i), s;
}
const Xa = {
  mode: "hsi",
  toMode: {
    rgb: Ra
  },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: {
    rgb: Fa
  },
  channels: ["h", "s", "i", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: f, fixup: re },
    s: f,
    i: f,
    alpha: { use: f, fixup: S }
  },
  difference: {
    h: At
  },
  average: {
    h: ae
  }
};
function Da({ h: e, s: n, l: t, alpha: i }) {
  e = N(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
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
function Oa({ r: e, g: n, b: t, alpha: i }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.max(e, n, t), a = Math.min(e, n, t), s = {
    mode: "hsl",
    s: r === a ? 0 : (r - a) / (1 - Math.abs(r + a - 1)),
    l: 0.5 * (r + a)
  };
  return r - a !== 0 && (s.h = (r === e ? (n - t) / (r - a) + (n < t) * 6 : r === n ? (t - e) / (r - a) + 2 : (e - n) / (r - a) + 4) * 60), i !== void 0 && (s.alpha = i), s;
}
const ja = (e, n) => {
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
}, Ya = new RegExp(
  `^hsla?\\(\\s*${pa}${Pe}${Ue}${Pe}${Ue}\\s*(?:,\\s*${Zn}\\s*)?\\)$`
), Za = (e) => {
  let n = e.match(Ya);
  if (!n) return;
  let t = { mode: "hsl" };
  return n[3] !== void 0 ? t.h = +n[3] : n[1] !== void 0 && n[2] !== void 0 && (t.h = ja(n[1], n[2])), n[4] !== void 0 && (t.s = Math.min(Math.max(0, n[4] / 100), 1)), n[5] !== void 0 && (t.l = Math.min(Math.max(0, n[5] / 100), 1)), n[6] !== void 0 ? t.alpha = Math.max(0, Math.min(1, n[6] / 100)) : n[7] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[7]))), t;
};
function Ba(e, n) {
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
const Qi = {
  mode: "hsl",
  toMode: {
    rgb: Da
  },
  fromMode: {
    rgb: Oa
  },
  channels: ["h", "s", "l", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Ba, Za],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: f, fixup: re },
    s: f,
    l: f,
    alpha: { use: f, fixup: S }
  },
  difference: {
    h: At
  },
  average: {
    h: ae
  }
};
function er({ h: e, s: n, v: t, alpha: i }) {
  e = N(e !== void 0 ? e : 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
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
function tr({ r: e, g: n, b: t, alpha: i }) {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.max(e, n, t), a = Math.min(e, n, t), s = {
    mode: "hsv",
    s: r === 0 ? 0 : 1 - a / r,
    v: r
  };
  return r - a !== 0 && (s.h = (r === e ? (n - t) / (r - a) + (n < t) * 6 : r === n ? (t - e) / (r - a) + 2 : (e - n) / (r - a) + 4) * 60), i !== void 0 && (s.alpha = i), s;
}
const nr = {
  mode: "hsv",
  toMode: {
    rgb: er
  },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: {
    rgb: tr
  },
  channels: ["h", "s", "v", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: f, fixup: re },
    s: f,
    v: f,
    alpha: { use: f, fixup: S }
  },
  difference: {
    h: At
  },
  average: {
    h: ae
  }
};
function Va({ h: e, w: n, b: t, alpha: i }) {
  if (n === void 0 && (n = 0), t === void 0 && (t = 0), n + t > 1) {
    let r = n + t;
    n /= r, t /= r;
  }
  return er({
    h: e,
    s: t === 1 ? 1 : 1 - n / (1 - t),
    v: 1 - t,
    alpha: i
  });
}
function Ga(e) {
  let n = tr(e);
  if (n === void 0) return;
  let t = n.s !== void 0 ? n.s : 0, i = n.v !== void 0 ? n.v : 0, r = {
    mode: "hwb",
    w: (1 - t) * i,
    b: 1 - i
  };
  return n.h !== void 0 && (r.h = n.h), n.alpha !== void 0 && (r.alpha = n.alpha), r;
}
function Wa(e, n) {
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
const Ja = {
  mode: "hwb",
  toMode: {
    rgb: Va
  },
  fromMode: {
    rgb: Ga
  },
  channels: ["h", "w", "b", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Wa],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: f, fixup: re },
    w: f,
    b: f,
    alpha: { use: f, fixup: S }
  },
  difference: {
    h: Ha
  },
  average: {
    h: ae
  }
}, ir = 203, Tt = 0.1593017578125, rr = 78.84375, St = 0.8359375, Et = 18.8515625, Pt = 18.6875;
function Kt(e) {
  if (e < 0) return 0;
  const n = Math.pow(e, 1 / rr);
  return 1e4 * Math.pow(Math.max(0, n - St) / (Et - Pt * n), 1 / Tt);
}
function Qt(e) {
  if (e < 0) return 0;
  const n = Math.pow(e / 1e4, Tt);
  return Math.pow((St + Et * n) / (1 + Pt * n), rr);
}
const en = (e) => Math.max(e / ir, 0), bi = ({ i: e, t: n, p: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const r = Kt(
    e + 0.008609037037932761 * n + 0.11102962500302593 * t
  ), a = Kt(
    e - 0.00860903703793275 * n - 0.11102962500302599 * t
  ), s = Kt(
    e + 0.5600313357106791 * n - 0.32062717498731885 * t
  ), c = {
    mode: "xyz65",
    x: en(
      2.070152218389422 * r - 1.3263473389671556 * a + 0.2066510476294051 * s
    ),
    y: en(
      0.3647385209748074 * r + 0.680566024947227 * a - 0.0453045459220346 * s
    ),
    z: en(
      -0.049747207535812 * r - 0.0492609666966138 * a + 1.1880659249923042 * s
    )
  };
  return i !== void 0 && (c.alpha = i), c;
}, tn = (e = 0) => Math.max(e * ir, 0), gi = ({ x: e, y: n, z: t, alpha: i }) => {
  const r = tn(e), a = tn(n), s = tn(t), c = Qt(
    0.3592832590121217 * r + 0.6976051147779502 * a - 0.0358915932320289 * s
  ), p = Qt(
    -0.1920808463704995 * r + 1.1004767970374323 * a + 0.0753748658519118 * s
  ), u = Qt(
    0.0070797844607477 * r + 0.0748396662186366 * a + 0.8433265453898765 * s
  ), b = 0.5 * c + 0.5 * p, x = 1.61376953125 * c - 3.323486328125 * p + 1.709716796875 * u, m = 4.378173828125 * c - 4.24560546875 * p - 0.132568359375 * u, M = { mode: "itp", i: b, t: x, p: m };
  return i !== void 0 && (M.alpha = i), M;
}, Ua = {
  mode: "itp",
  channels: ["i", "t", "p", "alpha"],
  parse: ["--ictcp"],
  serialize: "--ictcp",
  toMode: {
    xyz65: bi,
    rgb: (e) => we(bi(e))
  },
  fromMode: {
    xyz65: gi,
    rgb: (e) => gi(Me(e))
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
    alpha: { use: f, fixup: S }
  }
}, Ka = 134.03437499999998, Qa = 16295499532821565e-27, nn = (e) => {
  if (e < 0) return 0;
  let n = Math.pow(e / 1e4, Tt);
  return Math.pow((St + Et * n) / (1 + Pt * n), Ka);
}, rn = (e = 0) => Math.max(e * 203, 0), ar = ({ x: e, y: n, z: t, alpha: i }) => {
  e = rn(e), n = rn(n), t = rn(t);
  let r = 1.15 * e - 0.15 * t, a = 0.66 * n + 0.34 * e, s = nn(0.41478972 * r + 0.579999 * a + 0.014648 * t), c = nn(-0.20151 * r + 1.120649 * a + 0.0531008 * t), p = nn(-0.0166008 * r + 0.2648 * a + 0.6684799 * t), u = (s + c) / 2, b = {
    mode: "jab",
    j: 0.44 * u / (1 - 0.56 * u) - Qa,
    a: 3.524 * s - 4.066708 * c + 0.542708 * p,
    b: 0.199076 * s + 1.096799 * c - 1.295875 * p
  };
  return i !== void 0 && (b.alpha = i), b;
}, es = 134.03437499999998, mi = 16295499532821565e-27, an = (e) => {
  if (e < 0) return 0;
  let n = Math.pow(e, 1 / es);
  return 1e4 * Math.pow((St - n) / (Pt * n - Et), 1 / Tt);
}, sn = (e) => e / 203, sr = ({ j: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = (e + mi) / (0.44 + 0.56 * (e + mi)), a = an(r + 0.13860504 * n + 0.058047316 * t), s = an(r - 0.13860504 * n - 0.058047316 * t), c = an(r - 0.096019242 * n - 0.8118919 * t), p = {
    mode: "xyz65",
    x: sn(
      1.661373024652174 * a - 0.914523081304348 * s + 0.23136208173913045 * c
    ),
    y: sn(
      -0.3250758611844533 * a + 1.571847026732543 * s - 0.21825383453227928 * c
    ),
    z: sn(-0.090982811 * a - 0.31272829 * s + 1.5227666 * c)
  };
  return i !== void 0 && (p.alpha = i), p;
}, or = (e) => {
  let n = ar(Me(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, lr = (e) => we(sr(e)), ts = {
  mode: "jab",
  channels: ["j", "a", "b", "alpha"],
  parse: ["--jzazbz"],
  serialize: "--jzazbz",
  fromMode: {
    rgb: or,
    xyz65: ar
  },
  toMode: {
    rgb: lr,
    xyz65: sr
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
    alpha: { use: f, fixup: S }
  }
}, vi = ({ j: e, a: n, b: t, alpha: i }) => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.sqrt(n * n + t * t), a = {
    mode: "jch",
    j: e,
    c: r
  };
  return r && (a.h = N(Math.atan2(t, n) * 180 / Math.PI)), i !== void 0 && (a.alpha = i), a;
}, xi = ({ j: e, c: n, h: t, alpha: i }) => {
  t === void 0 && (t = 0);
  let r = {
    mode: "jab",
    j: e,
    a: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    b: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return i !== void 0 && (r.alpha = i), r;
}, ns = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: xi,
    rgb: (e) => lr(xi(e))
  },
  fromMode: {
    rgb: (e) => vi(or(e)),
    jab: vi
  },
  channels: ["j", "c", "h", "alpha"],
  ranges: {
    j: [0, 0.221],
    c: [0, 0.19],
    h: [0, 360]
  },
  interpolate: {
    h: { use: f, fixup: re },
    c: f,
    j: f,
    alpha: { use: f, fixup: S }
  },
  difference: {
    h: _t
  },
  average: {
    h: ae
  }
}, Ht = Math.pow(29, 3) / Math.pow(3, 3), Bn = Math.pow(6, 3) / Math.pow(29, 3);
let on = (e) => Math.pow(e, 3) > Bn ? Math.pow(e, 3) : (116 * e - 16) / Ht;
const Vn = ({ l: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = (e + 16) / 116, a = n / 500 + r, s = r - t / 200, c = {
    mode: "xyz50",
    x: on(a) * L.X,
    y: on(r) * L.Y,
    z: on(s) * L.Z
  };
  return i !== void 0 && (c.alpha = i), c;
}, nt = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Ie({
    r: e * 3.1341359569958707 - n * 1.6173863321612538 - 0.4906619460083532 * t,
    g: e * -0.978795502912089 + n * 1.916254567259524 + 0.03344273116131949 * t,
    b: e * 0.07195537988411677 - n * 0.2289768264158322 + 1.405386058324125 * t
  });
  return i !== void 0 && (r.alpha = i), r;
}, cr = (e) => nt(Vn(e)), it = (e) => {
  let { r: n, g: t, b: i, alpha: r } = Ne(e), a = {
    mode: "xyz50",
    x: 0.436065742824811 * n + 0.3851514688337912 * t + 0.14307845442264197 * i,
    y: 0.22249319175623702 * n + 0.7168870538238823 * t + 0.06061979053616537 * i,
    z: 0.013923904500943465 * n + 0.09708128566574634 * t + 0.7140993584005155 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, ln = (e) => e > Bn ? Math.cbrt(e) : (Ht * e + 16) / 116, Gn = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = ln(e / L.X), a = ln(n / L.Y), s = ln(t / L.Z), c = {
    mode: "lab",
    l: 116 * a - 16,
    a: 500 * (r - a),
    b: 200 * (a - s)
  };
  return i !== void 0 && (c.alpha = i), c;
}, dr = (e) => {
  let n = Gn(it(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
};
function is(e, n) {
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
const Wn = {
  mode: "lab",
  toMode: {
    xyz50: Vn,
    rgb: cr
  },
  fromMode: {
    xyz50: Gn,
    rgb: dr
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  },
  parse: [is],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: f,
    a: f,
    b: f,
    alpha: { use: f, fixup: S }
  }
}, rs = {
  ...Wn,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: Wi,
    rgb: Ct
  },
  fromMode: {
    xyz65: Ji,
    rgb: Lt
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function as(e, n) {
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
const Jn = {
  mode: "lch",
  toMode: {
    lab: fe,
    rgb: (e) => cr(fe(e))
  },
  fromMode: {
    rgb: (e) => ue(dr(e)),
    lab: ue
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  },
  parse: [as],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: f, fixup: re },
    c: f,
    l: f,
    alpha: { use: f, fixup: S }
  },
  difference: {
    h: _t
  },
  average: {
    h: ae
  }
}, ss = {
  ...Jn,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => fe(e, "lab65"),
    rgb: (e) => Ct(fe(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => ue(Lt(e), "lch65"),
    lab65: (e) => ue(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, pr = ({ l: e, u: n, v: t, alpha: i }) => {
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.sqrt(n * n + t * t), a = {
    mode: "lchuv",
    l: e,
    c: r
  };
  return r && (a.h = N(Math.atan2(t, n) * 180 / Math.PI)), i !== void 0 && (a.alpha = i), a;
}, hr = ({ l: e, c: n, h: t, alpha: i }) => {
  t === void 0 && (t = 0);
  let r = {
    mode: "luv",
    l: e,
    u: n ? n * Math.cos(t / 180 * Math.PI) : 0,
    v: n ? n * Math.sin(t / 180 * Math.PI) : 0
  };
  return i !== void 0 && (r.alpha = i), r;
}, ur = (e, n, t) => 4 * e / (e + 15 * n + 3 * t), fr = (e, n, t) => 9 * n / (e + 15 * n + 3 * t), os = ur(L.X, L.Y, L.Z), ls = fr(L.X, L.Y, L.Z), cs = (e) => e <= Bn ? Ht * e : 116 * Math.cbrt(e) - 16, An = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = cs(n / L.Y), a = ur(e, n, t), s = fr(e, n, t);
  !isFinite(a) || !isFinite(s) ? r = a = s = 0 : (a = 13 * r * (a - os), s = 13 * r * (s - ls));
  let c = {
    mode: "luv",
    l: r,
    u: a,
    v: s
  };
  return i !== void 0 && (c.alpha = i), c;
}, ds = (e, n, t) => 4 * e / (e + 15 * n + 3 * t), ps = (e, n, t) => 9 * n / (e + 15 * n + 3 * t), hs = ds(L.X, L.Y, L.Z), us = ps(L.X, L.Y, L.Z), _n = ({ l: e, u: n, v: t, alpha: i }) => {
  if (e === void 0 && (e = 0), e === 0)
    return { mode: "xyz50", x: 0, y: 0, z: 0 };
  n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = n / (13 * e) + hs, a = t / (13 * e) + us, s = L.Y * (e <= 8 ? e / Ht : Math.pow((e + 16) / 116, 3)), c = s * (9 * r) / (4 * a), p = s * (12 - 3 * r - 20 * a) / (4 * a), u = { mode: "xyz50", x: c, y: s, z: p };
  return i !== void 0 && (u.alpha = i), u;
}, fs = (e) => pr(An(it(e))), bs = (e) => nt(_n(hr(e))), gs = {
  mode: "lchuv",
  toMode: {
    luv: hr,
    rgb: bs
  },
  fromMode: {
    rgb: fs,
    luv: pr
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
    h: { use: f, fixup: re },
    c: f,
    l: f,
    alpha: { use: f, fixup: S }
  },
  difference: {
    h: _t
  },
  average: {
    h: ae
  }
}, ms = {
  ...He,
  mode: "lrgb",
  toMode: {
    rgb: Ie
  },
  fromMode: {
    rgb: Ne
  },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, vs = {
  mode: "luv",
  toMode: {
    xyz50: _n,
    rgb: (e) => nt(_n(e))
  },
  fromMode: {
    xyz50: An,
    rgb: (e) => An(it(e))
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
    alpha: { use: f, fixup: S }
  }
}, br = ({ r: e, g: n, b: t, alpha: i }) => {
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
}, Nt = (e) => {
  let n = br(Ne(e));
  return e.r === e.b && e.b === e.g && (n.a = n.b = 0), n;
}, rt = ({ l: e, a: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Math.pow(e + 0.3963377773761749 * n + 0.2158037573099136 * t, 3), a = Math.pow(e - 0.1055613458156586 * n - 0.0638541728258133 * t, 3), s = Math.pow(e - 0.0894841775298119 * n - 1.2914855480194092 * t, 3), c = {
    mode: "lrgb",
    r: 4.076741636075957 * r - 3.3077115392580616 * a + 0.2309699031821044 * s,
    g: -1.2684379732850317 * r + 2.6097573492876887 * a - 0.3413193760026573 * s,
    b: -0.0041960761386756 * r - 0.7034186179359362 * a + 1.7076146940746117 * s
  };
  return i !== void 0 && (c.alpha = i), c;
}, It = (e) => Ie(rt(e));
function Cn(e) {
  const i = 1.170873786407767;
  return 0.5 * (i * e - 0.206 + Math.sqrt((i * e - 0.206) * (i * e - 0.206) + 4 * 0.03 * i * e));
}
function Mt(e) {
  return (e * e + 0.206 * e) / (1.170873786407767 * (e + 0.03));
}
function xs(e, n) {
  let t, i, r, a, s, c, p, u;
  -1.88170328 * e - 0.80936493 * n > 1 ? (t = 1.19086277, i = 1.76576728, r = 0.59662641, a = 0.75515197, s = 0.56771245, c = 4.0767416621, p = -3.3077115913, u = 0.2309699292) : 1.81444104 * e - 1.19445276 * n > 1 ? (t = 0.73956515, i = -0.45954404, r = 0.08285427, a = 0.1254107, s = 0.14503204, c = -1.2684380046, p = 2.6097574011, u = -0.3413193965) : (t = 1.35733652, i = -915799e-8, r = -1.1513021, a = -0.50559606, s = 692167e-8, c = -0.0041960863, p = -0.7034186147, u = 1.707614701);
  let b = t + i * e + r * n + a * e * e + s * e * n, x = 0.3963377774 * e + 0.2158037573 * n, m = -0.1055613458 * e - 0.0638541728 * n, M = -0.0894841775 * e - 1.291485548 * n;
  {
    let A = 1 + b * x, z = 1 + b * m, _ = 1 + b * M, T = A * A * A, C = z * z * z, se = _ * _ * _, Re = 3 * x * A * A, Fe = 3 * m * z * z, Xe = 3 * M * _ * _, De = 6 * x * x * A, Oe = 6 * m * m * z, je = 6 * M * M * _, ke = c * T + p * C + u * se, be = c * Re + p * Fe + u * Xe, Ye = c * De + p * Oe + u * je;
    b = b - ke * be / (be * be - 0.5 * ke * Ye);
  }
  return b;
}
function Un(e, n) {
  let t = xs(e, n), i = rt({ l: 1, a: t * e, b: t * n }), r = Math.cbrt(1 / Math.max(i.r, i.g, i.b)), a = r * t;
  return [r, a];
}
function ys(e, n, t, i, r, a = null) {
  a || (a = Un(e, n));
  let s;
  if ((t - r) * a[1] - (a[0] - r) * i <= 0)
    s = a[1] * r / (i * a[0] + a[1] * (r - t));
  else {
    s = a[1] * (r - 1) / (i * (a[0] - 1) + a[1] * (r - t));
    {
      let c = t - r, p = i, u = 0.3963377774 * e + 0.2158037573 * n, b = -0.1055613458 * e - 0.0638541728 * n, x = -0.0894841775 * e - 1.291485548 * n, m = c + p * u, M = c + p * b, A = c + p * x;
      {
        let z = r * (1 - s) + s * t, _ = s * i, T = z + _ * u, C = z + _ * b, se = z + _ * x, Re = T * T * T, Fe = C * C * C, Xe = se * se * se, De = 3 * m * T * T, Oe = 3 * M * C * C, je = 3 * A * se * se, ke = 6 * m * m * T, be = 6 * M * M * C, Ye = 6 * A * A * se, ei = 4.0767416621 * Re - 3.3077115913 * Fe + 0.2309699292 * Xe - 1, Ft = 4.0767416621 * De - 3.3077115913 * Oe + 0.2309699292 * je, na = 4.0767416621 * ke - 3.3077115913 * be + 0.2309699292 * Ye, ti = Ft / (Ft * Ft - 0.5 * ei * na), Xt = -ei * ti, ni = -1.2684380046 * Re + 2.6097574011 * Fe - 0.3413193965 * Xe - 1, Dt = -1.2684380046 * De + 2.6097574011 * Oe - 0.3413193965 * je, ia = -1.2684380046 * ke + 2.6097574011 * be - 0.3413193965 * Ye, ii = Dt / (Dt * Dt - 0.5 * ni * ia), Ot = -ni * ii, ri = -0.0041960863 * Re - 0.7034186147 * Fe + 1.707614701 * Xe - 1, jt = -0.0041960863 * De - 0.7034186147 * Oe + 1.707614701 * je, ra = -0.0041960863 * ke - 0.7034186147 * be + 1.707614701 * Ye, ai = jt / (jt * jt - 0.5 * ri * ra), Yt = -ri * ai;
        Xt = ti >= 0 ? Xt : 1e6, Ot = ii >= 0 ? Ot : 1e6, Yt = ai >= 0 ? Yt : 1e6, s += Math.min(Xt, Math.min(Ot, Yt));
      }
    }
  }
  return s;
}
function Kn(e, n, t = null) {
  t || (t = Un(e, n));
  let i = t[0], r = t[1];
  return [r / i, r / (1 - i)];
}
function gr(e, n, t) {
  let i = Un(n, t), r = ys(n, t, e, 1, e, i), a = Kn(n, t, i), s = 0.11516993 + 1 / (7.4477897 + 4.1590124 * t + n * (-2.19557347 + 1.75198401 * t + n * (-2.13704948 - 10.02301043 * t + n * (-4.24894561 + 5.38770819 * t + 4.69891013 * n)))), c = 0.11239642 + 1 / (1.6132032 - 0.68124379 * t + n * (0.40370612 + 0.90148123 * t + n * (-0.27087943 + 0.6122399 * t + n * (299215e-8 - 0.45399568 * t - 0.14661872 * n)))), p = r / Math.min(e * a[0], (1 - e) * a[1]), u = e * s, b = (1 - e) * c, x = 0.9 * p * Math.sqrt(
    Math.sqrt(
      1 / (1 / (u * u * u * u) + 1 / (b * b * b * b))
    )
  );
  return u = e * 0.4, b = (1 - e) * 0.8, [Math.sqrt(1 / (1 / (u * u) + 1 / (b * b))), x, r];
}
function yi(e) {
  const n = e.l !== void 0 ? e.l : 0, t = e.a !== void 0 ? e.a : 0, i = e.b !== void 0 ? e.b : 0, r = { mode: "okhsl", l: Cn(n) };
  e.alpha !== void 0 && (r.alpha = e.alpha);
  let a = Math.sqrt(t * t + i * i);
  if (!a)
    return r.s = 0, r;
  let [s, c, p] = gr(n, t / a, i / a), u;
  if (a < c) {
    let b = 0, x = 0.8 * s, m = 1 - x / c;
    u = (a - b) / (x + m * (a - b)) * 0.8;
  } else {
    let b = c, x = 0.2 * c * c * 1.25 * 1.25 / s, m = 1 - x / (p - c);
    u = 0.8 + 0.2 * ((a - b) / (x + m * (a - b)));
  }
  return u && (r.s = u, r.h = N(Math.atan2(i, t) * 180 / Math.PI)), r;
}
function Mi(e) {
  let n = e.h !== void 0 ? e.h : 0, t = e.s !== void 0 ? e.s : 0, i = e.l !== void 0 ? e.l : 0;
  const r = { mode: "oklab", l: Mt(i) };
  if (e.alpha !== void 0 && (r.alpha = e.alpha), !t || i === 1)
    return r.a = r.b = 0, r;
  let a = Math.cos(n / 180 * Math.PI), s = Math.sin(n / 180 * Math.PI), [c, p, u] = gr(r.l, a, s), b, x, m, M;
  t < 0.8 ? (b = 1.25 * t, x = 0, m = 0.8 * c, M = 1 - m / p) : (b = 5 * (t - 0.8), x = p, m = 0.2 * p * p * 1.25 * 1.25 / c, M = 1 - m / (u - p));
  let A = x + b * m / (1 - M * b);
  return r.a = A * a, r.b = A * s, r;
}
const Ms = {
  ...Qi,
  mode: "okhsl",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--okhsl"],
  serialize: "--okhsl",
  fromMode: {
    oklab: yi,
    rgb: (e) => yi(Nt(e))
  },
  toMode: {
    oklab: Mi,
    rgb: (e) => It(Mi(e))
  }
};
function wi(e) {
  let n = e.l !== void 0 ? e.l : 0, t = e.a !== void 0 ? e.a : 0, i = e.b !== void 0 ? e.b : 0, r = Math.sqrt(t * t + i * i), a = r ? t / r : 1, s = r ? i / r : 1, [c, p] = Kn(a, s), u = 0.5, b = 1 - u / c, x = p / (r + n * p), m = x * n, M = x * r, A = Mt(m), z = M * A / m, _ = rt({ l: A, a: a * z, b: s * z }), T = Math.cbrt(
    1 / Math.max(_.r, _.g, _.b, 0)
  );
  n = n / T, r = r / T * Cn(n) / n, n = Cn(n);
  const C = {
    mode: "okhsv",
    s: r ? (u + p) * M / (p * u + p * b * M) : 0,
    v: n ? n / m : 0
  };
  return C.s && (C.h = N(Math.atan2(i, t) * 180 / Math.PI)), e.alpha !== void 0 && (C.alpha = e.alpha), C;
}
function ki(e) {
  const n = { mode: "oklab" };
  e.alpha !== void 0 && (n.alpha = e.alpha);
  const t = e.h !== void 0 ? e.h : 0, i = e.s !== void 0 ? e.s : 0, r = e.v !== void 0 ? e.v : 0, a = Math.cos(t / 180 * Math.PI), s = Math.sin(t / 180 * Math.PI), [c, p] = Kn(a, s), u = 0.5, b = 1 - u / c, x = 1 - i * u / (u + p - p * b * i), m = i * p * u / (u + p - p * b * i), M = Mt(x), A = m * M / x, z = rt({
    l: M,
    a: a * A,
    b: s * A
  }), _ = Math.cbrt(
    1 / Math.max(z.r, z.g, z.b, 0)
  ), T = Mt(r * x), C = m * T / x;
  return n.l = T * _, n.a = C * a * _, n.b = C * s * _, n;
}
const ws = {
  ...nr,
  mode: "okhsv",
  channels: ["h", "s", "v", "alpha"],
  parse: ["--okhsv"],
  serialize: "--okhsv",
  fromMode: {
    oklab: wi,
    rgb: (e) => wi(Nt(e))
  },
  toMode: {
    oklab: ki,
    rgb: (e) => It(ki(e))
  }
};
function ks(e, n) {
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
const $s = {
  ...Wn,
  mode: "oklab",
  toMode: {
    lrgb: rt,
    rgb: It
  },
  fromMode: {
    lrgb: br,
    rgb: Nt
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [ks],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function zs(e, n) {
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
const As = {
  ...Jn,
  mode: "oklch",
  toMode: {
    oklab: (e) => fe(e, "oklab"),
    rgb: (e) => It(fe(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => ue(Nt(e), "oklch"),
    oklab: (e) => ue(e, "oklch")
  },
  parse: [zs],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, $i = (e) => {
  let { r: n, g: t, b: i, alpha: r } = Ne(e), a = {
    mode: "xyz65",
    x: 0.486570948648216 * n + 0.265667693169093 * t + 0.1982172852343625 * i,
    y: 0.2289745640697487 * n + 0.6917385218365062 * t + 0.079286914093745 * i,
    z: 0 * n + 0.0451133818589026 * t + 1.043944368900976 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, zi = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = Ie(
    {
      r: e * 2.4934969119414263 - n * 0.9313836179191242 - 0.402710784450717 * t,
      g: e * -0.8294889695615749 + n * 1.7626640603183465 + 0.0236246858419436 * t,
      b: e * 0.0358458302437845 - n * 0.0761723892680418 + 0.9568845240076871 * t
    },
    "p3"
  );
  return i !== void 0 && (r.alpha = i), r;
}, _s = {
  ...He,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => zi(Me(e)),
    xyz65: zi
  },
  toMode: {
    rgb: (e) => we($i(e)),
    xyz65: $i
  }
}, cn = (e) => {
  let n = Math.abs(e);
  return n >= 1 / 512 ? Math.sign(e) * Math.pow(n, 1 / 1.8) : 16 * e;
}, Ai = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = {
    mode: "prophoto",
    r: cn(
      e * 1.3457868816471585 - n * 0.2555720873797946 - 0.0511018649755453 * t
    ),
    g: cn(
      e * -0.5446307051249019 + n * 1.5082477428451466 + 0.0205274474364214 * t
    ),
    b: cn(e * 0 + n * 0 + 1.2119675456389452 * t)
  };
  return i !== void 0 && (r.alpha = i), r;
}, dn = (e = 0) => {
  let n = Math.abs(e);
  return n >= 16 / 512 ? Math.sign(e) * Math.pow(n, 1.8) : e / 16;
}, _i = (e) => {
  let n = dn(e.r), t = dn(e.g), i = dn(e.b), r = {
    mode: "xyz50",
    x: 0.7977666449006423 * n + 0.1351812974005331 * t + 0.0313477341283922 * i,
    y: 0.2880748288194013 * n + 0.7118352342418731 * t + 899369387256e-16 * i,
    z: 0 * n + 0 * t + 0.8251046025104602 * i
  };
  return e.alpha !== void 0 && (r.alpha = e.alpha), r;
}, Cs = {
  ...He,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: Ai,
    rgb: (e) => Ai(it(e))
  },
  toMode: {
    xyz50: _i,
    rgb: (e) => nt(_i(e))
  }
}, Ci = 1.09929682680944, Ls = 0.018053968510807, pn = (e) => {
  const n = Math.abs(e);
  return n > Ls ? (Math.sign(e) || 1) * (Ci * Math.pow(n, 0.45) - (Ci - 1)) : 4.5 * e;
}, Li = ({ x: e, y: n, z: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  let r = {
    mode: "rec2020",
    r: pn(
      e * 1.7166511879712683 - n * 0.3556707837763925 - 0.2533662813736599 * t
    ),
    g: pn(
      e * -0.6666843518324893 + n * 1.6164812366349395 + 0.0157685458139111 * t
    ),
    b: pn(
      e * 0.0176398574453108 - n * 0.0427706132578085 + 0.9421031212354739 * t
    )
  };
  return i !== void 0 && (r.alpha = i), r;
}, Ti = 1.09929682680944, Ts = 0.018053968510807, hn = (e = 0) => {
  let n = Math.abs(e);
  return n < Ts * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((n + Ti - 1) / Ti, 1 / 0.45);
}, Si = (e) => {
  let n = hn(e.r), t = hn(e.g), i = hn(e.b), r = {
    mode: "xyz65",
    x: 0.6369580483012911 * n + 0.1446169035862083 * t + 0.1688809751641721 * i,
    y: 0.262700212011267 * n + 0.6779980715188708 * t + 0.059301716469862 * i,
    z: 0 * n + 0.0280726930490874 * t + 1.0609850577107909 * i
  };
  return e.alpha !== void 0 && (r.alpha = e.alpha), r;
}, Ss = {
  ...He,
  mode: "rec2020",
  fromMode: {
    xyz65: Li,
    rgb: (e) => Li(Me(e))
  },
  toMode: {
    xyz65: Si,
    rgb: (e) => we(Si(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, ve = 0.0037930732552754493, mr = Math.cbrt(ve), un = (e) => Math.cbrt(e) - mr, Es = (e) => {
  const { r: n, g: t, b: i, alpha: r } = Ne(e), a = un(0.3 * n + 0.622 * t + 0.078 * i + ve), s = un(0.23 * n + 0.692 * t + 0.078 * i + ve), c = un(
    0.2434226892454782 * n + 0.2047674442449682 * t + 0.5518098665095535 * i + ve
  ), p = {
    mode: "xyb",
    x: (a - s) / 2,
    y: (a + s) / 2,
    /* Apply default chroma from luma (subtract Y from B) */
    b: c - (a + s) / 2
  };
  return r !== void 0 && (p.alpha = r), p;
}, fn = (e) => Math.pow(e + mr, 3), Ps = ({ x: e, y: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const r = fn(e + n) - ve, a = fn(n - e) - ve, s = fn(t + n) - ve, c = Ie({
    r: 11.031566904639861 * r - 9.866943908131562 * a - 0.16462299650829934 * s,
    g: -3.2541473810744237 * r + 4.418770377582723 * a - 0.16462299650829934 * s,
    b: -3.6588512867136815 * r + 2.7129230459360922 * a + 1.9459282407775895 * s
  });
  return i !== void 0 && (c.alpha = i), c;
}, Hs = {
  mode: "xyb",
  channels: ["x", "y", "b", "alpha"],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: {
    rgb: Ps
  },
  fromMode: {
    rgb: Es
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
    alpha: { use: f, fixup: S }
  }
}, Ns = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: nt,
    lab: Gn
  },
  fromMode: {
    rgb: it,
    lab: Vn
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
    alpha: { use: f, fixup: S }
  }
}, Is = (e) => {
  let { x: n, y: t, z: i, alpha: r } = e;
  n === void 0 && (n = 0), t === void 0 && (t = 0), i === void 0 && (i = 0);
  let a = {
    mode: "xyz50",
    x: 1.0479298208405488 * n + 0.0229467933410191 * t - 0.0501922295431356 * i,
    y: 0.0296278156881593 * n + 0.990434484573249 * t - 0.0170738250293851 * i,
    z: -0.0092430581525912 * n + 0.0150551448965779 * t + 0.7518742899580008 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, qs = (e) => {
  let { x: n, y: t, z: i, alpha: r } = e;
  n === void 0 && (n = 0), t === void 0 && (t = 0), i === void 0 && (i = 0);
  let a = {
    mode: "xyz65",
    x: 0.9554734527042182 * n - 0.0230985368742614 * t + 0.0632593086610217 * i,
    y: -0.0283697069632081 * n + 1.0099954580058226 * t + 0.021041398966943 * i,
    z: 0.0123140016883199 * n - 0.0205076964334779 * t + 1.3303659366080753 * i
  };
  return r !== void 0 && (a.alpha = r), a;
}, Rs = {
  mode: "xyz65",
  toMode: {
    rgb: we,
    xyz50: Is
  },
  fromMode: {
    rgb: Me,
    xyz50: qs
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
    alpha: { use: f, fixup: S }
  }
}, Fs = ({ r: e, g: n, b: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const r = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * n + 0.11448223 * t,
    i: 0.59597799 * e - 0.2741761 * n - 0.32180189 * t,
    q: 0.21147017 * e - 0.52261711 * n + 0.31114694 * t
  };
  return i !== void 0 && (r.alpha = i), r;
}, Xs = ({ y: e, i: n, q: t, alpha: i }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = 0);
  const r = {
    mode: "rgb",
    r: e + 0.95608445 * n + 0.6208885 * t,
    g: e - 0.27137664 * n - 0.6486059 * t,
    b: e - 1.10561724 * n + 1.70250126 * t
  };
  return i !== void 0 && (r.alpha = i), r;
}, Ds = {
  mode: "yiq",
  toMode: {
    rgb: Xs
  },
  fromMode: {
    rgb: Fs
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
    alpha: { use: f, fixup: S }
  }
}, Os = (e) => Math.max(0, Math.min(1, e || 0)), bn = (e) => Math.round(Os(e) * 255), js = X("rgb"), Ys = (e) => {
  if (e === void 0)
    return;
  let n = bn(e.r), t = bn(e.g), i = bn(e.b);
  return "#" + (1 << 24 | n << 16 | t << 8 | i).toString(16).slice(1);
}, Zs = (e) => Ys(js(e)), vr = X("rgb"), xr = (e) => {
  const n = {
    mode: e.mode,
    r: Math.max(0, Math.min(e.r !== void 0 ? e.r : 0, 1)),
    g: Math.max(0, Math.min(e.g !== void 0 ? e.g : 0, 1)),
    b: Math.max(0, Math.min(e.b !== void 0 ? e.b : 0, 1))
  };
  return e.alpha !== void 0 && (n.alpha = e.alpha), n;
}, Bs = (e) => xr(vr(e)), yr = (e) => e !== void 0 && (e.r === void 0 || e.r >= 0 && e.r <= 1) && (e.g === void 0 || e.g >= 0 && e.g <= 1) && (e.b === void 0 || e.b >= 0 && e.b <= 1);
function Vs(e) {
  return yr(vr(e));
}
function Mr(e = "rgb") {
  const { gamut: n } = zt(e);
  if (!n)
    return (i) => !0;
  const t = X(typeof n == "string" ? n : e);
  return (i) => yr(t(i));
}
function Gs(e = "rgb") {
  const { gamut: n } = zt(e);
  if (!n)
    return (a) => bt(a);
  const t = typeof n == "string" ? n : e, i = X(t), r = Mr(t);
  return (a) => {
    const s = bt(a);
    if (!s)
      return;
    const c = i(s);
    if (r(c))
      return s;
    const p = xr(c);
    return s.mode === p.mode ? p : X(s.mode)(p);
  };
}
function Ws(e, n = "lch", t = "rgb") {
  e = bt(e);
  let i = t === "rgb" ? Vs : Mr(t), r = t === "rgb" ? Bs : Gs(t);
  if (e === void 0 || i(e)) return e;
  let a = X(e.mode);
  e = X(n)(e);
  let s = { ...e, c: 0 };
  if (!i(s))
    return a(r(s));
  let c = 0, p = e.c !== void 0 ? e.c : 0, u = zt(n).ranges.c, b = (u[1] - u[0]) / Math.pow(2, 13), x = s.c;
  for (; p - c > b; )
    s.c = c + (p - c) * 0.5, i(s) ? (x = s.c, c = s.c) : p = s.c;
  return a(
    i(s) ? s : { ...s, c: x }
  );
}
k(Ca);
k(Na);
k(Ia);
k(qa);
k(Xa);
k(Qi);
k(nr);
k(Ja);
k(Ua);
k(ts);
k(ns);
k(Wn);
k(rs);
k(Jn);
k(ss);
k(gs);
k(ms);
k(vs);
k(Ms);
k(ws);
k($s);
const Qn = k(As);
k(_s);
k(Cs);
k(Ss);
k(He);
k(Hs);
k(Ns);
k(Rs);
k(Ds);
const Js = X("rgb");
function Ei(e, n) {
  const t = e.getContext("2d", { willReadFrequently: !0 });
  if (!t) return;
  const { width: i, height: r } = e, a = t.createImageData(i, r), s = a.data;
  for (let c = 0; c < r; c++) {
    const p = 1 - c / (r - 1 || 1);
    for (let u = 0; u < i; u++) {
      const b = u / (i - 1 || 1), x = Js({ mode: "hsv", h: n, s: b, v: p, alpha: 1 }), m = (c * i + u) * 4;
      if (!x) {
        s[m] = s[m + 1] = s[m + 2] = 0, s[m + 3] = 255;
        continue;
      }
      s[m] = Math.round(gn((x.r ?? 0) * 255)), s[m + 1] = Math.round(gn((x.g ?? 0) * 255)), s[m + 2] = Math.round(gn((x.b ?? 0) * 255)), s[m + 3] = 255;
    }
  }
  t.putImageData(a, 0, 0);
}
function gn(e) {
  return Math.min(255, Math.max(0, e));
}
const qe = X("rgb"), qt = X("hsv"), Us = X("hsl"), wr = 2e-3, kr = 4e-3;
function Rt(e) {
  return e.c <= wr;
}
function Ks(e) {
  const n = qt({ mode: "oklch", ...e, alpha: 1 });
  return Math.max(0, (n == null ? void 0 : n.s) ?? 0);
}
function oe(e) {
  return Rt(e) ? !0 : Ks(e) < kr;
}
function wt(e, n) {
  return oe(e) ? { ...e, h: D(n) } : e;
}
function R(e) {
  const n = ye(e.l ?? 0), t = Math.max(0, e.c ?? 0), i = D(e.h ?? 0), r = ye(e.alpha ?? 1), a = Ws({ mode: "oklch", l: n, c: t, h: i, alpha: r }, "rgb"), s = Rt({ c: t });
  return {
    l: a.l ?? n,
    c: s ? 0 : a.c ?? 0,
    h: s ? D(i) : i,
    alpha: a.alpha ?? r
  };
}
function xe(e) {
  const n = Bi(e.trim());
  if (!n) return null;
  const t = Qn(n);
  return (t == null ? void 0 : t.l) == null ? null : R({
    l: t.l,
    c: t.c ?? 0,
    h: t.h ?? 0,
    alpha: t.alpha ?? 1
  });
}
function mn(e) {
  const { l: n, c: t, h: i, alpha: r } = e;
  return r >= 1 ? `oklch(${(n * 100).toFixed(1)}% ${t.toFixed(4)} ${i.toFixed(1)})` : `oklch(${(n * 100).toFixed(1)}% ${t.toFixed(4)} ${i.toFixed(1)} / ${Math.round(r * 100)}%)`;
}
function _e(e) {
  return Zs(qe({ mode: "oklch", ...e })) ?? "#000000";
}
function Qs(e) {
  const { r: n, g: t, b: i } = kt(e);
  return e.alpha < 1 ? `rgba(${n}, ${t}, ${i}, ${e.alpha.toFixed(2)})` : `rgb(${n}, ${t}, ${i})`;
}
function kt(e) {
  const n = qe({ mode: "oklch", ...e, alpha: 1 });
  return n ? {
    r: Math.round((n.r ?? 0) * 255),
    g: Math.round((n.g ?? 0) * 255),
    b: Math.round((n.b ?? 0) * 255)
  } : { r: 0, g: 0, b: 0 };
}
function eo(e) {
  const n = D(Math.max(0, Math.min(1, e)) * 360), t = qe({ mode: "hsv", h: n, s: 1, v: 1, alpha: 1 });
  return t ? {
    r: Math.round((t.r ?? 0) * 255),
    g: Math.round((t.g ?? 0) * 255),
    b: Math.round((t.b ?? 0) * 255)
  } : { r: 255, g: 0, b: 0 };
}
function to(e) {
  const { r: n, g: t, b: i } = kt(e);
  return `linear-gradient(to right, rgba(${n}, ${t}, ${i}, 0), rgb(${n}, ${t}, ${i}))`;
}
function no(e) {
  if (oe(e)) return D(e.h);
  const n = qt({ mode: "oklch", ...e, alpha: 1 });
  return D((n == null ? void 0 : n.h) ?? e.h);
}
function $r(e, n) {
  const t = D(n), i = qt({ mode: "oklch", ...e, alpha: 1 }), r = qe({
    mode: "hsv",
    h: t,
    s: (i == null ? void 0 : i.s) ?? 0,
    v: (i == null ? void 0 : i.v) ?? 1,
    alpha: 1
  }), a = Qn(
    r ?? { mode: "hsv", h: t, s: (i == null ? void 0 : i.s) ?? 0, v: (i == null ? void 0 : i.v) ?? 1 }
  );
  if ((a == null ? void 0 : a.l) != null) {
    const s = a.c ?? 0;
    return wt(
      R({
        l: a.l,
        c: s,
        h: a.h ?? t,
        alpha: e.alpha
      }),
      t
    );
  }
  return R({ ...e, h: t });
}
function Be(e, n) {
  switch (n) {
    case "hex":
      return [{ key: "hex", label: "HEX CODE", value: _e(e).replace("#", "").toUpperCase() }];
    case "rgb": {
      const t = qe({ mode: "oklch", ...e });
      return [
        { key: "r", label: "R", value: String(Math.round((t.r ?? 0) * 255)), min: 0, max: 255 },
        { key: "g", label: "G", value: String(Math.round((t.g ?? 0) * 255)), min: 0, max: 255 },
        { key: "b", label: "B", value: String(Math.round((t.b ?? 0) * 255)), min: 0, max: 255 }
      ];
    }
    case "hsl": {
      const t = Us({ mode: "oklch", ...e });
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
function io(e, n, t) {
  var u, b, x;
  const i = e.alpha, r = Be(e, "hsl"), a = n === "h" ? D(t) : Number(((u = r.find((m) => m.key === "h")) == null ? void 0 : u.value) ?? 0);
  let s = n === "s" ? t : Number(((b = r.find((m) => m.key === "s")) == null ? void 0 : b.value) ?? 0);
  const c = n === "l" ? t : Number(((x = r.find((m) => m.key === "l")) == null ? void 0 : x.value) ?? 0);
  n === "h" && s < 1 && (s = 1);
  const p = xe(`hsl(${a}, ${$t(s)}%, ${$t(c)}%)`);
  return p ? { ...p, alpha: i } : e;
}
function ro(e, n, t, i) {
  switch (n) {
    case "l": {
      const r = R({ ...e, l: t / 100 });
      return i != null ? wt(r, i) : r;
    }
    case "c": {
      const r = Math.max(0, t), a = r <= wr || oe(e) ? i != null ? D(i) : D(e.h) : e.h, s = R({ ...e, c: r, h: a });
      return i != null ? wt(s, i) : s;
    }
    case "h":
      return $r(e, t);
  }
}
function Pi(e, n, t) {
  switch (e) {
    case "hex": {
      const i = (n.hex ?? "").trim().replace(/^#/, "");
      if (!/^[0-9a-fA-F]{3,8}$/.test(i)) return null;
      const r = xe(`#${i}`);
      return r ? vn(r, t.alpha) : null;
    }
    case "rgb": {
      const i = Number(n.r), r = Number(n.g), a = Number(n.b);
      if ([i, r, a].some((c) => Number.isNaN(c))) return null;
      const s = xe(`rgb(${xn(i)}, ${xn(r)}, ${xn(a)})`);
      return s ? vn(s, t.alpha) : null;
    }
    case "hsl": {
      const i = yn(n.h), r = yn(n.s), a = yn(n.l);
      if ([i, r, a].some((c) => Number.isNaN(c))) return null;
      const s = xe(`hsl(${i}, ${$t(r)}%, ${$t(a)}%)`);
      return s ? vn(s, t.alpha) : null;
    }
    case "oklch": {
      const i = Number(n.l);
      let r = Number(n.c), a = Number(n.h);
      return [i, r, a].some((s) => Number.isNaN(s)) ? null : (r <= 0 && (r = 0, Rt(t) || (a = t.h)), R({ l: i / 100, c: r, h: a, alpha: t.alpha }));
    }
  }
}
function ao(e) {
  const n = qt({ mode: "oklch", ...e, alpha: 1 });
  return {
    x: ye((n == null ? void 0 : n.s) ?? 0),
    y: ye(1 - ((n == null ? void 0 : n.v) ?? 0))
  };
}
function so(e, n, t, i) {
  const r = ye(e), a = ye(n), s = D(t), c = Qn(
    qe({ mode: "hsv", h: s, s: r, v: 1 - a, alpha: 1 }) ?? {
      mode: "hsv",
      h: s,
      s: r,
      v: 1 - a
    }
  );
  if ((c == null ? void 0 : c.l) != null) {
    const p = c.c ?? 0, u = r < kr || Rt({ c: p });
    return R({
      l: c.l,
      c: p,
      h: u ? s : c.h ?? s,
      alpha: i
    });
  }
  return R({ l: 0.5, c: 0, h: s, alpha: i });
}
function vn(e, n) {
  return { ...e, alpha: ye(n) };
}
function ye(e) {
  return Math.min(1, Math.max(0, e));
}
function xn(e) {
  return Math.min(255, Math.max(0, Math.round(e)));
}
function $t(e) {
  return Math.min(100, Math.max(0, e));
}
function yn(e) {
  return Number(e.replace(/%/g, "").trim());
}
function D(e) {
  return Math.min(360, Math.max(0, e));
}
const Hi = {
  l: 0.62,
  c: 0.24,
  h: 303,
  alpha: 0.8
}, zr = "pretty-color-picker-history", Ar = 16, Ni = "Pretty Color Picker";
function _r(e, n) {
  return _e(e) === _e(n) && e.alpha === n.alpha;
}
function oo() {
  try {
    const e = localStorage.getItem(zr);
    if (!e) return [];
    const n = JSON.parse(e);
    return Array.isArray(n) ? n.slice(0, Ar) : [];
  } catch {
    return [];
  }
}
function lo(e, n) {
  const t = n.filter((r) => !_r(r, e)), i = [e, ...t].slice(0, Ar);
  try {
    localStorage.setItem(zr, JSON.stringify(i));
  } catch {
  }
  return i;
}
const co = "#ededed", po = "#171717", ho = 0.52;
function uo(e, n, t) {
  const i = [e, n, t].map((r) => {
    const a = r / 255;
    return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2];
}
function fo(e, n, t) {
  return uo(e, n, t) > ho ? po : co;
}
function bo(e, n, t) {
  return {
    backgroundColor: fo(e, n, t),
    boxShadow: "none"
  };
}
function Ii(e) {
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
function go(e, n, t, i) {
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
function qi(e, n) {
  const t = n.getBoundingClientRect(), i = Fi((e.clientX - t.left) / t.width), r = Fi((e.clientY - t.top) / t.height);
  return { x: i, y: r };
}
function Ri(e, n, t = 3) {
  let i = !1, r = !1, a = 0, s = 0;
  const c = (b) => {
    var m;
    if (!i) return;
    if (!r) {
      if (Math.abs(b.clientX - a) < t) return;
      r = !0, e.blur(), e.setAttribute("data-scrubbing", "true"), document.body.style.cursor = "ew-resize", (m = n.onStart) == null || m.call(n, b), s = b.clientX;
      return;
    }
    const x = b.clientX - s;
    s = b.clientX, x !== 0 && n.onDelta(x, b);
  }, p = (b) => {
    var m;
    if (!i) return;
    const x = r;
    if (i = !1, r = !1, b.pointerId != null)
      try {
        e.releasePointerCapture(b.pointerId);
      } catch {
      }
    window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), x && (e.removeAttribute("data-scrubbing"), document.body.style.cursor = "", (m = n.onEnd) == null || m.call(n, b));
  }, u = (b) => {
    b.button === 0 && (i = !0, r = !1, a = b.clientX, s = b.clientX, e.setPointerCapture(b.pointerId), window.addEventListener("pointermove", c), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p));
  };
  return e.addEventListener("pointerdown", u), () => {
    e.removeEventListener("pointerdown", u), window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), e.removeAttribute("data-scrubbing");
  };
}
function Mn(e, n, t, i) {
  let r = !1;
  const a = (p) => {
    if (!r) return;
    const { x: u, y: b } = qi(p, e);
    n(u, b);
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
    const { x: u, y: b } = qi(p, e);
    n(u, b), window.addEventListener("pointermove", a), window.addEventListener("pointerup", s), window.addEventListener("pointercancel", s);
  };
  return e.addEventListener("pointerdown", c), () => {
    e.removeEventListener("pointerdown", c), window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", s);
  };
}
function Fi(e) {
  return Math.min(1, Math.max(0, e));
}
const ot = 48;
function mo(e, n) {
  const t = (i) => {
    if (i.button !== 0 || i.target.closest(".pcp-header-btn, .pcp-tabs")) return;
    i.preventDefault();
    const a = n.getBoundingClientRect(), s = i.clientX - a.left, c = i.clientY - a.top;
    e.dataset.dragging = "true", e.setPointerCapture(i.pointerId);
    const p = (b) => {
      Cr(n, b.clientX - s, b.clientY - c);
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
function Xi(e) {
  const n = e.offsetWidth, t = e.offsetHeight;
  Cr(
    e,
    (window.innerWidth - n) / 2,
    (window.innerHeight - t) / 2
  );
}
function Cr(e, n, t) {
  const i = e.offsetWidth, r = e.offsetHeight, a = window.innerWidth - ot, s = window.innerHeight - ot, c = ot - i, p = ot - r;
  e.style.left = `${Math.min(a, Math.max(c, n))}px`, e.style.top = `${Math.min(s, Math.max(p, t))}px`;
}
const Di = 8, $e = 8;
function vo(e, n = document) {
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
function xo(e, n) {
  const t = n.getBoundingClientRect(), i = e.offsetWidth, r = e.offsetHeight, a = window.innerWidth, s = window.innerHeight;
  let c = t.bottom + Di, p = t.left;
  p + i > a - $e && (p = t.right - i), p = Math.min(a - $e - i, Math.max($e, p)), c + r > s - $e && (c = t.top - r - Di), c = Math.min(s - $e - r, Math.max($e, c)), e.style.left = `${p}px`, e.style.top = `${c}px`;
}
const yo = ["hex", "rgb", "hsl", "oklch"], Mo = {
  hex: "HEX",
  rgb: "RGB",
  hsl: "HSL",
  oklch: "OKLCH"
};
var $, y, H, J, Ce, E, Le, Qe, F, U, I, K, et, q, Te, Q, le, tt, Se, O, ce, Ee, ee, j, te, Z, ne, de, pe, ie, Y, o, Lr, Tr, Sr, Er, Pr, Hr, Nr, Ln, Tn, Ve, Sn, En, Pn, Hn, Ge, V, Nn, Ir, We, In, qr, qn, Rr, Fr, Xr, Dr, lt, ge, Or, jr, Yr, Zr, ct, Rn, Fn, Br, Vr, Gr, Wr, Jr, Ur, Kr, G, Je, Xn, Dn, me, ze, dt, On, pt, Qr, jn, ea, ht, ut, Yn, ft, W, ta;
class wo extends HTMLElement {
  constructor() {
    super();
    w(this, o);
    w(this, $);
    w(this, y, { ...Hi });
    w(this, H, "hsl");
    w(this, J, oo());
    w(this, Ce, null);
    w(this, E, []);
    w(this, Le);
    w(this, Qe);
    w(this, F);
    w(this, U);
    w(this, I);
    w(this, K);
    w(this, et);
    w(this, q);
    w(this, Te);
    w(this, Q);
    w(this, le);
    w(this, tt);
    w(this, Se);
    w(this, O);
    w(this, ce);
    w(this, Ee);
    w(this, ee, null);
    w(this, j, null);
    w(this, te, null);
    w(this, Z, null);
    w(this, ne, null);
    w(this, de, null);
    w(this, pe, null);
    w(this, ie, null);
    w(this, Y, Hi.h);
    g(this, $, this.attachShadow({ mode: "open" }));
  }
  static get observedAttributes() {
    return ["value", "theme", "label", "header-action", "movable", "mode", "anchor", "open", "history"];
  }
  connectedCallback() {
    d(this, o, Tr).call(this), d(this, o, Sr).call(this), d(this, o, Lr).call(this), d(this, o, Je).call(this, !1), d(this, o, En).call(this), d(this, o, Ge).call(this), this.popoverMode && this.open && requestAnimationFrame(() => d(this, o, Ve).call(this));
  }
  disconnectedCallback() {
    var t;
    l(this, ie) != null && (cancelAnimationFrame(l(this, ie)), g(this, ie, null)), (t = l(this, j)) == null || t.call(this), g(this, j, null), d(this, o, Sn).call(this), l(this, E).forEach((i) => i()), g(this, E, []);
  }
  attributeChangedCallback(t, i, r) {
    if (this.isConnected) {
      if (t === "value" && r != null) {
        const a = xe(r);
        a && (g(this, y, a), d(this, o, Je).call(this, !1));
        return;
      }
      t === "theme" && d(this, o, We).call(this), t === "movable" && d(this, o, Ge).call(this), (t === "mode" || t === "anchor") && (d(this, o, En).call(this), d(this, o, Ge).call(this)), t === "open" && this.popoverMode && r != null && requestAnimationFrame(() => {
        d(this, o, Ve).call(this), d(this, o, ze).call(this);
      }), t === "history" && d(this, o, Pn).call(this), t === "header-action" && d(this, o, qr).call(this), t === "label" && d(this, o, Hn).call(this);
    }
  }
  get value() {
    return mn(l(this, y));
  }
  set value(t) {
    const i = xe(t);
    i && (g(this, y, i), d(this, o, Je).call(this));
  }
  get color() {
    return { ...l(this, y) };
  }
  set color(t) {
    g(this, y, R(t)), d(this, o, Je).call(this);
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
  /** Accessible name for the picker. Default `Pretty Color Picker`. Set `label=""` to clear. */
  get label() {
    const t = this.getAttribute("label");
    return t === null ? Ni : t;
  }
  set label(t) {
    t === Ni ? this.removeAttribute("label") : this.setAttribute("label", t);
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
          d(this, o, Ve).call(this), d(this, o, ze).call(this);
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
$ = new WeakMap(), y = new WeakMap(), H = new WeakMap(), J = new WeakMap(), Ce = new WeakMap(), E = new WeakMap(), Le = new WeakMap(), Qe = new WeakMap(), F = new WeakMap(), U = new WeakMap(), I = new WeakMap(), K = new WeakMap(), et = new WeakMap(), q = new WeakMap(), Te = new WeakMap(), Q = new WeakMap(), le = new WeakMap(), tt = new WeakMap(), Se = new WeakMap(), O = new WeakMap(), ce = new WeakMap(), Ee = new WeakMap(), ee = new WeakMap(), j = new WeakMap(), te = new WeakMap(), Z = new WeakMap(), ne = new WeakMap(), de = new WeakMap(), pe = new WeakMap(), ie = new WeakMap(), Y = new WeakMap(), o = new WeakSet(), Lr = function() {
  const t = this.getAttribute("value");
  if (t) {
    const i = xe(t);
    i && g(this, y, i);
  }
}, Tr = function() {
  const t = this.headerAction === "none" ? "" : this.headerAction === "theme" ? `<button type="button" class="pcp-header-btn pcp-theme-toggle" aria-label="Switch to light mode">${oi}</button>` : `<button type="button" class="pcp-header-btn pcp-close" aria-label="Close">
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
      <style>${sa}</style>
      <div class="pcp" part="container">
        <header class="pcp-header">
          <div class="pcp-tabs" role="tablist" part="tabs">
            <div class="pcp-tabs-pill"></div>
            ${yo.map((i) => `<button type="button" class="pcp-tab" role="tab" data-format="${i}">${Mo[i]}</button>`).join("")}
          </div>
          ${t}
        </header>
        <div class="pcp-plane-wrap">
          <div class="pcp-plane-surface pcp-clip">
            <canvas class="pcp-plane" width="240" height="240" aria-label="Color plane"></canvas>
          </div>
          <div class="pcp-cursor" aria-hidden="true"></div>
        </div>
        <div class="pcp-slider-wrapper">
          <div class="pcp-slider pcp-hue-row" aria-label="Hue">
            <div class="pcp-slider-track pcp-clip">
              <div class="pcp-slider-fill pcp-slider-fill-hue"></div>
            </div>
            <div class="pcp-slider-handle"></div>
          </div>
        </div>
        <div class="pcp-slider-wrapper">
          <div class="pcp-slider pcp-alpha-row" aria-label="Opacity">
            <div class="pcp-slider-track pcp-clip">
              <div class="pcp-slider-fill pcp-slider-fill-alpha"></div>
            </div>
            <div class="pcp-slider-handle"></div>
          </div>
        </div>
        <div class="pcp-values-row">
          <button type="button" class="pcp-swatch" aria-label="Copy color">
            <span class="pcp-swatch-surface pcp-clip">
              <span class="pcp-swatch-fill"></span>
            </span>
            <span class="pcp-swatch-tooltip" role="status" aria-live="polite">Copied</span>
          </button>
          <div class="pcp-inputs">
            <div class="pcp-fields"></div>
            <div class="pcp-field pcp-alpha-field">
              <input class="pcp-field-input pcp-alpha-input" type="text" inputmode="numeric" value="80%" aria-label="Opacity" />
            </div>
          </div>
        </div>
        <div class="pcp-history-section">
          <div class="pcp-history"></div>
        </div>
      </div>
    `, g(this, Le, l(this, $).querySelector(".pcp-plane")), g(this, Qe, l(this, $).querySelector(".pcp-plane-wrap")), g(this, F, l(this, $).querySelector(".pcp-cursor")), g(this, U, l(this, $).querySelector(".pcp-hue-row")), g(this, I, l(this, U).querySelector(".pcp-slider-handle")), g(this, K, l(this, $).querySelector(".pcp-alpha-row")), g(this, et, l(this, $).querySelector(".pcp-slider-fill-alpha")), g(this, q, l(this, K).querySelector(".pcp-slider-handle")), g(this, Te, l(this, $).querySelector(".pcp-tabs-pill")), g(this, Q, l(this, $).querySelector(".pcp-fields")), g(this, le, l(this, $).querySelector(".pcp-swatch")), g(this, tt, l(this, $).querySelector(".pcp-swatch-fill")), g(this, Se, l(this, $).querySelector(".pcp-swatch-tooltip")), g(this, O, l(this, $).querySelector(".pcp-alpha-input")), g(this, Ee, l(this, $).querySelector(".pcp-history-section")), g(this, ce, l(this, $).querySelector(".pcp-history")), d(this, o, Hn).call(this), g(this, ee, l(this, $).querySelector(".pcp-theme-toggle")), d(this, o, We).call(this);
}, Sr = function() {
  d(this, o, In).call(this), l(this, E).push(
    Mn(
      l(this, Qe),
      (i, r) => d(this, o, Or).call(this, i, r),
      () => d(this, o, W).call(this),
      () => d(this, o, V).call(this)
    )
  ), l(this, E).push(
    Mn(
      l(this, U),
      (i) => d(this, o, jr).call(this, i),
      () => d(this, o, W).call(this),
      () => d(this, o, V).call(this)
    )
  ), l(this, E).push(
    Mn(
      l(this, K),
      (i) => d(this, o, Yr).call(this, i),
      () => d(this, o, W).call(this),
      () => d(this, o, V).call(this)
    )
  ), l(this, E).push(d(this, o, qn).call(this, l(this, U))), l(this, E).push(d(this, o, qn).call(this, l(this, K))), l(this, $).querySelectorAll(".pcp-tab").forEach((i) => {
    i.addEventListener("click", () => {
      const r = i.dataset.format;
      r && r !== l(this, H) && (g(this, H, r), d(this, o, ze).call(this), d(this, o, Yn).call(this), d(this, o, ut).call(this), d(this, o, dt).call(this));
    });
  }), l(this, O).addEventListener("focus", () => d(this, o, V).call(this)), l(this, O).addEventListener("change", () => d(this, o, Rn).call(this)), l(this, O).addEventListener("keydown", (i) => {
    i.key === "Enter" && d(this, o, Rn).call(this);
  }), l(this, E).push(d(this, o, Ur).call(this));
  const t = () => {
    d(this, o, Pr).call(this);
  };
  l(this, le).addEventListener("click", t), l(this, E).push(() => {
    l(this, le).removeEventListener("click", t), l(this, Z) != null && (clearTimeout(l(this, Z)), g(this, Z, null));
  }), d(this, o, Ge).call(this), d(this, o, Pn).call(this);
}, Er = function() {
  var t, i, r;
  switch (l(this, H)) {
    case "hex":
      return _e(l(this, y)).toUpperCase();
    case "rgb":
      return Qs(l(this, y));
    case "hsl": {
      const a = Be(l(this, y), "hsl"), s = ((t = a.find((u) => u.key === "h")) == null ? void 0 : t.value) ?? "0", c = ((i = a.find((u) => u.key === "s")) == null ? void 0 : i.value) ?? "0", p = ((r = a.find((u) => u.key === "l")) == null ? void 0 : r.value) ?? "0";
      return l(this, y).alpha < 1 ? `hsla(${s}, ${c}%, ${p}%, ${l(this, y).alpha.toFixed(2)})` : `hsl(${s}, ${c}%, ${p}%)`;
    }
    case "oklch":
      return mn(l(this, y));
  }
}, Pr = async function() {
  const t = d(this, o, Er).call(this);
  await d(this, o, Hr).call(this, t) && d(this, o, Nr).call(this);
}, Hr = async function(t) {
  var i;
  try {
    if ((i = navigator.clipboard) != null && i.writeText)
      return await navigator.clipboard.writeText(t), !0;
  } catch {
  }
  try {
    const r = document.createElement("textarea");
    r.value = t, r.setAttribute("readonly", ""), r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.opacity = "0", document.body.appendChild(r), r.focus(), r.select();
    const a = document.execCommand("copy");
    return document.body.removeChild(r), a;
  } catch {
    return !1;
  }
}, Nr = function() {
  l(this, Se).classList.add("is-visible"), l(this, le).setAttribute("aria-label", "Copied"), l(this, Z) != null && clearTimeout(l(this, Z)), g(this, Z, setTimeout(() => {
    l(this, Se).classList.remove("is-visible"), l(this, le).setAttribute("aria-label", "Copy color"), g(this, Z, null);
  }, 1500));
}, Ln = function() {
  this.popoverMode && this.hide(), this.dispatchEvent(new CustomEvent("close", { bubbles: !0, composed: !0 }));
}, Tn = function() {
  const t = this.anchor;
  return t ? vo(t, this.ownerDocument) : null;
}, Ve = function() {
  g(this, de, d(this, o, Tn).call(this)), l(this, de) ? (xo(this, l(this, de)), this.setAttribute("data-positioned", "")) : (this.movable || this.popoverMode) && (Xi(this), this.setAttribute("data-positioned", ""));
}, Sn = function() {
  if (l(this, ne)) {
    const t = l(this, E).indexOf(l(this, ne));
    t >= 0 && l(this, E).splice(t, 1), l(this, ne).call(this), g(this, ne, null);
  }
  g(this, de, null);
}, En = function() {
  if (d(this, o, Sn).call(this), !this.popoverMode) {
    this.removeAttribute("open"), this.movable || (this.style.position = "", this.style.left = "", this.style.top = "", this.style.zIndex = "");
    return;
  }
  this.movable || (this.style.position = "fixed", this.style.zIndex = "1000");
  const t = d(this, o, Tn).call(this);
  g(this, de, t);
  const i = (c) => {
    c.preventDefault(), c.stopPropagation(), this.toggle();
  }, r = (c) => {
    if (!this.open) return;
    const p = c.composedPath();
    p.includes(this) || t && p.includes(t) || this.hide();
  }, a = (c) => {
    c.key === "Escape" && this.open && (c.preventDefault(), d(this, o, Ln).call(this));
  }, s = () => {
    this.open && d(this, o, Ve).call(this);
  };
  t == null || t.addEventListener("click", i), document.addEventListener("pointerdown", r, !0), document.addEventListener("keydown", a), window.addEventListener("resize", s), window.addEventListener("scroll", s, !0), g(this, ne, () => {
    t == null || t.removeEventListener("click", i), document.removeEventListener("pointerdown", r, !0), document.removeEventListener("keydown", a), window.removeEventListener("resize", s), window.removeEventListener("scroll", s, !0);
  }), l(this, E).push(l(this, ne));
}, Pn = function() {
  if (!this.history) {
    l(this, Ee).hidden = !0, l(this, ce).innerHTML = "";
    return;
  }
  d(this, o, ft).call(this);
}, Hn = function() {
  if (this.getAttribute("label") === "") {
    this.removeAttribute("aria-label");
    return;
  }
  this.setAttribute("aria-label", this.label);
}, Ge = function() {
  if (l(this, te)) {
    const r = l(this, E).indexOf(l(this, te));
    r >= 0 && l(this, E).splice(r, 1), l(this, te).call(this), g(this, te, null);
  }
  if (!(this.movable || this.popoverMode)) {
    this.popoverMode || (this.style.position = "", this.style.left = "", this.style.top = "", this.style.zIndex = ""), this.removeAttribute("data-positioned");
    return;
  }
  !this.popoverMode && !this.hasAttribute("data-positioned") && requestAnimationFrame(() => {
    Xi(this), this.setAttribute("data-positioned", "");
  });
  const i = l(this, $).querySelector(".pcp-header");
  i && (g(this, te, mo(i, this)), l(this, E).push(l(this, te)));
}, V = function() {
  g(this, Ce, { ...l(this, y) });
}, Nn = function() {
  return this.theme === "light" ? "light" : this.theme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}, Ir = function() {
  const t = d(this, o, Nn).call(this) === "light" ? "dark" : "light";
  this.theme = t, d(this, o, We).call(this);
  const i = { theme: t };
  this.dispatchEvent(
    new CustomEvent("themechange", {
      detail: i,
      bubbles: !0,
      composed: !0
    })
  );
}, We = function() {
  if (!l(this, ee)) return;
  const t = d(this, o, Nn).call(this) === "light";
  l(this, ee).innerHTML = t ? aa : oi, l(this, ee).setAttribute(
    "aria-label",
    t ? "Switch to dark mode" : "Switch to light mode"
  );
}, In = function() {
  var r;
  (r = l(this, j)) == null || r.call(this), g(this, j, null);
  const t = l(this, $).querySelector(".pcp-close");
  if (t) {
    const a = () => d(this, o, Ln).call(this);
    t.addEventListener("click", a), g(this, j, () => t.removeEventListener("click", a));
    return;
  }
  const i = l(this, $).querySelector(".pcp-theme-toggle");
  if (i) {
    const a = () => d(this, o, Ir).call(this);
    i.addEventListener("click", a), g(this, j, () => i.removeEventListener("click", a));
  }
}, qr = function() {
  var r, a;
  (r = l(this, j)) == null || r.call(this), g(this, j, null);
  const t = l(this, $).querySelector(".pcp-header");
  if (!t || ((a = t.querySelector(".pcp-header-btn")) == null || a.remove(), g(this, ee, null), this.headerAction === "none")) return;
  const i = document.createElement("button");
  i.type = "button", i.className = `pcp-header-btn ${this.headerAction === "theme" ? "pcp-theme-toggle" : "pcp-close"}`, t.appendChild(i), this.headerAction === "theme" ? (g(this, ee, i), d(this, o, We).call(this)) : (i.setAttribute("aria-label", "Close"), i.innerHTML = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M4.25 4.25L11.75 11.75M11.75 4.25L4.25 11.75"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>`), d(this, o, In).call(this);
}, qn = function(t) {
  const i = () => {
    t.dataset.active = "true";
  }, r = () => {
    const a = t.querySelector(".pcp-slider-handle");
    a != null && a.hasAttribute("data-dragging") || delete t.dataset.active;
  };
  return t.addEventListener("pointerenter", i), t.addEventListener("pointerleave", r), () => {
    t.removeEventListener("pointerenter", i), t.removeEventListener("pointerleave", r);
  };
}, Rr = function(t, i) {
  const r = Math.max(0, Math.min(1, i)) * 100;
  t.style.left = `max(0px, calc(${r}% - 1.5px))`;
}, Fr = function() {
  const t = getComputedStyle(this), i = Ii(t.getPropertyValue("--pcp-checker-base").trim()) ?? { r: 255, g: 255, b: 255 }, r = Ii(t.getPropertyValue("--pcp-checker-tone").trim()) ?? { r: 204, g: 204, b: 204 };
  return { base: i, tone: r };
}, Xr = function(t, i) {
  const r = t.style.left.match(/calc\(([\d.]+)%/);
  return r ? parseFloat(r[1]) / 100 : i;
}, Dr = function(t, i) {
  if (i === "hue") return eo(t);
  const { base: r, tone: a } = d(this, o, Fr).call(this);
  return go(kt(l(this, y)), t, r, a);
}, lt = function(t, i, r) {
  const a = d(this, o, Dr).call(this, i, r), { backgroundColor: s, boxShadow: c } = bo(a.r, a.g, a.b);
  t.style.backgroundColor = s, t.style.boxShadow = c;
}, ge = function(t, i, r) {
  d(this, o, Rr).call(this, t, i), d(this, o, lt).call(this, t, i, r);
}, Or = function(t, i) {
  l(this, F).dataset.dragging = "true";
  const r = d(this, o, me).call(this);
  d(this, o, G).call(this, so(t, i, r, l(this, y).alpha), !0, {
    refreshPlane: !1,
    refreshCursor: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  }), d(this, o, On).call(this, t, i);
}, jr = function(t) {
  l(this, U).dataset.active = "true", l(this, I).dataset.dragging = "true", g(this, Y, t * 360), d(this, o, ge).call(this, l(this, I), t, "hue"), d(this, o, G).call(this, $r(l(this, y), l(this, Y)), !0, {
    refreshPlane: !0,
    refreshCursor: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  });
}, Yr = function(t) {
  l(this, K).dataset.active = "true", l(this, q).dataset.dragging = "true", d(this, o, G).call(this, R({ ...l(this, y), alpha: t }), !0, {
    refreshPlane: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  }), d(this, o, ge).call(this, l(this, q), t, "alpha");
}, Zr = function() {
  const i = l(this, I).style.left.match(/calc\(([\d.]+)%/);
  return i ? parseFloat(i[1]) / 100 * 360 : l(this, Y);
}, ct = function() {
  oe(l(this, y)) || g(this, Y, no(l(this, y)));
}, Rn = function() {
  const t = l(this, O).value.replace(/%/g, "").trim(), i = Number(t);
  if (Number.isNaN(i)) {
    d(this, o, ht).call(this);
    return;
  }
  const r = Math.min(1, Math.max(0, i / 100));
  d(this, o, G).call(this, R({ ...l(this, y), alpha: r }), !0), d(this, o, ge).call(this, l(this, q), r, "alpha"), d(this, o, W).call(this);
}, Fn = function(t, i) {
  d(this, o, Br).call(this, { [t]: i }, !0);
}, Br = function(t, i = !0) {
  const r = {};
  Be(l(this, y), l(this, H)).forEach((s) => {
    r[s.key] = t[s.key] ?? s.value;
  });
  const a = Pi(l(this, H), r, l(this, y));
  a && (d(this, o, G).call(this, a, !0), i && d(this, o, W).call(this));
}, Vr = function(t, i) {
  if (t.scrubStep != null)
    return i ? t.scrubStep * 0.1 : t.scrubStep;
  const r = t.min ?? 0, s = (t.max ?? 100) - r, c = t.step != null && t.step < 1 ? s / 120 : t.step ?? 1;
  return i ? c * 0.1 : c;
}, Gr = function(t, i) {
  return t.step != null && t.step < 1 ? i.toFixed(3) : String(Math.round(i));
}, Wr = function(t, i, r, a) {
  const s = l(this, Q).querySelector(
    `.pcp-field-input[data-key="${t}"]`
  ), c = Be(l(this, y), l(this, H)), p = c.find((T) => T.key === t);
  if (!p) return;
  const u = i.min ?? 0, b = i.max ?? 100, x = d(this, o, Vr).call(this, i, a), m = Number(s ? s.value.replace(/%/g, "").trim() : p.value);
  let M = m + r * x;
  if (i.step != null && i.step < 1 ? (M = Math.round(M / i.step) * i.step, M = Math.min(b, Math.max(u, M))) : M = Math.min(b, Math.max(u, Math.round(M))), Math.abs(M - m) < (i.step != null && i.step < 1 ? i.step / 2 : 0.5)) return;
  const A = d(this, o, Gr).call(this, i, M);
  let z = null;
  if (l(this, H) === "hsl" && (t === "h" || t === "s" || t === "l"))
    z = io(l(this, y), t, M);
  else if (l(this, H) === "oklch" && (t === "l" || t === "c" || t === "h"))
    z = ro(l(this, y), t, M, l(this, Y));
  else {
    const T = {};
    c.forEach((C) => {
      T[C.key] = C.key === t ? A : C.value;
    }), z = Pi(l(this, H), T, l(this, y));
  }
  if (!z) return;
  t === "h" && g(this, Y, D(M));
  const _ = t === "h" || l(this, H) === "oklch" && (t === "c" || t === "l");
  d(this, o, G).call(this, z, !0, {
    refreshFields: !1,
    refreshCursor: !0,
    refreshSliders: !0,
    syncPlaneHue: !_
  }), s && (s.value = A);
}, Jr = function(t, i) {
  const r = i ? 0.05 : 0.5, a = l(this, y).alpha * 100;
  let s = a + t * r;
  if (s = Math.min(100, Math.max(0, i ? s : Math.round(s))), Math.abs(s - a) < 0.01) return;
  const c = s / 100;
  d(this, o, G).call(this, R({ ...l(this, y), alpha: c }), !0, {
    refreshFields: !1,
    refreshPlane: !1,
    refreshSliders: !1,
    syncPlaneHue: !1
  }), l(this, O).value = `${Math.round(s)}%`, d(this, o, ge).call(this, l(this, q), c, "alpha");
}, Ur = function() {
  return Ri(l(this, O), {
    onStart: () => d(this, o, V).call(this),
    onDelta: (t, i) => d(this, o, Jr).call(this, t, i.shiftKey),
    onEnd: () => {
      d(this, o, W).call(this), d(this, o, ht).call(this), d(this, o, pt).call(this);
    }
  });
}, Kr = function(t) {
  l(this, H) !== "hex" && l(this, Q).querySelectorAll(".pcp-field-input").forEach((i) => {
    const r = i, a = r.dataset.key;
    if (!a) return;
    const s = t.find((c) => c.key === a);
    !s || s.min == null || s.max == null || Ri(r, {
      onStart: () => d(this, o, V).call(this),
      onDelta: (c, p) => d(this, o, Wr).call(this, a, s, c, p.shiftKey),
      onEnd: () => {
        d(this, o, W).call(this), d(this, o, ut).call(this);
      }
    });
  });
}, G = function(t, i = !0, r) {
  let a = R(t);
  oe(a) && (a = wt(a, l(this, Y))), g(this, y, a), !(l(this, F).hasAttribute("data-dragging") || l(this, I).hasAttribute("data-dragging")) && (r == null ? void 0 : r.syncPlaneHue) !== !1 && !oe(a) && d(this, o, ct).call(this), d(this, o, Xn).call(this, i, r);
}, Je = function(t = !0) {
  oe(l(this, y)) || d(this, o, ct).call(this), d(this, o, ze).call(this), d(this, o, Yn).call(this), d(this, o, Xn).call(this, t), d(this, o, ft).call(this);
}, Xn = function(t, i) {
  (i == null ? void 0 : i.refreshFields) !== !1 && d(this, o, ut).call(this), d(this, o, ea).call(this), (i == null ? void 0 : i.refreshSliders) !== !1 && d(this, o, pt).call(this), (i == null ? void 0 : i.refreshCursor) !== !1 && !l(this, F).hasAttribute("data-dragging") && d(this, o, dt).call(this), (i == null ? void 0 : i.refreshPlane) === !0 ? d(this, o, Dn).call(this) : (i == null ? void 0 : i.refreshPlane) !== !1 && !l(this, F).hasAttribute("data-dragging") && !l(this, I).hasAttribute("data-dragging") && l(this, pe) !== d(this, o, me).call(this) && d(this, o, Dn).call(this), t && d(this, o, ta).call(this);
}, Dn = function() {
  l(this, ie) == null && g(this, ie, requestAnimationFrame(() => {
    g(this, ie, null);
    const t = d(this, o, me).call(this);
    l(this, pe) !== t && (Ei(l(this, Le), t), g(this, pe, t));
  }));
}, me = function() {
  return l(this, I).hasAttribute("data-dragging") ? d(this, o, Zr).call(this) : l(this, Y);
}, ze = function() {
  const t = d(this, o, me).call(this);
  Ei(l(this, Le), t), g(this, pe, t);
}, dt = function() {
  const { x: t, y: i } = ao(l(this, y));
  d(this, o, On).call(this, t, i);
}, On = function(t, i) {
  l(this, F).style.left = `${t * 100}%`, l(this, F).style.top = `${i * 100}%`;
}, pt = function() {
  const i = d(this, o, me).call(this) / 360;
  l(this, I).hasAttribute("data-dragging") ? d(this, o, lt).call(this, l(this, I), i, "hue") : d(this, o, ge).call(this, l(this, I), i, "hue");
  const r = l(this, q).hasAttribute("data-dragging") ? d(this, o, Xr).call(this, l(this, q), l(this, y).alpha) : l(this, y).alpha;
  l(this, q).hasAttribute("data-dragging") ? d(this, o, lt).call(this, l(this, q), r, "alpha") : d(this, o, ge).call(this, l(this, q), r, "alpha"), d(this, o, Qr).call(this);
}, Qr = function() {
  l(this, et).style.setProperty("--pcp-alpha-gradient", to(l(this, y)));
}, jn = function(t, i) {
  const { r, g: a, b: s } = kt(i);
  t.style.setProperty("--swatch-solid", `rgb(${r}, ${a}, ${s})`), t.style.setProperty("--swatch-alpha", `rgba(${r}, ${a}, ${s}, ${i.alpha})`);
}, ea = function() {
  d(this, o, jn).call(this, l(this, tt), l(this, y));
}, ht = function() {
  l(this, O).value = `${Math.round(l(this, y).alpha * 100)}%`;
}, ut = function() {
  const t = Be(l(this, y), l(this, H));
  l(this, Q).dataset.format = l(this, H), l(this, Q).innerHTML = t.map(
    (i) => `
        <div class="pcp-field pcp-field-${i.key}">
          <input
            class="pcp-field-input"
            type="text"
            data-key="${i.key}"
            value="${i.value}"
            aria-label="${i.label}"
          />
        </div>
      `
  ).join(""), l(this, Q).querySelectorAll(".pcp-field-input").forEach((i) => {
    const r = i, a = r.dataset.key;
    r.addEventListener("focus", () => d(this, o, V).call(this)), r.addEventListener("change", () => d(this, o, Fn).call(this, a, r.value)), r.addEventListener("keydown", (s) => {
      s.key === "Enter" && d(this, o, Fn).call(this, a, r.value);
    });
  }), d(this, o, Kr).call(this, t), d(this, o, ht).call(this);
}, Yn = function() {
  const t = l(this, $).querySelectorAll(".pcp-tab");
  let i = null;
  if (t.forEach((r) => {
    const a = r.dataset.format === l(this, H);
    r.setAttribute("data-active", String(a)), r.setAttribute("aria-selected", String(a)), a && (i = r);
  }), i) {
    const r = i, a = r.offsetLeft, s = r.offsetWidth;
    l(this, Te).style.left = `${a}px`, l(this, Te).style.width = `${s}px`;
  }
}, ft = function() {
  this.history && (l(this, Ee).hidden = l(this, J).length === 0, l(this, ce).innerHTML = l(this, J).map((t, i) => `
          <button type="button" class="pcp-history-swatch pcp-clip" data-index="${i}" aria-label="Color ${_e(t)}">
            <span class="pcp-swatch-fill" data-history-fill="${i}"></span>
          </button>
        `).join(""), l(this, ce).querySelectorAll("[data-history-fill]").forEach((t) => {
    const i = Number(t.dataset.historyFill), r = l(this, J)[i];
    r && d(this, o, jn).call(this, t, r);
  }), l(this, ce).querySelectorAll(".pcp-history-swatch").forEach((t) => {
    t.addEventListener("click", () => {
      const i = Number(t.dataset.index), r = l(this, J)[i];
      r && (d(this, o, V).call(this), d(this, o, G).call(this, { ...r }, !0, { refreshFields: !0 }), d(this, o, W).call(this));
    });
  }));
}, W = function() {
  const t = l(this, F).hasAttribute("data-dragging"), i = l(this, I).hasAttribute("data-dragging");
  delete l(this, F).dataset.dragging, delete l(this, I).dataset.dragging, delete l(this, q).dataset.dragging, delete l(this, U).dataset.active, delete l(this, K).dataset.active, (t || i) && (oe(l(this, y)) || d(this, o, ct).call(this), d(this, o, pt).call(this), d(this, o, dt).call(this), l(this, pe) !== d(this, o, me).call(this) && d(this, o, ze).call(this));
  const r = l(this, Ce);
  g(this, Ce, null), this.history && r && !_r(r, l(this, y)) && (g(this, J, lo(r, l(this, J))), d(this, o, ft).call(this));
}, ta = function() {
  const t = {
    color: { ...l(this, y) },
    css: mn(l(this, y)),
    hex: _e(l(this, y))
  };
  this.dispatchEvent(
    new CustomEvent("change", {
      detail: t,
      bubbles: !0,
      composed: !0
    })
  );
};
customElements.get("pretty-color-picker") || customElements.define("pretty-color-picker", wo);
export {
  Hi as DEFAULT_COLOR,
  Ni as DEFAULT_PICKER_LABEL,
  wo as PrettyColorPicker,
  Be as formatFieldsFor,
  R as normalizeOklch,
  xe as oklchFromCss,
  mn as oklchToCss,
  _e as oklchToHex,
  Qs as oklchToRgbString,
  Pi as parseFormatFields
};
