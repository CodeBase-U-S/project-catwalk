import React from 'react';
import { Row, Button } from 'react-bootstrap';

const AddToCart = (props) => (
  <Row>
    <Button id="AddToCart" className="button btn-secondary">ADD TO BAG</Button>
    <Button id="favoriteButton" className="button btn-secondary">★</Button>
  </Row>
);

export default AddToCart;