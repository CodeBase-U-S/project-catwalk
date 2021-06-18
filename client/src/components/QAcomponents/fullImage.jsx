import React, {useState} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

// const MODAL_STYLES = {
//   width: '600px',
//   height: '400px',
//   position: 'fixed',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   backgroundColor: '#FFF',
//   padding: '20px',
//   zIndex: 1000
// };

// const OVERLAY_STYLES = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: 'rgba(0, 0, 0, .5)',
//   zIndex: 1000
// };

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';

const auth = {
  headers: {
    Authorization: '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'
  }
};

let FullImage = ({open, onClose, src}) => {
  // console.log('src: ', src);
  if (!open) {
    return null;
  }
  // console.log('src: ', src);
  const MODAL_STYLES = {
    maxWidth: '600px',
    maxHeight: '400px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '7px',
    zIndex: 1000
  };

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  };

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose}/>
      <div style={MODAL_STYLES}>
        <img src={src} style={MODAL_STYLES}></img>
        {/* <button className='x' onClick={onClose}>X</button> */}
      </div>
    </>,
    document.getElementById('app')
  );
};

export default FullImage;