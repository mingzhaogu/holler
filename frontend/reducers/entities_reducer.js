import { combineReducers } from 'redux';

// import each individual reducer:
import ConversationReducer from './conversations_reducer';
import MessageReducer from './messages_reducer';

// fix rootReducer to include actual reducers
const entitiesReducer = combineReducers({
  conversations: ConversationReducer,
  messages: MessageReducer
});

export default entitiesReducer;
