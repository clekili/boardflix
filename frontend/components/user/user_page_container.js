import { connect } from 'react-redux';
import { updateUser } from '../../actions/session_actions';
import { fetchComments } from '../../actions/comment_actions';
import UserPage from './user_page';

const mapStateToProps = (state, ownProps) => ({
  user: state.session.currentUser,
  errors: state.session.errors,
  comments: getComments(state)
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  fetchComments: () => dispatch(fetchComments())
});

const getComments = state => {
  let userId = state.session.currentUser.id;
  let comments = [];
  Object.keys(state.comments).forEach( commentId => {
    let comment = state.comments[commentId];
    if(comment.user_id === userId)
      comments.push(comment);
  });
  return comments;
};


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
