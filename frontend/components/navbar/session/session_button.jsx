import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class SessionButton extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.session.currentUser){
      return (
        <div className="session">
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <RaisedButton
              label="logout"
              onClick={this.props.logout}
              />
          </MuiThemeProvider>
        </div>
      );
    } else {
      return (
        <div className="session">
          <Link to={'/login'}>
            <img
              src="http://res.cloudinary.com/ddqzltwv6/image/upload/v1478037453/dude_omkwgb.png"
            />
          </Link>
        </div>
      );
    }
  }
}

export default SessionButton;
