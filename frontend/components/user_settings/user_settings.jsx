import React from 'react';

class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    const name = props.currentUser.name
    this.state = {
      name,
      editingName: false
    }

    this.closeModal = this.closeModal.bind(this);
    this.editName = this.editName.bind(this);
  }

  closeModal() {
    this.props.toggleUserSettings;
    this.setState({ editingName: false })
  }

  editName() {
    if (this.state.editingName) {
      return (
        <React.Fragment>
          <input className="current-user-name"
            autoFocus
            value={this.state.name}
            onKeyPress={() => console.log("hello")}
            onChange={() => console.log("aloha")}
          />
          <i className="fa fa-floppy-o"
            aria-hidden="true"
            onClick={() => console.log("hiya")}
          />
        </React.Fragment>
      )
    } else {
      return (
        <label className="current-user-name"
          onClick={() => this.setState({ editingName: true })}
          >{this.state.name}
        </label>
      )
    }
  }

  render() {
    const { currentUser } = this.props;

    if (this.props.modalOpen) {
      return (
        <div className="user-profile-modal-backdrop">
          <div className="user-profile-modal">
            <nav className="user-profile-nav">
              <label className="user-profile-settings">Settings</label>
              <label className="user-profile-done"
                onClick={this.props.toggleUserSettings}
              >Done</label>
            </nav>

            <div className="account-settings">
              <label className="account-settings-label">Account</label>

              <label htmlFor="file" className="current-user pic-overlay">
                <img src={currentUser.imageUrl}
                  className="current-user-picture"
                  height="50"
                  width="50"
                />
              </label>

              <input type="file"
                id="file"
                accept="image/*"
                onChange={() => console.log("hi")}
              />

              {this.editName()}
            </div>
          </div>
        </div>
      );
    } else { return null }
  }

}

export default UserSettings;
