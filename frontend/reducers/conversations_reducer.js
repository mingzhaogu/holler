import { merge } from 'lodash';
import {
  RECEIVE_ALL_CONVERSATIONS,
  RECEIVE_CONVERSATION,
  // RECEIVE_NEW_CONV_NAME,
  // REMOVE_CONVERSATION
} from '../actions/conversation_actions';
import {
  RECEIVE_MESSAGE
} from '../actions/message_actions';

const ConversationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_CONVERSATIONS:
      return action.payload.conversations;
    case RECEIVE_CONVERSATION:
      newState = merge({}, oldState, action.payload.conversation);
      return newState;
    // case RECEIVE_NEW_CONV_NAME:
    //   newState = merge({}, action.conversation);
    //   return newState;
    case RECEIVE_MESSAGE:
      newState = merge({}, oldState);
      const convoId = action.payload.message.conversationId;
      newState[convoId].messageIds = action.payload.messageIds;
      return newState;

    // case REMOVE_CONVERSATION:
    //   newState - merge({}, oldState);
    //   delete newState[action.conversationId];
    //   return newState;
    default:
      return oldState;
  }
};

export default ConversationsReducer;
