import React from 'react';
import '../styles/Menu.css';
import { Routes, Route } from 'react-router-dom';
import MenuNavbar from './MenuNavbar';
import MenuPares from './MenuPares';
import MenuChicken from './MenuChicken';
import MenuPork from './MenuPork';
import MenuPorridge from './MenuPorridge';
import MenuDrinks from './MenuDrinks';
import MyCart from './Cart';
import { MenuProvider } from './MenuContext'; // Import the MenuProvider

function Menu() {
  return (
    <MenuProvider> {/* Wrap your application with MenuProvider */}
      <div className='menu'>
        <div className='menu__sidebar'>
          <MenuNavbar />
        </div>

        <div className='menu__content'>
          <Routes>
            <Route index element={<MenuPares />} />
            <Route path='chicken' element={<MenuChicken />} />
            <Route path='pork' element={<MenuPork />} />
            <Route path='porridge' element={<MenuPorridge />} />
            <Route path='drinks' element={<MenuDrinks />} />
            <Route path='cart' element={<MyCart />} />
          </Routes>
        </div>
      </div>
    </MenuProvider>
  );
}

export default Menu;
