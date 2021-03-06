import { RECEIVE_WATCH_LIST, CREATE_WATCH_LIST, REMOVE_WATCH_LIST  } from '../actions/watch_list_actions.js';

const watchListReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WATCH_LIST:
      return action.list;
    case CREATE_WATCH_LIST:
      return Object.assign({}, state, {[action.movie.id]: action.movie});
    case REMOVE_WATCH_LIST:
      return action.movieId;
      
    default:
      return state;
  }
}

export default watchListReducer;