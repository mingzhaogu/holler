import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import NewConversationContainer from '../conversations/new_conversation_container';
import ChatroomContainer from './chatroom_container';
import ChatroomSplashContainer from './chatroom_splash_container';

const ChatroomRouter = () => (
  <div className="chat-main">
    <Switch>
      <Route exact path="/new" component={NewConversationContainer} />
      <Route exact path="/:convId" component={ChatroomContainer} />
      <Route exact path="/" render={() => <Redirect to="/1" />}/>
    </Switch>
  </div>
)

export default ChatroomRouter;

// <Route exact path="/" component={ChatroomSplashContainer} />
