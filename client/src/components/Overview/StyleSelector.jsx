import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const StyleSelector = (props) => {
  const dispatch = useDispatch();

  // States //
  let selectedStyle = useSelector((state) => state.styleReducer.style);
  let styles = useSelector((state) => state.stylesReducer.styles);
  let stylesObj = useSelector((state) => state.stylesReducer.stylesObj);

  // Event Handlers //
  const selectStyle = (e) => {
    let styleId = e.currentTarget.getAttribute('style-index');
    dispatch({ type: 'SET_STYLE', style: stylesObj[styleId] });
    dispatch({ type: 'SET_PHOTO', photoIndex: 0 });
  };

  // Render //
  if (selectedStyle) {
    return (
      <div className="mb-4">

        {selectedStyle &&
        <div className="mb-3">
          <span><strong>STYLE {'>'}</strong></span> <span style={{fontWeight: 'lighter'}}>{selectedStyle.name.toUpperCase()}</span>
        </div>}

        <div className="mb-4" style={{width: '340px'}}>
          <Row>
            {styles.map((style, id) => (
              <Col
                className="col-3"
                key={style.style_id}
                style-index={style.style_id}
                onClick={selectStyle}
              >
                {selectedStyle.style_id === style.style_id &&
                <svg id="selected-style" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                </svg>}
                <img src={style.photos[0].thumbnail_url} key={id} className='style'></img>
              </Col>
            ))}
          </Row>
        </div>

      </div>
    );
  }
  return (<div></div>);
};

export default StyleSelector;