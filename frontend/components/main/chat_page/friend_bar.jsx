import React from 'react';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import { last } from 'lodash';

const mapStateToProps = (state, ownProps) => {
  // need to get active conversation

  return ({
    name: ownProps.name
  })
}

const mapDispatchToProps = (dispatch) => ({})

const FriendBar = (props) => {
  return (
    <nav className="friend-bar">
      <span className="friend-bar-name">
        {props.chatName}
      </span>

      <ul className="friend-bar-icons">
        <li>
          <i className="fa fa-info-circle" aria-hidden="true" />
        </li>
      </ul>
    </nav>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendBar);
