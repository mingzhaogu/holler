import { combineReducers } from 'redux';

// import each individual reducer:
import conversations from '/conversations_reducer';

// fix rootReducer to include actual reducers
const entitiesReducer = combineReducers({
  conversations,
});

export default entitiesReducer;
