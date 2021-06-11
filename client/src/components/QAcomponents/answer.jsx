import React, {useState} from 'react';

let Answer = ({answer}) => {

  //state hook for helpful count
  // console.log('answer object: ', answer);
  let [answerHelpfulness, setAnswerHelpfulness] = useState(answer.helpfulness);
  let [helpfulClicked, setHelpfulClicked] = useState(false);
  // let date = new Date(answer.date);
  // console.log('date: ', date);
  let helpfulClickHandler = () => {

    if (!helpfulClicked) {
      setAnswerHelpfulness(prevCount => prevCount + 1);
      setHelpfulClicked(true);
    }
  };

  return (
    <div className='answer'>
      <span className='letter'>A:</span>
      <span className='answerBody'> {answer.body}</span>
      <div className='answerInfo'>  By
        <span className='userName'> {answer.answerer_name}</span>
        <span className='date'>&nbsp;{new Date(answer.date).toString().slice(4, 16)}</span>
        <span className='helpful'> | Helpful? </span>
        <span className='yes' onClick={helpfulClickHandler}> Yes</span>
        <span className='helpfulness'> ({answerHelpfulness})</span>
      </div>
    </div>
  );
};

export default Answer;