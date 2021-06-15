import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Token from '../../../../config.js';
import Cards from './Cards.jsx';

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
const options = {
  headers: {
    Authorization: Token.TOKEN
  }
};

const Products = (props) => {
  const [relatedProducts, setRelatedProducts] = useState();
  const [productStyles, setProductStyles] = useState();
  // const [isloaded, setIsLoaded] = useState(false);
  const [review, setReview] = useState();


  const getStyles = () => {
    return axios.get(`${url}/products/${props.testdata}/styles`, options)
      .then(res => {
        // console.log('after get', res.data);
        // if (!isrun) {
        // setProductStyles(res.data);
        // }
        setProductStyles(res.data);
        return res.data;
      })
      .catch(err => console.log(err));
  };

  const getProduct = () => {
    return axios.get(`${url}/products/${props.testdata}`, options)
      .then(res => {
        // console.log('after get', res.data);
        // if (!isrun) {
        setRelatedProducts(res.data);
        // }
        return res.data;
      })
      .catch(err => console.log(err));
  };

  const getReview = () => {
    return axios.get(`${url}/reviews?product_id=${props.testdata}`, options)
      .then(res => {
        setReview(res.data);
        // console.log('data in review', res.data);
        return res.data;
      })
      .catch(err => console.log(err));
  };

  // This is for async and promist.all usage. Before using this, comment out the setState in each method.
  // const data = async () => {
  //   const initialData = [getStyles(), getProduct(), getReview()];
  //   const [ fetchStyle, fetchProduct, fetchReview] = await Promise.all(initialData);

  //   // console.log('', );
  //   console.log('fetch product', fetchProduct);
  //   console.log('fetch styles', fetchStyle);

  //   setRelatedProducts(fetchProduct);
  //   setProductStyles(fetchStyle);
  //   setReview(fetchReview);
  // }

  useEffect(() => {

    // data();
    getProduct();
    getStyles();
    getReview();

    // console.log('props here is ', props.testdata);

  }, [props.testdata]);


  if (relatedProducts && productStyles && review) {
    return (
    // <div className="cardsDisplay">
      <ul>
        <Cards product={relatedProducts} stylesInfo={productStyles} reviewInfo={review}/>
      </ul>
    );
  } else {
    return (
      <span></span>
    );
  }
};

export default Products;