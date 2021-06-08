import React, {useState} from 'react'

let Answer = (props) => {

  //state hook for helpful count
  let answer = props.answer;

  return (
    <div>
      <div>A: {answer.body}</div>
      <div>  Helpful?
        <span>  Yes {answer.helpfulness}</span>
      </div>
    </div>
  )
}

export default Answer