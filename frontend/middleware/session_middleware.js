import { merge } from 'lodash';
import { receiveCurrentUser,
         receiveErrors,
         LOGIN, SIGNUP, LOGOUT } from '../actions/session_actions';
import { login, logout, signup } from '../util/session_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = err => dispatch(receiveErrors(err.responseJSON));

  switch (action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      break;
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      break;
    case LOGOUT:
      logout();
      break;
  }

  return next(action);
};
