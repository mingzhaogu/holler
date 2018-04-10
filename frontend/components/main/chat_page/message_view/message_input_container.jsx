import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { createMessage } from '../../../../actions/message_actions';
import MessageInput from './message_input';
import { withRouter } from 'react-router';
import { findConversationName } from '../../../../reducers/selectors'

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
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
