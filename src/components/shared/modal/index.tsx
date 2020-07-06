import { Component, Host, Event, EventEmitter, h } from '@stencil/core';
import { animation } from './animations';
import { EntryPortal } from '../portal';
import { ButtonGroup } from '../button-group';

@Component({
  tag: 'p-modal',
  styleUrl: 'styles.scss',
  shadow: true,
})
export class ModalComponent {
  @Event() close: EventEmitter<void>;

  render() {
    return (
      <Host>
        <EntryPortal>
          <animation-container animation={animation}>
            <div onClick={() => this.close.emit()} class="modal">
              <div
                onClick={(event) => event.stopPropagation()}
                class="modal__body"
              >
                <p-modal-dialog>
                  <div slot="title">This is a modal</div>
                  <span>This is a test of the modal component</span>
                  <ButtonGroup flow="right" slot="actions">
                    <p-button>Primary</p-button>
                    <p-button typeName="link">Secondary</p-button>
                  </ButtonGroup>
                </p-modal-dialog>
              </div>
            </div>
          </animation-container>
        </EntryPortal>
      </Host>
    );
  }
}
