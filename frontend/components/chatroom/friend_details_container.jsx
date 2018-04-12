import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import FriendDetails from './friend_details';
import { updateConversation } from '../../actions/conversation_actions';
import {
  findConversation,
  findConversationImage,
  findConversationName
} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  currentConvo: findConversation(state, ownProps),
  convoName: findConversationName(state, ownProps),
  convoImage: findConversationImage(state, ownProps),
  convoUsers: Object.values(state.entities.users),
  showFriendDetails: state.ui.showFriendDetails
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateConversation: (convo) => dispatch(updateConversation(convo))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendDetails));
