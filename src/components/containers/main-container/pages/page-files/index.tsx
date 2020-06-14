import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p-page-files',
  scoped: true,
})
export class FilesPage {
  render() {
    return (
      <Host>
        <h2>Files Page</h2>
      </Host>
    );
  }
}
