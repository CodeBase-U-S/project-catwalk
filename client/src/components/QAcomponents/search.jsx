import React, {useState} from 'react';

let Search = ({questions, setQuestions, searchQuestions}) => {
  console.log('searchQuestions in search: ', searchQuestions);
  let [value, setValue] = useState('');

  let handleSearchChange = (e) => {
    // console.log('questions:', questions);
    let currentValue = e.target.value;
    // setQuestions([questions[0]]);
    // console.log('value length: ', currentValue.length);
    if (currentValue.length >= 3) {
      let matchedQuestions = [];
      searchQuestions.forEach(question => {
        if (question.question_body.includes(currentValue)) {
          matchedQuestions.push(question);
        }
      });

      setQuestions(matchedQuestions);
    } else {
      console.log('questions in else: ', searchQuestions);
      setQuestions(searchQuestions);
    }

    return setValue(currentValue);
  };


  return (
    <form>
      <input type='text' value={value} onChange={handleSearchChange}/>
    </form>
  );
};




export default Search;