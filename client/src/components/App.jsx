import React, { useState, useEffect } from 'react';

import Header from './Overview/Header.jsx';
import Overview from './Overview/Overview.jsx';
import QandA from './QandA.jsx';
import RatingsAndReviews from './R&R/RatingsAndReviews.jsx';
import RelatedItems from './RelatedItems.jsx';
import TOKEN from '../../../config.js';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
const auth = {
  headers: {
    Authorization: TOKEN.TOKEN
  }
};

const App = () => {
  const dispatch = useDispatch();

  const [reviews, setReviews] = useState({
    results: [],
    moreReviews: [],
    allReviews: []
  });
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getAllreviews();
  }, []);

  useEffect(() => {
    axios.get(`${url}/products/17000`, auth)
      .then(({ data }) => {
        console.log(data);
        setProduct(data);
      })
      .catch(err => console.error(err));
  }, []);

  const getAllreviews = () => {
    axios.get(`${url}/reviews/?page=1&count=10&product_id=16060`, auth)
      .then(({ data }) => {
        // console.log(data);
        console.log(data.results);
        dispatch({ type: 'reviews', reviews: data.results })
        setReviews({
          results: data.results.slice(0, 2),
          moreReviews: data.results.slice(2),
          allReviews: data.results
        });
      })
      .catch(err => console.error(err));
  };

  const handleMoreReviews = (e) => {
    setReviews({
      results: reviews.results.concat(reviews.moreReviews.slice(0, 2)),
      moreReviews: reviews.moreReviews.slice(2)
    });
  };

  const handleHelpfulness = (id, helpfulnessNumber) => {
    let updatedHelpfulness = {
      helpfulness: helpfulnessNumber + 1
    };
    axios.put(`${url}/reviews/${id}/helpful`, updatedHelpfulness, auth)
      .catch(err => console.error(err));
  };

  return (
    <div>
      {/* <div>It worked</div> */}
      <Header />
      <Overview
        product={product}
        reviews={reviews.allReviews} />
      <RelatedItems />
      <QandA />
      <RatingsAndReviews
        reviews={reviews.results}
        moreReviews={reviews.moreReviews}
        handleMoreReviews={handleMoreReviews}
        handleHelpfulness={handleHelpfulness} />
    </div>
  );

};

export default App;