import React from 'react';
import Ratings from 'react-ratings-declarative';
import RatingBars from './RatingBars.jsx';
import { useSelector } from 'react-redux';

const Ratingss = () => {
  // const review = useSelector((state) => state.ratingsReducer.ratings)
  const reviews = useSelector((state) => state.reviewsReducer.reviews)
  console.log('REVIEWS FROM RATINGS', reviews)
  let rating = 0;
  let totalPercentage = 0;


  reviews.forEach((review) => {
    rating += review.rating / reviews.length;
  })


  const countRatings = (list) => {
    return list.reduce((count, review) => {
      const rating = review.rating;
      count[rating] += 1;
      return count
    }, { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })
  }




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
        <span>
          <RatingBars countRatings={countRatings(reviews)}  reviews={reviews}/>
        </span>
    </div>
  )
};




export default Ratingss;