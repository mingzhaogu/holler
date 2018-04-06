import { last } from 'lodash';

export const selectAllConversations = (state) => (
  Object.values(state.entities.conversations)
);

export const findLastMessages = (state) => {
  let result = {};
  let someVariable = selectAllConversations(state);
  someVariable.forEach((conv) => {
    const lastMsgId = last(conv.messagesId);
    result[conv.id] = state.entities.messages[lastMsgId];
  });

  return result;
};
