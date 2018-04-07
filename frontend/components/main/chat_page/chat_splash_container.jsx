import React from 'react';
import { connect } from 'react-redux';
import ChatPage from './chat_page';
// import MessageView(container?) from './';

const mapStateToProps = (state, ownProps) => ({
  chatHead : 'Welcome!'
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage)
