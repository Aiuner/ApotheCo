import React from 'react';
import './Layout.css';

export default function Layout(props) {
  return (
    <>
      <header>
        <h1>ApotheCo</h1>
      </header>
      <main>
        <div className="page-content">
          {props.children}
        </div>
        <div className="nav-panel">
          <h1>Nav Panel.</h1>
        </div>
      </main>
      <footer>
        <h1>I'm the footer!</h1>
      </footer>
    </>
  )
}