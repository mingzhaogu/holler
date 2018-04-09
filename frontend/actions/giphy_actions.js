import * as GiphyUtil from '../util/giphy_api_util';

export const RECIVE_GIPHYS = 'RECIVE_GIPHYS';

export const receiveGiphys = (giphys) => ({
  type: RECIVE_GIPHYS,
  giphys
});

export const fetchGiphys = (searchTerm, offset) => (dispatch) => (
  GiphyUtil.fetchGiphys(searchTerm, offset)
    .then((giphys) => dispatch(receiveGiphys(giphys)))
);
