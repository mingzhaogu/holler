import * as ConversationUtil from '../util/conversation_api_util';

export const RECEIVE_ALL_CONVERSATIONS = 'RECEIVE_ALL_CONVERSATIONS';
export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION';
export const RECEIVE_NEW_CONV_NAME = 'RECEIVE_NEW_CONV_NAME';
// export const REMOVE_CONVERSATION = 'REMOVE_CONVERSATION';

export const START_LOADING_CONVERSATIONS = 'START_LOADING_CONVERSATIONS';
export const START_LOADING_SINGLE_CONVERSATION = 'START_LOADING_SINGLE_CONVERSATION';

export const receiveAllConversations = (payload) => ({
  type: RECEIVE_ALL_CONVERSATIONS,
  payload
});

export const receiveConversation = (payload) => ({
  type: RECEIVE_CONVERSATION,
  payload
});

export const startLoadingConversations = (payload) => ({
  type: START_LOADING_CONVERSATIONS,
  payload
});

export const startLoadingSingleConversation = (payload) => ({
  type: START_LOADING_SINGLE_CONVERSATION,
  payload
});

export const fetchAllConversations = (query) => (dispatch) => (
  ConversationUtil.fetchConversations(query)
    .then(payload => dispatch(receiveAllConversations(payload)))
);

// export const fetchAllConversations = (query) => (dispatch) => {
//   dispatch(startLoadingConversations());
//   // debugger
//   return ConversationUtil.fetchConversations(query).then(payload => {
//       dispatch(receiveAllConversations(payload));
//       return payload;
//   });
// };

// export const fetchAllConversations = (query) => (dispatch) => {
//   dispatch(startLoadingConversations());
//   // debugger
//   setTimeout(() => (
//     ConversationUtil.fetchConversations(query).then(payload => {
//       dispatch(receiveAllConversations(payload));
//       return payload;
//     })), 3000);
// };

export const fetchConversation = (id) => (dispatch) => (
  ConversationUtil.fetchConversation(id)
    .then(conversation => dispatch(receiveConversation(conversation)))
);

// export const fetchConversation = (id) => (dispatch) => {
//   dispatch(startLoadingSingleConversation());
//   // debugger
//   setTimeout(() => (
//     ConversationUtil.fetchConversation(id).then(payload => {
//       dispatch(receiveConversation(payload));
//       return payload;
//     })), 3000);
// };

export const createConversation = (userIds, chatName) => (dispatch) => (
  ConversationUtil.createConversation(userIds, chatName)
    .then((conversation) => dispatch(receiveConversation(conversation)))
);

export const updateConversation = (convo) => (dispatch) => (
  ConversationUtil.updateConversation(convo)
    .then((conversation) => dispatch(receiveConversation(conversation)))
);

// export const deleteConversation = (conversationId) => (dispatch) => (
//   ConversationUtil.deleteConversation(conversationId)
//     .then((post) => dispatch(removeConversation(conversationId)))
// );
