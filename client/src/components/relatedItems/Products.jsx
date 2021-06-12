import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Token from '../../../../config.js';


const Products = (props) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [productStyles, setProductStyles] = useState([]);


  useEffect(() => {
    // const getproducts = async () => {
    //   console.log('props here is ');
    //   for (let i = 0; i < props.testdata.length; i++) {
    //     await conosle.log('ifidsafidsafsdji', i);
    //   }
    // };
    console.log('Data in props,', props.testdata);
    // for (let i = 0; i < props.testdata.length; i++) {
    //   conosle.log('ifidsafidsafsdji', i);
    // }

    // getproducts();
    // console.log('props here is ', props.testdata);

  }, [props.testdata]);


  return (
    <div className="products">
      <h5>RELATED PRODUCTS</h5>
      <span>{props.testdata[0]}</span>
    </div>
  );
};

export default Products;


// {props.testdata.map((card, index) => (
//   <div key={index} className="productcard">
//     {/* <img className="cardImg" src={props.testStyles[0].photos[0].thumbnail_url} alt="img is here"></img> */}
//     <div className="cardCategory">{card.category}</div>
//     <div className="cardName">{card.name}</div>
//     <div className="cardDescription">{card.description}</div>
//     <div className="cardprice">${card.default_price}</div>
//     <div className="stars">Stars here</div>
//   </div>
// ))}