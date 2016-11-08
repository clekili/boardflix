import React from 'react';
import Dialog from 'material-ui/Dialog';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReviewItem from './review_item';

import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';

class VideoDialog extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      show: false
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }


  close(){
    this.setState({show: false});
  }

  open(){
    this.setState({show: true});
  }

  render(){
      return (
        <div className='commentsDialog'>
          <button onClick={this.open}>Read more...</button>
          <div className='muiContainer'>
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
              <Popover
                className='showCommentsPopover'
                open={this.state.show}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                animated={false}
                canAutoPosition={false}
                onRequestClose={this.close}
              >
              <h2>Reviews</h2>
                <button className='closeButton'
                        onClick={this.close}>&#x2715;</button>
                <div className='commentsDialogContent'>
                  {this.props.comments.map( comment => (
                    <ReviewItem key={comment.id} comment={comment}/>
                  ))}
                </div>
              </Popover>
            </MuiThemeProvider>
          </div>
        </div>
      );
  }
}

export default VideoDialog;
