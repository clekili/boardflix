import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import injectTapEventPlugin from 'react-tap-event-plugin';


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

  console.log('Hi there!');
  console.log('Are you here for the source code?');
  console.log("Don't waste your time digging into minified code.");
  console.log("Just shoot me an email at clekili@gmail.com. I'll send you the most up to date version.");
  console.log("Stay awesome, cheers");
  console.log('Can Lekili');
});
