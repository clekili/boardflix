import React from 'react';
import {Link} from 'react-router';
import SessionButton from '../navbar/session/session_button';

const Intro = () => (
  <div className='intro'>
    <img src="https://res.cloudinary.com/ddqzltwv6/image/upload/v1478819549/combinedReducedMore_nkc5vy.gif"/>
    <div className='splashTitle'>
      <h1>Time to <span>ride</span></h1>
      <h2>{"Watch snow, skate, surf boarding videos. Get Ready for the season"}</h2>
      <SessionButton onlySignup={true}/>
    </div>
  </div>
);

export default Intro;
