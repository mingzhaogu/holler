import React from 'react';
import NavBar from './nav_bar';
import MessageListContainer from './message_list_container';

const NavColumn = (props) => {

  //  add messageListContainer
  return (
    <nav className="nav-col">
      <NavBar props={props} />
      <p>'HELLO FROM NAV-COLUMN.JSX'</p>
      <MessageListContainer />
    </nav>
  )
}

export default NavColumn;
