import React from 'react';
import {Link} from 'react-router';

const LogoButton = () => (
  <div className='logo'>
    <Link to="/">
      <img src="http://res.cloudinary.com/ddqzltwv6/image/upload/v1478057684/logo_c9qkgw.png"/>
    </Link>
  </div>
);

export default LogoButton;
