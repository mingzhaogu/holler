import React from 'react';
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
  const mostRecentMessage = props.mostRecentMessage
  console.log('mostRecentMessage', mostRecentMessage);
  return (
    <li className="message-list-item">

      <h3 className="message-list-item-convo-name">
        {mostRecentMessage.senderName}
      </h3>
      <main className="message-list-item-body">
        {mostRecentMessage.body}
      </main>
    </li>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageListItem);
