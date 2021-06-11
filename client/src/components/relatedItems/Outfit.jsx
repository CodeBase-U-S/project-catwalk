import React from 'react';

const Outfit = (props) => {

  return (
    <div className="outfit">
      <h5>YOUR OUTFIT</h5>
      {props.testdata.map((card, index) => (
        <div key={index} className="productcard">
          <img src="" alt="img is here"></img>
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

export default Outfit;