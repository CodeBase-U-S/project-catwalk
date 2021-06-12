import React, { useEffect, useState } from 'react';

const Cards = (props) => {

  return (
    <div className="cards">
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

export default Cards;