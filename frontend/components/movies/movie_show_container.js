import { connect } from 'react-redux';
import movieShow from './movie_show';
import { fetchMovie, fetchMovies } from '../../actions/movie_actions';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
  
  return {
    movie: state.movies[ownProps.match.params.movieId]
  }
}

const mapDispatchToProps = dispatch => {

  return {
    fetchMovie: (movie) => dispatch(fetchMovie(movie)),
    fetchMovies: () => dispatch(fetchMovies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(movieShow);