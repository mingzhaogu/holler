import { combineReducers } from 'redux';

import EntitiesReducer from './entities_reducer';
import ExpressionsReducer from './expressions_reducer';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import UIReducer from './ui_reducer';

const appReducer = combineReducers({
  entities: EntitiesReducer,
  expressions: ExpressionsReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  ui: UIReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'SESSION_LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

// const rootReducer = combineReducers({
//   entities: EntitiesReducer,
//   expressions: ExpressionsReducer,
//   session: SessionReducer,
//   errors: ErrorsReducer,
//   ui: UIReducer
// });

export default rootReducer;
