import React, {useState} from 'react'

let Answer = (props) => {

  //state hook for helpful count
  let answer = props.answer;

  return (
    <div>
      <span>A: {answer.body}</span>
      <span>  Helpful?
        <span>  Yes {answer.helpfulness}</span>
      </span>
    </div>
  )
}

export default Answer