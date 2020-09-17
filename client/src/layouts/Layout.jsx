import React from 'react'

export default function Layout(props) {
  return (
    <>
      <header>
        <h1>Something goes up here.</h1>
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        <h1>Something goes down here.</h1>
      </footer>
    </>
  )
}