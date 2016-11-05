import React from 'react';
import VideoHoverItem from './video_hover_item';

class VideoCarouselItem  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: props.video,
      hovered: false
    };

    this.getVideoThumbnail = this.getVideoThumbnail.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseOver(){
    this.setState({hovered: true});
  }
  mouseLeave(){
    this.setState({hovered: false});
  }

  render () {
    let videoHoverItem;
    if(this.state.hovered)
      videoHoverItem = <VideoHoverItem video={this.state.video}/>;

    return (
      <div className="videoCarouselItem"
           onMouseEnter={this.mouseOver} onMouseLeave={this.mouseLeave}>
        <img className="videoThumbnail"
             src={this.getVideoThumbnail()}/>
        {videoHoverItem}
      </div>
    );
  }

  getVideoThumbnail() {
    let video = this.state.video;
    return `https://img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg`;
  }
}

//   <div>
//     <h2 key={i} className="videoTitle"> {v.name} </h2>
//     <img className="videoThumbnail" src={getVideoThumbnail(v)}/>
//   </div>
// };

export default VideoCarouselItem;
