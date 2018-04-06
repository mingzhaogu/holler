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

  componentDidMount() {
    this.props.fetchAllConversations();
  }

  render() {
    // console.log("message_list.jsx----------------------")
    // console.log(this.props.conversations[0])

    return (
      <section className="message-list">
        --HERE LIES MESSAGE_LIST.JSX--
        <ul>
          {this.props.conversations.map((conv) => {
            const lastMsgId = conv.messagesId.last;
            return(
              <MessageListItem
                key={conv.id}
                conv={conv}
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
