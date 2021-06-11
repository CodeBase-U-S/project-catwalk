import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import Container from 'react-bootstrap/container';


const StyleSelector = (props) => (
  <div className="mb-3">
    <div className="mb-2">
      <span><strong>STYLE {'>'}</strong></span> <span style={{fontWeight: 'lighter'}}>SELECTED STYLE</span>
    </div>
    <div id="StyleSelector">
      <Row>
        <Col>
          <div className='style'></div>
        </Col>
        <Col>
          <div className='style'></div>
        </Col>
        <Col>
          <div className='style'></div>
        </Col>
        <Col>
          <div className='style'></div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className='style'></div>
        </Col>
        <Col>
          <div className='style'></div>
        </Col>
        <Col>
          <div className='style'></div>
        </Col>
        <Col>
          <div className='style'></div>
        </Col>
      </Row>
    </div>
    <Row>
      <Button id="AddToCart" className="button btn-secondary">SELECT SIZE</Button>
      <Button id="favoriteButton" className="button btn-secondary">1</Button>
    </Row>
  </div>
);

export default StyleSelector;