import React from 'react';
import { connect } from 'react-redux';

import Main from './main';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatchToProps
)(Main);
