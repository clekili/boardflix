import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import VideosReducer from './videos_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  videos: VideosReducer
});

export default RootReducer;
