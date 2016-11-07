import {
  receiveComment,
  receiveComments,
  removeComment,
  receiveErrors,
  FETCH_COMMENTS,
  FETCH_COMMENT,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from '../actions/comment_actions';

import {
  createComment,
  deleteComment,
  updateComment,
  fetchComments,
  fetchComment
} from '../util/comment_api_util';


const CommentsMiddleware = ({ getState, dispatch }) => next => action => {
  let error = err => dispatch(receiveErrors(err.responseJSON));
  let fetchCommentSuccess = comment => dispatch(receiveComment(comment));
  let fetchCommentsSuccess = comments => dispatch(receiveComments(comments));
  let deleteCommentSuccess = comment => dispatch(removeComment(comment));

  switch (action.type) {
    case FETCH_COMMENTS:
      fetchComments(fetchCommentsSuccess, error);
      break;
    case FETCH_COMMENT:
      fetchComment(action.id, fetchCommentSuccess, error);
      break;
    case CREATE_COMMENT:
      createComment(action.comment, fetchCommentSuccess, error);
      break;
    case UPDATE_COMMENT:
      updateComment(action.comment, fetchCommentSuccess, error);
      break;
    case DELETE_COMMENT:
      deleteComment(action.id, deleteCommentSuccess, error);
      break;
  }
  return next(action);
};

export default CommentsMiddleware;
