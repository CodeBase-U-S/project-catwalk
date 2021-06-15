import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Image, Jumbotron, Carousel } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';

const ImageGallery = (props) => {
  const dispatch = useDispatch();

  let selectedStyle = useSelector((state) => state.styleReducer.style);
  let selectedPhoto = useSelector((state) => state.photoReducer.photo);

  const selectPhoto = (photo) => {
    dispatch({ type: 'SET_PHOTO', photo: photo });
  };

  SwiperCore.use([Navigation]);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  if (selectedStyle) {
    return (
      <Jumbotron>
        <Row>
          <Col id="thumbnails" xs={2}>
            <Swiper
              spaceBetween={'20px'}
              slidesPerView={6}
              direction={'vertical'}
              navigation={true}
              controller={{ control: controlledSwiper }}
              onSlideChange={() => console.log('slide changed')}
              onSwiper={(swiper) => console.log(swiper)}>
              {selectedStyle && selectedStyle.photos.map((photo, id) => (
                <SwiperSlide id='thumbnail' key={id} className="mb-1" >
                  {selectedPhoto === photo ?
                    <Image src={photo.thumbnail_url} thumbnail key={id} value={photo} onClick={() => selectPhoto(photo)} style={{opacity: '60%'}}/> :
                    <Image src={photo.thumbnail_url} thumbnail key={id} value={photo} onClick={() => selectPhoto(photo)} />
                  }
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col>
            <Swiper navigation={true}
              controller={{ control: controlledSwiper }}>
              <SwiperSlide>
                {selectedStyle && selectedPhoto &&
                <Image src={selectedPhoto.url} fluid alt="Responsive image" />}
                {selectedStyle && !selectedPhoto &&
                <Image src={selectedStyle.photos[0].url} fluid alt="Responsive image" />}
              </SwiperSlide>
            </Swiper>
          </Col>

        </Row>
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            onSlideChange={() => console.log('slide changed')}
            onSwiper={(swiper) => console.log(swiper)}>
            {selectedStyle && selectedStyle.photos.map((photo, id) => (
              <SwiperSlide>
                {selectedPhoto === photo ?
                  <Image className="carouselThumbnail" thumbnail src={photo.thumbnail_url} key={id} value={photo} onClick={() => selectPhoto(photo)} style={{opacity: '60%'}}/>
                  :
                  <Image className="carouselThumbnail" thumbnail src={photo.thumbnail_url} key={id} value={photo} onClick={() => selectPhoto(photo)} />
                }
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Jumbotron>
    );
  } else {
    return (<div></div>);
  }
};

export default ImageGallery;