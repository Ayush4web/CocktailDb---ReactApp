import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className="nav-center">
         <Link to='/'>
           <img src={logo} alt=""  className='logo'/>
         </Link>
         <ul className='nav-links'>
           <Link to='/'>Home</Link>
           <Link to='/about'>About</Link>

         </ul>
       </div>
    </div>
  )
}

export default Navbar
