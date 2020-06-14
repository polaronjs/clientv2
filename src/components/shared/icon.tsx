import { h } from '@stencil/core';
import { FunctionalComponent } from '@polaron/shift/dist/types/stencil-public-runtime';

interface IconProps {
  name: string;
  weight?: 'solid' | 'light' | 'regular' | 'brand';
}

export const Icon: FunctionalComponent<IconProps> = ({ name, weight }) => {
  return <i class={`fa${(weight || 'regular').charAt(0)} fa-${name}`}></i>;
};
