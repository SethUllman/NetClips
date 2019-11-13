import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors_reducer';
import moviesReducer from './movies_reducer';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  movies: moviesReducer
});