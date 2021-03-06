import React from 'react';
import { Link, hashHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import SessionFormContainer from './session_form_container';
import Dialog from 'material-ui/Dialog';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const dialogStyle = {
  width: '350px',
  height: '250px'
};

class SessionButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      userMenu: false,
      anchorEl: undefined
    };
    this.openLoginDialog = this.openLoginDialog.bind(this);
    this.closeLoginDialog = this.closeLoginDialog.bind(this);
    this.openUserMenu = this.openUserMenu.bind(this);
    this.closeUserMenu = this.closeUserMenu.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  openLoginDialog(dialogType){
    return e => this.setState({dialogType: dialogType, show: true});
  }

  closeLoginDialog(e){
    this.setState({show: false});
  }

  handleLogout(){
    this.closeUserMenu();
    this.props.logout();
  }

  button(){
    if(this.props.loggedIn){
      return (
        <div className="sessionBtn">
          <button onClick={this.openUserMenu}>
            <img
              src={this.props.avatar}
            />
          </button>
          <Popover
            open={this.state.userMenu}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.closeUserMenu}
          >
            <Menu>
              <MenuItem primaryText="Profile"
                        onTouchTap={(e) => hashHistory.push(`users/${this.props.userId}`)}/>
              <MenuItem primaryText="Sign out" onTouchTap={this.handleLogout} />
            </Menu>
          </Popover>
        </div>
      );
    } else if(this.props.onlySignup){
      return (
        <div className="sessionBtn">
          <RaisedButton
            onClick={this.openLoginDialog('signup')}
            label="Get Started"
          />
        </div>
      );
    } else {
      return (
        <div className='sessionButtonPanel'>
          <div className="sessionBtn">
            <RaisedButton
              onClick={this.openLoginDialog('login')}
              label="Login"
              />
          </div>
          <div className="sessionBtn">
            <RaisedButton
              onClick={this.openLoginDialog('signup')}
              label="Sign Up"
            />
          </div>
        </div>
      );
    }
  }

  closeUserMenu(e){
    this.setState({userMenu: false});
  }

  openUserMenu(e){
    e.preventDefault();
    this.setState({anchorEl: e.currentTarget, userMenu: true});
  }

  componentWillReceiveProps(newProps){
    if(newProps.loggedIn)
      this.closeLoginDialog();
  }

  render() {
    return (
      <div className="session">
        <div className="session">
          {this.button()}
          <Dialog
            open={this.state.show}
            modal={false}
            onRequestClose={this.closeLoginDialog}
            contentStyle={dialogStyle}
          >
            <SessionFormContainer dialogType={this.state.dialogType}/>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default SessionButton;
