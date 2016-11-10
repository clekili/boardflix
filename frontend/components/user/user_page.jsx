import React from 'react';
import UserImage from './user_image';

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
            id: props.user.id,
            username: props.user.username,
            image: props.user.image
      },
      usernameEditMode: false,
      passwordEditMode: false
    };

    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  setImage(e){
    e.preventDefault();
    this.state.user.image = e.target.src;
    this.setState(this.state);
    this.props.updateUser(this.state.user);
  }

  componentWillReceiveProps(nextProps){
    this.state = {
      user: {
            id: nextProps.user.id,
            username: nextProps.user.username,
            image: nextProps.user.image
      },
      usernameEditMode: false,
      passwordEditMode: false
    };
    this.setState(this.state);
  }

  update(field){
    return e => {
      this.state.user[field] = e.target.value;
      this.setState(this.state.user);
    };
  }

  toggleEditMode(field){
    return e => {
      this.state[`${field}EditMode`] = !this.state[`${field}EditMode`];
      this.setState(this.state);
    };
  }

  submit(field){
    return e => {
      e.preventDefault();
      if(field === 'username')
        delete this.state.user.password;
      this.props.updateUser(this.state.user);
    };
  }

  renderUsernameField(){
    if(this.state.usernameEditMode){
      return (
        <div className='profileSlice'>
          <label htmlFor='username'>Username:</label>
          <input className='userField'
                 id='username'
                 type='text'
                 value={this.state.user.username}
                 onChange={this.update('username')}/>
               <button onClick={this.submit('username')}>Save</button>
        </div>
      );
    } else {
      return (
        <div className='profileSlice'>
          <label htmlFor="">Username:</label>
          <label className='userField'>{this.state.user.username}</label>
          <a onClick={this.toggleEditMode('username')}>change username</a>
        </div>
      );
    }
  }

  renderPasswordField(){
    if(this.state.passwordEditMode){
      return (
        <div className='profileSlice'>
          <label htmlFor='password'>Password:</label>
          <input className='userField'
                 id='password'
                 type='password'
                 value={this.state.user.password}
                 onChange={this.update('password')}/>
               <button onClick={this.submit()}>Save</button>
        </div>
      );
    } else {
      return (
        <div className='profileSlice'>
          <label>Password:</label>
          <label className='userField'>&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;</label>
          <a onClick={this.toggleEditMode('password')}>change password</a>
        </div>
      );
    }
  }

  renderErrors(){
    if(this.props.errors){
      return (
        <div className='profileSlice'>
          <ul>
            {this.props.errors.map( e => <li>{e}</li>)}
          </ul>
        </div>
      );
    }
  }

  render(){
    return (
      <div className='userProfile'>
        <h1>My Profile</h1>
        <UserImage user={this.state.user}
                   setImage={this.setImage}/>
        <div className='userFields'>
          {this.renderErrors()}
          {this.renderUsernameField()}
          {this.renderPasswordField()}
        </div>
      </div>
    );
  }
}

export default UserPage;
