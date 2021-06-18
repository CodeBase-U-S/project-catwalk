import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';


const Comparing = (props) => {
  let product = useSelector((state) => state.productReducer.product);

  return (
    <Modal dialogClassName='modal-90w' show={props.handleShow} onHide={props.handleSwitch}>
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
  );
};

export default Comparing;