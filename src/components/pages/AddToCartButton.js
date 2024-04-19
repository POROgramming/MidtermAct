import React from 'react';
import AddCartIcon from '../assets/addCartIcon.png';

const AddToCartButton = ({ item, AddToCartButton }) => {
  return (
    <img className='pares__card-add-cart-icon' src={AddCartIcon} onClick={() => AddToCartButton(item)}></img>
  );
}

export default AddToCartButton;