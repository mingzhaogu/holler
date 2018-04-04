import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
//add compose message action
import Main from './main';

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(
  null,
  mapDispatchToProps
)(Main);
