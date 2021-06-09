import React, {useState, useEffect} from 'react'
import Answer from './answer.jsx'
import axios from 'axios'
import _ from 'underscore'

let Question = (props) => {

  //state hook for helpful count
  let [answers, setAnswers] = useState([])
  let [answerCount, setAnswerCount] = useState(2)

  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';

  const auth = {
    headers: {
      Authorization: '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'
    }
  }
  let retrieveAnswers = (question_id, page, count) => {
    axios.get(`${url}/qa/questions/${question_id}/answers?page=${page}&count=${count}`, auth)
      .then(({data}) => {
        console.log('answers response: ', data.results)
        let sortedAnswers = _.sortBy(data.results, (answer) => {
          return answer.helpfulness;
        })
        setAnswers(sortedAnswers.reverse())
      })
      .catch(err => {
        console.log(err)
      })
  }

  let question_id = props.question.question_id;

  useEffect(() => {
    retrieveAnswers(question_id, 1, 2)
  }, [])

  let moreAnswersHandler = () => {
    setAnswerCount(prevAnswerCount => {
      let currentCount = prevAnswerCount + 2
      retrieveAnswers(question_id, 1, currentCount)
      return currentCount;
    })
    // retrieveAnswers(question_id, 1, answerCount)
  }

  return (
    <div>
      <span>Q: {props.question.question_body}</span>
      <span>  Helpful?
        <span>  Yes {props.question.question_helpfulness}</span>
      </span>
      <div>
        {answers.map(answer => {
          return <Answer answer={answer}/>
        })}
      </div>
      <div onClick={moreAnswersHandler}>
        More Answers
      </div>
    </div>
  )
}

export default Question