import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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

  openLoginDialog(e){
    this.setState({show: true});
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
              src="http://res.cloudinary.com/ddqzltwv6/image/upload/v1478037453/dude_omkwgb.png"
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
              <MenuItem primaryText="Profile" />
              <MenuItem primaryText="Sign out" onTouchTap={this.handleLogout} />
            </Menu>
          </Popover>
        </div>
      );
    } else {
      return (
        <div className="sessionBtn">
          <RaisedButton
            onClick={this.openLoginDialog}
            label="Sign Up"
          />
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
        <MuiThemeProvider   muiTheme={getMuiTheme(darkBaseTheme)}>
          <div className="session">
            {this.button()}
            <Dialog
              open={this.state.show}
              modal={false}
              onRequestClose={this.closeLoginDialog}
              contentStyle={dialogStyle}
            >
              <SessionFormContainer/>
            </Dialog>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default SessionButton;
