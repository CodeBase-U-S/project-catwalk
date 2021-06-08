import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
const config = require('../../../config.js');


import testData from './test-data-Overview.js';

import ImageGallery from './overview/ImageGallery.jsx';
import ProductInformation from './overview/ProductInformation.jsx';


// api data //
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/';



const Overview = (props) => {

  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);

  const getProducts = () => {
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getReviews = (product) => {
    console.log('getReviewProduct');
    const options = {
      headers: {
        'Authorization': config.TOKEN,
      },
      params: {
        'product_id': product.id
      }
    };
    axios.get(`${url}reviews`, options)
      .then(response => {
        setReviews(response);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getReviews(products);
  }, [products]);

  return (
    <Row>
      <Col md='auto'>
        <ImageGallery />
      </Col>
      <Col>
        <ProductInformation data={testData[0]} />

      </Col>
    </Row>
  );
};

export default Overview;