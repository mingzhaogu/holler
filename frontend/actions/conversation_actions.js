import * as ConversationUtil from '../util/conversation_api_util';

export const RECEIVE_ALL_CONVERSATIONS = 'RECEIVE_ALL_CONVERSATIONS';
export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION';
// export const REMOVE_CONVERSATION = 'REMOVE_CONVERSATION';

export const receiveAllConversations = (payload) => ({
  type: RECEIVE_ALL_CONVERSATIONS,
  payload
});

export const receiveConversation = (payload) => ({
  type: RECEIVE_CONVERSATION,
  payload
});

// export const removeConversation = (conversationId) => ({
//   type: REMOVE_CONVERSATION,
//   conversationId
// });

export const fetchAllConversations = (query) => (dispatch) => (
  ConversationUtil.fetchConversations(query)
    .then((payload) => dispatch(receiveAllConversations(payload)))
);

// export const fetchConversation = (id) => (dispatch) => (
//   ConversationUtil.fetchConversation(id)
//     .then((conversation) => dispatch(receiveConversation(conversation)))
// );

export const fetchConversation = (id) => (dispatch) => (
  ConversationUtil.fetchConversation(id)
    .then(conversation => dispatch(receiveConversation(conversation)))
);

export const createConversation = (convo) => (dispatch) => (
  ConversationUtil.createConversation(convo)
    .then((conversation) => dispatch(receiveConversation(conversation)))
);

// export const updateConversation = (convo) => (dispatch) => (
//   ConversationUtil.updateConversation(convo)
//     .then((conversation) => dispatch(receiveConversation(conversation)))
// );

// export const deleteConversation = (conversationId) => (dispatch) => (
//   ConversationUtil.deleteConversation(conversationId)
//     .then((post) => dispatch(removeConversation(conversationId)))
// );
