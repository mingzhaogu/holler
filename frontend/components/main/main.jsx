import React, { Fragment } from 'react';

import NavColumn from '../nav_column/nav_column';
import ChatroomRouter from '../chatroom/chatroom_router';
import UserSettings from '../user_settings/user_settings_container';

const Main = () => {
  
  return <Fragment>
      <NavColumn />
      <ChatroomRouter />
      <UserSettings />
    </Fragment>;
}

export default Main;
