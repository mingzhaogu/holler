import React from 'react';

import NavHeaderContainer from './nav_header_container';
import SearchContainer from './search_container';

const NavColumn = (props) => {

  return (
    <nav className="nav-col">
      <NavHeaderContainer />
      <SearchContainer />
    </nav>
  )
}

export default NavColumn;
