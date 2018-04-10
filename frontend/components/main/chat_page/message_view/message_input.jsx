import React from 'react';
import { createMessage } from '../../../../util/message_api_util';
import ToggleGiphyContainer from './toggle_giphy_container'

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMessage: '',
      giphyOn: false,
      giphyOffset: 0
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateCurrentMessage = this.updateCurrentMessage.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.getGiphyWidIt = this.getGiphyWidIt.bind(this)
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

  getGiphyWidIt(e) {
    e.preventDefault();

    this.setState({
      giphyOn: !this.state.giphyOn,
      giphyOffset: this.state.giphyOffset + 5
    })

  }

  render() {
    const { fetchGiphys } = this.props;
    return (
      <form className="message-form"
      onSubmit={this.handleSubmit}>

        <div className="giphy-popup">
        </div>

        <textarea
          className="message-form-input"
          placeholder="Type a message..."
          value={this.state.currentMessage}
          onKeyPress={this.handleKeyPress}
          onChange={this.updateCurrentMessage}
        />

        <div className="fun-icons">
          <i className="fa fa-gift"
            aria-hidden="true"
            onClick={this.getGiphyWidIt}
          />
        </div>

        <button onClick={this.handleSubmit}>
          Send
        </button>
      </form>
    )
  }
}

export default MessageInput;
