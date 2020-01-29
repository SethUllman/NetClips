import { RECEIVE_MOVIES, RECEIVE_MOVIE } from '../actions/movie_actions.js';

const moviesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_MOVIES:
      debugger;
      return action.movies;
    case RECEIVE_MOVIE:
      return Object.assign({}, state, { [action.movie.id]: action.movie })
    default:
      return state;
  }
}

export default moviesReducer;