import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Giphys from './giphys';
import {
  fetchGiphys,
  fetchStickys
} from '../../actions/giphy_actions';

const mapStateToProps = (state, ownProps) => ({
  convId: ownProps.match.params.convId,
  currentUser: state.session.currentUser,
  showGiphys: state.ui.showGiphys,
  giphys: state.expressions.giphys,
  stickys: state.expressions.stickys
})

const mapDispatchToProps = (dispatch) => ({
  fetchGiphys: (query, offset = 0) => dispatch(fetchGiphys(query, offset)),
  fetchStickys: (query, offset = 0) => dispatch(fetchStickys(query, offset))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Giphys));
