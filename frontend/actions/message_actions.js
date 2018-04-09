import * as MessageUtil from '../util/message_api_util';

export const SET_MESSAGES = 'SET_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
// export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  messages
});

export const receiveMessage = (payload) => ({
  type: RECEIVE_MESSAGE,
  payload
});

// export const receiveMessages = (messages) => ({
//   type: RECEIVE_MESSAGES,
//   messages
// });

export const fetchMessage = (convId) => (dispatch) => (
  MessageUtil.fetchMessage(convId)
    .then(message => dispatch(receiveMessage(message)))
);

// export const fetchMessages = (convId) => (dispatch) => (
//   MessageUtil.fetchMessages(convId)
//     .then(messages => dispatch(receiveMessages(messages)))
// );
