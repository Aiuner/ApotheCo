import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles/Navigation.css'

export default function Navigation() {
  return (
    <div className="nav">
      <h1>Nav Panel.</h1>
      
      <ul>
        <li className="page-links">
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li className="page-links">
          <NavLink to="/articles/new">New Article</NavLink>
        </li>
        <li className="page-links">
          <NavLink to="/articles/index">Article Index</NavLink>
        </li>
      </ul>
    </div>
  );
}