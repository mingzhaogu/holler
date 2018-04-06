import React from 'react';
import { Route, Switch } from 'react-router-dom'

import ChatPage from './chat_page'
import ChatSplash from './chat_splash'

const ChatMain = () => (
  <div className="chat-main">
    <Switch>
      <Route exact path="/:chatName" component={ChatPage} />
      <Route exact path="/" component={ChatSplash} />
    </Switch>
  </div>
)

export default ChatMain;
