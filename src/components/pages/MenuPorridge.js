import React from 'react';
import '../styles/MenuPorridge.css';
import MenuPorridge1 from '../assets/MPorridge1.png';
import MenuPorridge2 from '../assets/MPorridge2.png';
import MenuPorridge3 from '../assets/MPorridge3.png';
import AddCartIcon from '../assets/addCartIcon.png';

function MenuPorridge() {
  return (
    <div className='porridge'>
        <div className='porridge__header'>
          <h2 className='porridge__subtitle'>Menu</h2>
          <h2 className='porridge__title'>Porridge</h2>
        </div>

        <div className='porridge__cards-wrapper'>

        <div className='porridge__card'>
          <img className='porridge__card-img' src={MenuPorridge1} ></img>
          <div className='porridge__card-body'>
            <h3 className='porridge__card-food-name'>Lugaw with Egg</h3>
            <p className='porridge__card-food-description'>Plain lugaw with Egg</p>
            <div className='porridge__card-footer'>
              <h3 className='porridge__card-price'>₱ 30.00</h3>
              <img className='porridge__card-add-cart-icon' src={AddCartIcon}></img>
            </div>
          </div>
        </div>

        <div className='porridge__card'>
          <img className='porridge__card-img' src={MenuPorridge2} ></img>
          <div className='porridge__card-body'>
            <h3 className='porridge__card-food-name'>Special Lugaw</h3>
            <p className='porridge__card-food-description'>Lugaw with Lechon Kawali , Chicken Meat and Egg</p>
            <div className='porridge__card-footer'>
              <h3 className='porridge__card-price'>₱ 100.00</h3>
              <img className='porridge__card-add-cart-icon' src={AddCartIcon}></img>
            </div>
          </div>
        </div>

        <div className='porridge__card'>
          <img className='porridge__card-img' src={MenuPorridge3} ></img>
          <div className='porridge__card-body'>
            <h3 className='porridge__card-food-name'>Gotong Batangas</h3>
            <p className='porridge__card-food-description'>Rice porridge with ox tripe</p>
            <div className='porridge__card-footer'>
              <h3 className='porridge__card-price'>₱ 50.00</h3>
              <img className='porridge__card-add-cart-icon' src={AddCartIcon}></img>
            </div>
          </div>
        </div>

        </div>
    </div>
  )
}

export default MenuPorridge