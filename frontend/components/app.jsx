import React from 'react';
import Splash from './splash/splash';
import NavBar from './navbar/navbar';
import Footer from './footer/footer';

const App = ({ children }) => (
    <div>
      <NavBar />
      <Splash />
      {children}
      <Footer />
    </div>
);

export default App;
