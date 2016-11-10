import React from 'react';
import Slider from 'react-slick';
import VideoCarouselItem from './video_carousel_item';

const VideoCarousel = (props) => {
  var settings = {
    slidesToShow: 3,
	  slidesToScroll: 2,
    infinite: props.infinite
  };

  let content;
  if( props.videos.length === 0 ){
    content = <label className='notFound'>No Videos Found!</label>;
  } else {
    content = <Slider {...settings}>
                { props.videos.map((v, i) => (
                  <div key={i}>
                  <VideoCarouselItem
                    key={i}
                    video={v}
                  />
                  </div>
                )) }
              </Slider>;
  }

  return (
    <div className='videoCarousel'>
      <h1>{props.category}</h1>
      <div className="carouselContainer">
        {content}
      </div>
    </div>
  );
};



export default VideoCarousel;
