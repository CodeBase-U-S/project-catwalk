import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Image, Jumbotron } from 'react-bootstrap';

const ImageGallery = (props) => {
  const dispatch = useDispatch();

  let selectedStyle = useSelector((state) => state.styleReducer.style);
  let selectedPhoto = useSelector((state) => state.photoReducer.photo);

  const selectPhoto = (photo) => {
    dispatch({ type: 'SET_PHOTO', photo: photo });
  };

  if (selectedStyle) {
    return (
      <Jumbotron>
        <Row>
          <Col id="thumbnails" xs={2} overflow="scroll" height="100px">
            {selectedStyle && selectedStyle.photos.map((photo, id) => (
              <div id='thumbnail' key={id} className="mb-1" >
                {selectedPhoto === photo ?
                  <Image src={photo.thumbnail_url} thumbnail key={id} value={photo} onClick={() => selectPhoto(photo)} style={{opacity: '60%'}}/> :
                  <Image src={photo.thumbnail_url} thumbnail key={id} value={photo} onClick={() => selectPhoto(photo)} />
                }
              </div>
            ))}
          </Col>
          <Col id="ImageGallery">
            {selectedStyle && selectedPhoto &&
              <Image src={selectedPhoto.url} fluid alt="Responsive image" />}
            {selectedStyle && !selectedPhoto &&
              <Image src={selectedStyle.photos[0].url} fluid alt="Responsive image" />}
          </Col>

        </Row>
      </Jumbotron>
    );
  } else {
    return (<div></div>);
  }
};

export default ImageGallery;