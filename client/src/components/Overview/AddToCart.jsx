import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Select, Alert, Dropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import apiHandlers from '../apiHandlers.js';

const AddToCart = (props) => {

  // States //
  const dispatch = useDispatch();
  let product = useSelector((store) => store.productReducer.product);
  let selectedStyle = useSelector((state) => state.styleReducer.style);
  let hasInventory = useSelector((state) => state.styleReducer.hasInventory);
  let sizeSku = useSelector((state) => state.sizeReducer.sku);
  let styleQuantity = useSelector((state) => state.sizeReducer.sizeQuantity);
  let quantity = useSelector((state) => state.quantityReducer.quantity);


  // Event Handlers //
  const setSize = (e) => {
    dispatch({
      type: 'SET_SIZE',
      sku: e.currentTarget.value,
      style: selectedStyle,
    });
  };

  const setQuantity = (e) => {
    dispatch({ type: 'SET_QUANTITY', quantity: e.target.value });
  };

  const addToBag = (e) => {
    e.preventDefault();
    for (var i = 0; i < quantity; i++) {
      apiHandlers.addToCart(dispatch, sizeSku);
    }
    dispatch({ type: 'SET_QUANTITY', quantity: 0 });
    dispatch({ type: 'SET_SIZE', sku: undefined, style: undefined });
  };


  // Render //
  if (selectedStyle) {
    return (
      <div>
        {hasInventory ?
          <form>
            <Row className='mb-3'>
              <Col>
                <div>
                  {/* {!sizeSku && <Alert variant='dark' style={{width: '75%'}}>Please select size</Alert>} */}
                  <select className="button-wide" style={{padding: '20px'}} onChange={setSize} required>
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

                  {/* <Dropdown className="button-wide">
                    <Dropdown.Toggle style={{padding: '20px'}}>SELECT SIZE </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item bsPrefix="button-wide" value='select size'>SELECT SIZE</Dropdown.Item>
                      {selectedStyle && Object.entries(selectedStyle.skus).map((size, id) => {
                        if (size[1].quantity > 0) {
                          return (
                            <Dropdown.Item bsPrefix="button-wide" key={id} value={size[0]} onClick={setSize}
                            > Size {size[1].size} - {size[1].quantity}</Dropdown.Item>
                          );
                        }
                      })}
                    </Dropdown.Menu>
                  </Dropdown> */}

                  <select className="button-quantity" onChange={setQuantity} required>
                    <option> - </option>
                    {sizeSku && styleQuantity.map((count, id) => (
                      <option key={id} value={count}> {count} </option>
                    ))}
                  </select>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <button className="button-wide addToCart" value="ADD TO BAG" onClick={addToBag}>ADD TO BAG</button>
              </Col>
            </Row>
          </form>
          : <div className="button-wide soldOut">OUT OF STOCK</div>}
      </div>
    );
  }
  return (<div></div>);
};

export default AddToCart;