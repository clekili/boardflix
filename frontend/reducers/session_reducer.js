import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS,
         LOGOUT} from '../actions/session_actions';


const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.user;
      break;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      break;
    case LOGOUT:
      newState = merge({}, _nullUser);
      break;
  }

  return newState;
};

export default SessionReducer;
