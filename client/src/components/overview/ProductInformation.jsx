import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import StarRating from './StarRating.jsx';
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import { useSelector } from 'react-redux';

const ProductInformation = ({ reviews }) => {

  let product = useSelector((state) => state.productReducer.product);

  return (
    <Container>
      <StarRating />
      {product && <h5 id="category" className="mb-0" style={{fontWeight: 'lighter'}}>{product.category.toUpperCase()}</h5>}
      {product && <h1 id="name" className="mb-3"><strong>{product.name}</strong></h1>}
      {product && <div id="price">${~~product.default_price}</div>}
      <br></br>
      <StyleSelector />
      <AddToCart />
    </Container>
  );
};

export default ProductInformation;