import React, { useState, useEffect } from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import TOKEN from '../../../../config.js';
import axios from 'axios';

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
const auth = {
  headers: {
    Authorization: TOKEN.TOKEN
  }
};

const RatingsAndReviews = ({ reviews }) => {

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
          />
        ))}
      </div>
    </div>
  );
};


export default RatingsAndReviews;