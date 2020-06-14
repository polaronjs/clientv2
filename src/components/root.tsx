import { Component, h } from '@stencil/core';
import { authState } from '../stores/auth';

@Component({
  tag: 'app-root',
})
export class AppRoot {
  constructor() {}

  render() {
    return (
      <stencil-router>
        <main>
          {authState.loggedIn ? <p-container-main /> : <p-container-main />}
        </main>
      </stencil-router>
    );
  }
}
