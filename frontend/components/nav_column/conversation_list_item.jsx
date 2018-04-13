import React from 'react';
import { NavLink } from 'react-router-dom';

const ConversationListItem = (props) => {

  return (
    <NavLink to={`/${props.conv.id}`}
      className="conversation-list-item"
      activeClassName="active"
    >

      <img src={props.conv.imageUrl}
        className="conversation-list-item-pic"
        height="50"
        width="50" />

      <main className="conversation-list-item-body">
        <span className="conversation-list-item-convo-name">
          {props.conv.chatName}
        </span>

        <div className="conversation-list-item-last-msg">
          {props.lastMsg.body}
        </div>
      </main>
    </NavLink>
  )
}

export default ConversationListItem;
