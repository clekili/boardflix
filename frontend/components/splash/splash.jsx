import React from 'react';
import NavBar from '../navbar/navbar';

const App = ({ children }) => (
    <div>
      <NavBar />
      {children}
    </div>
);

export default App;
