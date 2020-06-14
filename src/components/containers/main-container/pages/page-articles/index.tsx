import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p-page-articles',
  scoped: true,
})
export class ArticlesPage {
  render() {
    return (
      <Host>
        <h2>Articles Page</h2>
      </Host>
    );
  }
}
