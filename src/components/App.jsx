import React from 'react';

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