import React, { useState, useEffect, useCallback, useReducer } from 'react';
import Token from '../../../../config.js';
import axios from 'axios';
import Products from './Products.jsx';
import { useSelector } from 'react-redux';

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
const options = {
  headers: {
    Authorization: Token.TOKEN
  }
};

const RelatedItems = (props) => {
  const [relatedProductsId, setRelatedProductsId] = useState([]);
  // const [isMoved, setIsMoved] = useState(false);
  // const [cardsPosition, setCardsPosition] = useState('products');
  const id = useSelector(state => state.productReducer.product.id);

  const getRelatedProductsId = (incomingProductId) => {
    axios.get(`${url}/products/${incomingProductId}/related`, options)
      .then(res => {
        // console.log('res herer is ', res.data);
        setRelatedProductsId(res.data);
      })
      .catch(err => console.log(err));
  };


  const switchCardsPosition = () => {
    setCardsPosition(cardsPosition === 'products' ? 'outfit' : 'products');
  };

  //get all related products
  useEffect(() => {
    getRelatedProductsId(id);
  }, [id]);

  return (
    <div className="Related-Products" >
      <Products testdata={relatedProductsId} handleSwitch={switchCardsPosition}/>
    </div>
  );
};

export default RelatedItems;

// {relatedProductsId.map((item, index) => (
//   <Products testdata={item} key={index} handleSwitch={switchCardsPosition}/>
// ))}