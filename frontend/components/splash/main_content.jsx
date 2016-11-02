import React from 'react';
import {hashHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  backgroundColor: '#FF0000'
};

const NewAccountButton = () => (
  <div className="newAccount">
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <RaisedButton
        style={style}
        label="New Account"
        onClick={ () => hashHistory.push('/signup') }
        />
    </MuiThemeProvider>
  </div>
);

const MainContent = () => (
  <div className='mainContent'>
      <h2>Life is Better on a Board</h2>
      <p>Explore snowboard, skateboard and surf videos.</p>
      <p>Share good times with our community.</p>
      <p>Get prepared for the upcoming session.</p>
      <NewAccountButton />
  </div>
);

export default MainContent;
