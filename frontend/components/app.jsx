import React from 'react';
import SessionButtonContainer from './session/session_button_container';

const App = ({ children }) => (
    <div>
      <SessionButtonContainer />
      {children}
    </div>
);

export default App;
