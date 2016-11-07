import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import VideosReducer from './videos_reducer';
import CommentsReducer from './comments_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  videos: VideosReducer,
  comments: CommentsReducer
});

export default RootReducer;
