import React from 'react';
import Ratings from 'react-ratings-declarative';
import { useSelector } from 'react-redux';

const Ratingss = () => {
  // const review = useSelector((state) => state.ratingsReducer.ratings)
  const reviews = useSelector((state) => state.reviewsReducer.reviews)

  let rating = 0;

  reviews.forEach((review) => {
    rating += review.rating / reviews.length;
  })


  return (
    <div>
      <div className="ratingsAndReviewsTitle">RATINGS & REVIEWS</div>
      <div className="starAndAveRating">
        <span className="ratingAve">{rating}</span>
        <div className="starAve" >
          <Ratings
            rating={Math.round(rating * 10) / 10}
            widgetDimensions="16px"
            widgetRatedColors="rgb(87, 87, 87)"
            widgetSpacings="0px"
          >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>

        </div>
      </div>

    </div>
  )
};




export default Ratingss;