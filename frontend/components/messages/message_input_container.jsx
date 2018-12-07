import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import MessageInput from './message_input';

import { findConversationId, findConversationName } from "../../selectors/conversation_selectors";
import { findCurrentMessages } from "../../selectors/message_selectors";
import { getExpressionsFlags } from "../../selectors/expressions_selectors";
import { toggleGiphys, toggleStickys } from '../../actions/ui_actions';
import { fetchGiphys, fetchStickys } from '../../actions/giphy_actions';

const mapStateToProps = (state, ownProps) => ({
  chatName: findConversationName(state, ownProps),
  convId: findConversationId(state, ownProps),
  currentUser: state.session.currentUser,
  messages: findCurrentMessages(state, ownProps),
  showExpressions: getExpressionsFlags(state),
  showFriendDetails: state.ui.showFriendDetails
});

  //get users of the conversation, call on compnentWillMount
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleGiphys: () => dispatch(toggleGiphys()),
  fetchGiphys: (query = '', offset = 0) => dispatch(fetchGiphys(query, offset)),
  toggleStickys: () => dispatch(toggleStickys()),
  fetchStickys: (query = '', offset = 0) => dispatch(fetchStickys(query, offset))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInput));
