import React from 'react';
import MessageListContainer from './message_list_container';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      conversations: []
    }

    this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount() {
    this.props.fetchAllConversations();
    this.props.fetchConversations().then(
      (payload) => {
        this.setState({
          conversations: Object.values(payload.conversations)
        })
      }
    )
  }

  handleInput(e) {
    this.setState({ query: e.target.value })
    this.props.fetchConversations(e.target.value).then(
      (payload) => {
        this.setState({
          conversations: Object.values(payload.conversations)
        })
      }
    )
  }

  render() {
    return (
      <section className="search-col">
        <div className="search-bar">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input type="text"
            className="search-bar-input"
            onChange={this.handleInput}
            value={this.state.query}
            placeholder="Search Holler"
          />
        </div>

        <MessageListContainer convos={this.state.conversations} />
      </section>
    )
  }
}

export default Search;
