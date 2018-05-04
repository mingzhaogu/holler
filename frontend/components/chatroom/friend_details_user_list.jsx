import React from 'react';
import { connect } from 'react-redux';;

import FriendDetailsUserItem from './friend_details_user_item';
import { findConversationImage, findConversationName } from '../../reducers/selectors';

const FriendDetailsUserList = (props) => {
  const { convoUsers } = props;

  return (
    <ul className="friend-details-users">
      <label className="friend-details-users-label">People In Chat</label>
      {props.convoUsers.map((user) => (
        <FriendDetailsUserItem
          key={user.id}
          user={user}
        />
      ))}
    </ul>
  )

}

export default FriendDetailsUserList;
