import React from 'react';
// import { Link } from 'react-router-dom';

// pencil -> on click compose message

const NavBar = ({ logout }) => {

    // some container with
  return (
    <nav className="nav">
      <i className="fa fa-cog"
        aria-hidden="true"
        onClick={ logout }
      />

      <h1 className="holler main-holler">Holler</h1>
      <p>click the tiny cog to logout</p>

      <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={logout}></i>
    </nav>

  )
}

export default NavBar;
