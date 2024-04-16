import logo from './logo.svg';
import './App.css';
import Pares from './Pares';
import React, { useState } from 'react';
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>

function CartDisplay({ cart }) {
  return (
      <div>
          <h2>Cart Items</h2>
          <ul>
              {cart.map((item, index) => (
                  <li key={index}>
                      {item.name} - Description: {item.description} - ₱{item.price} - Location: {item.location} - Serves: {item.serving}
                  </li>
              ))}
          </ul>
      </div>
  );
}

export default function MyApp(){
  const [cart, setCart] = useState([]);

  const thisCart = (item) => {
      const newCart = [...cart, item];
      setCart(newCart);
  };

  return(
      <div>
          <h1 className='title' style={{ textAlign: 'center' }}>Diwata Pares Menu</h1>
          <div className='container'>
              <Pares addToCart={thisCart} name="Pares Bagnet" description="abc"price={60} location="Cabs" serving={2} />
              <Pares addToCart={thisCart} name="Pares Overload" description="abc" price={80} location="BGC" serving={5} />
              <Pares addToCart={thisCart} name="Pares Chicabu" description="abc" price={80} location="San Isidro" serving={3} />
          </div>
          <CartDisplay cart={cart} />
      </div>
  );
}
