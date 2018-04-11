import { merge } from 'lodash';
import {
  TOGGLE_FRIEND_DETAILS_VIEW,
  TOGGLE_GIPHYS,
  TOGGLE_STICKYS
} from '../actions/ui_actions';

const _nullState = {
  showFriendDetails: true,
  showGiphys: false,
  showStickys: false
};

const UIReducer = (oldState = _nullState, action) => {
  Object.freeze (oldState);

  let newState;
  switch(action.type) {
    case TOGGLE_FRIEND_DETAILS_VIEW:
      newState = merge(
        {},
        oldState,
        { showFriendDetails: !oldState.showFriendDetails }
      );
      return newState;
    case TOGGLE_GIPHYS:
      newState = merge(
        {},
        oldState,
        { showGiphys: !oldState.showGiphys },
        { showStickys: false }
      );
      return newState;
    case TOGGLE_STICKYS:
      newState = merge(
        {},
        oldState,
        { showStickys: !oldState.showStickys },
        { showGiphys: false }
      );
      return newState;
    default:
      return oldState;
  }
};

export default UIReducer;
