import * as GiphyUtil from '../util/giphy_api_util';

export const RECEIVE_GIPHYS = 'RECEIVE_GIPHYS';

export const receiveGiphys = (giphys) => ({
  type: RECEIVE_GIPHYS,
  giphys
});

export const fetchGiphys = (query, offset) => (dispatch) => (
  GiphyUtil.fetchGiphys(query, offset)
    .then((giphys) => dispatch(receiveGiphys(giphys)))
);
