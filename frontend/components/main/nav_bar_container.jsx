import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createConversation } from '../../actions/conversation_actions';
import NavBar from './nav_bar';

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  createConversation: (convo) => dispatch(createConversation(convo))
})

export default connect(
  null,
  mapDispatchToProps
)(NavBar);
