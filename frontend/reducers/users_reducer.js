import { merge } from 'lodash';
import {
  RECEIVE_ALL_CONVERSATIONS,
  RECEIVE_CONVERSATION
} from '../actions/conversation_actions';

const UserReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_ALL_CONVERSATIONS:
      return merge({}, action.payload.users);
    case RECEIVE_CONVERSATION:
      newState = merge({}, oldState, action.payload.users);
      return newState;
    default:
      return oldState;
  }
};

export default UserReducer;
