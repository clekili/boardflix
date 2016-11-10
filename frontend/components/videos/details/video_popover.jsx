import React from 'react';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
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
    $('.sliderPopper').slideUp(400, () => $('.sliderPopper').remove());
    this.setState({show: false});
  }

  open(e){
    e.preventDefault();
    let $carousel = $($(e.currentTarget).closest(".carouselContainer")[0]);
    $("<div class='sliderPopper'/>").appendTo($carousel).slideDown(400);

    let anchorEl = $carousel.children()[0];
    this.setState({show: true, anchorEl});
  }

  show(content){
    return (e) => {
      e.preventDefault();
      this.setState({displaying: content});
    };
  }

  renderButtons(){
    if(this.state.displaying === 'overview'){
      return (
        <div className='detailsPopoverButtonsPane'>
          <button className="activeButton"
                  onClick={this.show('overview')}>Overview</button>
          <button onClick={this.show('details')}>Details</button>
        </div>
      );
    } else {
      return (
        <div className='detailsPopoverButtonsPane'>
          <button onClick={this.show('overview')}>Overview</button>
          <button className="activeButton"
                  onClick={this.show('details')}>Details</button>
        </div>
      );
    }
  }

  render(){
    let content = <Overview video={this.state.video}/>;
    if(this.state.displaying === 'details')
      content = <DetailsContainer video={this.state.video}/>;

    return (
      <div className='videoPopover'>
        <div>
          <button
            onClick={this.open}
            className='detailsButton'>
            <img src="https://res.cloudinary.com/ddqzltwv6/image/upload/c_scale,h_20/v1478506717/downArrow_bu2x30.png"/>
          </button>
          <Popover
            className='detailsPopover'
            open={this.state.show}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            animation={PopoverAnimationVertical}
            autoCloseWhenOffScreen={false}
            canAutoPosition={false}
            onRequestClose={this.close}
          >
            <div className="detailsBackgrounGradient"></div>
            <img
              className="detailsBackgroundImg"
              src={`https://img.youtube.com/vi/${this.state.video.youtube_id}/hqdefault.jpg`}/>
            {content}
            {this.renderButtons()}
          </Popover>
        </div>
      </div>
    );
  }
}

export default VideoPopover;
