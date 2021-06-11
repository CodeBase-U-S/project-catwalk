import React, { useState, useEffect } from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import TOKEN from '../../../../config.js';
import axios from 'axios';
import { useSelector } from 'react-redux';
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
const auth = {
  headers: {
    Authorization: TOKEN.TOKEN
  }
};

const RatingsAndReviews = ({ reviews, moreReviews, handleMoreReviews, handleHelpfulness }) => {
  // const reviews = useSelector((state) => state.reviewsReducer.reviews)




  return (
    <div>
      <div className="ratings">
        <Ratings />
      </div>
      <div className="reviews">
        {reviews.map((review, index) => (
          <Reviews
            review={review}
            key={index}
            handleHelpfulness = {handleHelpfulness}
          />
        ))}
        {(moreReviews.length === 0) ? (
          <b>No More Reviews</b>
        ) : (
          <input
            type="button"
            value="MORE REVIEWS"
            onClick={() => handleMoreReviews()} />
        )}
      </div>
    </div>
  );
};


export default RatingsAndReviews;