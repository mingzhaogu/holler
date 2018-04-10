import React from 'react';
import { connect } from 'react-redux';

import { receiveMessage } from '../../../../actions/message_actions';
import LiveChat from './live_chat';
import { withRouter } from 'react-router';
import { fetchConversation } from "../../../../actions/conversation_actions";
import { findConvoId,
  findConversationName,
  findAllMessages
} from '../../../../reducers/selectors'

const mapStateToProps = (state, ownProps) => ({
  convId: findConvoId(state, ownProps),
  currentUser: state.session.currentUser,
  chatUsers: state.entities.users,
  messages: findAllMessages(state, ownProps),
})

// showFriendDetails: state.ui.showFriendDetails
// chatName: findConversationName(state, ownProps),

  //get users of the conversation, call on compnentWillMount
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchConversation: (id) => dispatch(fetchConversation(id)),
  receiveMessage: (payload) => dispatch(receiveMessage(payload))
})
// bindActionCreators(MessageActions, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveChat));
