import React from 'react';
import { connect } from 'react-redux';
import MessageList from './message_list';
import { withRouter } from 'react-router';
import {
  selectAllConversations,
  findLastMessages
} from '../../../reducers/selectors'

import { fetchAllConversations,
  fetchConversation
} from '../../../actions/conversation_actions';

// pencil -> on click compose message

const mapStateToProps = (state, ownProps) => ({
  conversations: selectAllConversations(state),
  lastMessages: findLastMessages(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllConversations: () => (dispatch(fetchAllConversations())),
  fetchConversation: (id) => (dispatch(fetchConversation(id))),
})

console.log(MessageList)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList));
