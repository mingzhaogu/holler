import React from 'react';

import NavColumn from './nav_column/nav_column';
import ChatroomRouter from './chatroom/chatroom_router';

const Main = () => {
  return (
    <main className="main">
      <NavColumn />
      <ChatroomRouter />
    </main>
  )
}

export default Main;
