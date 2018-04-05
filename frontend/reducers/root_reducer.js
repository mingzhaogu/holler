import { combineReducers } from 'redux';

// import each individual reducer:
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import EntitiesReducer from './entities_reducer';

// fix rootReducer to include actual reducers
const rootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer
});

export default rootReducer;
