import React from 'react';

import ConversationListContainer from './conversation_list_container';
import LoadingIcon from '../main/loading_icon';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
    };
  }

  componentWillMount() {
    this.props.fetchAllConversations("")
  }

  handleInput = e => {
    this.setState({ query: e.target.value });
    this.props.fetchAllConversations(e.target.value);
  }

  render() {
    const {
      conversations,
      loading
    } = this.props;

    // if (loading) { return <LoadingIcon />; }

    return (
      <section className="search-col">
        <div className="search-bar">
          <i className="fa fa-search" aria-hidden="true" />
          <input type="text"
            className="search-bar-input"
            onChange={this.handleInput}
            value={this.state.query}
            placeholder="Search Holler"
          />
        </div>

        <ConversationListContainer convos={conversations} />
      </section>
    )
  }
}

export default Search;
