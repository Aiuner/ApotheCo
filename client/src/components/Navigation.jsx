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
          <NavLink exact to="/" activeClassName="current-path">Home</NavLink>
        </li>

        { currentUser && 
          <>
          <li className="page-links">
            <NavLink to="/articles/new" activeClassName="current-path">New Article</NavLink>
          </li>
          </>}

        <li className="page-links">
          <NavLink to="/articles/index" activeClassName="current-path">Article Index</NavLink>
        </li>

        { currentUser &&
          <>
            <li className="page-links">
              <NavLink to="/404" activeClassName="current-path">My Articles</NavLink>
            </li>

            <li className="page-links">
              <NavLink to="/404" activeClassName="current-path">My Comments</NavLink>
            </li>

            <li className="page-links">
              <NavLink to="/404" activeClassName="current-path">Settings</NavLink>
            </li>
          </>}
      </ul>
    </div>
  );
}