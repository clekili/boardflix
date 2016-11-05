import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SessionFormContainer from './session_form_container';
import Dialog from 'material-ui/Dialog';
import CreateVideoFormContainer from '../../videos/create_video_form_container';

const dialogStyle = {
  width: '350px',
  height: '250px'
};

class SessionButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      create: false
    };
    this.openLoginDialog = this.openLoginDialog.bind(this);
    this.openCreateDialog = this.openCreateDialog.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  openLoginDialog(e){
    e.preventDefault();
    this.setState({show: true});
  }

  openCreateDialog(e){
    e.preventDefault();
    this.setState({create: true});
  }

  createVideoButton(){
    if(this.props.isAdmin){
      return (
        <div className="sessionBtn">
          <RaisedButton
            label="Create Video"
            onClick={this.openCreateDialog}
            />
        </div>
      );
    }
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
          <button onClick={this.openLoginDialog}>
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
    this.state.create = false;
    this.setState(this.state);
  }

  render() {
    return (
      <div className="session">
        <MuiThemeProvider   muiTheme={getMuiTheme(darkBaseTheme)}>
          <div>
            {this.createVideoButton()}
            {this.button()}
            <Dialog
              open={this.state.show}
              onRequestClose={this.handleClose}
              contentStyle={dialogStyle}
            >
              <SessionFormContainer/>
            </Dialog>
            <Dialog
              open={this.state.create}
              onRequestClose={this.handleClose}>
              <CreateVideoFormContainer/>
            </Dialog>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default SessionButton;
