import { RECEIVE_WATCH_LIST } from '../actions/watch_list_actions.js';

const watchListReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_WATCH_LIST:
      return action.movies;
    default:
      return state;
  }
}

export default watchListReducer;