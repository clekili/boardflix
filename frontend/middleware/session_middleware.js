import { merge } from 'lodash';
import { receiveCurrentUser,
         receiveErrors,
         LOGIN, SIGNUP, LOGOUT, UPDATE_USER } from '../actions/session_actions';
import { login, logout, signup, updateUser } from '../util/session_api_util';
import { hashHistory } from 'react-router';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = user =>{
    dispatch(receiveCurrentUser(user));
    hashHistory.push('/');
  };
  const updateSuccessCallback = user =>{
    dispatch(receiveCurrentUser(user));
    hashHistory.push(`users/${user.id}`);
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
    case UPDATE_USER:
      updateUser(action.user, updateSuccessCallback, errorCallback);
      break;
  }

  return next(action);
};
