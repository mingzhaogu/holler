import React from 'react';
// import { Link } from 'react-router-dom';

// pencil -> on click compose message
import NavColumn from './nav_column/nav_column';
import ChatPage from './chat_page/chat_page';
import Footer from '../footer/footer';

const Main = () => {

  // have mainpage container
  return (
    <body className="main">
      <NavColumn />
      <ChatPage />
    </body>
  )
}

export default Main;
