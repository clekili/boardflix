import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';

const Root = ({ store }) => (
  <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path="/login"
                 onEnter={_redirectIfLoggedIn(store)}
                 component={SessionFormContainer} />
          <Route path="/signup"
                 onEnter={_redirectIfLoggedIn(store)}
                 component={SessionFormContainer} />
        </Route>
      </Router>
  </Provider>
);

const _redirectIfLoggedIn = (store) => {
  let session = store.getState().session;
  if(session.currentUser)
    hashHistory.push('/');
};

export default Root;
