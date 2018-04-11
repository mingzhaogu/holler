import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import FriendBar from './friend_bar';
import { toggleFriendDetailsView } from '../../actions/ui_actions';
import { findConversationName } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => ({
  chatName: findConversationName(state, ownProps) || "Welcome!",
})

const mapDispatchToProps = (dispatch) => ({
  toggleFriendDetails: () => dispatch(toggleFriendDetailsView())
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendBar))
