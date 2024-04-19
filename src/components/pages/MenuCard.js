import React from 'react';
import AddToCartButton from './AddToCartButton';


function MenuCard(props) {
    const item = {
        image: props.image,
        name: props.name,
        description: props.description,
        price: props.price,
    }

  return (
    <div className='pares'>
         <div className='pares__card'>
            <img className='pares__card-img' src={props.image} ></img>
            <div className='pares__card-body'>
              <h3 className='pares__card-food-name'>{props.name}</h3>
              <p className='pares__card-food-description'>{props.description}</p>
              <div className='pares__card-footer'>
                <h3 className='pares__card-price'>₱ {props.price}</h3>
                <AddToCartButton item={item} AddToCartButton={props.AddToCartButton}/>
              </div>
            </div>
          </div>
    </div>
  )
}

export default MenuCard