import axios from 'axios';

const initialState = { cart: [] };

const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_CART':
    return { cart: action.cart };
  default:
    return state;
  }
};

export default addToCartReducer;