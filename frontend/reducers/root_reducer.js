import { combineReducers } from 'redux';

// import each individual reducer:
import session from './session_reducer';
import errors from './errors_reducer';
import entities from './entities_reducer';

// fix rootReducer to include actual reducers
const rootReducer = combineReducers({
  entities,
  session,
  errors
});

export default rootReducer;
