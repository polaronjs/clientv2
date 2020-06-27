import { h } from '@stencil/core';
import { FunctionalComponent } from '@stencil/core';

class ButtonGroupProps {
  gap?: number = 10;
  flow?: 'left' | 'right' = 'left';
  slot?: string;
}

export const ButtonGroup: FunctionalComponent<ButtonGroupProps> = (
  props,
  children,
  utils
) => {
  props = Object.assign(new ButtonGroupProps(), props);
  const { gap, flow, slot } = props;

  const payload = utils.map(children, (child) => ({
    ...child,
    vattrs: {
      ...child.vattrs,
      style: Object.assign(child.vattrs.style || {}, {
        ['margin' + (flow === 'left' ? 'Right' : 'Left')]: gap + 'px',
      }),
    },
  }));

  return (
    <div
      slot={slot}
      style={{
        display: 'flex',
        flexDirection: flow === 'right' ? 'row-reverse' : 'row',
        alignItems: 'center',
      }}
      class="button-group"
    >
      {payload}
    </div>
  );
};

<ButtonGroup />;
