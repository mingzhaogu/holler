import React from 'react';
import { connect } from 'react-redux';

import Giphys from './giphys';
import { fetchGiphys } from '../../actions/giphy_actions';

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
)(Giphys);
