import React from 'react';
import SessionButtonContainer from './session/session_button_container';
import VideoDialogContainer from '../videos/video_dialog_container';

const NavbarButtonPanel = () => (
  <div className='navbarBtnPane'>
    <VideoDialogContainer />
    <SessionButtonContainer />
  </div>
);

export default NavbarButtonPanel;
