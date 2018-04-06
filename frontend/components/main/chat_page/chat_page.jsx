import React from 'react';
import FriendBar from './friend_bar';
// import MessageView(container?) from './';

const ChatPage = (props) => {

// SHOULD HAVE EVERYTHING FOR THE ENTIRE NAV BAR -- LEFT COLUMN
  return (
    <main className="chat-page">
      <FriendBar />
      'hello from chat page'
    </main>
  )
}

export default ChatPage;
