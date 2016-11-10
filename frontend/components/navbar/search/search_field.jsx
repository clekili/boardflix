import React from 'react';
import TextField from 'material-ui/TextField';
import { grey50 } from 'material-ui/styles/colors';

const styles = {
  underlineStyle: {
    borderColor: grey50
  },
};

class SearchField extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchString: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    let val = e.target.value;
    this.setState({searchString: val});
    this.props.find(val);
  }

  render() {
    if(this.props.loggedIn){
    return ( <div className='searchField'>
                  <TextField
                    hintText="Search..."
                    underlineFocusStyle={styles.underlineStyle}
                    onChange={this.handleChange}
                    value={this.state.searchString}
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
