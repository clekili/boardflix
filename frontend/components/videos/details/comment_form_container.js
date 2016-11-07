import { connect } from 'react-redux';
import { createComment,
         updateComment,
         deleteComment } from '../../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.currentUser.id,
  videoId: ownProps.video.id,
  ownComment: findOwnComment(state.session.currentUser.id, state)
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: id => dispatch(deleteComment(id))
});

const findOwnComment = (userId, state) => {
    Object.keys(state.comments).forEach( key => {
      let comment = state.comments[key];
      if(comment.video_id === userId)
        return comment;
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
