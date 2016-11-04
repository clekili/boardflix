import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import SessionButton from './session_button';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionButton);
