import React from 'react';
import {Link, hashHistory} from 'react-router';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import UserImage from '../../user/user_image';


const buttonStyle = {
  width: '100%'
};


class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dialogType: props.dialogType || "signup",
      errors: props.errors,
      display: true,
      user: {
        username: "",
        password: ""
      }
    };

    this.changeFormType = this.changeFormType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.handleAdminLogin = this.handleAdminLogin.bind(this);
    this.enterDetailsAndSubmit = this.enterDetailsAndSubmit.bind(this);
  }

  update(field){
    return (e) => {
      let val = e.target.value;
      this.state.user[field] = val;
      this.setState(this.state);
    };
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.dialogType === 'login')
      this.props.login(this.state.user);
    else
      this.props.signup(this.state.user);
  }

  enterDetailsAndSubmit(username, password){
    let $unameField = $('.usernameField input');
    let $unamePlaceholder = $('.usernameField label:first-of-type');
    let $pwdField = $('.passwordField input');
    let $pwdPlaceholder = $('.passwordField label:first-of-type');

    this.fillField(username, $unameField, $unamePlaceholder);
    setTimeout( () => this.fillField(password, $pwdField, $pwdPlaceholder), (username.length * 150));
    setTimeout( () => this.props.login({username, password}), ((username.length + password.length) * 160));
  }

  fillField(value, $field, $placeholder){
    let i = 0;
    $placeholder.remove();

    var timer = setInterval( () => {
      $field.val($field.val() + value[i]);
      i++;
      if(i >= value.length)
        clearInterval(timer);
    },150);
  }

  handleGuestLogin(e){
    e.preventDefault();
    this.enterDetailsAndSubmit('guest', 'password');
  }

  handleAdminLogin(e){
    e.preventDefault();
    this.enterDetailsAndSubmit('admin', 'password');
  }

  changeFormType(){
    let type = this.state.dialogType;
    this.state.dialogType = type === 'login' ? 'signup' : 'login';
    this.setState(this.state);
  }


  render(){
    let text, changeFormText, linkDesc, demoLoginButton, adminLoginButton;
    if(this.state.dialogType === "login") {
      text = "Log in";
      linkDesc = "Don't have an account?";
      changeFormText = 'Sign Up';
    } else {
      text = "Sign Up";
      linkDesc = "Already have an account?";
      changeFormText = 'Log In';
      demoLoginButton = (
        <FlatButton label='Demo Guest Login'
                    primary={true}
                    onClick={this.handleGuestLogin}
                    style={buttonStyle}
                    />
      );
      adminLoginButton = (
        <FlatButton label='Demo Admin Login'
                    secondary={true}
                    onClick={this.handleAdminLogin}
                    style={buttonStyle}
                    />
      );
    }

    return (
      <div className='sessionForm'>
        <div>
          <ul className='login_errors'>
            {this.props.errors.map( (error, idx) => (
              <li key={idx} className='login_error_item'>{error}</li>
            ))}
          </ul>

          <form onSubmit={this.handleSubmit}>
            <div className='sessionInputFields'>
              <TextField
                  className="usernameField"
                  hintText="Username"
                  floatingLabelText="Username"
                  value={this.state.user.username}
                  onChange={this.update('username')}
              />
              <TextField
                  className="passwordField"
                  hintText="Password"
                  floatingLabelText="Password"
                  type="password"
                  value={this.state.user.password}
                  onChange={this.update('password')}
              />
            </div>
            <br/>
            <FlatButton label={text}
                        type="submit"
                        style={buttonStyle}
                        />
            <br/>
            {demoLoginButton}
            {adminLoginButton}
          </form>
          <label>{linkDesc} </label>
          <FlatButton
            primary={true}
            onClick={this.changeFormType}
            label={changeFormText}
            />
          </div>
      </div>
    );
  }
}

export default SessionForm;
