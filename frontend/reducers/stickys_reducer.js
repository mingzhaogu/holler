import { merge } from 'lodash';
import {
  RECEIVE_STICKYS
} from '../actions/giphy_actions';

const StickysReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_STICKYS:
      newState = merge({}, oldState);
      // if (action.giphys.data === []) {
      //   action.giphys.data.forEach((gif) => {
      //     console.log(gif);
      //     newState = merge(newState, { [gif.id]: gif} );
      //   });
      // }
      // return newState;
      console.log("action", action);
      return action.stickys.data;
    default:
      return oldState;
  }
};

export default StickysReducer;
