import React from 'react'
import Header from './components/Header'
import NavigationBar from './components/NavigationBar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
const Layout = () => {
  return (
    <>
    <Header/>
    <NavigationBar/>
    <Outlet/>
    <Footer/>
    </>

  )
}

export default Layout