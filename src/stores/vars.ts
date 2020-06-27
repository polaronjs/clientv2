import { createStore } from '@stencil/store';
import { config } from '../global/vars';

/**
 * Write the contents of the document root node as custom css properties
 */
const writeVars = () => {
  for (const name of Object.keys(vars)) {
    let value = vars[name];

    if (typeof value === 'function') {
      value = value(vars);
    }

    document.body.style.setProperty('--' + name, value.toString());
  }
};

const { state: vars, onChange } = createStore(config);

Object.keys(vars).forEach((key) => {
  // @ts-ignore
  onChange(key, writeVars);
});

export const invertGrays = () => {
  const keys = [];
  let values = [];

  Object.entries(vars)
    .filter(([key]) => key.includes('gray'))
    .forEach(([key, value]) => {
      keys.push(key);
      values.push(value);
    });

  values = values.reverse();

  for (let i = 0; i < keys.length; i++) {
    vars[keys[i]] = values[i];
  }
};

export { vars };

writeVars();

// invertGrays();
