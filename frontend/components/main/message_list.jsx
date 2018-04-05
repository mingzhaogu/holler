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

  componentWillMount() {
    this.props.fetchAllConversations();
  }

  render() {
    console.log("message_list.jsx")
    console.log(this.props.conversations)
    return (
      <section className="message-list">
        --HERE LIES MESSAGE_LIST.JSX--
        <ul>
          {this.props.conversations.map((conv) => {
            return(
              <MessageListItem
                key={conv.id}
                props={this.props}
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
