import { merge } from 'lodash';
import { RECEIVE_USERS } from '../actions/user_actions';
import {
  RECEIVE_ALL_CONVERSATIONS,
  RECEIVE_CONVERSATION
} from '../actions/conversation_actions';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_USERS:
      return merge({}, action.payload.users);
    case RECEIVE_ALL_CONVERSATIONS:
      return merge({}, action.payload.users);
    case RECEIVE_CONVERSATION:
      return merge({}, action.payload.users);
    default:
      return oldState;
  }
};

export default UsersReducer;
