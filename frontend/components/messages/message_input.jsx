import React from 'react';

import StickysContainer from "../expressions/stickys_container";
import GiphysContainer from "../expressions/giphys_container";
import { createMessage } from '../../util/message_api_util';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMessage: '',
    };
  }

  updateCurrentMessage = e => {
    this.setState({ currentMessage: e.target.value })
  }

  handleKeyPress = e => {
    if (e.key === "Enter" && e.shiftKey === false) {
      this.handleSubmit(e)
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    createMessage({
      sender_id: this.props.currentUser.id,
      conversation_id: this.props.convId,
      body: this.state.currentMessage
    });
    this.setState({ currentMessage: '' })
  }

  getGiphyWidIt = e => {
    e.preventDefault();
    this.props.toggleGiphys();
    this.props.fetchGiphys();
  }

  getStickyWidIt = e => {
    e.preventDefault();
    this.props.toggleStickys();
    this.props.fetchStickys();
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

        <div className="fun-icons">
          <i className="fa fa-paw"
            aria-hidden="true"
            onClick={this.getStickyWidIt}
          />
          <StickysContainer />

          <i className="fa fa-gift"
            aria-hidden="true"
            onClick={this.getGiphyWidIt}
          />
          <GiphysContainer />

          <i className="fa fa-paper-plane"
          aria-hidden="true"
          onClick={this.handleSubmit}
          />
        </div>
      </form>
    )
  }
}

export default MessageInput;
