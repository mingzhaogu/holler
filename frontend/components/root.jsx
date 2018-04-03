import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <h1>HARROOOOOOOO, when ready, replace this with opencarrot-App-space-slash-closecarrow</h1>
    </HashRouter>
  </Provider>
);

export default Root;
