import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Select } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const AddToCart = (props) => {
  const dispatch = useDispatch();
  let selectedStyle = useSelector((state) => state.styleReducer.style);
  let hasInventory = useSelector((state) => state.styleReducer.hasInventory);
  // let selectedSize = useSelector((state) => state.sizeReducer.size);
  // LOG!! //
  if (selectedStyle) {
    console.log('here', Object.entries(selectedStyle.skus));
  }


  if (selectedStyle) {
    return (
      <div>
        <Row className='mb-3'>
          <Col>
            {hasInventory ?
              <div>
                <select className="button-wide" style={{padding: '20px'}}>
                  <option>Select Size</option>
                  {Object.entries(selectedStyle.skus).map((size, id) => {
                    if (size[1].quantity > 0) {
                      return (
                        <option key={id} value={size[1].size}
                          onClick={dispatch({type: 'SET_SIZE', style: selectedStyle, sizeSku: size[0]})}> {size[1].size} - {size[1].quantity}</option>
                      );
                    }
                  })}
                </select>
                <select className="button-quantity" value="1">
                  {Object.entries(selectedStyle.skus).map((size, id) => {
                    if (size[1].quantity > 0) {
                      return (
                        <option key={id} value={id} > {id} </option>
                      );
                    }
                  })}
                </select>
              </div>
              :
              <div className="button-wide soldOut">OUT OF STOCK</div>}
          </Col>
        </Row>

        <Row>
          <Col>
            <input type="button" className="button-wide" value="ADD TO BAG"></input>
            <input type="button" className="button-quantity" value="★"></input>
          </Col>
        </Row>
      </div>
    );
  }
  return (<div></div>);
};

export default AddToCart;