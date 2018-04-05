import * as APIUtil from '../util/conversation_api_util';

export const RECEIVE_ALL_CONVERSATIONS = 'RECEIVE_ALL_CONVERSATIONS';
export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION';
// export const REMOVE_CONVERSATION = 'REMOVE_CONVERSATION';

export const receiveAllConversations = (conversations) => ({
  type: RECEIVE_ALL_CONVERSATIONS,
  conversations
});

export const receiveConversation = (conversation) => ({
  type: RECEIVE_CONVERSATION,
  conversation
});

// export const removeConversation = (conversationId) => ({
//   type: REMOVE_CONVERSATION,
//   conversationId
// });

export const fetchAllConversations = () => (dispatch) => (
  APIUtil.fetchConversations()
    .then((conversations) => dispatch(receiveAllConversations(conversations)))
);

export const fetchConversation = (id) => (dispatch) => (
  APIUtil.fetchConversation(id)
    .then((conversation) => dispatch(receiveConversation(conversation)))
);

export const createConversation = (convo) => (dispatch) => (
  APIUtil.createConversation(convo)
    .then((conversation) => dispatch(receiveConversation(conversation)))
);

// export const updateConversation = (convo) => (dispatch) => (
//   APIUtil.updateConversation(convo)
//     .then((conversation) => dispatch(receiveConversation(conversation)))
// );

// export const deleteConversation = (conversationId) => (dispatch) => (
//   APIUtil.deleteConversation(conversationId)
//     .then((post) => dispatch(removeConversation(conversationId)))
// );
