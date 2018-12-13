import { merge } from 'lodash';
import {
  RECEIVE_USERS,
  RECEIVE_USER
} from '../actions/user_actions';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_USERS:
      return merge({}, action.payload.users);
    case RECEIVE_USER:
      return merge({}, oldState, action.currentUser);

    default:
      return oldState;
  }
};

export default UsersReducer;
