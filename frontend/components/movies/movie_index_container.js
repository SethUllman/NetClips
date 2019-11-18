import { connect } from 'react-redux';
import movieIndex from './movie_index';
import { fetchMovies, fetchMovie } from '../../actions/movie_actions';

import React from 'react';

const mapStateToProps = state => {
  return {
    movies: Object.values(state.movies)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    fetchMovie: movie => dispatch(fetchMovie(movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(movieIndex);