import { merge } from 'lodash';
import { receiveCurrentUser,
         receiveErrors,
         LOGIN, SIGNUP, LOGOUT } from '../actions/session_actions';
import { login, logout, signup } from '../util/session_api_util';
import { hashHistory } from 'react-router';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = user =>{
    dispatch(receiveCurrentUser(user));
    hashHistory.push('/');
  };
  const errorCallback = err => dispatch(receiveErrors(err.responseJSON));

  switch (action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      break;
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      break;
    case LOGOUT:
      logout(() => {
        hashHistory.replace('/welcome');
      });
      break;
  }

  return next(action);
};
