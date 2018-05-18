import React from 'react';
import { connect } from 'react-redux';

import NavHeader from './nav_header';
import { logout } from '../../actions/session_actions';
import { createConversation } from '../../actions/conversation_actions';
import { toggleUserSettings } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  createConversation: (convo) => dispatch(createConversation(convo)),
  toggleUserSettings: () => dispatch(toggleUserSettings())
})

export default connect(
  null,
  mapDispatchToProps
)(NavHeader);
