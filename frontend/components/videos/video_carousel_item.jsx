import React from 'react';
import VideoHoverItem from './video_hover_item';

class VideoCarouselItem  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  videoHoverItem(){
    return (
      <VideoHoverItem
        video={this.props.video} hovered={this.state.hovered}
      />
    );
  }

  render () {
    return (
      <div className="videoCarouselItem">
        <img className="videoThumbnail"
             src={this.getVideoThumbnail()}/>
           {this.videoHoverItem()}
      </div>
    );
  }

  getVideoThumbnail() {
    let video = this.props.video;
    return `https://img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg`;
  }
}

export default VideoCarouselItem;
