import { combineReducers } from 'redux';

// import each individual reducer:
import session from './session_reducer';

// fix rootReducer to include actual reducers
const rootReducer = combineReducers({
  session
});

export default rootReducer;
