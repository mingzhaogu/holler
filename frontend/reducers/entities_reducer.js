import { combineReducers } from 'redux';

// import each individual reducer:
import ConversationReducer from './conversations_reducer';

// fix rootReducer to include actual reducers
const entitiesReducer = combineReducers({
  conversations: ConversationReducer
});

export default entitiesReducer;
