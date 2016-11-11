import { connect } from 'react-redux';
import { fetchVideos } from '../../../actions/video_actions';
import SearchField from './search_field';

const getVideoNames = state => {
  let videoNames = [];

  let categories = Object.keys(state.videos);
  for(let i = 0; i < categories.length; i++){
    if(categories[i] === 'Search Results')
      continue;
    let category = state.videos[categories[i]];
    let videoIds = Object.keys(category);
    for(let j = 0; j < videoIds.length; j++){
      let video = category[videoIds[j]];
      videoNames.push(video.name);
    }
  }

  return videoNames;
};


const mapStateToProps = state => ({
  loggedIn: state.session.currentUser,
  videoNames: getVideoNames(state)
});

const mapDispatchToProps = dispatch => ({
  find: searchStr => dispatch(fetchVideos(searchStr))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
