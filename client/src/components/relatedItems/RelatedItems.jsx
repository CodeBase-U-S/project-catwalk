import React, { useState, useEffect, useCallback, useReducer } from 'react';
import Token from '../../../../config.js';
import axios from 'axios';
import Outfit from './Outfit.jsx';
import Products from './Products.jsx';

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
const options = {
  headers: {
    Authorization: Token.TOKEN
  }
};

const RelatedItems = (props) => {
  const [product, setProduct] = useState([{}]);
  const [productStyle, setproductStyle] = useState({});

  //get products from page 1.
  const getProducts = () => {
    axios.get(`${url}/products`, options)
      .then(res => {
        console.log('res herer is ', res.data);
        setProduct(res.data);
      })
      .catch(err => console.log(err));
  };


  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="Related-Products">
      <Products testdata={product}/>
      <Outfit testdata={product}/>
    </div>
  );
};


export default RelatedItems;