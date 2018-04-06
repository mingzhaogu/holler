import React from 'react';
// import { Link } from 'react-router-dom';

// pencil -> on click compose message
import NavColumn from './nav_column/nav_column';
import ChatMain from './chat_page/chat_main';
import Footer from '../footer/footer';

const Main = () => {
  return (
    <main className="main">
      <NavColumn />
      <ChatMain />
    </main>
  )
}

export default Main;
