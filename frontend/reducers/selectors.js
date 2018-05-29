import { last } from 'lodash';

export const findCurrentUser = (state) => {
  const currentUserId = state.session.currentUser.id;
  return state.entities.users[currentUserId];
};

// export const selectAllConversations = (state) => {
//   const currentUser = findCurrentUser(state);
//   console.log("CU", currentUser);
//   if (!currentUser) return [];
//
//   return currentUser.conversationIds.map((id) => {
//     return state.entities.conversations[id];
//   });
//   // return Object.values(state.entities.conversations);
//
// };

export const selectAllConversations = (state) => {
  return Object.values(state.entities.conversations);
};

export const findConversationId = (state, ownProps) => (
  ownProps.match.params.convId
);

export const findConversation = (state, ownProps) => (
  state.entities.conversations[findConversationId(state, ownProps)]
);

export const findConversationImage = (state, ownProps) => {
  const currentConvo = findConversation(state, ownProps);

  if (currentConvo) {
    return currentConvo.imageUrl;
  } else {
    return undefined;
  }
};

export const findConversationName = (state, ownProps) => {
  const currentConvo = findConversation(state, ownProps);

  if (currentConvo) {
    return currentConvo.chatName;
  } else {
    return undefined;
  }
};

export const findAllMessages = (state, ownProps) => {
  // const convoId = findConversationId(state, ownProps);
  const currentConvo = findConversation(state, ownProps);

  if (currentConvo && currentConvo.messageIds) {
    const messageIds = currentConvo.messageIds;
    return messageIds.map((id) => state.entities.messages[id]);
  } else {
    return [];
  }
};

export const findLastMessages = (state) => {
  let result = {};
  selectAllConversations(state).forEach((conv) => {
    const lastMsgId = last(conv.messageIds);
    if (lastMsgId) {
      result[conv.id] = state.entities.messages[lastMsgId];
    } else {
      result[conv.id] = {body: ""};
    }
  });

  return result;
};
