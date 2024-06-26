import React from 'react';
import AddToCartButton from './AddToCartButton';
import { useMenu } from './MenuContext';

function MenuCard(props) {
  const { addToCart } = useMenu(); 
  const { image, name, description, price } = props;

  const item = {
    image,
    name,
    description,
    price,
  };

  return (
    <div className='pares'>
      <div className='pares__card'>
        <img className='pares__card-img' src={image} alt={name}></img>
        <div className='pares__card-body'>
          <h3 className='pares__card-food-name'>{name}</h3>
          <p className='pares__card-food-description'>{description}</p>
          <div className='pares__card-footer'>
            <h3 className='pares__card-price'>₱ {price}</h3>
            <AddToCartButton item={item} addToCart={addToCart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
