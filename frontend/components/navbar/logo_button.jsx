import React from 'react';
import {Link} from 'react-router';

const LogoButton = () => (
  <div className='logo'>
    <Link to="/">
      <img src="http://res.cloudinary.com/ddqzltwv6/image/upload/v1478040514/logo_new_qili1u.png"/>
    </Link>
  </div>
);

export default LogoButton;
