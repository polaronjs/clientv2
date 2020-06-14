import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p-page-metrics',
  scoped: true,
})
export class MetricsPage {
  render() {
    return (
      <Host>
        <h2>Metrics Page</h2>
      </Host>
    );
  }
}
