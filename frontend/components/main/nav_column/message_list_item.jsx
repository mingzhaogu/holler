import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { last } from 'lodash';

const mapStateToProps = (state, ownProps) => {
  const lastMsgId = last(ownProps.conv.messagesId)

  return ({
    mostRecentMessage: state.entities.messages[lastMsgId]
  })
}

const mapDispatchToProps = (dispatch) => ({})

const MessageListItem = (props) => {
  const chatName = props.conv.chatName;
  const mostRecentMessage = props.mostRecentMessage
  // console.log('mostRecentMessage', mostRecentMessage);
  // console.log('props', props);
  return (
    <NavLink to={`/${chatName}`}
      className="message-list-item"
    >

      <img src="https://i.imgur.com/XSTheUg.png"
        className="message-list-item-pic" />

      <main className="message-list-item-body">
        <span className="message-list-item-convo-name">
          {chatName}
        </span>

        <div className="message-list-item-body">
          {mostRecentMessage.body}
        </div>
      </main>
    </NavLink>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageListItem);
