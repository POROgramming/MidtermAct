import React from 'react';
import '../styles/MenuPork.css';
import MenuPork1 from '../assets/MPork1.png';
import MenuPork2 from '../assets/MPork2.png';
import MenuPork3 from '../assets/MPork3.png';
import MenuPork4 from '../assets/MPork4.png';
import MenuCard from './MenuCard';

function MenuPork() {
  return (
    <div className='pork'>
      <div className='pork__header'>
          <h2 className='pork__subtitle'>Menu</h2>
          <h2 className='pork__title'>Pork</h2>
        </div>

        <div className='pork__cards-wrapper'>
          <MenuCard image = {MenuPork1} name = 'Grilled Liempo' description = '1 piece Large Sizzling Liempo with rice' price = {100} />
          <MenuCard image = {MenuPork2} name = 'Diwata Sisig' description = 'Sizzling Sisig with rice and Egg' price = {80} />
          <MenuCard image = {MenuPork3} name = 'Litson Kawali' description = 'Fried pork belly with rice and sauce' price = {100} />
          <MenuCard image = {MenuPork4} name = 'Pork Barbecue' description = '3 Piece Pork Barbecue with java rice' price = {100} />
        </div>
    </div>
  )
}

export default MenuPork