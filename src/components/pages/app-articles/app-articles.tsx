import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-articles',
  shadow: true,
})
export class AppMain {
  render() {
    return (
      <Host>
        <h1>Articles Page</h1>
      </Host>
    );
  }
}
