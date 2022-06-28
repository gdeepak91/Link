import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './Navbar'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Error from '../Pages/Error';
import News from '../Pages/News'
import Help from '../Pages/Help'

const Link = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/help" element={<Help/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default Link