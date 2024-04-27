import React from 'react';
import '../styles/Cart.css';
import { useMenu } from './MenuContext'; // Import useMenu hook

function Cart() {
  const { menuItems, setMenuItems } = useMenu(); // Destructure menuItems and setMenuItems from context

  // Function to handle quantity changes
  const handleQuantityChange = (index, newQuantity) => {
    // Update the quantity of the item at the given index
    const updatedMenuItems = [...menuItems];
    updatedMenuItems[index].quantity = newQuantity;
    // Update the menuItems in the context
    setMenuItems(updatedMenuItems);
  };

  // Function to remove an item from the cart
  const removeItem = (index) => {
    // Remove the item at the given index
    const updatedMenuItems = [...menuItems];
    updatedMenuItems.splice(index, 1);
    // Update the menuItems in the context
    setMenuItems(updatedMenuItems);
  };

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    // Iterate through menuItems and calculate the total price
    menuItems.forEach((item) => {
      totalPrice += item.price * (item.quantity || 1); // Assume quantity is 1 if not specified
    });
    return totalPrice;
  };

  // Function to handle checkout
  const handleCheckout = () => {
    // Clear all items in the cart
    alert("Thank you for purchasing from DIWATA PARES OVERLOAD");
    setMenuItems([]);
  };

  return (
    <div className='cart'>
      <h1>Cart</h1>

      <div className='cart__wrapper'>
        <table className='cart__table'>
          <tbody className='cart__table-body'>
            {menuItems.map((item, index) => (
              <tr key={index} className='cart__table-row'>
                <td className='cart__table-data'>
                  <p className='cart__table-food-name'>{item.name}</p>
                </td>
                <td className='cart__table-data'>
                  <p className='cart__table-food-price'>₱ {item.price}</p>
                </td>
                <td className='cart__table-data'>
                  <div className='cart__table-quantity'>
                    <button
                      className='cart__quantity-button'
                      onClick={() => handleQuantityChange(index, item.quantity - 1)}
                    >
                      -
                    </button>
                    <input
                      type='number'
                      className='cart__quantity-display'
                      value={item.quantity || 1} // Assume quantity is 1 if not specified
                      readOnly
                    ></input>
                    <button
                      className='cart__quantity-button'
                      onClick={() => handleQuantityChange(index, (item.quantity || 1) + 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className='cart__table-data'>
                  <button className='cart__table-food-delete' onClick={() => removeItem(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='cart__checkout-wrapper'>
          <div className='cart__checkout-header'>
            <h1 className='cart__checkout-title'>CART TOTALS</h1>
          </div>
          <div className='cart__checkout-body'>
            {/* Display checkout details for each item */}
            {menuItems.map((item, index) => (
              <div key={index} className='cart__checkout-details'>
                <p className='cart__checkout-food-name'>{item.name}</p>
                <p className='cart__checkout-food-quantity'>{item.quantity || 1}</p>
                <p className='cart__checkout-food-price'>₱ {item.price * (item.quantity || 1)}</p>
              </div>
            ))}
          </div>
          <div className='cart__checkout-footer'>
            <p className='cart__checkout-total-label'>Total</p>
            <p className='cart__checkout-total-price'>₱ {calculateTotalPrice()}</p>
          </div>
          <button className='cart__checkout-button' onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
