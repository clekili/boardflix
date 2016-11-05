import React from 'react';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideo();
  }

  render() {
    let video = this.props.video || {};
    return (
      <div className='videoPlayer'>
        <iframe
          className='embeddedPlayer'
          src={`https://www.youtube.com/embed/${video.youtube_id}`}
          frameBorder="0"
          allowFullScreen>
        </iframe>
      </div>
    );
  }
}



export default VideoPlayer;
