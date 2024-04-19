import React from 'react';
import '../styles/MenuPares.css';
import MenuPares1 from '../assets/MPares1.png';
import MenuPares2 from '../assets/MPares2.jpg';
import MenuPares3 from '../assets/MPares3.png';
import MenuPares4 from '../assets/MPares4.jpg';
import MenuPares5 from '../assets/MPares5.jpg';
import AddCartIcon from '../assets/addCartIcon.png';

function MenuPares() {
  return (
    <div className='pares'>
        <div className='pares__header'>
          <h2 className='pares__subtitle'>Menu</h2>
          <h2 className='pares__title'>Pares</h2>
        </div>
        

        <div className='pares__cards-wrapper'>  


          <div className='pares__card'>
            <img className='pares__card-img' src={MenuPares1} ></img>
            <div className='pares__card-body'>
              <h3 className='pares__card-food-name'>Regular Beef Pares</h3>
              <p className='pares__card-food-description'>Tender premium beef in a classic Filipino soup with rice</p>
              <div className='pares__card-footer'>
                <h3 className='pares__card-price'>₱ 50.00</h3>
                <img className='pares__card-add-cart-icon' src={AddCartIcon}></img>
              </div>
            </div>
          </div>
          
          <div className='pares__card'>
            <img className='pares__card-img' src={MenuPares2} ></img>
            <div className='pares__card-body'>
              <h3 className='pares__card-food-name'>Pares Bagnet</h3>
              <p className='pares__card-food-description'>Tender premium Beef and Crispy Pork with rice & soup</p>
              <div className='pares__card-footer'>
                <h3 className='pares__card-price'>₱ 60.00</h3>
                <img className='pares__card-add-cart-icon' src={AddCartIcon}></img>
              </div>
            </div>
          </div>

          <div className='pares__card'>
            <img className='pares__card-img' src={MenuPares3} ></img>
            <div className='pares__card-body'>
              <h3 className='pares__card-food-name'>Beef Pares Mami</h3>
              <p className='pares__card-food-description'>Tender premium beef with noodles and eggs</p>
              <div className='pares__card-footer'>
                <h3 className='pares__card-price'>₱ 50.00</h3>
                <img className='pares__card-add-cart-icon' src={AddCartIcon}></img>
              </div>
            </div>
          </div>

          <div className='pares__card'>
            <img className='pares__card-img' src={MenuPares4} ></img>
            <div className='pares__card-body'>
              <h3 className='pares__card-food-name'>Chichabu Pares</h3>
              <p className='pares__card-food-description'>Tender premium beef with a Crispy Chicharon Bulaklak with rice & soup</p>
              <div className='pares__card-footer'>
                <h3 className='pares__card-price'>₱ 80.00</h3>
                <img className='pares__card-add-cart-icon' src={AddCartIcon}></img>
              </div>
            </div>
          </div>

          <div className='pares__card'>
            <img className='pares__card-img' src={MenuPares5} ></img>
            <div className='pares__card-body'>
              <h3 className='pares__card-food-name'>Pares Overload</h3>
              <p className='pares__card-food-description'>Tender Premium Beef with Chichabu, Lechon Kawali, unli rice and free softdrinks</p>
              <div className='pares__card-footer'>
                <h3 className='pares__card-price'>₱ 100.00</h3>
                <img className='pares__card-add-cart-icon' src={AddCartIcon}></img>
              </div>
            </div>
          </div>


        </div>
    </div>
  )
}

export default MenuPares