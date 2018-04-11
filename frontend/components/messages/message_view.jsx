import React from 'react';
import ActionCable from 'actioncable';

import MessageViewItem from './message_view_item';

class MessageView extends React.Component {
  constructor(props) {
    super(props);
    this.setUpChatroom = this.setUpChatroom.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentWillMount() {
    const { convId, receiveMessage } = this.props;
    this.setUpChatroom(convId, receiveMessage);
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  setUpChatroom(convId, receiveMessage) {
    const chatroom = ActionCable.createConsumer();
    chatroom.subscriptions.create({
      channel: 'ChatChannel',
      room: `chat-${convId}`,
    }, {
      connected: function() {
      },
      disconnected: function() {},
      received: ({ payload }) => {
        receiveMessage(payload)
      },
    });
  };

  scrollToBottom() {
    const chatContainer = document.getElementsByClassName('live-chat')[0];
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }

  render() {
    const { messages, currentUser, chatUsers } = this.props;

    const displayMessages = messages.map((msg) => {
      if (!chatUsers[msg.senderId]) return null;
      else return (
        <MessageViewItem
          key={msg.id}
          msg={msg}
          currentUser={currentUser}
          senderPic={chatUsers[msg.senderId].imageUrl}
        />
      )
    })

    return (
      <div className="live-chat">
        <ul>
          {displayMessages}
        </ul>
      </div>
    )
  }
}

export default MessageView;
