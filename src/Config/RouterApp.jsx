import React from 'react'
import { Link, Route, Routes } from 'react-router'
import Home from '../Component/Home'
import About from '../Component/About'
import Contact from '../Component/Contact'

const RouterApp = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default RouterApp
