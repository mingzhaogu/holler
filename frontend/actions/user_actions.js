import * as UserUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUsers = (payload) => ({
  type: RECEIVE_USERS,
  payload
});

export const receiveUser = (currentUser) => ({
  type: RECEIVE_USER,
  currentUser
});

export const fetchUsers = (query) => (dispatch) => (
  UserUtil.fetchUsers(query)
    .then((payload) => dispatch(receiveUsers(payload)))
);

export const updateUser = (formData, userId) => (dispatch) => (
  UserUtil.updateUser(formData, userId)
    .then((user) => dispatch(receiveUser(user)))
);
//
// export const updateConversation = (formData, convId) => (dispatch) => (
//   ConversationUtil.updateConversation(formData, convId)
//     .then((conversation) => dispatch(receiveConversation(conversation)))
// );
