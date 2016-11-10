import React from 'react';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const IMAGES = [
  'https://goo.gl/o36l3O',
  'https://goo.gl/YoJmXf',
  'https://goo.gl/LZqdRo',
  'https://goo.gl/0Q86qw',
  'https://goo.gl/ptacu2',
  'https://goo.gl/JllrjK',
  'https://goo.gl/YNmMm1',
  'https://goo.gl/aJoJsr'
];

class UserImage extends React.Component {
  constructor(props) {
    super(props);



    this.state = {
      displayImages: false,
    };

    this.toggleImages = this.toggleImages.bind(this);
  }

  toggleImages(){
    this.setState( { displayImages: !this.state.displayImages } );
  }

  render() {
    let image = this.props.user.image;
    if(!image)
      image = IMAGES[Math.floor(Math.random()*IMAGES.length)];

    return (
      <div className="userImage">
        <img src={image}
             onClick={ this.toggleImages }/>
        <button className="changeImageBtn"
                onClick={ this.toggleImages }>
                <img src='https://goo.gl/7Ha0Ob'/>
        </button>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Popover
            className='userImagePopover'
            open={this.state.displayImages}
            anchorEl={$('.changeImageBtn')[0]}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            animation={PopoverAnimationVertical}
            canAutoPosition={false}
            onRequestClose={this.toggleImages}
          >
            {IMAGES.map( (picture, idx) => (
              <img  key={idx}
                    className='selectableImage'
                    src={picture}
                    onClick={this.props.setImage}/>))}
          </Popover>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default UserImage;
