import React, { useState, useEffect, useCallback, useReducer } from 'react';
import Token from '../../../../config.js';
import axios from 'axios';
import Outfit from './Outfit.jsx';
import Products from './Products.jsx';

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
const options = {
  headers: {
    Authorization: Token.TOKEN
  }
};

const RelatedItems = (props) => {
  const [relatedProductsId, setRelatedProductsId] = useState([]);
  // const [relatedProducts, setRelatedProducts] = useState([]);
  // const [productStyles, setProductStyles] = useState([]);

  var productsArray = []; // temporary container for the products id.

  // get related products' id.
  const getRelatedProductsId = (incomingProductId) => {
    axios.get(`${url}/products/${incomingProductId}/related`, options)
      .then(res => {
        console.log('res herer is ', res.data);
        setRelatedProductsId(res.data);
      })
      .catch(err => console.log(err));
  };

  // get all styles of a product
  const getProductStyles = (incomingProductId) => {

    axios.get(`${url}/products/${tempProductId}/styles`, options)
      .then(res => {
        console.log('data in styles', res.data.results[0].photos[0].thumbnail_url);
        setProductStyles(res.data.results);
      })
      .catch(err => console.log(err));
  };

  //
  useEffect(() => {
    const fetchStylesData = async (relatedProductsId) => {

      // Bug here
      let temp = [];
      for (let i = 0; i < relatedProductsId.length; i++) {
        let styleRes = await axios.get(`${url}/products/${relatedProductsId[i]}/styles`, options);
        console.log('***********', styleRes.data);
        setProductStyles([...productStyles, styleRes.data]);
      }

      setProductStyles(styleRes.data.results);
      // await getProducts();
      // await getProductStyles();
      // const productRes = await axios.get(`${url}/products`, options);
      // setProduct(productRes.data);
    };
    // fetchStylesData();

  }, []);

  //get all related products
  useEffect(() => {
    // const fetchRelatedProducts = async () => {
    //   // console.log('Running in fetching and products', relatedProductsId);

    //   let temp = [];
    //   for (let i = 0; i < relatedProductsId.length; i++) {
    //     let product = await axios.get(`${url}/products/${relatedProductsId[i]}`, options);
    //     console.log('Product in  fetchRelatedProducts is', product.data);
    //     temp.push(product.data);
    //   }

    //   setRelatedProducts(temp);
    // };
    // return () => {
    getRelatedProductsId(16057);
    // }
    // fetchRelatedProducts();
  }, []);

  return (
    <div className="Related-Products">
      {/* <span>{relatedProducts.id}</span> */}
      <Products testdata={relatedProductsId} />
      {/* testStyles={productStyles} */}
      <br></br>
      <Outfit testdata={relatedProductsId}/>
    </div>
  );
};

export default RelatedItems;