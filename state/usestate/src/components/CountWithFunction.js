import React from 'react'
import {useState} from 'react'

function CountWithFunction() {

    let [count, setCount] = useState(10)

    //custom function added
    function addOne(){
        setCount(count + 1)
    }
  return (
    <div>
        {/* Below buttons will increase silmutaneously when any is clicked */}
        {/* Solved by introducing multiple functions  */}
        <button onClick={addOne}> Count = {count} </button>
        <button onClick={addOne}> Count = {count} </button>
        <button onClick={addOne}> Count = {count} </button>
       
        
    </div>
  )
}

export default CountWithFunction