import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Expressions from './expressions';
import {
  fetchStickys,
  fetchMoreStickys,
} from '../../actions/giphy_actions';

const mapStateToProps = (state, ownProps) => ({
  convId: ownProps.match.params.convId,
  currentUser: state.session.currentUser,
  messageType: "Sticky",
  showExpressions: state.ui.showStickys,
  expressions: Object.values(state.expressions.stickys),
})

const mapDispatchToProps = (dispatch) => ({
  fetchExpressions: (query, offset = 0) => dispatch(fetchStickys(query, offset)),
  fetchMoreExpressions: (query, offset = 0) => dispatch(fetchMoreStickys(query, offset))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Expressions));
