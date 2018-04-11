import React from 'react';

import ConversationListContainer from '../conversations/conversation_list_container';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
    }

    this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount() {
    this.props.fetchAllConversations("")
  }

  handleInput(e) {
    this.setState({ query: e.target.value })
    this.props.fetchAllConversations(e.target.value)
  }

  render() {
    return (
      <section className="search-col">
        <div className="search-bar">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input type="text"
            className="search-bar-input"
            onChange={this.handleInput}
            value={this.state.query}
            placeholder="Search Holler"
          />
        </div>

        <ConversationListContainer convos={this.props.conversations} />
      </section>
    )
  }
}

export default Search;
