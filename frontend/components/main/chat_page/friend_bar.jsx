import React from 'react';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from "../../footer/footer";

const FriendBar = (props) => {

  return (
    <nav className="friend-bar">
      <span className="friend-bar-name">
        {props.chatName}
      </span>

      <ul className="friend-bar-icons">
        <li>
          <i className="fa fa-info-circle"
            aria-hidden="true"
            onClick={props.toggleView}
          />
        </li>
      </ul>
    </nav>
  )
}

export default FriendBar;
