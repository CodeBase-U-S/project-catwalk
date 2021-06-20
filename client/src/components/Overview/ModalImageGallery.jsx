import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Image, Jumbotron, Container, Modal, ModalDialog } from 'react-bootstrap';

const ModalImageGallery = () => {

  // States
  const dispatch = useDispatch();
  let selectedStyle = useSelector((state) => state.styleReducer.style);
  let photoIndex = useSelector((state) => state.photoReducer.photoIndex);
  let modalState = useSelector((store) => store.modalReducer.modalState);
  let zoomify = useSelector((store) => store.zoomifyReducer.zoomify);

  // Event Handler Functions //
  const selectPhoto = (photo, index) => {
    dispatch({ type: 'SET_PHOTO', photoIndex: index });
  };

  const navRight = (e) => {
    if (photoIndex < selectedStyle.photos.length - 1) {
      dispatch({ type: 'SET_PHOTO', photoIndex: photoIndex + 1});
    }
    scrollTo(scrollPositionFinderRight);
  };

  const navLeft = (e) => {
    if (photoIndex > 0) {
      dispatch({ type: 'SET_PHOTO', photoIndex: photoIndex - 1});
    }
    scrollTo(scrollPositionFinderLeft);
  };

  const toggleModal = (e) => {
    !modalState ?
      document.body.classList.add('modal-open') : document.body.classList.remove('modal-open');
    dispatch({ type: 'TOGGLE_MODAL', modalState: !modalState });
  };

  const toggleZoomify = (e) => {
    if (!zoomify) {
      zoom(e);
    } else {
      unZoom(e);
    }
    dispatch({ type: 'TOGGLE_ZOOMIFY', zoomify: !zoomify });
  };

  const zoom = (e) => {
    let boxWidth = e.target.clientWidth;
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;

    let xPercent = x / (boxWidth / 100) + '%';
    let yPercent = y / (boxWidth / 100) + '%';

    Object.assign(e.target.style, {
      backgroundPosition: xPercent + ' ' + yPercent,
      backgroundSize: '150%',
      cursor: 'zoom-out',
      objectPosition: '-9999px -9999px',
    });
  };

  const unZoom = (e) => {
    Object.assign(e.target.style, {
      backgroundSize: 'contain',
      cursor: 'crosshair',
    });
  };


  return (
    <div>
      {modalState &&
      <div id="modalGallery" style={{zIndex: '1080', minWidth: '100vw', minHeight: '100vh', position: 'fixed',
        left: '0', top: '0', bottom: '0', backgroundColor: 'white', overflowY: 'scroll'}}>

        <div id="modalGallery-header">
          <button className="navigation-button-ige" onClick={toggleModal} >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="grey" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
            </svg>  BACK TO PRODUCT
          </button>

          <Row id="modal-thumbnailGallery" style={{height: '100%', width: '60vw', display: 'flex', justifyContent: 'space-between'}}>
            {selectedStyle && selectedStyle.photos.map((photo, id) => (
              <Col id='modal-thumbnail' key={id}>
                {photoIndex === id ?
                  <Image id={`pIndex${id}`} className="modal-gallery-selected" src={photo.thumbnail_url} key={id} value={photo} onClick={() => selectPhoto(photo, id)} style={{opacity: '60%'}}/>
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
            maxHeight: '120%',
            maxWidth: '90%',
            backgroundImage: `url(${selectedStyle.photos[photoIndex].url})`,
            backgroundPosition: 'top',
          }}
          onClick={toggleZoomify}
          onMouseMove={zoomify ? zoom : undefined}
          src={selectedStyle.photos[photoIndex].url}
          ></img>
        </div>

      </div>
      }
    </div>
  );
};

export default ModalImageGallery;