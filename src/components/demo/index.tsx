import { Component, Host, h, State } from '@stencil/core';
import { ButtonGroup } from '../shared/button-group';
import { Icon } from '../shared/icon';
import { app } from '../../stores/app';
import { EntryPortal } from '../shared/portal';
import { trigger, transition, style, animate } from '@polaron/shift';

// TODO don't include this component in prod builds

const animation = trigger('entryComponent', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('200ms ease', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('200ms ease', style({ opacity: 0 })),
  ]),
]);

@Component({
  tag: 'p-components-demo',
  styleUrl: 'styles.scss',
  scoped: true,
})
export class PolaronComponentsDemo {
  @State() modalOpen: boolean;
  @State() conditionalEntryOpen: boolean;
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
                {/* hi */}
                {/* <p-modal-dialog>
                  <div slot="title">This is a modal</div>
                  <span>This is a test of the modal component</span>
                  <ButtonGroup flow="right" slot="actions">
                    <p-button>Primary</p-button>
                    <p-button typeName="link">Secondary</p-button>
                  </ButtonGroup>
                </p-modal-dialog> */}
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

          <fieldset name="input">
            <legend>Text Field</legend>
            <p-text-field
              name="demo"
              label="Demo input"
              placeholder="Enter your demo text here"
            />
            <br />
            <p-text-field
              name="demo-disabled"
              label="Demo input - disabled"
              placeholder="Enter your demo text here"
              disabled
            />
            <br />
            <p-text-field
              name="demo - readonly"
              value="This is a text value"
              label="Demo input - readonly"
              readonly
            />
            <br />
            <p-text-field
              name="demo - error"
              value="not an email address"
              label="Email address"
              error="Please enter a valid email address"
            />
          </fieldset>

          <fieldset name="popover">
            <legend>Popover</legend>
            <p-button
              onClick={() =>
                (this.conditionalEntryOpen = !this.conditionalEntryOpen)
              }
            >
              Toggle
            </p-button>
            {/* <EntryPortal><div>I'm always here</div></EntryPortal>
            <EntryPortal active={!!this.conditionalEntryOpen}>
              <animation-container animation={animation}>
                <span class="modal__body">
                  I'm here sometimes and should animate in/out
                </span>
              </animation-container>
            </EntryPortal> */}
          </fieldset>
        </div>
      </Host>
    );
  }
}
