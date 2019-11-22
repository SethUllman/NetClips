import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors_reducer';
import moviesReducer from './movies_reducer';
import watchListReducer from './watch_list_reducer';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  movies: moviesReducer,
  watchList: watchListReducer
});