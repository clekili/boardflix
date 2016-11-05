import React from 'react';
import {hashHistory} from 'react-router';
import SessionButton from '../navbar/session/session_button';

const MainContent = () => (
  <div className='mainContent'>
      <h2>Life is Better on a Board</h2>
      <p>Explore snowboard, skateboard and surf videos.</p>
      <p>Share good times with our community.</p>
      <p>Get prepared for the upcoming session.</p>
      <div className="newAccount">
        <SessionButton/>
      </div>
  </div>
);

export default MainContent;
