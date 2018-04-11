import * as UserUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = (payload) => ({
  type: RECEIVE_USERS,
  payload
});

export const fetchUsers = (query) => (dispatch) => (
  UserUtil.fetchUsers(query)
    .then((payload) => dispatch(receiveUsers(payload)))
);
