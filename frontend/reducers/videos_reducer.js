import { RECEIVE_VIDEOS,
         RECEIVE_VIDEO,
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
    default:
      return oldState;
  }
};

export default VideosReducer;
