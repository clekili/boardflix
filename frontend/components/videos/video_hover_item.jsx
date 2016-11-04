import React from 'react';
import { Link } from 'react-router';

const VideoHoverItem = (props) => {
  return (
    <div className='videoHoverCover'>
      <h2 className="videoTitle">
        {props.video.name}
      </h2>
      <Link to={`${props.video.category}/videos/${props.video.id}`}>
        Play
      </Link>
      <br/>
      <button>Details</button>
    </div>
  );
};

export default VideoHoverItem;
