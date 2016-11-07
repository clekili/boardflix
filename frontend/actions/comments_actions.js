export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const FETCH_COMMENT = "FETCH_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetchComments = () => ({
  type: FETCH_COMMENTS
});

export const fetchVideo = id => ({
  type: FETCH_COMMENT,
  id
});

export const createComment = comment => ({
  type: CREATE_COMMENT,
  comment
});

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment
});

export const deleteComment = id => ({
  type: DELETE_COMMENT,
  id
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
