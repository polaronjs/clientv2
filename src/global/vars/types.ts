interface Variable {
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

  mutateHue(
    { hue, save }: { hue: number; save?: boolean } = {
      hue: undefined,
      save: false,
    }
  ) {
    if (!hue) {
      throw new Error('Cannot set hue as undefined.');
    }

    const newHue = Math.min(Math.max(0, hue), 360);

    if (save) {
      this.hue = newHue;
    }

    return this.toString({ hue: newHue });
  }

  lighten(
    { amount, save }: { amount: number; save?: boolean } = {
      amount: 10,
      save: false,
    }
  ) {
    const newLightness = Math.min(Math.max(0, this.lightness + amount), 360);

    if (save) {
      this.lightness = newLightness;
    }

    return this.toString({ lightness: newLightness });
  }

  mutateAlpha(
    { alpha, save }: { alpha: number; save?: boolean } = {
      alpha: 1,
      save: false,
    }
  ) {
    alpha = alpha > 1 ? alpha / 100 : alpha;

    const newAlpha = Math.min(Math.max(0, alpha), 1);

    if (save) {
      this.alpha = newAlpha;
    }

    return this.toString({ alpha: newAlpha });
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
