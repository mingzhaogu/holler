import React from 'react';
import { NavLink } from 'react-router-dom';

const MessageListItem = (props) => {
  return (
    <NavLink to={`/${props.conv.chatName}`}
      className="message-list-item"
      activeClassName="active"
    >

      <img src="https://i.imgur.com/XSTheUg.png"
        className="message-list-item-pic" />

      <main className="message-list-item-body">
        <span className="message-list-item-convo-name">
          {props.conv.chatName}
        </span>

        <div className="message-list-item-body">
          {props.lastMsg.body}
        </div>
      </main>
    </NavLink>
  )
}

export default MessageListItem;
