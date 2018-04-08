import React from 'react';
import { withRouter } from 'react-router';

class FriendDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleDetails() {
    const chatName = this.props.chatName;
    if (this.props.showFriendDetails) {
      return (
        <div className="friend-details">
          <div className="friend-details-header">
            <img src="https://i.imgur.com/XSTheUg.png"
              className="friend-details-convo-pic" />

            <span className="friend-details-convo-name">
              {chatName}
            </span>
          </div>
        </div>
      )
    }
  }

  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.toggleDetails()}
      </div>
    )
  }
}

export default FriendDetails;
