import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import FriendDetails from './friend_details';
import { findConversationImage, findConversationName } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  convoName: findConversationName(state, ownProps),
  convoImage: findConversationImage(state, ownProps),
  convoUsers: Object.values(state.entities.users),
  showFriendDetails: state.ui.showFriendDetails,
  isEditing: state.ui.isEditing
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendDetails));
