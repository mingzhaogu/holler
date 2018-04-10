import React from 'react';
import { connect } from 'react-redux';
import ConversationList from './conversation_list';
import { withRouter } from 'react-router';
import {
  selectAllConversations,
  findLastMessages
} from '../../../reducers/selectors';
import {
  fetchConversation
} from '../../../actions/conversation_actions';

// pencil -> on click compose message

const mapStateToProps = (state, ownProps) => ({
  conversations: ownProps.convos,
  lastMessages: findLastMessages(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchConversation: (id) => (dispatch(fetchConversation(id))),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList));
