import { Component, Host, h } from '@stencil/core';
import { Icon } from '../../../icon';
import { ModalService } from '../../modal-service';

@Component({
  tag: 'p-modal-dialog',
  styleUrl: 'styles.scss',
  scoped: true,
})
export class DialogModalComponent {
  render() {
    return (
      <Host>
        <div class="dialog">
          <div class="dialog__title">
            <h4>
              <slot name="title" />
            </h4>
            <button onClick={() => ModalService.close()} class="title__close">
              <Icon weight="light" name="times" />
            </button>
          </div>
          <div class="dialog__message">
            <slot />
          </div>
          <div class="dialog__actions">
            <slot name="actions" />
          </div>
        </div>
      </Host>
    );
  }
}
