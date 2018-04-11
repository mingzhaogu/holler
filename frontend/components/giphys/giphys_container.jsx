import React from 'react';
import { connect } from 'react-redux';

import Giphys from './giphys';
import { fetchGiphys } from '../../actions/giphy_actions';

const mapStateToProps = (state, ownProps) => ({
  showGiphys: state.ui.showGiphys,
  giphys: state.giphys
})

const mapDispatchToProps = (dispatch) => ({
  fetchGiphys: (query, offset = 0) => dispatch(fetchGiphys(query, offset))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Giphys);
