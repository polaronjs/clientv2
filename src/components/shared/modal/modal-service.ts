export enum ModalType {
  DIALOG = 'dialog',
  CONTENT = 'content',
}

export type ModalPayload = {
  element: HTMLElement;
  type?: ModalType;
};

export type ModalCallback = (payload: ModalPayload) => void;

export type ModalSubscription = { unsubscribe: () => void };

export class ModalService {
  private static subscriptions: Set<ModalCallback> = new Set();

  public static isModalOpen: boolean;

  public static subscribe(callback: ModalCallback): ModalSubscription {
    this.subscriptions.add(callback);

    return { unsubscribe: () => this.subscriptions.delete(callback) };
  }

  public static create(payload: ModalPayload) {
    if (!this.isModalOpen && this.subscriptions.size) {
      this.isModalOpen = true;
      this.subscriptions.forEach((callback) => callback(payload));
    }
  }

  public static close() {
    if (this.isModalOpen) {
      this.isModalOpen = false;
      this.subscriptions.forEach((callback) => callback(null));
    }
  }
}
