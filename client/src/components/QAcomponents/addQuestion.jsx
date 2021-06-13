import React, {useState} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

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

  let [question, setQuestion] = useState('');
  let [nickname, setNickName] = useState('');
  let [email, setEmail] = useState('');

  let handleSubmit = () => {
    if (question === '') {
      return;
    }
    if (nickname === '') {
      return;
    }
    if (email === '') {
      return;
    }
    console.log('question: ', question);
    console.log('nickname: ', nickname);
    console.log('email: ', email);
  };

  let handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  let handleNickname = (e) => {
    setNickName(e.target.value);
  };

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button className='x' onClick={onClose}>X</button>
        <div className='addQuestionTitle'>Ask A Question About This Product</div>
        <div className='questionForm'>
          <div>Your Question</div>
          <textarea className='yourQuestion' type='text' onChange={handleQuestion}/>
          <div>Your Nickname</div>
          <input type='text' className='yourNickname' onChange={handleNickname} />
          <div>Your Email</div>
          <input type='email' className='yourEmail' placeholder='Example: jack@gmail.com'
            onChange={handleEmail}/>
        </div>
        <div className='submitQuestion' onClick={handleSubmit}>
          Submit Question
        </div>
      </div>
    </>,
    document.getElementById('app')
  );
};

export default AddQuestion;