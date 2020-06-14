import { Component, Host, h, Prop } from '@stencil/core';
import classnames from 'classnames';
import { mapAccessLevel } from '../../../../../../utils/mapAccessLevel';

@Component({
  tag: 'p-user-menu',
  styleUrl: 'styles.scss',
  scoped: true,
})
export class UserMenu {
  @Prop() user: any;
  @Prop() notifications?: any = new Array(10).fill('something');

  get hasNotifications() {
    return this.notifications && this.notifications.length;
  }

  render() {
    return (
      <Host>
        <div class="user-menu">
          <div
            class={classnames('image', {
              'image--notifications': this.hasNotifications,
            })}
            style={{ backgroundImage: `url(${this.user.image})` }}
          ></div>
          <div class="user-menu__right">
            <div class="name">{this.user.name} </div>
            <div class="role">{mapAccessLevel(this.user.accessLevel)} </div>
          </div>
        </div>
      </Host>
    );
  }
}
