import React from 'react';
import Slider from 'react-slick';
import VideoCarouselItem from './video_carousel_item';

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
            <VideoCarouselItem video={v} key={i} />
            </div>
          )) }
        </Slider>
      </div>
    </div>
  );
};



export default VideoCarousel;
