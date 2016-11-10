import React from 'react';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const IMAGES = [
  'https://res.cloudinary.com/ddqzltwv6/image/upload/v1478732874/dudes/dude1.png',
  'https://res.cloudinary.com/ddqzltwv6/image/upload/v1478732874/dudes/dude2.png',
  'https://res.cloudinary.com/ddqzltwv6/image/upload/v1478732874/dudes/dude3.png',
  'https://res.cloudinary.com/ddqzltwv6/image/upload/v1478732874/dudes/dude4.png',
  'https://res.cloudinary.com/ddqzltwv6/image/upload/v1478732874/dudes/dude5.png',
  'https://res.cloudinary.com/ddqzltwv6/image/upload/v1478734419/dudes/dude6.png',
  'https://res.cloudinary.com/ddqzltwv6/image/upload/v1478734420/dudes/dude7.png',
  'https://res.cloudinary.com/ddqzltwv6/image/upload/v1478764554/dudes/dude8.png',
  'https://res.cloudinary.com/ddqzltwv6/image/upload/v1478764552/dudes/dude9.png',
  'https://res.cloudinary.com/ddqzltwv6/image/upload/v1478764552/dudes/dude10.png',
  'https://res.cloudinary.com/ddqzltwv6/image/upload/v1478764552/dudes/dude11.png',
  'https://res.cloudinary.com/ddqzltwv6/image/upload/v1478765833/dudes/dude12.png'
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
                <img src='https://goo.gl/PkuzKL'/>
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
              <div className='imageContainer' key={idx}>
              <img  className='selectableImage'
                    src={picture}
                    onClick={this.props.setImage}/>
              </div>))}
          </Popover>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default UserImage;
