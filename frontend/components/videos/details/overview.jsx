import React from 'react';

const Overview = (props) => (
  <div className='overview'>
    <h1>Overview of {props.video.name}</h1>
    <span>{props.video.description}</span>
    <br/>
    <span className='viewCount'>
      {props.video.view_count} views.
    </span>
    <br/>
    Rating: {props.video.rating}
  </div>
);

export default Overview;
