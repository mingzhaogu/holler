import { combineReducers } from 'redux';

// import each individual reducer:
import SessionReducer from './session_errors_reducer';

const errorsReducer = combineReducers({
  session: SessionReducer
});

export default errorsReducer;
