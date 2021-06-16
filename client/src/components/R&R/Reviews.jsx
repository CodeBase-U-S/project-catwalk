import React, { useState, useEffect, useLayoutEffect } from 'react';
import Ratings from 'react-ratings-declarative';
import { useDispatch } from 'react-redux';



const Reviews = ({ review, handleHelpfulness }) => {

  // const [helpful, setHelpful] = useState(review.helpfulness);
  const [click, setClick] = useState(false);

  // const dispatch = useDispatch();


  // let photos = '';
  // for (var i =0; i < review.photos.length; i++) {
  //   photos += review.photos[i].url;
  // }
  // console.log("PHOTOS", photos)

  return (
    < div >

      <div>
        <Ratings
          rating={review.rating}
          widgetDimensions="16px"
          widgetRatedColors="rgb(87, 87, 87)"
          widgetSpacings="0px"
        >
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
        </Ratings>
        <span className="reviewerName">
          {review.reviewer_name},
          &nbsp;
          {new Date(review.date).toString().slice(4, 16)}
        </span>
      </div>
      <div className="reviewSummary">
        {review.summary.length >= 60 ? (
          <span>{review.summary.slice(0, 60)}...</span>
        ) : (
          <span>{review.summary}</span>
        )}
      </div>
      <span className="reviewBody">{review.body}</span>
      &nbsp;
      {review.photos.length >= 1 ? (
        review.photos.map((photo, index) => (
          <img src={photo.url} className="reviewThumbnail" key={index} />
        ))
      ) : (null)}
      <p className="reviewRecommend">
        {review.recommend ? (
          '√  I recommend this product.'
        ) : (
          null
        )}
      </p>
      <p>
        {review.response ? (
          <p>{review.response}</p>
        ) : (
          null
        )}
      </p>
      {!click ? (
        <div className="helpfulReview"
          onClick={() => {
            // setHelpful(helpful + 1);
            setClick(true);
            handleHelpfulness(review.review_id, review.helpfulness);
          }} >Helpful? <u>Yes</u> ({review.helpfulness})</div>
      ) : (
        <div className="helpfulReview">Helpful? <u>Yes</u> ({review.helpfulness + 1}) </div>
      )}
      <hr />
    </div >
  )
};




export default Reviews;

// body: "I like them but they run wide."
// date: "2019-04-13T00:00:00.000Z"
// helpfulness: 13
// photos: []
// rating: 3
// recommend: true
// response: ""
// review_id: 169578
// reviewer_name: "thinfootjim"
// summary: "They're heavy but great"