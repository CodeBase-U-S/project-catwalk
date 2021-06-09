import React, { useState, useEffect } from 'react';

import Overview from './Overview/Overview.jsx';
import QandA from './QandA.jsx';
import RatingsAndReviews from './R&R/RatingsAndReviews.jsx';
import RelatedItems from './RelatedItems.jsx';
import TOKEN from '../../../config.js';
import axios from 'axios';

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
const auth = {
  headers: {
    Authorization: TOKEN.TOKEN
  }
};

const App = () => {
  const [reviews, setReviews] = useState({
    results: [],
    moreReviews: []
  }, []);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`${url}/reviews/?page=1&count=100&product_id=16060`, auth)
      .then(({ data }) => {
        // console.log(data);
        console.log(data.results);
        setReviews({
          results: data.results.slice(0, 2),
          moreReviews: data.results.slice(2),
          allReviews: data.results
        });
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    axios.get(`${url}/products/17000`, auth)
      .then(({ data }) => {
        console.log(data);
        setProduct(data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleMoreReviews = (e) => {
    setReviews({
      results: reviews.results.concat(reviews.moreReviews.slice(0, 2)),
      moreReviews: reviews.moreReviews.slice(2)
    });
  };

  return (
    <div>
      {/* <div>It worked</div> */}
      <Overview
        product={product}
        reviews={reviews.allReviews} />
      <RelatedItems />
      <QandA />
      <RatingsAndReviews
        reviews={reviews.results}
        moreReviews={reviews.moreReviews}
        handleMoreReviews={handleMoreReviews} />
    </div>
  );

};

export default App;