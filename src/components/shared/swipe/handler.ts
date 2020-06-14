import { Swipe } from './swipe';

export type SwipeDirection = -1 | 0 | 1;
export type SwipeAxis = 'x' | 'y';

export interface SwipeHandler {
  onTouchStart?: (event: TouchEvent) => void;
  onTouchMove?: (event: TouchEvent, swipe: Swipe) => void;
  onTouchEnd?: (event: TouchEvent, swipe: Swipe) => void;
  axis?: SwipeAxis;
  direction?: SwipeDirection;
}

const defaultSwipeHandlerParams = {
  axis: 'x',
  direction: 0,
};

export class SwipeHandlerStore {
  constructor(private handler: SwipeHandler) {
    Object.assign(this.handler, defaultSwipeHandlerParams);
  }

  isElligibleForSwipe(swipe: Swipe): boolean {
    return (
      (this.handler.direction === 0 ||
        this.handler.direction === swipe.direction) &&
      this.handler.axis === swipe.axis
    );
  }

  onTouchStart = this.handler.onTouchStart;

  onTouchMove = this.handler.onTouchMove;

  onTouchEnd = this.handler.onTouchEnd;
}
