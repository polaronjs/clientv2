import { Component, Host, h, State } from '@stencil/core';
import { Icon } from '../../../../shared/icon';
import { authState } from '../../../../../stores/auth';

@Component({
  tag: 'p-main-sidebar',
  styleUrl: 'styles.scss',
  scoped: false,
})
export class MainSidebar {
  @State() modalOpen: boolean;

  render() {
    return (
      <Host>
        {/* we add an id here for added specificity since this component isn't scoped */}
        <div id="polaronSidebar" class="sidebar">
          <div>
            <p-logo onClick={() => (this.modalOpen = true)} />

            <div class="sidebar__menu">
              <div class="menu__list-header">Content</div>
              <ul>
                <stencil-route-link url="/articles">
                  <li>
                    <Icon name="newspaper" />
                    Articles
                  </li>
                </stencil-route-link>
                <stencil-route-link url="/categories">
                  <li>
                    <Icon name="layer-group" />
                    Categories
                  </li>
                </stencil-route-link>
                <stencil-route-link url="/files">
                  <li>
                    <Icon name="folder-tree" />
                    Files
                  </li>
                </stencil-route-link>
                <stencil-route-link url="/users">
                  <li>
                    <Icon name="users" />
                    Users
                  </li>
                </stencil-route-link>
              </ul>
              <div class="menu__list-header">Site</div>
              <ul>
                <stencil-route-link url="/settings">
                  <li>
                    <Icon name="cog" />
                    Settings
                  </li>
                </stencil-route-link>
                <stencil-route-link url="/metrics">
                  <li>
                    <Icon name="chart-line" />
                    Metrics
                  </li>
                </stencil-route-link>
              </ul>
            </div>
          </div>

          <div class="sidebar__user-menu">
            <p-user-menu user={authState.user} />
          </div>
        </div>
      </Host>
    );
  }
}
