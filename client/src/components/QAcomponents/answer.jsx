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
    <div class='answer'>
      <span class='letter'>A:</span>
      <span class='answerBody'> {answer.body}</span>
      <div class='answerInfo'>  By
        <span class='userName'> {answer.answerer_name}</span>
        <span class='date'>&nbsp;{new Date(answer.date).toString().slice(4, 16)}</span>
        <span class='helpful'> | Helpful? </span>
        <span class='yes' onClick={helpfulClickHandler}> Yes</span>
        <span class='helpfulness'> ({answerHelpfulness})</span>
      </div>
    </div>
  );
};

export default Answer;