export const FETCH_VIDEOS = "FETCH_VIDEOS";
export const FETCH_VIDEO = "FETCH_VIDEO";
export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const CREATE_VIDEO = "CREATE_VIDEO";
export const UPDATE_VIDEO = "UPDATE_VIDEO";
export const DELETE_VIDEO = "DELETE_VIDEO";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetchVideos = (search="") => ({
  type: FETCH_VIDEOS,
  search
});

export const fetchVideo = id => ({
  type: FETCH_VIDEO,
  id
});

export const createVideo = video => ({
  type: CREATE_VIDEO,
  video
});

export const updateVideo = video => ({
  type: UPDATE_VIDEO,
  video
});

export const deleteVideo = id => ({
  type: DELETE_VIDEO,
  id
});

export const removeVideo = video => ({
  type: REMOVE_VIDEO,
  video
});

export const receiveVideos = (videos, search) => ({
  type: RECEIVE_VIDEOS,
  videos,
  search
});

export const receiveVideo = video => ({
  type: RECEIVE_VIDEO,
  video
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
