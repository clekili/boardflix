import React from 'react';

const VideoCarousel = (props) => {
  return (
  <div>
    <h1>{props.category}</h1>
    { props.videos.map((v, i) => ( <p key={i}> {v.name} </p> )) }
  </div>);
};

export default VideoCarousel;
