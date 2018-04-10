import React from 'react';
import ActionCable from 'actioncable';

class LiveChat extends React.Component {
  constructor(props) {
    super(props);
    this.setUpChatRoom = this.setUpChatRoom.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentWillMount() {
    const { convId, receiveMessage } = this.props;
    this.setUpChatRoom(convId, receiveMessage);
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  setUpChatRoom(convId, receiveMessage) {
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
      let align;
      if (msg.senderId === currentUser.id) align = "right";
      else align = "left";

      if (!chatUsers[msg.senderId]) return null;
      const senderPic = chatUsers[msg.senderId].imageUrl

      return (
        <li key={`chat-msg-${msg.id}`}
          className={`chat-msg chat-msg-align-${align}`}
        >
          <img src={senderPic} className="chat-msg-pic left" />
          <div className={`chat-msg-body chat-msg-body${align}`}>{msg.body}</div>
          <img src={senderPic} className="chat-msg-pic right" />
        </li>
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

export default LiveChat;
