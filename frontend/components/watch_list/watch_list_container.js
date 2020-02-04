import { connect } from 'react-redux';
import WatchList from './watch_list';
import { fetchWatchList, deleteWatchList, addWatchList } from '../../actions/watch_list_actions';
import { login } from '../../actions/session';
import { withRouter } from 'react-router-dom';
import React from 'react';

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addWatchList: movie => dispatch(addWatchList(movie)),
    deleteWatchList: movieId => dispatch(deleteWatchList(movieId)),
    fetchWatchList: (user) => dispatch(fetchWatchList(user)),
    login: (user) => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);