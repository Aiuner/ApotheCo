import React from 'react';

import Navigation from '../components/Navigation.jsx';

import './Layout.css';

export default function Layout(props) {
  return (
    <>
      <header>
        <div className="logo-section"><h1 className="name">ApotheCo</h1></div>
        <div className="hamburger-section"></div>
      </header>
      <main>
        <div className="page-content">
          {props.children}
        </div>
        <div className="nav-panel">
          <Navigation 
            currentUser={props.currentUser}
            handleLogout={props.handleLogout} />
        </div>
      </main>
      <footer>
        <h1>I'm the footer!</h1>
      </footer>
    </>
  )
}