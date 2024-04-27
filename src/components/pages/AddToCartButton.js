import React from 'react';
import AddCartIcon from '../assets/addCartIcon.png';
import { useMenu } from './MenuContext';

const AddToCartButton = ({ item }) => {
  const { addToCart } = useMenu(); 

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <img className='pares__card-add-cart-icon' src={AddCartIcon} onClick={handleAddToCart} alt='Add to Cart'/>
  );
};

export default AddToCartButton;
