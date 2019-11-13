import { postUser, postSession, deleteSession } from '../util/session_api_util.js';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

export const createNewUser = user => dispatch => postUser(user)
  .then( user => dispatch(receiveCurrentUser(user)));

export const login = user => dispatch => postSession(user)
  .then( user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
  .then( () => dispatch(logoutCurrentUser()));