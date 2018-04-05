import React from 'react';
import { connect } from 'react-redux';
import { last } from 'lodash';

const mapStateToProps = (state, ownProps) => {

  return ({


  })
}



const MessageListItem = (props) => {
  console.log(props)
  return (
    <li className="message-list-item">
      {props.usersId}
      <br/>
      {props.messagesId}
    </li>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageListItem);
