import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createConversation } from '../../actions/conversation_actions';
import NavColumn from './nav_column';

// SHOULD HAVE EVERYTHING FOR THE ENTIRE NAV BAR -- LEFT COLUMN

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  // createConversation: (convo) => dispatch(createConversation(convo))
})

export default connect(
  null,
  mapDispatchToProps
)(NavColumn);
