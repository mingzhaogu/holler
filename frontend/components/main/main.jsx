import React from 'react';

import NavColumn from '../nav_column/nav_column';
import ChatroomRouter from '../chatroom/chatroom_router';
import UserSettings from '../user_settings/user_settings_container';

const Main = () => {
  
  return (
    <main className="main">
      <NavColumn />
      <ChatroomRouter />
      <UserSettings />
    </main>
  )
}

export default Main;
