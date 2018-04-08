import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleFriendDetailsView } from '../../../actions/ui_actions'
import FriendBar from './friend_bar';

// import MessageView(container?) from './';

const mapStateToProps = (state, ownProps) => ({
  chatName: ownProps.match.params.chatName
})

const mapDispatchToProps = (dispatch) => ({
  toggleView: () => dispatch(toggleFriendDetailsView())
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendBar))
