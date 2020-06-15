import { Component, h, Listen, Element, Prop } from '@stencil/core';
import { Swipe, Point } from './swipe';
import { SwipeHandlerStore } from './handler';

@Component({
  tag: 'p-swipe',
  scoped: true,
})
export class PolaronSwipe {
  @Element() host: HTMLElement;

  ignore: boolean;
  initialPosition: Point;
  swipe: Swipe;
  touchWillEnd: Promise<void>;

  @Prop() handlers: SwipeHandlerStore[] = [];

  @Listen('touchstart', { target: this.host, passive: false })
  handleTouchStart(event: TouchEvent) {
    if (event.touches.length > 1) {
      // this is a multi touch, noop
      this.ignore = true;
      return;
    }

    this.initialPosition = {
      x: event.touches.item(0).clientX,
      y: event.touches.item(0).clientY,
    };

    this.handlers.forEach((handler) => {
      if (handler.onTouchStart) {
        handler.onTouchStart(event);
      }
    });
  }

  @Listen('touchmove', { target: this.host, passive: false })
  handleTouchMove(event: TouchEvent) {
    if (!this.ignore) {
      const point = {
        x: event.touches.item(0).clientX,
        y: event.touches.item(0).clientY,
      };

      if (!this.swipe) {
        const swipe = Swipe.from(this.initialPosition, point);

        if (this.handlers.filter((h) => h.isElligibleForSwipe(swipe)).length) {
          // a handler was specified for a swipe of this type, do not ignore this swipe
          this.swipe = swipe;
        } else {
          // there's no handler for this swipe, this swipe should be ignored
          this.ignore = true;
          return;
        }
      } else {
        this.swipe.updatePosition(point);
      }

      this.handlers.forEach((handler) => {
        if (
          this.swipe &&
          handler.isElligibleForSwipe(this.swipe) &&
          handler.onTouchMove
        ) {
          handler.onTouchMove(event, this.swipe);
        }
      });
    }
  }

  @Listen('touchend', { target: this.host })
  handleTouchEnd(event: TouchEvent) {
    this.handlers.forEach((handler) => {
      if (
        this.swipe &&
        handler.isElligibleForSwipe(this.swipe) &&
        handler.onTouchEnd
      ) {
        handler.onTouchEnd(event, this.swipe);
      }
    });

    this.swipe = null;
    this.initialPosition = null;
    this.ignore = false;
  }

  render() {
    return <slot></slot>;
  }
}
