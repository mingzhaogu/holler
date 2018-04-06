import React from 'react';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import { last } from 'lodash';

const mapStateToProps = (state, ownProps) => {
  // need to get active conversation

  return ({
  })
}

const mapDispatchToProps = (dispatch) => ({})

const FriendBar = (props) => {
  // console.log('mostRecentMessage', mostRecentMessage);
  // console.log('props', props);
  return (
    <nav className="friend-bar">
      <span className="friend-bar-name">
        "HI FRIEND"
      </span>

      <div className="friend-bar-icons">
        "ICONS GO HERE"
      </div>
    </nav>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendBar);
