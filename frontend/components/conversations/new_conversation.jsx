import React from 'react';

class NewConversation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      selectedUsers: [],
      selectedUserIds: [],
      chatName: "",
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showQueryResults = this.showQueryResults.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleInput(e) {
    this.setState({ query: e.target.value });
    this.props.fetchUsers(e.target.value);
  }

  handleSelection(user) {
    return (e) => {
      const selectedIds = this.state.selectedUserIds;

      if (this.state.selectedUserIds.includes(user.id)) {
        e.currentTarget.classList.remove("selected-for-new-convo");
        const index = selectedIds.indexOf(user.id);
        selectedIds.splice(index, 1);
      } else {
        e.currentTarget.classList.add("selected-for-new-convo");
        selectedIds.push(user.id);
      }

      this.setState({ selectedUserIds: selectedIds });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.selectedUserIds.length > 0) {
      const users = this.state.selectedUserIds;
      users.push(this.props.currentUserId);
      this.props.createConversation(
        users
      ).then((action) => this.props.history.push(`${Object.keys(action.payload.conversation)[0]}`))
    }
  }

  showQueryResults() {
    return (
      this.props.userResults.map((user) => {
        if (this.props.currentUserId === user.id) return null;

        let selected = "";
        if (this.state.selectedUserIds.includes(user.id)) {
          selected = "selected-for-new-convo";
        }
        return (
          <li key={user.id}
            onClick={this.handleSelection(user)}
            className={selected}>
            <img src={user.imageUrl} width="50px" height="50px"/>
            <label>{user.username}</label>
          </li>
        )
      })
    )
  }

  render() {
    const disabled = (this.state.selectedUserIds.length > 0) ? "" : "disabled"

    return(
      <section className="new-conversation">
        <div className="search-bar">
          <label className="search-bar-to">To:</label>

          <input type="text"
            className="search-bar-input"
            onChange={this.handleInput}
            value={this.state.query}
            placeholder="Type the name of a person or select from below"
          />

          <button className={`compose-message ${disabled}`}
            onClick={this.handleSubmit}>compose message</button>
        </div>

        <ul className="search-users-results">
          {this.showQueryResults()}
        </ul>
      </section>
    )
  }
}

export default NewConversation;
