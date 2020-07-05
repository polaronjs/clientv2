import { Component, Host, h, Prop, State, Element } from '@stencil/core';
import classnames from 'classnames';

export type ButtonType = 'solid' | 'link';

export type ButtonStyle = 'primary' | 'danger' | 'success';

export type ButtonSize = 'small' | 'default' | 'large';

@Component({
  tag: 'p-button',
  styleUrl: 'styles.scss',
  shadow: true,
})
export class Button {
  @Element() host: HTMLElement;

  @Prop() size: ButtonSize = 'default';
  @Prop() typeName: ButtonType = 'solid';
  @Prop() styleName: ButtonStyle = 'primary';
  @Prop() block: boolean;
  @Prop() disabled: boolean;

  @State() private hasIcon: boolean;

  componentDidLoad() {
    // FIXME anyway we can kill this extra render?
    // we'll trigger a single rerender to adjust styling if an icon was passed
    const slot = this.host.shadowRoot.querySelector(
      'slot[name=icon]'
    ) as HTMLSlotElement;

    if (slot?.assignedElements().length) {
      this.hasIcon = true;
    }
  }

  render() {
    return (
      <Host>
        <button
          class={classnames(
            'button',
            { 'button--icon': this.hasIcon },
            { 'button--disabled': this.disabled },
            `button--type-${this.typeName}`,
            `button--style-${this.styleName}`,
            `button--size-${this.size}`
          )}
          disabled={this.disabled}
        >
          <slot />
          <span class="button__icon">
            <slot name="icon" />
          </span>
        </button>
      </Host>
    );
  }
}
