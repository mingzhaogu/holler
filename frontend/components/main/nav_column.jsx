import React from 'react';
import NavBar from './nav_bar';

const NavColumn = ({ logout }) => {

  //  add messageListContainer
  return (
    <nav className="nav-col">
      <NavBar logout={logout} />
    </nav>
  )
}

export default NavColumn;
