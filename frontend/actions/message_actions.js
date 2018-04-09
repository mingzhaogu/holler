import * as MessageUtil from '../util/message_api_util';

export const SET_MESSAGES = 'SET_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  messages
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

export const fetchMessage = (convId) => (dispatch) => (
  MessageUtil.fetchMessage(convId)
    .then(message => dispatch(receiveMessage(message)))
);
