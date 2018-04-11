import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SessionForm from './session_form';
import { login, receiveErrors } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => ({
  formType: 'login',
  errors: errors.session,
  navLink: <Link to="/signup">Sign up to get started.</Link>,
  altText: 'Don\'t have an account?'
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => (dispatch(login(user))),
  login: (user) => (dispatch(login(user))),
  receiveErrors: (errors) => (dispatch(receiveErrors(errors)))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
