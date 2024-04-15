import { useReducer } from 'react';

import CardContext from './cardContext';

const defaultCartState = {
  items: [],
  totalAmount: 0
};


const CartProvider = (props) => {
 

  const addItemToCartHandler = (item) => {
    
  };

  const removeItemFromCartHandler = (id) => {
    
  };

  const cartContext = {
    items: [],
    totalAmount:0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CardContext.Provider value={cartContext}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CartProvider;