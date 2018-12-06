import React, { Component } from 'react';

import ConversationListItem from './conversation_list_item';

class ConversationList extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { lastMessages, users } = this.props;

    return (
      <section className="conversation-list">
        <ul>
          {this.props.conversations.map((conv) => {
            const lastMsg = lastMessages[conv.id];
            const sender = users[lastMsg.senderId];

            return <ConversationListItem key={conv.id} conv={conv} lastMsg={lastMsg} sender={sender} />;
          })}
        </ul>
      </section>
    )
  }
}

export default ConversationList;
