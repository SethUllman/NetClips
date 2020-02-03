import { RECEIVE_WATCH_LIST, CREATE_WATCH_LIST, REMOVE_WATCH_LIST  } from '../actions/watch_list_actions.js';

const watchListReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WATCH_LIST:
      return action.list;
    case CREATE_WATCH_LIST:
      debugger;
      return Object.assign({}, state, {[action.list.id]: action.list});
    case REMOVE_WATCH_LIST:
      let newState = Object.assign({}, state);
      
    default:
      return state;
  }
}

export default watchListReducer;