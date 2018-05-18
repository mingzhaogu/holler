import React from 'react';

class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    const name = props.currentUser.name
    this.state = {
      name,
      imageFile: null,
      editingName: false
    }

    this.closeModal = this.closeModal.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  closeModal() {
    this.props.toggleUserSettings();
    this.setState({ editingName: false });
  }

  handleKeyPress(e) {
    if (e.key === "Enter" && e.shiftKey === false) {
      this.submitChanges(e)
    }
  }

  submitChanges(e) {
    var formData = new FormData();

    formData.append("user[name]", this.state.name)
    formData.append("user[image]", this.state.imageFile)

    // this.props.updateConversation(formData, this.props.currentConvo.id)
    this.setState({ editingName: false })
  }

  updateName(e) {
    this.setState({ name: e.target.value })
  }

  editName() {
    if (this.state.editingName) {
      return (
        <React.Fragment>
          <input className="current-user-name edit-user-name"
            autoFocus
            value={this.state.name}
            onKeyPress={this.handleKeyPress}
            onChange={this.updateName}
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
                onClick={this.closeModal}
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
