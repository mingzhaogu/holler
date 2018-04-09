import React from 'react';
// import { NavLink } from 'react-router-dom';

const FriendDetailsItem = ({user}) => {
  return (
    <li key={user.id}
      className="friend-details-users">
      <img src={user.imageUrl} />
      <label>{user.username}</label>
    </li>
  )
}

export default FriendDetailsItem;
