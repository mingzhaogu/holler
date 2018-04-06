import React from 'react';
import NavBarContainer from './nav_bar_container';
import MessageListContainer from './message_list_container';

const NavColumn = (props) => {

// SHOULD HAVE EVERYTHING FOR THE ENTIRE NAV BAR -- LEFT COLUMN
  return (
    <nav className="nav-col">
      <NavBarContainer />
      <MessageListContainer />
    </nav>
  )
}

export default NavColumn;
