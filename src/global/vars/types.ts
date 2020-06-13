interface Variable {
  toString(): string;
}

export class StructureVariable implements Variable {
  constructor(private value: number, private units: string) {}

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

  toString() {
    return `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha})`;
  }

  toRGBString() {
    throw new Error('Not yet implemented');
  }

  toHexString() {
    throw new Error('Not yet implemented');
  }
}

export const createStringVariable = (value: string) => ({
  toString: () => value,
});
