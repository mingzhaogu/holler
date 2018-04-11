import React from 'react';
import { connect } from 'react-redux';

import ToggleGiphy from './toggle_giphy';
import { fetchGiphys } from '../../../actions/giphy_actions';

const mapStateToProps = (state, ownProps) => ({
  open: ownProps.open,
  giphys: ownProps.giphys
})

const mapDispatchToProps = (dispatch) => ({
  fetchGiphys: (query, offset) => dispatch(fetchGiphys(query, offset))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleGiphy);
