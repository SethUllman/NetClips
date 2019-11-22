import * as APIUtil from '../util/watchList_api_util.js';

export const RECEIVE_WATCH_LIST = 'RECEIVE_WATCH_LIST';

const receiveWatchList = movies => {
  return {
    type: RECEIVE_WATCH_LIST,
    movies
  }
}

export const fetchWatchList = (user) => dispatch => {
  return APIUtil.fetchWatchList(user)
    .then(movies => dispatch(receiveWatchList(movies)));
}

