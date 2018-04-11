import React from 'react';

import MessageViewContainer from '../messages/message_view_container';
// import ToggleGiphyContainer from './toggle_giphy_container';
import MessageInputContainer from './message_input_container';
import FriendDetailsContainer from './friend_details_container';

const ChatView = (props) => {
  return (
    <div className="chat-view">
      <section className="chat-view-main">
        <MessageViewContainer />
        <MessageInputContainer />
      </section>

      <FriendDetailsContainer />
    </div>
  )
}

export default ChatView;
