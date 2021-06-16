import React from 'react';
import { Line } from 'rc-progress';
import { Row, Col } from 'react-bootstrap';

const RatingBars = ({ countRatings, reviews }) => {

  const findPercent = (num) => {
    return (countRatings[num] / reviews.length) * 100
  }

  return (
    <div>
      <div className="container">
        <div className="starsJ" >5 stars</div>
        <span className="percentLine" >
          <Line percent={findPercent(5)}
            strokeWidth="4"
            strokeLinecap="sqaure"
            trailWidth="4"

            strokeColor="#636262" />
        </span>
      </div>

      <div className="container">
        <div className="starsJ">4 stars </div>
        <span className="percentLine">
          <Line percent={findPercent(4)} strokeWidth="4"
            trailWidth="4"
            strokeLinecap="sqaure"
            strokeColor="#636262" />
        </span>
      </div>


      <div className="container">
        <div className="starsJ">3 stars</div>
        <span className="percentLine">
          <Line percent={findPercent(3)} strokeWidth="4"
            trailWidth="4"
            strokeLinecap="sqaure"
            strokeColor="#636262" />
        </span>
      </div>


      <div className="container">
        <div className="starsJ">2 stars</div>
        <span className="percentLine">
          <Line percent={findPercent(2)} strokeWidth="4"
            trailWidth="4"
            strokeLinecap="sqaure"
            strokeColor="#636262" />
        </span>
      </div>

      <div className="container">
        <div className="starsJ">1 stars</div>
        <span className="percentLine">
          <Line percent={findPercent(1)} strokeWidth="4"
            trailWidth="4"
            strokeLinecap="sqaure"
            strokeColor="#636262" />
        </span>
      </div>

    </div>
  )
}

export default RatingBars;