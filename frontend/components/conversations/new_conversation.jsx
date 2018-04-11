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
    this.showSelectedUsers = this.showSelectedUsers.bind(this);
    this.showQueryResults = this.showQueryResults.bind(this);
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  handleInput(e) {
    this.setState({ query: e.target.value });
    this.props.fetchUsers(e.target.value);
  }

  handleSelection(e) {
    // this.setState({selectedUsers: , selectedUserIds})
    console.log("handleSelection", e.target.innerText);
  }

  handleSubmit(e) {
    e.preventDefault();
    const users = this.selectedUserIds.push(this.props.currentUser.id);
    this.props.createConversation(
      users,
      nil
    )
  }

  showSelectedUsers() {
    return (
      this.state.selectedUsers.map((user) => (
        <li key={user.id}>
          {user.username}
        </li>
      ))
    )
  }

  showQueryResults() {
    return (
      this.props.userResults.map((user) => {
        if (this.state.selectedUsers.includes(user)) return nil;
        else {
          return (
            <li key={user.id}
            onClick={this.handleSelection}>
              <img src={user.imageUrl} width="50px" height="50px"/>
              <label>{user.username}</label>
            </li>
          )
        }
      })
    )
  }

  render() {
    //display selected users

    //search, submit
    //selectedUsers

    //display all users in search
    return(
      <section className="new-conversation">
        <div className="search-bar">
          <label className="search-bar-to">To:</label>

          <ul className="search-bar-selected-users">
            {this.showSelectedUsers()}
          </ul>

          <input type="text"
            className="search-bar-input"
            onChange={this.handleInput}
            value={this.state.query}
            placeholder="Type the name of a person"
          />
        </div>

        <ul className="search-users-results">
          {this.showQueryResults()}
        </ul>
      </section>
    )
  }
}

export default NewConversation;
