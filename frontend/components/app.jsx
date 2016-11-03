import React from 'react';
import Splash from './splash/splash';
import NavBar from './navbar/navbar';
import Footer from './footer/footer';
import VideoIndexContainer from './videos/video_index_container';

const App = ({ children }) => (
    <div>
      <NavBar />
      {window.currentUser ? <VideoIndexContainer/> : <Splash/>}
      {children}
      <Footer />
    </div>
);

export default App;
