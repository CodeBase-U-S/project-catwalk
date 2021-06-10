import React, {useState} from 'react';

let Answer = ({answer}) => {

  //state hook for helpful count

  let [answerHelpfulness, setAnswerHelpfulness] = useState(answer.helpfulness);
  let [helpfulClicked, setHelpfulClicked] = useState(false);

  let helpfulClickHandler = () => {

    if (!helpfulClicked) {
      setAnswerHelpfulness(prevCount => prevCount + 1);
      setHelpfulClicked(true);
    }
  };

  return (
    <div>
      <span>A: {answer.body}</span>
      <span>  Helpful?
        <span onClick={helpfulClickHandler}>Yes</span>
        <span>{answerHelpfulness}</span>
      </span>
    </div>
  );
};

export default Answer;