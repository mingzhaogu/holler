import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NewConversation from './new_conversation';
import { createConversation } from "../../actions/conversation_actions";
import { fetchUsers } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.currentUser.id,
  userResults: Object.values(state.entities.users)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  createConversation: (userIds, chatName) => dispatch(createConversation(userIds, chatName)),
  fetchUsers: (query) => dispatch(fetchUsers(query))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewConversation));
