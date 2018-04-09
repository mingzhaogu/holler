import { merge } from 'lodash';
import {
  RECEIVE_ALL_CONVERSATIONS,
  RECEIVE_CONVERSATION
} from '../actions/conversation_actions';
import {
  ADD_MESSAGE,
  SET_MESSAGES
} from '../actions/message_actions';

const MessageReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_ALL_CONVERSATIONS:
      return merge({}, action.payload.messages);
    case RECEIVE_CONVERSATION:
      newState = merge({}, oldState, action.payload.messages);
      return newState;
    case ADD_MESSAGE:
      return merge({}, oldState, action.message);
    case SET_MESSAGES:
      return action.messages;
    default:
      return oldState;
  }
};

export default MessageReducer;
