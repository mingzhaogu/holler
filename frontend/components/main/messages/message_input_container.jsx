import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import MessageInput from './message_input';
import { findConversationName } from '../../../reducers/selectors';
import { createMessage } from '../../../actions/message_actions';

const mapStateToProps = (state, ownProps) => ({
  convId: ownProps.match.params.convId,
  currentUser: state.session.currentUser,
  messages: Object.values(state.entities.messages),
  giphys: state.giphys,

  chatName: findConversationName(state, ownProps),
  showFriendDetails: state.ui.showFriendDetails
})

  //get users of the conversation, call on compnentWillMount
const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInput));
