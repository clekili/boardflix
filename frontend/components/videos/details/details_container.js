import { connect } from 'react-redux';
import { fetchComments } from '../../../actions/comment_actions';
import Details from './details';

const findComments = (video, state) => {
  let comments = [];
  Object.keys(state.comments).forEach( key => {
    let comment = state.comments[key];
    if(comment.video_id === video.id)
      comments.push(comment);
  });
  return comments;
};

const mapStateToProps = (state, ownProps) => ({
  video: ownProps.video,
  comments: findComments(ownProps.video, state)
});

const mapDispatchToProps = dispatch => ({
  fetchComments: () => dispatch(fetchComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
