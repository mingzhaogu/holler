import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// TESTING START:
import {
  signup,
  login,
  logout
} from './util/session_api_util'
// TESTING END:

document.addEventListener('DOMContentLoaded', () => {
  // BOOTSTRAP CURRENT USER
  let store;
  console.log(window.currentUser);
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser; // should not be accessible after logging in
  } else {
    store = configureStore();
  }

  // TESTING START
  window.store = store;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  // testUser = {user: {username: 'Lilo', password: 'password'}}
  // TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
