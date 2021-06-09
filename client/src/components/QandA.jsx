import React, {useState, useEffect} from 'react';
import Search from './QAcomponents/search.jsx'
import Question from './QAcomponents/question.jsx'
import axios from 'axios'
import _ from 'underscore'

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';

const auth = {
  headers: {
    Authorization: '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'
  }
}

let QandA = () => {

  //function to get info from atelier api
  let [questions, setQuestions] = useState([])
  let [questionCount, setQuestionCount] = useState(2)

  let retrieveQuestions = (page, count) => {
    axios.get(`${url}/qa/questions?product_id=16056&page=${page}&count=${count}`, auth)//refactor for product id input
      .then(({data}) => {
        console.log('questions response:', data.results)
        //perform sort here
        let sortedQuestions = _.sortBy(data.results, (question) => {
          return question.question_helpfulness;
        })
        // console.log('sortedQuestions: ', sortedQuestions.reverse())
        setQuestions(sortedQuestions.reverse())
      })
      .catch(err => {
        console.log(err)
      })
  }


  // retrieveQuestions();
  useEffect(() => {
    retrieveQuestions(1, questionCount)
  }, [])

  let moreQuestionsHandler = () => {
    setQuestionCount(prevQuestionCount => {
      let currentCount = prevQuestionCount + 2
      retrieveQuestions(1, currentCount)
      return currentCount
    })
    // retrieveQuestions(1, questionCount)
  }

  return (
    <>
      <Search />
      <div>
        {questions.map(question => {
          // return <Question question={question.question_body} helpfulCount={question.question_helpfulness}/>//<>Questions...Answers</>
          return <Question question={question}/>
        })}
      </div>
      <div onClick={moreQuestionsHandler}>
        More Questions
      </div>
    </>
  )

}


export default QandA;