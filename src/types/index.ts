export type FillOption = string | { gradient: string[], rotate?: number } | { image: string };
export type Glow = { strength: number, color: string };
export type FrequncyBand = "base" | "lows" | "mids" | "highs";

export interface IBaseOptions {
    glow?: Glow;
    lineColor?: FillOption;
    lineWidth?: number;
}

export interface IHasRoundedLine {
    rounded?: boolean;
}

export interface IHasDiameter {
    diameter?: number;
}

export interface IHasFillColor {
    fillColor?: FillOption;
}

export interface IHasFrequency {
    frequencyBand?: FrequncyBand;
}

export interface IHasCount {
    count?: number;
}

export interface IHasRadius {
    radius?: number;
}

export interface IHasRotation {
    rotate?: number;
}

export interface IHasGap {
    gap?: number;
}

export interface IHasMirrorX {
    mirroredX?: boolean;
}

export interface IHasLocation extends IHasMirrorX {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    center?: boolean;
    mirroredY?: boolean;
}

export interface IHasCubes {
    cubeHeight?: number;
}

export interface IArcOptions extends IBaseOptions, IHasRoundedLine {}

export interface ICircleOptions extends IBaseOptions, IHasFillColor {}

export interface ILineOptions extends IBaseOptions, IHasRoundedLine {}

export interface IPolygonOptions extends IBaseOptions, IHasFillColor, IHasRoundedLine {}

export interface IRectangleOptions extends IBaseOptions, IHasFillColor, IHasRoundedLine, IHasRadius {}

/* external options for each animation */

export interface IGlobOptions extends IPolygonOptions, IHasCount, IHasDiameter, IHasFrequency, IHasMirrorX {}

export interface ILinesOptions extends ILineOptions, IHasCount, IHasFrequency, IHasLocation {}

export interface IShineOptions extends ILineOptions, IHasCount, IHasFrequency, IHasDiameter, IHasRotation {
    offset?: boolean;
}

export interface ISquareOptions extends ILineOptions, IHasCount, IHasDiameter, IHasFrequency {}

export interface ITurntableOptions extends IPolygonOptions, IHasCount, IHasCubes, IHasDiameter, IHasGap, IHasFrequency, IHasRotation {}

export interface IWaveOptions extends IPolygonOptions, IHasCount, IHasFrequency, IHasLocation {}

export interface IAnimation {
    draw: (audioBufferData: Uint8Array, canvasElement: CanvasRenderingContext2D) => void;
}

