import React, {useState, useEffect} from 'react';
import Answer from './answer.jsx';
import AddAnswer from './addAnswer.jsx';
import axios from 'axios';
import _ from 'underscore';

let Question = ({question, PRODUCT_ID}) => {
  // console.log('input questions: ', question);
  //state hook for helpful count
  let [answers, setAnswers] = useState([]);
  let [answerCount, setAnswerCount] = useState(2);
  let [questionHelpfulness, setQuestionHelpfulness] = useState(question.question_helpfulness);
  let [helpfulClicked, setHelpfulClicked] = useState(false);
  let [reportClicked, setReportClicked] = useState(false);
  let [addAnswerIsOpen, setAddAnswerIsOpen] = useState(false);

  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';

  const auth = {
    headers: {
      Authorization: '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'
    }
  };
  let retrieveAnswers = (page, count) => {
    axios.get(`${url}/qa/questions/${question.question_id}/answers?page=${page}&count=${count}`, auth)
      .then(({data}) => {
        // console.log('answers response: ', data.results);
        let sortedAnswers = _.sortBy(data.results, (answer) => {
          return answer.helpfulness;
        });
        sortedAnswers = sortedAnswers.reverse();
        setAnswers(sortedAnswers);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // let question_id = question.question_id;

  useEffect(() => {
    retrieveAnswers(1, answerCount);
  }, []);

  let moreAnswersHandler = () => {
    // console.log('question id: ', question.question_id);
    setAnswerCount(prevAnswerCount => {
      // let currentCount = prevAnswerCount + 2;
      let currentCount = prevAnswerCount + 100;
      // console.log('current count: ', currentCount);
      // console.log('question_id: ', question.question_id);
      retrieveAnswers(1, currentCount);
      return currentCount;
    });
    // retrieveAnswers(question_id, 1, answerCount)
  };

  let helpfulClickHandler = () => {
    // console.log('clicked');
    // console.log('helpfulclicked: ', helpfulClicked);
    if (!helpfulClicked) {
      setQuestionHelpfulness(prevCount => prevCount + 1);
      setHelpfulClicked(true);
      axios.put(`${url}/qa/questions/${question.question_id}/helpful`, questionHelpfulness,
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

      axios.put(`${url}/qa/questions/${question.question_id}/report`, 'report', auth)
        .catch(err => {
          throw err;
        });
    }
  };

  return (
    <div>
      <span className='letter'>Q:</span>
      <span className='questionBody'> {question.question_body}</span>
      <span className='helpfulInfo question'>  Helpful?
        <span className='yes' onClick={helpfulClickHandler}> Yes</span>
        <span className='helpfulness'> ({questionHelpfulness}) |</span>
        <span className='report' onClick={reportClickHandler}> Report </span>
        <span className='addAnswer' onClick={() => setAddAnswerIsOpen(true)}>| Add Answer</span>
      </span>
      <div className='answersContainer'>
        {answers.map((answer, index) => {
          return <Answer answer={answer} key={index} PRODUCT_ID={PRODUCT_ID}/>;
        })}
      </div>
      <div className='moreAnswers' onClick={moreAnswersHandler}>
        Load More Answers
      </div>
      <AddAnswer question_id={question.question_id} question_body={question.question_body}
        open={addAnswerIsOpen} onClose={() => setAddAnswerIsOpen(false)}/>
    </div>
  );
};

export default Question;