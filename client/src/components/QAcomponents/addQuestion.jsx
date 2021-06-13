import React from 'react';
import ReactDom from 'react-dom';

const MODAL_STYLES = {
  width: '600px',
  height: '400px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '20px',
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

let AddQuestion = ({open, onClose}) => {

  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button className='x' onClick={onClose}>X</button>
        <div className='addQuestionTitle'>Ask A Question About This Product</div>
        <div className='questionForm'>
          <div>Your Question</div>
          <input className='yourQuestion' type='text' />
          <div>Your Nickname</div>
          <input type='text' />
          <div>Your Email</div>
          <input type='email'/>
        </div>
        <div className='submitQuestion'>
          Submit Question
        </div>
      </div>
    </>,
    document.getElementById('app')
  );
};

export default AddQuestion;