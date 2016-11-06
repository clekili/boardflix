import { connect } from 'react-redux';
import { createVideo, updateVideo } from '../../actions/video_actions';
import VideoDialog from './video_dialog';
import { merge } from 'lodash';

const defaultVideo = {
  name: "",
  youtube_id: "",
  category: "",
  description: ""
};

const isAdmin = (currentUser) => {
  return currentUser ? currentUser.isAdmin : false;
};

const mapStateToProps = (state, ownProps) => ({
  isAdmin: isAdmin(state.session.currentUser),
  errors: state.videos.errors || [],
  categories: Object.keys(state.videos).filter( cat => cat !== "errors"),
  dialogType: ownProps.video ? "update" : "create",
  video: ownProps.video ? ownProps.video : defaultVideo
});

const mapDispatchToProps = dispatch => ({
  create: (video) => dispatch(createVideo(video)),
  update: (video) => dispatch(updateVideo(video))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoDialog);
