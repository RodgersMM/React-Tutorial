import React from 'react'
import {useState} from 'react'

//Step1: Create function Component 
function SingleState(){
    //calling the hook. Just a function so called as useState()
    const [count, setCount] = useState(0)
    return(
        <div>
            <button onClick={()=> setCount(count + 1)}>Count {count} </button>
        </div>
    )
}

export default SingleState