import React from 'react';
import { NavLink } from 'react-router-dom';

import CurrentUser from './CurrentUser.jsx';

import './styles/Navigation.css'

export default function Navigation(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="nav">
      <CurrentUser 
        currentUser={currentUser}
        handleLogout={handleLogout} />

      <ul>
        <li className="page-links">
          <NavLink exact to="/">Home</NavLink>
        </li>

        { currentUser && 
          <>
          <li className="page-links">
            <NavLink to="/articles/new">New Article</NavLink>
          </li>
          </>}

        <li className="page-links">
          <NavLink to="/articles/index">Article Index</NavLink>
        </li>

        { currentUser &&
          <>
            <li className="page-links">
              <NavLink to="/404">DummyLink</NavLink>
            </li>
            
            <li className="page-links">
              <NavLink to="/404">DummyLink</NavLink>
            </li>
          </>}
      </ul>
    </div>
  );
}