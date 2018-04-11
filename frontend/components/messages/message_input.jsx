import React from 'react';

import GiphysContainer from '../giphys/giphys_container';
import { createMessage } from '../../util/message_api_util';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMessage: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateCurrentMessage = this.updateCurrentMessage.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.getGiphyWidIt = this.getGiphyWidIt.bind(this)
    this.getStickyWidIt = this.getStickyWidIt.bind(this)
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
    this.props.toggleGiphys();
  }

  getStickyWidIt(e) {
    e.preventDefault();
    this.props.toggleStickys();
  }

  render() {
    const { fetchGiphys } = this.props;
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

        <div className="fun-icons">
          <i className="fa fa-paw"
            aria-hidden="true"
            onClick={this.getStickyWidIt}
          />

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
