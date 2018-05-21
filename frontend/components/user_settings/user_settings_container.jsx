import React from 'react';
import { connect } from 'react-redux';

import UserSettings from './user_settings';
import { toggleUserSettings } from '../../actions/ui_actions';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  modalOpen: state.ui.showUserSettings,
  currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  toggleUserSettings: () => dispatch(toggleUserSettings()),
  updateUser: (formData, userId) => dispatch(updateUser(formData, userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSettings);
