import { Component, h } from '@stencil/core';
import { authState } from '../stores/auth';

@Component({
  tag: 'app-root',
})
export class AppRoot {
  render() {
    const isDev = process.env.NODE_ENV === 'development';

    return (
      <main>
        <stencil-router>
          <stencil-route-switch>
            {isDev && (
              <stencil-route
                url="/components-demo"
                component="p-components-demo"
              />
            )}
            <stencil-route
              routeRender={() =>
                authState.loggedIn ? <p-container-main /> : <p-container-auth />
              }
            />
          </stencil-route-switch>
        </stencil-router>
        <p-exit-portal />
      </main>
    );
  }
}
