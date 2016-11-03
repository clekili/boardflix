import {
  receiveVideo,
  receiveVideos,
  removeVideo,
  FETCH_VIDEOS,
  FETCH_VIDEO,
  CREATE_VIDEO,
  UPDATE_VIDEO,
  DELETE_VIDEO
} from '../actions/video_actions';

import {
  createVideo,
  deleteVideo,
  updateVideo,
  fetchVideos,
  fetchVideo
} from '../util/video_api_util';

import { hashHistory } from 'react-router';

const VideosMiddleware = ({getState, dispatch}) => next => action => {
  let error = e => console.log(e.responseJSON);
  let fetchVideoSuccess = video => dispatch(receiveVideo(video));
  let fetchVideosSuccess = (category, search) => videos => dispatch(receiveVideos(videos, category, search));
  let deleteVideoSuccess = video => dispatch(removeVideo(video));

  switch (action.type) {
    case FETCH_VIDEOS:
      fetchVideos(action.category,
                  action.search,
                  fetchVideosSuccess(action.category, action.search),
                  error);
      break;
    case FETCH_VIDEO:
      fetchVideo(action.id,
                 fetchVideoSuccess,
                 error);
      break;
    case CREATE_VIDEO:
      createVideo(action.video,
                  fetchVideoSuccess,
                  error);
      break;
    case UPDATE_VIDEO:
      updateVideo(action.video,
                  fetchVideoSuccess,
                  error);
      break;
    case DELETE_VIDEO:
      deleteVideo(action.id,
                  deleteVideoSuccess,
                  error);
      break;
  }

  return next(action);
};

export default VideosMiddleware;
