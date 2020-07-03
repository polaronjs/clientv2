import { createStore } from '@stencil/store';
import { config } from '../global/vars';

const writeValueToBody = (name, value) =>
  document.body.style.setProperty('--' + name, value);

/**
 * Write the contents of the document root node as custom css properties
 */
const writeVars = <T extends typeof vars>(key?: string, value?: T[keyof T]) => {
  if (key && value) {
    if (typeof value === 'function') {
      value = value(vars);
    }

    writeValueToBody(key, value.toString());
  } else {
    for (const name of Object.keys(vars)) {
      let value = vars[name];

      if (typeof value === 'function') {
        value = value(vars);
      }

      writeValueToBody(name, value.toString());
    }
  }
};

const { state: vars, onChange } = createStore(config);

// declare onChange handlers for each of the variable properties
Object.keys(vars).forEach((key: keyof typeof vars) => {
  // @ts-ignore
  onChange(key, writeVars);
});

const invertGrays = () => {
  const keys = [];
  let values = [];

  Object.entries(vars)
    .filter(([key]) => key.includes('gray'))
    .forEach(([key, value]) => {
      keys.push(key);
      values.push(typeof value === 'function' ? value(vars) : value);
    });

  values = values.reverse();

  for (let i = 0; i < keys.length; i++) {
    // FIXME this is super inefficient, n gray color values means n^2 different writes to body when toggling, can we improve?
    vars[keys[i]] = values[i];
  }
};

// on first import, process and write all variables from config to body
writeVars();

export const toggleDarkMode = (isDarkMode: boolean) => {
  vars.accentColor = vars.accentColor.lighten(isDarkMode ? 5 : -5);
  invertGrays();
};

export const getVariable = (name: keyof typeof vars) => {
  const value = vars[name];

  if (typeof value === 'function') {
    return (value as Function)(vars);
  } else {
    return value;
  }
};
