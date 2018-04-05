import React from 'react';
import { connect } from 'react-redux';
import MessageList from './message_list';

import { fetchAllConversations,
  fetchConversation
} from '../../actions/conversation_actions';

// pencil -> on click compose message

const mapStateToProps = (state, ownProps) => ({
  conversations: Object.values(state.entities.conversations)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllConversations: () => (dispatch(fetchAllConversations())),
  fetchConversation: (id) => (dispatch(fetchConversation(id))),
})

console.log(MessageList)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
