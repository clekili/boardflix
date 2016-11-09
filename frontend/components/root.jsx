import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Splash from './splash/splash';
import VideoIndexContainer from './videos/video_index_container';
import SessionFormContainer from './navbar/session/session_form_container';
import VideoPlayerContainer from './videos/video_player_container';
import UserPageContainer from './user/user_page_container';

const Root = ({ store }) => {
  const _redirectIfLoggedOut = (nextState, replace) => {
    let session = store.getState().session;
    if(!session.currentUser)
      replace('/welcome');
  };

  return (
    <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={App}>
            <IndexRoute
              component={VideoIndexContainer}
              onEnter={_redirectIfLoggedOut}/>
            <Route path='welcome' component={Splash}/>
            <Route path='users/:id'
                   component={UserPageContainer}
                   onEnter={_redirectIfLoggedOut}/>
            <Route
              path=':category/videos/:id'
              component={VideoPlayerContainer}
              onEnter={_redirectIfLoggedOut}/>
          </Route>
        </Router>
    </Provider>
  );
};



export default Root;
