import React from 'react';
import FriendBarContainer from './friend_bar_container';
import MessageView from './message_view/message_view';

const ChatPage = (props) => {

// SHOULD HAVE EVERYTHING FOR THE ENTIRE NAV BAR -- LEFT COLUMN
  return (
    <main className="chat-page">
      <FriendBarContainer/>
      <MessageView />
    </main>
  )
}

export default ChatPage;
