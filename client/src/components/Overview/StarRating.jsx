import React, { useState, useEffect } from 'react';
import Ratings from 'react-ratings-declarative';
import { useSelector } from 'react-redux';

const StarRating = () => {

  // States //
  const reviews = useSelector((state) => state.reviewsReducer.reviews);
  const [rating, setRating] = useState(null);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    if (reviews.length > 0) {
      setRating(calculateAvg(reviews));
      setReviewCount(reviews.length);
    }
  }, [reviews]);


  // Event Handlers //

  const scrollHandler = () => {
    const elementToScrollTo = document.getElementsByClassName('reviewsJG')[0];
    elementToScrollTo.scrollIntoView();
  };


  // Helper Functions //

  const calculateAvg = (arr = null) => {
    if (arr.length === 0) {
      return null;
    }
    let sum = 0;
    arr.forEach((product) => {
      sum += product.rating;
    });
    return sum / arr.length;
  };


  // Render //
  if (rating) {
    return (
      <div className="mb-3 mt-5" id="star_rating">
        <Ratings
          style={{verticalAlign: 'middle'}}
          rating={rating}
          widgetDimensions="18px"
          widgetRatedColors="rgb(87, 87, 87)"
          widgetSpacings="0px"
        >
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
        </Ratings>
        <span id="readAll" onClick={scrollHandler} style={{cursor: 'pointer'}}><small><u>Read all {reviewCount} reviews</u></small></span>
      </div>
    );
  }
  return (<div></div>);
};

export default StarRating;



