import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none',
        }
    }
  return (
    <>
    <nav>
    <NavLink to="Homepage" style={navLinkStyles}>Home</NavLink>
    <NavLink to="About" style={navLinkStyles}>About</NavLink>
    <NavLink to="Contact" style={navLinkStyles}>Contact</NavLink>
    <NavLink to="Login" style={navLinkStyles}>Login</NavLink>
    </nav>
    </>
  )
}

export default Navbar