import React from 'react';
import { connect } from 'react-redux';

import Main from './main';

import { fetchAllConversations } from "../../actions/conversation_actions";
import { fetchUsers } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
  fetchAllConversations: () => dispatch(fetchAllConversations()),
  fetchUsers: () => dispatch(fetchUsers()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
