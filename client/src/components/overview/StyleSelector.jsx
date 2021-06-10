import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Container from 'react-bootstrap/container';


const StyleSelector = (props) => (
  <div>
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

  </div>
);

export default StyleSelector;