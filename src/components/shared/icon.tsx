import { h } from '@stencil/core';
import { FunctionalComponent } from '@stencil/core';

interface IconProps {
  name: string;
  weight?: 'solid' | 'light' | 'regular' | 'brand' | 'duotone';
  slot?: string;
}

export const Icon: FunctionalComponent<IconProps> = ({
  name,
  weight,
  slot,
}) => {
  return (
    <i
      slot={slot}
      class={`fa${(weight || 'regular').charAt(0)} fa-${name}`}
    ></i>
  );
};
