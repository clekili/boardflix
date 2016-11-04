import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Splash from './splash/splash';
import VideoIndexContainer from './videos/video_index_container';
import SessionFormContainer from './navbar/session/session_form_container';
import VideoPlayerContainer from './videos/video_player_container';

const Root = ({ store }) => {
  const _redirectIfLoggedOut = (nextState, replace) => {
    let session = store.getState().session;
    if(!session.currentUser)
      replace('/welcome');
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    let session = store.getState().session;
    if(session.currentUser)
      replace('/');
  };

  return (
    <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={App}>
            <IndexRoute
              component={VideoIndexContainer}
              onEnter={_redirectIfLoggedOut}/>
            <Route path='welcome' component={Splash}/>
            <Route
              path=':category/videos/:id'
              component={VideoPlayerContainer}/>
            <Route path="/login"
                   onEnter={_redirectIfLoggedIn}
                   component={SessionFormContainer} />
            <Route path="/signup"
                   onEnter={_redirectIfLoggedIn}
                   component={SessionFormContainer} />
          </Route>
        </Router>
    </Provider>
  );
};



export default Root;
