import React from 'react';

import Overview from './Overview.jsx';
import QandA from './QandA.jsx';
import RatingsReviews from './RatingsReviews.jsx';
// import RelatedItems from './RelatedItems.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>It worked</div>
        <Overview/>
        <RelatedItems/>
        <QandA/>
        <RatingsReviews/>
      </div>
    )
  }
}

export default App;