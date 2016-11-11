# Boardflix

Boardflix is a full-stack web application provides a collection of videos on various board sports. Inspired by Netflix. Stack used in crafting Boardflix includes Ruby on Rails backend, PostgreSQL db and React/Redux frontend.

Feel free to browse at <a src='http://www.boardflix.co'>Boardflix</a>.

<img src='https://res.cloudinary.com/ddqzltwv6/image/upload/v1478890830/splash_khmvhr.png' width='100%'/>


## Features & Implementation

* [Videos](### Videos)
 - Watch
 - Create, Update, Delete (admin only)
 - See average rating for videos
 - See view counts of videos
* [Comments](### Comments)
 - Create, Read, Update, Delete
 - Add a rating
* [User Profiles](### User Profiles)
 - Change profile avatar
 - Change username and password
 - Browse own comments
* [Search](### Search)
 - Realtime search videos on index page

### Videos
Videos are the main functonality of Boardflix. Videos table on database contains columns: `name`, `youtube_id`, `description`, `view_count`, `rating`.The react components created for videos include ; VideoIndex, VideoCarousel, VideoCarouselItem, VideoHoverItem, VideoPlayer, VideoDialog, VideoDetails...

Render method of VideoIndex:
```js
render () {
  return (
    <div className="videoIndex">
      <ul>
        <li key='search'>{this.getSearchResults()}</li>
        {this.props.categories.map( category => {
            return <li key={category}>{this.buildCarousel(category)}</li>;
        })}
      </ul>
    </div>
  );
}
```
<img src='https://res.cloudinary.com/ddqzltwv6/image/upload/v1478892754/index_qmeiek.png' width='100%'/>

#### VideoCarousel component
VideoCarousel component is a simple component which receives a title(category) and an array of videos and renders it to a carousel representation. This component is not only useful for representing categories but it also is used for displaying search results.

```js
const VideoCarousel = (props) => {
  var settings = {
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: props.infinite
  };

  let content;
  if( props.videos.length === 0 ){
    content = <label className='notFound'>No Videos Found!</label>;
  } else {
    content = <Slider {...settings}>
                { props.videos.map((v, i) => (
                  <div key={i}>
                  <VideoCarouselItem
                    key={i}
                    video={v}
                  />
                  </div>
                )) }
              </Slider>;
  }

  return (
    <div className='videoCarousel'>
      <h1>{props.category}</h1>
      <div className="carouselContainer">
        {content}
      </div>
    </div>
  );
};
```

### Comments
Comments are a complimentary feature to videos. Each user can read all comments and create, update, delete their own comments. At the database level comments table consists of columns; `user_id`, `video_id`, `rating`, `body`.

<img src='https://res.cloudinary.com/ddqzltwv6/image/upload/v1478895055/comments_gnsj08.png' width='100%'/>

<img src='https://res.cloudinary.com/ddqzltwv6/image/upload/v1478895058/comments2_pv6sco.png' width='100%'/>

One of the highlights on comments front-end components is Stars component. Here are some highlights from Stars component:

```js
renderStar(num){
  let color = this.state.rating >= num ? 'starRed' : "" ;
  if(this.props.active){
    return (
      <div className={"star " + color}
         name={num}
         onMouseEnter={this.handleHoverOn}
         onMouseLeave={this.handleHoverOff}
         onClick={this.props.setRating(num)}>
         &#9733;
      </div>
    );
  } else {
    return (
      <div className={"star " + color}>
         &#9733;
      </div>
    );
  }
}

render(){
  return (
    <div className='stars'>
      <ul>
      { [1,2,3,4,5].map( num => <li key={num}>{this.renderStar(num)}</li> ) }
      </ul>
    </div>
  );
}
```

### User Profiles
User profiles is a feature that enables users to view and manipulate their user accounts. User profile can be accessed through clicking the avatar icon on upper right corner of the navigation panel. Users table on the database level consists of columns: `username`, `password_digest`, `session_token`, `is_admin`, `image`.

Some of the components created for this feature are; SessionForm, SessionButton, UserImage, UserPage, UserReviews.

<img src='https://res.cloudinary.com/ddqzltwv6/image/upload/v1478895586/profile_zhf9uf.png' width='100%'/>

One of the nice features is the UserImage component which allows user to select an avatar.
Here is how it looks :

<img src='https://res.cloudinary.com/ddqzltwv6/image/upload/v1478895688/avatar_changing_iy53ls.png' width='100%'/>

And in code :
```js
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
    </div>
  );
}
```

### Search

Search feature allows users to search videos in realtime.

<img src='https://res.cloudinary.com/ddqzltwv6/image/upload/v1478898808/search_zu1zia.gif' width='100%'/>


## Potential Extentions

Boardflix was designed in under 2 weeks, hence there are many ways it can be expanded.

### Content cleaner
A routine backend task which can identify and remove comments with inappropriate content.

### Improvements Account/IP Security
 * A feature that keeps track of the recent authentication failures and locks the account/IP address for the next n amount of time.
 * Add email address and the option to reset password to th user accounts

### Watchlists
User's having a custom watchlist where they can add/remove videos to, and browse their videos.

### User viewing activity
Users can see which videos they have been watching and when they watched them.

### Custom Player
Currently Boardflix uses Youtube api to host and play videos. It may be a good improvement to create a custom video player which can play videos from various sources as well as the ability to directly upload a video.

### One admin to rule all comments
For the time being admin user have the administrative powers that are editing, creating deleting videos. The admin account can be improved by adding privileges to edit and delete all comments from all users.
