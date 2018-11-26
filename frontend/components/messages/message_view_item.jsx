import React from 'react';

class MessageViewItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayTimestamp: false
    }
  }

  body() {
    const { msg } = this.props;
    if (msg.messageType !== "text") {
      return <img style={{ borderRadius: '1.3em' }} src={msg.body} />
    } else {
      return msg.body
    }
  }

  changeTimestampDisplay = e => {
    e.preventDefault();
    this.setState(prevState => ({ displayTimestamp: !prevState.displayTimestamp }))
  }

  render() {
    const { msg, currentUser, senderPic } = this.props;
    const align = (msg.senderId === currentUser.id) ? "right" : "left";
    const displayTimestamp = (this.state.displayTimestamp) ? "show" : "hide";

    let style;
    if (msg.messageType !== "text") {
      style = { padding: '0px' };
    } else { style = {} };

    return (
      <li key={`chat-msg-${msg.id}`}
        className={`chat-msg chat-msg-align-${align}`}>
        <img src={senderPic} className="chat-msg-pic" />

        <div className={`chat-msg-body chat-msg-body-${align}`}
          onMouseOver={this.changeTimestampDisplay}
          onMouseOut={this.changeTimestampDisplay}
          style={style}
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
