import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Select } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import apiHandlers from '../apiHandlers.js';

const AddToCart = (props) => {
  const dispatch = useDispatch();
  let product = useSelector((store) => store.productReducer.product);
  let selectedStyle = useSelector((state) => state.styleReducer.style);
  let hasInventory = useSelector((state) => state.styleReducer.hasInventory);
  let sizeSelected = useSelector((state) => state.styleReducer.sizeSelected);
  let skuSelected = useSelector((state) => state.styleReducer.sku);
  let styleQuantity = useSelector((state) => state.styleReducer.quantity);
  let quantity = useSelector((state) => state.quantityReducer.quantity);


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
    dispatch({ type: 'SET_QUANTITY', quantity: e.target.value });
  };

  const addToBag = (e) => {
    for (var i = 0; i < quantity; i++) {
      apiHandlers.addToCart(dispatch, skuSelected);
    }
    // dispatch({ type: 'CHANGE_PRODUCT', product: product });
    // dispatch({ type: 'SET_STYLE', style: selectedStyle });
    // dispatch({ type: 'SET_PHOTO', photoIndex: 0 });
    // dispatch({
    //   type: 'SET_SIZE',
    //   style: selectedStyle,
    //   sizeSelected: false
    // });
  };

  if (selectedStyle) {
    return (
      <div>
        {hasInventory ?
          <div>
            <Row className='mb-3'>
              <Col>
                <div>
                  <select className="button-wide" style={{padding: '20px'}} onChange={setSize}>
                    <option value='select size'>SELECT SIZE</option>
                    {selectedStyle && Object.entries(selectedStyle.skus).map((size, id) => {
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
              </Col>
            </Row>

            <Row>
              <Col>
                <input type="button" className="button-wide" value="ADD TO BAG" onClick={addToBag}></input>
                <input type="button" className="button-quantity" value="★"></input>
              </Col>
            </Row>
          </div>
          : <div className="button-wide soldOut">OUT OF STOCK</div>}
      </div>
    );
  }
  return (<div></div>);
};

export default AddToCart;