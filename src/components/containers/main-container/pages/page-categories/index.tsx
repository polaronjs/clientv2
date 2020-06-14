import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p-page-categories',
  scoped: true,
})
export class CategoriesPage {
  render() {
    return (
      <Host>
        <h2>Categories Page</h2>
      </Host>
    );
  }
}
