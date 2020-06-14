import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p-auth-container',
  scoped: true,
})
export class AuthContainer {
  render() {
    return (
      <Host>
        <h2>Auth</h2>
      </Host>
    );
  }
}
