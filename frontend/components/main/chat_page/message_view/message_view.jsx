import React from 'react';

// import LiveChat
import LiveChat from './live_chat';
import MessageInput from './message_input';
import FriendDetailsContainer from './friend_details_container';

const MessageView = (props) => {
  return (
    <div className="message-view">
      <section className="message-view-main">
        <LiveChat />
        <MessageInput />
      </section>

      <FriendDetailsContainer />
    </div>
  )
}

export default MessageView;
