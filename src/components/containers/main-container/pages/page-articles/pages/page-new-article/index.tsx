import { Component, Host, h } from '@stencil/core';
import { RouterHistory, MatchResults, injectHistory } from '@stencil/router';
@Component({
  tag: 'p-page-new-article',
  styleUrl: 'styles.scss',
  scoped: true,
})
export class NewArticlePage {
  history: RouterHistory;
  match: MatchResults;

  close() {
    this.history.replace('/articles');
  }

  render() {
    return <Host>Articles page here</Host>;
  }
}

injectHistory(NewArticlePage);
