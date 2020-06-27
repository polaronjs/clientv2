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
        <stencil-route-switch>
          <stencil-route
            url="/articles/:articleId"
            component={'p-page-new-article'}
          />
          <stencil-route />
        </stencil-route-switch>
      </Host>
    );
  }
}
