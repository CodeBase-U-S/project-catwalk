import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';

const Cards = (props) => {
  const [styles, setStyles] = useState(props.stylesInfo);
  const [isMoved, setIsMoved] = useState(false);
  const [rating, setRating] = useState(props.reviewInfo);
  const inputEl = useRef(null);


  const onButtonClick = () => {
    // `current` points to the mounted text input element
    // inputEl.current.focus();
  };

  const addToOutfit = () => {
    setIsMoved(isMoved ? false : true);
    alert('clicked');
  };

  const removeFromOutfit = () => {
  };

  // useEffect(()=> {
  //   setStyles(props.stylesInfo);
  //   setRating(props.reviewInfo);
  // }, []);

  if (styles && rating) { // whether the data exists.
    return (
      <div className="cards" style={{width: '240px', height: '335px', margin: '4px', border: '2px black solid', padding: '4px'}}>
        {/* <span>{styles}</span> */}
        <img className="cardImg" src={styles.results[0].photos[0].thumbnail_url} alt="img is here"></img>

        <button onClick={addToOutfit} style={{border: 'transparent', background: 'transparent', float: 'right'}}>&#9734;</button>
        <div className="cardCategory" ><span>CATEGORY</span></div>
        <div className="cardName">
          <span ref={inputEl}><strong>{props.product.name}</strong></span>
          <br></br>
          <span>{props.product.slogan}</span>
        </div>
        <div className="cardDescription">{props.product.description}</div>
        <div className="cardPrice">${props.product.default_price}</div>
        <div className="stars">{rating.results.length === 0 ? 0 : rating.results[0].rating}</div>
      </div>
    );
  } else {
    return <div></div>;
  }
};


export default Cards;
