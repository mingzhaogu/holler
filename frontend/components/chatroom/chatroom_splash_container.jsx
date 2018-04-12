import React from 'react';
import { connect } from 'react-redux';

import Chatroom from './chatroom';

const mapStateToProps = (state, ownProps) => ({
  chatHead : 'Welcome!'
})

const mapDispatchToProps = (dispatch) => ({
  fetchConversation: () => {}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatroom);
