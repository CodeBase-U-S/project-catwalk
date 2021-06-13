import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Select } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const AddToCart = (props) => {
  const dispatch = useDispatch();
  let selectedStyle = useSelector((state) => state.styleReducer.style);
  let hasInventory = useSelector((state) => state.styleReducer.hasInventory);
  let styleQuantity = useSelector((state) => state.styleReducer.quantity);
  // let selectedSize = useSelector((state) => state.sizeReducer.size);
  // LOG!! //
  if (selectedStyle) {
    console.log('here', Object.entries(selectedStyle.skus));
  }

  const setSize = (e) => {
    dispatch({
      type: 'SET_SIZE',
      style: selectedStyle,
      sizeSku: e.currentTarget.value
    });
  };

  const setQuantity = (e) => {
    console.log(e.target.value);
  };

  if (selectedStyle) {
    return (
      <div>
        <Row className='mb-3'>
          <Col>
            {hasInventory ?
              <div>
                <select className="button-wide" style={{padding: '20px'}} onChange={setSize}>
                  <option>Select Size</option>
                  {Object.entries(selectedStyle.skus).map((size, id) => {
                    if (size[1].quantity > 0) {
                      return (
                        <option key={id} value={size[0]}
                        > {size[1].size} - {size[1].quantity}</option>
                      );
                    }
                  })}
                </select>
                <select className="button-quantity" value="1" onChange={setQuantity}>
                  {styleQuantity && styleQuantity.map((count, id) => {
                    return (
                      <option key={id} value={count}> {count} </option>
                    );
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