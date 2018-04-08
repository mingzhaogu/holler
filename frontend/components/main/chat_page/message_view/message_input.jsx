import React from 'react';

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

  handleKeyPress(e) {
    if (e.key === "Enter" && e.shiftKey === false) {
      this.handleSubmit(e)
    }
  }

  updateCurrentMessage(e) {
    this.setState({ currentMessage: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    // SOME SORT OF SUBMISSION WITH ACTION CABLE
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

        <button
          onClick={this.handleSubmit}
        >
          Send
        </button>
      </form>
    )
  }
}

export default MessageInput;
