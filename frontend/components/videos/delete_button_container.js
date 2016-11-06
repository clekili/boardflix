import { connect } from 'react-redux';
import DeleteButton from './delete_button';
import { deleteVideo } from '../../actions/video_actions';

const isAdmin = (currentUser) => {
  return currentUser ? currentUser.isAdmin : false;
};

const mapStateToProps = (state, ownProps) => ({
  isAdmin: isAdmin(state.session.currentUser),
});

const mapDispatchToProps = dispatch => ({
  deleteVideo: id => dispatch(deleteVideo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
