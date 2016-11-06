import React from 'react';
import { Link } from 'react-router';
import VideoDialogContainer from './video_dialog_container';
import DeleteButtonContainer from './delete_button_container';

class VideoHoverItem extends React.Component {
  constructor(props){
    super(props);
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
        <VideoDialogContainer video={this.props.video}/>
        <DeleteButtonContainer video={this.props.video}/>
        <br/>
        <button className="videoDetailsBtn">Details</button>
      </div>
    );
  }
}
export default VideoHoverItem;
