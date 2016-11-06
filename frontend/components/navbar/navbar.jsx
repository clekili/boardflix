import React from 'react';
import LogoButton from './logo_button';
import NavbarButtonPanel from './navbar_button_panel';
import SearchFieldContainer from './search/search_field_container';

const NavBar = () => (
  <div className='nav'>
    <LogoButton/>
    <SearchFieldContainer />
    <NavbarButtonPanel/>
  </div>
);

export default NavBar;
