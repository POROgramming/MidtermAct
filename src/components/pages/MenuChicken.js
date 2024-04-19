import React from 'react'
import '../styles/MenuChicken.css';
import MenuChicken1 from '../assets/MSiken1.png';
import MenuChicken2 from '../assets/MSiken2.png';
import MenuChicken3 from '../assets/MSiken3.png';
import MenuCard from './MenuCard';

function MenuChicken() {
  return (
    <div className='chicken'>
        <div className='chicken__header'>
          <h2 className='chicken__subtitle'>Menu</h2>
          <h2 className='chicken__title'>Chicken</h2>
        </div>

        <div className='chicken__cards-wrapper'>
          <MenuCard image = {MenuChicken1} name = '1 Pc Fried Siken' description = '1 piece crispy Fried Chicken with unli rice and gravy' price = {60} />
          <MenuCard image = {MenuChicken2} name = 'Ciken Wings' description = '4 piece Buffalo Chicken Wings with  unli rice' price = {70} />
          <MenuCard image = {MenuChicken3} name = 'Ciken Bucket' description = '6pc Chicken Bucket' price = {499} />
        </div>
    </div>
  )
}

export default MenuChicken

