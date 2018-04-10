import { merge } from 'lodash';
import {
  RECEIVE_GIPHYS
} from '../actions/giphy_actions';

const GiphysReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_GIPHYS:
      newState = merge({}, oldState);
      action.data.forEach((gif) =>{
        newState = merge(newState, { [gif.id]: gif} );
      });
      return newState;
    default:
      return oldState;
  }
};

export default GiphysReducer;
