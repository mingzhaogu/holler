import React from 'react';
import NavBar from './nav_bar';


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
    return (
      <section>
        --HERE LIES MESSAGE_LIST.JSX--
        {this.props.conversations}

        'RENDER LIST OF CONVERSATIONS HERE'
      </section>
    )
  }

}

export default MessageList;
