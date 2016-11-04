import { connect } from 'react-redux';
import { login, signup, logout } from '../../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: user => dispatch(signup({user})),
  login: user => dispatch(login({user})),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
