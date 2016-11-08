import React from 'react';
import Stars from './stars';

const Overview = (props) => (
  <div className='overview'>
    <h1>{props.video.name}</h1>
      <section className="stats">
      <span className='viewCount'>
        {props.video.view_count} views
      </span>
      <Stars rating={props.video.rating}/>
      </section>
      <br/>
    <span>{props.video.description}</span>
    <br/>
  </div>
);

export default Overview;
