import React from 'react';
import '../styles/MenuDrinks.css';
import MenuDrinks1 from '../assets/MDrinks1.png';
import MenuDrinks2 from '../assets/MDrinks2.png';
import MenuDrinks3 from '../assets/MDrinks3.png';
import MenuDrinks4 from '../assets/MDrinks4.png';
import MenuCard from './MenuCard';

function MenuDrinks() {
  return (
    <div className='drinks'>

      <div className='drinks__header'>
          <h2 className='drinks__subtitle'>Menu</h2>
          <h2 className='drinks__title'>Drinks</h2>
        </div>

      <div className='drinks__cards-wrapper'>
        <MenuCard image = {MenuDrinks1} name = 'Coke' description = 'Regular Coke 500ml' price = {30} />
        <MenuCard image = {MenuDrinks2} name = 'Sprite' description = 'Regular Sprte 500m' price = {30} />
        <MenuCard image = {MenuDrinks3} name = 'Fanta' description = 'Regular Fanta 500ml' price = {30} />
        <MenuCard image = {MenuDrinks4} name = 'Mountain Dew' description = 'Regular Mountain Dew 500 ml' price = {30} />
      </div>
    </div>
  )
}

export default MenuDrinks