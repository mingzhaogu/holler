import React from 'react';

const FriendDetailsUserItem = ({user}) => {
  return (
    <li key={user.id}
      className="friend-details-users">
      <img src={user.imageUrl} />
      <label className="friend-details-username">
        {user.name}
      </label>
    </li>
  )
}

export default FriendDetailsUserItem;
