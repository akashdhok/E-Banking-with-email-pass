import React from 'react'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import Services from './pages/Services'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Layout/>}>
      <Route index element = {<Home/>}/>
      <Route path='home' element = {<Home/>}/>
      <Route path='about' element = {<About/>}/>
      <Route path='services' element = {<Services/>}/>

      <Route path='contact' element = {<Contact/>}/>
      <Route path='login' element = {<Login/>}/>
      <Route path='registration' element = {<Registration/>}/>

      </Route>
    </Routes>
    </>
  )
}

export default App