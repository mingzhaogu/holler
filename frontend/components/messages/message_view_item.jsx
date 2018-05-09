import React from 'react';

class MessageViewItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayTimestamp: false
    }

    this.changeTimestampDisplay = this.changeTimestampDisplay.bind(this)
  }

  body() {
    const { msg } = this.props;
    if (msg.messageType !== "text") {
      return <img src={msg.body} />
    } else {
      return msg.body
    }
  }

  changeTimestampDisplay(e) {
    e.preventDefault();
    this.setState({ displayTimestamp: !this.state.displayTimestamp })
  }

  render() {
    const { msg, currentUser, senderPic } = this.props;
    const align = (msg.senderId === currentUser.id) ? "right" : "left";
    const displayTimestamp = (this.state.displayTimestamp) ? "show" : "hide";

    return (
      <li key={`chat-msg-${msg.id}`}
        className={`chat-msg chat-msg-align-${align}`}>
        <img src={senderPic} className="chat-msg-pic" />

        <div className={`chat-msg-body chat-msg-body-${align}`}
          onMouseOver={this.changeTimestampDisplay}
          onMouseOut={this.changeTimestampDisplay}
        >
          {this.body()}
        </div>

        <div className={`chat-msg-timestamp ${displayTimestamp}`}>
          {msg.timestamp}
        </div>
      </li>
    )
  }
}

export default MessageViewItem;
