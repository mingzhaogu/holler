import { merge } from 'lodash';
import {
  RECEIVE_GIPHYS,
  RECEIVE_STICKYS,
  RECEIVE_MORE_STICKYS
} from '../actions/giphy_actions';

const StickysReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_STICKYS:
      return action.stickys.data;
    case RECEIVE_MORE_STICKYS:
      let receivedData = {};
      action.stickys.data.forEach(
        (sticker) => (receivedData[sticker.id] = sticker)
      );
      newState = merge({}, oldState, receivedData);
      return newState;
    case RECEIVE_GIPHYS:
      return {};
    default:
      return oldState;
  }
};

export default StickysReducer;
