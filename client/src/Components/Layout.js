import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet';

function Layout() {




  return (
    <div className="layout">
      <Helmet>
        <title>Playlistr</title>
      </Helmet>
      <header>
        <NavBar />
      </header>
      <main className='main-container'>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout