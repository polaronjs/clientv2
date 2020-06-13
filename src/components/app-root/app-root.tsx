import { Component, h } from '@stencil/core';
import { authState } from '../../stores/auth';

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
        {authState.loggedIn ? <app-main></app-main> : <app-auth></app-auth>}
      </main>
    );
  }
}
