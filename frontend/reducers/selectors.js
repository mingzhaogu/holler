import { last } from 'lodash';

export const findCurrentUser = (state) => {
  const currentUserId = state.session.currentUser.id;
  return state.entities.users[currentUserId];
};

export const selectAllConversations = (state) => {
  const currentUser = findCurrentUser(state);
  if (!currentUser) return [];

  return currentUser.conversationIds.map((id) => {
    return state.entities.conversations[id];
  });
  // return Object.values(state.entities.conversations);

};

export const findLastMessages = (state) => {
  let result = {};

  selectAllConversations(state).forEach((conv) => {
    const lastMsgId = last(conv.messagesId);
    if (lastMsgId) {
      result[conv.id] = state.entities.messages[lastMsgId];
    } else {
      result[conv.id] = {body: ""};
    }
  });

  return result;
};

export const findConversationName = (state, ownProps) => {
  const convoId = ownProps.match.params.convId;
  const currentConvo = state.entities.conversations[convoId];
  
  if (currentConvo) {
    return currentConvo.chatName;
  } else {
    return undefined;
  }
};
