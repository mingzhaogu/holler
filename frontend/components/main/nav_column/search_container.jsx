import React from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { withRouter } from 'react-router';
import {
  selectAllConversations,
  findLastMessages
} from '../../../reducers/selectors';
import { fetchAllConversations,
  fetchConversation
} from '../../../actions/conversation_actions';

// import { fetchAllConversations,
//   fetchConversation
// } from '../../../actions/conversation_actions';

import { fetchConversations } from '../../../util/conversation_api_util';

const mapStateToProps = (state, ownProps) => ({
  conversations: selectAllConversations(state),
  lastMessages: findLastMessages(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchConversations: (query) => fetchConversations(query),
  fetchAllConversations: () => (dispatch(fetchAllConversations())),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
