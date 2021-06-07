import React from 'react';

const ProductInformation = (props) => {

  return (
    <div id="product-info">
      <div>Star Rating Placeholder</div>
      <div id="category">{props.data.category}</div>
      <div id="name">{props.data.name}</div>
      <div id="price">${props.data.default_price}</div>
      <div id="description">{props.data.description}</div>
    </div>
  );
};

export default ProductInformation;