import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
      
    </>
  )
}

export default Layout
