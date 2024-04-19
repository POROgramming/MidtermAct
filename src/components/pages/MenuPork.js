import React from 'react';
import '../styles/MenuPork.css';
import MenuPork1 from '../assets/MPork1.png';
import MenuPork2 from '../assets/MPork2.png';
import MenuPork3 from '../assets/MPork3.png';
import MenuPork4 from '../assets/MPork4.png';
import AddCartIcon from '../assets/addCartIcon.png';

function MenuPork() {
  return (
    <div className='pork'>
      <div className='pork__header'>
          <h2 className='pork__subtitle'>Menu</h2>
          <h2 className='pork__title'>Pork</h2>
        </div>

        <div className='pork__cards-wrapper'>

          <div className='pork__card'>
            <img className='pork__card-img' src={MenuPork1} ></img>
            <div className='pork__card-body'>
              <h3 className='pork__card-food-name'>Grilled Liempo</h3>
              <p className='pork__card-food-description'>1 piece Large Sizzling Liempo with rice</p>
              <div className='pork__card-footer'>
                <h3 className='pork__card-price'>₱ 100.00</h3>
                <img className='pork__card-add-cart-icon' src={AddCartIcon}></img>
              </div>
            </div>
          </div>

          <div className='pork__card'>
            <img className='pork__card-img' src={MenuPork2} ></img>
            <div className='pork__card-body'>
              <h3 className='pork__card-food-name'>Diwata Sisig</h3>
              <p className='pork__card-food-description'>Sizzling Sisig with rice and Egg</p>
              <div className='pork__card-footer'>
                <h3 className='pork__card-price'>₱ 80.00</h3>
                <img className='pork__card-add-cart-icon' src={AddCartIcon}></img>
              </div>
            </div>
          </div>

          <div className='pork__card'>
            <img className='pork__card-img' src={MenuPork3} ></img>
            <div className='pork__card-body'>
              <h3 className='pork__card-food-name'>Litson Kawali</h3>
              <p className='pork__card-food-description'>Fried pork belly with rice and sauce</p>
              <div className='pork__card-footer'>
                <h3 className='pork__card-price'>₱ 100.00</h3>
                <img className='pork__card-add-cart-icon' src={AddCartIcon}></img>
              </div>
            </div>
          </div>

          <div className='pork__card'>
            <img className='pork__card-img' src={MenuPork4} ></img>
            <div className='pork__card-body'>
              <h3 className='pork__card-food-name'>Pork Barbecue</h3>
              <p className='pork__card-food-description'>3 Piece Pork Barbecue with java rice</p>
              <div className='pork__card-footer'>
                <h3 className='pork__card-price'>₱ 100.00</h3>
                <img className='pork__card-add-cart-icon' src={AddCartIcon}></img>
              </div>
            </div>
          </div>  

        </div>
    </div>
  )
}

export default MenuPork