import React from 'react';
import Splash from './splash/splash';
import NavBar from './navbar/navbar';
import Footer from './footer/footer';
import VideoIndexContainer from './videos/video_index_container';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const modifyTheme = (theme) => {
  theme.palette.primary1Color = '#055A5A';
  theme.palette.primary2Color = '#055A5A';
  theme.palette.accent1Color =  '#970808';
  theme.palette.accent2Color = '#970808';
  theme.palette.accent3Color = '#970808';
  theme.palette.canvasColor = '#212121';
  theme.fontFamily = 'Raleway, sans-serif';
  return theme;
};

const App = ({ children }) => {
  let darkCustomTheme = modifyTheme(darkBaseTheme);
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkCustomTheme)}>
      <div id='app'>
        <NavBar />
        {children}
        <Footer />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
