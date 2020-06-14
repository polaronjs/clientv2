import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p-page-users',
  scoped: true,
})
export class UsersPage {
  render() {
    return (
      <Host>
        <h2>Users Page</h2>
      </Host>
    );
  }
}
