import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SessionForm from './session_form';
import { login, signup, receiveErrors } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => ({
  formType: 'signup',
  errors: errors.session,
  navLink: <Link to="/login">Log in to get started.</Link>,
  altText: 'Already have an account?'
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => (dispatch(signup(user))),
  login: (user) => (dispatch(login(user))),
  receiveErrors: (errors) => (dispatch(receiveErrors(errors)))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
