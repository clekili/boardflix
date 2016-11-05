import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import injectTapEventPlugin from 'react-tap-event-plugin';

// FOR TESTING
import { fetchVideos } from './actions/video_actions';

document.addEventListener('DOMContentLoaded', () => {
  injectTapEventPlugin();
  let store;
  if (window.currentUser){
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

  // TESTING
  window.store = store;
  window.fetchVideos = fetchVideos;
});
