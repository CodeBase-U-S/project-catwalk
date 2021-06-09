import React, {useState, useEffect} from 'react';
import Jumbotron from 'react-bootstrap/jumbotron';

import StarRating from './StarRating.jsx';
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';



const ProductInformation = ({ product, rating }) => {

  return (
    <Jumbotron>
      {rating !== [] && <StarRating rating={rating} />}
      <h4 id="category">{product.category}</h4>
      <h1 id="name">{product.name}</h1>
      <div id="price">${product.default_price}</div>
      {/* <div id="description">{props.data.description}</div> */}
      <StyleSelector />
      <AddToCart />
    </Jumbotron>
  );
};

export default ProductInformation;