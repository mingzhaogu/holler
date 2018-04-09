import React from 'react';
import { createMessage } from '../../../../util/message_api_util';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMessage: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateCurrentMessage = this.updateCurrentMessage.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  updateCurrentMessage(e) {
    this.setState({ currentMessage: e.target.value })
  }

  handleKeyPress(e) {
    if (e.key === "Enter" && e.shiftKey === false) {
      this.handleSubmit(e)
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    createMessage({
      sender_id: this.props.currentUser.id,
      conversation_id: this.props.convId,
      body: this.state.currentMessage
    });
    this.setState({ currentMessage: "" })
  }

  render() {
    return (
      <form className="message-form"
      onSubmit={this.handleSubmit}>

        <textarea
          className="message-form-input"
          placeholder="Type a message..."
          value={this.state.currentMessage}
          onKeyPress={this.handleKeyPress}
          onChange={this.updateCurrentMessage}
        />

        <button onClick={this.handleSubmit}>
          Send
        </button>
      </form>
    )
  }
}

export default MessageInput;
