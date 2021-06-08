import React, {useState, useEffect} from 'react';
import Jumbotron from 'react-bootstrap/jumbotron';

import StarRating from './StarRating.jsx';
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';



const ProductInformation = (props) => {

  return (
    <Jumbotron>
      {props.rating && <StarRating rating={props.rating} />}
      <h4 id="category">{props.data.category}</h4>
      <h1 id="name">{props.data.name}</h1>
      <div id="price">${props.data.default_price}</div>
      {/* <div id="description">{props.data.description}</div> */}
      <StyleSelector />
      <AddToCart />
    </Jumbotron>
  );
};

export default ProductInformation;