import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Image, Jumbotron, Container, Modal, ModalDialog } from 'react-bootstrap';

const ImageGallery = (props) => {
  const dispatch = useDispatch();

  // State Managers //
  let selectedStyle = useSelector((state) => state.styleReducer.style);
  let photoIndex = useSelector((state) => state.photoReducer.photoIndex);
  let modalState = useSelector((store) => store.modalReducer.modalState);
  let zoomify = useSelector((store) => store.zoomifyReducer.zoomify);


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

  const toggleModal = () => {
    !modalState ?
      document.body.classList.add('modal-open') : document.body.classList.remove('modal-open');
    dispatch({ type: 'TOGGLE_MODAL', modalState: !modalState });
  };


  const toggleZoomify = () => {
    dispatch({ type: 'TOGGLE_ZOOMIFY', zoomify: !zoomify });
  };

  const magnify = (e) => {
    if (zoomify) {

      let imageWidth = 5000;
      let imageHeight = e.target.cssHeight * 1125;
      let ratio = imageHeight / imageWidth;
      let boxWidth = e.target.clientWidth;
      let x = e.pageX - e.target.offsetLeft;
      let y = e.pageY - e.target.offsetTop;

      let xPercent = x / (boxWidth / 100) + '%';
      let yPercent = y / (boxWidth / 100) + '%';

      Object.assign(e.target.style, {
        backgroundPosition: xPercent + ' ' + yPercent,
        backgroundSize: '150%',
        // height: '70rem',
        maxHeight: '120%',
        maxWidth: '90%',
        cursor: 'crosshair',
        objectPosition: '-9999px -9999px'
      });
    } else {
      Object.assign(e.target.style, {
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        cursor: 'crosshair',
        backgroundPosition: 'top',
        // objectFit: 'contain'
        display: 'visible',
      });
    }
  };

  let natWidth, natHeight;

  const getImgSize = (url) => {
    console.log('imgsize', url)
    let imgSrc = document.createElement('img');
    imgSrc.src = url;
    natWidth = imgSrc.naturalWidth;
    natHeight = imgSrc.naturalHeight;
    console.log(natWidth, natHeight);
  }


  // Helper Functions //
  const scrollTo = (scrollPositionFinder) => {
    let scrollContainer = document.getElementById('thumbnailGallery');
    scrollContainer.scrollTo({top: scrollPositionFinder(), behavior: 'smooth'});
  };

  const scrollPositionFinderRight = () => {
    let viewportHeight = window.innerHeight;
    let avgHeight = viewportHeight / selectedStyle.photos.length;
    return (avgHeight * (photoIndex + 1));
  };

  const scrollPositionFinderLeft = () => {
    let viewportHeight = window.innerHeight;
    let avgHeight = viewportHeight / selectedStyle.photos.length;
    return (avgHeight * (photoIndex - 1));
  };



  if (selectedStyle) {
    return (
      <Jumbotron>
        <Container>
          <Row>
            <Col xs={2} style={{height: '75vh'}}>
              <button id='navigation-vert' className='tg-top' onClick={navLeft}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-chevron-compact tg-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
                </svg>
              </button>
              <button id='navigation-vert' className='tg-bottom' onClick={navRight}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-chevron-compact tg-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                </svg>
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
            <Col xs={10} style={{justifyContent: 'center'}}>
              {photoIndex > 0 &&
            <button id='navigation' className='tg-left' onClick={navLeft}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-chevron-compact tg-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
              </svg>
            </button>}
              {photoIndex < selectedStyle.photos.length - 1 &&
            <button id='navigation' className='tg-right' onClick={navRight}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-chevron-compact tg-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
              </svg>
            </button>}
              {photoIndex >= 0 &&
                <Image id="selectedImage" src={selectedStyle.photos[photoIndex].url} onClick={toggleModal} style={{height: '75vh', objectFit: 'cover', width: '102%'}}/>}
            </Col>
          </Row>
        </Container>
        {modalState &&
        <div id="modalGallery" style={{zIndex: '1080', minWidth: '100vw', minHeight: '100vh', position: 'fixed',
          left: '0', top: '0', bottom: '0', backgroundColor: 'white', overflowY: 'scroll'}}>

          <div id="modalGallery-header">
            <button className="navigation-button-ige" onClick={toggleModal} >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="grey" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
              </svg>  BACK TO PRODUCT
            </button>

            <Row id="thumbnailGallery" style={{height: '100%', overflowX: 'scroll', width: '60vw', display: 'flex', justifyContent: 'space-between'}}>
              {selectedStyle && selectedStyle.photos.map((photo, id) => (
                <Col id='modal-thumbnail' key={id} className="mb-4">
                  {photoIndex === id ?
                    <Image id={`pIndex${id}`} className="modal-gallery" src={photo.thumbnail_url} key={id} value={photo} onClick={() => selectPhoto(photo, id)} style={{opacity: '60%'}}/>
                    :
                    <Image id={`pIndex${id}`} className="modal-gallery" src={photo.thumbnail_url} key={id} value={photo} onClick={() => selectPhoto(photo, id)} />
                  }
                </Col>
              ))}
            </Row>

            <button className="navigation-button-ige" onClick={toggleModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="grey" className='navigation-button-ige' viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </div>

          <div style={{display: 'flex', justifyContent: 'center', overflow: 'scroll'}}>
            <button id='navigation-expanded' className='tg-left-ex' onClick={navLeft}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
              </svg>
            </button>
            <button id='navigation-expanded' className='tg-right-ex' onClick={navRight}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
              </svg>
            </button>

            <img id="expandedImage" style={{
              // height: '70rem',
              maxHeight: '120%',
              // minWidth: '80%',
              maxWidth: '90%',
              zIndex: 3000,
              // objectFit: 'contain',
              backgroundImage: `url(${selectedStyle.photos[photoIndex].url})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top',
            }}
            onClick={toggleZoomify}
            onMouseMove={magnify}
            src={selectedStyle.photos[photoIndex].url}
            ref={() => getImgSize(selectedStyle.photos[photoIndex].url)}
            ></img>
            {/* <Image id="expandedImage" src={selectedStyle.photos[photoIndex].url}
              // onClick={toggleModal}
              onMouseMove={magnify}
              style={{objectFit: 'cover', minHeight: '100vh', maxHeight: '95vh', maxWidth: '70vw'}}/> */}
          </div>

        </div>
        }



        {/* <Modal
          show={modalState}
          onHide={toggleModal}
          className="imageGallery-expanded"
          dialogClassName="imageGallery-expanded-dialog"
          style={{padding: 0, minWidth: '100vw'}}
        >
          <div style={{height: '10vh', minWidth: '100vw', borderStyle: 'none'}}> {'<'}Back to product</div>
          {photoIndex >= 0 &&
            <Image id="expandedImage" src={selectedStyle.photos[photoIndex].url}
              onClick={toggleModal}
              style={{maxHeight: '100vh', objectFit: 'cover', minWidth: '70vh'}}/>}
        </Modal> */}
      </Jumbotron>
    );
  } else {
    return (<div></div>);
  }
};

export default ImageGallery;
