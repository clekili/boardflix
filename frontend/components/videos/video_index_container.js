import { connect } from 'react-redux';
import { fetchVideos,
         deleteVideo } from '../../actions/video_actions';
import VideoIndex from './video_index';

const mapStateToProps = state => ({
  categories: Object.keys(state.videos),
  videos: state.videos
});

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos()),
  find: searchStr => dispatch(
                              fetchVideos("", searchStr)
                            )
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);
