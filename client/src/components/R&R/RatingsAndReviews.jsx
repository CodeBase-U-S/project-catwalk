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

const RatingsAndReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`${url}/reviews/?page=1&count=100&product_id=16060`, auth)
      .then(({ data }) => {
        console.log(data)
        setReviews(data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <div className="ratings">
        <Ratings />
      </div>
      <div className="reviews">
        <Reviews />
      </div>
    </div>
  )
}

export default RatingsAndReviews;