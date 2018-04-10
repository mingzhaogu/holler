import { combineReducers } from 'redux';

// import each individual reducer:
import ConversationsReducer from './conversations_reducer';
import MessagesReducer from './messages_reducer';
import UsersReducer from './users_reducer';

// fix rootReducer to include actual reducers
const entitiesReducer = combineReducers({
  conversations: ConversationsReducer,
  messages: MessagesReducer,
  users: UsersReducer
});

export default entitiesReducer;
