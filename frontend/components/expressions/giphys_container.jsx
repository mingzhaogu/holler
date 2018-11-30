import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Expressions from './expressions';
import {
  fetchGiphys,
  fetchMoreGiphys,
} from '../../actions/giphy_actions';

const mapStateToProps = (state, ownProps) => ({
  convId: ownProps.match.params.convId,
  currentUser: state.session.currentUser,
  messageType: "giphy",
  showExpressions: state.ui.showGiphys,
  expressions: Object.values(state.expressions.giphys),
})

const mapDispatchToProps = (dispatch) => ({
  fetchExpressions: (query, offset = 0) => dispatch(fetchGiphys(query, offset)),
  fetchMoreExpressions: (query, offset = 0) => dispatch(fetchMoreGiphys(query, offset))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Expressions));
