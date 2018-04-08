import React from 'react';
import { connect } from 'react-redux';
import FriendDetails from './friend_details';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  chatName: ownProps.match.params.chatName,
  showFriendDetails: state.ui.showFriendDetails
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendDetails));
