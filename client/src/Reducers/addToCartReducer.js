import axios from 'axios';

// api options data
import TOKEN from '../../../config.js';
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
const auth = { headers: { Authorization: TOKEN.TOKEN } };


const addToCartReducer = (state = null, action) => {
  switch (action.type) {
  case 'CART':
    return { cart: action.cart };
  default:
    return state;
  }
};

