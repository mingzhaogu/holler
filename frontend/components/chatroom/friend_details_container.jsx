import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import FriendDetails from './friend_details';
import { findConversationImage, findConversationName } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  convoName: findConversationName(state, ownProps),
  convoImage: findConversationImage(state, ownProps),
  showFriendDetails: state.ui.showFriendDetails,
  convoUsers: Object.values(state.entities.users)
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendDetails));
