import {
  Component,
  Host,
  Element,
  Event,
  h,
  EventEmitter,
} from '@stencil/core';
import { ModalService, ModalSubscription } from './modal-service';

@Component({
  tag: 'p-modal',
  styleUrl: 'styles.scss',
  shadow: true,
})
export class Modal {
  @Event() private close: EventEmitter<void>;

  @Element() private host: HTMLElement;

  private subscription: ModalSubscription;

  private handleClose() {
    // trigger close event in container component
    ModalService.close();

    // emit close to this component's parent
    this.close.emit();

    // unsubscribe
    this.subscription.unsubscribe();
  }

  componentDidLoad() {
    const element = this.host.shadowRoot
      .querySelector('slot')
      .assignedNodes()[0] as HTMLElement;

    ModalService.create({ element });

    this.subscription = ModalService.subscribe((payload) => {
      if (payload === null) {
        this.handleClose();
      }
    });
  }

  componentDidUnload() {
    if (ModalService.isModalOpen) {
      this.handleClose();
    }
  }

  render() {
    return (
      <Host style={{ fontSize: '1rem', display: 'none' }}>
        <slot />
      </Host>
    );
  }
}
