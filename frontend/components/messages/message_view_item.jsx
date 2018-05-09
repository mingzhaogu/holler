import React from 'react';

// const MessageViewItem = ({ msg, currentUser, senderPic }) => {
//   const timestamp = msg.timestamp;
//
//   const align = (msg.senderId === currentUser.id) ? "right" : "left";
//
//   let body;
//   if (msg.messageType !== "text") {
//     body = <img src={msg.body} />
//   } else {
//     body = msg.body
//   }
//
//
//   return (
//     <li key={`chat-msg-${msg.id}`}
//       className={`chat-msg chat-msg-align-${align}`}
//     >
//       <img src={senderPic} className="chat-msg-pic left" />
//       <div className={chat-msg-timestamp left} />{timestamp}</div>
//       <div className={`chat-msg-body chat-msg-body${align}`}>
//         {body}
//       </div>
//       <img src={senderPic} className="chat-msg-pic right" />
//     </li>
//   )
// }

// export default MessageViewItem;

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
    const timestamp = msg.timestamp;
    const align = (msg.senderId === currentUser.id) ? "right" : "left";

    const displayTimestamp = (this.state.displayTimestamp) ? "show" : "hide";
    console.log(this.state.counter);

    return (
      <li key={`chat-msg-${msg.id}`}
        className={`chat-msg chat-msg-align-${align}`}
      >
        <img src={senderPic} className="chat-msg-pic" />

        <div className={`chat-msg-body chat-msg-body-${align}`}
          onMouseOver={this.changeTimestampDisplay}
          onMouseOut={this.changeTimestampDisplay}
        >
          {this.body()}
        </div>

        <div className={`chat-msg-timestamp ${displayTimestamp}`}>
        {timestamp}
        </div>
      </li>
    )
  }
}
// <div className={`chat-msg-timestamp right ${displayTimestamp}`}>
  // {timestamp}
// </div>
// <img src={senderPic} className="chat-msg-pic right" />

export default MessageViewItem;
