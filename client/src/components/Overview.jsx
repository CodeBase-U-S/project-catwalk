import React from 'react';

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
      <div id="Overview">
        <ImageGallery />
        <ProductInformation data={testData[0]}/>
        <AddToCart />
        <StyleSelector />
      </div>
    )
  }
};

export default Overview;