import React from 'react';
import Splash from './splash/splash';
import NavBar from './navbar/navbar';
import Footer from './footer/footer';
import VideosIndex from './videos/video_index';

const App = ({ children }) => (
    <div>
      <NavBar />
      <Splash />
      {children}
      <Footer />
    </div>
);

const body = () => {
  if(window.currentUser)
    return (<Splash />);
  else
    return (<VideosIndex />);
};

export default App;
