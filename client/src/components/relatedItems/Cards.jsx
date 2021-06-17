import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import Ratings from 'react-ratings-declarative';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';

const Cards = (props) => {
  const [styles, setStyles] = useState(props.stylesInfo);
  const [isMoved, setIsMoved] = useState(false);
  const [rating, setRating] = useState(props.reviewInfo);
  const inputEl = useRef(null);
  const [isShow, setIsShow] = useState(false);

  let product = useSelector((state) => state.productReducer.product);

  const switchShow = () => {
    console.log('Clicked');
    setIsShow(isShow ? false : true);

  };

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    // inputEl.current.focus();
  };

  const comparingCards = () => {
    // alert('Clicked');
    return (
      <Modal>
        <Modal.Dialog show={true}>
          <Modal.Header>
            <Modal.Title>Comparing</Modal.Title>
          </Modal.Header>
        </Modal.Dialog>
      </Modal>
    );
  };

  const addToOutfit = () => {
    setIsMoved(isMoved ? false : true);
    // alert('clicked');
  };

  const removeFromOutfit = () => {
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
        <Modal show={isShow} onHide={switchShow}>
          <Modal.Dialog >
            <Modal.Body>
              <Modal.Title style={{fontSize: '15px'}}>Comparing</Modal.Title>
              <br></br>
              <div className='comparingCards'>
                <table>
                  <tbody>
                    <tr>
                      <td className='tdName'>{props.product.name}</td>
                      <td className='tdName'></td>
                      <td className='tdName'>{product.name}</td>
                    </tr>
                    <tr>
                      <td>{props.product.category}</td>
                      <td>Category</td>
                      <td>{product.category}</td>
                    </tr>
                    <tr>
                      <td>{props.product.description}</td>
                      <td>Description</td>
                      <td>{product.description}</td>
                    </tr>
                    <tr>
                      <td>${props.product.default_price}</td>
                      <td>Default Price</td>
                      <td>${product.default_price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Modal.Body>
          </Modal.Dialog>
        </Modal>
      </li>
    );
  } else {
    return <div></div>;
  }
};


export default Cards;
