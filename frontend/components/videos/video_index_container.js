import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import VideoIndex from './video_index';

const mapStateToProps = state, ownProps => ({
  videos: state.videos[ownProps.title]
});

const mapDispatchToProps = dispatch => ({
  findByCategory: category => dispatch(
                              fetchVideos(category)
                              ),
  find: searchStr => dispatch(
                              fetchVideos("", searchStr)
                              )
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);
