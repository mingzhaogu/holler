import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

// import App from './app';

import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import MainContainer from "./main/main_container";

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute path="/" component={MainContainer} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default Root;
