import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import FriendDetails from './friend_details';
import { findConversationName } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  chatName: findConversationName(state, ownProps),
  showFriendDetails: state.ui.showFriendDetails,
  chatUsers: Object.values(state.entities.users)
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendDetails));
