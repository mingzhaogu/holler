import { merge } from 'lodash';
import {
  RECEIVE_ALL_CONVERSATIONS,
} from '../actions/conversation_actions';

const MessageReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_ALL_CONVERSATIONS:
      return merge({}, action.payload.messages);
    default:
      return oldState;
  }
};

export default MessageReducer;
