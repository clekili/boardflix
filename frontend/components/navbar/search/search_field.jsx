import React from 'react';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import { grey50 } from 'material-ui/styles/colors';

const styles = {
  underlineStyle: {
    borderColor: grey50
  }
};

class SearchField extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchString: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text){
    this.setState({searchString: text});
    this.props.find(text);
  }

  render() {
    if(this.props.loggedIn){
    return ( <div className='searchField'>
                <AutoComplete
                  hintText="Search..."
                  filter={AutoComplete.caseInsensitiveFilter}
                  dataSource={this.props.videoNames}
                  onUpdateInput={this.handleChange}
                  underlineFocusStyle={styles.underlineStyle}
                  maxSearchResults={4}
                />
                <img
                  className="searchIcon"
                  src="https://res.cloudinary.com/ddqzltwv6/image/upload/v1478468745/search_g7zx4p.png"
                />
              </div>);
    }
    return null;
  }
}

export default SearchField;
