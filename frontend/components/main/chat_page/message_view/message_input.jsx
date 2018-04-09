import React from 'react';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMessage: ''
    }

    console.log("message_input_props", props);
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
    console.log("msg", App.cable);
    App.messages.speak({
      body: e.target.value,
      user_id: 2,
      conversation_id: 2
    })
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
