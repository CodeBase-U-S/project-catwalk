import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';

// Components //
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';


const Overview = ( {reviews} ) => {

  return (
    <Container id="overview">
      <Row>
        <Col className="col-7">
          <ImageGallery />
        </Col>
        <Col>
          <ProductInformation/>
        </Col>
      </Row>
    </Container>
  );
};

export default Overview;