import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const StyleSelector = (props) => {

  let styles = useSelector((state) => state.stylesReducer.styles);

  if (styles) {
    return (
      <div className="mb-1">
        <div className="mb-3">
          <span><strong>STYLE {'>'}</strong></span> <span style={{fontWeight: 'lighter'}}>SELECTED STYLE</span>
        </div>
        <div id="StyleSelector">
          <Row>
            {styles.map((style, id) => (
              <Col key={id}>
                <img src={style.photos[0].thumbnail_url} className='style'></img>
              </Col>
            ))}
          </Row>
        </div>

        {/* <div id="StyleSelector">
          <Row>
            <Col>
              <img src={styles[0].photos[0].thumbnail_url} className='style'></img>
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
        </div> */}
        <Row>
          <Button id="AddToCart" className="button btn-secondary">SELECT SIZE</Button>
          <Button id="favoriteButton" className="button btn-secondary">1</Button>
        </Row>
      </div>
    );
  }
  return (<div></div>);
};

export default StyleSelector;