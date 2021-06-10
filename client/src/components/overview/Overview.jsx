import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
const config = require('../../../../config.js');

// Components //
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';


// API Options //
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/';
const token = config.TOKEN;


const Overview = ( {product, reviews} ) => {

  return (
    <Container className="text-muted">
      <Row>
        <Col>
          <ImageGallery />
        </Col>
        <Col className="col align-self-center">
          <ProductInformation product={product} reviews={reviews} />
        </Col>
      </Row>
    </Container>
  );
};

export default Overview;