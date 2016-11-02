import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import SessionButton from './session_button';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login:  user => dispatch(login()),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionButton);