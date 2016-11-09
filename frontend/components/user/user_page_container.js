import { connect } from 'react-redux';
import { updateUser } from '../../actions/session_actions';
import UserPage from './user_page';

const mapStateToProps = (state, ownProps) => ({
  user: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
