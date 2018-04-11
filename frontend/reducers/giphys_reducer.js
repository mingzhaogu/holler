import { merge } from 'lodash';
import {
  RECEIVE_GIPHYS,
  RECEIVE_MORE_GIPHYS,
  RECEIVE_STICKYS
} from '../actions/giphy_actions';

const GiphysReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_GIPHYS:
      return action.giphys.data;
    case RECEIVE_MORE_GIPHYS:
      let receivedData = {};
      action.giphys.data.forEach((gif) => (receivedData[gif.id] = gif));
      newState = merge({}, oldState, receivedData);
      return newState;
    case RECEIVE_STICKYS:
      return {};
    default:
      return oldState;
  }
};

export default GiphysReducer;
