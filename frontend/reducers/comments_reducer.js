import { RECEIVE_COMMENTS,
         RECEIVE_COMMENT,
         RECEIVE_ERRORS,
         REMOVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const CommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      newState = action.comments;
      break;
    case RECEIVE_COMMENT:
      newState = merge({}, newState, action.comment);
      break;
    case REMOVE_COMMENT:
      delete newState[action.comment.id];
      break;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      break;
  }

  return newState;
};

export default CommentsReducer;
