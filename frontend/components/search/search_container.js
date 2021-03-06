import { connect } from 'react-redux';
import Search from './search';
import { fetchMovies, fetchMovie } from '../../actions/movie_actions';
import { addWatchList, deleteWatchList, fetchWatchList } from '../../actions/watch_list_actions';
import { withRouter } from 'react-router-dom';

import React from 'react';

const mapStateToProps = state => {
  return {
    movies: Object.values(state.movies),
    watchList: Object.values(state.watchList)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    fetchMovie: movie => dispatch(fetchMovie(movie)),
    fetchWatchList: () => dispatch(fetchWatchList()),
    addWatchList: movie => dispatch(addWatchList(movie)),
    deleteWatchList: movieId => dispatch(deleteWatchList(movieId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));