import React from 'react';
import {Link, hashHistory} from 'react-router';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class CreateVideoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      errors: props.errors,
      video: {
        name: "",
        youtube_id: ""
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  update(field){
    return (e) => {
      let val = e.target.value;
      this.state[field] = val;
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


  render(){
    return (
      <div className='sessionForm'>
        <div>
          <ul className='login_errors'>
            {this.props.errors.map( (error, idx) => (
              <li key={idx} className='login_error_item'>{error}</li>
            ))}
          </ul>

          <form onSubmit={this.handleSubmit}>
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
            <br/>
            <FlatButton label={text}
                        type="submit"
                        style={buttonStyle}
                        />
            <br/>
            {demoLoginButton}
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

export default CreateVideoForm;
