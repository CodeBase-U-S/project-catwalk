import React, {useState} from 'react';

let Search = () => {

  let [value, setValue] = useState('Have A Question? Search For Answers...')

  let handleSearchChange = (e) => {
    // console.log(e.target.value)
    let currentValue = e.target.value;
    return setValue(currentValue)
  }


  return (
    <form>
      <input type='text' value={value} onChange={handleSearchChange}/>
    </form>
  )
}




export default Search;