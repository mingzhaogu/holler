import { merge } from 'lodash';
import {
  TOGGLE_FRIEND_DETAILS_VIEW,
} from '../actions/ui_actions';

const _nullState = {
  showFriendDetails: true
};

const UIReducer = (oldState = _nullState, action) => {
  Object.freeze (oldState);

  let newState;
  switch(action.type) {
    case TOGGLE_FRIEND_DETAILS_VIEW:
      newState = merge({}, { showFriendDetails: !oldState.showFriendDetails});
      return newState;
    default:
      return oldState;
  }
};

export default UIReducer;
