import React from 'react';
import FriendBar from './friend_bar';
import MessageView from './message_view/message_view';

const ChatPage = (props) => {

// SHOULD HAVE EVERYTHING FOR THE ENTIRE NAV BAR -- LEFT COLUMN
  return (
    <main className="chat-page">
      <FriendBar chatName={props.chatHead} />
      <MessageView />
      'hello from chat_page.jsx'
    </main>
  )
}

export default ChatPage;
