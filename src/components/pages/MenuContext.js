import React, { createContext, useState, useContext } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);

  const addToCart = (item) => {
    // Check if the selected item is already in the cart
    const existingItemIndex = menuItems.findIndex((menuItem) => menuItem.name === item.name);
    if (existingItemIndex !== -1) {
      // If the item is already in the cart, update its quantity
      const updatedMenuItems = [...menuItems];
      updatedMenuItems[existingItemIndex].quantity += 1;
      setMenuItems(updatedMenuItems);
    } else {
      // If the item is not in the cart, add it
      setMenuItems([...menuItems, { ...item, quantity: 1 }]);
    }
    alert(item.name + " successfully added to your cart");
  };

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems ,addToCart }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
