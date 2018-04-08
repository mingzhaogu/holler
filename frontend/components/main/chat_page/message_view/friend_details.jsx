import React from 'react';
import { withRouter } from 'react-router';

class FriendDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  // probably need container for this

  render() {
    console.log(this.props);
    return (
      <div className="friend-details">
        <div className="friend-details-header">
          <img src="https://i.imgur.com/XSTheUg.png"
            className="friend-details-convo-pic" />

          <span className="friend-details-convo-name">
            {this.props.chatName}
          </span>
        </div>
      </div>
    )
  }
}

export default FriendDetails;
