import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
const config = require('../../../config.js');


import testData from './test-data-Overview.js';

import ImageGallery from './overview/ImageGallery.jsx';
import ProductInformation from './overview/ProductInformation.jsx';


// api options //
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/';
const token = config.TOKEN;


const Overview = (props) => {

  const [product, setProduct] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get('/api/products')
      .then(response => {
        setProduct(response.data[1]);
        getReviews(response.data[1]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getReviews = (product) => {
    const options = {
      headers: { 'Authorization': token, },
      params: { 'product_id': product.id }
    };
    axios.get(`${url}reviews/`, options)
      .then(response => {
        setReviews(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const calculateAvg = (arr) => {
    let sum = 0;
    arr.forEach((product) => {
      sum += product.rating;
    });
    return sum / arr.length;
  };


  return (
    <Row>
      <Col md='auto'>
        <ImageGallery />
      </Col>
      <Col>
        <ProductInformation data={product} rating={reviews} />

      </Col>
    </Row>
  );
};

export default Overview;