import React from 'react';
import ActionCable from 'actioncable';

class LiveChat extends React.Component {
  constructor(props) {
    super(props);
    console.log('livechatprops', props);
  }

  componentWillMount() {
    // this.createSocket();
  }

  // setupChatRoom(convId, getData, userId) {
  //
  //
  // }

  render() {
    const { messages, currentUser } = this.props;
    const displayMessages = messages.map((msg) => {
      let align;
      if (msg.senderId === currentUser.id) align = "right";
      else align = "left";

      return (
        <li key={`chat-msg-${msg.id}`}
          className={`chat-msg-align-${align}`}>
          {msg.body}
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
