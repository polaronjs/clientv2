import { Component, Host, h, State, VNode } from '@stencil/core';
import { PortalTunnel } from './portal-tunnel';

@Component({
  tag: 'p-exit-portal',
  scoped: true,
})
export class ExitPortal {
  @State() items: VNode[];

  constructor() {
    PortalTunnel.on('create', (items) => this.setItems(items));
    PortalTunnel.on('destroy', (items) => this.setItems(items));
  }

  private setItems(set: Map<string, VNode>) {
    const items = [];
    set.forEach((item) => items.push(item));
    this.items = items;
  }

  render() {
    return <Host>{this.items}</Host>;
  }
}
