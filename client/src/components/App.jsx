import React, { useState, useEffect } from 'react';

import Overview from './Overview.jsx';
import QandA from './QandA.jsx';
import RatingsAndReviews from './R&R/RatingsAndReviews.jsx';
import RelatedItems from './RelatedItems.jsx';
import TOKEN from '../../../config.js';
import axios from 'axios';

<<<<<<< HEAD

class App extends React.Component {
  constructor(props) {
    super(props);
=======
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
const auth = {
  headers: {
    Authorization: TOKEN.TOKEN
>>>>>>> aa7a382abfc4dc222ea9ce99c706af41b64406e2
  }
};

<<<<<<< HEAD
  render() {
    return (
      <div>
        <div>It worked</div>
        <Overview/>
        <RelatedItems/>
        <QandA/>
        <RatingsReviews/>
      </div>
    );
  }
}
=======
const App = () => {
  const [reviews, setReviews] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`${url}/reviews/?page=1&count=100&product_id=17000`, auth)
      .then(({ data }) => {
        // console.log(data);
        // console.log(data.results);
        setReviews(data.results);
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

  return (
    <div>
      {/* <div>It worked</div> */}
      <Overview product={product} reviews={reviews}/>
      <RelatedItems />
      <QandA />
      <RatingsAndReviews reviews={reviews}/>
    </div>
  );

};
>>>>>>> aa7a382abfc4dc222ea9ce99c706af41b64406e2

export default App;