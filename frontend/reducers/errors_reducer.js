import { combineReducers } from 'redux';

// import each individual reducer:
import SessionErrorReducer from './session_errors_reducer';

const errorsReducer = combineReducers({
  session: SessionErrorReducer
});

export default errorsReducer;
