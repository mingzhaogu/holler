import React from 'react';
import FriendBarContainer from './friend_bar_container';
import MessageView from './message_view/message_view';

class ChatPage extends React.Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchConversation(this.props.chatId)
  }

  render() {
    return (
      <main className="chat-page">
        <FriendBarContainer />
        <MessageView />
      </main>
    )
  }
}

export default ChatPage;
