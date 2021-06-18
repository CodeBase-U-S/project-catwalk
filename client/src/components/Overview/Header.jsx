import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';
import TOKEN from '../../../../config.js';
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
const auth = { headers: { Authorization: TOKEN.TOKEN } };


const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.addToCartReducer.cart);

  useEffect(() => {
    axios.get(`${url}/cart`, auth)
      .then((res) => {
        return dispatch({type: 'GET_CART', cart: res.data});
      });
  }, []);

  const cartTotalCounter = () => {
    let counter = 0;
    cart.forEach((obj => {
      console.log(obj.count);
      counter = parseInt(counter) + parseInt(obj.count);
    }));
    return counter;
  };

  let test = () => {
    console.log(cart);
    console.log(cartTotalCounter());
  }

  return (
    <Container fluid id="header" style={{display: 'flex', justifyContent: 'space-between',
      color: 'white', alignItems: 'center', padding: '0 5 0 5'
    }}>
      <div >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-columns-gap" viewBox="0 0 16 16">
          <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"/>
        </svg> &nbsp; CATWALK
      </div>
      <div >{cartTotalCounter()} &nbsp; &nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
        </svg>
      </div>
    </Container>
  );
};


export default Header;