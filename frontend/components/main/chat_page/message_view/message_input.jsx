import React from 'react';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMessage: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  // WHAT IS REDUX FORM
  // https://github.com/erikras/redux-form/issues/572

  handleKeyPress(e) {
    console.log('keypress', e.shiftKey);
    if (e.key === "Enter" && e.shiftKey === false) {
      this.handleSubmit(e)
    }
  }

  handleInputChange(e) {
    this.setState(
      { currentMessage: e.target.value },
      () => console.log("else2", this.state.currentMessage)
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('currentmsg', this.state);
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
          onChange={this.handleInputChange}
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
