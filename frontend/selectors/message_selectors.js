import { last } from "lodash";

import {
  findCurrentConversation,
  selectAllConversations
} from "./conversation_selectors";

export const findAllMessages = (state, ownProps) => {
  const currentConvo = findCurrentConversation(state, ownProps);

  if (currentConvo) {
    const { messageIds = [] } = currentConvo;
    return messageIds.map(id => findMessage(state, id));
  } else {
    return [];
  }
};

export const findCurrentMessages = (state, ownProps) => (
  state.session.messages || findAllMessages(state, ownProps)
);

export const findMessage = (state, id) => (
  state.entities.messages[id]
);

export const findLastMessages = (state) => {
  let result = {};
  selectAllConversations(state).forEach((conv) => {
    const lastMsgId = last(conv.messageIds);
    if (lastMsgId) {
      result[conv.id] = state.entities.messages[lastMsgId];
    } else {
      result[conv.id] = { body: "", messageType: "text" };
    }
  });

  return result;
};