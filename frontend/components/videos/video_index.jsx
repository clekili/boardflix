import React from 'react';
import VideoCarousel from './video_carousel';

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);

    this.buildCarousel = this.buildCarousel.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  buildCarousel(cat){
    if(this.props.videos[cat]){
      let videos = Object.values(this.props.videos[cat]);
      return <li key={cat}><VideoCarousel category={cat} videos={videos}/></li>;
    }
  }

  render () {
    return (
      <div className="videoIndex">
        <ul>
          {this.props.categories.map( category =>
              ( this.buildCarousel(category) ))}
        </ul>
      </div>
    );
  }
}

export default VideoIndex;
