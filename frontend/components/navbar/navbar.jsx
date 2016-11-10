import React from 'react';
import LogoButton from './logo_button';
import NavbarButtonPanel from './navbar_button_panel';
import SearchFieldContainer from './search/search_field_container';
import { withRouter } from 'react-router';

class NavBar extends React.Component{
  render(){
    let searchComponent;
    if(this.props.location.pathname === '/')
      searchComponent = <SearchFieldContainer />;

    return (
    <div className='nav'>
      <LogoButton/>
      {searchComponent}
      <NavbarButtonPanel/>
    </div>
    );
  }
}


export default withRouter(NavBar);
