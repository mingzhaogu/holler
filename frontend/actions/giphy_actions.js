import * as GiphyUtil from '../util/giphy_api_util';

export const RECIVE_GIPHYS = 'RECIVE_GIPHYS';

export const receiveGiphys = (giphys) => ({
  type: RECIVE_GIPHYS,
  giphys
});

export const fetchGiphys = (query, offset) => (dispatch) => (
  GiphyUtil.fetchGiphys(query, offset)
    .then((giphys) => dispatch(receiveGiphys(giphys)))
);
