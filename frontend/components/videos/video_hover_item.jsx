import React from 'react';
import { Link } from 'react-router';
import VideoDialogContainer from './video_dialog_container';
import DeleteButtonContainer from './delete_button_container';
import FlatButton from 'material-ui/FlatButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
          <img
            src="http://res.cloudinary.com/ddqzltwv6/image/upload/v1478471722/play_da9o38.png" className="playLinkImg" alt="play" />
        </Link>
        <br/>
        <VideoDialogContainer video={this.props.video}/>
        <DeleteButtonContainer video={this.props.video}/>
        <br/>
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <FlatButton
              backgroundColor=""
              hoverColor=""
              label="Details"
              className="videoDetailsBtn"
            />
          </MuiThemeProvider>
      </div>
    );
  }
}
export default VideoHoverItem;
