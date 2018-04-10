import React from 'react';
import MessageListItem from './message_list_item'

// const mapStateToProps = (state, ownProps) => ({
//   conversations: Object.values(state.entities.conversations)
// })
//
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   fetchAllConversations: () => (dispatch(fetchAllConversations())),
//   fetchConversation: (id) => (dispatch(fetchConversation(id))),
// })



class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // WILL NEED TO ADD SEARCH BAR BEFORE <UL>
    console.log("props", this.props);
    return (
      <section className="message-list">
        <ul>
          {this.props.conversations.map((conv) => {
            return(
              <MessageListItem
                key={conv.id}
                conv={conv}
                lastMsg={this.props.lastMessages[conv.id]}
              />
            )
          })}
        </ul>
        'RENDER LIST OF CONVERSATIONS HERE'
      </section>
    )
  }

}

export default MessageList;
