import React from 'react';
import Slider from 'react-slick';

const VideoCarousel = (props) => {
  var settings = {
        slidesToShow: 3,
  		  slidesToScroll: 2
      };

  return (
    <div>
      <h1>{props.category}</h1>
      <div className="carouselContainer">
        <Slider {...settings}>
          { props.videos.map((v, i) => (
            <div>
              <h2 key={i} className="videoTitle"> {v.name} </h2>
              <img className="videoThumbnail" src={getVideoThumbnail(v)}/>
            </div>
          )) }
        </Slider>
      </div>
    </div>
  );
};


const getVideoThumbnail = (video) => {
  return `https://img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg`;
};

export default VideoCarousel;
