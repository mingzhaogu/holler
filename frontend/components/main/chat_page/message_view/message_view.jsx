import React from 'react';

// import LiveChat
import LiveChat from './live_chat';
import MessageInput from './message_input';
import FriendDetails from './friend_details';

const MessageView = (props) => {
  return (
    <div className="message-view">
      <section className="message-view-main">
        <LiveChat />
        <MessageInput />
      </section>

      <FriendDetails />
    </div>
  )
}

export default MessageView;
