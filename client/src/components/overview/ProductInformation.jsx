import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';

import StarRating from './StarRating.jsx';
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';



const ProductInformation = ({ product, reviews }) => {

  const [rating, setRating] = useState(null);
  const [reviewCount, setReviewCount] = useState([]);

  useEffect(() => {
    setRating(calculateAvg(reviews));
    if (reviews) {
      setReviewCount(reviews.length);
    }
  }, [reviews]);

  const calculateAvg = (arr = []) => {
    if (arr.length === 0) {
      return null;
    }
    let sum = 0;
    arr.forEach((product) => {
      sum += product.rating;
    });
    return sum / arr.length;
  };

  return (
    <Container>
      {rating && <StarRating rating={rating} reviewCount={reviewCount} />}
      {product.category && <h5 id="category" className="mb-0" style={{fontWeight: 'lighter'}}>{product.category.toUpperCase()}</h5>}
      <h1 id="name" className="mb-3"><strong>{product.name}</strong></h1>
      <div id="price">${~~product.default_price}</div>
      <br></br>
      <StyleSelector />
      <AddToCart />
    </Container>
  );
};

export default ProductInformation;