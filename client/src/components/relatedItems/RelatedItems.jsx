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
  const [product, setProduct] = useState([]);
  const [productStyles, setProductStyles] = useState([]);

  //get products from page 1.
  const getProducts = () => {
    axios.get(`${url}/products`, options)
      .then(res => {
        console.log('res herer is ', res.data);
        setProduct(res.data);
      })
      .catch(err => console.log(err));

  };

  const getProductStyles = (incomingProductId) => {
    const tempProductId = 16056;
    axios.get(`${url}/products/${tempProductId}/styles`, options)
      .then(res => {
        console.log('data in styles', res.data.results[0].photos[0].thumbnail_url);
        setProductStyles(res.data.results[0].photos[0].thumbnail_url);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    const fetchData= async () => {
      const tempProductId = 16056;
      const res = await axios.get(`${url}/products/${tempProductId}/styles`, options);
      setProductStyles(res.data.results);
      await getProducts();
      // await getProductStyles();
    };
    fetchData();
  }, []);


  return (
    <div className="Related-Products">
      {/* <span>{productStyles}</span> */}
      <Products testdata={product} testStyles={productStyles}/>
      <br></br>
      <Outfit testdata={product}/>
    </div>
  );
};


export default RelatedItems;