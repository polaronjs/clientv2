import { SwipeAxis, SwipeDirection } from './handler';

export type Point = {
  x: number;
  y: number;
};

export class Swipe {
  distance: number = 0;
  velocity: number = 0;

  constructor(
    public axis: SwipeAxis,
    public direction: SwipeDirection,
    private position: Point
  ) {}

  updatePosition(p2: Point) {
    let distanceTraveled = (this.position[this.axis] - p2[this.axis]) * -1;

    if (distanceTraveled / this.direction < 0) {
      this.direction *= -1;
    }

    this.velocity = distanceTraveled;
    this.distance += distanceTraveled;

    this.position = p2;
  }

  static from(p1: Point, p2: Point): Swipe {
    const xDiff = p1.x - p2.x;
    const yDiff = p1.y - p2.y;

    const axis = Math.abs(xDiff) > Math.abs(yDiff) ? 'x' : 'y';
    const axisDiff = axis === 'x' ? xDiff : yDiff;
    const multiplier = axisDiff > 0 ? -1 : 1;

    return new Swipe(axis, multiplier, p2);
  }
}
