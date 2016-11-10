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
    // this.setImage = this.setImage.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.handleAdminLogin = this.handleAdminLogin.bind(this);
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

  handleGuestLogin(e){
    e.preventDefault();
    const user = {
      username: 'guest',
      password: 'password'
    };
    this.props.login(user);
  }

  handleAdminLogin(e){
    e.preventDefault();
    const user = {
      username: 'admin',
      password: 'password'
    };
    this.props.login(user);
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
        <FlatButton label='Guest Login'
                    primary={true}
                    onClick={this.handleGuestLogin}
                    style={buttonStyle}
                    />
      );
      adminLoginButton = (
        <FlatButton label='Admin Login'
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
                  hintText="Username"
                  floatingLabelText="Username"
                  value={this.state.user.username}
                  onChange={this.update('username')}
              />
              <TextField
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
