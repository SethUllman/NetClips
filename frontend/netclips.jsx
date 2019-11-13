import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import Root from './components/root';
import createStore from './store/store';




document.addEventListener("DOMContentLoaded", () => {
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    }
  }
  const root = document.getElementById('root');
  const store = createStore();
  ReactDOM.render(<Root store={store}/>, root);
});