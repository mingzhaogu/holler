import React from 'react';
import { connect } from 'react-redux';
import FriendDetails from './friend_details';
import { withRouter } from 'react-router';
import { findConversationName } from '../../../../reducers/selectors'

const mapStateToProps = (state, ownProps) => ({
  chatName: findConversationName(state, ownProps),
  showFriendDetails: state.ui.showFriendDetails
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendDetails));
