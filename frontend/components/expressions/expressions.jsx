import React from 'react';

import { createMessage } from '../../util/message_api_util';

class Expressions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      offset: 0
    }

    this.handleInput = this.handleInput.bind(this);
    this.fetchMoreExpressions = this.fetchMoreExpressions.bind(this);
    this.clearQuery = this.clearQuery.bind(this);
    this.displayExpressions = this.displayExpressions.bind(this);
    this.sendExpression = this.sendExpression.bind(this);
  }

  componentDidMount() {
    this.props.fetchExpressions("")
  }

  displayExpressions() {
    return (
      this.props.expressions.map((exp) => (
      <li key={exp.id}
        onClick={this.sendExpression}
      >
        <img src={exp.images.fixed_height.url} />
      </li>
      ))
    )
  }

  fetchMoreExpressions(offset) {
    this.setState({ offset: this.state.offset + 5 });
    this.props.fetchMoreExpressions(this.state.query, this.state.offset + 5)
  }

  clearQuery() {
    this.setState({ query: "", offset: 0 });
    this.props.fetchExpressions("");
  }

  handleInput(e) {
    this.setState({ query: e.target.value });
    this.props.fetchExpressions(e.target.value);
  }

  sendExpression(e) {
    e.preventDefault();
    createMessage({
      sender_id: this.props.currentUser.id,
      conversation_id: this.props.convId,
      body: e.target.src,
      message_type: this.props.messageType
    });
    this.setState({ query: "" })
  }

  render() {
    const { showExpressions } = this.props;

    if (!showExpressions) return <div></div>;
    return (
      <div className="giphy-container">
        <div className="giphy-search">
          <i className="fa fa-search" aria-hidden="true" />
          <input type="text"
            className="giphy-search-input"
            onChange={this.handleInput}
            value={this.state.query}
            placeholder={`Search ${this.props.messageType}`}
          />

          <i className="fa fa-plus"
            aria-hidden="true"
            onClick={this.fetchMoreExpressions}
          />

          <i className="fa fa-times-circle"
            aria-hidden="true"
            onClick={this.clearQuery}
          />
        </div>

        <ul className="display-giphys">
          {this.displayExpressions()}
        </ul>

      </div>
    )
  }
}

export default Expressions;
