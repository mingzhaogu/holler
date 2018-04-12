import React from 'react';
import { withRouter } from 'react-router';

import FriendDetailsUserItem from './friend_details_user_item';
import { GithubIconLink, LinkedInIconLink } from '../icon_links/icon_links';

class FriendDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleDetails() {
    const chatName = this.props.convoName || "Hello there!";
    if (this.props.showFriendDetails) {
      return (
        <div className="friend-details">
          <div className="friend-details-header">
            <img src={this.props.convoImage}
              className="friend-details-convo-pic" />

            <span className="friend-details-convo-name">
              {chatName}
            </span>

            <i className="fa fa-pencil" aria-hidden="true" />
          </div>

          <div className="annie-links">
            <GithubIconLink />
            <LinkedInIconLink />
          </div>

          <ul className="friend-details-users">
            <label className="friend-details-users-label">People</label>
            {this.props.convoUsers.map((user) => (
              <FriendDetailsUserItem
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
