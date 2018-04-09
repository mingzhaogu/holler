import { merge } from 'lodash';
import {
  RECEIVE_ALL_CONVERSATIONS,
  RECEIVE_CONVERSATION,
  // REMOVE_CONVERSATION
} from '../actions/conversation_actions';

const ConversationReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_ALL_CONVERSATIONS:
      return merge({}, action.payload.conversations);
    case RECEIVE_CONVERSATION:
      newState = merge({}, oldState, action.payload.conversation);
      console.log("conv red", action);
      return newState;
    // case REMOVE_CONVERSATION:
    //   newState - merge({}, oldState);
    //   delete newState[action.conversationId];
    //   return newState;
    default:
      return oldState;
  }
};

export default ConversationReducer;
