import React from 'react';
import NavHeaderContainer from './nav_header_container';
import SearchContainer from './search_container';

const NavColumn = (props) => {

// SHOULD HAVE EVERYTHING FOR THE ENTIRE NAV BAR -- LEFT COLUMN
  return (
    <nav className="nav-col">
      <NavHeaderContainer />
      <SearchContainer />
    </nav>
  )
}

export default NavColumn;
