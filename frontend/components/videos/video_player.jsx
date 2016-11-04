import React from 'react';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(!this.props.video.name){
      this.props.fetchVideo();
    }
  }

  render() {
    let video = this.props.video || {};
    return (
      <div className='videoPlayer'>
        <iframe
          className='embeddedPlayer'
          src={`https://www.youtube.com/embed/${video.youtube_id}`}
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    );
  }
}



export default VideoPlayer;
