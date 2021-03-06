import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import SessionButton from './session_button';

const mapStateToProps = state => {
  let currentUser = state.session.currentUser;

  return {
    loggedIn: currentUser ? true : false,
    isAdmin: currentUser ? currentUser.isAdmin : false,
    userId: currentUser ? currentUser.id : null,
    avatar: currentUser ? currentUser.image : null
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionButton);
