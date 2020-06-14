import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p-page-settings',
  scoped: true,
})
export class SettingsPage {
  render() {
    return (
      <Host>
        <h2>Settings Page</h2>
      </Host>
    );
  }
}
