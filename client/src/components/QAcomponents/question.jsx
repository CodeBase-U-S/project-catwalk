import React, {useState} from 'react'

let Question = (props) => {

  //state hook for helpful count

  return (
    <div>
      <span>Q: {props.question}</span>
      <span>  Helpful?
        <span>  Yes {props.helpfulCount}</span>
      </span>
    </div>
  )
}

export default Question