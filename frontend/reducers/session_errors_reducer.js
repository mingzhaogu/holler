import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  // console.log('action', action);
  let newState;
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;
