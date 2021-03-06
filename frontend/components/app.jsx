import React from 'react';
import { AuthRoute, ProtectedRoute, RootRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import MoviesIndexContainer from './movies/movie_index_container';
import MoviesShowContainer from './movies/movie_show_container';
import WatchListContainer from './watch_list/watch_list_container';
import SearchContainer from './search/search_container';

export default () => (
  <div className='whole-page'> 
    <NavBarContainer/>
    <Switch>
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <ProtectedRoute path="/movies/:movieId" component={MoviesShowContainer} />
      <ProtectedRoute path="/watch_list/:userId" component={WatchListContainer} />
      <ProtectedRoute path="/movies" component={MoviesIndexContainer} />
      <ProtectedRoute path='/search' component={SearchContainer} />?
      <RootRoute exact path="/" />
    </Switch>
  </div>
);
