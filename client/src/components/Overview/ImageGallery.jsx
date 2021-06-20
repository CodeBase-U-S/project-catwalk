import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Image, Jumbotron, Container, Modal, ModalDialog } from 'react-bootstrap';
import ModalImageGallery from './ModalImageGallery.jsx';
import {
  SvgChevronUp,
  SvgChevronDown,
  SvgChevronRight,
  SvgChevronLeft
} from './svgs/svg.jsx';



const ImageGallery = (props) => {

  // States //
  const dispatch = useDispatch();
  let selectedStyle = useSelector((state) => state.styleReducer.style);
  let photoIndex = useSelector((state) => state.photoReducer.photoIndex);


  // Event Handler Functions //
  const selectPhoto = (photo, index) => {
    dispatch({ type: 'SET_PHOTO', photoIndex: index });
  };

  const navRight = () => {
    if (photoIndex < selectedStyle.photos.length - 1) {
      dispatch({ type: 'SET_PHOTO', photoIndex: photoIndex + 1});
    }
    scrollTo(scrollPositionFinderRight);
  };

  const navLeft = () => {
    if (photoIndex > 0) {
      dispatch({ type: 'SET_PHOTO', photoIndex: photoIndex - 1});
    }
    scrollTo(scrollPositionFinderLeft);
  };


  // Components //
  const ThumbnailGallery = () => (
    <Col xs={2} style={{height: '75vh'}}>
      <button id='navigation-vert' className='tg-top' onClick={navLeft}>
        <SvgChevronUp />
      </button>
      <button id='navigation-vert' className='tg-bottom' onClick={navRight}>
        <SvgChevronDown />
      </button>
      <div id="thumbnailGallery" style={{height: '75vh', overflowY: 'scroll'}}>
        {selectedStyle && selectedStyle.photos.map((photo, id) => (
          <div id='thumbnail' key={id} className="mb-4" >
            {photoIndex === id ?
              <Image id={`pIndex${id}`} src={photo.thumbnail_url} thumbnail key={id} value={photo} onClick={() => selectPhoto(photo, id)} style={{opacity: '60%'}}/>
              :
              <Image id={`pIndex${id}`} src={photo.thumbnail_url} thumbnail key={id} value={photo} onClick={() => selectPhoto(photo, id)} />
            }
          </div>
        ))}
      </div>
    </Col>
  );

  const PhotoGallery = () => (
    <Col xs={10} style={{justifyContent: 'center'}}>
      {photoIndex > 0 &&
    <button id='navigation' className='tg-left' onClick={navLeft}>
      <SvgChevronLeft />
    </button>}
      {photoIndex < selectedStyle.photos.length - 1 &&
    <button id='navigation' className='tg-right' onClick={navRight}>
      <SvgChevronRight />
    </button>}
      {photoIndex >= 0 &&
        <Image id="selectedImage" src={selectedStyle.photos[photoIndex].url} onClick={toggleModal} style={{height: '75vh', objectFit: 'cover', width: '102%'}}/>}
    </Col>
  );


  // Render //
  if (selectedStyle) {
    return (
      <Jumbotron>
        <Container>
          <Row>
            <ThumbnailGallery />
            <PhotoGallery />
          </Row>
        </Container>
        <ModalImageGallery />
      </Jumbotron>
    );

  } else {
    return (<div></div>);
  }
};

export default ImageGallery;
