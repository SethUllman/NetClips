import * as APIUtil from '../util/watchList_api_util.js';

export const RECEIVE_WATCH_LIST = 'RECEIVE_WATCH_LIST';
export const CREATE_WATCH_LIST = 'ADD_WATCH_LIST';
export const REMOVE_WATCH_LIST = 'REMOVE_WATCH_LIST';

const receiveWatchList = movies => {
  return {
    type: RECEIVE_WATCH_LIST,
    movies
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
    .then(movies => dispatch(receiveWatchList(movies)));
}

export const addWatchList = (movie) => dispatch => {
  return APIUtil.createWatchList(movie)
    .then(movie => dispatch(createWatchList(movie)));
}

export const deleteWatchList = (movieId) => dispatch => {
  return APIUtil.removeWatchList(movieId)
    .then(movie => dispatch(removeWatchList(movieId)));
}