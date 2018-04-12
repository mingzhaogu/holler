import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import MessageView from './message_view';
import { findConvoId,
  findConversationName,
  findAllMessages
} from '../../reducers/selectors';
import { fetchConversation } from "../../actions/conversation_actions";
import { receiveMessage } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => ({
  convId: findConvoId(state, ownProps),
  currentUser: state.session.currentUser,
  chatUsers: state.entities.users,
  messages: findAllMessages(state, ownProps),
  expressionsOpen: state.ui.showGiphys || state.ui.showStickys
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchConversation: (id) => dispatch(fetchConversation(id)),
  receiveMessage: (payload) => dispatch(receiveMessage(payload))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageView));
