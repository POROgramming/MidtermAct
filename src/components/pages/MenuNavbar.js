import React from 'react';
import { Link, NavLink, useLocation  } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../styles/MenuNavbar.css';

function MenuNavbar() {
    const location = useLocation();

  return (
    <div className='nav-menu'>
        <div className='nav-menu__wrapper'>
            <div className='nav-menu__logo-wrapper'>
                <Link to='/'>
                    <img className='nav-menu__logo' src={Logo} ></img>
                </Link>
                
            </div>
            
            <div className='nav-menu__links-wrapper'>
                <li className='nav-menu__link-list'>
                    <NavLink to='/menu' className={location.pathname === '/menu' ? 'nav-menu__link-active' : 'nav-menu__link'}>Pares</NavLink>
                </li>
                <li className='nav-menu__link-list'>
                    <NavLink to='/menu/chicken' className={location.pathname === '/menu/chicken' ? 'nav-menu__link-active' : 'nav-menu__link'}>Chicken</NavLink>
                </li>
                <li className='nav-menu__link-list'>
                    <NavLink to='/menu/pork' className={location.pathname === '/menu/pork' ? 'nav-menu__link-active' : 'nav-menu__link'}>Pork</NavLink>
                </li>
                <li className='nav-menu__link-list'>
                    <NavLink to='/menu/porridge' className={location.pathname === '/menu/porridge' ? 'nav-menu__link-active' : 'nav-menu__link'}>Porridge</NavLink>
                </li>
                <li className='nav-menu__link-list'>
                    <NavLink to='/menu/drinks' className={location.pathname === '/menu/drinks' ? 'nav-menu__link-active' : 'nav-menu__link'}>Drinks</NavLink>
                </li>
                <li className='nav-menu__link-list'>
                    <NavLink to='/menu/cart' className={location.pathname === '/menu/cart' ? 'nav-menu__link-active' : 'nav-menu__link'}>My Cart</NavLink>
                </li>
            </div>
        </div>
    </div>
  )
}

export default MenuNavbar;

