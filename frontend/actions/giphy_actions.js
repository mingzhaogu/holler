import * as GiphyUtil from '../util/giphy_api_util';

export const RECEIVE_GIPHYS = 'RECEIVE_GIPHYS';
export const RECEIVE_STICKYS = 'RECEIVE_STICKYS';

export const receiveGiphys = (giphys) => ({
  type: RECEIVE_GIPHYS,
  giphys
});

export const receiveStickys = (stickys) => ({
  type: RECEIVE_STICKYS,
  stickys
});

export const fetchGiphys = (query, offset) => (dispatch) => (
  GiphyUtil.fetchGiphys(query, offset)
  .then((giphys) => dispatch(receiveGiphys(giphys)))
);

export const fetchStickys = (query, offset) => (dispatch) => (
  GiphyUtil.fetchStickys(query, offset)
    .then((stickys) => dispatch(receiveStickys(stickys)))
);
