import { Component, Host, h, State, Listen } from '@stencil/core';
import { ModalPayload, ModalSubscription, ModalService } from './modal-service';
import { animation } from './animations';

@Component({
  tag: 'p-modal-container',
  styleUrl: 'styles.scss',
  scoped: true,
})
export class ModalContainer {
  // an object containing the unsubscribe function for the current subscription
  private subscription: ModalSubscription;

  // the type and body of the modal
  @State() payload: ModalPayload;

  renderPayload(target: HTMLElement) {
    // append the payload to the modal body element
    if (this.payload) {
      target.appendChild(this.payload.element);
    }
  }

  @Listen('keyup', { target: 'window' })
  close(event?: KeyboardEvent) {
    if (event && event.key !== 'Escape') {
      return;
    }

    ModalService.close();
  }

  componentDidLoad() {
    // establish subscription to service
    this.subscription = ModalService.subscribe((payload) => {
      // set the payload in component state. This will trigger a rerender, which will load the .modal__body
      // element. When that element has finished rendering to the DOM, it will trigger the renderPayload function from its
      // ref property
      this.payload = payload;
    });
  }

  componentDidUnload() {
    // unsubscribe from service when component has left the view
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <Host>
        {this.payload && (
          <animation-container animation={animation}>
            <div onClick={() => this.close()} class="modal">
              <div
                onClick={(event) => event.stopPropagation()}
                ref={(el) => this.renderPayload(el)}
                class="modal__body"
              ></div>
            </div>
          </animation-container>
        )}
      </Host>
    );
  }
}
