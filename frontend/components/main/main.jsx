import React, { Component, Fragment } from 'react';

import NavColumn from '../nav_column/nav_column';
import ChatroomRouter from '../chatroom/chatroom_router';
import UserSettings from '../user_settings/user_settings_container';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  
  componentDidMount() {
    Promise.all([
      this.props.fetchUsers(),
      this.props.fetchAllConversations()
    ]).then(() => {
      this.setState({ loading: false })
    });
  }
  
  render() {
    if (this.state.loading) {
      return null;
    } else {
      return (
        <Fragment>
          <NavColumn />
          <ChatroomRouter />
          <UserSettings />
        </Fragment>
      );
    }
  }
}

export default Main;
