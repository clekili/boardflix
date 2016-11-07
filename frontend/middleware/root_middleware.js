import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import VideosMiddleware from './videos_middleware';
import CommentsMiddleware from './comments_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  VideosMiddleware,
  CommentsMiddleware
);

export default RootMiddleware;
