import React from 'react';

import { Popover } from '../_reusables/popover';
import { createMessage } from '../../util/message_api_util';
import { capitalize } from '../../util/format';

class Expressions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      offset: 0
    }
  }

  componentDidMount() {
    this.props.fetchExpressions('')
  }

  displayExpressions = () => {
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

  fetchMoreExpressions = offset => {
    const newOffset = this.state.offset + 5;
    this.setState({ offset: newOffset });
    this.props.fetchMoreExpressions(this.state.query, newOffset);
  }

  clearQuery = () => {
    this.setState({ query: '', offset: 0 });
    this.props.fetchExpressions('');
  }

  handleInput = e => {
    this.setState({ query: e.target.value });
    this.props.fetchExpressions(e.target.value);
  }

  sendExpression = e => {
    e.preventDefault();
    createMessage({
      sender_id: this.props.currentUser.id,
      conversation_id: this.props.convId,
      body: e.target.src,
      message_type: this.props.messageType
    });
    this.setState({ query: '' })
  }

  render() {
    const { showExpressions, messageType } = this.props;
    if (!showExpressions) return null;
    
    return <Popover customClasses={`expressions-container ${messageType}`} arrow="bottom" align="left" extended>
        <div className="expressions-search">
          <i className="fa fa-search" aria-hidden="true" />
          <input type="text" className="expressions-search-input" onChange={this.handleInput} value={this.state.query} placeholder={`Search ${capitalize(this.props.messageType)}`} />

          <i className="fa fa-plus" aria-hidden="true" onClick={this.fetchMoreExpressions} />

          <i className="fa fa-times-circle" aria-hidden="true" onClick={this.clearQuery} />
        </div>

        <ul className="display-expressions">{this.displayExpressions()}</ul>
      </Popover>;
  }
}

export default Expressions;
