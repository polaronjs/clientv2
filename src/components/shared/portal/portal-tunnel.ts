import { VNode } from '@stencil/core';

export class PortalTunnel {
  private static items: Map<string, VNode> = new Map();
  private static callbacks: Map<
    'create' | 'destroy',
    (payload: Map<string, VNode>) => void
  > = new Map();

  static create(payload: VNode[]) {
    const currentSize = this.items.size;
    payload.forEach((p) => {
      this.items.set(JSON.stringify(p), p);
    });

    if (this.items.size !== currentSize) {
      // this is a new item, add to DOM

      // pass to the exit portal
      this.callbacks.forEach((callback, key) => {
        if (key === 'create') {
          callback(this.items);
        }
      });
    }
  }

  static destroy(payload: VNode[]) {
    const currentSize = this.items.size;
    payload.forEach((p) => this.items.delete(JSON.stringify(p)));

    if (this.items.size !== currentSize) {
      // signal the exit portal to destroy the payload
      this.callbacks.forEach((callback, key) => {
        if (key === 'destroy') {
          callback(this.items);
        }
      });
    }
  }

  static on(
    event: 'create' | 'destroy',
    callback: (payload: Map<string, VNode>) => void
  ) {
    this.callbacks.set(event, callback);
  }
}
