import React from 'react';
import Container from 'react-bootstrap/container';

import testData from './test-data-Overview.js';

import ProductInformation from './overview/ProductInformation.jsx';
import AddToCart from './overview/AddToCart.jsx';
import StyleSelector from './overview/StyleSelector.jsx';
import ImageGallery from './overview/ImageGallery.jsx';


class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <Container>
        <ImageGallery />
        <ProductInformation data={testData[0]}/>
        <AddToCart />
        <StyleSelector />
      </Container>
    );
  }
}

export default Overview;