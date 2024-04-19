import React from 'react'
import '../styles/MenuChicken.css';
import MenuChicken1 from '../assets/MSiken1.png';
import MenuChicken2 from '../assets/MSiken2.png';
import MenuChicken3 from '../assets/MSiken3.png';
import AddCartIcon from '../assets/addCartIcon.png';

function MenuChicken() {
  return (
    <div className='chicken'>
        <div className='chicken__header'>
          <h2 className='chicken__subtitle'>Menu</h2>
          <h2 className='chicken__title'>Chicken</h2>
        </div>

        <div className='chicken__cards-wrapper'>

        <div className='chicken__card'>
          <img className='chicken__card-img' src={MenuChicken1} ></img>
          <div className='chicken__card-body'>
            <h3 className='chicken__card-food-name'>1 Pc Fried Siken</h3>
            <p className='chicken__card-food-description'>1 piece crispy Fried Chicken with unli rice and gravy</p>
            <div className='chicken__card-footer'>
              <h3 className='chicken__card-price'>₱ 60.00</h3>
              <img className='chicken__card-add-cart-icon' src={AddCartIcon}></img>
            </div>
          </div>
        </div>

        <div className='chicken__card'>
          <img className='chicken__card-img' src={MenuChicken2} ></img>
          <div className='chicken__card-body'>
            <h3 className='chicken__card-food-name'>Siken Wings</h3>
            <p className='chicken__card-food-description'>4 piece Buffalo Chicken Wings with  unli rice</p>
            <div className='chicken__card-footer'>
              <h3 className='chicken__card-price'>₱ 70.00</h3>
              <img className='chicken__card-add-cart-icon' src={AddCartIcon}></img>
            </div>
          </div>
        </div>

        <div className='chicken__card'>
          <img className='chicken__card-img' src={MenuChicken3} ></img>
          <div className='chicken__card-body'>
            <h3 className='chicken__card-food-name'>Siken Bucket</h3>
            <p className='chicken__card-food-description'>6pc Chicken Bucket</p>
            <div className='chicken__card-footer'>
              <h3 className='chicken__card-price'>₱ 499.00</h3>
              <img className='chicken__card-add-cart-icon' src={AddCartIcon}></img>
            </div>
          </div>
        </div>

        </div>
    </div>
  )
}

export default MenuChicken

