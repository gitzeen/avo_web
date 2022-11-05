import React from 'react'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';


const Navbar = () => {
  return (
    <div className="avo__navbar">
      <div className="avo__navbar-links">
        <div className="avo__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="avo__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#vision">Our vision</a></p>
        </div>
      </div>
      <div className="avo__navbar-sign">
        <p>Sign in</p>
        <p>Sign up</p>
      </div>
    </div>
  )
}

export default Navbar