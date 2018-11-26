import React from 'react';
import { withRouter } from 'react-router';

import FriendDetailsUserList from './friend_details_user_list';
import IconLinksComponent from '../icon_links/icon_links_component';

class FriendDetails extends React.Component {
  constructor(props) {
    super(props);
    const convoName = props.convoName;

    this.state = {
      isEditing: false,
      convoName: "",
      imageFile: null,
      imageUrl: null,
    }

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.submitChanges = this.submitChanges.bind(this);
    this.togglePencil = this.togglePencil.bind(this);
    this.updateImg = this.updateImg.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.convoName !== nextProps.convoName) {
      this.setState({
        isEditing: false,
        convoName: nextProps.convoName,
        imageFile: null,
        imageUrl: nextProps.convoImage,
      })
    }
  }

  handleKeyPress(e) {
    if (e.key === "Enter" && e.shiftKey === false) {
      this.submitChanges(e)
    }
  }

  handleInput(e) {
    this.setState({ convoName: e.target.value })
  }

  submitChanges(e) {
    var formData = new FormData();
    formData.append("conversation[chat_name]", this.state.convoName)

    if (this.state.imageFile) {
      formData.append("conversation[image]", this.state.imageFile)
    }

    this.props.updateConversation(formData, this.props.currentConvo.id)
    this.setState({ isEditing: false })
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

  togglePencil(e) {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  }

  staticHeader() {
    return (
      <div className="friend-details-header">
        <label htmlFor="file"><img src={this.props.convoImage}
          className="friend-details-convo-pic"
          height="50"
          width="50"
        /></label>

        <input type="file"
          id="file"
          accept="image/*"
          onChange={this.updateImg} />

        <label className="friend-details-convo-name"
          onClick={this.togglePencil}
        >
          {this.props.convoName}
        </label>

        <i className="fa fa-pencil"
          aria-hidden="true"
          onClick={this.togglePencil}
        />
      </div>
    )
  }

  editHeader() {
    return (
      <React.Fragment>
        <div className="friend-details-header">
          <label htmlFor="file"><img src={this.state.imageUrl}
            className="friend-details-convo-pic"
            height="50"
            width="50"
          /></label>

          <input type="file"
            id="file"
            accept="image/*"
            onChange={this.updateImg}
          />

          <input className="friend-details-convo-name edit-convo-name"
            autoFocus
            value={this.state.convoName}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleInput}
          />

          <i className="fa fa-floppy-o"
            aria-hidden="true"
            onClick={this.submitChanges}
          />
        </div>
      </React.Fragment>
    )
  }

  friendDetails() {
    const header = (this.state.isEditing) ? (this.editHeader()) : (this.staticHeader());

    return (
      <div className="friend-details">
        {header}
        <IconLinksComponent />
        <FriendDetailsUserList convoUsers={this.props.convoUsers} />
      </div>
    )
  }

  render() {
    if (this.props.showFriendDetails) {
      return (
        <div>
          {this.friendDetails()}
        </div>
      )
    } else { return null }
  }
}

export default FriendDetails;
