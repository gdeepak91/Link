import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='d-flex justify-content-around bg-default p-3'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/news">News</Link>
        <Link to="/help">Help</Link>
      </div>
    </>
  )
}

export default Navbar