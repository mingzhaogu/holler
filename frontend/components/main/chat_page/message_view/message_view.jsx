import React from 'react';

// import LiveChat
import MessageInput from './message_input'

const MessageView = (props) => {
  return (
    <div className="message-view">
      [liveChat]
      <MessageInput />
      [messageAdditions]
      <br />
      [friendDetails]
    </div>
  )
}

export default MessageView;
