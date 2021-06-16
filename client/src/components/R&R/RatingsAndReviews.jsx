import React, { useState, useEffect } from 'react';
import Ratingss from './Ratingss.jsx';
import Reviews from './Reviews.jsx';
import TOKEN from '../../../../config.js';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ReviewModal from './ReviewModal.jsx'

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
    <div className="lemon">
      <div className="ratingsJG">
        <Ratingss />
      </div>
      <div className="reviewsJG">
        <label className="reviewSort"><b>{reviews.length} </b>reviews, sorted by</label>
      <select
       className="reviewDropDown"
        onChange={handleSort}>
        <option value="relevance">relevance</option>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
      </select>
        <div className="reviewsList">
          {reviews.map((review, index) => {

            return (<Reviews
              review={review}
              key={index}
              handleHelpfulness={handleHelpfulness}
            />)
          })}
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
         <ReviewModal />
      </div>
    </div>
  );
};



export default RatingsAndReviews;