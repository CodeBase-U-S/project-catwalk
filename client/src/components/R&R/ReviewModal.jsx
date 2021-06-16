import React, { useState, useEffect } from "react";
import { Modal, Col, Button, Form } from "react-bootstrap";
import Ratings from 'react-ratings-declarative';

const MyVerticallyCenteredModal = ({ onHide, show }) => {
  const [ratings, setRatings] = useState();


  const setNewRating = (rating) => this.props.dispatch( fooActions.setRating(ratings) )


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
          <Ratings
            rating={ratings}
            widgetDimensions="16px"
            widgetRatedColors="rgb(87, 87, 87)"
            widgetSpacings="0px"
          >
            <Ratings.Widget changeRating={()=> setNewRating()}/>
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
        </div>

        <p>Do you recommend this product*</p>
        <Form>

            <div key='inline-radio' className="mb-3">
            <Form.Check inline label="Yes" name="group1" type='radio' id='inline-radio-1' />
              <Form.Check inline label="No" name="group1" type='radio' id='inline-radio-2' />
            </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const ReviewModal = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <input
        type="button"
        value="ADD A REVIEW +"
        className="addReviewButton"
        onClick={() => setModalShow(true)} />

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />



    </div>
  )
}

export default ReviewModal;