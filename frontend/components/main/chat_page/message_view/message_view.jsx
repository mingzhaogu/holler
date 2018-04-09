import React from 'react';

// import LiveChat
import LiveChatContainer from './live_chat_container';
import MessageInputContainer from './message_input_container';
import FriendDetailsContainer from './friend_details_container';

const MessageView = (props) => {
  return (
    <div className="message-view">
      <section className="message-view-main">
        <LiveChatContainer />
        <MessageInputContainer />
      </section>

      <FriendDetailsContainer />
    </div>
  )
}

export default MessageView;
