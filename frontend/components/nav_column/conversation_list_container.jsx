import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ConversationList from './conversation_list';
import {
  selectAllConversations,
  findLastMessages
} from '../../reducers/selectors';
import {
  fetchConversation
} from '../../actions/conversation_actions';


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
