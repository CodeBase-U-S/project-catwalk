import React, { useState, useEffect } from "react";
import { Modal, Col, Button, Form, Table } from "react-bootstrap";
import Ratings from 'react-ratings-declarative';

const MyVerticallyCenteredModal = ({ onHide, show, metaReview }) => {
  const [ratings, setRatings] = useState(0);
  const [recommend, setRecommend] = useState(false);
  const [reviewSum, setReviewSum] = useState('');
  const [reviewBod, setReviewBod] = useState('');
  const [nickNamed, setNickNamed] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [reviewStar, setReviewStar] = useState('');
  const [charCount, setCharCount] = useState('Minimum required characters left: ' + 50);

  const postReview = {

  }


  const handleUserEmail = (e) => {
    setUserEmail(e.target.value)
  }

  const handleNickNamed = (e) => {
    setNickNamed(e.target.value)
  }

  const handleSummary = (e) => {
    setReviewSum(e.target.value)
  }

  const handleCharCount = (e) => {
    let input = e.target.value;
    setReviewBod(input)
    if (input.length <= 50) {
      setCharCount('Minimum required characters left: ' + (50 - input.length))
    } else if (input.length >= 50 && input.length < 1000) {
      setCharCount('Characters remaining: ' + (1000 - input.length))
    } else {
      setCharCount('Max characters reached.')
    }
  }

  const changeRating = (val) => {
    setRatings(val);

    if (val === 1) {
      setReviewStar('1 star - Poor')
    } else if (val === 2) {
      setReviewStar('2 stars - Fair')
    } else if (val === 3) {
      setReviewStar('3 stars - Average')
    } else if (val === 4) {
      setReviewStar('4 stars - Good')
    } else if (val === 5) {
      setReviewStar('5 stars - Great')
    }

  }

  const characteristics = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
  }
  const charArray = Object.keys(characteristics);

  const { size, width, comfort, quality, length, fit } = characteristics;


  const setNewRating = (rating) => setRatings(rating)
  const radioButton = <div key='inline-radio' className="mb-3">
    <Form.Check inline name="group1" type='radio' id='inline-radio-1' />
  </div>;

  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Write Your Review
          <b />
          <h5>About the [Product Name Here]</h5>
        </Modal.Title>

      </Modal.Header>
      <Modal.Body>
        <p>Overall rating*</p>
        <div >
          <p>{reviewStar}</p>
          <Ratings
            changeRating={changeRating}
            rating={ratings}
            widgetDimensions="16px"
            widgetRatedColors="rgb(87, 87, 87)"
            widgetSpacings="0px"
            widgetHoverColors="rgb(87, 87, 87)"
          >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
        </div>

        <p>Do you recommend this product*</p>
        <Form>

          <div key='inline-radio' className="mb-3">
            <Form.Check inline label="Yes" name="group1" type='radio' id='inline-radio-1' onChange={() => setRecommend(true)} />
            <Form.Check inline label="No" name="group1" type='radio' id='inline-radio-2' onChange={() => setRecommend(false)} />
          </div>
        </Form>
        <p>Characteristics*</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>
          </thead>
          <tbody>
            {charArray.map((char, index) => {
              return (
                <tr key={index}>
                  <td>{char}</td>
                  {characteristics[char].map((description, index) => (
                    <td key={index}>{description} {radioButton}</td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </Table>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Review summary</Form.Label>
          <Form.Control
            as="input"
            rows={1}
            placeholder="Example: Best purchase ever!"
            maxLength="60"
            onChange={handleSummary} />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Review body*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Why did you like the product or not?"
            minLength="50" maxLength="1000"
            onChange={handleCharCount}
          />
          <p className="text-muted">{charCount}</p>
        </Form.Group>

        <div className="mb-3">
          <Form.File id="formcheck-api-regular">
            <Form.File.Label>Upload your photos</Form.File.Label>
            <Form.File.Input />
          </Form.File>
        </div>


        <Form.Group as={Col} controlId="formNickName">
          <Form.Label>What is your nickname</Form.Label>
          <Form.Control
            as="input"
            placeholder="Example: jackson11!"
            maxLength="60"
            onChange={handleNickNamed} />
          <p className="text-muted">For privacy reasons, do not use your full name or email address.</p>
        </Form.Group>

        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Your email*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Example: jackson11@email.com"
            maxLength="60"
            onChange={handleUserEmail} />
          <p className="text-muted">For authentication reasons, you will not be emailed.</p>
        </Form.Group>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const ReviewModal = ({ metaReview }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div >
      <input
        type="button"
        value="ADD A REVIEW +"
        className="addReviewButton"
        onClick={() => setModalShow(true)} />

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        metaReview={metaReview}
      />



    </div>
  )
}

export default ReviewModal;