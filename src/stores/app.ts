import { createStore } from '@stencil/store';
import { toggleDarkMode } from './vars';

// TODO load dark mode from user preferences or local storage
const { state: app, onChange } = createStore({ darkMode: false });

onChange('darkMode', (newValue) => {
  toggleDarkMode(newValue);
});

export { app };
