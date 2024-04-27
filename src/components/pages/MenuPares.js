import React from 'react';
import MenuCard from './MenuCard';
import MenuPares1 from '../assets/MPares1.png';
import MenuPares2 from '../assets/MPares2.jpg';
import MenuPares3 from '../assets/MPares3.png';
import MenuPares4 from '../assets/MPares4.jpg';
import MenuPares5 from '../assets/MPares5.jpg';
import '../styles/MenuPares.css';

function MenuPares() {

  return (
    <div className='pares'>
      <div className='pares__header'>
        <h2 className='pares__subtitle'>Menu</h2>
        <h2 className='pares__title'>Pares</h2>
      </div>

      <div className='pares__cards-wrapper'>
        <MenuCard image={MenuPares1} name='Regular Beef Pares' description='Tender premium beef in a classic Filipino soup with rice' price={50} AddToCartButton />
        <MenuCard image={MenuPares2} name='Pares Bagnet' description='Tender premium Beef and Crispy Pork with rice & soup' price={60} AddToCartButton/>
        <MenuCard image={MenuPares3} name='Beef Pares Mami' description='Tender premium beef with noodles and eggs' price={50} AddToCartButton />
        <MenuCard image={MenuPares4} name='Chichabu Pares' description='Tender premium beef with a Crispy Chicharon Bulaklak' price={80} AddToCartButton/>
        <MenuCard image={MenuPares5} name='Pares Overload' description='Tender Premium Beef with Chichabu, Lechon Kawali' price={100} AddToCartButton />
      </div>
    </div>
  );
}

export default MenuPares;
