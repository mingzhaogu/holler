import React, { Component } from 'react';

import { Popover } from '../_reusables/popover';

class MessageViewItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayTimestamp: false
    }
  }

  body() {
    const { msg } = this.props;
    if (msg.messageType !== 'text') {
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
    const align = (msg.senderId === currentUser.id) ? 'right' : 'left';

    let style;
    if (msg.messageType !== 'text') {
      style = { padding: '0px' };
    } else { style = {} };

    return <li key={`chat-msg-${msg.id}`} className={`chat-msg chat-msg-align-${align}`}>
        <img src={senderPic} className="chat-msg-pic" />

        <div className={`chat-msg-body chat-msg-body-${align}`} onMouseOver={this.changeTimestampDisplay} onMouseOut={this.changeTimestampDisplay} style={style}>
          {this.body()}
        </div>

        <Popover customClasses="chat-msg-timestamp" arrow={align} extended={this.state.displayTimestamp}>
          {msg.timestamp}
        </Popover>
      </li>;
  }
}

export default MessageViewItem;
