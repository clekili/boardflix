import React from 'react';
import {Link, hashHistory} from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  update(field){
    return (e) => {
      let val = e.target.value;
      this.state[field] = val;
      this.setState(this.state);
    };
  }

  componentWillReceiveProps(newProps){
    if(newProps.loggedIn)
      hashHistory.push('/');
  }

  handleGuestLogin(e){
    e.preventDefault();
    const user = {
      username: 'guest',
      password: 'password'
    };
    this.props.processForm({user});
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
      demoLoginButton = (<input type="button"
                                value='Guest Login'
                                onClick={this.handleGuestLogin}/>);
    }

    return (
      <div class='session_form'>
        <ul class='login_errors'>
          {this.props.errors.map( error => (
            <li class='login_error_item'>{error}</li>
          ))}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 value={this.state.username}
                 onChange={this.update('username')}
                 placeholder="USERNAME"/>
          <br/>
          <input type='password'
                 value={this.state.password}
                 onChange={this.update('password')}
                 placeholder="PASSWORD"/>
          <br/>
          <input type="submit" value={text} />
          <br/>
          {demoLoginButton}
        </form>
        <label>{linkDesc}</label>
        <Link to={link}>{linkText}</Link>
      </div>
    );
  }
}

export default SessionForm;
