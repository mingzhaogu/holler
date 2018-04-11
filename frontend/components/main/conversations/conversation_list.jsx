import React from 'react';

import ConversationListItem from './conversation_list_item';

class ConversationList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <section className="conversation-list">
        <ul>
          {this.props.conversations.map((conv) => {
            return (
              <ConversationListItem
                key={conv.id}
                conv={conv}
                lastMsg={this.props.lastMessages[conv.id]}
              />
            )
          })}
        </ul>
      </section>
    )
  }
}

export default ConversationList;
