import { connect } from 'react-redux';
import { fetchVideos } from '../../../actions/video_actions';
import SearchField from './search_field';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  find: searchStr => dispatch(fetchVideos(searchStr))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
