import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import rootReducer from '../reducers/root';
import thunk from '../thunk/thunk';


const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
)

export default configureStore;