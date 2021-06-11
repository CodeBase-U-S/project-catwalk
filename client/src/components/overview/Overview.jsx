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
const auth = { headers: { Authorization: config.TOKEN } };



const Overview = ( {product, reviews} ) => {

  const [styles, setStyles] = useState([]);

  const getStyles = () => {
    console.log('e', product.id);
    if (product.id) {
      axios.get(`${url}/products/${product.id}/styles`, auth)
        .then((response) => {
          console.log('response', response);
        });
    }
  };

  useEffect(() => {
    getStyles();
  }, []);

  return (
    <Container id="overview">
      <Row>
        <Col className="col-7">
          <ImageGallery />
        </Col>
        <Col>
          <ProductInformation product={product} reviews={reviews} />
        </Col>
      </Row>
    </Container>
  );
};

export default Overview;