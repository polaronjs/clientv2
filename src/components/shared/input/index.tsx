import {
  Component,
  Host,
  h,
  Prop,
  EventEmitter,
  Event,
  State,
} from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'p-text-field',
  styleUrl: 'styles.scss',
  scoped: true,
})
export class Input {
  @Event() change: EventEmitter<string>;

  @Prop() name!: string;
  @Prop() label: string;
  @Prop() value: string;
  @Prop() type: string;
  @Prop() placeholder: string;
  @Prop() error: string;
  @Prop() readonly: boolean;
  @Prop() disabled: boolean;
  @Prop() block: boolean;

  @State() touched: boolean;
  @State() focused: boolean;

  get hasError() {
    return this.touched && !!this.error;
  }

  render() {
    return (
      <Host>
        <div
          class={classnames('input', {
            'input--disabled': this.disabled,
            'input--block': this.block,
            'input--error': this.hasError,
          })}
        >
          {!!this.label && <label htmlFor={this.name}>{this.label}</label>}
          <input
            name={this.name}
            type={this.type}
            value={this.value}
            placeholder={this.placeholder}
            disabled={this.disabled}
            readOnly={this.readonly}
            onFocus={() => {
              this.focused = true;
            }}
            onBlur={() => {
              this.touched = true;
              this.focused = false;
            }}
            onInput={(event) =>
              this.change.emit((event.target as HTMLInputElement).value)
            }
          />
          {this.hasError && <div class="input__error">{this.error}</div>}
        </div>
      </Host>
    );
  }
}
