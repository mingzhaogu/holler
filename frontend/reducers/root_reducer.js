import { combineReducers } from 'redux';

// import each individual reducer:
import session from './session_reducer';
import errors from './errors_reducer';

// fix rootReducer to include actual reducers
const rootReducer = combineReducers({
  session,
  errors
});

export default rootReducer;
