import React from 'react';
import { withRouter } from 'react-router';

import FriendDetailsItem from './friend_details_item';
import { GithubIconLink, LinkedInIconLink } from '../icon_links/icon_links';

class FriendDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleDetails() {
    const chatName = this.props.chatName || "Hello there!";
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

          <div className="annie-links">
            <GithubIconLink />
            <LinkedInIconLink />
          </div>

          <ul className="friend-details-users">
            <label className="friend-details-users-label">People</label>
            {this.props.chatUsers.map((user) => (
              <FriendDetailsItem
                key={user.id}
                user={user}
              />
            ))}
          </ul>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.toggleDetails()}
      </div>
    )
  }
}

export default FriendDetails;
