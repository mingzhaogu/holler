import React from 'react';

import FriendBarContainer from './friend_bar_container';
import MessageViewContainer from '../messages/message_view_container';

class Chatroom extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchConversation(this.props.chatId)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.props.fetchConversation(nextProps.chatId)
    }
  }

  render() {
    return (
      <main className="chat-page">
        <FriendBarContainer />
        <MessageViewContainer />
      </main>
    )
  }
}

export default Chatroom;
