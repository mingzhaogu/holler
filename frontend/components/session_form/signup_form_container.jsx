import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

// import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => ({
  formType: 'signup',
  errors: errors.session,
  navLink: <Link to="/login">Log In</Link>,
  altText: 'Already have an account?'
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => (dispatch(signup(user)))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
