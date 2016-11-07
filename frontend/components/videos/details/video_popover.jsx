import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class VideoPopover extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      video: props.video,
      show: false,
      anchorEl: undefined,
      // TODO showing: 'overview'
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close(){
    this.state.parentEl.animate({
      height: this.state.parentHeight
    }, 400, ()=>{});

    this.setState({show: false});
  }

  open(e){
    e.preventDefault();
    let slider = $(e.currentTarget).parentsUntil(".slick-slider");
    let $slider = $(slider[slider.length - 1]);
    let parentHeight = $slider.height();
    $slider.animate({
      height: parentHeight + 300
    }, 400, ()=>{});


    // let anchorEl = $(e.currentTarget).parentsUntil(".slick-slide");
    // anchorEl = anchorEl[anchorEl.length - 1];
    let parentEl = $slider;
    let anchorEl = slider[4];
    this.setState({show: true, anchorEl, parentEl, parentHeight});
  }

  render(){
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div>
          <RaisedButton
            onClick={this.open}
            label="Details"
          />
          <Popover
            className='detailsPane'
            open={this.state.show}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'middle', vertical: 'top'}}
            animation={PopoverAnimationVertical}
            autoCloseWhenOffScreen={true}
            canAutoPosition={false}
            onRequestClose={this.close}
          >
            <div className='detailsPane'>
              {this.state.video.name}
            </div>
          </Popover>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default VideoPopover;
