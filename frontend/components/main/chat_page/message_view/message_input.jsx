import React from 'react';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    }

  }

  // WHAT IS REDUX FORM
  // https://github.com/erikras/redux-form/issues/572

  render() {
    return (
      <form className="message-form">
        <textarea
          className="message-form-input"
          value={this.state.body}
          onChange=
      </form>
    )
  }


}
