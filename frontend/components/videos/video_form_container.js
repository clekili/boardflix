import { connect } from 'react-redux';
import { createVideo, updateVideo } from '../../actions/video_actions';
import VideoForm from './video_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.videos.errors || [],
  categories: Object.keys(state.videos),
  dialogType: ownProps.dialogType
});

const mapDispatchToProps = dispatch => ({
  create: (video) => dispatch(createVideo(video)),
  update: (video) => dispatch(updateVideo(video))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);
