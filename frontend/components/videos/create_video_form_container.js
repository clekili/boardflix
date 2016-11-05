import { connect } from 'react-redux';
import { createVideo } from '../../../actions/video_actions';
import CreateVideoForm from './create_video_form';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  create: (video) => dispatch(createVideo(video))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateVideoForm);
