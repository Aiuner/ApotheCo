import React from 'react';
import { Link } from 'react-router-dom';

import './styles/CurrentUser.css';

export default function CurrentUser(props) {
  const { currentUser, handleLogout } = props;

  return (
    <>
      {
        currentUser ?
        <>
          {/* <img src={currentUser.profile_img} className="pfp" alt="Your Profile Pic"/> */}
          <h1 className="current-user">{currentUser.username}</h1>
          <button onClick={handleLogout} className="nav-login-register-logout">Log Out</button>
        </>
        :
        <>
          <h1 className="current-user">Welcome, Guest. Please log in or register.</h1>
          <span><Link to='/login' className="nav-login-register-logout">Log In</Link>/<Link to='/register' className="nav-login-register-logout">Register</Link></span>
        </>
      }
    </>
  );
}