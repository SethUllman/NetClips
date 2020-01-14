import { connect } from 'react-redux';
import WatchList from './watch_list';
import { fetchWatchList } from '../../actions/watch_list_actions';
import { withRouter } from 'react-router-dom';
import React from 'react';

const mapStateToProps = state => {
  return {
    movies: Object.values(state.movies),
    watchList: Object.values(state.watchList),
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWatchList: (userId) => dispatch(fetchWatchList(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);