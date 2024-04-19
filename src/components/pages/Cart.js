import React, { useState } from 'react';
import '../styles/Cart.css';

function Cart() {
  const [quantity, setQuantity] = useState(1); // Initial quantity is 1

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    
  }
  function increaseQuantity() {
    if(quantity >= 1){
      setQuantity(quantity + 1);
    }
    
  }

  return (
    <div className='cart'>
      <h1>Cart</h1>

      <div className='cart__wrapper'>

        {/* NOTE KUNG MAG GEGENERATE KAYO NG <tr> <td> AT IBA PANG ELEMENTS SA LOOB NG TABLE
            MAKE SURE NA KAPAG NA GENERATE NYO NA, PAREHAS SILANG CLASSNAMES KAGAYA DITO
            DAHIL YAN ANG MGA CLASSNAMES NA GINAMIT KO SA CSS, DISREGARD NYO NARIN UNG
            JAVASCRIPT KASE TINESTING KOLANG YAN PARA MAKITA KO KUNG ANO ITSURA */}

        <table className='cart__table'>
          <tbody className='cart__table-body'>


            <tr className='cart__table-row'>
              <td className='cart__table-data'><p className='cart__table-food-name'>Pares Overload</p></td>
              <td className='cart__table-data'><p className='cart__table-food-price'>₱ 100.00</p></td>

              {/* TABLE DATA ITO, NAKA DIV LANG KASE PARA MA DESIGN KO UNG QUANTITY DAHIL WALANG INPUT NA MERONG STYLE NA GANUN AUTOMATIC
                  GINAWA KO PA SYA FROM SCRATCH */}
              <td className='cart__table-data'>
                <div className='cart__table-quantity'>
                  <button className='cart__quantity-button' onClick={decreaseQuantity} >-</button>
                  <input type='number' className='cart__quantity-display' value={quantity} readOnly></input>
                  <button className='cart__quantity-button' onClick={increaseQuantity} >+</button>
                </div>
              </td>
       
              <td className='cart__table-data'><button className='cart__table-food-delete'>Delete</button></td>
            </tr>



            <tr className='cart__table-row'>
              <td className='cart__table-data'><p className='cart__table-food-name'>Pares Overload</p></td>
              <td className='cart__table-data'><p className='cart__table-food-price'>₱ 100.00</p></td>
              
              {/* TABLE DATA ITO, NAKA DIV LANG KASE PARA MA DESIGN KO UNG QUANTITY DAHIL WALANG INPUT NA MERONG STYLE NA GANUN AUTOMATIC
                  GINAWA KO PA SYA FROM SCRATCH */}
              <td className='cart__table-data'>
                <div className='cart__table-quantity'>
                  <button className='cart__quantity-button' onClick={decreaseQuantity} >-</button>
                  <input type='number' className='cart__quantity-display' value={quantity} readOnly></input>
                  <button className='cart__quantity-button' onClick={increaseQuantity} >+</button>
                </div>
              </td>
     
              <td className='cart__table-data'><button className='cart__table-food-delete'>Delete</button></td>
            </tr>




            <tr className='cart__table-row'>
              <td className='cart__table-data'><p className='cart__table-food-name'>Pares Overload</p></td>
              <td className='cart__table-data'><p className='cart__table-food-price'>₱ 100.00</p></td>
                  
                {/* TABLE DATA ITO, NAKA DIV LANG KASE PARA MA DESIGN KO UNG QUANTITY DAHIL WALANG INPUT NA MERONG STYLE NA GANUN AUTOMATIC
                  GINAWA KO PA SYA FROM SCRATCH */}
              <td className='cart__table-data'>
                <div className='cart__table-quantity'>
                  <button className='cart__quantity-button' onClick={decreaseQuantity} >-</button>
                  <input type='number' className='cart__quantity-display' value={quantity} readOnly></input>
                  <button className='cart__quantity-button' onClick={increaseQuantity} >+</button>
                </div>
              </td>
                   
              <td className='cart__table-data'><button className='cart__table-food-delete'>Delete</button></td>
            </tr>


          </tbody>
        </table>


        <div className='cart__checkout-wrapper'>
          <div className='cart__checkout-header'>
            <h1 className='cart__checkout-title'>CART TOTALS</h1>
          </div>
          <div className='cart__checkout-body'>
            <div className='cart__checkout-details'>
              <p className='cart__checkout-food-name'>Overload Pares</p>
              <p className='cart__checkout-food-quantity'>3</p>
              <p className='cart__checkout-food-price'>₱ 300.00</p>
            </div>
            <div className='cart__checkout-details'>
              <p className='cart__checkout-food-name'>Overload Pares</p>
              <p className='cart__checkout-food-quantity'>3</p>
              <p className='cart__checkout-food-price'>₱ 300.00</p>
            </div>
            
          </div>
          <div className='cart__checkout-footer'>
            <p className='cart__checkout-total-label'>Total</p>
            <p className='cart__checkout-total-price'>₱ 300.00</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Cart