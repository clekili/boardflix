import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SessionFormContainer from './session_form_container';
import Dialog from 'material-ui/Dialog';


const dialogStyle = {
  width: '350px',
  height: '250px'
};

class SessionButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.state.show = true;
    this.setState(this.state);
  }

  button(){
    if(this.props.loggedIn){
      return (
        <div className="sessionBtn">
          <RaisedButton
            label="logout"
            onClick={this.props.logout}
            />
        </div>
      );
    } else {
      return (
        <div className="sessionBtn">
          <button onClick={this.handleClick}>
            <img
              src="http://res.cloudinary.com/ddqzltwv6/image/upload/v1478037453/dude_omkwgb.png"
            />
          </button>
          { this.state.modal }
        </div>
      );
    }
  }

  componentWillReceiveProps(newProps){
    if(newProps.loggedIn)
      this.handleClose();
  }

  handleClose(){
    this.state.show = false;
    this.setState(this.state);
  }

  render() {
    return (
      <div className="session">
        <MuiThemeProvider   muiTheme={getMuiTheme(darkBaseTheme)}>
          <div>
            {this.button()}
            <Dialog
              open={this.state.show}
              onRequestClose={this.handleClose}
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
