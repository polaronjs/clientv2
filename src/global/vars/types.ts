export interface Variable {
  toString(): string;
}

export class StructureVariable implements Variable {
  constructor(public value: number, public units: string) {}

  toString() {
    return this.value + this.units;
  }
}

export class ColorVariable implements Variable {
  constructor(
    private hue: number,
    private saturation: number,
    private lightness: number,
    private alpha: number = 1
  ) {}

  mutateHue(hue: number) {
    const newHue = Math.min(Math.max(0, hue), 360);
    return new ColorVariable(
      newHue,
      this.saturation,
      this.lightness,
      this.alpha
    );
  }

  lighten(amount) {
    const newLightness = Math.min(Math.max(0, this.lightness + amount), 360);
    return new ColorVariable(
      this.hue,
      this.saturation,
      newLightness,
      this.alpha
    );
  }

  mutateAlpha(alpha: number) {
    alpha = alpha > 1 ? alpha / 100 : alpha;

    const newAlpha = Math.min(Math.max(0, alpha), 1);
    return new ColorVariable(
      this.hue,
      this.saturation,
      this.lightness,
      newAlpha
    );
  }

  toString(data: { hue?: number; lightness?: number; alpha?: number } = {}) {
    return `hsla(${useFirstDefined(data.hue, this.hue)}, ${
      this.saturation
    }%, ${useFirstDefined(data.lightness, this.lightness)}%, ${useFirstDefined(
      data.alpha,
      this.alpha
    )})`;
  }
}

const useFirstDefined = (...values: any[]) => {
  for (const value of values) {
    if (typeof value !== 'undefined') {
      return value;
    }
  }
};
