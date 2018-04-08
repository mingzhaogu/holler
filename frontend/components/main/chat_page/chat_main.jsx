import React from 'react';
import { Route, Switch } from 'react-router-dom'

import ChatPageContainer from './chat_page_container'
import ChatSplashContainer from './chat_splash_container'

const ChatMain = () => (
  <div className="chat-main">
    <Switch>
      <Route exact path="/:convId" component={ChatPageContainer} />
      <Route exact path="/" component={ChatSplashContainer} />
    </Switch>
  </div>
)

export default ChatMain;
