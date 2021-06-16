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
    console.log('clicked', photoIndex, photoIndex + 1)
    dispatch({ type: 'SET_PHOTO', photoIndex: photoIndex + 1});
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
            <Col xs={2}>
              <Swiper
                spaceBetween={'20px'}
                allowSlideNext={false}
                allowSlidePrev={false}
                slidesPerView={6}
                direction={'vertical'}
                navigation={true}>
                {selectedStyle && selectedStyle.photos.map((photo, id) => (
                  <SwiperSlide id='thumbnail' key={id} className="mb-1" >
                    {photoIndex === id ?
                      <Image src={photo.thumbnail_url} thumbnail key={id} value={photo} onClick={() => selectPhoto(photo, id)} style={{opacity: '60%'}}/>
                      :
                      <Image src={photo.thumbnail_url} thumbnail key={id} value={photo} onClick={() => selectPhoto(photo, id)} />
                    }
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
            <Col xs={10} style={{justifyContent: 'center'}}>
              <div id='navigation' className='left'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-chevron-compact left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                </svg>
              </div>

              <div id='navigation' className='right' onClick={navRight}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-chevron-compact right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                </svg>
              </div>
              {photoIndex !== 'notSet' &&
                  <Image src={selectedStyle.photos[photoIndex].url} fluid />}
              {photoIndex === 'notSet' &&
                  <Image src={selectedStyle.photos[0].url} fluid />}
            </Col>
          </Row>

        {/* <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            navigation={true}
            onSlideChange={() => console.log('slide changed')}
            onSwiper={(swiper) => console.log(swiper)}>
            {selectedStyle && selectedStyle.photos.map((photo, id) => (
              <SwiperSlide key={id}>
                {photoIndex === photo ?
                  <Image className="carouselThumbnail" thumbnail src={photo.thumbnail_url} key={id} value={photo} onClick={() => selectPhoto(photo)} style={{opacity: '60%'}}/>
                  :
                  <Image className="carouselThumbnail" thumbnail src={photo.thumbnail_url} key={id} value={photo} onClick={() => selectPhoto(photo)} />
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






// <Swiper
//               slidesPerView={1}
//               navigation={true}

//               // centerInsufficientSlides={true}
//               // controller={{ control: firstSwiper }}
//               onSwiper={setSecondSwiper}>
//               {selectedStyle && selectedStyle.photos.map((photo, id) => (
//                 <SwiperSlide key={id}>
//                   {selectedStyle && photoIndex &&
//                 <Image src={selectedStyle.photos[photoIndex].url} fluid alt="Responsive image" />}
//                   {selectedStyle && !photoIndex &&
//                 <Image src={photo.url} fluid alt="Responsive image" />}

//                   {/* {selectedPhoto === photo ?
//                     <Image src={photo.thumbnail_url} key={id} value={photo} style={{opacity: '60%'}}/> :
//                     <Image src={photo.url} key={id} value={photo} />
//                   } */}
//                 </SwiperSlide>
//               ))}


//               {/* <SwiperSlide>
//                 {selectedStyle && selectedPhoto &&
//                 <Image src={selectedPhoto.url} fluid alt="Responsive image" />}
//                 {selectedStyle && !selectedPhoto &&
//                 <Image src={selectedStyle.photos[0].url} fluid alt="Responsive image" />}
//               </SwiperSlide> */}
//             </Swiper>