import { Component, Host, h, State } from '@stencil/core';
import { ButtonGroup } from '../shared/button-group';
import { Icon } from '../shared/icon';
import { app } from '../../stores/app';

// TODO don't include this component in prod builds

@Component({
  tag: 'p-components-demo',
  styleUrl: 'styles.scss',
  scoped: true,
})
export class PolaronComponentsDemo {
  @State() modalOpen: boolean;
  @State() switchActive: boolean;

  toggleDarkMode() {
    app.darkMode = !app.darkMode;
    this.switchActive = !!app.darkMode;
  }

  render() {
    return (
      <Host>
        <div class="demo-wrapper">
          <h2>Polaron Component Demo</h2>

          <fieldset name="buttons">
            <legend>Buttons</legend>
            <ButtonGroup flow="left" gap={10}>
              <p-button>Button Text</p-button>
              <p-button styleName="danger">Button Text</p-button>
              <p-button styleName="success">Button Text</p-button>
            </ButtonGroup>
            <ButtonGroup flow="left" gap={10}>
              <p-button typeName="link">Button Text</p-button>
              <p-button styleName="danger" typeName="link">
                Button Text
              </p-button>
              <p-button styleName="success" typeName="link">
                Button Text
              </p-button>
            </ButtonGroup>
            <ButtonGroup flow="left" gap={10}>
              <p-button>
                Action <Icon slot="icon" weight="solid" name="arrow-right" />
              </p-button>
              <p-button typeName="link">
                Action <Icon slot="icon" weight="solid" name="arrow-right" />
              </p-button>
            </ButtonGroup>
            <ButtonGroup flow="left" gap={10}>
              <p-button disabled>
                Action <Icon slot="icon" weight="solid" name="arrow-right" />
              </p-button>
              <p-button disabled typeName="link">
                Action <Icon slot="icon" weight="solid" name="arrow-right" />
              </p-button>
            </ButtonGroup>
          </fieldset>

          <fieldset name="modal">
            <legend>Modals</legend>
            <p-button onClick={() => (this.modalOpen = true)}>
              Dialog <Icon slot="icon" weight="solid" name="layer-group" />
            </p-button>
            {this.modalOpen && (
              <p-modal onClose={() => (this.modalOpen = false)}>
                <p-modal-dialog>
                  <div slot="title">This is a modal</div>
                  <span>This is a test of the modal component</span>
                  <ButtonGroup flow="right" slot="actions">
                    <p-button>Primary</p-button>
                    <p-button typeName="link">Secondary</p-button>
                  </ButtonGroup>
                </p-modal-dialog>
              </p-modal>
            )}
          </fieldset>

          <fieldset name="switch">
            <legend>Switch</legend>
            <p-switch
              onClick={() => this.toggleDarkMode()}
              selected={this.switchActive}
              label="Toggle dark mode"
            />
            <ButtonGroup gap={10}>
              <p-switch disabled />
              <p-switch selected={true} disabled />
            </ButtonGroup>
          </fieldset>
        </div>
      </Host>
    );
  }
}
