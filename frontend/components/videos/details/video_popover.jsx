import React from 'react';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DetailsContainer from './details_container';
import Overview from './overview';

class VideoPopover extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      video: props.video,
      show: false,
      anchorEl: undefined,
      displaying: 'overview'
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.show = this.show.bind(this);
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

    let parentEl = $slider;
    let anchorEl = slider[4];
    this.setState({show: true, anchorEl, parentEl, parentHeight});
  }

  show(content){
    return (e) => {
      e.preventDefault();
      this.setState({displaying: content});
    };
  }

  render(){
    let content = <Overview video={this.state.video}/>;
    if(this.state.displaying === 'details')
      content = <DetailsContainer video={this.state.video}/>;

    return (
      <div className='videoPopover'>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div>
          <button
            onClick={this.open}
            className='detailsButton'>
            <img src="http://res.cloudinary.com/ddqzltwv6/image/upload/c_scale,h_20/v1478506717/downArrow_bu2x30.png"/>
          </button>
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
            {content}
            <button onClick={this.show('overview')}>Overview</button>
            <button onClick={this.show('details')}>Details</button>
          </Popover>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default VideoPopover;
