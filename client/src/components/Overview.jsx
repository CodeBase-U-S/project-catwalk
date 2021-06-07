import React, {useState, useEffect} from 'react';
import axios from 'axios';
import testData from './test-data-Overview.js';

import ProductInformation from './overview/ProductInformation.jsx';
import AddToCart from './overview/AddToCart.jsx';
import StyleSelector from './overview/StyleSelector.jsx';
import ImageGallery from './overview/ImageGallery.jsx';


const Overview = (props) => {

  const [products, setProducts] = useState(null)

  useEffect(() => {
    axios.get('/api/products')
    .then(response => {
      console.log(response)
      setProducts(response)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div id="Overview">
      <ImageGallery />
      <ProductInformation data={testData[0]}/>
      <AddToCart />
      <StyleSelector />
    </div>
    )
};

export default Overview;