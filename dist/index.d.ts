export declare interface ColorChangeDetail {
    color: OklchColor;
    css: string;
    hex: string;
}

export declare type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'oklch';

export declare const DEFAULT_COLOR: OklchColor;

export declare interface FormatField {
    key: string;
    label: string;
    value: string;
    min?: number;
    max?: number;
    step?: number;
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

export declare type PickerHeaderAction = 'close' | 'theme';

export declare type PickerPlaneMode = 'oklch' | 'hsl' | 'rgb';

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
    get movable(): boolean;
    set movable(value: boolean);
    /** Last Used swatch grid — on by default; set `history="false"` to hide. */
    get history(): boolean;
    set history(value: boolean);
}

export declare interface ThemeChangeDetail {
    theme: 'dark' | 'light';
}

export { }
