export declare interface ColorChangeDetail {
    color: OklchColor;
    css: string;
    hex: string;
}

export declare type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'oklch';

export declare const DEFAULT_COLOR: OklchColor;

export declare const DEFAULT_PICKER_LABEL = "Pretty Color Picker";

export declare interface FormatField {
    key: string;
    label: string;
    value: string;
    min?: number;
    max?: number;
    step?: number;
    /** Label-scrub sensitivity (value units per pixel). */
    scrubStep?: number;
    suffix?: string;
}

export declare function formatFieldsFor(color: OklchColor, format: ColorFormat): FormatField[];

export declare function normalizeOklch(color: Partial<OklchColor>): OklchColor;

/** Internal color representation — always OKLCH (L, C, H, alpha). */
export declare interface OklchColor {
    l: number;
    c: number;
    h: number;
    alpha: number;
}

export declare function oklchFromCss(input: string): OklchColor | null;

export declare function oklchToCss(color: OklchColor): string;

export declare function oklchToHex(color: OklchColor): string;

export declare function oklchToRgbString(color: OklchColor): string;

export declare function parseFormatFields(format: ColorFormat, fields: Record<string, string>, current: OklchColor): OklchColor | null;

export declare type PickerHeaderAction = 'close' | 'theme' | 'none';

export declare type PickerTheme = 'dark' | 'light' | 'system';

export declare class PrettyColorPicker extends HTMLElement {
    #private;
    static get observedAttributes(): string[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
    get value(): string;
    set value(v: string);
    get color(): OklchColor;
    set color(c: OklchColor);
    get theme(): PickerTheme;
    set theme(value: PickerTheme);
    get headerAction(): PickerHeaderAction;
    set headerAction(value: PickerHeaderAction);
    /** Panel header title. Default `Pretty Color Picker`. Set `label=""` to hide. */
    get label(): string;
    set label(value: string);
    get movable(): boolean;
    set movable(value: boolean);
    /** `inline` (default) or `popover` for a floating panel anchored to `anchor`. */
    get mode(): 'inline' | 'popover';
    set mode(value: 'inline' | 'popover');
    get popoverMode(): boolean;
    /** CSS selector or element id for the popover trigger (e.g. `#btn` or `.trigger`). */
    get anchor(): string | null;
    set anchor(value: string | null);
    get open(): boolean;
    set open(value: boolean);
    show(): void;
    hide(): void;
    toggle(): void;
    /** Last Used swatch grid — on by default; set `history="false"` to hide. */
    get history(): boolean;
    set history(value: boolean);
}

export declare interface ThemeChangeDetail {
    theme: 'dark' | 'light';
}

export { }
