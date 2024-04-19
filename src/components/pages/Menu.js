import React from 'react';
import '../styles/Menu.css';
import { Routes, Route } from 'react-router-dom';
import MenuNavbar from './MenuNavbar';
import MenuPares from './MenuPares';
import MenuChicken from './MenuChicken';
import MenuPork from './MenuPork';
import MenuPorridge from './MenuPorridge';
import MenuDrinks from './MenuDrinks'
import MyCart from './Cart';

function Menu() {

  return (
    <div className='menu'>
      <div className='menu__sidebar'>
        <MenuNavbar />
      </div>

      <div className='menu__content'>
          <Routes>
            <Route index element={<MenuPares />} />
            <Route path='chicken' element = {<MenuChicken />}></Route>
            <Route path='pork' element = {<MenuPork />}></Route>
            <Route path='porridge' element = {<MenuPorridge />}></Route>
            <Route path='drinks' element = {<MenuDrinks />}></Route>
            <Route path='cart' element = {<MyCart />}></Route>
          </Routes>
      </div> 
    </div>
  )
}

export default Menu;
