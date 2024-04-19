import React from 'react';
import '../styles/MenuDrinks.css';
import AddCartIcon from '../assets/addCartIcon.png';
import MenuDrinks1 from '../assets/MDrinks1.png';
import MenuDrinks2 from '../assets/MDrinks2.png';
import MenuDrinks3 from '../assets/MDrinks3.png';
import MenuDrinks4 from '../assets/MDrinks4.png';

function MenuDrinks() {
  return (
    <div className='drinks'>

      <div className='drinks__header'>
          <h2 className='drinks__subtitle'>Menu</h2>
          <h2 className='drinks__title'>Drinks</h2>
        </div>

      <div className='drinks__cards-wrapper'>
            <div className='drinks__card'>
              <img className='drinks__card-img' src={MenuDrinks1} ></img>
              <div className='drinks__card-body'>
                <h3 className='drinks__card-food-name'>Coke</h3>
                <p className='drinks__card-food-description'>Regular Coke 500ml</p>
                <div className='drinks__card-footer'>
                  <h3 className='drinks__card-price'>₱ 30.00</h3>
                  <img className='drinks__card-add-cart-icon' src={AddCartIcon}></img>
                </div>
              </div>
            </div>

            <div className='drinks__card'>
              <img className='drinks__card-img' src={MenuDrinks2} ></img>
              <div className='drinks__card-body'>
                <h3 className='drinks__card-food-name'>Sprite</h3>
                <p className='drinks__card-food-description'>Regular Sprte 500ml</p>
                <div className='drinks__card-footer'>
                  <h3 className='drinks__card-price'>₱ 30.00</h3>
                  <img className='drinks__card-add-cart-icon' src={AddCartIcon}></img>
                </div>
              </div>
            </div>

            <div className='drinks__card'>
              <img className='drinks__card-img' src={MenuDrinks3} ></img>
              <div className='drinks__card-body'>
                <h3 className='drinks__card-food-name'>Fanta</h3>
                <p className='drinks__card-food-description'>Regular Fanta 500ml</p>
                <div className='drinks__card-footer'>
                  <h3 className='drinks__card-price'>₱ 30.00</h3>
                  <img className='drinks__card-add-cart-icon' src={AddCartIcon}></img>
                </div>
              </div>
            </div>

            <div className='drinks__card'>
              <img className='drinks__card-img' src={MenuDrinks4} ></img>
              <div className='drinks__card-body'>
                <h3 className='drinks__card-food-name'>Mountain Dew</h3>
                <p className='drinks__card-food-description'>Regular Mountain Dew 500 ml</p>
                <div className='drinks__card-footer'>
                  <h3 className='drinks__card-price'>₱ 30.00</h3>
                  <img className='drinks__card-add-cart-icon' src={AddCartIcon}></img>
                </div>
              </div>
            </div>
      </div>

    </div>
  )
}

export default MenuDrinks