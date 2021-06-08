import React, {useState, useEffect} from 'react';
import Jumbotron from 'react-bootstrap/jumbotron';

import AddToCart from '../overview/AddToCart.jsx';
import StyleSelector from '../overview/StyleSelector.jsx';

const ProductInformation = (props) => {



  return (
    <Jumbotron>
      <div>Star Rating Placeholder</div>
      <h4 id="category">{props.data.category}</h4>
      <h1 id="name">{props.data.name}</h1>
      <div id="price">${props.data.default_price}</div>
      <div id="description">{props.data.description}</div>
      <StyleSelector />
      <AddToCart />
    </Jumbotron>
  );
};

export default ProductInformation;