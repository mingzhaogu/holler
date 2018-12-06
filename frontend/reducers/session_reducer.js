import { merge } from 'lodash';

import {
  RECEIVE_CURRENT_USER,
  SESSION_LOGOUT
} from '../actions/session_actions';
import {
  RECEIVE_USER
} from '../actions/user_actions';
import {
  RECEIVE_CONVERSATION
} from '../actions/conversation_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    return merge({}, { currentUser });
    case RECEIVE_USER:
      const { currentUser } = action;
      return merge({}, { currentUser: Object.values(currentUser)[0] });
    case SESSION_LOGOUT:
      return merge({}, { currentUser });
    case RECEIVE_CONVERSATION:
      const { conversation, messages } = action.payload;
      return merge({}, oldState, {
        currentConversation: Object.values(conversation)[0],
        currentMessages: Object.values(messages)
      });
    default:
      return oldState;
  }
};

export default sessionReducer;
