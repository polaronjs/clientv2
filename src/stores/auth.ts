import { createStore } from '@stencil/store';

const dummyUser = {
  username: 'nrwinner',
  name: 'Nick Winner',
  email: 'design@winnerdigital.net',
  accessLevel: 3,
  lsatLogin: new Date(),
};

const { state, onChange } = createStore({
  loggedIn: true,
  user: dummyUser,
});

onChange('user', (user) => {
  state.loggedIn = !!user;
});

export { state as authState };
