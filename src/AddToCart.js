import React from 'react';

const AddToCart = ({ item, addToCart }) => {
    return (
        <button className='stylish-button' onClick={() => addToCart(item)}>
          ADD TO CART
        </button>
    );
}

export default AddToCart;
