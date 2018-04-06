import { merge } from 'lodash';
import {
  RECEIVE_ALL_CONVERSATIONS,
} from '../actions/conversation_actions';

const UserReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_ALL_CONVERSATIONS:
      return merge({}, action.payload.users);
    default:
      return oldState;
  }
};

export default UserReducer;
