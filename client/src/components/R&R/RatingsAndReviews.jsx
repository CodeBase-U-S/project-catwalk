import React, { useState, useEffect } from 'react';
import Ratingss from './Ratingss.jsx';
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

const RatingsAndReviews = ({ reviews, moreReviews, handleMoreReviews, handleHelpfulness, handleSortReviews }) => {
  // const reviews = useSelector((state) => state.reviewsReducer.reviews)
  const handleSort = (e) => {
    handleSortReviews(e.target.value)
  }


  return (
    <div>
      <div className="ratings">
        <Ratingss />
      </div>
      <div className="reviews">
        <label ><b>{reviews.length} </b>Sorted by</label>
      <select
       className="reviewDropDown"
        onChange={handleSort}>
        <option value="relevance">Relevance</option>
        <option value="helpful">Helpful</option>
        <option value="newest">Newest</option>
      </select>
        <div className="reviewsList">
          {reviews.map((review, index) => (
            <Reviews
              review={review}
              key={index}
              handleHelpfulness={handleHelpfulness}
            />
          ))}
        </div>
        <div className="more_reviews">
          {(moreReviews.length === 0) ? (
            <b>No More Reviews</b>
          ) : (
            <input
              type="button"
              value="MORE REVIEWS"
              className="more_reviews_button"
              onClick={() => handleMoreReviews()} />
          )}
        </div>
      </div>
    </div>
  );
};


export default RatingsAndReviews;