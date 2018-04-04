import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  formType: 'login',
  errors: errors.session,
  navLink: <Link to="/signup">Sign Up</Link>,
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => (dispatch(login(user)))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
