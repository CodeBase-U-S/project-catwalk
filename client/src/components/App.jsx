import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

// sub-components //
import Header from './Overview/Header.jsx';
import Overview from './Overview/Overview.jsx';
import QandA from './QandA.jsx';
import RatingsAndReviews from './R&R/RatingsAndReviews.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';

// api option data //
import TOKEN from '../../../config.js';
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
const auth = { headers: { Authorization: TOKEN.TOKEN } };


const App = () => {
  const product = useSelector(state => state.productReducer.product);
  const dispatch = useDispatch();

  const [reviews, setReviews] = useState({
    results: [],
    moreReviews: [],
    allReviews: [],
    sort: 'relevance'
  });

  const [sort, setSort] = useState(reviews.sort);
  const [metaReview, setMetaReview] = useState({});


  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    getAllreviews();
    getMetaReviews();
    getStyles(product.id);
  }, [product]);


  const getProduct = () => {
    axios.get(`${url}/products/16056`, auth)
      .then(({ data }) => {
        dispatch({ type: 'CHANGE_PRODUCT', product: data });
        getStyles(data.id);
      })
      .then(() => {
        const product = useSelector(state => state.productReducer.product);
      })
      .catch(err => console.error(err));
  };

  const getStyles = (id) => {
    if (id) {
      axios.get(`${url}/products/${id}/styles`, auth)
        .then(({ data }) => {
          dispatch({ type: 'SET_STYLES', styles: data.results});
          dispatch({ type: 'SET_STYLE', style: getDefaultStyle(data)});
          // dispatch({ type: 'SET_PHOTO', photoIndex: 0 });

        })
        .then(() => {
        });
    }
  };

  const getDefaultStyle = (data) => {
    let defaultStyle;
    data.results.forEach((style) => {
      if (style['default?']) {
        defaultStyle = style;
      }
    });
    return defaultStyle;
  };


  const getAllreviews = () => {
    axios.get(`${url}/reviews/?page=1&count=10&product_id=${product.id}`, auth)
      .then(({ data }) => {
        // console.log('DATA', data);
        setReviews({
          results: data.results.slice(0, 2),
          moreReviews: data.results.slice(2),
          allReviews: data.results
        });
        dispatch({ type: 'reviews', reviews: data.results });
      })
      .catch(err => console.error(err));

  };

  const getMetaReviews = () => {
    axios.get(`${url}/reviews/meta?product_id=16060`, auth)
      .then(({ data }) => {
        console.log('metadata', data);
        setMetaReview(data);
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

  const handleSortReviews = async (e) => {
    // setSort(e)
    // (async () => {
    const reviewsList = await axios({
      method: 'GET',
      url: `${url}/reviews/`,
      params: {
        page: 1,
        count: 10,
        sort: e,
        'product_id': product.id
      },
      headers: auth.headers
    });
    console.log('handleSortReviews called');
    setReviews({
      results: reviewsList.data.results.slice(0, 2),
      moreReviews: reviewsList.data.results.slice(2),
      sort: e
    });
    // })();
  };

  return (
    <div>
      <Header />
      <Overview />
      <RelatedItems />
      <div className='QandA'>
        <QandA />
      </div>
      <RatingsAndReviews
        reviews={reviews.results}
        moreReviews={reviews.moreReviews}
        handleMoreReviews={handleMoreReviews}
        handleHelpfulness={handleHelpfulness}
        handleSortReviews={handleSortReviews}
        metaReview={metaReview} />
    </div>
  );
};

export default App;