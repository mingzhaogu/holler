import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavColumn from './nav_bar';

// SHOULD HAVE EVERYTHING FOR THE ENTIRE NAV BAR -- LEFT COLUMN

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout())
})

export default connect(
  null,
  mapDispatchToProps
)(NavColumn);
