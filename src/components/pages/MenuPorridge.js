import React from 'react';
import '../styles/MenuPorridge.css';
import MenuPorridge1 from '../assets/MPorridge1.png';
import MenuPorridge2 from '../assets/MPorridge2.png';
import MenuPorridge3 from '../assets/MPorridge3.png';
import MenuCard from './MenuCard';

function MenuPorridge() {
  return (
    <div className='porridge'>
        <div className='porridge__header'>
          <h2 className='porridge__subtitle'>Menu</h2>
          <h2 className='porridge__title'>Porridge</h2>
        </div>

        <div className='porridge__cards-wrapper'>
          <MenuCard image = {MenuPorridge1} name = 'Lugaw with Egg' description = 'Plain lugaw with Egg' price = {30} />
          <MenuCard image = {MenuPorridge2} name = 'Special Lugaw' description = 'Lugaw with Lechon Kawali , Chicken Meat and Egg' price = {100} />
          <MenuCard image = {MenuPorridge3} name = 'Gotong Batangas' description = 'Rice porridge with ox tripe' price = {50} />     
        </div>
    </div>
  )
}

export default MenuPorridge