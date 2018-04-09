import React from 'react';
import ActionCable from 'actioncable';

class LiveChat extends React.Component {
  constructor(props) {
    super(props);
    console.log("livechatprops", props);
  }

  componentWillMount() {
    // this.createSocket();
  }

  // setupChatRoom(convId, getData, userId) {
  //
  //
  // }
  componentWillReceiveProps(nextProps) {
    if (this.props.convoId !== nextProps.convoId) {
      this.props.fetchConversation(nextProps.chatId)
    }
  }

  render() {
    console.log('livechatprops', this.props);
    const { messages, currentUser,  } = this.props;
    const displayMessages = messages.map((msg) => {
      let align;
      if (msg.senderId === currentUser.id) align = "right";
      else align = "left";

      const senderPic = this.props.chatUsers[msg.senderId].imageUrl

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
