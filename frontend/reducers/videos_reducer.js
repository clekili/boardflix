import { RECEIVE_VIDEOS,
         RECEIVE_VIDEO,
         RECEIVE_ERRORS,
         REMOVE_VIDEO } from '../actions/video_actions';
import merge from 'lodash/merge';

const VideosReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_VIDEOS:
      if(action.search) {
        return merge({}, oldState, { search: action.videos});
      }
      return merge({}, action.videos);
    case RECEIVE_VIDEO:
      return merge({}, oldState, action.video);
    case REMOVE_VIDEO:
      let newState = merge({}, oldState);
      delete newState[action.video.id];
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      break;
    default:
      return oldState;
  }
};

export default VideosReducer;
