import React, { useEffect } from 'react';

const Products = (props) => {

  return (
    <div className="products">
      <h5>RELATED PRODUCTS</h5>
      {props.testdata.map((card, index) => (
        <div key={index} className="productcard">
          <img className="cardImg" src={props.testStyles[0].photos[0].thumbnail_url} alt="img is here"></img>
          <div className="cardCategory">{card.category}</div>
          <div className="cardName">{card.name}</div>
          <div className="cardDescription">{card.description}</div>
          <div className="cardprice">${card.default_price}</div>
          <div className="stars">Stars here</div>
        </div>
      ))}
    </div>
  );
};

export default Products;