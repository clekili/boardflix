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

  buildCarousel(cat, infinite = true){
    if(this.props.videos[cat]){
      let videoIds = Object.keys(this.props.videos[cat]);
      let videos = [];
      videoIds.forEach( id => {
        videos.push(this.props.videos[cat][id]);
      });
      return (
          <VideoCarousel
            category={cat}
            videos={videos}
            infinite={infinite}
          />
      );
    }
  }

  getSearchResults(){
    let searchResults;
    if(this.props.categories.includes("Search Results")){
      searchResults = this.buildCarousel("Search Results", false);
      let idx = this.props.categories.indexOf("Search Results");
      this.props.categories.splice(idx, 1);
    }
    return searchResults;
  }

  render () {
    return (
      <div className="videoIndex">
        <ul>
          <li key='search'>{this.getSearchResults()}</li>
          {this.props.categories.map( category => {
              return <li key={category}>{this.buildCarousel(category)}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default VideoIndex;
