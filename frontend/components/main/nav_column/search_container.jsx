import React from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { withRouter } from 'react-router';
import {
  selectAllConversations,
  findLastMessages
} from '../../../reducers/selectors';
import { fetchAllConversations,
} from '../../../actions/conversation_actions';

const mapStateToProps = (state, ownProps) => ({
  conversations: selectAllConversations(state),
  lastMessages: findLastMessages(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllConversations: (query) => (dispatch(fetchAllConversations(query))),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
