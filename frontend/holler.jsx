import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// TESTING START:
import {
  fetchConversations,
  fetchConversation,
  createConversation
} from './actions/session_actions'
// TESTING END:

document.addEventListener('DOMContentLoaded', () => {
  // BOOTSTRAP CURRENT USER
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser; // should not be accessible after logging in
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
