import React from 'react';

const ProductInformation = (props) => {

  return (
    <div id="product-info">
      <div>Star Rating Placeholder</div>
      <div id="category">{props.data.category}</div>
      <div>{props.data.name}</div>
      <div>${props.data.default_price}</div>
      <div>{props.data.description}</div>
    </div>
  )
};

export default ProductInformation;