import React from 'react';
import { connect } from 'react-redux';

import Chatroom from './chatroom';
import { fetchConversation } from "../../../actions/conversation_actions";

const mapStateToProps = (state, ownProps) => ({
  chatId: ownProps.match.params.convId
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchConversation: (id) => dispatch(fetchConversation(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatroom)
