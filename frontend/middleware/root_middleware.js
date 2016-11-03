import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import VideosMiddleware from './videos_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  VideosMiddleware
);

export default RootMiddleware;
