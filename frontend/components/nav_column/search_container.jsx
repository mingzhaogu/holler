import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Search from './search';

import { selectAllConversations } from '../../selectors/conversation_selectors';
import { findLastMessages } from '../../selectors/message_selectors';
import { fetchAllConversations } from "../../actions/conversation_actions";

const mapStateToProps = (state, ownProps) => ({
  conversations: selectAllConversations(state),
  lastMessages: findLastMessages(state),
})
// loading: state.ui.loading

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllConversations: query => dispatch(fetchAllConversations(query))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
