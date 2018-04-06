import React from 'react';

// pencil -> on click compose message

const NavBar = ({ logout, createConversation }) => {

  return (
    <nav className="nav-bar">
      <i className="fa fa-cog"
        aria-hidden="true"
        onClick={ logout }
      />

      <h2 className="holler main-holler">Holler</h2>

      <i className="fa fa-pencil-square-o"
        aria-hidden="true"
        onClick={ createConversation }
      />
    </nav>
  )
}

export default NavBar;
