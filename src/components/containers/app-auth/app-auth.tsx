import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-auth',
  shadow: true,
})
export class AppAuth {
  render() {
    return (
      <Host>
        <h1>Auth</h1>
      </Host>
    );
  }
}
