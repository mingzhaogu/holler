import React from 'react';
import { NavLink } from 'react-router-dom';

const ConversationListItem = (props) => {

  return (
    <NavLink to={`/${props.conv.id}`}
      className="conversation-list-item"
      activeClassName="active"
    >

      <img src="https://i.imgur.com/XSTheUg.png"
        className="conversation-list-item-pic" />

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
