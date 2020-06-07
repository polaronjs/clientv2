import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: './app-root.scss',
  shadow: true,
})
export class AppRoot {
  constructor() {}

  render() {
    return (
      <main>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0} />
        </stencil-router>
      </main>
    );
  }
}
