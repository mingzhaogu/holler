import React from 'react';

import FriendBarContainer from './friend_bar_container';
import ChatView from './chat_view';
// import MessageViewContainer from '../messages/message_view_container';
// import MessageInputContainer from '../messages/message_input_container';

class Chatroom extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchConversation(this.props.chatId)
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.chatId) {
      this.props.fetchAllUsers
    }
    else if (this.props.chatId !== nextProps.chatId) {
      this.props.fetchConversation(nextProps.chatId)
    }
  }

  render() {
    return (
      <main className="chat-page">
        <FriendBarContainer />
        <ChatView />
      </main>
    )
  }

  // render() {
  //   return (
  //     <main className="chat-page">
  //       <FriendBarContainer />
  //       <MessageViewContainer />
  //       <MessageInputContainer />
  //     </main>
  //   )
  // }
}

export default Chatroom;
