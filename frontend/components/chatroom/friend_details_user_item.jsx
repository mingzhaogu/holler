import React from 'react';

const FriendDetailsUserItem = ({user}) => {
  return (
    <li key={user.id}
      className="friend-details-users">
      <img src={user.imageUrl} />
      <label className="friend-details-username">
        {user.username}
      </label>
    </li>
  )
}

export default FriendDetailsUserItem;
