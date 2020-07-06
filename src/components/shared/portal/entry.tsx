import { FunctionalComponent } from '@stencil/core';
import { PortalTunnel } from './portal-tunnel';

export type EntryPortalProps = {
  active?: boolean;
  onClose?: () => void;
  withSlot?: boolean;
};

export const EntryPortal: FunctionalComponent<EntryPortalProps> = (
  { active, onClose, withSlot }: EntryPortalProps,
  children
) => {
  if (typeof active === 'undefined') {
    active = true;
  }

  if (active) {
    PortalTunnel.create(children);
  } else {
    PortalTunnel.destroy(children);

    if (onClose) {
      onClose();
    }
  }

  return withSlot ? children : null;
};
