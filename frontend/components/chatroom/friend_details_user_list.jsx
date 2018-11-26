import React from 'react';
import { connect } from 'react-redux';;

import FriendDetailsUserItem from './friend_details_user_item';
import { findConversationImage, findConversationName } from '../../reducers/selectors';

const FriendDetailsUserList = ({ convoUsers }) => {
  return (
    <div className="friend-details-users-list">
      <label className="friend-details-users-label">People In Chat</label>
      <ul className="friend-details-users">
        {convoUsers.map(user => (
          <FriendDetailsUserItem key={user.id} user={user} />
          ))}
      </ul>
    </div>
  );
};

export default FriendDetailsUserList;
