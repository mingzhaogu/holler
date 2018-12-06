import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import FriendDetails from './friend_details';
import {
  findConversation,
  findConversationImage,
  findConversationName
} from '../../selectors/conversation_selectors';
import { findConversationUsers } from "../../selectors/user_selectors";
import { updateConversation } from '../../actions/conversation_actions';

const mapStateToProps = (state, ownProps) => ({
  currentConvo: findConversation(state, ownProps),
  convoName: findConversationName(state, ownProps),
  convoImage: findConversationImage(state, ownProps),
  convoUsers: findConversationUsers(state, ownProps) || [],
  showFriendDetails: state.ui.showFriendDetails
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateConversation: (formData, convId) => dispatch(updateConversation(formData, convId))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendDetails));
