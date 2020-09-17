import React from 'react';
import { Link } from 'react-router-dom';

export default function CurrentUser(props) {
  const { currentUser, handleLogout } = props;

  return (
    <>
      {
        currentUser ?
        <>
          <img src={currentUser.profile_img} classname="pfp" />
          <h1 classname="current-user">{currentUser.username}</h1>
          <button onClick={handleLogout}>Log Out</button>
        </>
        :
        <>
          <h1 classname="current-user">Welcome, Guest. Please log in or register.</h1>
          <span><Link to='/login'>Log In</Link>/<Link to='/register'>Register</Link></span>
        </>
      }
    </>
  );
}