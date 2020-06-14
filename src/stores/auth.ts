import { createStore } from '@stencil/store';

const dummyUser = {
  username: 'nrwinner',
  name: 'Nick Winner',
  email: 'design@winnerdigital.net',
  accessLevel: 3,
  lsatLogin: new Date(),
  image:
    'https://media-exp1.licdn.com/dms/image/C5103AQGe7loa0_DtIg/profile-displayphoto-shrink_400_400/0?e=1597881600&v=beta&t=__sc-nVDGbW5opyl0z_ViyXq4SA7OCNmulZWGr65EgM',
};

const { state, onChange } = createStore({
  loggedIn: true,
  user: dummyUser,
});

onChange('user', (user) => {
  state.loggedIn = !!user;
});

export { state as authState };
