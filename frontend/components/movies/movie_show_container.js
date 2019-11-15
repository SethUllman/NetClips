import { connect } from 'react-redux';
import movieShow from './movie_show';
import { fetchMovie } from '../../actions/movie_actions';
import React from 'react';

const mapStateToProps = state => {
  return {
    movie: state.movie
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovie: (movieId) => dispatch(fetchMovie(movieId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(movieShow);