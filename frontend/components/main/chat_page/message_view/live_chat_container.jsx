import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MessageActions from '../../../../actions/message_actions';
import LiveChat from './live_chat';
import { withRouter } from 'react-router';
import { findConvoId,
  findConversationName,
  findAllMessages
} from '../../../../reducers/selectors'

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
  convId: findConvoId(state, ownProps),
  currentUser: state.session.currentUser,
  messages: findAllMessages(state, ownProps),
  chatName: findConversationName(state, ownProps),
  showFriendDetails: state.ui.showFriendDetails
})


  //get users of the conversation, call on compnentWillMount
const mapDispatchToProps = (dispatch, ownProps) => (
  bindActionCreators(MessageActions, dispatch)
)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveChat));
