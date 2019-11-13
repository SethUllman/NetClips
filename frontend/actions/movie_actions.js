import * as APIUtil from '../util/movie_api_util.js';

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

const receiveMovies = movies => {
  return {
    type: RECEIVE_MOVIES,
    movies
  }
}

const receiveMovie = movie => {
  return {
    type: RECEIVE_MOVIE,
    movie
  }
}

export const fetchMovies = () => dispatch => {
  return APIUtil.fetchMovies()
    .then( movies => dispatch(receiveMovies(movies)));
}

export const fetchMovie = movie => dispatch => {
  return APIUtil.fetchMovie(movie)
    .then( movie => dispatch(receiveMovie(movie)));
}