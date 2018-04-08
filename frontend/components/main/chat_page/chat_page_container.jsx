import React from 'react';
import { connect } from 'react-redux';
import ChatPage from './chat_page';
import { fetchConversation } from "../../../actions/conversation_actions"
// import MessageView(container?) from './';

const mapStateToProps = (state, ownProps) => ({
  chatId: ownProps.match.params.convId
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchConversation: (id) => dispatch(fetchConversation(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage)
