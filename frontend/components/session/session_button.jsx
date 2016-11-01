import React from 'react';
import { Link } from 'react-router';

class SessionButton extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.session.currentUser){
      return (
        <div className="session">
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="session">
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  }
}

export default SessionButton;
