import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Select } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import apiHandlers from '../apiHandlers.js';

const AddToCart = (props) => {
  const dispatch = useDispatch();
  let selectedStyle = useSelector((state) => state.styleReducer.style);
  let hasInventory = useSelector((state) => state.styleReducer.hasInventory);
  let sizeSelected = useSelector((state) => state.styleReducer.sizeSelected);
  let skuSelected = useSelector((state) => state.styleReducer.sku);
  let styleQuantity = useSelector((state) => state.styleReducer.quantity);
  // let selectedSize = useSelector((state) => state.sizeReducer.size);
  // LOG!! //
  // if (selectedStyle) {
  //   console.log('here', Object.entries(selectedStyle.skus));
  // }

  const setSize = (e) => {
    if (e.currentTarget.value === 'select size') {
      dispatch({
        type: 'SET_SIZE',
        style: selectedStyle,
        sizeSelected: false
      });
    } else {
      dispatch({
        type: 'SET_SIZE',
        style: selectedStyle,
        sizeSelected: true,
        sku: e.currentTarget.value
      });
    }
  };

  const setQuantity = (e) => {
    console.log(e.target.value);
  };

  const addToBag = (e) => {
    apiHandlers.addToCart(dispatch, skuSelected);
  };

  if (selectedStyle) {
    return (
      <div>
        <Row className='mb-3'>
          <Col>
            {hasInventory ?
              <div>
                <select className="button-wide" style={{padding: '20px'}} onChange={setSize}>
                  <option value='select size'>SELECT SIZE</option>
                  {Object.entries(selectedStyle.skus).map((size, id) => {
                    if (size[1].quantity > 0) {
                      return (
                        <option key={id} value={size[0]}
                        > {size[1].size} - {size[1].quantity}</option>
                      );
                    }
                  })}
                </select>
                <select className="button-quantity" onChange={setQuantity}>
                  <option> - </option>
                  {sizeSelected && styleQuantity.map((count, id) => (
                    <option key={id} value={count}> {count} </option>
                  ))}
                </select>
              </div>
              :
              <div className="button-wide soldOut">OUT OF STOCK</div>}
          </Col>
        </Row>

        <Row>
          <Col>
            <input type="button" className="button-wide" value="ADD TO BAG" onClick={addToBag}></input>
            <input type="button" className="button-quantity" value="★"></input>
          </Col>
        </Row>
      </div>
    );
  }
  return (<div></div>);
};

export default AddToCart;