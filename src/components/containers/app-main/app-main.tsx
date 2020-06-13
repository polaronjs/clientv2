import { Component, Host, h } from '@stencil/core';
import { Swipe } from '../../extras/app-swipe/swipe';
import { windowState } from '../../../stores/window';
import classnames from 'classnames';
import { SwipeHandlerStore } from '../../extras/app-swipe/handler';
import { normalize } from '../../../utils/normalize';

const mobileMenuThreshold = 1200; // pixels

@Component({
  tag: 'app-main',
  styleUrl: 'app-main.scss',
  shadow: true,
})
export class AppMain {
  mobileMenuElement: HTMLElement;
  menuIsOpen: boolean;

  private readonly swipeHandler = new SwipeHandlerStore({
    onTouchMove: (event: TouchEvent, swipe: Swipe) => {
      event.preventDefault();
      event.stopPropagation();

      if (this.isMobile && windowState.width <= mobileMenuThreshold) {
        const elementWidth = this.mobileMenuElement.getBoundingClientRect()
          .width;

        const currentTransformMatrix = window
          .getComputedStyle(this.mobileMenuElement)
          .getPropertyValue('transform');

        const currentXTranslation = currentTransformMatrix
          .split(', ')
          .slice(-2, -1)[0];

        const newXTranslation = parseInt(currentXTranslation) + swipe.velocity;

        if (newXTranslation <= 0 && newXTranslation > -1 * elementWidth) {
          this.mobileMenuElement.style.setProperty(
            'transform',
            `translateX(${newXTranslation}px)`
          );
        }
      }
    },
    onTouchEnd: (_, swipe) => {
      const elementWidth = this.mobileMenuElement.getBoundingClientRect().width;
      const shouldComplete =
        swipe.velocity > 12 || Math.abs(swipe.distance / elementWidth) > 0.3;

      // derive an animation duration from the current swipe distance, normalized to between 180ms and 300ms
      const animationDuration = normalize(
        180,
        300,
        0,
        380,
        Math.abs(swipe.distance)
      );

      if (shouldComplete) {
        // now we know this action is auto completable
        if (swipe.direction === -1) {
          this.closeMenu(animationDuration);
        } else if (swipe.direction === 1) {
          this.openMenu(animationDuration);
        }
      } else {
        // return to previous state
        if (this.menuIsOpen) {
          this.openMenu(animationDuration);
        } else {
          this.closeMenu(animationDuration);
        }
      }
    },
  });

  openMenu(duration = 0) {
    if (duration) {
      this.mobileMenuElement.style.setProperty(
        'transition',
        `transform ${duration / 1000}s ease`
      );
    }

    setTimeout(() => {
      this.mobileMenuElement.style.removeProperty('transition');
    }, duration);

    this.mobileMenuElement.style.setProperty('transform', 'translateX(0px)');

    this.menuIsOpen = true;
  }

  closeMenu(duration = 0) {
    const elementWidth = this.mobileMenuElement.getBoundingClientRect().width;

    if (duration) {
      this.mobileMenuElement.style.setProperty(
        'transition',
        `transform ${duration / 1000}s ease`
      );
    }

    setTimeout(() => {
      this.mobileMenuElement.style.removeProperty('transition');
    }, duration);

    this.mobileMenuElement.style.setProperty(
      'transform',
      `translateX(${elementWidth * -1}px)`
    );

    this.menuIsOpen = false;
  }

  get isMobile(): boolean {
    return windowState.width <= mobileMenuThreshold;
  }

  componentWillUpdate() {
    if (!this.isMobile) {
      // reset the menu when resizing the window past the
      this.mobileMenuElement.style.removeProperty('transform');
    }
  }

  render() {
    return (
      <Host>
        <app-swipe handlers={[this.swipeHandler]}>
          <div class="main-wrapper">
            <div
              ref={(el: HTMLElement) => (this.mobileMenuElement = el)}
              class={classnames('main__left', {
                'main__left--mobile': this.isMobile,
              })}
            >
              {/* TODO Create a sidebar component */}
            </div>
            <div
              class={classnames('main__right', {
                'main__right--mobile': this.isMobile,
              })}
            >
              {/* TODO Insert a router here */}
            </div>
          </div>
        </app-swipe>
      </Host>
    );
  }
}
