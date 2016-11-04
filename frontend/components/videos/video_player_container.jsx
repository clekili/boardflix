import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import VideoPlayer from './video_player';

const mapStateToProps = (state, ownProps) => {
  // check default state in reducer
  let video = { name: '' };
  let category = ownProps.params.category;
  if(state.videos[category]) {
    video = state.videos[ownProps.params.category][ownProps.params.id];
  }

  return {
    video: video
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchVideo: () => dispatch(fetchVideo(ownProps.params.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
