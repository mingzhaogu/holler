import React from 'react';
import { connect } from 'react-redux';
import FriendDetails from './friend_details';
import { withRouter } from 'react-router';
// import {
//   selectAllConversations,
//   findLastMessages
// } from '../../../reducers/selectors'
//
// import { fetchAllConversations,
//   fetchConversation
// } from '../../../actions/conversation_actions';

const mapStateToProps = (state, ownProps) => ({
  chatName: ownProps.location.pathname.slice(1),
  state
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FriendDetails);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendDetails));
