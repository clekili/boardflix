import React from 'react';
import { Link } from 'react-router';
import VideoDialogContainer from './video_dialog_container';

class VideoHoverItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showEdit: false
    };

    this.deleteVideo = this.deleteVideo.bind(this);
  }

  deleteVideo(e){
    e.preventDefault();
    this.props.deleteVideo(this.props.video.id);
  }

  render(){
    return (
      <div className="videoHoverCover">
        <h2 className="videoTitle">
          {this.props.video.name}
        </h2>
        <Link
          className="playLink"
          to={`${this.props.video.category}/videos/${this.props.video.id}`}>
          Play
        </Link>
        <br/>
        <VideoDialogContainer
          video={this.props.video}
        />
        <br/>
        <button
          className="deleteVideo"
          onClick={this.deleteVideo}>
          Delete
        </button>
        <br/>
        <button className="videoDetailsBtn">Details</button>
      </div>
    );
  }
}
export default VideoHoverItem;
