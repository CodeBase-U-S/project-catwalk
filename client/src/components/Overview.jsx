import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';


import testData from './test-data-Overview.js';

import ImageGallery from './overview/ImageGallery.jsx';
import ProductInformation from './overview/ProductInformation.jsx';



const Overview = (props) => {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => {
        console.log(response);
        setProducts(response);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Row>
      <Col md='auto'>
        <ImageGallery />
      </Col>
      <Col>
        <ProductInformation data={testData[0]}/>

      </Col>
    </Row>
  );
};

export default Overview;