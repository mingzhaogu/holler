import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ConversationList from './conversation_list';

import { findLastMessages } from "../../selectors/message_selectors";
import { objOfUsersNames } from "../../selectors/user_selectors";
import {
  fetchConversation
} from '../../actions/conversation_actions';

const mapStateToProps = (state, ownProps) => ({
  conversations: ownProps.convos,
  lastMessages: findLastMessages(state),
  users: objOfUsersNames(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchConversation: id => (dispatch(fetchConversation(id))),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList));
