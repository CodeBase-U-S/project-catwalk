import React, {useState, useEffect} from 'react';
import Search from './QAcomponents/search.jsx'
import Question from './QAcomponents/question.jsx'
import axios from 'axios'

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';

const auth = {
  headers: {
    Authorization: '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'
  }
}

let QandA = () => {

  //function to get info from atelier api
  let [questions, setQuestions] = useState([])

  let retrieveQuestions = (page, count) => {
    axios.get(`${url}/qa/questions?product_id=16056&page=${page}&count=${count}`, auth)//refactor for product id input
      .then(({data}) => {
        console.log('response:', data.results)
        setQuestions(data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }


  // retrieveQuestions();
  useEffect(() => {
    retrieveQuestions(1, 2)
  }, [])



  return (
    <>
      <Search />
      <div>
        {questions.map(question => {
          // return <Question question={question.question_body} helpfulCount={question.question_helpfulness}/>//<>Questions...Answers</>
          return <Question question={question}/>
        })}
      </div>
      {/* <Question question='test question' helpfulCount={5}/> */}
    </>
  )

}


export default QandA;