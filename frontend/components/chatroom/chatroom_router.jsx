import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ChatroomContainer from './chatroom_container';
import ChatroomSplashContainer from './chatroom_splash_container';

const ChatroomRouter = () => (
  <div className="chat-main">
    <Switch>
      <Route exact path="/new" component={ChatroomContainer} />
      <Route exact path="/:convId" component={ChatroomContainer} />
      <Route exact path="/" component={ChatroomSplashContainer} />
    </Switch>
  </div>
)

export default ChatroomRouter;