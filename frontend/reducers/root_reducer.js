import { combineReducers } from 'redux';

// import each individual reducer:
import EntitiesReducer from './entities_reducer';
import GiphysReducer from './giphys_reducer';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import UIReducer from './ui_reducer';

// fix rootReducer to include actual reducers
const rootReducer = combineReducers({
  entities: EntitiesReducer,
  giphys: GiphysReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  ui: UIReducer
});

export default rootReducer;
