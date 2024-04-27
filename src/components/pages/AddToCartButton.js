import React from 'react';
import AddCartIcon from '../assets/addCartIcon.png';
import { useMenu } from './MenuContext'; // Import the useMenu hook

const AddToCartButton = ({ item }) => {
  const { addToCart } = useMenu(); // Access addToCart function from context

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <img className='pares__card-add-cart-icon' src={AddCartIcon} onClick={handleAddToCart} alt='Add to Cart'/>
  );
};

export default AddToCartButton;
