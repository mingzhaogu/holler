import { merge } from 'lodash';
import {
  RECEIVE_GIPHYS
} from '../actions/giphy_actions';

const GiphysReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_GIPHYS:
      newState = merge({}, oldState);
      // if (action.giphys.data === []) {
      //   action.giphys.data.forEach((gif) => {
      //     console.log(gif);
      //     newState = merge(newState, { [gif.id]: gif} );
      //   });
      // }
      // return newState;
      console.log("action", action);
      return action.giphys.data;
    default:
      return oldState;
  }
};

export default GiphysReducer;
