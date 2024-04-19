import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  
  return (
    <header>
        <div className='header-wrapper'>
            <img className='header__logo' src={logo} ></img>
            
            <nav className='header__menu'>
                <a href='#home' className='header__menu-links'>Home</a>
                <Link to='/menu'className='header__menu-links'>Menu</Link>
                <a href='#best-sellers' className='header__menu-links'>Best Sellers</a>
                <a href='#about' className='header__menu-links'>About</a>
                <a href='#footer' className='header__menu-links'>Contacts</a>
           </nav>
        </div>
    </header>
  )
}

export default Navbar