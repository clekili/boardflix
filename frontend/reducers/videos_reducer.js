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
        delete newState["Search Results"];
        let found = {};
        Object.keys(action.videos).forEach( cat => {
          found = merge(found, action.videos[cat]);
        });
        newState = merge({}, newState, { "Search Results": found});
        return newState;
      }
      return merge({}, action.videos);
    case RECEIVE_VIDEO:
      return mergeVideo(newState, action.video);
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

const mergeVideo = (state, video) => {
  let category = getCategory(video);
  let id = Object.keys(video[category])[0];
  state[category][id] = video[category][id];
  return state;
};

const removeVideo = (state, video) => {
  let category = getCategory(video);
  let id = Object.keys(video[category])[0];
  delete state[category][id];
  return state;
};

const getCategory = (video) => ( Object.keys(video)[0] );

export default VideosReducer;
