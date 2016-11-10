import React from 'react';
import {Link} from 'react-router';

class DeleteButton extends React.Component {
  constructor(props){
    super(props);
    this.deleteVideo = this.deleteVideo.bind(this);
  }

  deleteVideo(e){
    e.preventDefault();
    this.props.deleteVideo(this.props.video.id);
  }

  render (){
  if(this.props.isAdmin){
    return (
          <div>
            <button
              className="deleteVideo"
              onClick={() => this.props.deleteVideo(this.props.video.id)}>
              <img src='https://res.cloudinary.com/ddqzltwv6/image/upload/v1478800819/delete_acp46l.png'/>
            </button>
          </div>
          );
    }
    return null;
  }
}
export default DeleteButton;
