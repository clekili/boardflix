import React from 'react';
import TextField from 'material-ui/TextField';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                  <TextField
                    hintText="Search..."
                    underlineFocusStyle={styles.underlineStyle}
                    onChange={this.handleChange}
                    value={this.state.searchString}
                  />
                </MuiThemeProvider>
                <img
                  className="searchIcon"
                  src="http://res.cloudinary.com/ddqzltwv6/image/upload/v1478468745/search_g7zx4p.png"
                />
              </div>);
    }
    return null;
  }
}

export default SearchField;