import { Component, Host, h, Prop, Element } from '@stencil/core';
import { Swipe } from '../../shared/swipe/swipe';
import { windowState } from '../../../stores/window';
import classnames from 'classnames';
import { SwipeHandlerStore } from '../../shared/swipe/handler';
import { normalize } from '../../../utils/normalize';
import { vars } from '../../../stores/vars';
import { RouterHistory, injectHistory } from '@stencil/router';

const mobileMenuThreshold = 1200; // pixels

@Component({
  tag: 'p-container-main',
  styleUrl: 'styles.scss',
  scoped: true,
})
export class MainContainer {
  mobileMenuElement: HTMLElement;
  menuIsOpen: boolean;

  menuXClamp = { min: -1 * vars.sidebarWidth.value, max: 0 };
  menuXPos: number = -1 * vars.sidebarWidth.value;

  sidebarTimeout: NodeJS.Timer;

  // this is unused and only declared to inject the router history
  @Element() el: HTMLElement;
  @Prop() history: RouterHistory;

  private readonly swipeHandler = new SwipeHandlerStore({
    onTouchStart: (event: TouchEvent) => {
      if (
        event.touches[0].pageX < 30 ||
        event.touches[0].pageX > window.innerWidth - 30
      ) {
        event.preventDefault();
      }
    },
    onTouchMove: (event: TouchEvent, swipe: Swipe) => {
      event.preventDefault();
      event.stopPropagation();

      if (this.isMobile && windowState.width <= mobileMenuThreshold) {
        const newXPos = this.menuXPos + swipe.velocity;

        if (newXPos <= 0 && newXPos > -1 * vars.sidebarWidth.value) {
          this.menuXPos = newXPos;

          this.mobileMenuElement.style.setProperty(
            'transform',
            `translateX(${this.menuXPos}px)`
          );

          this.mobileMenuElement.style.setProperty('opacity', '1');
        }
      }
    },
    onTouchEnd: (_, swipe) => {
      const shouldComplete =
        swipe.velocity > 12 ||
        Math.abs(swipe.distance / vars.sidebarWidth.value) > 0.3;

      // derive an animation duration from the current swipe distance, normalized to between 180ms and 300ms
      const animationDuration = normalize(
        180,
        300,
        this.menuXClamp.max,
        Math.abs(this.menuXClamp.min),
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
        `all ${duration / 1000}s ease`
      );

      clearTimeout(this.sidebarTimeout);
      this.sidebarTimeout = setTimeout(() => {
        this.mobileMenuElement.style.removeProperty('transition');
      }, duration);
    }

    this.menuXPos = this.menuXClamp.max;
    this.menuIsOpen = true;

    this.mobileMenuElement.style.setProperty('opacity', '1');
    this.mobileMenuElement.style.setProperty(
      'transform',
      `translateX(${this.menuXPos}px)`
    );
  }

  closeMenu(duration = 0) {
    if (duration) {
      this.mobileMenuElement.style.setProperty(
        'transition',
        `all ${duration / 1000}s ease`
      );

      clearTimeout(this.sidebarTimeout);
      this.sidebarTimeout = setTimeout(() => {
        this.mobileMenuElement.style.removeProperty('transition');
        this.mobileMenuElement.style.setProperty('opacity', '0');
      }, duration);
    } else {
      this.mobileMenuElement.style.setProperty('opacity', '0');
    }

    this.menuXPos = this.menuXClamp.min;
    this.menuIsOpen = false;

    this.mobileMenuElement.style.setProperty(
      'transform',
      `translateX(${this.menuXPos}px)`
    );
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

  componentDidLoad() {
    this.history.listen(() => {
      if (this.isMobile) {
        this.closeMenu(300);
      }
    });
  }

  render() {
    return (
      <Host>
        <p-swipe handlers={[this.swipeHandler]}>
          <div class="main-wrapper">
            <div
              ref={(el: HTMLElement) => (this.mobileMenuElement = el)}
              class={classnames('main__left', {
                'main__left--mobile': this.isMobile,
              })}
            >
              <p-main-sidebar />
            </div>
            <div
              class={classnames('main__right', {
                'main__right--mobile': this.isMobile,
              })}
            >
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/articles" component="p-page-articles" />
                <stencil-route
                  url="/categories"
                  component="p-page-categories"
                />
                <stencil-route url="/files" component="p-page-files" />
                <stencil-route url="/users" component="p-page-users" />
                <stencil-route url="/settings" component="p-page-settings" />
                <stencil-route url="/metrics" component="p-page-metrics" />
                <stencil-route
                  // catch all, redirect to /articles
                  routeRender={() => {
                    return <stencil-router-redirect url="/articles" />;
                  }}
                />
              </stencil-route-switch>
            </div>
          </div>
        </p-swipe>
      </Host>
    );
  }
}

injectHistory(MainContainer);
