import React, {useState} from 'react'

let Question = (props) => {

  return (
    <>
      <div>Q: {props.question}</div>
      <div>Helpful?
        <div>Yes</div>
      </div>
    </>
  )
}

export default Question