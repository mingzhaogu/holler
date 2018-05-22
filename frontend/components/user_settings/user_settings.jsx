import React from 'react';

class UserSettings extends React.Component {
  constructor(props) {
    super(props);

    const name = props.currentUser.name
    this.state = {
      editingName: false,
      name: name,
      imageFile: null,
      imageUrl: null,
    }

    this.closeModal = this.closeModal.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.submitChanges = this.submitChanges.bind(this);
    this.updateImg = this.updateImg.bind(this);
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

    if (this.state.imageFile) {
      formData.append("user[image]", this.state.imageFile)
    }

    this.props.updateUser(formData, this.props.currentUser.id)
    this.setState({ editingName: false }, console.log(this.props.currentUser))
  }

  updateName(e) {
    this.setState({ name: e.target.value })
  }

  updateImg(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({
        imageFile: file,
        imageUrl: fileReader.result
      });
      this.submitChanges(e)
    }

    if (file) fileReader.readAsDataURL(file);
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
            onClick={this.submitChanges}
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

              <label htmlFor="user-file" className="current-user pic-overlay">
                <img src={currentUser.imageUrl}
                  className="current-user-picture"
                  height="50"
                  width="50"
                />
              </label>

              <input type="file"
                id="user-file"
                accept="image/*"
                onChange={this.updateImg}
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
