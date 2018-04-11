import React from 'react';

const MessageViewItem = ({ msg, currentUser, senderPic }) => {
  let align;
  if (msg.senderId === currentUser.id) align = "right";
  else align = "left";

  let body;
  if (msg.messageType !== "text") {
    body = <img src={msg.body} />
  } else {
    body = msg.body
  }

  return (
    <li key={`chat-msg-${msg.id}`}
      className={`chat-msg chat-msg-align-${align}`}
    >
      <img src={senderPic} className="chat-msg-pic left" />
      <div className={`chat-msg-body chat-msg-body${align}`}>
        {body}
      </div>
      <img src={senderPic} className="chat-msg-pic right" />
    </li>
  )
}

export default MessageViewItem;
