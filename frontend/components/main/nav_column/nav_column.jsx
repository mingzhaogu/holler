import React from 'react';
import NavBarContainer from './nav_bar_container';
import SearchContainer from './search_container';

const NavColumn = (props) => {

// SHOULD HAVE EVERYTHING FOR THE ENTIRE NAV BAR -- LEFT COLUMN
  return (
    <nav className="nav-col">
      <NavBarContainer />
      <SearchContainer />
    </nav>
  )
}

export default NavColumn;
