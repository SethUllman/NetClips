import React from 'react';
// import LoginContainer from './session/login_container';
import { AuthRoute, ProtectedRoute, RootRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import MoviesIndexContainer from './movies/movie_index_container';





export default () => (
  <div className="whole-page"> 
    <NavBarContainer/>
    <Switch>
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <ProtectedRoute path="/movies" component={MoviesIndexContainer} />
      <RootRoute exact path="/" />
    </Switch>
  </div>
);
