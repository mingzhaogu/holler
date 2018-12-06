import { merge } from 'lodash';

import {
  TOGGLE_FRIEND_DETAILS_VIEW,
  TOGGLE_USER_SETTINGS,
  TOGGLE_GIPHYS,
  TOGGLE_STICKYS
} from '../actions/ui_actions';
import {
  RECEIVE_ALL_CONVERSATIONS,
  RECEIVE_CONVERSATION,
  START_LOADING_CONVERSATIONS,
  START_LOADING_SINGLE_CONVERSATION
} from '../actions/conversation_actions';

const _nullState = {
  showFriendDetails: true,
  showUserSettings: false,
  showGiphys: false,
  showStickys: false,
  loading: false
};

const UIReducer = (oldState = _nullState, action) => {
  Object.freeze(oldState);

  let newState;
  switch(action.type) {
    case TOGGLE_FRIEND_DETAILS_VIEW:
      newState = merge(
        {},
        oldState,
        { showFriendDetails: !oldState.showFriendDetails }
      );
      return newState;
    case TOGGLE_USER_SETTINGS:
      newState = merge(
        {},
        oldState,
        { showUserSettings: !oldState.showUserSettings }
      );
      return newState;
    case TOGGLE_GIPHYS:
      newState = merge(
        {},
        oldState,
        { showGiphys: !oldState.showGiphys,
          showStickys: false }
      );
      return newState;
    case TOGGLE_STICKYS:
      newState = merge(
        {},
        oldState,
        { showStickys: !oldState.showStickys,
          showGiphys: false }
      );
      return newState;
    case RECEIVE_ALL_CONVERSATIONS:
    case RECEIVE_CONVERSATION:
      return merge({}, _nullState);
    // case RECEIVE_ALL_CONVERSATIONS:
    // case RECEIVE_CONVERSATION:
    //   return merge({}, _nullState, { loading: false });
    // case RECEIVE_GIPHYS:
    // case RECEIVE_MORE_GIPHYS:
    // case RECEIVE_STICKYS:
    // case RECEIVE_MORE_STICKYS:
    // case RECEIVE_USERS:
    //   return merge({}, oldState, { loading: false });
    // case START_LOADING_CONVERSATIONS:
    // case START_LOADING_SINGLE_CONVERSATION:
    //   return merge({}, oldState, { loading: true });
    default:
      return oldState;
  }
};

export default UIReducer;
