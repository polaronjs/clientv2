import { Component, h } from '@stencil/core';
import { authState } from '../stores/auth';

@Component({
  tag: 'app-root',
})
export class AppRoot {
  constructor() {}

  render() {
    if (!authState.loggedIn) {
      return (
        <main>
          <p-container-auth />
          <p-modal-container />
        </main>
      );
    } else {
      return (
        <main>
          <stencil-router>
            <p-container-main />
            <p-modal-container />
          </stencil-router>
        </main>
      );
    }
  }
}
