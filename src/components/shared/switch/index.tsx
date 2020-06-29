import { Component, Host, h, Prop } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'p-switch',
  styleUrl: 'styles.scss',
  scoped: true,
})
export class Switch {
  @Prop() disabled: boolean;
  @Prop() selected: boolean;
  @Prop() label: string;

  render() {
    return (
      <Host>
        <button
          class={classnames(
            { 'switch--selected': this.selected },
            { 'switch--disabled': this.disabled }
          )}
          onClick={(event) => this.disabled && event.stopPropagation()}
        >
          {this.label && <span>{this.label}</span>}
          <div class="switch">
            <div class="switch__fob"></div>
          </div>
        </button>
      </Host>
    );
  }
}
