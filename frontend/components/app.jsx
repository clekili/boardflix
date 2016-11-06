import React from 'react';
import Splash from './splash/splash';
import NavBar from './navbar/navbar';
import Footer from './footer/footer';
import VideoIndexContainer from './videos/video_index_container';

const App = ({ children }) => (
    <div id='app'>
      <NavBar />
      {children}
      <Footer />
    </div>
);

export default App;
