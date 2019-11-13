import React from 'react';
// import LoginContainer from './session/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import MoviesIndexContainer from './movies/movies_index_container';





export default () => (
  <div class="whole-page"> 
    <Route path="/" component={NavBarContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <AuthRoute path="/movies" component={MoviesIndexContainer} />
   
    {/* <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute path="/chirps" component={ChirpIndexContainer} /> */}
  </div>
);
