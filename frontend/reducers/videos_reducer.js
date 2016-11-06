import { RECEIVE_VIDEOS,
         RECEIVE_VIDEO,
         RECEIVE_ERRORS,
         REMOVE_VIDEO } from '../actions/video_actions';
import merge from 'lodash/merge';

const VideosReducer = (oldState = {}, action) => {
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_VIDEOS:
      if(action.search) {
        return merge({}, oldState, { search: action.videos});
      }
      return merge({}, action.videos);
    case RECEIVE_VIDEO:
      return merge({}, oldState, action.video);
    case REMOVE_VIDEO:
      newState = removeVideo(newState, action.video);
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return oldState;
  }
};

const removeVideo = (state, video) => {
  let category = Object.keys(video);
  category = category[0];
  let id = Object.keys(video[category])[0];
  delete state[category][id];
  return state;
};

export default VideosReducer;
