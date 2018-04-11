import { combineReducers } from 'redux';

// import each individual reducer:
import GiphysReducer from './giphys_reducer';
import StickysReducer from './stickys_reducer';

// fix rootReducer to include actual reducers
const expressionsReducer = combineReducers({
  giphys: GiphysReducer,
  stickys: StickysReducer
});

export default expressionsReducer;
