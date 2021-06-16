import React, { useState, useEffect} from 'react';



const Reviews = ({ review, handleHelpfulness }) => {

  const [helpful, setHelpful] = useState(review.helpfulness);
  const [click, setClick] = useState(false);
  return (
    < div >
      <div>
        {review.ratings}
        <span>
          {review.reviewer_name},
        &nbsp;
          {new Date(review.date).toString().slice(4, 16)}
        </span>
      </div>
      <div>
        {review.summary.length >= 60 ? (
          <h3>{review.summary.slice(0, 60)}...</h3>
        ) : (
          <h3>{review.summary}</h3>
        )}
      </div>
      <p>{review.body}</p>
      <p>
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
        <div onClick={() => {
          handleHelpfulness(review.review_id, review.helpfulness);
          setHelpful(helpful + 1);
          setClick(true)
        }} >yes({helpful})</div>
      ) : (
        <div>yes({helpful})</div>
      )}
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