import * as APIUtil from '../util/watchList_api_util.js';

export const RECEIVE_WATCH_LIST = 'RECEIVE_WATCH_LIST';
export const CREATE_WATCH_LIST = 'ADD_WATCH_LIST';
export const REMOVE_WATCH_LIST = 'REMOVE_WATCH_LIST';

const receiveWatchList = user => {
  return {
    type: RECEIVE_WATCH_LIST,
    user
  }
}

const createWatchList = movie => {
  return {
    type: CREATE_WATCH_LIST,
    movie
  }
}

const removeWatchList = movieId => {
  return {
    type: REMOVE_WATCH_LIST,
    movieId
  }
}

export const fetchWatchList = (user) => dispatch => {
  return APIUtil.fetchWatchList(user)
    .then(user => {
      debugger;
      dispatch(receiveWatchList(user))});
}

export const addWatchList = (movie) => dispatch => {
  return APIUtil.createWatchList(movie)
    .then(movie => dispatch(createWatchList(movie)));
}

export const deleteWatchList = (movieId) => dispatch => {
  return APIUtil.removeWatchList(movieId)
    .then(movieId => dispatch(removeWatchList(movieId)));
}