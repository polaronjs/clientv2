import { createStore } from '@stencil/store';
import { config } from '../global/vars';

/**
 * Write the contents of the document root node as custom css properties
 */
const writeVars = () => {
  for (const name of Object.keys(vars)) {
    document.body.style.setProperty('--' + name, vars[name].toString());
  }
};

const { state: vars, onChange } = createStore(config);

Object.keys(vars).forEach((key) => {
  // @ts-ignore
  onChange(key, writeVars);
});

export const invertGrays = () => {
  throw new Error('Not yet implemented');
};

export { vars };

writeVars();
