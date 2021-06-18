import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Image from './image.jsx';
import FullImage from './fullImage.jsx';

let Answer = ({answer}) => {

  //state hook for helpful count
  // console.log('answer object: ', answer);
  let [answerHelpfulness, setAnswerHelpfulness] = useState();
  let [helpfulClicked, setHelpfulClicked] = useState(false);
  let [reportClicked, setReportClicked] = useState(false);
  // let [fullImageIsOpen, setFullImageIsOpen] = useState(false);
  // let date = new Date(answer.date);
  // console.log('date: ', date);

  useEffect(() => {
    setAnswerHelpfulness(answer.helpfulness);
    setHelpfulClicked(false);
    setReportClicked(false);
  }, [answer]);

  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';

  const auth = {
    headers: {
      Authorization: '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'
    }
  };

  let helpfulClickHandler = () => {

    if (!helpfulClicked) {
      setAnswerHelpfulness(prevCount => prevCount + 1);
      setHelpfulClicked(true);

      axios.put(`${url}/qa/answers/${answer.answer_id}/helpful`, answerHelpfulness,
        auth)
        .then(data => {
        })
        .catch(err => {
          throw err;
        });
    }
  };

  let reportClickHandler = () => {
    if (!reportClicked) {
      setReportClicked(true);

      axios.put(`${url}/qa/answers/${answer.answer_id}/report`, 'report', auth)
        .catch(err => {
          throw err;
        });
    }
  };

  return (
    <div className='answer'>
      <span className='letter'>A:</span>
      <span className='answerBody'> {answer.body}</span>
      <div>
        {answer.photos.map((photo, index) => {
          // console.log('beasdfas;dfkaljsdfas');
          // let [fullImageIsOpen, setFullImageIsOpen] = useState(false);
          return (
            <>
              <Image src={photo.url}/>
              {/* <img key={index} style={{height: '70px', width: 'auto'}} src={photo.url}></img>&nbsp; */}
              {/* <img key={index} style={{height: '70px', width: 'auto'}} src={photo.url}
                onClick={() => setFullImageIsOpen(true)}></img>&nbsp;
              <FullImage open={fullImageIsOpen} onClose={() => setFullImageIsOpen(false)}
                src={photo.url}/> */}
            </>
          );
        })}
      </div>
      <div className='answerInfo'>  By
        <span className='userName'> {answer.answerer_name}</span>
        <span className='date'>&nbsp;{new Date(answer.date).toString().slice(4, 16)}</span>
        <span className='helpful'> | Helpful? </span>
        <span className='yes' onClick={helpfulClickHandler}> Yes</span>
        <span className='helpfulness'> ({answerHelpfulness}) |</span>
        <span className='report' onClick={reportClickHandler}> Report</span>
      </div>
    </div>
  );
};

export default Answer;