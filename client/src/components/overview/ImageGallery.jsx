import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Image, Jumbotron, Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Controller } from 'swiper/core';

const ImageGallery = (props) => {
  const dispatch = useDispatch();

  let selectedStyle = useSelector((state) => state.styleReducer.style);
  let photoIndex = useSelector((state) => state.photoReducer.photoIndex);

  const selectPhoto = (photo, index) => {
    dispatch({ type: 'SET_PHOTO', photoIndex: index });
  };

  const navRight = () => {
    if (photoIndex < selectedStyle.photos.length - 1) {
      dispatch({ type: 'SET_PHOTO', photoIndex: photoIndex + 1});
    }
  };

  const navLeft = () => {
    if (photoIndex > 0) {
      dispatch({ type: 'SET_PHOTO', photoIndex: photoIndex - 1});
    }
  };

  SwiperCore.use([Navigation]);
  SwiperCore.use([Controller]);
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);


  if (selectedStyle) {
    return (
      <Jumbotron>
        <Container>
          <Row>
            <Col xs={2} id="thumbnailGallery" style={{height: '75vh'}}>
              <button id='navigation-vert' className='tg-top' onClick={navRight}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-chevron-compact tg-up" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
                </svg>
              </button>
              <button id='navigation-vert' className='tg-bottom' onClick={navLeft}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-chevron-compact tg-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                </svg>
              </button>
              <div id="thumbnailGallery" style={{height: '75vh', overflowY: 'scroll'}}>
                {selectedStyle && selectedStyle.photos.map((photo, id) => (
                  <div id='thumbnail' key={id} className="mb-5" >
                    {photoIndex === id ?
                      <Image src={photo.thumbnail_url} thumbnail key={id} value={photo} onClick={() => selectPhoto(photo, id)} style={{opacity: '60%'}}/>
                      :
                      <Image src={photo.thumbnail_url} thumbnail key={id} value={photo} onClick={() => selectPhoto(photo, id)} />
                    }
                  </div>
                ))}
              </div>
            </Col>
            <Col xs={10} style={{justifyContent: 'center'}}>
              {photoIndex > 0 &&
            <button id='navigation' className='left' onClick={navLeft}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-chevron-compact left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
              </svg>
            </button>}
              {photoIndex < selectedStyle.photos.length - 1 &&
            <button id='navigation' className='right' onClick={navRight}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-chevron-compact right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
              </svg>
            </button>}
              {photoIndex >= 0 &&
                <Image src={selectedStyle.photos[photoIndex].url} style={{height: '75vh', objectFit: 'cover', width: '102%'}}/>}
            </Col>
          </Row>
{/*
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            navigation={true}
            onSlideChange={() => console.log('slide changed')}
            onSwiper={(swiper) => console.log(swiper)}>
            {selectedStyle && selectedStyle.photos.map((photo, id) => (
              <SwiperSlide key={id}>
                {photoIndex === photo ?
                  <Image className="carouselThumbnail" thumbnail src={photo.thumbnail_url} key={id} value={photo} onClick={() => selectPhoto(photo, id)} style={{opacity: '60%'}}/>
                  :
                  <Image className="carouselThumbnail" thumbnail src={photo.thumbnail_url} key={id} value={photo} onClick={() => selectPhoto(photo, id)} />
                }
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
        </Container>
      </Jumbotron>
    );
  } else {
    return (<div></div>);
  }
};

export default ImageGallery;

