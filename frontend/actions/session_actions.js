import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const sessionLogout = () => ({
  type: SESSION_LOGOUT,
});

export const signup = (user) => (dispatch) => (
  APIUtil.signup(user)
    .then(
      (newUser) => (dispatch(receiveCurrentUser(newUser))),
      (error) => (dispatch(receiveErrors(error.responseJSON))))
);

export const login = (user) => (dispatch) => (
  APIUtil.login(user)
    .then(
      (newUser) => (dispatch(receiveCurrentUser(newUser))),
      (error) => (dispatch(receiveErrors(error.responseJSON)))
    )
);

// export const logout = () => (dispatch) => (
//   APIUtil.logout()
//     .then(
//       (user) => (dispatch(receiveCurrentUser(null)))
//     )
// );

export const logout = () => (dispatch) => (
  APIUtil.logout()
    .then(
      (user) => (dispatch(sessionLogout()))
    )
);
