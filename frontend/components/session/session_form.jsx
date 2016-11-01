import React from 'react';
import {Link, hashHistory} from 'react-router';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';


class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      user: {
        username: "",
        password: ""
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state.user;
    this.props.processForm({user});
  }

  update(field){
    return (e) => {
      let val = e.target.value;
      this.state.user[field] = val;
      this.setState(this.state);
    };
  }

  componentWillReceiveProps(newProps){
    if(newProps.loggedIn)
      hashHistory.push('/');
  }

  handleClose(){
    hashHistory.push('/');
  }

  handleGuestLogin(e){
    e.preventDefault();
    const user = {
      username: 'guest',
      password: 'password'
    };
    this.props.login({user});
  }



  render(){
    let text, link, linkText, linkDesc, demoLoginButton;
    if(this.props.formType === "login") {
      text = "Log in";
      link = '/signup';
      linkDesc = "Don't have an account?";
      linkText = 'Sign Up';
    } else {
      text = "Sign Up";
      link = '/login';
      linkDesc = "Already have an account?";
      linkText = 'Log In';
      demoLoginButton = (
        <RaisedButton label='Guest Login'
                      secondary={true}
                      onClick={this.handleGuestLogin}
                      />
      );
    }

    return (
      <div className='session_form'>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Dialog
          open={true}
          onRequestClose={this.handleClose}
        >
        <ul className='login_errors'>
          {this.props.errors.map( (error, idx) => (
            <li key={idx} className='login_error_item'>{error}</li>
          ))}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <TextField
              hintText="USERNAME"
              floatingLabelText="Username"
              value={this.state.user.username}
              onChange={this.update('username')}
          />
          <br/>
          <TextField
              hintText="PASSWORD"
              floatingLabelText="Password"
              type="password"
              value={this.state.user.password}
              onChange={this.update('password')}
          />
          <br/>
          <RaisedButton label={text}
                        primary={true}
                        type="submit"
                        />
          <br/>
          {demoLoginButton}
        </form>
        <label>{linkDesc}</label>
        <Link to={link}>{linkText}</Link>
        </Dialog>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default SessionForm;
