import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import Ratings from 'react-ratings-declarative';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import Comparing from './Comparing.jsx';

const Cards = (props) => {
  const [styles, setStyles] = useState(props.stylesInfo);
  const [isMoved, setIsMoved] = useState(false);
  const [rating, setRating] = useState(props.reviewInfo);
  const inputEl = useRef(null);
  const [isShow, setIsShow] = useState(false);

  const switchShow = () => {
    // console.log('Clicked');
    setIsShow(isShow ? false : true);
  };

  useEffect(()=> {
    // setStyles(props.stylesInfo);
    // setRating(props.reviewInfo);
  }, []);

  if (styles && rating) { // whether the data exists.
    return (
      <li className="cards" >
        {/* <span>{styles}</span> */}
        <div className="divcardimg">
          <img className="cardImg" src={styles.results[0].photos[0].thumbnail_url} alt="Image is not available"></img>

          <button onClick={switchShow} style={{border: 'transparent', background: 'transparent', float: 'right'}}>&#9734;</button>
        </div>
        <div className="cardCategory" ><span>{props.product.category}</span></div>
        <div className="cardName">
          <span ref={inputEl}><strong>{props.product.name}</strong></span>
          <br></br>
          <span>{props.product.slogan}</span>
        </div>
        {/* <div className="cardDescription">{props.product.description}</div> */}
        <div className="cardPrice">${props.product.default_price}</div>
        <div className="stars">
          {/* Waiting for further avg rating, if necessary */}
          <Ratings rating={rating.results.length === 0 ? 0 : rating.results[0].rating} widgetRatedColors="blue" widgetDimensions="15px" widgetRatedColors="rgb(87, 87, 87)" widgetSpacings="0px">
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
        </div>
        {<Comparing product={props.product} handleShow={isShow} handleSwitch={switchShow}/>}
      </li>
    );
  } else {
    return <div></div>;
  }
};


export default Cards;
