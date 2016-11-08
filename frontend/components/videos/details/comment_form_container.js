import { connect } from 'react-redux';
import { createComment,
         updateComment,
         deleteComment } from '../../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => {
  let comment = findOwnComment(state.session.currentUser.id
                            , ownProps.video.id
                            , state);
  console.log(comment);
  return {
  userId: state.session.currentUser.id,
  videoId: ownProps.video.id,
  ownComment: findOwnComment(state.session.currentUser.id
                            , ownProps.video.id
                            , state)
  };
};

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: id => dispatch(deleteComment(id))
});

const findOwnComment = (userId, videoId, state) => {
    let commentIds = Object.keys(state.comments);

    for(let i = 0; i < commentIds.length; i++){
      let key = commentIds[i];
      let comment = state.comments[key];
      if(comment.user_id === userId && comment.video_id === videoId){
        return comment;
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
