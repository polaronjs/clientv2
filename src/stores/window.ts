import { createStore } from '@stencil/store';

const { state } = createStore({
  width: window.innerWidth,
  height: window.innerHeight,
});

window.addEventListener('resize', () => {
  (state.width = window.innerWidth), (state.height = window.innerHeight);
});

export { state as windowState };
