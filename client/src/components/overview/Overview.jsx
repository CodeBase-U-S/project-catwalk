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

  const [rating, setRating] = useState(null);

  useEffect(() => {
    setRating(calculateAvg(reviews));
  }, [reviews]);

  const calculateAvg = (arr = []) => {
    if (arr.length === 0) {
      return [];
    }
    let sum = 0;
    arr.forEach((product) => {
      sum += product.rating;
    });
    return sum / arr.length;
  };

  return (
    <Row id="test">
      <Col md='auto'>
        <ImageGallery />
      </Col>
      <Col>
        <ProductInformation product={product} rating={rating} />

      </Col>
    </Row>
  );
};

export default Overview;