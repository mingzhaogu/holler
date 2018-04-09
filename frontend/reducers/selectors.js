import { last } from 'lodash';

export const findCurrentUser = (state) => {
  console.log("state", state);
  console.log("statesession", state.session.currentUser);
  const currentUserId = state.session.currentUser.id;
  console.log("CUI", currentUserId);
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

export const findConvoId = (state, ownProps) => (
  ownProps.match.params.convId
);

export const findAllMessages = (state, ownProps) => {
  const convoId = findConvoId(state, ownProps);
  const convo = state.entities.conversations[convoId];

  if (convo && convo.messageIds) {
    const messageIds = convo.messageIds;
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

export const findConversationName = (state, ownProps) => {
  const convoId = ownProps.match.params.convId;
  const currentConvo = state.entities.conversations[convoId];

  if (currentConvo) {
    return currentConvo.chatName;
  } else {
    return undefined;
  }
};
